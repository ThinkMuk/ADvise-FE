import React from 'react';
import styled from 'styled-components';
import { BsMegaphoneFill } from 'react-icons/bs';

const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5ffef;
  color: #989898;
  font-size: 12px;
  height: 100px;
`;

const StyledBsMegaphone = styled(BsMegaphoneFill)`
  margin-right: 8px;
`;

export default function Footer() {
  return (
    <>
      <WrapFooter>
        <StyledBsMegaphone /> © 2024 AD-vise. All rights reserved.
      </WrapFooter>
    </>
  );
}
