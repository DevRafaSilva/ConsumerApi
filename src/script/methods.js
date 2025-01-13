import dadosRequest from './dadosRequest.js';

export default class methods {
  constructor(
    btnMethods,
    urlElement,
    btnRequest,
    urlToken,
    dataBody,
    dataLoadingElement,
  ) {
    this.carregando = false;
    this.btnMethods = document.querySelectorAll(btnMethods);
    this.urlElement = document.querySelector(urlElement);
    this.btnRequest = document.querySelector(btnRequest);
    this.urlToken = document.querySelector(urlToken);
    this.dataBody = document.querySelector(dataBody);
    this.dataLoadingElement = document.querySelector(dataLoadingElement);
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
    try {
      this.carregando = true;
      if (this.carregando) {
        this.dataLoadingElement.classList.remove('hidden');
        this.btnRequest.classList.add('opacity-50');
      }

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
          let dadosFunction = new dadosRequest(
            '[data-html-for-request]',
            dados,
          );
          dadosFunction.init();
          console.log(dados);
        })
        .catch((error) => {
          console.error('Erro CORS ou outro erro:', error);
        });
    } catch (err) {
      console.log(err);
      this.carregando = false;
    } finally {
      this.carregando = false;
      if (this.carregando == false) {
        setInterval(() => {
          this.dataLoadingElement.classList.add('hidden');
          this.btnRequest.classList.remove('opacity-50');
        }, 100);
      }
    }
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
