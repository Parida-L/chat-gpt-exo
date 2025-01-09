import { test, expect } from '@playwright/test';

test('1- Prompt simple - recherche bonnet', async ({ page }) => {
    // Étape 1 : Aller sur le site Decathlon
    await page.goto('https://www.decathlon.fr/');

    // Étape 2 : Accepter les cookies (si nécessaire)
    const cookieButton = await page.locator('button:has-text("Accepter")');
    if (await cookieButton.isVisible()) {
        await cookieButton.click();
    }

    // Étape 3 : Rechercher des baskets
    await page.getByPlaceholder('Rechercher un produit, un').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.keyboard.press('Enter');

    // Attendre que les résultats apparaissent
    await page.waitForSelector('.product-list');

    // Étape 4 : Sélectionner un produit (le premier de la liste)
    const firstProduct = await page.getByRole('main').getByRole('list').first();
    const productTitle = await firstProduct.textContent(); // Pour validation plus tard
    await firstProduct.click();

    // Étape 5 : Ajouter au panier
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();

    //Nouvelle étape à ajouter 
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click()

    // Étape 6 : Accéder au panier
    await page.getByRole('link', { name: 'Mon panier' }).click();

    // Vérification : Le produit est dans le panier
    // const cartItem = await page.locator('.cart-item .product-title');
    // await expect(cartItem).toHaveText(productTitle || '');

    // Étape 7 : Simuler une commande
    await page.getByRole('button', { name: 'Poursuivre la commande' }).click();

    // Étape 8 : Vérifier la redirection vers la page de connexion ou de paiement
    await expect(page).toHaveURL(/login/i);

    console.log('🎉 Test terminé avec succès : les étapes de commande sont fonctionnelles.');
});