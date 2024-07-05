import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 최소 화면 높이 */
  height: auto; /* 자동으로 컨테이너 높이 조정 */
  padding-bottom: 50px; /* 푸터 공간 확보 */
`;

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
  height: 450px;

  &:hover {
    border: 1px solid #79cf9f;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  //background-color: #f8a9a9;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* 이미지가 박스를 벗어나지 않도록 조절 */
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
    <>
      <FormContainer onClick={handleClick}>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <ContentWrapper>
          <Title>제목: {title}</Title>
          <MinimumPrice>최저: {minimum_price} ₩</MinimumPrice>
          <Content>내용: {content}</Content>
        </ContentWrapper>
      </FormContainer>
    </>
  );
};

export { WrapContainer, AuctionList };
