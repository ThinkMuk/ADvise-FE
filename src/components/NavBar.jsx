import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHistory } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const WrapNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 0;
  background-color: #79cf9f;
  position: sticky;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
`;

const WrapSearchHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 0.55;
`;

const WrapShortcutIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const HomeIcon = styled.div`
  margin-left: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const SearchForm = styled.form`
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchInput = styled.input`
  padding: 8px;
  flex: 1;
  outline: none;
  border: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-sizing: border-box;
  height: 36px;
`;

const SearchButton = styled.button`
  padding: 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; /* 버튼 배경색 */
  cursor: pointer;
`;

const StyledFaHistory = styled(FaHistory)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export default function NavBar() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) alert('검색어를 입력해주세요');
    else navigate(`/AuctionLists/${text}`);
  };
  return (
    <>
      <WrapNavBar>
        <WrapSearchHeader>
          <HomeIcon>
            <StyledLink to='/'>Dutch-Auction</StyledLink>
          </HomeIcon>
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
            <SearchButton>
              <BsSearch />
            </SearchButton>
          </SearchForm>
        </WrapSearchHeader>
        <WrapShortcutIcons>
          <Link to='/history'>
            <StyledFaHistory />
          </Link>
        </WrapShortcutIcons>
      </WrapNavBar>
    </>
  );
}
