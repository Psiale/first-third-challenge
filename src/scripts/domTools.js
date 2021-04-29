
const inputGenerator = (type = 'input', htmlClass) => {
  const element = document.createElement('input');
  element.type = type;
  element.classList.add(htmlClass);
  element.placeholder = 'Enter email';
  return element;
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
