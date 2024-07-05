import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WrapUploadCommercial = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 100px;
`;

const TitleUploadCommercial = styled.h1`
  margin: 10px 0;
`;

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

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-top: 20px;
`;

export default function UploadCommercial() {
  const [formCommercial, setFormCommercial] = useState({
    title: '',
    minimum_price: '',
    content: '',
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCommercial({
      ...formCommercial,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormCommercial({
      ...formCommercial,
      image: file,
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, minimum_price, content, image } = formCommercial;

    if (!title || !minimum_price || !content || !image) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const SendFormData = new FormData();
    SendFormData.append('title', title);
    SendFormData.append('content', content);
    SendFormData.append('minimum_price', minimum_price);
    SendFormData.append('image', image);

    console.log(SendFormData);
    try {
      const response = await axios.post('https://advise.kro.kr/dutch/ads/', SendFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('성공:', response.data);
    } catch (err) {
      console.error('에러:', err);
    }
  };

  return (
    <WrapUploadCommercial>
      <TitleUploadCommercial>광고 제의하기</TitleUploadCommercial>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>제목:</Label>
            <Input type='text' name='title' value={formCommercial.title} onChange={handleChange} />
          </div>
          <FlexContainer>
            <div>
              <Label>최소 가격:</Label>
              <Input type='number' name='minimum_price' value={formCommercial.minimum_price} onChange={handleChange} />
            </div>
          </FlexContainer>
          <div>
            <Label>내용:</Label>
            <LargeInput name='content' value={formCommercial.content} onChange={handleChange}></LargeInput>
          </div>
          <div>
            <Label>이미지:</Label>
            <input type='file' name='image' onChange={handleFileChange} />
            <br />
            {previewUrl && <PreviewImage src={previewUrl} alt='미리보기 이미지' />}
          </div>
          <TenderButton type='submit'>업로드</TenderButton>
        </Form>
      </Container>
    </WrapUploadCommercial>
  );
}
