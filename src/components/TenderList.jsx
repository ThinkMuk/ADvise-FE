import React, { useState } from 'react';
// import axios from 'axios';

export default function TenderList({ title, id, password, price, url, info, deleteTender }) {
  const [inputPassword, setInputPassword] = useState('');

  const handleDelete = async () => {
    if (inputPassword !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      // 서버에 DELETE 요청 보내기
      // await axios.delete(`서버주소/${tender.id}`);
      deleteTender(id);
      alert('입찰이 취소되었습니다');
    } catch (err) {
      console.error('삭제 실패:', err);
    }
  };

  return (
    <div>
      {title}, {id}, {password}, {price}, {url}, {info}
      <div>
        <input
          type='password'
          placeholder='비밀번호 입력'
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handleDelete}>입찰 취소</button>
      </div>
    </div>
  );
}
