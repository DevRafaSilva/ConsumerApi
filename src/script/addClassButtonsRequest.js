export default class addClassbtns {
  constructor(dataRequestbtns) {
    this.dataRequestbtns = document.querySelectorAll(dataRequestbtns);
  }

  addClass() {
    this.dataRequestbtns.forEach((itemClick, index) => {
      this.dataRequestbtns[0].classList.remove('opacity-50');
      itemClick.classList.add('opacity-50');
      itemClick.addEventListener('click', () => {
        this.dataRequestbtns.forEach((btn) => {
          btn.classList.add('opacity-50');
        });
        this.dataRequestbtns[index].classList.remove('opacity-50');
      });
    });
  }

  init() {
    this.addClass();
  }
}
