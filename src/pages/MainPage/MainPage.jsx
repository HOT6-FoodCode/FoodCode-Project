import styled from 'styled-components';

function MainPage() {
  return <StrDiv>MainPage</StrDiv>;
}

export default MainPage;

const StrDiv = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 65px);
`;
