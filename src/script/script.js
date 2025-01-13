import methods from './methods.js';
import addClassbtns from './addClassButtonsRequest.js';

const metodos = new methods(
  '[data-methods-element]',
  '[data-url-element]',
  '[data-request-button]',
  '[data-url-token]',
  '[data-body]',
);
metodos.init();

const adicionarClasses = new addClassbtns('[data-methods-element]');
adicionarClasses.init();
