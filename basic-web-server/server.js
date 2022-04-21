let fs = require("fs");
let express = require("express");
let app = express();
var n = 0;

/// GET
app.get("/", function (req, res) {
    n++;
    console.log("[[ Appel n°", n, "]]: ", req.method);
    var searchParams1 = new URLSearchParams(req.url);
    console.log("searchParams1:", searchParams1);

    var myURL = new URL("http://127.0.0.1:1337/" + req.url);
    //console.log("myURL:",myURL);
    fs.readFile("test_server.html", function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end("Erreur lors de l'ouverture du fichier");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Salut comment ça va? " + n);
            res.end(data);
        }
    });
});
