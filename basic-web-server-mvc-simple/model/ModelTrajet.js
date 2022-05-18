let connection = require("./Conf");
let connection = require("./Utilisateur");

class Utilisateur {
    #id;
    #depart;
    #arrivee;
    #date;
    #nbPlace;
    #prix;

    // Getters
    getId = () => this.#id;
    getDepart = () => this.#depart;
    getArrivee = () => this.#arrivee;
    getDate = () => this.#date;
    getNbPlace = () => this.#nbPlace;
    getPrix = () => this.#prix;

    // Setters
    setId = (v) => {
        this.#id = v;
    };
    setDepart = (v) => {
        this.#depart = v;
    };
    setArrivee = (v) => {
        this.#arrivee = v;
    };
    setDate = (v) => {
        this.#date = v;
    };
    setNbPlace = (v) => {
        this.#nbPlace = v;
    };
    setPrix = (v) => {
        this.#prix = v;
    };

    constructor(data = []) {
        if (!data.length === 0) {
            this.#id = data.id;
            this.#depart = data.prenom;
            this.#arrivee = data.arrivee;
            this.#date = data.date;
            this.#nbPlace = data.nbPlace;
            this.#prix = data.prix;
        }
    }

    display() {
        let m = {
            id: this.#id,
            depart: this.#depart,
            arrivee: this.#arrivee,
            date: this.#date,
            nbPlace: this.#nbPlace,
            prix: this.#prix,
        };
        return m;
    }

    static getAllTrajet(callback) {
        connection.query("SELECT * FROM trajet", (err, res) => {
            if (err) throw err;

            let rows = Object.values(JSON.parse(JSON.stringify(res)));
            let x = rows.map(
                (row) => new Trajet(row.nom, row.prenom, row.login)
            );
            callback(x);
        });
    }

    static findPassagers(id, callback) {
        let sql =
            "SELECT u.* FROM trajet t INNER JOIN passager p ON p.trajet_id = t.id INNER JOIN utilisateur u ON u.login = p.utilisateur_login WHERE t.id = ?";
        connection.query(sql, [id], (err, res) => {
            if (err) throw err;

            let rows = Object.values(JSON.parse(JSON.stringify(res)));
            let x = rows.map(
                (row) => new Utilisateur(row.nom, row.prenom, row.login)
            );
            callback(x);
        });
    }
}

module.exports = Trajet;
