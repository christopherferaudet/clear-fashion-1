const dedicatedbrand = require('./sources/dedicatedbrand');
const adresseParis = require('./sources/adresseParisbrand');
const montlimart = require('./sources/montlimartbrand');
const db = require('./db');

async function sandbox(){
    try{
        let products = [];
        let pages = [
            'https://www.dedicatedbrand.com/en/men/basics',
            'https://www.dedicatedbrand.com/en/men/sale'
        ];

        console.log(`🕵️‍♀️ Browsing ${pages.length} pages from Dedicated.`);

        for(let page of pages) {
            console.log(`🕵️‍♀️ Scraping ${page}.`);

            let results = await dedicatedbrand.scrape(page);

            console.log(`👕 ${results.length} products found.`);
            
            products.push(results);

            console.log('Number of groups of products: ', products.length);
        }

        pages = [
            'https://adresse.paris/630-toute-la-collection'
        ];

        console.log(`🕵️‍♀️ Browsing ${pages.length} pages from Adresse Paris.`);

        for(let page of pages) {
            console.log(`🕵️‍♀️ Scraping ${page}.`);

            let results = await adresseParis.scrape(page);

            console.log(`👕 ${results.length} products found.`);
            
            products.push(results);

            console.log('Number of group of products: ', products.length);
        }

        pages = [
            'https://www.montlimart.com/toute-la-collection.html'
        ];

        console.log(`🕵️‍♀️ Browsing ${pages.length} pages from Montlimart.`);

        for(let page of pages) {
            console.log(`🕵️‍♀️ Scraping ${page}.`);

            let results = await montlimart.scrape(page);

            console.log(`👕 ${results.length} products found.`);
            
            products.push(results);

            console.log('Number of group of products: ', products.length);
        }

        products = products.flat();
        console.log('Total number of products: ', products.length);

    } catch(e){
        //console.log(e);
        console.error(e);
    }
}

sandbox();