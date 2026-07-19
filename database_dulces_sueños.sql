-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         12.2.2-MariaDB - MariaDB Server
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.14.0.7165
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla sistemaventas.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Volcando datos para la tabla sistemaventas.productos: ~10 rows (aproximadamente)
INSERT INTO `productos` (`id`, `nombre`, `precio`, `stock`, `categoria`) VALUES
	(1, 'Body Manga Larga Oso', 35, 12, 'Ropa'),
	(2, 'Pañalera Impermeable Rosa', 120, 6, 'Pañaleras'),
	(3, 'Set Baberos Silicona', 25.5, 20, 'Accesorios'),
	(5, 'Conjunto Hilo Recién Nacido', 55, 10, 'Ropa'),
	(6, 'Aspirador Nasal Eléctrico', 85, 3, 'Higiene'),
	(7, 'Manta de Apego conejito', 32, 15, 'Accesorios'),
	(8, 'Pack de 4 Medias Antideslizantes', 18.5, 4, 'Ropa'),
	(9, 'Organizador de Pañales Portátil', 45, 8, 'Pañaleras'),
	(10, 'Termómetro Digital Infrarrojo', 110, 2, 'Higiene'),
	(11, 'Mordedor de Agua Refrigerante', 12, 25, 'Accesorios');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
