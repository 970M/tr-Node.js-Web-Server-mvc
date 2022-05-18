let dbConf = require("../config/Conf");
let mysql = require("mysql");

class ModelDB {
    connectDB; // Ne fonctionne pas en mode privé #connectDB

    getConnectDB = () => this.connectDB;

    static initDBCon() {
        this.connectDB = mysql.createConnection({
            host: dbConf.host,
            user: dbConf.user,
            password: dbConf.password,
            database: dbConf.database,
        });
        this.connectDB.connect();
    }
}

ModelDB.initDBCon();

module.exports = ModelDB.connectDB;
