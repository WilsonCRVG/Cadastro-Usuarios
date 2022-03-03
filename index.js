
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const { where } = require('sequelize');



//CONFIG
    //Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout : 'main'}));
    app.set('view engine','handlebars');

    //BODY PARSER
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    



    //ROTAS
    app.get('/',function(req,res){
        Post.findAll({order:[['id','DESC']]}).then(function(posts){
           res.render('home',{posts:posts}) 
        })
        
    })
    
    
    app.get('/cad',function(req,res){
        res.render('formulario')
    })

    
    app.post('/add',function(req,res){
        Post.create({
            titulo : req.body.titulo,
            conteudo : req.body.conteudo
        }).then(function(){
            res.redirect('/')
            //res.send("post criado com sucesso")
        }).catch(function(erro){
            res.send("Houve um ERRO " + erro)
        })
    })

    app.get('/deletar/:id',function(req,res){
        Post.destroy({where:{'id':req.params.id}}).then(function(){
          res.redirect('/')  
          //res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Esta postagem nao foi deletada "+ erro)
        })
    })

    //UPDATE

    app.get('/edit/:id', function(req, res){
  Post.findByPk(req.params.id)
    .then(post => {
      res.render('form-edit', {
        id: req.params.id,
        titulo: post.titulo,
        conteudo: post.conteudo
      })
    })
    .catch(err => {
      res.send('Post não encontrado!')
    })
})



    app.post('/editado/:id', function(req, res){
    Post.update({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    },
    {
      where: { id: req.params.id }
    }).then(function(){
      res.redirect('/')
    }).catch(function(err){
      console.log("erro :"+ err);
    })
})

    


    //SERVIDOR NODE
app.listen(3000 , (req, res)=>{
    console.log('Servidor rodando ! ')
})





/*/enviar arquivos res.sendFile
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html")
    
})

app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/message",function(req,res){
    res.sendFile(__dirname + "/html/message.html")
})

//ROTA PARAMETROS
app.get("/ola/:nome/:cargo/:idade",function(req,res){
    res.send(req.params)
})/


//acessando parametros req.params.nome
app.get("/ola/:nome/:cargo/:idade",function(req,res){
    res.send("<h1>ola "+ req.params.nome +"</h1>")
})
*/