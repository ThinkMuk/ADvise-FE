import React from "react";
import styled from "styled-components";

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

const WrapHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  padding: 16px;
  margin: 0 auto;
  flex-grow: 1;
`;

const HistoryBox = styled.div`
  width: 1080px;
  height: 50px;
  background-color: #fbfffa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(180, 218, 197, 0.5) 0px 2px 8px;
    transform: scale(1.01);
  }
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 800px; /* 고정 너비 설정 */
`;

const PriceText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0c964a;
  white-space: nowrap;
  margin-left: 20px; /* 적당한 여백 설정 */
`;

const ClearButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 50px;
  width: 100px;
  background-color: #3cb371;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;

  &:hover {
    background-color: #0c964a;
  }
`;

function HistoryInfo({ title, minimum_price, onClick }) {
  return (
    <HistoryBox onClick={() => onClick(title)}>
      <TitleText>{title}</TitleText>
      <PriceText>최저가격: {minimum_price}</PriceText>
    </HistoryBox>
  );
}

export {
  WrapHistory,
  HistoryBox,
  TitleText,
  HistoryInfo,
  WrapContainer,
  ClearButton,
};
