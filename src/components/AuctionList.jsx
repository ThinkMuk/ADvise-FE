import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const WrapGridContiner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1080px;
  height: 950px;
  position: absolute;
`;

const FormContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  left: 4px;
  top: 7px;
  cursor: pointer;

  &:hover {
    border: 1px solid #79cf9f;
  }
`;


const AuctionList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/AuctionDetail`);
  };

  const boxes = Array.from({ length: 6 }, (_, index) => (
    <FormContainer key={index} onClick={handleClick} />
  )); //박스 갯수 조정

  return (
    <>
      <WrapGridContiner>
        <GridContainer>
          {boxes}
         
        </GridContainer>
      </WrapGridContiner>
    </>
  );
};

export default AuctionList;
