const puppeteer = require('puppeteer');

const URL_ACREDITACIONES = 'https://www.cariverplate.com.ar/acreditaciones/';
const SEARCH_TAG = '.topac p';

async function setDriver() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(URL_ACREDITACIONES, { waitUntil: 'networkidle2' });
    return { browser, page };
}

async function getResults(page) {
    const results = await page.$$eval(SEARCH_TAG, elements => elements.map(el => el.textContent));

    const acreditaciones = [];
    let keyWordFound = false;

    for (let index = 0; index < results.length; index++) {
        if (keyWordFound) {
            if (results[index] === '' || results[index] === ' ') {
                break;
            }
            acreditaciones.push(results[index]);
        }
        if (results[index] === 'No se acreditan medios digitales.') {
            keyWordFound = true;
        }
    }

    return acreditaciones;
}

async function scrap() {
    const { browser, page } = await setDriver();

    // Buscar los resultados
    const acreditacionesPosibles = await getResults(page);

    await browser.close();

    return acreditacionesPosibles;
}

module.exports = {
    scrap
}