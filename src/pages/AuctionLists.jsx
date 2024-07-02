import React, { useEffect } from 'react';
import AuctionList from '../components/AuctionList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  height: 1000px;
`;

const AuctionLists = () => {
  const { keyword } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('history') === null) {
      sessionStorage.setItem('history', JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <div>{keyword}</div>
      <Container>
        <AuctionList />
      </Container>
    </>
  );
};

export default AuctionLists;
