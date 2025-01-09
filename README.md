# chat-gpt-exo

# Initialisation d'un projet avec Playwright

Ce guide explique les étapes nécessaires pour initialiser un projet avec **Playwright**. Il suppose que **Node.js** et **Playwright** sont déjà installés sur votre machine.

---

## Prérequis

1. **Vérifier que Node.js est installé**
   
   Pour vérifier que Node.js est installé, utilisez la commande suivante :
   ```bash
   node -v
   ```
   Vous devriez voir une version comme `v16.x.x` ou plus récente.

2. **Vérifier que Playwright est installé**
   
   Pour vérifier que Playwright est installé, utilisez cette commande :
   ```bash
   npx playwright --version
   ```
   Vous devriez voir une sortie contenant la version de Playwright, par exemple : `Version 1.x.x`.

---

## Étapes d'initialisation

### 1. Initialiser un projet Node.js

Créez un projet Node.js dans le répertoire de votre choix :
```bash
npm init -y
```
Cette commande génère un fichier `package.json` avec des valeurs par défaut.

### 2. Initialiser Playwright

Utilisez la commande suivante pour configurer Playwright dans votre projet :
```bash
npm init playwright@latest
```
Cette commande :
- Installe Playwright dans votre projet.
- Configure les fichiers nécessaires (comme `playwright.config.ts`).
- Vous invite à choisir les navigateurs et options de test.

Pendant le processus, vous pouvez sélectionner :
- Les navigateurs à installer (Chromium, Firefox, WebKit).
- Les exemples et tests de base pour commencer rapidement.

---

## Vérification de l'installation

1. **Vérifiez que les navigateurs Playwright sont installés** :
   ```bash
   npx playwright install
   ```
   Cela garantit que les navigateurs (Chromium, Firefox, WebKit) sont correctement installés.

2. **Lancez un test Playwright d'exemple** :
   Si vous avez inclus des exemples lors de l'installation, lancez-les avec :
   ```bash
   npx playwright test
   ```
   Vous devriez voir les résultats des tests dans votre terminal.

---

## Résultat

Votre projet est maintenant prêt à utiliser Playwright pour l'automatisation des tests de navigateur.
Vous pouvez commencer à écrire vos propres scripts dans le dossier `tests` généré par Playwright.

