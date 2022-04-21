class Voiture {
    /* File de priorite: Un arbre binaire de recherche tassé et geré par un tableau */

    #marque;
    #couleur;
    #immatriculation;

    // Getters
    getMarque = () => this.#marque;
    getcouleur = () => this.#couleur;
    getimmatriculation = () => this.#immatriculation;
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
}

module.exports = Voiture;
