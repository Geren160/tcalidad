const { $, expect } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuDeCategorias () {
        return $('//a[contains(text(),"Categorías")]/parent::li');
    }

    get menuDeVehiculosInternoEnCategorias () {
        return $('//a[text()="Vehículos"]');
    }

    get menuDeSupermercadoInternoEnCategorias () {
        return $('[href="https://www.mercadolibre.com.mx/ofertas/supermercado#menu=categories"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.moveTo();
        await browser.pause(2000);
    }

    async esperar(milisegundos) {
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new loginPage();
