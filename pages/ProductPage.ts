import { Page, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        console.log('⏳ Recherche du bouton "Ajouter au panier"...');

        const addToCartButton = this.page
            .getByRole('main')
            .getByRole('list')
            .locator('div')
            .filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR' })
            .getByLabel('Ajouter au panier');

        console.log('✅ Bouton "Ajouter au panier" localisé.');
        await expect(addToCartButton).toBeVisible(); //ajout 
        await addToCartButton.click();
        console.log('✅ Produit ajouté au panier.');

        // Vérification et validation dans le modal
        console.log('⏳ Vérification de la présence du modal pour confirmer l\'ajout au panier...');
        const modalAddToCartButton = this.page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' });
        await expect(modalAddToCartButton).toBeVisible(); // Vérifier que le bouton dans le modal est visible
        await modalAddToCartButton.click();
        console.log('✅ Ajout au panier confirmé via le modal.');
        
    }
}
