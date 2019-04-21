
-- Create the new database if it does not exist already
DROP DATABASE IF EXISTS burgers_db;
-- Create a new database called 'DatabaseName'
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
)