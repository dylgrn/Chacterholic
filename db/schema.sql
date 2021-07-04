DROP DATABASE IF EXISTS project_2;

CREATE DATABASE project_2;


-- USE project_2;


-- CREATE TABLE accounts (
--   id int(11) NOT NULL,
--   username varchar(50) NOT NULL,
--   password varchar(255) NOT NULL,
--   email varchar(100) NOT NULL
-- ) 

CREATE TABLE 'items' (
  'id' int(10) UNSIGHNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  'item_type' varchar(255) DEFAULT NULL,
  'item_attack' varchar(255) DEFAULT NULL,
  'item_deffense' varchar(255) DEFAULT NULL,
)
