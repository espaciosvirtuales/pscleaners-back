-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 02-03-2020 a las 08:56:28
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
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `Id` int(11) NOT NULL,
  `Empleado_Id` int(11) NOT NULL,
  `Categoria_Id` int(11) NOT NULL,
  `Ruta` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `FechaCreacion` date NOT NULL,
  `Estado` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Sexo` enum('Hombre','Mujer','Otro') NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `Empresa` varchar(255) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fileupload`
--

CREATE TABLE `fileupload` (
  `id` int(10) UNSIGNED NOT NULL,
  `text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Operadores`
--

CREATE TABLE `Operadores` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operadores`
--

-- CREATE TABLE `operadores` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `text` varchar(255) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operador_cliente`
--

CREATE TABLE `operador_cliente` (
  `Id` int(11) NOT NULL,
  `Cliente_Id` int(11) NOT NULL,
  `Operador_Id` int(11) NOT NULL,
  `FechaCreacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(1000) NOT NULL,
  `userid` int(11) NOT NULL,
  `FechaCreacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `userid`, `FechaCreacion`) VALUES
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIwIjp7IklkIjozLCJOb21icmUiOiJBZG1pbmlzdHJhZG9yIEVzcGFjaW9zIFZpcnR1YWxlcyIsIkRpcmVjY2lvbiI6Ik1vbnRlcnJleSBFViIsIlN1Y3Vyc2FsIjoiRVYiLCJDb250YWN0byI6Ijg5OCA4OTg5IDg5ODkgIiwiVGVsZWZvbm8iOiI4OTg5IDg5IDg5IDg5IiwiQ2l1ZGFkIjoiTW9udGVycmV5IE5MIiwiQ29ycmVvIjoiZXZAZXYuY29tIiwiTm9tYnJlVXN1YXJpbyI6ImV2IiwiQ29udHJhc2VuaWEiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyIsIlJvbCI6IkFkbWluaXN0cmFkb3IiLCJGZWNoYUNyZWFjaW9uIjoiMjAyMC0wMy0wMlQwNjowMDowMC4wMDBaIn0sImNoZWNrIjp0cnVlLCJpYXQiOjE1ODMxMzMzODF9.ncOH56sQasmWKWQNdFItQfrJnPJXXZ_tKETXVuZxmrQ', 3, '2020-03-02 01:16:21'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIwIjp7IklkIjozLCJOb21icmUiOiJBZG1pbmlzdHJhZG9yIEVzcGFjaW9zIFZpcnR1YWxlcyIsIkRpcmVjY2lvbiI6Ik1vbnRlcnJleSBFViIsIlN1Y3Vyc2FsIjoiRVYiLCJDb250YWN0byI6Ijg5OCA4OTg5IDg5ODkgIiwiVGVsZWZvbm8iOiI4OTg5IDg5IDg5IDg5IiwiQ2l1ZGFkIjoiTW9udGVycmV5IE5MIiwiQ29ycmVvIjoiZXZAZXYuY29tIiwiTm9tYnJlVXN1YXJpbyI6ImV2IiwiQ29udHJhc2VuaWEiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyIsIlJvbCI6IkFkbWluaXN0cmFkb3IiLCJGZWNoYUNyZWFjaW9uIjoiMjAyMC0wMy0wMlQwNjowMDowMC4wMDBaIn0sImNoZWNrIjp0cnVlLCJpYXQiOjE1ODMxMzM1NzN9.FP2AmQO_O7x3m_XFMm7uausIUQHnw5InAafCcsTG3JQ', 3, '2020-03-02 01:19:33'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIwIjp7IklkIjozLCJOb21icmUiOiJBZG1pbmlzdHJhZG9yIEVzcGFjaW9zIFZpcnR1YWxlcyIsIkRpcmVjY2lvbiI6Ik1vbnRlcnJleSBFViIsIlN1Y3Vyc2FsIjoiRVYiLCJDb250YWN0byI6Ijg5OCA4OTg5IDg5ODkgIiwiVGVsZWZvbm8iOiI4OTg5IDg5IDg5IDg5IiwiQ2l1ZGFkIjoiTW9udGVycmV5IE5MIiwiQ29ycmVvIjoiZXZAZXYuY29tIiwiTm9tYnJlVXN1YXJpbyI6ImV2IiwiQ29udHJhc2VuaWEiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyIsIlJvbCI6IkFkbWluaXN0cmFkb3IiLCJGZWNoYUNyZWFjaW9uIjoiMjAyMC0wMy0wMlQwNjowMDowMC4wMDBaIn0sImNoZWNrIjp0cnVlLCJpYXQiOjE1ODMxMzU0Nzd9.G4HlbcI1NBD6pAxIM8Pbbe-bhxW1ANOdmZCnhQ2BRIg', 3, '2020-03-02 01:51:17'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIwIjp7IklkIjozLCJOb21icmUiOiJBZG1pbmlzdHJhZG9yIEVzcGFjaW9zIFZpcnR1YWxlcyIsIkRpcmVjY2lvbiI6Ik1vbnRlcnJleSBFViIsIlN1Y3Vyc2FsIjoiRVYiLCJDb250YWN0byI6Ijg5OCA4OTg5IDg5ODkgIiwiVGVsZWZvbm8iOiI4OTg5IDg5IDg5IDg5IiwiQ2l1ZGFkIjoiTW9udGVycmV5IE5MIiwiQ29ycmVvIjoiZXZAZXYuY29tIiwiTm9tYnJlVXN1YXJpbyI6ImV2IiwiQ29udHJhc2VuaWEiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyIsIlJvbCI6IkFkbWluaXN0cmFkb3IiLCJGZWNoYUNyZWFjaW9uIjoiMjAyMC0wMy0wMlQwNjowMDowMC4wMDBaIn0sImNoZWNrIjp0cnVlLCJpYXQiOjE1ODMxMzU0Nzl9.HcGCuXU4ZMwrG_KEFKAIWu7KuvtlonyOhZUlic78IiA', 3, '2020-03-02 01:51:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Sucursal` varchar(255) NOT NULL,
  `Contacto` varchar(255) NOT NULL,
  `Telefono` varchar(255) NOT NULL,
  `Ciudad` varchar(255) NOT NULL,
  `Correo` varchar(255) NOT NULL,
  `NombreUsuario` varchar(255) NOT NULL,
  `Contrasenia` varchar(255) NOT NULL,
  `Rol` enum('Administrador','Cliente') NOT NULL,
  `FechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Nombre`, `Direccion`, `Sucursal`, `Contacto`, `Telefono`, `Ciudad`, `Correo`, `NombreUsuario`, `Contrasenia`, `Rol`, `FechaCreacion`) VALUES
(3, 'Administrador Espacios Virtuales', 'Monterrey EV', 'EV', '898 8989 8989 ', '8989 89 89 89', 'Monterrey NL', 'ev@ev.com', 'ev', '21232f297a57a5a743894a0e4a801fc3', 'Administrador', '2020-03-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `fileupload`
--
ALTER TABLE `fileupload`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Operadores`
--
ALTER TABLE `Operadores`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `operadores`
--
-- ALTER TABLE `operadores`
--   ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `operador_cliente`
--
ALTER TABLE `operador_cliente`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fileupload`
--
ALTER TABLE `fileupload`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Operadores`
--
ALTER TABLE `Operadores`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operadores`
--
-- ALTER TABLE `operadores`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operador_cliente`
--
ALTER TABLE `operador_cliente`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
