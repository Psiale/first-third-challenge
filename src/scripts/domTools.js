const htmlGenerator = (htmlElement, htmlClass, text = null, idClass = null) => {
  const element = document.createElement(htmlElement);
  element.innerHTML = text;
  element.classList.add(htmlClass);
  element.id = idClass;
  return element;
};

export default htmlGenerator;
