const { expect, browser } = require('@wdio/globals')
const steamPage = require('../pageobjects/steam.page')

describe('Comprar en Steam', () => {
    it('Buscar juego', async () => {
        await steamPage.open()
        await steamPage.buscarJuego()
        await steamPage.seleccionarJuego()
        await expect(await steamPage.verificarJuego).toHaveText('Undertale')
    })

    it('Agregar juego al carrito', async () => {
        await steamPage.agregarJuegoAlCarrito()
        await expect(await steamPage.verificarCompra).toHaveText('Added to your cart!')
        await steamPage.revisarCarrito()
        await expect(await steamPage.verificarIconoCarrito).toHaveText('Cart (1)')
    })

    it('Eliminar juego del carrito', async () => {
        await steamPage.eliminarDelCarrito()
        await expect(await steamPage.verificarEliminacion).toHaveText('Your cart is empty.')
    })
})

describe('Navegar en steam', () => {
    it('Buscar primer resultado, juego por filtro Free To Play', async () => {
        await steamPage.open()
        await steamPage.clickEnFreeToPlay()
        await steamPage.verificarJuegoFreeToPlay()
        await expect(await steamPage.verificarInfoJuego).toHaveText('Free To Play')
    })

    it('Buscar segundo resultado, juego por filtro Free To Play', async () => {
        await steamPage.open()
        await steamPage.clickEnFreeToPlay()
        await steamPage.verificarJuegoFreeToPlay2()
        await expect(await steamPage.verificarInfoJuego).toHaveText('Free To Play')
    })
})

    // it('Revisar si la reseña no es recomendada', async () => { // No se pudo hacer funcionar :C Los comentarios son dinamicos
    //         await steamPage.revisarReseñas()
    //         await expect(await steamPage.recomended).toHaveText('Not Recommended')
    // })
    
    // it('Revisar si la reseña es de ayuda', async () => {  // No se pudo hacer funcionar :C Los comentarios son dinamicos
    //     await steamPage.revisarReseñas()
    //     // await steamPage.verificarEsDeAyuda()
    //     await expect(await steamPage.isHealpful.includes(' /^\d+ people found this review helpful$/')).to.be.true;
    // })


describe('Verificacion de filtros', () => {
    it('Verificar si se puede jugar el juego con control de xbox', async () => {
        await steamPage.open()
        await steamPage.clickEnFiltroDeControllerFriendly()
        await steamPage.seleccionarFiltroControlXbox()
        await steamPage.seleccionarJuegoConFiltroControlXbox()
        await expect(await steamPage.comprobarJuegoConControlXbox).toHaveText('Xbox Controllers')
    })

    it('Verificar si hay una restriccion de edad para entrar', async () => {
        await steamPage.open()
        await steamPage.buscarJuegoParaVerificarMayoriaDeEdad()
        await steamPage.seleccionarJuego()
        await expect(await steamPage.verificacionMayorDeEdad).toBeDisplayed()
        await expect(await steamPage.verificacionMayorDeEdad).toHaveText('Please enter your birth date to continue:')
    })

    it('Verificar la funcionalidad de la restriccion de edad, al ingresar una fecha menor a 18 años', async () => {
        await steamPage.open()
        await steamPage.buscarJuegoParaVerificarMayoriaDeEdad()
        await steamPage.seleccionarJuego()
        await steamPage.ingresarFechaDeNacimientoMenor()
        await expect(await steamPage.errorNoAutorizado).toHaveText('Sorry, but you\'re not permitted to view these materials at this time.')
    })

    it('Verificar la funcionalidad de la restriccion de edad, al ingresar una fecha mayor a 18 años', async () => {
        await steamPage.open()
        await steamPage.buscarJuegoParaVerificarMayoriaDeEdad()
        await steamPage.seleccionarJuego()
        await steamPage.ingresarFechaDeNacimientoMayor()
        await expect(await steamPage.contenidoPaginaMayorDeEdad).toHaveText('Baldur\'s Gate 3')
    })
})

describe('Inicio de sesion', () => {
    it('Ingreso con cuenta valida', async () => {
        await steamPage.open()
        await steamPage.ingresaConCuentaValida()
        await expect(await steamPage.verificacionEmail).toHaveText('You have an email authenticator protecting this account.')
    })
        
    it('Ingreso con cuenta invalida', async () => {
        await steamPage.open()
        await steamPage.ingresaConCuentaInvalida()
        await expect(await steamPage.errorDeAutenticacion).toHaveText('Please check your password and account name and try again.')
    })
})

describe('Compra de steamCards', () => {
    it('Compra de steam cards de $60mx', async () => {
        await steamPage.open()
        await steamPage.abirGiftCards60()
        await expect(await steamPage.verificacionInicioDeSesion).toHaveText('Sign in')
    })

    it('Compra de steam cards de $120mx', async () => {
        await steamPage.open()
        await steamPage.abirGiftCards120()
        await expect(await steamPage.verificacionInicioDeSesion).toHaveText('Sign in')
    })

    it('Compra de steam cards $300mx', async () => {
        await steamPage.open()
        await steamPage.abirGiftCards300()
        await expect(await steamPage.verificacionInicioDeSesion).toHaveText('Sign in')
    })

    it('Compra de steam cards $600mx', async () => {
        await steamPage.open()
        await steamPage.abirGiftCards600()
        await expect(await steamPage.verificacionInicioDeSesion).toHaveText('Sign in')
    })

    it('Compra de steam cards $1200mx', async () => {
        await steamPage.open()
        await steamPage.abirGiftCards1200()
        await expect(await steamPage.verificacionInicioDeSesion).toHaveText('Sign in')
    })
})