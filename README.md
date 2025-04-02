
# Chat de gouttiere

Ce site web est dédié à la création et à l'administration de courses de vélo urbain, inspirées par le courant new-yorkais et les célèbres courses "alley cat". Il permet aux utilisateurs de visualiser les courses à venir et passées, avec accès aux classements et à l'ordre de passage des participants sur différents checkpoints, affichés sur une carte.


### Fonctionnalités pour les Utilisateurs

#### Prochaine Course : 
- Affiche les détails de la prochaine course, incluant la date, l'heure de départ, l'affiche, et la description.

#### Dernière Course : 
- Présente le classement et l'ordre de passage des checkpoints pour la dernière course organisée.

#### Classement page : 
- Permet aux utilisateurs de choisir parmi toutes les courses passées pour accéder à leur classement et à l'ordre de passage des checkpoints pour chaque participant.

https://github.com/user-attachments/assets/2eff454c-d546-4631-99e0-d65de9881525


### Fonctionnalités Administrateur

#### Création d'une Nouvelle Course :

- Date et Heure de Départ : Définition de la date et de l'heure de départ de la course.

- Affiche et Description : Téléchargement de l'affiche et rédaction de la description de la course.

- Point de Départ : Sélection du point de départ sur une carte.

#### Ajout de Checkpoints :

- Une fois la course créée, possibilité d'ajouter des checkpoints avec leurs coordonnées géographiques.

#### Gestion des Résultats :

- Après la fin de la course, possibilité d'ajouter les temps et l'ordre de passage de tous les participants pour chaque checkpoint.

https://github.com/user-attachments/assets/1ba49c1b-b8dc-48f3-9951-1725845c56b8


### Technologies Utilisées

Frontend : Utilisation de React pour une interface utilisateur fluide et interactive.

Backend : Utilisation de Node.js avec Express pour gérer les requêtes et les données.

Base de Données : MongoDB pour stocker les informations sur les courses et les participants.

API de Cartographie : Intégration d'OpenStreetMap pour afficher les checkpoints et les parcours.

#### Installation
1) Cloner le dépôt Git.

2) Installer les dépendances avec npm ou yarn.

3) Configurer les variables d'environnement pour la base de données et l'API de cartographie.

4) Lancer le serveur de développement.
