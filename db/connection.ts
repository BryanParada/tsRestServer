import { Sequelize } from 'sequelize';

const db = new Sequelize('tsnode', 'root', 'mysql', {//bdd - user - pswd
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
}) 


export default db;