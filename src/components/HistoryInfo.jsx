import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const WrapHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const HistoryBox = styled.div`
  width: 1000px;
  height: 30px;
  background-color: #fbfffa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  left: 20px;
`;
export default function HistoryInfo() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(JSON.parse(sessionStorage.getItem('history')));
  const handleClick = (title) => {
    navigate(`/AuctionDetail/${title}`);
  }; //주소 이동

  return (
    <>
      <WrapHistory>
        {history.map((id, index) => (
          <HistoryBox key={index} onClick={() => handleClick(id)}>
            <TitleText>{id}</TitleText>
          </HistoryBox>
        ))}
        <button
          onClick={() => {
            sessionStorage.setItem('history', JSON.stringify([]));
            setHistory([]);
          }}
        >
          Clear History
        </button>
      </WrapHistory>
    </>
  );
}
