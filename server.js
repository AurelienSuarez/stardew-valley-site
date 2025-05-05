const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Accueil - Stardew Valley',
    pageTitle: 'Bienvenue ? Stardew Valley' 
  });
});

app.get('/personnages', (req, res) => {
  res.render('personnages', { 
    title: 'Personnages - Stardew Valley',
    pageTitle: 'Les habitants de Stardew Valley' 
  });
});

app.get('/cultures', (req, res) => {
  res.render('cultures', { 
    title: 'Cultures - Stardew Valley',
    pageTitle: 'Guide des cultures' 
  });
});

app.get('/peche', (req, res) => {
  res.render('peche', { 
    title: 'P?che - Stardew Valley',
    pageTitle: 'Guide de p?che' 
  });
});

app.get('/mines', (req, res) => {
  res.render('mines', { 
    title: 'Mines - Stardew Valley',
    pageTitle: 'Guide des mines' 
  });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Page non trouv?e',
    pageTitle: 'Oups! Page non trouv?e' 
  });
});

// D?marrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'ex?cution sur http://localhost:${PORT}`);
});