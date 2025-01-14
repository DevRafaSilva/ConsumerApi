export default class cacthErro {
  constructor(dataAppend, error) {
    this.dataAppend = document.querySelector(dataAppend);
    this.error = error;
  }

  init() {
    console.log(this.error);
  }
}
