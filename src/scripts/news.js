import htmlGenerator from './domTools';

const news = (title, description) => {
  const mainContainer = htmlGenerator('div', 'news-main-container');
  const imageContainer = htmlGenerator('div', 'news-image-container');
  const newsContainer = htmlGenerator('div', 'news-description-container');
  const checkContainer = htmlGenerator('div', 'news-check-container');

  // imageContainer child
  const imagePlaceHolder = htmlGenerator('div', 'image-placeholder');

  // newsContainer childs
  const newsTitle = htmlGenerator('H3', 'news-title', title);
  const newsDescription = htmlGenerator('p', 'news-description', description);

  // checkContainer childs
  const label = htmlGenerator('label');
  const checkBoxButton = htmlGenerator('input', 'news-checker', '', '', 'checkbox');
  const customButton = htmlGenerator('span', 'news-custom-checker', '', 'customCheck');


  // appending
  imageContainer.appendChild(imagePlaceHolder);
  newsContainer.append(newsTitle, newsDescription);
  label.append(checkBoxButton, customButton);
  checkContainer.appendChild(label);
  mainContainer.append(imageContainer, newsContainer, checkContainer);
  return mainContainer;
};
export default news;