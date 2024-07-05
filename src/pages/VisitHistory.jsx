import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  WrapHistory,
  HistoryInfo,
  WrapContainer,
  ClearButton,
} from "../components/HistoryInfo";

export default function VisitHistory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(sessionStorage.getItem("history"));
    if (storedHistory) {
      setHistory(storedHistory);
    }
  }, []);

  const handleClick = (title) => {
    navigate(`/AuctionDetail/${title}`);
  }; // 주소 이동

  return (
    <WrapContainer>
      <WrapHistory>
        {[...history].reverse().map((id, index) => (
          <HistoryInfo
            key={index}
            title={id[1]}
            minimum_price={parseInt(id[2], 10).toLocaleString()}
            onClick={() => handleClick(id[0])}
          />
        ))}
        <ClearButton
          onClick={() => {
            sessionStorage.setItem("history", JSON.stringify([]));
            setHistory([]);
          }}
        >
          Clear History
        </ClearButton>
      </WrapHistory>
    </WrapContainer>
  );
}

//추후 id1 이 아닌 타이틀과 최저 가격이 뜨게끔 수정 해야함
