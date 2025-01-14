export default class dadosRequest {
  constructor(dataAppend, obj, fomatadoJson) {
    this.dataAppend = document.querySelector(dataAppend);
    this.dados = obj;
    this.formartJson = fomatadoJson;
  }

  verifyIsFunction() {
    if (typeof this.dados.forEach === 'function') {
      this.postInAppendHtml();
    } else {
      this.dadosNotForEach();
    }
  }

  dadosNotForEach() {
    this.dataAppend.innerText = '';
    let criariDiv = document.createElement('p');
    criariDiv.innerText = this.formartJson;
    criariDiv.classList.add('my-4');
    this.dataAppend.appendChild(criariDiv);
  }

  postInAppendHtml() {
    this.dataAppend.innerText = '';
    let criariDiv = document.createElement('p');
    criariDiv.innerText = this.formartJson;
    criariDiv.classList.add('my-4');
    this.dataAppend.appendChild(criariDiv);
  }

  init() {
    this.verifyIsFunction();
  }
}
