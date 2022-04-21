-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2022 at 01:10 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arca`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

CREATE TABLE `administrador` (
  `Admin_ID` int(11) NOT NULL,
  `Usuario_ID` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`Admin_ID`, `Usuario_ID`) VALUES
(1, 'ADMIN1234567');

-- --------------------------------------------------------

--
-- Table structure for table `desbloqueopersonaje`
--

CREATE TABLE `desbloqueopersonaje` (
  `Super_ID` int(11) NOT NULL,
  `Personaje_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `entrega`
--

CREATE TABLE `entrega` (
  `NumEntrega` int(11) NOT NULL,
  `Sub_ID` int(11) NOT NULL,
  `Archivo` varchar(250) NOT NULL,
  `Fecha` date NOT NULL,
  `PuntajeEntrega` float NOT NULL,
  `Admin_ID` int(11) NOT NULL,
  `Super_ID` int(11) NOT NULL,
  `Comentario` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ganamedalla`
--

CREATE TABLE `ganamedalla` (
  `Meda_ID` int(11) NOT NULL,
  `Super_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `juega`
--

CREATE TABLE `juega` (
  `Sub_ID` int(11) NOT NULL,
  `Super_ID` int(11) NOT NULL,
  `Puntaje` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medalla`
--

CREATE TABLE `medalla` (
  `Meda_ID` int(11) NOT NULL,
  `Color` varchar(100) NOT NULL,
  `Elemento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medalla`
--

INSERT INTO `medalla` (`Meda_ID`, `Color`, `Elemento`) VALUES
(1, 'Bronce', 'JR'),
(2, 'Plata', 'JR'),
(3, 'Oro', 'JR'),
(4, 'Bronce', 'JI'),
(5, 'Plata', 'JI'),
(6, 'Oro', 'JI'),
(7, 'Bronce', 'JM'),
(8, 'Plata', 'JM'),
(9, 'Oro', 'JM');

-- --------------------------------------------------------

--
-- Table structure for table `personaje`
--

CREATE TABLE `personaje` (
  `Personaje_ID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pregunta`
--

CREATE TABLE `pregunta` (
  `Preg_ID` int(11) NOT NULL,
  `Meda_ID` int(11) NOT NULL,
  `Texto` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `respuesta`
--

CREATE TABLE `respuesta` (
  `NumRespuesta` int(11) NOT NULL,
  `Preg_ID` int(11) NOT NULL,
  `Texto` varchar(250) NOT NULL,
  `Correcta` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subnivel`
--

CREATE TABLE `subnivel` (
  `Sub_ID` int(11) NOT NULL,
  `Meda_ID` int(11) NOT NULL,
  `Instruccion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subnivel`
--

INSERT INTO `subnivel` (`Sub_ID`, `Meda_ID`, `Instruccion`) VALUES
(1, 1, 'Instruccion de prueba'),
(2, 4, 'instruccion de prueba'),
(3, 7, 'instruccion de prueba');

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `Super_ID` int(11) NOT NULL,
  `Usuario_ID` varchar(12) NOT NULL,
  `NumOperadores` int(11) NOT NULL,
  `CertiBronce` tinyint(1) NOT NULL,
  `CertiPlata` tinyint(1) NOT NULL,
  `CertiOro` tinyint(1) NOT NULL,
  `Admin_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supervisor`
--

INSERT INTO `supervisor` (`Super_ID`, `Usuario_ID`, `NumOperadores`, `CertiBronce`, `CertiPlata`, `CertiOro`, `Admin_ID`) VALUES
(1, 'EA011040', 200, 0, 0, 0, 1),
(2, 'EA019210', 500, 0, 0, 0, 1),
(3, 'EA019650', 300, 0, 0, 0, 1),
(4, 'EA020991', 900, 0, 0, 0, 1),
(5, 'EA070192', 200, 0, 0, 0, 1),
(6, 'EA129874', 100, 0, 0, 0, 1),
(7, 'INSPDCPO', 700, 0, 0, 0, 1),
(8, 'JOPELE15', 400, 0, 0, 0, 1),
(9, 'JULIQU31', 500, 0, 0, 0, 1),
(10, 'LUGOME14', 800, 0, 0, 0, 1),
(11, 'VARACA22', 300, 0, 0, 0, 1),
(12, 'YALURE17', 200, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `Usuario_ID` varchar(12) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contrasenia` varchar(100) NOT NULL,
  `Planta` varchar(100) NOT NULL,
  `Tipo_Usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`Usuario_ID`, `Nombre`, `Correo`, `Contrasenia`, `Planta`, `Tipo_Usuario`) VALUES
('ADMIN1234567', 'El Admin', 'correodeladmin@tec.mx', 'adminpass123', 'P. INSURGENTES', 'Administrador'),
('EA011040', 'Maldonado González Eliseo', 'eliseo.maldonado22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('EA019210', 'Gutiérrez Gallegoz Juan Fernando', 'juan.gutierrez22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('EA019650', 'Rodríguez Moreno Cesar', 'cesar.rodriguezm22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('EA020991', 'Salazar Vázquez Jesús Luis', 'joseluis.salazar22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('EA070192', 'Rivera Martínez Reynaldo', 'reynaldo.riveram22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('EA129874', 'Rojas Méndez Juan Carlos', 'juancarlos.rojas22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('INSPDCPO', 'Pérez Oviedo Carlos Alberto', 'INSPDCPO22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('JOPELE15', 'Pedraza Leal José Rosendo', 'jose.pedraza22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('JULIQU31', 'Lima Quiroz Julio Cesar', 'julio.lima22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('LUGOME14', 'González Méndez Luis Lauro', 'lauro.gonzalez22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('VARACA22', 'Rangel Castillo Vasti Berenice', 'basti.rangel22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor'),
('YALURE17', 'Luna Reyez Yahaira Lizbeth', 'rahaira.lunar22@arcacontal.com', 'arca2022', 'P. INSURGENTES', 'Supervisor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`Admin_ID`),
  ADD KEY `Usuario_ID` (`Usuario_ID`);

--
-- Indexes for table `desbloqueopersonaje`
--
ALTER TABLE `desbloqueopersonaje`
  ADD KEY `Super_ID` (`Super_ID`),
  ADD KEY `Personaje_ID` (`Personaje_ID`);

--
-- Indexes for table `entrega`
--
ALTER TABLE `entrega`
  ADD KEY `Super_ID` (`Super_ID`),
  ADD KEY `Admin_ID` (`Admin_ID`),
  ADD KEY `Sub_ID` (`Sub_ID`);

--
-- Indexes for table `ganamedalla`
--
ALTER TABLE `ganamedalla`
  ADD KEY `Meda_ID` (`Meda_ID`),
  ADD KEY `Super_ID` (`Super_ID`);

--
-- Indexes for table `juega`
--
ALTER TABLE `juega`
  ADD KEY `Sub_ID` (`Sub_ID`),
  ADD KEY `Super_ID` (`Super_ID`);

--
-- Indexes for table `medalla`
--
ALTER TABLE `medalla`
  ADD PRIMARY KEY (`Meda_ID`);

--
-- Indexes for table `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`Personaje_ID`);

--
-- Indexes for table `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`Preg_ID`),
  ADD KEY `Meda_ID` (`Meda_ID`);

--
-- Indexes for table `respuesta`
--
ALTER TABLE `respuesta`
  ADD KEY `Preg_ID` (`Preg_ID`);

--
-- Indexes for table `subnivel`
--
ALTER TABLE `subnivel`
  ADD PRIMARY KEY (`Sub_ID`),
  ADD KEY `Meda_ID` (`Meda_ID`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`Super_ID`),
  ADD KEY `Admin_ID` (`Admin_ID`),
  ADD KEY `Usuario_ID` (`Usuario_ID`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Usuario_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medalla`
--
ALTER TABLE `medalla`
  MODIFY `Meda_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personaje`
--
ALTER TABLE `personaje`
  MODIFY `Personaje_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `Preg_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subnivel`
--
ALTER TABLE `subnivel`
  MODIFY `Sub_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`Usuario_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `desbloqueopersonaje`
--
ALTER TABLE `desbloqueopersonaje`
  ADD CONSTRAINT `desbloqueopersonaje_ibfk_1` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`),
  ADD CONSTRAINT `desbloqueopersonaje_ibfk_2` FOREIGN KEY (`Personaje_ID`) REFERENCES `personaje` (`Personaje_ID`);

--
-- Constraints for table `entrega`
--
ALTER TABLE `entrega`
  ADD CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`),
  ADD CONSTRAINT `entrega_ibfk_2` FOREIGN KEY (`Admin_ID`) REFERENCES `administrador` (`Admin_ID`),
  ADD CONSTRAINT `entrega_ibfk_3` FOREIGN KEY (`Sub_ID`) REFERENCES `subnivel` (`Sub_ID`);

--
-- Constraints for table `ganamedalla`
--
ALTER TABLE `ganamedalla`
  ADD CONSTRAINT `ganamedalla_ibfk_1` FOREIGN KEY (`Meda_ID`) REFERENCES `medalla` (`Meda_ID`),
  ADD CONSTRAINT `ganamedalla_ibfk_2` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`);

--
-- Constraints for table `juega`
--
ALTER TABLE `juega`
  ADD CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`Sub_ID`) REFERENCES `subnivel` (`Sub_ID`),
  ADD CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`);

--
-- Constraints for table `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`Meda_ID`) REFERENCES `medalla` (`Meda_ID`);

--
-- Constraints for table `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`Preg_ID`) REFERENCES `pregunta` (`Preg_ID`);

--
-- Constraints for table `subnivel`
--
ALTER TABLE `subnivel`
  ADD CONSTRAINT `subnivel_ibfk_1` FOREIGN KEY (`Meda_ID`) REFERENCES `medalla` (`Meda_ID`);

--
-- Constraints for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD CONSTRAINT `supervisor_ibfk_2` FOREIGN KEY (`Admin_ID`) REFERENCES `administrador` (`Admin_ID`),
  ADD CONSTRAINT `supervisor_ibfk_3` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`Usuario_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
