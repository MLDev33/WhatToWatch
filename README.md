# WhatToWatch
/
/Javascript est un language de programme s'executant dans le navigateur du client, afin de permettre la réalisation du back comme du front , nous utilisons Node.js , un environnement d'execution javascript côté serveur 
1/Modules
De manière globale nous avons effectué l'installation, unique de express avec la commande 
npm install express-generator -g , cela permet de créer rapidement un squelette d'application express avec plusieurs options, nous utiliserons ici 
express --no-view --git ./ 
Cette commande indique que nous souhaitont la création d'une application express, sans l'aspect view (utilisé dans le front) , intégrant un git ignore, et dans le repertoire courant
Express offre notamment un système de routage intuitif,un système de middleware facilitant l'ajout de fonctionnalité..
yarn add mongoose
Mongoose permet de faire un lien entre javascript et la base de donnée mongodb, utilisée dans ce projet,
Elle permet d'établir une connection, des schémas, modules et des actions CRUD 
Layer de sécurité : on indique par exemple dans le schéma que username est un string, cela evite l'injection de code (a developper)
yarn add cors
Permet au serveur de faire des requetes a un autre domaine que le domaine sur lequel il est situé ( localhost par exemple)
yarn add node-fetch@2
le fetch est installé de base dans le front mais pas dans le back si on souhaite que le back recupere des informations d'un webservice ( ce qui est le cas ici , il nous faut le module)

yarn add dotenv

Permet l'utilisation de variable d'environnement, permet d'éviter de rendre publique des information sensible , ici la clé de connection a la base de donnée ainsi que l'api de TMDB

/test de routes movies
ajout "dev": "nodemon ./bin/www"

# Recherche de Contenu sur Plateformes de Streaming

Ce script JavaScript permet de rechercher des films et des séries disponibles sur des plateformes de streaming spécifiques en utilisant l'API TMDB (The Movie Database).

## Fonctionnalités

- Recherche de films et séries sur des plateformes de streaming sélectionnées
- Filtrage par région
- Pagination des résultats
- Affichage des plateformes disponibles pour chaque contenu

## Comment ça marche

1. **Configuration initiale**
   - Le script utilise une clé API TMDB qui doit être fournie.
   - Les IDs des fournisseurs de streaming sont définis dans un objet `PROVIDER_IDS`.

2. **Fonction principale : `rechercheContenuParPlateforme`**
   - Paramètres :
     - `plateformes` : tableau des noms de plateformes à rechercher
     - `region` : code de la région (par défaut 'FR' pour la France)
     - `page` : numéro de page pour la pagination (par défaut 1)

3. **Processus de recherche**
   - Conversion des noms de plateformes en IDs TMDB.
   - Utilisation de l'endpoint `/discover` de TMDB pour trouver le contenu sur les plateformes sélectionnées.
   - Recherche séparée pour les films et les séries TV.

4. **Récupération des détails des fournisseurs**
   - Pour chaque élément de contenu trouvé, une requête supplémentaire est effectuée pour obtenir les détails des fournisseurs de streaming.

5. **Formatage des résultats**
   - Les résultats sont formatés pour inclure :
     - Type (film ou série)
     - Titre
     - Année de sortie
     - Description
     - Popularité
     - Plateformes de streaming disponibles

6. **Tri et pagination**
   - Les résultats sont triés par popularité.
   - Les informations de pagination sont incluses dans la réponse.

## Utilisation

```javascript
rechercheContenuParPlateforme(['Netflix', 'Amazon Prime Video'], 'FR', 1)
  .then(resultat => console.log(JSON.stringify(resultat, null, 2)))
  .catch(error => console.error(error));

  Structure des résultats
Les résultats sont renvoyés sous forme d'objet avec les propriétés suivantes :

contenu : tableau d'objets représentant les films et séries
TotalItems : represente le nombre de card actuellement présenté
itemsPerPage : represente la limite a chaque fetch

Chaque élément de contenu contient :

type : 'film' ou 'série'
titre : titre du contenu
annee : année de sortie
description : bref résumé
popularite : score de popularité
plateformes : tableau des noms de plateformes où le contenu est disponible