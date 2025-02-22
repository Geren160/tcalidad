const { $, expect, browser } = require('@wdio/globals')
const PageMercado = require('./page.Mercado');


class mercadoPage extends PageMercado {

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

    get videoJuegosDeSubmenuTecnologia2 () {
        return $('/html/body/header/div/div[5]/div/ul/li[1]/div/div/div/div/div[5]/ul/li[1]/a');
    }

    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.moveTo();
    }

    async desplegarMenuDeTecnología () {
        await this.menuDeTecnologíaInternoEnCategorias.moveTo();
    }

    async hacerClickEnVideoJuegos () {
        await this.videoJuegosDeSubmenuTecnologia.click();
    }

    get seccionVideojuegos(){
        return $('//*[@id="root-app"]/div[2]/div/h1/b');
    }

    get ofertas () {
        return $('//a[contains(text(),"Ofertas")]');
    }

    async hacerClickEnOfertas () {
        await this.ofertas.click();
    }

    get filtroFull () {
        return $('//*[@id=":R2jan:"]')
    }

    async verificarIcono() {
        // Selecciona el elemento con la clase `poly-shipping__promise-icon--full`
        const icon = await $('.poly-shipping__promise-icon--full');
        
        // Verificar si el elemento existe
        const exists = await icon.isExisting();
        
        if (!exists) {
            return { exists: false, isVisible: false };  // Si no existe, devolvemos que no es visible
        }
    
        // Verificar si el elemento es visible
        const isVisible = await icon.isDisplayed();
        
        // Retornar el resultado de la verificación
        return { exists, isVisible };
    }

    async hacerClickEnFiltroFull () {
        await this.filtroFull.click();
    }

    get filtroLlegaMañana () {
        return $('//*[@id=":R2lan:"]')
    }

    async hacerClickEnFiltroLlegaMañana () {
        await this.filtroLlegaMañana.waitForClickable({ timeout: 10000 });
        await this.filtroLlegaMañana.moveTo();
        await this.filtroLlegaMañana.click();
        await browser.pause(2000);
    }

    get verificacionEnElementoFiltroFull () {
        return $('class="poly-shipping__promise-icon--full"')
    }

    get verificacionEnElementoFiltroLlegaMañana () {
        return $('//*[@id=":Ra1j7:"]/div[2]/div[2]/span')
    }

    get filtroOfertasRelampago () { //boton para hacer clic en ofertas relampago
        return $('//*[@id=":R16:"]/div[2]/div/div/div[2]/div')
    }

    get verificacionEnElementoFiltroOfertasRelampago () { 
        return $('//*[@id=":Ra1j7:"]/div[2]/span[1]')
    }

    get verificacionEnElementoFiltroOfertasRelampago2 () {
        return $('//*[@id=":Ra2j7:"]/div[2]/span[1]')
    }

    async hacerClickEnFiltroOfertasRelampago () {
        await this.filtroOfertasRelampago.moveTo();
        await this.filtroOfertasRelampago.waitForClickable({ timeout: 2000 });
        await this.filtroOfertasRelampago.click();
    }

    async esperar(milisegundos) {}

    open () {
        return super.open();
    }
}

module.exports = new mercadoPage();
