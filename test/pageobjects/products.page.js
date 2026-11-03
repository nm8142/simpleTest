import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {
    // VARIABLES
    productName = null;

    // GETTERS
    get productsTitle () {
        return $('span.title');
    }
    get addButton () {
        return $(`button[name=add-to-cart-${Products.productName}]`); // Problem: product name must be in kebab case
    }
    get shoppingCart () {
        return $('a[aria-label="Cart, 1 items"]');
    }

    async addToCart (product) {
        // Selects product whose name matches string in parameter and clicks add to cart
        Products.productName = product;
        await this.addButton.click();
    }

}

export default new Products();