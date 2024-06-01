import styled from 'styled-components';

const StrFooter = styled.footer`
  display: flex;
  padding: 20px;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 40px;
  right: 40px;
  p {
    font-size: 14px;
  }
`;

const StrIcon = styled.svg`
  margin-left: 8px;
  color: #868e96;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

export { StrFooter, StrIcon };