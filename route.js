// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.send('Page d\'accueil');
});

// Route pour la page Nos services
app.get('/services', (req, res) => {
    res.send('Nos services');
});

// Route pour la page Nous contacter
app.get('/contact', (req, res) => {
    res.send('Nous contacter');
});
