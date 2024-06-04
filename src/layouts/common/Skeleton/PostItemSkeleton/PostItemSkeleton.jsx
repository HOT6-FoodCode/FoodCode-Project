// PostItemSkeleton.jsx

import {
  PostItemSkeletonWrapper,
  SkeletonImage,
  SkeletonText,
  SkeletonTextWrapper
} from './PostItemSkeleton.styled.js';

const PostItemSkeleton = () => {
  return (
    <PostItemSkeletonWrapper>
      <SkeletonImage />
      <SkeletonTextWrapper>
        <SkeletonText />
        <SkeletonText width="70%" />
      </SkeletonTextWrapper>
    </PostItemSkeletonWrapper>
  );
};

export default PostItemSkeleton;
