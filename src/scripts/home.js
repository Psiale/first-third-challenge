import htmlGenerator from './domTools';
import newsLetter from './newsletter';

const home = () => {
  const mainContainer = htmlGenerator('div', 'main-Container');
  mainContainer.append(newsLetter());
  return mainContainer;
};
export default home;