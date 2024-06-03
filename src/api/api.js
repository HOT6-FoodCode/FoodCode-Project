import AuthAPI from './auth.api';
import PostsAPI from './post.api';

class API {
  constructor() {
    this.auth = new AuthAPI();
    this.posts = new PostsAPI();
  }
}

const api = new API();
export default api;
