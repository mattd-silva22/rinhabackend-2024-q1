CREATE DATABASE rinhabackend;

CREATE USER 'rinhabackend-api'@'%' IDENTIFIED BY '12345';

GRANT INSERT, SELECT ON rinhabackend.* TO 'rinhabackend-api'@'%';