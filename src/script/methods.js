export default class methods {
  constructor(btnMethods, urlElement) {
    this.btnMethods = document.querySelectorAll(btnMethods);
    this.urlElement = document.querySelector(urlElement);
    this.responseApi = {};
  }
  //https://apitarefas-ahhx.onrender.com/tarefas

  getMethodsClick() {
    this.btnMethods.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        const methodOrClick = this.btnMethods[index].dataset.methodsElement;
        const urlEndPoint = this.urlElement.value;
        this.fecthUrl(methodOrClick, urlEndPoint);
      });
    });
  }

  fecthUrl(method, urlApi) {
    fetch(`${urlApi}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        this.responseApi = response;
        console.log(this.responseApi.status);
        return response.json();
      })
      .then((dados) => {
        console.log(dados);
      });
  }

  init() {
    this.getMethodsClick();

    return this;
  }
}
