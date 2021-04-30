import htmlGenerator from './domTools';
import news from './news';
import newsData from './constants';

const newsLetter = () => {
  const mainContainer = htmlGenerator('div', 'news-letter-main-container');
  const newsContainer = htmlGenerator('div', 'news-container');
  // main childs
  const title = htmlGenerator('h1', 'news-letter-title', 'Newsletters');
  const subTitle = htmlGenerator('p', 'sub-title', "Select all the newsletter you'd like to receive");

  // news childs
  for (let i = 0; i < newsData.length; i += 1) {
    newsContainer.append(news(newsData[i].title, newsData[i].description));
  }

  mainContainer.append(title, subTitle, newsContainer);
  return mainContainer;
};

export default newsLetter;