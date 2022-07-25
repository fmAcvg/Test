let name;
const scraperObject = {
    url: `https://www.ernstabbegymnasium.de/index.php?start=${global.start}`,
    scraper: async function (browser) {
        console.log(global.start)
        let page = await browser.newPage(this.url);
        await page.goto(this.url);
        const data = await page.evaluate(() => {
            const tds = Array.from(document.querySelectorAll('.items-row h2'))
            return tds.map(h2 => h2.textContent);
        });
        global.name= data
        return name
    },
}
module.exports = scraperObject;

