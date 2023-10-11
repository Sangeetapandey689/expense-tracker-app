const Sequelize = require('sequelize')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'backend expense tracker app',
//     password: 'Geeta@6204'
// });

const sequelize = new Sequelize('ExpenseTracker', 'root', 'Geeta@6204',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;