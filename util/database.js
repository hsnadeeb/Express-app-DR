const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','#Maddy@1036',{
    dialect:'mysql',
    host:'localhost'
});

module.exports= sequelize;
