import React, { useState } from 'react';
import styled from 'styled-components';

const WrapAuctionDescription = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const WrapDisplayImage = styled.div`
  background-color: lightgray;
  flex: 3;
`;

const WrapDisplayDescription = styled.div`
  background-color: light;
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 30px;

  h2 {
    color: #0c964a;
    margin: 10px 0;
  }
  h3 {
    color: #3cb371;
    margin: 10px 0;
  }
  p {
    margin: 10px 0;
  }
`;

const Divider = styled.div`
  width: 1px; /* 회색 줄의 너비를 2px로 설정 */
  background-color: #eee; /* 회색 줄의 색상 설정 */
`;

export default function AuctionDescription() {
  const [auctionTitle, setAuctionTitle] = useState('Title');
  const [auctionContent, setAuctionContent] = useState('Content');
  const [auctionMinimumPrice, setAuctionMinimumPrice] = useState('50,000');
  return (
    <WrapAuctionDescription>
      <WrapDisplayImage></WrapDisplayImage>
      <Divider />
      <WrapDisplayDescription>
        <h2>{auctionTitle}</h2>
        <h3>최저: {auctionMinimumPrice} ₩</h3>
        <p>{auctionContent}</p>
      </WrapDisplayDescription>
    </WrapAuctionDescription>
  );
}
