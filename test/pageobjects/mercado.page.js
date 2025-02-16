const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class mercadoPage extends Page {

    get menuDeCategorias () {
        return $('//a[contains(text(),"Categorías")]/parent::li');
    }

    get menuDeVehiculosInternoEnCategorias () {
        return $('//a[text()="Vehículos"]');
    }

    get menuDeSupermercadoInternoEnCategorias () {
        return $('[href="https://www.mercadolibre.com.mx/ofertas/supermercado#menu=categories"]');
    }

    get menuDeTecnologíaInternoEnCategorias () {
        return $('//a[contains(text(),"Tecnología")]/parent::li');
    }

    get videoJuegosDeSubmenuTecnologia () {
        return $('//a[contains(text(),"Videojuegos")]/parent::li');
    }

    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.moveTo();
        await browser.pause(2000);
    }

    async desplegarMenuDeTecnología () {
        await this.menuDeTecnologíaInternoEnCategorias.moveTo();
        await browser.pause(2000);
    }

    async hacerClickEnVideoJuegos () {
        await this.videoJuegosDeSubmenuTecnologia.click();
        await browser.pause(2000);
    }

    async esperar(milisegundos) {
        
    }

    open () {
        return super.open();
    }
}

module.exports = new mercadoPage();
