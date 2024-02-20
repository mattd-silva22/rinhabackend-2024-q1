CREATE TABLE transactions (
    id CHAR(36) PRIMARY KEY,
    value INT,
    client_id INT,
    description VARCHAR(10),
    type ENUM('c', 'd'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);