/* eslint-disable no-unused-expressions */
import { messages } from './constants';

const inputGenerator = (type = 'input', htmlClass) => {
  const element = document.createElement('input');
  element.type = type;
  element.classList.add(htmlClass);
  element.placeholder = 'Enter email';
  if (element.type === 'text') element.required = true;
  return element;
};

const errorStyle = (error, element) => {
  (error)
    ? element.style.backgroundColor = 'red'
    : element.style.backgroundColor = '#4292f4';
};


export const randomMessageGenerator = () => {
  const modalTitle = document.getElementById('modalTitle');
  const modalSubTitle = document.getElementById('modalSubTitle');
  const modal = document.getElementById('modal');
  const random = messages[Math.floor(Math.random() * messages.length)];
  errorStyle(random.error, modal);
  modalTitle.innerHTML = random.title;
  modalSubTitle.innerHTML = random.subtitle;
};

export const toggle = () => {
  randomMessageGenerator();
  const modal = document.getElementById('modal');
  (modal.classList.contains('flex')) ? modal.classList.remove('flex') : modal.classList.add('flex');
};

const htmlGenerator = (htmlElement, htmlClass, text = null, idClass = null, type = 'input') => {
  let element = document.createElement(htmlElement);
  if (htmlElement === 'input') element = inputGenerator(type, htmlClass);
  element.innerHTML = text;
  element.classList.add(htmlClass);
  element.id = idClass;
  return element;
};

export default htmlGenerator;
