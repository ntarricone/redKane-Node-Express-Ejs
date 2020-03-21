CREATE database redkane;

USE redkane;

CREATE TABLE IF NOT EXISTS  article (
   article_id int auto_increment primary key,
   title varchar(255),
   text BLOB,
   keywords varchar(255),
   category varchar(100),
   price FLOAT,
   date DATE
);

CREATE TABLE IF NOT EXISTS multimedia(
	multimedia_id INT AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(10),
    multimedia_path VARCHAR(300),
    description VARCHAR(400),
	keywords VARCHAR(255),
    article_id INT,
    
    CONSTRAINT fk_article_1 FOREIGN KEY (article_id) REFERENCES article(article_id)
);

INSERT INTO article (title, text, keywords, category, price, date) VALUES ("La noche del 10", "lorem papapappapapapappapapapapapapapapppa", "maradona", "futbol", 100, "2018-11-30");
INSERT INTO article (title, text, keywords, category, price, date) VALUES ("A. Fernandez contraataca", "lorem papapappapapapappapapapapapapapapppa", "actualidad", "politica", 20, "2019-11-30");
INSERT INTO article (title, text, keywords, category, price, date) VALUES ("Pele juega", "lorem papapappapapapappapapapapapapapapppa", "pele", "futbol", 88, "2018-12-30");
INSERT INTO article (title, text, keywords, category, price, date) VALUES ("Matias Ale cambia", "lorem papapappapapapappapapapapapapapapppa", "actuación", "espectaculo", 10, "2018-11-28");
INSERT INTO article (title, text, keywords, category, price, date) VALUES ("China Sube Tarifas", "lorem papapappapapapappapapapapapapapapppa", "rrii", "internacional", 120, "2018-01-30");


INSERT INTO multimedia (type, multimedia_path, description, keywords, article_id) VALUES ("foto", "Aquí va una imagen", "Maradona jugando", "Diego futbol", 1);
INSERT INTO multimedia (type, multimedia_path, description, keywords, article_id) VALUES ("foto", "Aquí va una imagen", "Fernandez hablando", "elleciones politica", 2);
INSERT INTO multimedia (type, multimedia_path, description, keywords, article_id) VALUES ("foto", "Aquí va una imagen", "Pele jugando", "Pele futbol", 3);
INSERT INTO multimedia (type, multimedia_path, description, keywords, article_id) VALUES ("foto", "Aquí va una imagen", "Bailando x un sueño", "Tinelli bailando", 4);
INSERT INTO multimedia (type, multimedia_path, description, keywords, article_id) VALUES ("foto", "Aquí va una imagen", "Ji Xing Ping hablando", "guerra comercial", 5);

SELECT title, type FROM article JOIN multimedia ON article.article_id = multimedia.multimedia_id;