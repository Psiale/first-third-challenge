import htmlGenerator from './domTools';
import newsLetter from './newsletter';
import subscribe from './subscribe';
import modal from './modal';

const home = () => {
  const mainContainer = htmlGenerator('div', 'main-Container');
  mainContainer.append(newsLetter(), modal(), subscribe());
  return mainContainer;
};
export default home;