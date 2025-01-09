import { test, expect } from '@playwright/test';

test('1- Prompt simple + assertions - recherche bonnet', async ({ page }) => {
    // Étape 1 : Aller sur le site Decathlon
    await page.goto('https://www.decathlon.fr/');
    await expect(page).toHaveTitle(/DECATHLON/); //titre modifié 

    // Étape 2 : Accepter les cookies (si nécessaire)
    const cookieButton = page.locator('button:has-text("Accepter")');
    if (await cookieButton.isVisible()) {
        await cookieButton.click();
        console.log('✅ Cookies acceptés');
    } else {
        console.log('✅ Pas de cookie modal affiché');
    }

    // Étape 3 : Rechercher des bonnets
    const searchInput = page.getByPlaceholder('Rechercher un produit, un');
    await expect(searchInput).toBeVisible(); // Vérifier que la barre de recherche est visible
    await searchInput.click();
    await searchInput.fill('bonnet');
    await page.keyboard.press('Enter');

    // Attendre que les résultats apparaissent
    await page.waitForSelector('.product-list');
    const searchResults = page.locator('.product-list');
    await expect(searchResults).toBeVisible(); // Vérifier que les résultats sont affichés

    // Étape 4 : Sélectionner un produit (le premier de la liste)
    const firstProduct = page.getByRole('main').getByRole('list').first();
    const productTitle = await firstProduct.textContent();
    expect(productTitle).not.toBeNull(); // Vérifier que le produit a un titre
    console.log(`✅ Premier produit trouvé : ${productTitle}`);
    await firstProduct.click();

    // Étape 5 : Ajouter au panier
    const addToCartButton = page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR' }).getByLabel('Ajouter au panier');
    await expect(addToCartButton).toBeVisible(); // Vérifier que le bouton est visible
    await addToCartButton.click();
    console.log('✅ Produit ajouté au panier (première étape)');

    // Nouvelle étape : Valider l'ajout via le modal
    const modalAddToCartButton = page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' });
    await expect(modalAddToCartButton).toBeVisible(); // Vérifier que le bouton dans le modal est visible
    await modalAddToCartButton.click();
    console.log('✅ Produit ajouté au panier (modal validé)');

    // Étape 6 : Accéder au panier
    const cartLink = page.getByRole('link', { name: 'Mon panier' });
    await expect(cartLink).toBeVisible(); // Vérifier que le lien "Mon panier" est visible
    await cartLink.click();
    console.log('✅ Accès au panier validé');

    // Étape 7 : Simuler une commande
    const checkoutButton = page.getByRole('button', { name: 'Poursuivre la commande' });
    await expect(checkoutButton).toBeVisible(); // Vérifier que le bouton "Poursuivre la commande" est visible
    await checkoutButton.click();
    console.log('✅ Commande simulée');

    // Étape 8 : Vérifier la redirection vers la page de connexion ou de paiement
    await expect(page).toHaveURL(/login/i); // Vérifier que l'URL contient "login"
    console.log('🎉 Test terminé avec succès : les étapes de commande sont fonctionnelles.');
});
