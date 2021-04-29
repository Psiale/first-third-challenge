import htmlGenerator from './domTools';
const news = (title, description) => {
    const mainContainer = htmlGenerator('div', 'news-main-container');
    const imageContainer = htmlGenerator('div', 'news-image-container');
    const newsContainer = htmlGenerator('div', 'news-description-container');

    // imageContainer child
    const imagePlaceHolder = htmlGenerator('div', 'image-placeholder');

    // newsContainer childs
    const newsTitle = htmlGenerator('H3', 'news-title', title);
    const newsDescription = htmlGenerator('p', 'news-description', description);

    // appending
    imageContainer.appendChild(imagePlaceHolder);
    newsContainer.append(newsTitle, newsDescription);
    mainContainer.append(imageContainer, newsContainer);
}
export default news;