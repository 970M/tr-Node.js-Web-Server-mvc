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

    static getAllVoitures(callback) {
        connection.query("SELECT * FROM voiture", (err, res) => {
            if (err) throw err;

            let rows = Object.values(JSON.parse(JSON.stringify(res)));
            let x = rows.map(
                (row) =>
                    new Voiture(row.marque, row.couleur, row.immatriculation)
            );
            callback(x);
        });
    }
}

module.exports = Voiture;
