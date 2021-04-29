const htmlGenerator = (htmlElement, htmlClass, text = null, idClass = null) => {
  const element = document.createElement(htmlElement);
  if (htmlElement === 'input') element.type = 'radio';
  element.innerHTML = text;
  element.classList.add(htmlClass);
  element.id = idClass;
  return element;
};

export default htmlGenerator;
