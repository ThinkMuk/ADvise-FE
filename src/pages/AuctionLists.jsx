import React, { useEffect, useState } from 'react';
import AuctionList from '../components/AuctionList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WrapGridContainer = styled.div`
  max-width: 1080px;
  height: 1100px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1080px;
  height: 950px;
  position: relative;
  top: 50px;
`;

const formItems = [
  { id: 'id1', title: '1', minimum_price: '1', content: '1', imageURL: '1' },
  { id: 'id2', title: '2', minimum_price: '2', content: '2', imageURL: '2' },
  { id: 'id3', title: '3', minimum_price: '3', content: '3', imageURL: '3' },
  { id: 'id4', title: '4', minimum_price: '4', content: '4', imageURL: '4' },
  { id: 'id5', title: '5', minimum_price: '5', content: '5', imageURL: '5' },
  { id: 'id6', title: '6', minimum_price: '6', content: '6', imageURL: '6' },
];

const AuctionLists = () => {
  const { keyword } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('history') === null) {
      sessionStorage.setItem('history', JSON.stringify([]));
    }
  }, []);

  /*const [auctionList, setAuctionList] = useState([]);

   useEffect(()=> {
    axios
    .get(``)
    .then((res)=> {
      setAuctionList(res.data);
    })
    .catch((err)=> {
      console.log(e);
    })
  },[]);*/

  return (
    <>
      <WrapGridContainer>
        <GridContainer>
          {formItems.map((item) => (
            <AuctionList
              key={item.id}
              id={item.id}
              imageURL={item.imageURL}
              title={item.title}
              minimum_price={item.minimum_price}
              content={item.content}
            ></AuctionList>
          ))}
          <div>{keyword}</div>
        </GridContainer>
      </WrapGridContainer>
    </>
  );
};

export default AuctionLists;
