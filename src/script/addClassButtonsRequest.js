export default class addClassbtns {
  constructor(dataRequestbtns) {
    this.dataRequestbtns = document.querySelectorAll(dataRequestbtns);
  }

  addClass() {
    this.dataRequestbtns.forEach((itemClick, index) => {
      this.dataRequestbtns[0].style.opacity = '1';
      itemClick.style.opacity = '0.5';
      itemClick.addEventListener('click', () => {
        this.dataRequestbtns.forEach((btn) => {
          btn.style.opacity = '0.5';
        });
        this.dataRequestbtns[index].style.opacity = '1';
      });
    });
  }

  init() {
    this.addClass();
  }
}
