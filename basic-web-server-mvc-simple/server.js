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
app.set("views", "./view");

// Parser la query string (utilise dans post)
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Home
app.get("/", (req, res) => {
    //res.send("Hello 970M - MVC");
    res.render("./index");
});

// Page de test pour la class Voiture
app.get("/test_voiture/", (req, res) => {
    const Voiture = require("./model/ModelVoiture");
    let vehicule = new Voiture("Dacia", "Rouge", "123456789");
    let message = vehicule.getAtt();
    res.render("./testVoiture", {
        marque: message.marque,
        couleur: message.couleur,
        immatriculation: message.immatriculation,
    });
});

app.get("/lire_voiture/", (req, res) => {
    const Voiture = require("./model/ModelVoiture");
    Voiture.getAllVoitures((select) => {
        //console.log("select:", select);
        res.render("./lireVoiture", { result: select });
    });
});

app.get("/creer_voiture/", (req, res) => {
    m = undefined;
    res.render("./creerVoiture", { message: m });
});

app.post("/creer_voiture", function (req, res) {
    console.log("qs:", req.body);

    //let params = querystring.parse(url.parse(req.url).query);
    if (req.body.marque === undefined || req.body.marque === "") {
        console.log("VIDE!!!");
        res.write("Le formulaire est vide");
        res.redirect("/");
    } else {
        const Voiture = require("./model/ModelVoiture");
        let v = new Voiture(
            req.body.marque,
            req.body.couleur,
            req.body.immatriculation
        );

        v.save((m) => {
            //res.write("Insert db");
            res.render("./creerVoiture", { message: m });
        });
    }
});

app.listen(port, hostname, () => {
    //console.log(`Example app listening on ${hostname}:${port}`);
    console.log(`Example app listening on http://localhost:${port}`);
});
