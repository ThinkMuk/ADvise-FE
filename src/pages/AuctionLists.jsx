import React from 'react';
import AuctionList from "../components/AuctionList";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Container = styled.div`
  height: 1000px;
`

const AuctionLists =() => {
  
  const { keyword } = useParams();

  
  return(
      <>
      <div>{keyword}</div>
      <Container>
      <AuctionList></AuctionList>
      </Container>
      </>
  );
};


export default AuctionLists;