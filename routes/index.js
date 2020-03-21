var express = require('express');
var router = express.Router();
let multer= require('multer');


const articleController = require('../controllers/articleController.js');

//Multer
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
 });
 var upload = multer({
    storage: storage
 }).single('file')

//Pinta Homepage
router.get('/', function(req,res){
    res.render('home.ejs');
});

router.get('/user', articleController.list);

router.get('/list', function(req,res){
    res.render('index.ejs');
});

router.post('/list', upload, articleController.save);

router.get('/delete/:id', articleController.delete);

router.get('/update/:id', articleController.edit);
router.post('/update/:id', upload, articleController.update);

//Display full article
router.get('/fullArticle/:id', upload, articleController.fullArticle);

module.exports = router;
