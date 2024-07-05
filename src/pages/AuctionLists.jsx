import React, { useEffect, useState } from "react";
import AuctionList from "../components/AuctionList";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const WrapGridContainer = styled.div`
  max-width: 1080px;
  height: 1200px;
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

const EmptyMessage = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #0c964a;
`;

// const formItems = [
//   { id: 'id1', title: '1', minimum_price: '1', content: '1', imageURL: '1' },
//   { id: 'id2', title: '2', minimum_price: '2', content: '2', imageURL: '2' },
//   { id: 'id3', title: '3', minimum_price: '3', content: '3', imageURL: '3' },
//   { id: 'id4', title: '4', minimum_price: '4', content: '4', imageURL: '4' },
//   { id: 'id5', title: '5', minimum_price: '5', content: '5', imageURL: '5' },
//   { id: 'id6', title: '6', minimum_price: '6', content: '6', imageURL: '6' },
// ];

const AuctionLists = () => {
  const { keyword } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem("history") === null) {
      sessionStorage.setItem("history", JSON.stringify([]));
    }
  }, []);

  const [auctionList, setAuctionList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://advise.kro.kr/dutch/`)
      .then((res) => {
        setAuctionList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [filteredAuctions, setFilteredAuctions] = useState([]);

  useEffect(() => {
    if (keyword) {
      const filtered = auctionList.filter((auction) =>
        auction.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredAuctions(filtered);
    } else {
      setFilteredAuctions(auctionList);
    }
  }, [keyword, auctionList]);

  return (
    <WrapGridContainer>
      {filteredAuctions.length > 0 ? (
        <GridContainer>
          {filteredAuctions.map((item) => (
            <AuctionList
              key={item.id}
              id={item.id}
              image={item.image_url}
              title={item.title}
              minimum_price={item.minimum_price}
              content={item.content}
            />
          ))}
        </GridContainer>
      ) : (
        <EmptyMessage>검색어에 맞는 게시물이 없습니다.</EmptyMessage>
      )}
    </WrapGridContainer>
  );
};

export default AuctionLists;
