import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i = 0; i < LoginPage.credentials.users.length; i++) {
            await LoginPage.open()
            await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password);
            await InventoryPage.open('inventory.html')
            await expect(InventoryPage.productsTitle).toBeExisting()
            await expect(InventoryPage.productsTitle).toHaveText(
            expect.stringContaining('Products'))
        }
    })
})

