import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Products from '../pageobjects/products.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i = 0; i < LoginPage.credentials.users.length; i++) {
            await LoginPage.open()
            await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password);
            await Products.open('inventory.html')
            await expect(Products.productsTitle).toBeExisting()
            await expect(Products.productsTitle).toHaveText(
            expect.stringContaining('Products'))
        }
    })
    it('should add one item to cart', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginPage.credentials.users[1], LoginPage.credentials.password);
        await Products.open('inventory.html');
        await Products.addToCart('sauce-labs-backpack');
        await expect(Products.shoppingCart).toBeExisting();


    })
})

