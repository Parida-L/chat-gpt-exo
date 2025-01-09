import { Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCart() {
        
        // Accéder au lien "Mon panier"
        const cartLink = this.page.getByRole('link', { name: 'Mon panier' });
        await expect(cartLink).toBeVisible();
        await cartLink.click();
        console.log('✅ Lien "Mon panier" cliqué.');
    }

    async proceedToCheckout() {
        const checkoutButton = this.page.getByRole('button', { name: 'Poursuivre la commande' });

        // Vérifier la présence du produit dans le panier
        const cartItems = this.page.getByText('(1 article)');
        await expect(cartItems).toHaveCount(1 ,{ timeout: 10000 });
        console.log('✅ Produit confirmé dans le panier.');

        // Attendre que le bouton soit activé
        console.log('⏳ Attente de l\'activation du bouton "Poursuivre la commande"...');
        await checkoutButton.waitFor({ state: 'visible', timeout: 10000 });
        console.log('✅ Bouton "Poursuivre la commande" activé.');

        // Cliquer sur le bouton
        await expect(checkoutButton).toBeVisible();
        await checkoutButton.click();
        console.log('✅ Commande poursuivie.');

        
    }


}
