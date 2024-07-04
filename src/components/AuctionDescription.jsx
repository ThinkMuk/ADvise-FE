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
  /* background-color: lightgray; */
  flex: 3;
`;

const DisplayImage = styled.div`
  background-color: lightgray;
  margin: 10px;
  /* width: 100%; */
  height: 95%;
  box-sizing: border-box;
  border-radius: 5px;
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

export default function AuctionDescription({ state }) {
  return (
    <WrapAuctionDescription>
      <WrapDisplayImage>
        <DisplayImage src={state.imageURL} />
      </WrapDisplayImage>
      <Divider />
      <WrapDisplayDescription>
        <h2>{state.title}</h2>
        <h3>최저: {state.minimum_price} ₩</h3>
        <p>{state.content}</p>
      </WrapDisplayDescription>
    </WrapAuctionDescription>
  );
}
