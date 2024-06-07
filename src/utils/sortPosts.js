const sortPosts = (posts, sorting) => {
  if (!Array.isArray(posts)) {
    // posts가 배열이 아닌 경우 빈 배열로 초기화
    posts = [];
  }
  switch (sorting) {
    case 'recent':
      return [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    case 'trending':
      return [...posts].sort((a, b) => b.views - a.views);

    default:
      return posts;
  }
};

export default sortPosts;
