import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  cursor: pointer;
  height: 450px; /* 고정 높이 설정 */

  &:hover {
    border: 1px solid #79cf9f;
  }
`;

const Image = styled.img`
  background-color: #f8a9a9;
  height: 300px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  margin: 10px 0 0;
  color: #333;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MinimumPrice = styled.p`
  margin: 10px 0 0;
  color: #3cb371;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.p`
  margin: 5px 0 0;
  color: #666;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AuctionList = ({ id, image, title, minimum_price, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/AuctionDetail/${id}`);
  };

  return (
    <FormContainer onClick={handleClick}>
      <Image src={image} />
      <ContentWrapper>
        <Title>제목: {title}</Title>
        <MinimumPrice>최저: {minimum_price} ₩</MinimumPrice>
        <Content>내용: {content}</Content>
      </ContentWrapper>
    </FormContainer>
  );
};

export default AuctionList;
