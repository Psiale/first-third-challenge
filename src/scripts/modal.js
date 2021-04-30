import htmlGenerator, { toggle } from './domTools';

const modal = (title, subtitle) => {
  const mainContainer = htmlGenerator('div', 'modal-main-container', '', 'modal');
  const modalTitle = htmlGenerator('h2', 'modal-title', title);
  const modalSubtitle = htmlGenerator('p', 'modal-subtitle', subtitle);

  const modalButton = htmlGenerator('button', 'modal-button', 'Got it!');

  modalButton.addEventListener('click', () => {
    toggle(modalButton);
  });
};