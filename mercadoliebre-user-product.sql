-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-09-2023 a las 02:44:51
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercadoliebre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `imageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `imageUrl`) VALUES
(10, 'Toyota Hilux', 450000.00, 'Excelente estado, se encuentra con pocos Km, solo se utilizo en ciudad', 'https://media.toyota.com.ar/48637032-5909-42e7-9c06-4d1bfcce1741.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `hashedpw` varchar(255) NOT NULL,
  `profileImg` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `admin` tinyint(1) DEFAULT 0,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `uuid_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `hashedpw`, `profileImg`, `email`, `admin`, `first_name`, `last_name`, `uuid_id`) VALUES
(1, 'bruno', '$2b$12$3BtLQ/TNEqTJRWGPOYUNSexrSIn6mq9KkaGpl14YmqBr7.bCmYOdW', 'publicimagesimg-macbook-pro-2019.jpg', 'brunoschu@mercadoliebre.com.ar', 1, 'Bruno', 'Scuteri', 'a5c14377-ae6d-4534-86a3-87ec2e47c4b8'),
(11, 'axelponce', '$2b$12$NkxwWPhiKBe0hRSLcEYcEOmHg4iu9w08.CY/GScD4BK5lCrRneEte', '/images/uploads/profile-img/1692677291439_axelponce.png', 'brunouuid@mercadoliebre.com.ar', 1, 'bruno', 'uuid', ''),
(13, '3421fdsa', '$2b$12$RzOxNTiHQC.bU/lqwZGVd.JQhYB3To8uJuL5tEUK8YlgWgRy7zKbC', '/images/uploads/profile-img/1692681980562_3421fdsa.png', 'scuteri26@mercadoliebre.com.ar', 1, 'Scuteri', 'Antonio', ''),
(14, 'brunoaver', '$2b$12$eVTcjN9jyLnNIJZ1eJRcAuqAKISL8ne9l85LWO4ceyoLBwr1DVTsW', '/images/uploads/profile-img/1692683675042_brunoaver.png', 'brunoaver@mercadoliebre.com.ar', 1, 'bruno', 'aver', ''),
(15, 'brunomartin', '$2b$12$j4ixgju57KjkUOKZsfzIoOyuKOw.qJNdw.d4/umeS3RN7IQZmzEPG', '/images/uploads/profile-img/1692688145019_brunomartin.png', 'brunomartin@mercadoliebre.com.ar', 1, 'bruno', 'martin', ''),
(16, 'axelbostero', '$2b$12$25Vli0fUbHO6C3V4S3vmR.KFUQ30baZb0Un/j0vhxIbflmc3A2oPC', '/images/uploads/profile-img/1692734106911_axelbostero.png', 'axelponceboca@mercadoliebre.com.ar', 1, 'axel ', 'poncebostero', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
