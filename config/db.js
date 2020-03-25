const Sequelize = require('sequelize').Sequelize;


let sequelize = new Sequelize('games', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Promise 
sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection succesful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err);
    });

module.exports = {
    //sequelize: sequelize
    sequelize
}