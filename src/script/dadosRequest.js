export default class dadosRequest {
  constructor(dataAppend, obj) {
    this.dataAppend = document.querySelector(dataAppend);
    this.dados = obj;
  }

  postInAppendHtml() {
    this.dados.forEach((item) => {
      let criariDiv = document.createElement('div');
      console.log(item);
      let formatJson = JSON.stringify(item);
      criariDiv.innerText = formatJson;
      this.dataAppend.appendChild(criariDiv);
    });
  }

  init() {
    console.log(this.dados);
    this.postInAppendHtml();
  }
}
