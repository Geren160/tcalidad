const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class steamPage extends Page {

    async buscarJuego() {
        const inputBusqueda = await $('//*[@id="store_nav_search_term"]'); //input de busqueda
        await inputBusqueda.waitForDisplayed();
        await inputBusqueda.setValue('Undertale');
        await browser.keys('Enter');
        await browser.pause(2000);
    }

    async seleccionarJuego() {
        const seleccionarJuego = await $('//*[@id="search_resultsRows"]/a[1]/div[2]/div[1]/span'); //seleccionar juego en los resultados
        await seleccionarJuego.waitForDisplayed();
        await seleccionarJuego.click();
        await browser.pause(2000);
    }

    get verificarJuego() {
        return $('//*[@id="appHubAppName"]');
    }

    async agregarJuegoAlCarrito() {
        const agregarAlCarrito = await $('//*[@id="btn_add_to_cart_74780"]/span'); //Boton agregar al carrito
        await agregarAlCarrito.waitForDisplayed();
        await agregarAlCarrito.click();
        await browser.pause(2000);
    }

    get verificarCompra() {
        return $('/html/body/div[3]/dialog/div/div[2]/div/div[3]/div/div[1]'); //Debe decir Added to your cart!
    }
    
    async revisarCarrito() {
        const seguirComprando = await $('/html/body/div[3]/dialog/div/div[2]/div/div[3]/div/div[3]/button[1]'); //Le da clic en seguir comprando
        await seguirComprando.waitForDisplayed();
        await seguirComprando.click();
        const revisarCarrito = await $('//*[@id="cart_status_data"]/div/div/a'); //Le da clic en el carro
        await revisarCarrito.waitForDisplayed();
        await revisarCarrito.click();
        await browser.pause(2000);
    }

    get verificarIconoCarrito() {
        return $('//*[@id="cart_status_data"]/div/div/a'); //Debe aparecer el icono del carrito
    }

    async eliminarDelCarrito() {
        const eliminarDelCarrito = await $('//*[@id="page_root"]/div[2]/div/div[2]/div[3]/div[1]/div[3]/div[2]'); //Hace clic en eliminar todos los articulos
        await eliminarDelCarrito.waitForDisplayed();
        await eliminarDelCarrito.click();
        await browser.pause(2000);
    }

    get verificarEliminacion() {
        return $('//*[@id="page_root"]/div[2]/div/div[2]/div[3]/div[1]/div[1]/div/div'); //Debe aparecer el mensaje de que no hay articulos en el carrito
    }

    get menuDeCategorias() {
        return $('//*[@id="genre_tab"]/span/a[1]'); //Se consigue la ubicacion del menu de categorias
    }

    get freeToPlay() {
        return $('//*[@id="genre_flyout"]/div/div[1]/a[1]'); //Conseguir la ubicacion del elemento filtro Free to Play
    }

    get juegoFreeToPlay() {
        return $('//*[@id="SaleSection_93094"]/div/div[2]/div[1]/div[1]/div/div/div/a/div/div/div[2]/img'); //Conseguir la ubicacion del juego Free to Play
    } 

    get juegoFreeToPlay2() {
        return $('//*[@id="SaleSection_93094"]/div/div[2]/div[1]/div[2]/div/div/div/a/div/div/div[2]/img'); //Conseguir una segunda ubicacion del juego free to play
    }

    async clickEnFreeToPlay() {
        await this.menuDeCategorias.moveTo();
        await this.freeToPlay.click();
    }

    async verificarJuegoFreeToPlay() {
        await this.juegoFreeToPlay.click();
        await browser.pause(2000);
    }

    async verificarJuegoFreeToPlay2() {
        await this.juegoFreeToPlay2.click();
        await browser.pause(2000);
    }

    get verificarInfoJuego() {
        return $('//*[@id="game_area_purchase"]/div[1]/div[2]/div/div[1]'); //Conseguir la ubicacion de la descripcion del juego y diga Free to Play
    }

        async esperar(milisegundos) {
        await browser.pause(milisegundos);
    }

    open () {
        return super.open();
    }

}
module.exports = new steamPage();