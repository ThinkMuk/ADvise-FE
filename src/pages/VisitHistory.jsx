import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WrapHistory, HistoryInfo } from '../components/HistoryInfo';

export default function VisitHistory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(JSON.parse(sessionStorage.getItem('history')));

  const handleClick = (title) => {
    navigate(`/AuctionDetail/${title}`);
  }; // 주소 이동

  return (
    <WrapHistory>
      {history.map((id, index) => (
        <HistoryInfo key={index} title={id} onClick={handleClick} />
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
  );
}
