export default class UtilsStore {
  constructor() {
    this._gridMode = localStorage.getItem('gridMode') || 'standard';
  }

  setGridMode(mode) {
    this._gridMode = mode;
    localStorage.setItem('gridMode', mode);
  }

  get gridMode() {
    return localStorage.getItem('gridMode');
  }
}
