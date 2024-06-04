import AuthAPI from './auth.api';
import PostsAPI from './post.api';
import UserAPI from './user.api';

class API {
  constructor() {
    this.auth = new AuthAPI();
    this.posts = new PostsAPI();
    this.user = new UserAPI();
  }
}

const api = new API();
export default api;
