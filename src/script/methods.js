export default class methods {
  constructor(btnMethods, urlElement, btnRequest) {
    this.btnMethods = document.querySelectorAll(btnMethods);
    this.urlElement = document.querySelector(urlElement);
    this.btnRequest = document.querySelector(btnRequest);
    this.responseApi = {};
    this.method = '';
    this.urlRequest = '';
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
    console.log(this.method);
    this.createObjectForHeaders(this.method);
  }

  createObjectForHeaders(methodRequest) {
    let post = true;
    let objectRequest = {};
    if (methodRequest === 'POST') {
      objectRequest = {
        method: methodRequest,
        headers: {
          'Content-Type': 'application/json',
        },
        body: post
          ? JSON.stringify({
              titulo: 'Olá',
            })
          : null,
      };
    } else {
      objectRequest = {
        method: methodRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    console.log(objectRequest);

    this.fecthUrl(objectRequest);
  }

  fecthUrl({ method, headers, body }) {
    console.log(body);
    fetch(this.urlRequest, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then((response) => {
        this.responseApi = response;
        console.log(this.responseApi);
        return response.json();
      })
      .then((dados) => {
        console.log(dados);
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
