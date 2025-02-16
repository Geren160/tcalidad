const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    */
    open () {
        return browser.url(`https://www.mercadolibre.com.mx/`)
        // return browser.url(`https://store.steampowered.com/?l=english`)
    }
}
