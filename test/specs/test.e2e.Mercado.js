const { expect } = require('@wdio/globals')
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

    it ('abrir el elemento Videojuegos' , async () => {
        await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toHaveText('Videojuegos')
        await expect(await mercadoPage.videoJuegosDeSubmenuTecnologia).toBeClickable()
        await mercadoPage.hacerClickEnVideoJuegos()
    })
})
