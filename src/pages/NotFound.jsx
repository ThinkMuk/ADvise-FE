import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WrapNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledFaRegQuestionCircle = styled(FaRegQuestionCircle)`
  font-size: 100px;
  margin-bottom: 40px;
  color: #b6e7cc;
`;

const NotFoundText = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #b6e7cc;
`;

const GoBackButton = styled.button`
  padding: 3px;
  font-size: 12px;
  width: 10%;
  background-color: #3cb371;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0c964a;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <WrapNotFound>
      <StyledFaRegQuestionCircle />
      <NotFoundText>Not Found</NotFoundText>
      <GoBackButton onClick={() => navigate(-1)}>이전 페이지로 돌아가기</GoBackButton>
    </WrapNotFound>
  );
}
