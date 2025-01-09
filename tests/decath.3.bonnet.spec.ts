import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

//POM DESIGN PATTERN 
test('Recherche et commande d\'un bonnet sur Decathlon', async ({ page }) => {
    // Initialiser les pages
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Étape 1 : Aller sur la page d'accueil et accepter les cookies
    await homePage.navigateToHome();
    console.log('1️⃣ Accès à la page d\'accueil ');
    // Étape 2 : Accepter les cookies (si nécessaire)
    await homePage.acceptCookies();
    console.log('2️⃣ Cookies acceptés.');

    // Étape 3 : Rechercher un bonnet
    await homePage.searchProduct('bonnet');
    await searchResultsPage.waitForResults();
    console.log('3️⃣ Recherche de bonnet effectuée.');

    // Étape 4 : Sélectionner un produit (le premier de la liste)
    const selectedProductTitle = await searchResultsPage.selectFirstProduct();
    expect(selectedProductTitle).not.toBeNull();
    console.log(`4️⃣ Produit sélectionné : ${selectedProductTitle}`);

    // Étape 5 : Ajouter au panier
    await productPage.addToCart();
    console.log('5️⃣ Produit ajouté au panier.');

    // Étape 6 : Accéder au panier
    await cartPage.goToCart();
    console.log('6️⃣ Accès au panier.');

    // Étape 7 : Simuler une commande
    await cartPage.proceedToCheckout();
    console.log('7️⃣ Simuler une commande');

    // Étape 8 : Vérifier la redirection vers la page de connexion ou de paiement
    await expect(page).toHaveURL(/login/i);
    console.log('🎉 Test 3 terminé avec succès : les étapes de commande sont fonctionnelles.');
});
