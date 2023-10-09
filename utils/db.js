const Sequelize = require('sequelize');
const sequelize = new Sequelize('user', 'root', 'Geeta@6204', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize
