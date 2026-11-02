import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.open('inventory.html')
        await expect(InventoryPage.productsTitle).toBeExisting()
        await expect(InventoryPage.productsTitle).toHaveText(
            expect.stringContaining('Products'))
    })
})

