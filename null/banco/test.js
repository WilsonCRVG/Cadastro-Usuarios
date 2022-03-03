

/*

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo :{
        type: Sequelize.TEXT
    }
})

//inserir dados
Postagem.create({
    titulo:"UM DIA LINDO",
    conteudo:"BURRITO"
})
/

const Usuario = sequelize.define('usuario',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome :{
        type: Sequelize.STRING
    },
    idade :{
        type: Sequelize.INTEGER
    },
    emial :{
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})
Usuario.create({
    nome:"WIlson SOuza",
    sobrenome:"Veiga",
    idade:27,
    emial:"will@will.com"
})


*/






/*SE CONECTAR + teste
sequelize.authenticate().then(function(){
    console.log("CONECTADO COM SUCESSO !")
}).catch(function(erro){
    console.log("Falha ao se conectar : " + erro)
})*/