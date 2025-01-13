export default class dadosRequest {
  constructor(dataAppend, obj) {
    this.dataAppend = document.querySelector(dataAppend);
    this.dados = obj;
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
    console.log(this.dados);
    let criariDiv = document.createElement('p');
    let formatJson = JSON.stringify(this.dados);
    let formatarChaves = formatJson.replace('{', '{\n');
    console.log(formatarChaves);
    let formatarVirgulas = formatarChaves.replace(/,/g, ',\n');
    criariDiv.innerText = formatarVirgulas;
    criariDiv.classList.add('my-4');
    this.dataAppend.appendChild(criariDiv);
  }

  postInAppendHtml() {
    this.dataAppend.innerText = '';
    this.dados.forEach((item) => {
      let criariDiv = document.createElement('p');
      console.log(item);
      let formatJson = JSON.stringify(item);
      let formatarChaves = formatJson.replace('{', '{\n');
      let formatarVirgulas = formatarChaves.replace(/,/g, ',\n');
      criariDiv.innerText = formatarVirgulas;
      criariDiv.classList.add('my-4');
      this.dataAppend.appendChild(criariDiv);
    });
  }

  init() {
    console.log(this.dados);
    this.verifyIsFunction();
  }
}
