# tsRestServer
Rest Server coded in TypeScript - Node JS

## Features
* RestServer for using HTTP requests
* RESTful Services: GET, PUT, DELETE, POST


## What did i use in this app?
* Creating projects with TypeScript
* Configuring Express with TypeScript
* Connect to MySQL from Node
* Create a CRUD using Sequelize ORM, similar to Mongoose ODM

## Postman Documentation

https://documenter.getpostman.com/view/7735863/2s8Yt1tqLH

## Instalation

- To install the app type the next command in terminal

```
npm install
```

## How to use?

- Install AMPPS at: https://ampps.com/
- Install TablePlus at: https://tableplus.com/
- Create table users with the next structure: 
![image](https://user-images.githubusercontent.com/51382458/205165688-dc113c64-0dc1-444c-b23f-521821319ca8.png)
- Edit db/connection.ts with your credentials
- Make your .env file like .envExample
- To run the app type the next command in terminal!

```
npm start
```
- And finally use your favorite API Platform!

## How to test the app?

- To test the app open two terminal consoles and type in the first one... 

```
tsc --watch
```

- ... and in the second one
```
nodemon dist/app.js
```



