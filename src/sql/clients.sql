
USE rinhabackend;

CREATE TABLE clients (
    id INT PRIMARY KEY,
    `limit` INT,
    balance INT
);

INSERT INTO clients (id, `limit`, balance) VALUES
(1, 100000, 0),
(2, 80000, 0),
(3, 1000000, 0),
(4, 10000000, 0),
(5, 500000, 0);