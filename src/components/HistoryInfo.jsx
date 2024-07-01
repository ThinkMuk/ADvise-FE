import React from 'react';
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

const TitleText=styled.div`
  font-size: 20px;
  font-weight: bold;
  left: 20px; 

`
export default function HistoryInfo() {
  const navigate=useNavigate();
  const historyItems = ['title1','title2','title3','title4','title5','title6','title7','title8','title9']; // 임의 배열!

  const handleClick= (title)=>{
    navigate(`/AuctionLists/${title}`);
  }; //주소 이동

  return (
    <>
      <WrapHistory>
        {historyItems.map((title,index) => (
          <HistoryBox key={index} onClick={()=>handleClick(title)}>
            <TitleText>{title}</TitleText>
          </HistoryBox>  
        ))}
      </WrapHistory>
    </>
  );
}
