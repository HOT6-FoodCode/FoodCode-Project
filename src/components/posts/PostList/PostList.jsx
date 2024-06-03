import styled from 'styled-components';
import PostItem from '../PostItem';

const dummyData = [
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  },
  {
    imageSrc: 'https://via.placeholder.com/250',
    title: '쥬안',
    description: '텐바라 솥밥으로 유명한 갓포요리집',
    rating: '4.8',
    tag: '일식',
    place: '청담'
  }
];

const PostList = ({ sorting }) => {
  console.log(sorting);

  return (
    <PostGrid>
      {dummyData.map((data, index) => (
        <PostItem
          key={index}
          imageSrc={data.imageSrc}
          title={data.title}
          description={data.description}
          rating={data.rating}
          tag={data.tag}
          place={data.place}
        />
      ))}
    </PostGrid>
  );
};

export default PostList;

const PostGrid = styled.div`
  padding: 20px;
  display: grid;
  width: 1240px;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-column-gap: 90px;
  grid-row-gap: 40px;
  justify-items: center;
  @media (max-width: 1240px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
  @media (max-width: 940px) {
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  }
`;
