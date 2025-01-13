export default class saveToken {
  constructor(dataLocked, inputToken) {
    this.dataLocked = document.querySelector(dataLocked);
    this.inputToken = document.querySelector(inputToken);
  }

  saveTokenLocalStorage() {
    window.localStorage.setItem('token', this.inputToken.value);
  }

  init() {
    this.dataLocked.addEventListener('click', () => {
      this.saveTokenLocalStorage();
    });
  }
}
