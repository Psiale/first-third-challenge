import htmlGenerator from './domTools';
import news from './news'

const newsLetter = () => {
  const mainContainer = htmlGenerator('div', 'news-letter-main-container');
  const newsContainer = htmlGenerator('div', 'news-container');
  // main childs
  const title = htmlGenerator('h2', 'news-letter-title', 'NewsLetters');
  const subTitle = htmlGenerator('p', 'sub-title', "Select all the newsletter you'd like to receive");

  // news childs
  const 

  mainContainer.append(title, subTitle);
  return mainContainer;
};

export default newsLetter;