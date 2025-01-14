import dadosRequest from './dadosRequest.js';

export default class formartJson {
  constructor(dados) {
    this.dados = dados;
  }

  format() {
    let transformInJson = JSON.stringify(this.dados);
    let formatadoJson = transformInJson
      .replace(/^\[/, '[\n  ')
      .replace(/},/g, '\n  },\n  ')
      .replace(/},\s*{/g, '},\n  {')
      .replace(/\]$/, '\n]')
      .replace(/{/g, '  {\n    ')
      .replace(/,/g, ',\n    ')
      .replace(/\n    \n/g, '\n    ')
      .replace(/}/g, '\n  }');

    console.log(formatadoJson);
    const dadosR = new dadosRequest(
      '[data-html-for-request]',
      this.dados,
      formatadoJson,
    );
    dadosR.init();
    return formatadoJson;
  }

  init() {
    this.format();
    console.log(this.dados);
  }
}
