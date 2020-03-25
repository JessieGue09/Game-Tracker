var express = require('express');
var router = express.Router();

const { Game } = require('./../models/game');

/* GET games listing. */
router.get('/', function (req, res, next) {

    // let games = [
    //     { name: 'Super Mario Bross' },
    //     { name: 'The leyend of Zelda' },
    //     { name: 'Sonic' }
    // ];

    Game.findAll()
        .then((games) => {

            res.render('games/index', {
                games: games
            });
        })
        .catch((err) =>{
            console.error('Error trying to query games: ', err);
            res.render('games/index', {
                games: []
            });
        });

    // console.log(games);

});


//games/delete/?
router.post('/delete/:id', (req, res, next) =>{
    let id = req.params.id;

    Game.destroy({
        where: {
            id: id
        }
    }).then(() =>{
            res.redirect('/games/')
    
        }).catch((err) =>{
            console.error('Error tryung to delete Game', err);
            res.redirect('/games/');
        });
    //TODO: Handle promise
});


//GET games/create
router.get('/create', (req, res, next) => {
    res.render('games/form');
})

router.post('/create', (req, res, next) => {
    console.log(req.body);
    
    let name = req.body.name;

    
    if (name === undefined || name === null || name === ''){
        res.render('/games/form', {errorMessage: 'Please type a valid name.'});
    }
    
    let game = {
        //name : name 
        name,
    };

    //Crear nuevo game y mandar a la base de datos
    Game .create(game)
        //Caso de exito
        .then(() => {
            res.redirect('/games');
        })
        //Caso de error
        .catch((err) => {
            //Imprimir que ocurrio un error
            console.error('Error trying to create Game', err);
            //Volver a enviar el formulario como HTML
            res.render('/games/form');
        });
 

    //res.send('Hola');
})

module.exports = router;
