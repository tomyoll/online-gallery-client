export default class UtilsStore {
  constructor() {
    this._images = [];
  }

   setImages(array) {
    this._images = array;
   }

   get images() {
    return this._images;
   }

}
