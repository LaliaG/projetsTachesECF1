## Application Web de Gestion de Projets

# OJECTIF

Développement d'une application web de gestion de projets qui concerne les utilisateurs donc **USERS** qui vont créer, gérer et suivre l'avancement de différents projets donc **CRUD** ainsi que de gérer les tâches associées à ces projets donc **TO DO LIST**


# But de l'application

- une interface utilisateur donc **front-end** conviviale et
- **COMMUNICATION** via des **API REST**
- **backend**

# Le backend stockera les données

- BDD R MySQL 
ou
- BDD NoR  REDIS OU MONGODB

donc il y'a un choix que je vais faire

# FONCTIONNALITES REQUISES

1. AUTHENTIFICATION DES USERS
- inscription
- se connecter
- et se déconnecter

## chaque USER aura accès uniquement à ses projets et tâches

2. GESTION DES PROJETS
- CREATION DE PROJET : un **User** crée un **newProject** avec deux attributs **nom, description**

- VISUALISATION DES PROJETS : **Users** voient la **liste** de tous leurs projets

- MODIFICATION ET SUPPRESSION : **Users modifient** **détails** d'un projet ou **supprimer** un projet

Donc à cette étape il faut faire les **CRUD USERS**

3. GESTIONS DES TACHES
- CREATION DE TACHE :  **Users ajoutent tâches avec des détails**
les détails **titre, description, priorite, echeances**

- VISUALISATION DES TACHES:  **affichage des tâches d'un projet**

- MODIFICATION OU SUPPRESSION :**Users modifient ou suppriment des tâches**

Donc à cette étape il faut faire  les **CRUD DES TACHES**


4. SUIVI DE L'AVANCEMENT : **USERS** marquent les tâches 
- "en cours"
ou
- "complétées"
et
- visualiser l'avancement du projet

# REALISATION
MOI en tant que stagiaire ce que je dois faire:

- créer un dépot Git pour héberger le code source de l'application et dans ce dépot y inclure:

1. Front-end: code source en utilisant le framework **VueJS** inclure
- HTML
- CSS
- JavaScript

2. code source de l'API REST: incluant la logique métier, les **modèles de données**

3. BDD
- SQL: les scripts de création BDD
ou
- NoSQL: un modèle de données

4. Modèle de données : 
- un diagramme de la bddr donc **schema ER? TABLES; RELATIONS**
ou
- **modèle de données NoSQL COLLECTIONS; DOCUMENTS; CLES**
Il faudra une **brève description de chaque élement**

5. **DIAGRAMMES UML** : 
# Diagrammes de cas d'utilisation
# diagramme  de séquence
et/ou
# diagramme de classe

Tout cela pour décrire les interactions entre les Users et l'application ainsi que la structure interne de l'application

6. Documentation: un fichier **README.md** à la racine du dépot  qui explique 
- comment installer
- configurer
- et exécuter l'application

De plus ce fichier README.md devrait documenter **l'API REST** c'est à dire  ses
- endpoints
- méthodes HTTP
- formats de requête/réponse

**Je choisis le SQL**  car les bases de données relationnelles SGBD telle que MySQL sont adaptées aux applications nécessitant des relations complexes entre les données tel le cas ici les utilisateurs, les projets et les tâches.
Développées dès le début des années 70, les bases de donnéesrelationnelles (ou relational databases) sont l'un des modèles de base de données les plus utilisés.Les BDDR sont basées sur la théorie des relations entre données et utilisent des tables composées de lignes et de colonnes pour les organiser.Cela signifie qu'on va essayer de regrouper nos données à travers des caractéristiques ou des étiquettes communes.
**Schéma (ou Modèle) ER (Entity-Relationship)** :
- Un schéma ER, également appelé diagramme Entité-Relation (ERD),        représente la structure logique d’une base de données.
- Il affiche les relations entre les ensembles d’entités stockés dans la base de données.
- Les entités correspondent généralement aux tables, et les attributs aux noms de colonnes.
- Le schéma ER aide à comprendre comment les tables sont liées entre elles.

**Tables** :
- Dans MySQL, une table est une structure de données qui stocke des informations sous forme de lignes et de colonnes.
- Chaque table représente un ensemble d’entités (par exemple, une table “Clients” pour stocker les informations sur les clients).
- Les colonnes de la table correspondent aux attributs (par exemple, “Nom”, “Adresse”, “Âge”).
- Les lignes de la table contiennent les instances (ou enregistrements) de ces entités (par exemple, un client spécifique).

**Relations entre les tables** :
- Les relations entre les tables sont essentielles pour éviter la redondance des données et optimiser les performances.
- Voici quelques types de relations courantes :
 1- Un à un (1:1) : Une ligne dans une table est associée à une seule ligne dans une autre table.
 2 - Un à plusieurs (1:N) : Une ligne dans une table est liée à plusieurs lignes dans une autre table.
 3 - Plusieurs à plusieurs (N:M) : Plusieurs lignes dans une table sont liées à plusieurs lignes dans une autre table (généralement via une table de jointure).
- Par exemple, pour un système de facturation, vous auriez une table “Clients” (1) liée à une table “Commandes” (N).

Assurez-vous que votre serveur Express est en cours d'exécution en même temps que votre application React afin que les requêtes Axios puissent être effectuées avec succès.

Voilà, vous avez maintenant une application front-end en React qui utilise votre API de gestion de films développée avec Express pour effectuer des opérations CRUD sur les films.




Pour vous assurer que votre serveur Express est en cours d'exécution simultanément avec votre application React, vous devez démarrer les deux serveurs dans deux processus séparés.

Voici comment vous pouvez procéder :

1. Démarrer le serveur Express :
Dans votre terminal, accédez au répertoire de votre projet Express contenant votre fichier app.js (ou tout autre fichier principal de votre serveur) et exécutez la commande suivante pour démarrer le serveur Express :

bash

node app.js
Assurez-vous que votre serveur Express démarre correctement et qu'il écoute sur le port spécifié (par défaut, le port 3000 dans notre exemple).

2. Démarrer l'application React :
Dans un nouveau terminal, accédez au répertoire de votre projet React contenant votre fichier package.json et exécutez la commande suivante pour démarrer l'application React :

bash

npm start
Cette commande démarrera l'application React et ouvrira automatiquement votre navigateur par défaut pour afficher votre application React. L'application sera généralement accessible à l'adresse http://localhost:3000.

Maintenant, votre serveur Express et votre application React sont tous deux en cours d'exécution simultanément. Votre application React peut communiquer avec votre API Express via Axios en utilisant les URL appropriées (par exemple, http://localhost:3000/api/movies).

Pour réaliser cette application de gestion de projets avec une interface utilisateur conviviale et une communication avec un backend via des API REST, vous pouvez suivre les étapes suivantes :

### 1. Développement du Backend :

1. **Choix de la technologie backend :** Vous pouvez choisir entre des technologies telles que Node.js avec Express, Django (Python), ou Spring Boot (Java) pour développer votre backend.
   
2. **Implémentation de l'authentification :** Utilisez un système d'authentification tel que JWT (JSON Web Tokens) pour permettre aux utilisateurs de s'inscrire, de se connecter et de se déconnecter. Veillez à ce que chaque utilisateur ait accès uniquement à ses propres projets et tâches.

3. **Gestion des projets :**
   - Implémentez des endpoints pour la création, la visualisation, la modification et la suppression de projets.
   - Utilisez des méthodes HTTP appropriées (POST, GET, PUT, DELETE) pour chaque opération CRUD (Create, Read, Update, Delete).

4. **Gestion des tâches :**
   - Implémentez des endpoints pour la création, la visualisation, la modification et la suppression de tâches.
   - Assurez-vous que les tâches sont associées aux projets appropriés.

5. **Suivi de l'avancement :**
   - Ajoutez des fonctionnalités pour permettre aux utilisateurs de marquer les tâches comme "En cours" ou "Complétées".
   - Fournissez une fonctionnalité permettant de visualiser l'avancement global du projet en fonction de l'état des tâches.

### 2. Développement du Frontend :

1. **Choix de la technologie frontend :** Utilisez Vue.js comme demandé dans les spécifications.

2. **Création de l'interface utilisateur :**
   - Concevez une interface utilisateur conviviale en utilisant des composants Vue.js.
   - Créez des pages pour l'authentification, la visualisation des projets, la création et la gestion des projets, ainsi que la gestion des tâches.

3. **Communication avec le backend :**
   - Utilisez Axios ou Fetch pour effectuer des requêtes HTTP vers les endpoints de votre API REST.
   - Traitez les réponses et mettez à jour l'interface utilisateur en conséquence.

### 3. Base de Données :

1. **Choix de la base de données :** Sélectionnez une base de données relationnelle comme PostgreSQL, MySQL, ou une base de données NoSQL comme MongoDB en fonction de vos préférences et des besoins de votre application.

2. **Modèle de données :** Concevez un schéma de base de données qui prend en charge les fonctionnalités requises par votre application, y compris les tables/collections pour les utilisateurs, les projets, les tâches, etc.

3. **Scripts de création de la base de données :** Écrivez des scripts SQL ou utilisez des outils de migration de base de données pour créer et mettre à jour la structure de la base de données.

### 4. Documentation :

1. **README.md :** Rédigez un fichier README.md décrivant comment installer, configurer et exécuter l'application. Incluez également une documentation sur l'API REST, y compris les endpoints, les méthodes HTTP et les formats de requête/réponse.

2. **Diagrammes UML :** Créez des diagrammes de cas d'utilisation, de séquence et de classe pour décrire les interactions entre les utilisateurs et l'application, ainsi que la structure interne de l'application.

### 5. Déploiement :

Une fois votre application développée et testée localement, envisagez de la déployer sur une plateforme de cloud comme AWS, Google Cloud ou Heroku pour la rendre accessible au public.

En suivant ces étapes, vous devriez être en mesure de créer une application web de gestion de projets fonctionnelle, conviviale et bien documentée.

C'est un excellent plan pour le développement de votre application de gestion de projets. Voici quelques conseils supplémentaires pour vous aider dans chaque étape :

### 1. Développement du Backend :

- **Implémentation de l'authentification :** Assurez-vous de sécuriser vos endpoints d'authentification et d'autorisation à l'aide de JWT. Vous pouvez également envisager d'utiliser des bibliothèques comme Passport.js pour simplifier le processus d'authentification.

- **Gestion des projets et des tâches :** Utilisez des middlewares pour valider les données entrantes et assurez-vous de vérifier les autorisations avant de permettre à un utilisateur d'effectuer des opérations sur un projet ou une tâche.

- **Suivi de l'avancement :** Vous pouvez ajouter des fonctionnalités supplémentaires telles que la possibilité de définir des dates d'échéance pour les tâches et de générer des rapports d'avancement pour les projets.

### 2. Développement du Frontend :

- **Choix de la technologie frontend :** Vue.js est un excellent choix pour sa simplicité et sa facilité d'apprentissage. Assurez-vous de bien comprendre les concepts de Vue Router pour la navigation et de Vuex pour la gestion de l'état.

- **Conception de l'interface utilisateur :** Utilisez des frameworks CSS comme Bootstrap ou Tailwind CSS pour rendre votre interface utilisateur attrayante et réactive. Pensez à l'expérience utilisateur lors de la conception des pages et des composants.

- **Communication avec le backend :** Centralisez la logique d'appel API en utilisant des services pour gérer les requêtes HTTP vers votre backend. Cela facilitera la réutilisation du code et la gestion des erreurs.

### 3. Base de Données :

- **Choix de la base de données :** Considérez les besoins de votre application en matière de performances, de scalabilité et de complexité des données lors du choix entre une base de données relationnelle et non relationnelle.

- **Modèle de données :** Conçoit un schéma de base de données flexible qui peut évoluer avec les besoins de votre application. Pensez à la normalisation des données pour éviter les redondances inutiles.

- **Scripts de création de la base de données :** Utilisez des outils de migration de base de données comme Knex.js (pour les bases de données relationnelles) ou Mongoose (pour MongoDB) pour gérer les modifications de schéma de manière cohérente.

### 4. Documentation :

- **README.md :** Assurez-vous que votre fichier README.md est complet et facile à comprendre pour les nouveaux développeurs qui souhaitent contribuer à votre projet ou le déployer.

- **Diagrammes UML :** Utilisez des outils de modélisation comme Lucidchart ou draw.io pour créer des diagrammes UML clairs et informatifs qui aident à visualiser la structure et les interactions de votre application.

### 5. Déploiement :

- **Déploiement sur le cloud :** Assurez-vous de suivre les meilleures pratiques de sécurité lors du déploiement de votre application sur une plateforme de cloud public. Utilisez HTTPS, configurez des règles de pare-feu appropriées et gérez correctement les secrets et les clés d'API.

- **Surveillance et maintenance :** Mettez en place des outils de surveillance et de journalisation pour suivre les performances de votre application en production. Prévoyez des mises à jour régulières pour corriger les bogues et ajouter de nouvelles fonctionnalités en fonction des commentaires des utilisateurs.

En suivant ces conseils et en restant organisé tout au long du processus de développement, vous devriez être en mesure de créer une application de gestion de projets robuste et conviviale. Bonne chance !

Pour développer votre application de gestion de projets, nous allons diviser le processus en plusieurs étapes, en commençant par le développement du backend, puis le frontend, la base de données et enfin la documentation. Je vais vous donner un aperçu de chaque étape et vous fournir un exemple de structure de fichier, ainsi que des instructions sur la façon de configurer et d'exécuter votre application.

### 1. Développement du Backend :

#### a. Sécurisation de l'authentification avec JWT et Passport.js :

Créez un fichier `auth.js` pour gérer l'authentification avec JWT et Passport.js. Voici un exemple de code :

```javascript
// auth.js

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/User'); // Importez votre modèle User ici

// Configurez la stratégie JWT
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_secret_key' // Changez ceci par votre propre clé secrète
}, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload._id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
}));

// Fonction de génération de token JWT
const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, 'your_secret_key', { expiresIn: '1h' }); // Changez ceci par votre propre clé secrète et la durée d'expiration du token
};

module.exports = {
    passport,
    generateToken
};
```

#### b. Gestion des projets et des tâches :

Créez des fichiers `projectController.js` et `taskController.js` pour gérer les opérations CRUD sur les projets et les tâches. Voici un exemple de code pour le contrôleur de projet :

```javascript
// projectController.js

const Project = require('../models/Project'); // Importez votre modèle Project ici

// Fonction pour créer un nouveau projet
exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await Project.create({
            name,
            description,
            user: req.user._id // Ajoutez l'ID de l'utilisateur actuel au projet
        });
        res.status(201).json({ success: true, project });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Ajoutez d'autres fonctions pour la visualisation, la modification et la suppression de projets
```

#### c. Suivi de l'avancement :

Pour le suivi de l'avancement, vous pouvez ajouter des fonctionnalités supplémentaires dans vos contrôleurs pour marquer les tâches comme "En cours" ou "Complétées".

### 2. Développement du Frontend :

Créez un projet Vue.js en utilisant Vue CLI. Voici comment vous pouvez installer et configurer votre projet :

#### a. Installation de Vue CLI :

```bash
npm install -g @vue/cli
```

#### b. Création d'un nouveau projet Vue :

```bash
vue create frontend
```

#### c. Structure de fichier frontend (exemples) :

```
frontend/
|_ src/
   |_ components/
   |  |_ Auth/
   |  |_ Projects/
   |  |_ Tasks/
   |_ views/
   |  |_ Home.vue
   |  |_ Login.vue
   |  |_ Register.vue
   |_ App.vue
   |_ main.js
```

### 3. Base de Données :

#### a. Choix de la base de données relationnelle :

Installez PostgreSQL et utilisez Sequelize comme ORM pour interagir avec la base de données. Voici comment vous pouvez configurer Sequelize :

#### b. Installation de Sequelize :

```bash
npm install sequelize pg pg-hstore
```

#### c. Configuration de Sequelize :

Créez un fichier `sequelize.js` pour configurer Sequelize avec votre base de données PostgreSQL. Voici un exemple de configuration :

```javascript
// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
```

### 4. Documentation :

#### a. README.md :

Dans votre fichier README.md, fournissez des instructions détaillées sur la façon d'installer, de configurer et d'exécuter votre application. Incluez également des informations sur l'API REST, y compris les endpoints, les méthodes HTTP et les formats de requête/réponse.

#### b. Diagrammes UML :

Utilisez des outils de modélisation comme Lucidchart ou draw.io pour créer des diagrammes UML décrivant les interactions entre les utilisateurs et l'application, ainsi que la structure interne de l'application.

En suivant ces instructions et en personnalisant le code en fonction de vos besoins spécifiques, vous serez en mesure de développer une application de gestion de projets fonctionnelle avec un backend sécurisé, un frontend convivial et une base de données robuste.

Bien sûr, nous pouvons adapter l'exemple pour utiliser MySQL à la place de PostgreSQL. Voici comment vous pouvez configurer Sequelize avec MySQL :

### 1. Installation de Sequelize avec MySQL :

```bash
npm install sequelize mysql2
```

### 2. Configuration de Sequelize avec MySQL :

Créez un fichier `sequelize.js` pour configurer Sequelize avec votre base de données MySQL. Voici un exemple de configuration :

```javascript
// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
```

Assurez-vous de remplacer `'database'`, `'username'` et `'password'` par les informations de votre base de données MySQL.

### 3. Migration vers MySQL :

Si vous utilisez Sequelize pour gérer vos migrations de base de données, vous devrez installer `sequelize-cli` et configurer vos scripts de migration pour MySQL. Voici comment faire :

#### a. Installation de sequelize-cli :

```bash
npm install --save-dev sequelize-cli
```

#### b. Initialisation de sequelize-cli :

```bash
npx sequelize-cli init
```

#### c. Configuration du fichier `.sequelizerc` :

Modifiez le fichier `.sequelizerc` pour spécifier le dossier de configuration de Sequelize et les dossiers de migration, de semences, etc.

```javascript
// .sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'sequelize.js'),
  'models-path': path.resolve('models'),
  'migrations-path': path.resolve('migrations'),
  'seeders-path': path.resolve('seeders')
}
```

#### d. Création d'une migration pour MySQL :

```bash
npx sequelize-cli migration:generate --name create_projects_table
```

Cela créera un nouveau fichier de migration dans votre dossier de migrations. Vous pouvez ensuite écrire le script de migration pour créer la table `projects` dans votre base de données MySQL.

### 4. Utilisation de MySQL avec les modèles Sequelize :

Utilisez les modèles Sequelize pour définir la structure de vos tables et interagir avec votre base de données MySQL. Voici un exemple de modèle de projet :

```javascript
// project.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
});

module.exports = Project;
```

Assurez-vous d'importer `sequelize` correctement et de configurer les relations avec d'autres modèles le cas échéant.

### 5. Documentation :

Pour la documentation, vous pouvez suivre les mêmes étapes que mentionné précédemment, en veillant à inclure des instructions spécifiques à MySQL au lieu de PostgreSQL dans votre fichier README.md, ainsi que des informations sur la configuration et l'utilisation de Sequelize avec MySQL.









Pour le développement de l'application il y'a des logiciels de gestion de projet gratuits

En fonction des besoins et de la complexité du projet je choisis Trello: simple et adapté aux débutants, je l'ai déjà utilisé lors de projets. Je vais jeter un coup d'oeil à Todoist pour une gestion de tâches efficace. Il y'a aussi monday.com qui est un outil performant pour la gestion des tâches, la collaboration en équipe et le suivi des projetsen temps réel.
Zoho Projects: offre une vision globale des projets

API REST 
- conçu pour communiquer entre mon front-end et mon backend.
- j'utilise le **framework Express.js(Node.js)**

Sécurité des données
je vais utiliser des méthodes telles que
- le hachage des mots de passe avec **bcrypt**
- les tokens d'authentification et les autorisations d'accès avec le JWT(JSONwebToken)


## configuration de Sequelize

Avant d'utiliser Sequelize dans mon application Node.js, je dois d'abord l'installer et le configurer :

```bash
npm install sequelize
```

Installer également le pilote de base de données correspondant à celle que j'utilise :

```bash
npm install mysql2
```

- Configuration de Sequelize : Configurez sequelize dans votre application en définiissant les paramètres de connexion à la base de données. Créez un fichier de configuration (par exemple db.js)

Les modèles Sequelize représentent les tables de la base de données sous forme d'objets Javascript. Chaque **modèle** correspond à une **table** et chaque instance du modèle représente une ligne de la table.

Ce code crée un magasin Pinia, qui est un gestionnaire d'état pour Vue.js, nommé `apiStore`. Ce magasin est utilisé pour gérer les requêtes HTTP vers une API backend.

### Explication du code :

1. **Import des dépendances :**
   - `defineStore` est importé depuis la bibliothèque Pinia. Il est utilisé pour définir un nouveau magasin.
   - `Cookies` est importé depuis la bibliothèque js-cookie. Il est utilisé pour gérer les cookies dans le navigateur.

2. **Définition du magasin :**
   - Le magasin est défini à l'aide de `defineStore` avec le nom `'apiStore'`.
   - La fonction de rappel fournie à `defineStore` contient les méthodes pour effectuer des requêtes HTTP.

3. **Fonctions du magasin :**
   - `post(url, data)`: Effectue une requête POST vers l'URL spécifiée avec les données fournies. Il ajoute également un en-tête d'autorisation contenant le jeton d'authentification stocké dans les cookies.
   - `get(url)`: Effectue une requête GET vers l'URL spécifiée. Il ajoute également un en-tête d'autorisation contenant le jeton d'authentification stocké dans les cookies.
   - `checkIsLoggedIn()`: Vérifie si l'utilisateur est connecté en envoyant une requête pour vérifier si le jeton d'authentification est valide.
   - `logOut()`: Déconnecte l'utilisateur en supprimant le jeton d'authentification des cookies.

4. **Retour de fonctions :**
   - Toutes les fonctions retournent une promesse qui résout avec la réponse JSON de l'API backend ou rejette avec une erreur si la requête échoue.

### Utilisation du magasin :

Une fois ce magasin défini, vous pouvez l'utiliser dans vos composants Vue pour effectuer des requêtes HTTP vers votre API backend. Par exemple :

```javascript
import { useApiStore } from './apiStore';

export default {
  methods: {
    async fetchData() {
      const apiStore = useApiStore();
      const data = await apiStore.get('data');
      console.log(data);
    }
  }
}
```

Dans cet exemple, `fetchData` utilise la méthode `get` du magasin `apiStore` pour récupérer des données de l'API backend.
routes/vueRouter.js
Ce code est un exemple de configuration de Vue Router pour une application Vue.js. Voici une explication de ses principaux composants :

1. **Instructions d'importation** :
   - `createRouter` et `createWebHistory` sont des fonctions importées de `vue-router` utilisées pour créer l'instance du routeur et spécifier le mode d'historique respectivement.
   - `NotFound404`, `Login`, `Signup`, `AddTask`, `ManageProjects` et `ManageTasks` sont des composants importés pour les besoins de routage.
   - `useApiStore` est une fonction importée de `apiStore` pour gérer les actions liées à l'API.

2. **Routes** :
   - Le tableau `routes` définit toutes les routes de l'application.
   - Des routes de redirection sont spécifiées pour gérer les erreurs 404 et la redirection de la racine.
   - Des routes sont définies pour la connexion, l'inscription, l'ajout de tâches, la gestion des projets et la gestion des tâches. Certaines routes ont un champ `meta` indiquant qu'elles nécessitent une authentification (`requiresAuth: true`).

3. **Création du routeur Vue** :
   - La fonction `createRouter` est utilisée pour créer l'instance du routeur. Elle prend un objet avec des options de configuration.
   - `createWebHistory()` est utilisé pour spécifier le mode d'historique pour le routeur.

4. **Garde de navigation globale** :
   - `vueRouter.beforeEach()` est une garde de navigation globale fournie par Vue Router. Elle est appelée avant chaque navigation.
   - À l'intérieur de la garde, elle vérifie si la route nécessite une authentification en vérifiant la propriété `meta.requiresAuth`. Si c'est le cas, elle vérifie si l'utilisateur est connecté en utilisant la fonction `useApiStore().checkIsLoggedIn()`.
   - Si l'utilisateur n'est pas connecté et tente d'accéder à une route qui nécessite une authentification, il est redirigé vers la page de connexion.
   - Si l'utilisateur est déjà connecté et tente d'accéder à la page de connexion ou d'inscription, il est redirigé vers la page de gestion des projets.
   - Si aucune des conditions ci-dessus n'est remplie, la navigation se poursuit.

5. **Exportation** :
   - L'instance du routeur Vue configurée `vueRouter` est exportée comme exportation par défaut de ce module.

Cette configuration garantit que les routes de l'application sont correctement gérées, authentifiées et redirigées en fonction de l'état d'authentification de l'utilisateur.




# Opérations CRUD avec sequelize

Avec sequelize vous pouvez effectuer des opérations CRUD (create, read, update, delete) sur vos modèles de manière facile et intuitive.

Création d'un Enregistrement :

```javascript
const newUser = await User.create({
  username: 'Toto',
  password: "toto123"
})
```

Lecture des enregistrements :

```javascript
const allUsers = await User.findAll()
```

Mise à jour d'un enregistrement :

```javascript
await User.update({username : 'Titi'}, {where: {username: "Toto"}})
```

Suppression d'un enregistrement : 

```javascript
await User.destroy({where: {username: "Toto"}})


# Utilisation de JSON web token (JWT) pour l'authentification

JSON Web Tokens (JWT) est un moyen populaire d'implémenter l'authentification dans les applications web. Il permet de générer des jetons qui peuvent être transmis entre le client et le serveur pour authentifier les requêtes.

Un JWT est une chaîne encodée qui contient des informations ainsi qu'une signature permettant de vérifier l'authenticité du token. Il est composé de trois parties :

- **Header**: Contient le type de token (JWT) et l'algorithme utilisé.
- **Payload**: Contient les données de l'utilisateur, telles que l'identifiant de l'utilisateur et ses autorisations.
- **Signature**: Permet de vérifier que le token n'a pas été altéré et qu'il provient bien du serveur.

## Génération et vérification des JWT dans node.JS

Lorsqu'un utilisateur se connecte avec succès, un jwt est généré et renvoyé au client pour être utilisé dans les requêtes ultérieures.

```javascript
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
  const payload = {
    userId: userId,
    // D'autres données facultatives peuvent être ajoutés.
  }

  const token = jwt.sign(payload, 'RANDOM_TOKEN_SECRET', {expiresIn: "1d"})

  return token
}
```

## Vérification du JWT lors de requêtes protégées

Pour protéger les routes qui nécessitent une connexion, vous pouvez utiliser un middleware pour vérifier la validité du jwt inclus dans l'en-tête Authorization de la requête.

```javascript
function isAuthenticated(req, res, next) {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE3MDcxMzk2NzIsImV4cCI6MTcwNzIyNjA3Mn0.6R_w_4QVGje4emYrhZSaEEGzQJCuKFkkyn23DAO7bFU
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const userId = decodedToken.userId

    return next()
  } catch(error) {
    // L'utilisateur n'est pas authentifié :
    res.status(401).json({message : "Merci de vous connecter"})
  }
}
```

## Exemple d'utilisation dans une route protégée

Une fois que vous avez défini le middleware de vérification du token, vous pouvez l'utiliser dans les routes nécessitant une authentification :

```javascript
router.get('/protectedRoute', isAuthenticated, (req, res) => {
  res.send('Route protégée accessible')
})
```






