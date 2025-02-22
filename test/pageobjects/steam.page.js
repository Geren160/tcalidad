const { $, expect, browser } = require('@wdio/globals')
const PageSteam = require('./page.Steam');
const { elementToBeClickable } = require('wdio-wait-for');

class steamPage extends PageSteam {

    async buscarJuego() {
        const inputBusqueda = await $('//*[@id="store_nav_search_term"]'); //input de busqueda
        await inputBusqueda.waitForDisplayed();
        await inputBusqueda.setValue('Undertale');
        await browser.keys('Enter');
    }

    async buscarJuegoParaVerificarMayoriaDeEdad() {
        const inputBusqueda = await $('//*[@id="store_nav_search_term"]'); //input de busqueda
        await inputBusqueda.waitForDisplayed();
        await inputBusqueda.setValue('Baldurs gate 3');
        await browser.keys('Enter');
    }

    async seleccionarJuego() {
        const seleccionarJuego = await $('//*[@id="search_resultsRows"]/a[1]/div[2]/div[1]/span'); //seleccionar juego en los resultados
        await seleccionarJuego.waitForDisplayed();
        await seleccionarJuego.click();
    }

    get verificarJuego() {
        return $('//*[@id="appHubAppName"]');
    }

    async agregarJuegoAlCarrito() {
        const agregarAlCarrito = await $('//*[@id="btn_add_to_cart_74780"]/span'); //Boton agregar al carrito
        await agregarAlCarrito.waitForDisplayed();
        await agregarAlCarrito.click();
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
    }

    get verificarIconoCarrito() {
        return $('//*[@id="cart_status_data"]/div/div/a'); //Debe aparecer el icono del carrito
    }

    async eliminarDelCarrito() {
        const eliminarDelCarrito = await $('//*[@id="page_root"]/div[2]/div/div[2]/div[3]/div[1]/div[3]/div[2]'); //Hace clic en eliminar todos los articulos
        await eliminarDelCarrito.waitForDisplayed();
        await eliminarDelCarrito.click();
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
        await this.menuDeCategorias.waitForDisplayed();
        await this.freeToPlay.click();
    }

    async verificarJuegoFreeToPlay() {
        await this.juegoFreeToPlay.click();
    }

    async verificarJuegoFreeToPlay2() {
        await this.juegoFreeToPlay2.click();
    }

    get verificarInfoJuego() {
        return $('//*[@id="game_area_purchase"]/div[1]/div[2]/div/div[1]'); //Conseguir la ubicacion de la descripcion del juego y diga Free to Play
    }

    get reseñasFilter() {
        return $('//*[@id="reviews_filter_options"]/div[6]/div[1]'); //Conseguir la ubicacion de los filtros de las reseñas
    }

    get reseñasHelpful() {
        return $('//*[@id="reviews_filter_options"]/div[6]/div[2]/div/label[2]'); //Conseguir la ubicacion de las reseñas que son de ayuda
    }

    get reseña () {
        return $('//*[@id="ReviewContentall186550694_rightcol"]'); //Conseguir la ubicacion de la reseña
    }
    
    async revisarReseñas() {
        await this.reseñasFilter.click();
        await this.reseñasFilter.waitForDisplayed();
        await this.reseñasHelpful.click();
        await this.reseñasFilter.scrollIntoView(); //Hacer scroll para ver las reseñas
        await this.reseña.moveTo();
    }

    get isHealpful() {
        return $('//*[@id="ReviewContentall186550694_rightcol"]/div[7]'); //Conseguir la ubicacion dentro del comentario para verificar si es de ayuda
    }

    // async verificarEsDeAyuda() {
    //     const elementoHealpful = await this.isHealpful;
    //     const texto = await elementoHealpful.getText(); //Conseguir el texto del elemento
    //     const partes = texto.split('.'); //Separar el texto en partes
    //     return partes.some(parte => parte.includes(' /^\d+ people found this review helpful$/')); //Verificar si alguna parte del texto contiene la frase
    // }

    get recomended() {
        return $('//*[@id="ReviewContentall186550694_rightcol"]/a/div[2]'); //conseguir la ubicacion del titulo "recommended" en el comentario
    }

        async esperar(milisegundos) {
        await browser.pause(milisegundos);
    }

    get filtroDeControllerFriendly() {
        return $('//*[@id="genre_flyout"]/div/div[1]/a[6]/span'); //Conseguir la ubicacion del filtro de controller friendly
    }

    get filtroDeControlXbox() {
        return $('//*[@id="SaleSection_183771"]/div/div[2]/div[1]/div[2]'); //Conseguir la ubicacion del filtro de control de xbox
    }

    get juegoConFiltroControlXbox() {
        return $('//*[@id="SaleSection_93094"]/div/div[2]/div[1]/div[1]/div/div/div/a/div/div/div[2]/img'); //Conseguir la ubicacion del juego con filtro de control de xbox
    }

    async clickEnFiltroDeControllerFriendly() {
        await this.menuDeCategorias.moveTo();
        await this.menuDeCategorias.waitForDisplayed();
        await this.filtroDeControllerFriendly.click();
    }

    async seleccionarFiltroControlXbox() {
        await this.filtroDeControlXbox.scrollIntoView();
        await this.filtroDeControlXbox.click();
    }

    async seleccionarJuegoConFiltroControlXbox() {
        await this.juegoConFiltroControlXbox.click();
        await browser.pause(2000);
    }

    get comprobarJuegoConControlXbox() {
        return $('//*[@id="category_block"]/div[2]/div/a[1]/div[2]/div') //Conseguir la ubicacion del elemento que dice que se puede jugar con control de xbox
    }

    get verificacionMayorDeEdad() {
        return $('//*[@id="app_agegate"]/div[1]/div[2]/div'); //Conseguir la ubicacion del input de la edad
    }

    get elementoGiftCard() {
        return $('//*[@id="responsive_page_template_content"]/div[3]/div[1]/div/div[1]/a/div[1]/img'); //Conseguir la ubicacion del elemento de gift card
    }

    get addFundsToMyWallet() {
        return $('//*[@id="responsive_page_template_content"]/div[4]/div/div[4]/div[2]/div[5]/a[2]/span'); //Conseguir la ubicacion del boton de agregar fondos a la cartera
    }

    get add60ToMyWallet() {
        return $('//*[@id="prices_user"]/div[1]/div/div/a/span'); //Conseguir la ubicacion del boton de agregar $60mx a la cartera
    }

    get add120ToMyWallet() {
        return $('//*[@id="prices_user"]/div[2]/div/div/a/span'); //Conseguir la ubicacion del boton de agregar $60mx a la cartera
    }

    get add300ToMyWallet() {
        return $('//*[@id="prices_user"]/div[3]/div/div/a/span'); //Conseguir la ubicacion del boton de agregar $60mx a la cartera
    }

    get add600ToMyWallet() {
        return $('//*[@id="prices_user"]/div[4]/div/div/a/span'); //Conseguir la ubicacion del boton de agregar $60mx a la cartera
    }

    get add1200ToMyWallet() {
        return $('//*[@id="prices_user"]/div[5]/div/div/a/span'); //Conseguir la ubicacion del boton de agregar $60mx a la cartera
    }

    get verificacionInicioDeSesion() {
        return $('//*[@id="responsive_page_template_content"]/div[3]/div[2]/div/div/div/div[1]/div'); //Conseguir la ubicacion del boton de inicio de sesion
    }

    async abirGiftCards60() {
        await this.elementoGiftCard.click();
        await this.addFundsToMyWallet.click();
        await this.add60ToMyWallet.click();
    }

    async abirGiftCards120() {
        await this.elementoGiftCard.click();
        await this.addFundsToMyWallet.click();
        await this.add120ToMyWallet.click();
    }

    async abirGiftCards300() {
        await this.elementoGiftCard.click();
        await this.addFundsToMyWallet.click();
        await this.add300ToMyWallet.click();
    }

    async abirGiftCards600() {
        await this.elementoGiftCard.click();
        await this.addFundsToMyWallet.click();
        await this.add600ToMyWallet.click();
    }

    async abirGiftCards1200() {
        await this.elementoGiftCard.click();
        await this.addFundsToMyWallet.click();
        await this.add1200ToMyWallet.click();
    }

    get ingresarFecha() {
        return $('//*[@id="ageYear"]'); //Conseguir la ubicacion del input de la fecha
    }

    get verPagina() {
        return $('//*[@id="view_product_page_btn"]/span'); //Conseguir la ubicacion del input de la fecha
    }

    get contenidoPaginaMayorDeEdad() {
        return $('//*[@id="appHubAppName"]')
    }

    get errorNoAutorizado() {
        return $('/html/body/div[4]/div[3]/div/div[1]')
    }

    get opcionDeEdad() {
        return $('//*[@id="ageYear"]/option[106]'); //Conseguir la ubicacion de la opcion de la fecha 2005
    }

    async ingresarFechaDeNacimientoMenor() {
        await this.ingresarFecha.waitForDisplayed();
        await this.ingresarFecha.click();
        await browser.keys('2015');
        await browser.keys('Enter');
        await this.verPagina.click();
    }

    get volverVerificacionDeEdad(){
        return $('//*[@id="agegate_box"]/p/a[2]/span')
    }

    async ingresarFechaDeNacimientoMayor() {
        await this.volverVerificacionDeEdad.moveTo();
        await this.volverVerificacionDeEdad.click();
        await this.ingresarFecha.waitForDisplayed();
        await this.ingresarFecha.click();
        await browser.keys('1999');
        await browser.keys('Enter');
        await this.verPagina.click();
        await browser.pause(2000);
    }

    get inicioSesion(){
        return $('//*[@id="global_action_menu"]/a[2]')
    }

    async ingresaConCuentaValida(){
        await this.inicioSesion.click();
        await browser.pause(2000)
        await browser.keys('cuentaejemplo16');
        await browser.keys('Tab')
        await browser.keys('Wh^qCGC3*JwFh8W')
        await browser.keys('Enter');
        await browser.pause(2000)
    }

    get verificacionEmail(){
        return $('//*[@id="responsive_page_template_content"]/div[3]/div[1]/div/div/div/div[2]/form/div/div[1]/div[2]')
    }

    async ingresaConCuentaInvalida(){
        await this.inicioSesion.click();
        await browser.pause(2000)
        await browser.keys('cuentaejemplo16a');
        await browser.keys('Tab')
        await browser.keys('Wh^qCGC3*JwFh8Wsas')
        await browser.keys('Enter');
        await browser.pause(2000)
    }

    get errorDeAutenticacion() {
        return $('//*[@id="responsive_page_template_content"]/div[3]/div[1]/div/div/div/div[2]/div/form/div[5]')
    }

    open () {
        return super.open();
    }


}
module.exports = new steamPage();