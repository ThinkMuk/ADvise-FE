import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AuctionDescription from '../components/AuctionDescription';
import TenderInput from '../components/TenderInput';
import TenderList from '../components/TenderList';
import axios from 'axios';

const WrapAuctionDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 100px;
  /* background-color: red; */
`;

const AuctionDetailTitle = styled.h1`
  margin: 10px 0;
  /* color: #3cb371; */
  /* text-align: center; */
`;

export default function AuctionDetail() {
  const [tenders, setTenders] = useState([
    { title: 'title1', id: 'id1', password: '123', price: '1000', url: 'http://google.com', info: 'info1' },
    { title: 'title2', id: 'id2', password: '321', price: '2000', url: 'http://google.com', info: 'info2' },
  ]);
  const [auctionData, setAuctionData] = useState({});
  const { auctionId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const [auctionData, tenders] = await axios.all([axios.get(''), axios.get('')]);
    //     setAuctionData(auctionData.data);
    //     setTenders(tenders.data);
    saveHistory(auctionId, auctionData.title, auctionData.minimum_price);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
  }, []);

  const saveHistory = (auctionId, auctionTitle, auctionMPrice) => {
    var arr = sessionStorage.getItem('history');
    arr = JSON.parse(arr);

    arr.push([auctionId, auctionTitle, auctionMPrice]);
    arr = new Set(arr);
    arr = [...arr];
    console.log(arr);
    sessionStorage.setItem('history', JSON.stringify(arr));
  };

  const deleteTender = (id) => {
    setTenders(tenders.filter((tender) => tender.id !== id));
  };
  return (
    <>
      <WrapAuctionDetail>
        <AuctionDescription auctionData={auctionData} />
        <AuctionDetailTitle>입찰하기</AuctionDetailTitle>
        <TenderInput tenders={tenders} setTenders={setTenders} />
        <AuctionDetailTitle>입찰 정보창</AuctionDetailTitle>
        {tenders &&
          tenders.map((tender) => (
            <TenderList
              title={tender.title}
              id={tender.id}
              password={tender.password}
              price={tender.price}
              url={tender.url}
              info={tender.info}
              key={tender.id}
              deleteTender={deleteTender}
            />
          ))}
        {/* PostAd id표시 <div>Auction Id: {auctionId}</div> */}
      </WrapAuctionDetail>
    </>
  );
}
