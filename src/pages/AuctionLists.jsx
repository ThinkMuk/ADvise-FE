import React, { useEffect, useState } from "react";
import AuctionList from "../components/AuctionList";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



const WrapGridContainer = styled.div`
  max-width: 1080px;
  height: 1000px;
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
  { id: "id1", title: "", minimum_price: "", content: "" },
  { id: "id2", title: "", minimum_price: "", content: "" },
  { id: "id3", title: "", minimum_price: "", content: "" },
  { id: "id4", title: "", minimum_price: "", content: "" },
  { id: "id5", title: "", minimum_price: "", content: "" },
  { id: "id6", title: "", minimum_price: "", content: "" },
];

const AuctionLists = () => {
  const { keyword } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('history') === null) {
      sessionStorage.setItem('history', JSON.stringify([]));
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/AuctionDetail/${id}`);
  };
  

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
              onClick={() => handleClick(item.id)}
            ></AuctionList>
          ))}
          <div>{keyword}</div>
        </GridContainer>
      </WrapGridContainer>
    </>
  );
};

export default AuctionLists;
