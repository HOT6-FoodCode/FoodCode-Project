import AuthAPI from './auth.api';
import FollowAPI from './follow.api';
import PostsAPI from './post.api';
import UserAPI from './user.api';

class API {
  constructor() {
    this.auth = new AuthAPI();
    this.posts = new PostsAPI();
    this.user = new UserAPI();
    this.follow = new FollowAPI();
  }
}

const api = new API();
export default api;
