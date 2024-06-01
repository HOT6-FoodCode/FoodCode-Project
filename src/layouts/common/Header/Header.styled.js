import styled, { css, keyframes } from 'styled-components';

const LogoImg = styled.img`
  width: 350px;
  height: auto;
`;

const HeaderWrapDiv = styled.div`
  margin: 36px 65px 60px 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StrBtn = styled.button`
  background-color: #1b4b9c;
  color: white;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 18px;
  width: 120px;
  height: 48px;
`;

const StrNavWrapDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 13px;
`;

const UserImg = styled.img`
  width: 48px;
  height: auto;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      animation: ${dropdownAnimation} 0.3s ease;
    `}
`;

const DropdownMenuItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export { DropdownButton, DropdownMenu, DropdownMenuItem, HeaderWrapDiv, LogoImg, StrBtn, StrNavWrapDiv, UserImg };
