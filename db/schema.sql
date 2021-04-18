DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR(100) NOT NULL,
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);