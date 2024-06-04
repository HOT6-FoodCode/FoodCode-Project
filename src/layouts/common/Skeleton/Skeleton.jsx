// Skeleton.jsx

import PostItemSkeleton from './PostItemSkeleton';
import { SkeletonGrid } from './Skeleton.styled';

const Skeleton = ({ length }) => {
  return (
    <SkeletonGrid>
      {Array.from({ length }, (_, index) => (
        <PostItemSkeleton key={index} />
      ))}
    </SkeletonGrid>
  );
};

export default Skeleton;
