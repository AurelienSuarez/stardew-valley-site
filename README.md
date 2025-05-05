# Site Web Stardew Valley

Un site web sur Stardew Valley d?velopp? avec Node.js et Express.

## Installation

1. Clonez ce d?p?t :
```
git clone https://github.com/AurelienSuarez/stardew-valley-site.git
cd stardew-valley-site
```

2. Installez les d?pendances :
```
npm install
```

3. D?marrez le serveur :
```
npm start
```

4. Ouvrez votre navigateur ? l'adresse : `http://localhost:3000`

## Structure du projet

- `server.js` - Point d'entr?e de l'application
- `views/` - Templates EJS
- `public/` - Fichiers statiques (CSS, JS, images)

## Important pour le d?veloppement

Vous devez cr?er les dossiers d'images et ajouter vos propres images :

```
public/images/
public/images/logo.png
public/images/logo-small.png
public/images/stardew-valley-banner.jpg
public/images/villagers.jpg
public/images/crops.jpg
public/images/fishing.jpg
public/images/mines.jpg
public/images/junimo-sad.png
public/images/characters/abigail.png
public/images/characters/alex.png
public/images/characters/caroline.png
public/images/characters/clint.png
```

Vous pouvez trouver des images libres de droits ou des images officielles sous licence appropri?e pour compl?ter le site.

## Mode d?veloppement

Pour lancer le serveur en mode d?veloppement avec rechargement automatique :
```
npm run dev
```

## Licence

Ce projet est sous licence MIT.