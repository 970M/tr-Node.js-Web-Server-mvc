let connection = require("./Conf");

class Utilisateur {
    #nom;
    #prenom;
    #login;

    // Getters
    getNom = () => this.#nom;
    getPrenom = () => this.#prenom;
    getLogin = () => this.#login;
    // Setters
    setNom = (n) => {
        this.#nom = n;
    };
    setPrenom = (p) => {
        this.#prenom = p;
    };
    setLogin = (l) => {
        this.#login = l;
    };

    constructor(n, p, l) {
        this.#nom = n;
        this.#prenom = p;
        this.#login = l;
    }

    display() {
        let m = {
            nom: this.#nom,
            prenom: this.#prenom,
            login: this.#login,
        };
        return m;
    }

    static getAllUtilisateur(callback) {
        connection.query("SELECT * FROM utilisateur", (err, res) => {
            if (err) throw err;

            let rows = Object.values(JSON.parse(JSON.stringify(res)));
            let x = rows.map(
                (row) => new Utilisateur(row.nom, row.prenom, row.login)
            );
            callback(x);
        });
    }
}

module.exports = Utilisateur;
