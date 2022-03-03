const Sequelize = require('sequelize')


    //Conexão com o Banco de dados

    const sequelize = new Sequelize('postapp','root','1346798520v',{

        host:"localhost",
        dialect:'mysql'
    })

    module.exports={
        Sequelize : Sequelize,
        sequelize : sequelize
    }