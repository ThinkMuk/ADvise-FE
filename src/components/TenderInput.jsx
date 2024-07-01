import React, { useState } from 'react';
// import axios from 'axios';

export default function TenderInput({ tenders, setTenders }) {
  const [tenderData, setTenderData] = useState({
    title: '',
    id: '',
    password: '',
    price: '',
    url: '',
    info: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenderData({
      ...tenderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, id, password, price, url, info } = tenderData;

    if (!title || !id || !password || !price || !url || !info) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      console.log(tenderData);
      console.log(tenders);
      setTenders([...tenders, tenderData]);
      // const response = await axios.post('서버주소', tenderData);
      // console.log('성공:', response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>입찰하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input type='text' name='title' value={tenderData.title} onChange={handleChange} />
        </div>
        <div>
          <label>ID:</label>
          <input type='text' name='id' value={tenderData.id} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' name='password' value={tenderData.password} onChange={handleChange} />
        </div>
        <div>
          <label>제시가격:</label>
          <input type='number' name='price' value={tenderData.price} onChange={handleChange} />
        </div>
        <div>
          <label>URL (Youtube, Instagram):</label>
          <input type='text' name='url' value={tenderData.url} onChange={handleChange} />
        </div>
        <div>
          <label>세부정보:</label>
          <input type='text' name='info' value={tenderData.info} onChange={handleChange} />
        </div>
        <button type='submit'>입찰하기</button>
      </form>
    </>
  );
}
