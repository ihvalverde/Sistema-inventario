CREATE DATABASE sistema_ventas;
USE sistema_ventas;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    categoria VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2)
);

INSERT INTO productos (nombre, categoria, precio, stock) VALUES
    ('Body Manga Larga Oso', 'Ropa', 35.00, 12),
    ('Pañalera Impermeable Rosa', 'Pañaleras', 120.00, 6),
    ('Set Baberos Silicona', 'Accesorios', 25.50, 20);