const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class steamPage extends Page {

    async buscarJuego() {
        const inputBusqueda = await $('//*[@id="store_nav_search_term"]');
        await inputBusqueda.waitForDisplayed();
        await inputBusqueda.setValue('Undertale');
        await browser.keys('Enter');
        await browser.pause(2000);
    }

    async seleccionarJuego() {
        const seleccionarJuego = await $('//*[@id="search_resultsRows"]/a[1]/div[2]/div[1]/span');
        await seleccionarJuego.waitForDisplayed();
        await seleccionarJuego.click();
        await browser.pause(2000);
    }

    get verificarJuego() {
        return $('//*[@id="appHubAppName"]');
    }

    async agregarJuegoAlCarrito() {
        const agregarAlCarrito = await $('//*[@id="btn_add_to_cart_74780"]/span');
        await agregarAlCarrito.waitForDisplayed();
        await agregarAlCarrito.click();
        await browser.pause(2000);
    }

    get verificarCompra() {
        return $('/html/body/div[3]/dialog/div/div[2]/div/div[3]/div/div[1]');
    }
    
    async esperar(milisegundos) {
        await browser.pause(milisegundos);
    }

    open () {
        return super.open();
    }

}
module.exports = new steamPage();