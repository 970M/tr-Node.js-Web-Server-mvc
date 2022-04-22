const fs = require("fs");
const express = require("express");

const app = express();

// Configuration URL
const port = 1337;
const hostname = ""; // "127.0.0.1";

// Definir le repertoire racine
//console.log(__dirname);
//app.use(express.static("/"));

// Definir le moteur de templates à ejs
app.set("view engine", "ejs");
// Definir le repertoire des vues .ejs
app.set("views", "./");

// Home
app.get("/", (req, res) => {
    res.send("Hello 970M");
});

// Page de test pour la class Voiture
app.get("/test_voiture/", (req, res) => {
    const Voiture = require("./Voiture");
    let vehicule = new Voiture("Dacia", "Rouge", "123456789");
    let message = vehicule.display();
    res.render("./testVoiture", {
        marque: message.marque,
        couleur: message.couleur,
        immatriculation: message.immatriculation,
    });
});

app.get("/lire_voiture/", (req, res) => {
    const Voiture = require("./Voiture");
    Voiture.getAllVoitures((select) => {
        console.log("select:", select);
        res.render("./lireVoiture", { result: select });
    });
});

app.listen(port, hostname, () => {
    //console.log(`Example app listening on ${hostname}:${port}`);
    console.log(`Example app listening on http://localhost:${port}`);
});
