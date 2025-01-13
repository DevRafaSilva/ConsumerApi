import dadosRequest from './dadosRequest.js';

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

  getLocalStorageToken() {
    let token = window.localStorage.getItem('token');
    this.urlToken.value = token;
  }

  getMethodsClick() {
    this.method = 'GET';
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
        corpo: JSON.stringify(bodyData),
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
        const obj = [
          {
            id: 1,
            name: 'João Silva',
            email: 'joao.silva@example.com',
            role: 'admin',
          },
          {
            id: 2,
            name: 'Maria Souza',
            email: 'maria.souza@example.com',
            role: 'user',
          },
          {
            id: 3,
            name: 'Carlos Oliveira',
            email: 'carlos.oliveira@example.com',
            role: 'editor',
          },
          {
            id: 4,
            name: 'Ana Martins',
            email: 'ana.martins@example.com',
            role: 'user',
          },
          {
            id: 5,
            name: 'Roberta Almeida',
            email: 'roberta.almeida@example.com',
            role: 'manager',
          },
          {
            id: 6,
            name: 'Pedro Santos',
            email: 'pedro.santos@example.com',
            role: 'admin',
          },
          {
            id: 7,
            name: 'Fernanda Costa',
            email: 'fernanda.costa@example.com',
            role: 'user',
          },
          {
            id: 8,
            name: 'Lucas Pereira',
            email: 'lucas.pereira@example.com',
            role: 'developer',
          },
        ];

        let dadosFunction = new dadosRequest('[data-html-for-request]', obj);
        dadosFunction.init();
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

    this.getLocalStorageToken();

    return this;
  }
}
