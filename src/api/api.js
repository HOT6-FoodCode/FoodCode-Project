import AuthAPI from './auth.api';
import CommentAPI from './comment.api';
import FollowAPI from './follow.api';
import PostsAPI from './post.api';
import UserAPI from './user.api';

class API {
  constructor() {
    this.auth = new AuthAPI();
    this.posts = new PostsAPI();
    this.user = new UserAPI();
    this.follow = new FollowAPI();
    this.comment = new CommentAPI();
  }
}

const api = new API();
export default api;
