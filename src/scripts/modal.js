import htmlGenerator, { randomMessageGenerator, toggle } from './domTools';


const modal = () => {
  const modalMessage = randomMessageGenerator();
  const mainContainer = htmlGenerator('div', 'modal-main-container', '', 'modal');
  const modalTitle = htmlGenerator('h1', 'modal-title', modalMessage.title);
  const modalSubtitle = htmlGenerator('p', 'modal-subtitle', modalMessage.subtitle);

  const modalButton = htmlGenerator('button', 'modal-button', 'Got it!');

  modalButton.addEventListener('click', toggle);
  mainContainer.append(modalTitle, modalSubtitle, modalButton);

  return mainContainer;
};

export default modal;