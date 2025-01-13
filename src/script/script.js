import methods from './methods.js';
import addClassbtns from './addClassButtonsRequest.js';
import saveToken from './saveJsonToken.js';

const metodos = new methods(
  '[data-methods-element]',
  '[data-url-element]',
  '[data-request-button]',
  '[data-url-token]',
  '[data-body]',
  '[data-loading-element]',
);
metodos.init();

const adicionarClasses = new addClassbtns('[data-methods-element]');
adicionarClasses.init();

const tokenLocalStorage = new saveToken(
  '[data-save-token]',
  '[data-url-token]',
);
tokenLocalStorage.init();
