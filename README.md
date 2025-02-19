# Projet Île 3D en Three.js

## Technologies utilisées

- **Three.js** : Moteur 3D pour le rendu graphique
- **GLTFLoader** : Chargement des modèles 3D au format GLB
- **OrbitControls** : Contrôles interactifs de la caméra
- **WebGLRenderer** : Rendu optimisé avec antialiasing et gestion des ombres
- **JavaScript (ES6)** : Développement du script

## Description

Ce projet affiche une île stylisée en 3D avec un ciel bleu, des ombres, un effet de brouillard et un plan d'eau semi-transparent. L'utilisateur peut interagir avec la scène via la souris.

## Installation & Exécution

1. Installez les dépendances :
   ```bash
   npm install
   
## Exécutez le projet :

1. Ouvrez votre terminal et exécutez la commande suivante pour démarrer le projet :
   ```bash
   npm run dev
2. Un lien s'affichera dans votre terminal, rendez-vous sur celui-ci. Sinon rendez-vous sur http://localhost:5173

## Structure du projet
```plain text
projet-island-3D/
├── public/        # Contient le fichier GLB du modèle 3D
│   ├── favicon.ico # Icone du site
│   ├── island.glb # Fichier en 3D
├── index.html    # Fichier HTML principal
├── main.js  # Implantation du three.js
├── package-lock.json  # Gestion des dépendances automatique
├── package.json  # Gestion des dépendances
├── README.md  # Instructions et informations sur le projet

