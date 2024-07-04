import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const WrapTenderList = styled.div`
  height: auto;
  transition: transform 0.2s;

  margin: 10px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(180, 218, 197);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(180, 218, 197, 0.5) 0px 2px 8px;
    transform: scale(1.01);
  }
`;

const TenderTitle = styled.h3`
  margin: 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const TenderId = styled.div`
  color: #888888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const TenderURL = styled.a`
  margin-top: 7px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  text-decoration-line: none;
  color: #0c964a;

  &:hover {
    text-decoration-line: underline;
  }
`;

const TenderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TenderDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const TenderDetailRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteInput = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-right: none;
  font-size: 12px;
  width: 70%;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus {
    outline: 2px solid #79cf9f;
  }
`;

const DeleteButton = styled.button`
  padding: 3px;
  font-size: 12px;
  width: 30%;
  background-color: #3cb371;
  color: white;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0c964a;
  }
`;

const Info = styled.div`
  height: ${({ expanded }) => (expanded ? 'auto' : '0')};
  transition: height 0.2s ease-in-out;
  margin-top: 10px;
  /* 줄바꿈 */
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export default function TenderList({ title, id, password, price, url, info, deleteTender }) {
  const [inputPassword, setInputPassword] = useState('');
  const [expanded, setExpanded] = useState(false);
  const infoRef = useRef(null);

  //말줄임표 함수
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  //입찰 신청글 삭제함수
  const handleDelete = async () => {
    if (inputPassword !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      // 서버에 DELETE 요청 보내기
      // await axios.delete(`서버주소/${id}`);
      deleteTender(id);
      alert('입찰이 취소되었습니다');
    } catch (err) {
      console.error('삭제 실패:', err);
    }
  };

  // ref를 통해 애니메이션 구현
  useEffect(() => {
    if (expanded) {
      infoRef.current.style.height = `${infoRef.current.scrollHeight}px`;
    } else {
      infoRef.current.style.height = '0';
    }
  }, [expanded]);

  return (
    <WrapTenderList onClick={() => setExpanded(!expanded)}>
      <TenderDetail>
        <TenderDetailLeft>
          <TenderTitle>{truncateText(title, 50)}</TenderTitle>
          <TenderId>{truncateText(id, 50)}</TenderId>
          <TenderURL href={url} target='_blank'>
            {truncateText(url, 80)}
          </TenderURL>
        </TenderDetailLeft>
        <TenderDetailRight>
          <div>제시가격: {price} ₩</div>
          <div>
            <DeleteInput
              type='password'
              placeholder='비밀번호 입력'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              입찰 취소
            </DeleteButton>
          </div>
        </TenderDetailRight>
      </TenderDetail>
      <Info expanded='expanded' ref={infoRef}>
        {info}
      </Info>
    </WrapTenderList>
  );
}
