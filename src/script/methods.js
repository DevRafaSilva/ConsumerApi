export default class methods {
  constructor(btnMethods, urlElement, btnRequest, urlToken, dataBody) {
    this.btnMethods = document.querySelectorAll(btnMethods);
    this.urlElement = document.querySelector(urlElement);
    this.btnRequest = document.querySelector(btnRequest);
    this.urlToken = document.querySelector(urlToken);
    this.dataBody = document.querySelector(dataBody);
    this.responseApi = {};
    this.method = '';
    this.urlRequest = '';
    this.bodyRequest = '';
    this.jsonBodyFormat;
    this.keysObjtoForEach = '';
    this.objetoDe = {};
  }
  //https://apitarefas-ahhx.onrender.com/tarefas

  getMethodsClick() {
    this.btnMethods.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        this.method = this.btnMethods[index].dataset.methodsElement;
      });
    });
  }

  requestClickBtn(event) {
    event.preventDefault();

    this.createObjectForHeaders(this.method);
  }

  createObjectForHeaders(methodRequest) {
    console.log(methodRequest);
    console.log(methodRequest);

    let objectRequest = {};
    const bodyData = this.dataBody.value
      ? JSON.parse(this.dataBody.value)
      : null;

    if (methodRequest === 'POST' || methodRequest === 'PUT') {
      objectRequest = {
        method: methodRequest,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.urlToken.value}`,
        },
        corpo: JSON.stringify({
          titulo: 'Varrer',
          concluida: true,
        }),
      };
    } else {
      objectRequest = {
        method: methodRequest,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.urlToken.value}`,
        },
      };
    }

    this.fecthUrl(objectRequest);
  }

  fecthUrl({ method, headers, corpo }) {
    console.log(this.urlRequest);
    console.log(method);
    fetch(`${this.urlRequest}`, {
      method: method,
      headers: headers,
      body: corpo,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((dados) => {
        console.log(dados);
      })
      .catch((error) => {
        console.error('Erro CORS ou outro erro:', error);
      });
  }

  init() {
    this.getMethodsClick();
    this.btnRequest.addEventListener('click', (event) => {
      this.requestClickBtn(event);
    });

    this.urlElement.addEventListener('change', () => {
      this.urlRequest = this.urlElement.value;
    });

    return this;
  }
}
