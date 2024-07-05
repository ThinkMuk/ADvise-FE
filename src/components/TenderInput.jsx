import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
  padding: 10px 30px 30px 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  /* color: #0c964a; */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #79cf9f;
  }
`;

const LargeInput = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #79cf9f;
  }
`;

const SmallInput = styled.input`
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #79cf9f;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const TenderButton = styled.button`
  padding: 10px;
  background-color: #3cb371;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0c964a;
  }
`;

export default function TenderInput({ tenders, setTenders, auctionId }) {
  const InitTenderData = {
    identifier: '',
    pwd: '',
    title: '',
    url: '',
    info: '',
    price: '',
  };
  const [tenderData, setTenderData] = useState(InitTenderData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenderData({
      ...tenderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, pwd, title, url, info, price } = tenderData;

    if (!identifier || !pwd || !title || !url || !info || !price) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const tenderDataWithNumber = {
      ...tenderData,
      price: Number(price), // price를 숫자형으로 변환
    };

    try {
      setTenders([...tenders, tenderDataWithNumber]);
      setTenderData(tenderDataWithNumber);
      const response = await axios.post(
        `https://advise.kro.kr/dutch/ads/${auctionId}/proposals/`,
        tenderDataWithNumber
      );
      console.log('성공:', response.data);
      alert(`${tenderDataWithNumber.identifier}님의 입찰 신청이 완료되었습니다`);
      window.location.reload(); // 페이지 새로고침
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>제목:</Label>
          <Input
            type='text'
            name='title'
            value={tenderData.title}
            onChange={handleChange}
            placeholder='제목을 입력하세요'
          />
        </div>
        <FlexContainer>
          <div>
            <Label>제시가격 (₩):</Label>
            <Input
              type='number'
              name='price'
              value={tenderData.price}
              onChange={handleChange}
              placeholder='희망하시는 가격을 입력해주세요'
              min='0'
            />
          </div>
        </FlexContainer>
        <div>
          <Label>URL (Youtube, Instagram):</Label>
          <Input type='text' name='url' value={tenderData.url} onChange={handleChange} placeholder='https://...' />
        </div>
        <div>
          <Label>세부정보:</Label>
          <LargeInput name='info' value={tenderData.info} onChange={handleChange} />
        </div>
        <FlexContainer>
          <div>
            <Label>ID:</Label>
            <SmallInput type='text' name='identifier' value={tenderData.identifier} onChange={handleChange} />
          </div>
          <div>
            <Label>Password:</Label>
            <SmallInput type='password' name='pwd' value={tenderData.pwd} onChange={handleChange} />
          </div>
        </FlexContainer>
        <TenderButton type='submit'>입찰하기</TenderButton>
      </Form>
    </Container>
  );
}
