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