-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-02-2020 a las 07:27:17
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pscleaners`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Archivos`
--

CREATE TABLE `Archivos` (
  `Id` int(11) NOT NULL,
  `Empleado_Id` int(11) NOT NULL,
  `Categoria_Id` int(11) NOT NULL,
  `Ruta` varchar(500) NOT NULL,
  `Nombre` varchar(500) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorias`
--

CREATE TABLE `Categorias` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(500) NOT NULL,
  `FechaCreacion` date NOT NULL,
  `Estado` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Empleados`
--

CREATE TABLE `Empleados` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(500) NOT NULL,
  `Sexo` enum('Hombre','Mujer','Otro') NOT NULL,
  `Apellido` varchar(500) NOT NULL,
  `Empresa` varchar(500) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `OperadorCliente`
--

CREATE TABLE `OperadorCliente` (
  `Id` int(11) NOT NULL,
  `Cliente_Id` int(11) NOT NULL,
  `Operador_Id` int(11) NOT NULL,
  `FechaCreacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Operadores`
--

CREATE TABLE `Operadores` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(500) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(500) NOT NULL,
  `Direccion` varchar(500) NOT NULL,
  `Sucursal` varchar(500) NOT NULL,
  `Contacto` varchar(500) NOT NULL,
  `Telefono` varchar(500) NOT NULL,
  `Ciudad` varchar(500) NOT NULL,
  `Correo` varchar(500) NOT NULL,
  `NombreUsuario` varchar(500) NOT NULL,
  `Contrasenia` varchar(500) NOT NULL,
  `Rol` enum('Administrador','Cliente') NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Archivos`
--
ALTER TABLE `Archivos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Empleados`
--
ALTER TABLE `Empleados`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `OperadorCliente`
--
ALTER TABLE `OperadorCliente`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Operadores`
--
ALTER TABLE `Operadores`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Archivos`
--
ALTER TABLE `Archivos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Empleados`
--
ALTER TABLE `Empleados`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `OperadorCliente`
--
ALTER TABLE `OperadorCliente`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Operadores`
--
ALTER TABLE `Operadores`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
