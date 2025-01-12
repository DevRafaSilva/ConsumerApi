import methods from './methods.js';

const metodos = new methods(
  '[data-methods-element]',
  '[data-url-element]',
  '[data-request-button]',
  '[data-url-token]',
  '[data-body]',
);
metodos.init();
