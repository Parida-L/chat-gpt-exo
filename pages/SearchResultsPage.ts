import { Page, expect} from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForResults() {
        await this.page.waitForSelector('.product-list');
        //ajout 
        const searchResults = this.page.locator('.product-list');
        await expect(searchResults).toBeVisible();
    }

    async selectFirstProduct() {
        const firstProduct = this.page.getByRole('main').getByRole('list').first();
        const productTitle = await firstProduct.textContent();
        expect(productTitle).not.toBeNull(); // ajout 
        console.log(`✅ Premier produit trouvé : ${productTitle}`); //ajout 
        await firstProduct.click();
        return productTitle; // Retourne le titre pour validation plus tard
    }
}
