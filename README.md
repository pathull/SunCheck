# SunCheck Health App

<p align="center">
<img src="https://user-images.githubusercontent.com/94504789/208973620-088d944a-957a-4b3c-be8e-da44850ace58.png" width="200" height="200" />
</p>

SunCheck is a health app that let's users search the weather in their city and track their estimated Vitamin-D consumption. Users can export a report for personal record keeping or to send to a health provider. 

## Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/94504789/208974676-493c3d63-24ee-4703-8510-3aab1f98c93b.jpg" />

  <img src="https://user-images.githubusercontent.com/94504789/208975000-5d755d7b-4ab5-4c35-8cff-b7d5c774008a.jpg" />
  
  <img src="https://user-images.githubusercontent.com/94504789/208975062-17aaf771-670a-48ba-97a4-e5e5883036ff.jpg" />
</p>

## Getting started
1. Clone the repo
```shell
git clone https://github.com/GustavoSilvaNavarro/crafters-app.git
cd crafters-app
```

2. Run command to install dependencies backend and frontend
```powershell
npm install
```

### Backend
1. Server is using SQL database, You should create a database with the name of your preferences and create a .env file with the following keys
```js
// DB connection to SQL
DB_SQL_HOST= //example 127.0.0.1
DB_SQL_USERNAME=  //example root
DB_SQL_PORT=  //example 3306
DB_SQL_PASSWORD= // user's password
DB_SQL_DATABASENAME=  //database name
DB_SQL_DIALECT=  //example mysql

// CLOUDINARY KEYS info provided by cloudinary | https://console.cloudinary.com/users/login#gsc.tab=0
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_PUBLIC_KEY=
CLOUDINARY_SECRET_KEY=

// STRIPE KEYS  Provide by Stripe | https://stripe.com/
STRIPE_PUBLIC_KEY=
STRIPE_PRIVATE_KEY=

// Auth0 KEYS provided by auth0
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_UNIQUE_IDENTIFIER=

// Client domain
CLIENT_DOMAIN_URL= //example http://localhost:3000
```

2. Run development server
```json
npm run start:dev
```

3. Run test/jest environment
```json
npm test
```

### Frontend
1. Create a .env file with the following keys
```js
// Auth0 KEYS for client side | https://auth0.com/docs/quickstart/backend/nodejs/interactive
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```
2. Run react in developer mode
```json
npm start
```

3. Run test/jest environment
```json
npm test
```

## Build with
### Backend
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework
* [NodeJs](https://nodejs.org/en/) - An open-source, cross-platform JavaScript runtime environment.
* [Sequelize](https://sequelize.org/) - ORM for SQL Databases
* [MariaDB](https://mariadb.org/) - SQL Database
* [Stripe](https://stripe.com/gb) - Service for payment methods and much more.
* [Cloudinary](https://console.cloudinary.com) - Media Library that allows to store media.
* [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.

### Frontend
* [React](https://reactjs.org/) - Front end library for building user interfaces.
* [FilePond](https://pqina.nl/filepond/) - A JavaScript library that can upload anything you throw at it.
* [Auth0](https://auth0.com/) - Service for authentication and authorization.
* [Tailwindcss](https://tailwindcss.com/) - CSS Framework to style applications.
* [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
