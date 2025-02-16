const { expect } = require('@wdio/globals')
const mercadoPage = require('../pageobjects/mercado.page')
const steamPage = require('../pageobjects/steam.page')

// describe('Navegando en mercado libre', () => {
//     it('Verificar el menu de categorias', async () => {
//         await mercadoPage.open()
//         await mercadoPage.desplegarMenuDeCategorias()
//         await expect(await mercadoPage.menuDeVehiculosInternoEnCategorias).toHaveText('Vehículos')
//         await expect(await mercadoPage.menuDeSupermercadoInternoEnCategorias).toHaveText('Supermercado')
//     })
// })

// describe('Navegando en mercado libre', () => {
//     it('Verificar el submenu de Tecnología dentro del menu categorias y abrir el elemento Videojuegos', async () => {
//         await mercadoPage.open()
//         await mercadoPage.desplegarMenuDeCategorias()
//         await mercadoPage.desplegarMenuDeTecnología()
//         await expect(await mercadoPage.menuDeTecnologíaInternoEnCategorias).toHaveText('Tecnología')
//         await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toHaveText('Videojuegos')
//         await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toBeClickable()
//     })
// })

describe('Comprando en Steam', () => {
    it('Buscar juego', async () => {
        await steamPage.open()
        await steamPage.buscarJuego()
        await steamPage.seleccionarJuego()
        await expect(await steamPage.verificarJuego).toHaveText('Undertale')
    })

    it('Agregar juego al carrito', async () => {
        await steamPage.agregarJuegoAlCarrito()
        await expect(await steamPage.verificarCompra).toHaveText('Added to your cart!')
    })

    it('Eliminar juego del carrito', async () => {
        await steamPage.revisarCarrito()
        await expect(await steamPage.verificarNotificacionCarrito).toBeDisplayed()
    })
})