import htmlGenerator from './domTools';
import newsLetter from './newsletter';
import subscribe from './subscribe';

const home = () => {
  const mainContainer = htmlGenerator('div', 'main-Container');
  mainContainer.append(newsLetter(), subscribe());
  return mainContainer;
};
export default home;