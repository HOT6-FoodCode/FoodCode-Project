import styled from 'styled-components';

export const StrBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  background-color: #f0f4f8;
  border-radius: 25px;
  font-size: 16px;
  color: #3b82f6;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e7ef;
  }

  &.active {
    background-color: #cfe3fa;
  }

  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;
