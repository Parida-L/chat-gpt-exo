import { Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCart() {
        console.log('⏳ Vérification des modals ou superpositions...');

        // Vérifiez et fermez la superposition
        // const modalOverlay = this.page.locator('#vtmn-modal-background');
        // const closeModalButton = this.page.locator('button[aria-label="Fermer"]'); // Ajustez selon le DOM

        // if (await modalOverlay.isVisible()) {
        //     console.log('⚠️ Superposition détectée.');
        //     if (await closeModalButton.isVisible()) {
        //         console.log('⏳ Bouton de fermeture détecté. Tentative de fermeture.');
        //         await closeModalButton.click();
        //     } else {
        //         console.log('⚠️ Bouton de fermeture non détecté. Forçage de clic sur la superposition.');
        //         await modalOverlay.dispatchEvent('click'); // Événement simulé pour fermer
        //     }

        //     // Attendez que la superposition disparaisse
        //     await modalOverlay.waitFor({ state: 'hidden', timeout: 5000 });
        //     console.log('✅ Superposition fermée.');
        // }

        // Accéder au lien "Mon panier"
        const cartLink = this.page.getByRole('link', { name: 'Mon panier' });
        await expect(cartLink).toBeVisible();
        await cartLink.click();
        console.log('✅ Lien "Mon panier" cliqué.');
    }

    async proceedToCheckout() {
        const checkoutButton = this.page.getByRole('button', { name: 'Poursuivre la commande' });

        // Vérifier la présence du produit dans le panier
        // const cartItems = this.page.locator('.cart-item');
        // await expect(cartItems).toHaveCount(1);
        // console.log('✅ Produit confirmé dans le panier.');

        // Attendre que le bouton soit activé
        // console.log('⏳ Attente de l\'activation du bouton "Poursuivre la commande"...');
        // await checkoutButton.waitFor({ state: 'enabled', timeout: 10000 });
        // console.log('✅ Bouton "Poursuivre la commande" activé.');

        // Cliquer sur le bouton
        await expect(checkoutButton).toBeVisible();
        await checkoutButton.click();
        console.log('✅ Commande poursuivie.');

        
    }


}
