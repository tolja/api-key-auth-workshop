const express = require('express')
const app = express()

// API Key für Zugriff auf Ressourcen
const API_KEY = "SuperSecretAPIKey"

// Ressource ohne API Key Zugriff
app.get('/', (req, res) => {
  res.status(200).send('Ungeschützte Ressource')
})

// TODO: Routen absichern
app.use((req, res, next) => {
  // Hier kommt der Code für die Überprüfung des API-Key hinein.

  const apiKey = null;

  // Pseudo:
  // API-Key aus req-Objekt abrufen
  // Fehler, wenn API_KEY nicht gegeben oder nicht übereinstimmend
  if (true) {

  }

  next()

});

app.get('/secret', (req, res) => {
  res.status(200).send('Geschützte Ressource')
})


app.listen(3000, () => {
  console.log("Server ist listening on http://localhost:3000/");
})
