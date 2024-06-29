import React from 'react';
import { useParams } from 'react-router-dom';

export default function AuctionDetail() {
  const { auctionId } = useParams();
  return <div>AuctionDetail {auctionId}</div>;
}
