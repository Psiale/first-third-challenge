import htmlGenerator from './domTools';
import news from './news';
import newsData from './constants';

const newsLetter = () => {
  const mainContainer = htmlGenerator('div', 'news-letter-main-container');
  const newsContainer = htmlGenerator('div', 'news-container');
  // main childs
  const title = htmlGenerator('h2', 'news-letter-title', 'NewsLetters');
  const subTitle = htmlGenerator('p', 'sub-title', "Select all the newsletter you'd like to receive");

  // news childs
  for (let i = 0; i < newsData.length; i += 1) {
    console.log(newsData[i]);
    console.log('title', newsData[i].title);
    console.log('description', newsData[i].description);
    newsContainer.append(news(newsData[i].title, newsData[i].description));
  }

  mainContainer.append(title, subTitle, newsContainer);
  return mainContainer;
};

export default newsLetter;