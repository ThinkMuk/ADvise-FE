
import styled from 'styled-components';

const WrapHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const HistoryBox = styled.div`
  width: 1000px;
  height: 30px;
  background-color: #fbfffa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  left: 20px;
`;

export { WrapHistory, HistoryBox, TitleText };
