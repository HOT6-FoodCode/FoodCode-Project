import styled from 'styled-components';

const StButton = styled.button`
  cursor: pointer;
  flex: 0.5 0.5 0;
  max-width: 60px;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: #3b82f6;
  color: white;
  &:hover {
    background-color: #2563eb;
  }
`;

const StDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  gap: 1rem;
  padding: 20px 10px 20px;
  border-bottom: 1px solid #ccc;
`;

export { StButton, StDiv };
