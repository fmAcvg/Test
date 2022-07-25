const puppeteer = require('puppeteer');

async function startBrowser(page){
    let browser;
    global.start = `${global.page*7}`
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: false
            ,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}





module.exports = {
    startBrowser
};
