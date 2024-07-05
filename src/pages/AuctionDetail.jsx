import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [tenders, setTenders] = useState([]);
  const [auctionData, setAuctionData] = useState({});
  const { auctionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [auctionData, tenders] = await axios.all([
          axios.get(`https://advise.kro.kr/dutch/ads/${auctionId}`),
          axios.get(`https://advise.kro.kr/dutch/ads/${auctionId}/proposals/all/`),
        ]);
        setAuctionData(auctionData.data);
        console.log(auctionData.data.image_url);
        setTenders(tenders.data);
        // console.log(tenders.data);
        saveHistory(auctionId, auctionData.data.title, auctionData.data.minimum_price);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const saveHistory = (auctionId, auctionTitle, auctionMPrice) => {
    var arr = sessionStorage.getItem('history');
    arr = JSON.parse(arr);
    arr.push([auctionId, auctionTitle, auctionMPrice]);
    arr = new Set(arr);
    arr = [...arr];
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
        <TenderInput tenders={tenders} setTenders={setTenders} auctionId={auctionId} />
        <AuctionDetailTitle>입찰 정보창</AuctionDetailTitle>
        {tenders &&
          tenders.map((tender, idx) => (
            <TenderList
              title={tender.title}
              identifier={tender.identifier}
              pwd={tender.pwd}
              price={tender.price}
              url={tender.url}
              info={tender.info}
              key={idx}
              deleteTender={deleteTender}
              auctionId={auctionId}
              id={tender.id}
            />
          ))}
        {/* PostAd id표시 <div>Auction Id: {auctionId}</div> */}
      </WrapAuctionDetail>
    </>
  );
}
