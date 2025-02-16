const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')

describe('Navegando en mercado libre', () => {
    it('Verificar el menu de categorias', async () => {
        await loginPage.open()
        await loginPage.desplegarMenuDeCategorias()
        await expect(await loginPage.menuDeVehiculosInternoEnCategorias).toHaveText('Vehículos')
        await expect(await loginPage.menuDeSupermercadoInternoEnCategorias).toHaveText('Supermercado')
    })
})

describe('Navegando en mercado libre', () => {
    it('Verificar el submenu de Tecnología dentro del menu categorias y abrir el elemento Videojuegos', async () => {
        await loginPage.open()
        await loginPage.desplegarMenuDeCategorias()
        await loginPage.desplegarMenuDeTecnología()
        await expect(await loginPage.menuDeTecnologíaInternoEnCategorias).toHaveText('Tecnología')
        await expect(await loginPage.videoJuegosDeSubmenuTecnologia).toHaveText('Videojuegos')
        await expect(await loginPage.videoJuegosDeSubmenuTecnologia).toBeClickable()
    })
})