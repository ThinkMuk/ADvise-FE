import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
`;

const TenderTitle = styled.h1`
  /* color: #3cb371; */
  text-align: center;
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
`;

const LargeInput = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`;

const SmallInput = styled.input`
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
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
  cursor: pointer;

  &:hover {
    background-color: #0c964a;
  }
`;

export default function TenderInput({ tenders, setTenders }) {
  const InitTenderData = {
    title: '',
    id: '',
    password: '',
    price: '',
    url: '',
    info: '',
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
    const { title, id, password, price, url, info } = tenderData;

    if (!title || !id || !password || !price || !url || !info) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    try {
      setTenders([...tenders, tenderData]);
      setTenderData(InitTenderData);
      // const response = await axios.post('서버주소', tenderData);
      // console.log('성공:', response.data);
      alert(`${tenderData.id}님의 입찰 신청이 완료되었습니다`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <TenderTitle>입찰하기</TenderTitle>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>제목:</Label>
          <Input type='text' name='title' value={tenderData.title} onChange={handleChange} />
        </div>
        <FlexContainer>
          <div>
            <Label>제시가격:</Label>
            <Input type='number' name='price' value={tenderData.price} onChange={handleChange} />
          </div>
        </FlexContainer>
        <div>
          <Label>URL (Youtube, Instagram):</Label>
          <Input type='text' name='url' value={tenderData.url} onChange={handleChange} />
        </div>
        <div>
          <Label>세부정보:</Label>
          <LargeInput name='info' value={tenderData.info} onChange={handleChange} />
        </div>
        <FlexContainer>
          <div>
            <Label>ID:</Label>
            <SmallInput type='text' name='id' value={tenderData.id} onChange={handleChange} />
          </div>
          <div>
            <Label>Password:</Label>
            <SmallInput type='password' name='password' value={tenderData.password} onChange={handleChange} />
          </div>
        </FlexContainer>
        <TenderButton type='submit'>입찰하기</TenderButton>
      </Form>
    </Container>
  );
}
