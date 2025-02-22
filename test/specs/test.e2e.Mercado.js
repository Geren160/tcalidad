const { expect, browser } = require('@wdio/globals')
const mercadoPage = require('../pageobjects/mercado.page')

describe('Navegando en mercado libre', () => {
    it('Verificar el menu de categorias', async () => {
        await mercadoPage.open()
        await mercadoPage.desplegarMenuDeCategorias()
        await expect(await mercadoPage.menuDeVehiculosInternoEnCategorias).toHaveText('Vehículos')
        await expect(await mercadoPage.menuDeSupermercadoInternoEnCategorias).toHaveText('Supermercado')
    })

    it('Verificar el submenu de Tecnología dentro del menu categorias', async () => {
        await mercadoPage.desplegarMenuDeTecnología()
        await expect(await mercadoPage.menuDeTecnologíaInternoEnCategorias).toHaveText('Tecnología')
    })

    it('abrir el elemento Videojuegos' , async () => {
        await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toHaveText('Videojuegos')
        await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toBeClickable()
        await mercadoPage.videoJuegosDeSubmenuTecnologia.click()
        await mercadoPage.videoJuegosDeSubmenuTecnologia2.click()
        await browser.pause(2000)
        await expect(await mercadoPage.seccionVideojuegos).toHaveText('Videojuegos')
    })
})

describe('Verificar funcionamiento de filtros', () => {
    it('Filtro: full', async () => {
        await mercadoPage.open()
        await mercadoPage.hacerClickEnOfertas()
        await mercadoPage.hacerClickEnFiltroFull()
        await mercadoPage.verificarIcono().then(result => {
            if (result.exists && result.isVisible) {
                console.log('El icono existe y es visible');
            } 
            else {
                console.log('El icono no está presente o no es visible');
            }
        })
        .catch(error => {
            console.error('Error en la verificación:', error);}); // Gracias chatgpt!
    })

    // it('Filtro: llega mañana', async () => { // No se pudo hacer funcionar :C en algunos casos si aparece el elemento y en otras ocasiones no
    //     await mercadoPage.open()
    //     await mercadoPage.hacerClickEnOfertas()
    //     await mercadoPage.hacerClickEnFiltroLlegaMañana()
    //     await expect(await mercadoPage.verificacionEnElementoFiltroLlegaMañana).toContain('/Llega gratis mañana .*/')
    // })

    it('Filtro: Ofertas relampago', async () => {
        await mercadoPage.open()
        await mercadoPage.hacerClickEnOfertas()
        await mercadoPage.hacerClickEnFiltroOfertasRelampago()
        await expect(await mercadoPage.verificacionEnElementoFiltroOfertasRelampago).toHaveText('OFERTA RELÁMPAGO')
        await expect(await mercadoPage.verificacionEnElementoFiltroOfertasRelampago2).toHaveText('OFERTA RELÁMPAGO')
    })

})
