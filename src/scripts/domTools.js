/* eslint-disable no-unused-expressions */

const inputGenerator = (type = 'input', htmlClass) => {
  const element = document.createElement('input');
  element.type = type;
  element.classList.add(htmlClass);
  element.placeholder = 'Enter email';
  element.required = true;
  return element;
};

export const toggle = element => {
  (element.style.display === 'block') ? element.style.display = 'none' : element.style.display = 'block';
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
