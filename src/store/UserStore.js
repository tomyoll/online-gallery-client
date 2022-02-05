export default class UserStore {
  constructor() {
    this._isLogin = true;
  }

  setIsLogin(bool) {
    this._isLogin = bool;
    console.log(this._isLogin)
  }

  get isLogin() {
    return this._isLogin;
  }
}
