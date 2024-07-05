import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { WrapContainer, AuctionList } from "../components/AuctionList"; // import 수정

const WrapGridContainer = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  flex-grow: 1; /* 컨테이너가 남은 공간을 채우도록 설정 */
  flex-direction: column; /* 수직으로 컨텐츠를 배치 */
  margin-bottom: 100px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  height: auto; /* 높이를 자동으로 조절 */
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
    <WrapContainer>
      <WrapGridContainer>
        {filteredAuctions.length > 0 ? (
          <GridContainer>
            {filteredAuctions.map((item) => (
              <AuctionList
                key={item.id}
                id={item.id}
                image={item.image_url}
                title={item.title}
                minimum_price={parseInt(item.minimum_price).toLocaleString()}
                content={item.content}
              />
            ))}
          </GridContainer>
        ) : (
          <EmptyMessage>검색어에 맞는 게시물이 없습니다.</EmptyMessage>
        )}
      </WrapGridContainer>
    </WrapContainer>
  );
};

export default AuctionLists;
