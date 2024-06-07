const sortPosts = (posts, sorting) => {
  let sortedPosts = [...posts];
  if (sorting === 'recent') {
    sortedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else {
    sortedPosts.sort((a, b) => b.views * 0.5 + b.rating * 1.5 - (a.views * 0.5 + a.rating * 1.5));
  }
  return sortedPosts;
};

export default sortPosts;
