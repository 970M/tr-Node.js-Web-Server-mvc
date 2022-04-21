let connection = require("./Conf");

class Voiture {
    /* File de priorite: Un arbre binaire de recherche tassé et geré par un tableau */

    #marque;
    #couleur;
    #immatriculation;

    // Getters
    getMarque = () => this.#marque;
    getcouleur = () => this.#couleur;
    getimmatriculation = () => this.#immatriculation;
    getAtt = () => {
        return {
            marque: this.#marque,
            couleur: this.#couleur,
            immatriculation: this.#immatriculation,
        };
    };
    // Setters
    setMarque = (m) => {
        this.#marque = m;
    };
    setcouleur = (c) => {
        this.#couleur = c;
    };
    setimmatriculation = (i) => {
        this.#immatriculation = i;
    };

    constructor(m, c, i) {
        this.#marque = m;
        this.#couleur = c;
        this.#immatriculation = i;
    }

    display() {
        let m = {
            marque: this.#marque,
            couleur: this.#couleur,
            immatriculation: this.#immatriculation,
        };
        return m;
    }

    static getAllVoitures() {
        connection.query("SELECT * FROM voiture", (err, rows) => {
            if (err) throw err;

            let results = Object.values(JSON.parse(JSON.stringify(rows)));
            //console.log("result:", results);
            let x = results.map(
                (r) => new Voiture(r.marque, r.couleur, r.immatriculation)
            );
            console.log("x:", x);
            return x;
        });
    }
}

module.exports = Voiture;
