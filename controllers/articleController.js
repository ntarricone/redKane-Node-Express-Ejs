let mysql = require('mysql');
let multer= require('multer');

const connection = require('../config/db.js');

const controller = {};

//DISPLAYING DDBB VALUES ON THE SCREEN
controller.list = function (req, res) {
    let sql = "SELECT * FROM article JOIN multimedia ON article.article_id = multimedia.article_id"

    connection.query(sql, function (err, results) {
        // console.log(results);
        res.render('user.ejs', {
            results: results
        });
    });
};


//DISPLAY FULL ARTICLE
controller.fullArticle = function(req,res){
    var id = req.params.id;
    let sql = "SELECT * FROM article WHERE article_id=";
    let sql2 = "SELECT * FROM multimedia WHERE article_id=";

    connection.query(sql + id, function(err,results){
        connection.query(sql2 + id, function(err,result){
            res.render('fullArticle.ejs', {
                results: results[0],
                result: result[0]
                
            });
        });
    });
};


//SAVING DDBB VALUES FROM HTML (EJS) FORM IN THE DDBB
controller.save = function(req,res){
    let title = req.body.title;
    let text = req.body.text;
    let category = req.body.category;
    let price = req.body.price;
    let date = new Date();

    let type = req.body.type;
    let file = null;
    let description = req.body.description;

    if (req.file.originalname){
        file = req.file.originalname;
    }

 
    let sql = "INSERT INTO article SET ?";
    let sql2 = "INSERT INTO multimedia SET ?";
   
    connection.query(sql, {
        title,
        text,
        category,
        price,
        date

    }, function (err, results){
        
        var article_id = results.insertId;
        console.log("llega1")
     
        connection.query(sql2,{
            type,
            file,
            description,
            article_id
        }, function(err, results){
            console.log("llega 2")
            console.log(file);
            console.log(price);
      
            res.redirect('/user');
        });
    });
};

//DELETING DDBB
controller.delete = function(req,res){
    var id = req.params.id;
    let sql = "DELETE FROM article WHERE article_id =";
    let sql2 = "DELETE FROM multimedia WHERE multimedia_id =";

    connection.query(sql + id, function(err,results){
        if (err){
            throw err;
        } else{
            connection.query(sql2 + id, function (err, results){
                if (err){
                    throw err;
                } else{
                res.redirect('/user');
            }});
        };
    });
};

//EDITING AND UPDATING
controller.edit = function(req,res){
    var id = req.params.id;
    let sql = "SELECT * FROM article WHERE article_id=";
    let sql2 = "SELECT * FROM multimedia WHERE article_id=";

    connection.query(sql + id, function(err,results){
        connection.query(sql2 + id, function(err,result){
            res.render('edit.ejs', {
                results: results[0],
                result: result[0]
                
            });
        });
    });
};

//////--------------------------
controller.update = (req, res) => {
    let id = req.params.id;

    connection.query("SELECT * FROM article JOIN multimedia ON article.article_id = multimedia.article_id" + id, (err, results) => {
        if (req.file === undefined || null) {
            let id = req.params.id;
            var file = results[0].file;

            let title = req.body.title;
            let text = req.body.text;
            let category = req.body.category;
            let price = req.body.price; 
            let edit_date = new Date(); 
            let description = req.body.description;
            let type = req.body.type;
            let sql = "UPDATE article set ? WHERE article_id=";
            let sql2 = "UPDATE multimedia set ? WHERE article_id=";
            connection.query(sql + id, {
                title,
                text,
                category,
                price,
                edit_date
        
            }, function(err, results){
                connection.query(sql2 + id,{
                    type,
                    file,
                    description
                }, function(err, result){
                    // console.log(file)

                    res.redirect('/update/'+ req.params.id);
                });
            });
        } else {
            let id = req.params.id;
            let file = req.file.originalname;
            console.log(results)
            console.log("entro2")
            let title = req.body.title;
            let text = req.body.text;
            let category = req.body.category;
            let price = req.body.price; 
            let edit_date = new Date(); 
            let description = req.body.description;
            let type = req.body.type;
            let sql = "UPDATE article set ? WHERE article_id=";
            let sql2 = "UPDATE multimedia set ? WHERE article_id=";
            connection.query(sql + id, {
                title,
                text,
                category,
                price,
                edit_date
        
            }, function(err, results){
                connection.query(sql2 + id,{
                    type,
                    file,
                    description
                }, function(err, result){

                    res.redirect('/update/'+ req.params.id);
                });
            });
        }
    })
}



module.exports = controller;