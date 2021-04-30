import htmlGenerator, { toggle } from './domTools';


const modal = () => {
  const mainContainer = htmlGenerator('div', 'modal-main-container', '', 'modal');
  const modalTitle = htmlGenerator('h1', 'modal-title', 'Default title', 'modalTitle');
  const modalSubtitle = htmlGenerator('p', 'modal-subtitle', 'Default subtitle', 'modalSubTitle');

  const modalButton = htmlGenerator('button', 'modal-button', 'OK');

  modalButton.addEventListener('click', toggle);
  mainContainer.classList.add('slide-in-top');
  mainContainer.append(modalTitle, modalSubtitle, modalButton);

  return mainContainer;
};

export default modal;