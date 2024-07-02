import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AuctionDescription from '../components/AuctionDescription';
import TenderInput from '../components/TenderInput';
import TenderList from '../components/TenderList';
// import axios from 'axios';

const WrapAuctionDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  /* background-color: red; */
`;

export default function AuctionDetail() {
  const [tenders, setTenders] = useState([
    { title: 'title1', id: 'id1', password: '123', price: '1000', url: 'url1', info: 'info1' },
    { title: 'title2', id: 'id2', password: '321', price: '2000', url: 'url2', info: 'info2' },
  ]);
  const { auctionId } = useParams();

  useEffect(() => {
    //   axios
    //     .get('')
    //     .then((res) => setTenders(res.data))
    //     .catch((e) => console.log(e));
    saveHistory(auctionId);
  }, []);

  const saveHistory = (tmpId) => {
    var arr = sessionStorage.getItem('history');
    arr = JSON.parse(arr);

    arr.push(tmpId);
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
        <AuctionDescription />
        <TenderInput tenders={tenders} setTenders={setTenders} />
        <h1>입찰 정보창</h1> {/* 임시 */}
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
        <div>Auction Id: {auctionId}</div>
      </WrapAuctionDetail>
    </>
  );
}
