const browserObject = require('./Browser');
const scraperController = require('./pageController');
const pageScraper = require("./pageScraper");

//Start the browser and create a browser instance


// Pass the browser instance to the scraper controller

function scrapeArticles(page){
    let browserInstance = browserObject.startBrowser(page);
    scraperController(browserInstance).then(r =>  console.log(name))
}
scrapeArticles(page=Number(2))