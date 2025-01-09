import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHome() {
        await this.page.goto('https://www.decathlon.fr/' ,{ timeout: 60000 });
        await this.page.waitForSelector('header');
        //ajout depuis decath2
        await expect(this.page).toHaveTitle(/DECATHLON/); 
    }

    async acceptCookies() {
        const cookieButton = this.page.locator('button:has-text("Accepter")');
        if (await cookieButton.isVisible()) {
            await cookieButton.click();
            //ajout depuis decath2
            console.log('✅ Cookies acceptés'); 
        } else { 
            console.log('✅ Pas de cookie modal affiché');
        }
    }

    async searchProduct(productName: string) {
        const searchInput = this.page.getByPlaceholder('Rechercher un produit, un');
        //ajout depuis decath2
        await expect(searchInput).toBeVisible(); 
        await searchInput.click();
        await searchInput.fill(productName);
        await this.page.keyboard.press('Enter');
    }
}
