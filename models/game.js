const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

 const Model = Sequelize.Model;

 class Game extends Model {};

 Game.init({
     name: {
         type: DataTypes.STRING,
         allowNull: false,
     },
 }, {
    sequelize,
    modelName: 'game',
    
    //Set a custom table name
    //freezeTableName: true,
    //tableName: '(name)'
 });

 //Game.sync(); (Usar solamente en caso de emergencia y con el permiso de taco)

 module.exports = {Game};