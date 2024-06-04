// PostItemSkeleton.styled.js
import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const PostItemSkeletonWrapper = styled.div`
  width: 330px;
  border-radius: 30px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;

  animation: ${skeletonLoading} 1.5s infinite alternate;
`;

export const SkeletonTextWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

export const SkeletonText = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 16px;
  margin-top: 8px;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite alternate;
`;
