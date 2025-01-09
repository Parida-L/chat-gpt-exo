# Documentation du Projet de Test Automatisé avec Playwright

Ce projet a pour objectif de réaliser des tests automatisés avec Playwright en **TypeScript** pour tester le site Decathlon. Les consignes ont été suivies étape par étape, et des scripts spécifiques ont été créés et ajustés pour répondre aux exigences. Voici une description détaillée des exercices réalisés, des conclusions tirées et des améliorations apportées.

---

## **Prérequis**

Avant de commencer, assurez-vous que les étapes d'initialisation du projet ont été suivies correctement.  
Ces étapes sont détaillées dans le fichier [**playwright-init.md**](./playwright-init.md), qui se trouve à la racine du projet. 

Le fichier contient :
- Les instructions pour installer Playwright.
- La configuration initiale du projet.
- Les commandes pour télécharger les navigateurs nécessaires.

---

## **1. Prompt Simple : Commander un Bonnet sur Decathlon**

### Consigne
- Prompt initial : *"Écris un test automatisé avec Playwright en TypeScript. Le cas de test est de commander un bonnet sur le site Decathlon."*
- Créer un nouveau projet avec les étapes décrites dans un fichier **README.md**.
- Le script généré a été enregistré dans le fichier `decath.1.bonnet.spec.ts`.

### Résultats
- **Code généré :** Un test automatisé pour commander un bonnet sur le site Decathlon.
- **Exécution :** Le test a échoué en raison de plusieurs erreurs liées aux **locators** (sélecteurs incorrects ou incompatibles avec la structure actuelle du site).
- **Solution :** Les locators ont été corrigés manuellement pour s'adapter à la structure DOM du site.
- **Conclusion :** Après corrections, le test a fonctionné correctement.

---

## **2. Ajout d'Assertions**

### Consigne
- À partir du code corrigé (`decath.1.bonnet.spec.ts`), un nouveau prompt a été envoyé pour demander l'ajout d'**assertions**.
- Le script mis à jour a été enregistré dans le fichier `decath.2.bonnet.spec.ts`.

### Résultats
- **Code généré :** Des assertions ont été ajoutées pour valider des points clés, comme la présence des éléments et la navigation correcte.
- **Exécution :** Le test a fonctionné, mais un problème mineur de locator a été identifié.
- **Conclusion :** Le code généré était globalement correct, nécessitant moins de corrections que dans le premier exercice. Une fois les erreurs mineures corrigées, le test était fonctionnel.

---

## **3. Implémentation du POM Design Pattern**

### Consigne
- Implémenter le test en utilisant le **Page Object Model (POM)**.
- Créer un dossier `pages` contenant les objets suivants :
  - **HomePage**
  - **ProductPage**
  - **SearchResultsPage**
  - **CartPage**
- Le script principal est enregistré dans `decath.3.bonnet.spec.ts`.

### Résultats
- **Code généré :** Un modèle POM a été mis en place, avec des méthodes bien définies pour chaque page.
- **Exécution :** De nombreuses erreurs ont été constatées, principalement liées à des locators incorrects et à une gestion inadéquate des superpositions (modals).
- **Solution :** J'ai repris une partie du code corrigé dans `decath.2.bonnet.spec.ts` pour ajuster les locators et améliorer la gestion des modals.
- **Conclusion :** Une fois corrigé, le modèle POM fonctionnait parfaitement et offrait une meilleure modularité et maintenabilité.

---

## **4. Rédaction de Cas de Tests (Passants, Non-Passants, Critiques)**

### Consigne
- Rédiger des cas de tests passants, non-passants et critiques pour le site Decathlon.
- Implémenter ces cas dans le projet et les tester.

### Résultats
- **Cas de tests créés :**
  - **Passants :** 
  - **Non-Passants :** 
  - **Critiques :** 
- **Exécution :** 
- **Conclusion :** 

---

## **Organisation des Fichiers**
- **Dossier `tests`:** Contient les fichiers de test principaux :
  - `decath.1.bonnet.spec.ts` : Test initial.
  - `decath.2.bonnet.spec.ts` : Test avec assertions.
  - `decath.3.bonnet.spec.ts` : Test utilisant le POM.
  - `decath.test.cases.spec.ts` : Cas de tests passants, non-passants et critiques.
- **Dossier `pages`:** Contient les objets de page pour l'implémentation POM :
  - `HomePage.ts`
  - `ProductPage.ts`
  - `SearchResultsPage.ts`
  - `CartPage.ts`

---

## **Conclusion Générale**
- Le projet a permis de couvrir plusieurs aspects des tests automatisés avec Playwright :
  - Rédaction et exécution de tests basiques.
  - Ajout d'assertions pour valider les points clés.
  - Adoption du POM pour une meilleure organisation.
  - Identification et correction des erreurs grâce à des cas de tests spécifiques.
- **Améliorations possibles :**
  - Ajouter des rapports de tests automatisés.
  - Étendre les cas de tests pour inclure des scénarios plus complexes (multi-produits, annulations).
  - Intégrer les tests dans un pipeline CI/CD.

---

## **Références**
- [**playwright-init.md**](./playwright-init.md) : Instructions pour initialiser le projet.
- [Documentation Playwright](https://playwright.dev/).

Ce projet offre une base solide pour développer des tests automatisés robustes et maintenables avec Playwright. 🎯