import React from 'react';
import { useParams } from 'react-router-dom';

export default function AuctionLists() {
  const { keyword } = useParams();
  return <div>AuctionLists {keyword}</div>;
}
