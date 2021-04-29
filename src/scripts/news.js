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
  const radioButton = htmlGenerator('input', 'news-checker');

  // appending
  imageContainer.appendChild(imagePlaceHolder);
  newsContainer.append(newsTitle, newsDescription);
  checkContainer.appendChild(radioButton);
  mainContainer.append(imageContainer, newsContainer, checkContainer);
};
export default news;