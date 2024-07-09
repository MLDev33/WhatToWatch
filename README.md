# WhatToWatch
1/Modules
express --no-view --git ./ 

yarn add mongoose
Mongoose permet de faire un lien entre javascript et la base de donnée mongodb,
Elle permet d'établir une connection, des schémas, modules et des actions CRUD 
Layer de sécurité : on indique par exemple dans le schéma que username est un string, cela evite l'injection de code (a developper)
yarn add cors
Permet au serveur de faire des requetes a un autre domaine que le domaine sur lequel il est situé ( localhost par exemple)
yarn add node-fetch@2
le fetch est installé de base dans le front mais pas dans le back si on souhaite que le back recupere des informations d'un webservice ( ce qui est le cas ici , il nous faut le module)

yarn add dotenv

Permet l'utilisation de variable d'environnement, permet d'éviter de rendre publique des information sensible , ici la clé de connection a la base de donnée ainsi que l'api de TMDB