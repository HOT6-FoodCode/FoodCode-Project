import AuthAPI from './auth.api';

class API {
  auth;
  posts;

  constructor() {
    this.auth = AuthAPI;
  }
}

const api = new API();
export default api;
