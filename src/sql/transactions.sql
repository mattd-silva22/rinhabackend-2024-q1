CREATE TABLE transactions (
    id CHAR(36) PRIMARY KEY,
    value INT,
    client_id INT,
    description VARCHAR(10),
    type ENUM('c', 'd'),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);