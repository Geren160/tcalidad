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
   
        async esperar(milisegundos) {
        await browser.pause(milisegundos);
    }

    open () {
        return super.open();
    }

}
module.exports = new steamPage();