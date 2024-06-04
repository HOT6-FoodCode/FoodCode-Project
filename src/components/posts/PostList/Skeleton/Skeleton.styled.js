// Skeleton.styled.js
import styled from 'styled-components';

export const SkeletonGrid = styled.div`
  padding: 20px;
  display: grid;
  width: 1240px;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-column-gap: 90px;
  grid-row-gap: 40px;
  justify-items: center;
  margin: 0 auto;
`;
