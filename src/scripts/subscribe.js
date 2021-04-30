import htmlGenerator from './domTools';

const subscribe = () => {
  const mainContainer = htmlGenerator('form', 'susbscribe-main-container');
  const checkBoxContainer = htmlGenerator('div', 'subscribe-check-container');

  // mainContainer direct Childs
  const input = htmlGenerator('input', 'subscribe-input', '', 'emailValue');
  const button = htmlGenerator('button', 'subscribe-button', 'SUBSCRIBE');

  // checkBox childs
  const checkBox = htmlGenerator('input', 'subscribe-checkbox', '', '', 'checkbox');
  const checkBoxText = htmlGenerator('span', 'subscribe-span', 'I do not want to receive information about future newsletters.');

  // appending
  checkBoxContainer.append(checkBox, checkBoxText);
  mainContainer.append(input, button, checkBoxContainer);
  return mainContainer;
};

export default subscribe;