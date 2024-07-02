import React, { useState } from "react";
import styled from "styled-components";


const FormContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 1px solid #79cf9f;
  }
`;


const ContentWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.3rem;
  position: absolute;
  top: 10px;
`;

const MinimumPrice = styled.p`
  margin: 10px 0 0;
  color: #3CB371;
  font-size: 1rem;
  position: absolute;
  top: 40px;
`;

const Content = styled.p`
  margin: 5px 0 0;
  color: #666;
  font-size: 0.9rem;
  position: absolute;
  top: 100px;
`;

const AuctionList = ({onClick}) => {
  

  const [title,setTitle] = useState('');
  const [minimum_price, setMinimum_price] = useState('');
  const [content, setContent] =useState('');

  return (  
   <FormContainer onClick={onClick}>    
   <ContentWrapper>
      <Title>제목 : 멋사빌딩 옥외 광고 제안{title}</Title>
      <MinimumPrice>최저 : 999999 {minimum_price} ₩</MinimumPrice>
      <Content>content : 멋쟁이 사자처럼 본사 건물의 옥외 빌딩 광고를 제안합니다.{content}</Content>
   </ContentWrapper>
   </FormContainer> 
          
  );
};

export default AuctionList;
