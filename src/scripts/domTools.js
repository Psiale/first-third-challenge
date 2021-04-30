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

export const randomMessageGenerator = () => {
  const random = messages[Math.floor(Math.random() * messages.length)];
  const result = {
    title: random.title,
    subtitle: random.subtitle,
  };

  return result;
};

export const toggle = element => {
  element.preventDefault();
  const modal = document.getElementById('modal');
  console.log(modal.classList);
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
