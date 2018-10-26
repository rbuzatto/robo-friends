const puppeteer = require('puppeteer');
jest.setTimeout(100000);
let page, browser;

beforeEach( async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    }
);

afterEach( async () => {
    await browser.close();
    }
);

test('text graber', async () => {
    const text = await page.$eval('div h2', el => el.innerHTML);
    /*
    * @TODO: rewrite proper test for Card
    */
});

