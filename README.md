# tr-Node.js-Web-Server-mvc

## Description

Portage sous Node.js du projet PHP suivant:

***Cours à l’IUT de Montpellier - 2ème année***

https://romainlebreton.github.io/ProgWeb-CoteServeur/tutorials/tutorial3.html

Démarrage à l'étape TD3

### Changes log

Initialisation du projet:

    npm init

Installation d'express:

    npm i -S express 

Installation du module mysql

    npm i -S mysql


#### Logs / Debug

##### Tables SQL :

CREATE TABLE `utilisateur` (
`nom` varchar(32) NOT NULL,
`prenom` varchar(32) NOT NULL,
`login` varchar(32) NOT NULL,
PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `voiture` (
`immatriculation` varchar(8) NOT NULL,
`marque` varchar(25) NOT NULL,
`couleur` varchar(12) NOT NULL,
PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `passager` (
`trajet_id` int NOT NULL,
`utilisateur_login` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
PRIMARY KEY (`trajet_id`,`utilisateur_login`),
KEY `passager_utilisateur` (`utilisateur_login`),
CONSTRAINT `passager_trajet` FOREIGN KEY (`trajet_id`) REFERENCES `trajet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `passager_utilisateur` FOREIGN KEY (`utilisateur_login`) REFERENCES `utilisateur` (`login`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `trajet` (
`id` int NOT NULL AUTO_INCREMENT,
`depart` varchar(32) NOT NULL,
`arrivee` varchar(32) NOT NULL,
`date` date NOT NULL,
`nbplaces` int NOT NULL,
`prix` int NOT NULL,
`conducteur_login` varchar(32) NOT NULL,
PRIMARY KEY (`id`),
KEY `trajet_ibfk_1` (`conducteur_login`),
CONSTRAINT `trajet_ibfk_1` FOREIGN KEY (`conducteur_login`) REFERENCES `utilisateur` (`login`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3




INSERT INTO voiture (marque, couleur, immatriculation) VALUES ("Porche", "Rouge", "12344321");