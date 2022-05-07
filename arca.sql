CREATE DATABASE  IF NOT EXISTS `arca` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `arca`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: arcaserver.mysql.database.azure.com    Database: arca
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `Admin_ID` int NOT NULL,
  `Usuario_ID` varchar(12) NOT NULL,
  PRIMARY KEY (`Admin_ID`),
  KEY `Usuario_ID` (`Usuario_ID`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`Usuario_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'ADMIN1234567');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrega`
--

DROP TABLE IF EXISTS `entrega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrega` (
  `Sub_ID` int DEFAULT NULL,
  `Super_ID` int DEFAULT NULL,
  `Archivo` varchar(250) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `PuntajeEntrega` float DEFAULT NULL,
  `PuntajeVideojuego` float DEFAULT NULL,
  `Comentario` varchar(500) DEFAULT NULL,
  `Revisado` tinyint(1) DEFAULT NULL,
  KEY `Super_ID` (`Super_ID`),
  KEY `Sub_ID` (`Sub_ID`),
  CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`),
  CONSTRAINT `entrega_ibfk_2` FOREIGN KEY (`Sub_ID`) REFERENCES `subnivel` (`Sub_ID`),
  CONSTRAINT `entrega_ibfk_3` FOREIGN KEY (`Sub_ID`) REFERENCES `subnivel` (`Sub_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrega`
--

LOCK TABLES `entrega` WRITE;
/*!40000 ALTER TABLE `entrega` DISABLE KEYS */;
INSERT INTO `entrega` VALUES (1,11,NULL,NULL,NULL,450,NULL,0),(1,1,NULL,NULL,NULL,0,NULL,0),(1,17,NULL,NULL,NULL,40,NULL,0),(2,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',90,80,'Bien hecho',1),(7,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',95,90,'asdas',1),(10,13,'https://docs.google.com/document/d/1gGwWYzuMI0i5QPVUlwo61bHv3PIFHD78NZQrXjvftXY/edit','2022-05-06',100,100,'Bien hecho',1),(1,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,75,'Bien hechooo',1),(3,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,75,'asdsa',1),(4,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,75,'asdas',1),(8,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,75,'Bien',1),(1,14,NULL,NULL,NULL,100,NULL,0),(11,13,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',89,85,'YAAA',1),(1,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,85,'bien',1),(2,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,85,'BIEEN',1),(7,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',75,85,'Algo bien',1),(10,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',89,85,'Yas',1),(3,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,85,'as',1),(4,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',100,85,'asd',1),(8,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',99,85,'asda',1),(11,16,'https://docs.google.com/document/d/1JsXs9TOfc9xWHdg1nHrj-KmBurO32iV3-2unM2S_iEA/edit','2022-05-06',89,85,'asd',1);
/*!40000 ALTER TABLE `entrega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juega`
--

DROP TABLE IF EXISTS `juega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juega` (
  `Sub_ID` int NOT NULL,
  `Super_ID` int NOT NULL,
  `Puntaje` float NOT NULL,
  KEY `Sub_ID` (`Sub_ID`),
  KEY `Super_ID` (`Super_ID`),
  CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`Sub_ID`) REFERENCES `subnivel` (`Sub_ID`),
  CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`Super_ID`) REFERENCES `supervisor` (`Super_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juega`
--

LOCK TABLES `juega` WRITE;
/*!40000 ALTER TABLE `juega` DISABLE KEYS */;
/*!40000 ALTER TABLE `juega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medalla`
--

DROP TABLE IF EXISTS `medalla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medalla` (
  `Meda_ID` int NOT NULL AUTO_INCREMENT,
  `Color` varchar(100) NOT NULL,
  `Elemento` varchar(100) NOT NULL,
  PRIMARY KEY (`Meda_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medalla`
--

LOCK TABLES `medalla` WRITE;
/*!40000 ALTER TABLE `medalla` DISABLE KEYS */;
INSERT INTO `medalla` VALUES (1,'Bronce','JR'),(2,'Plata','JR'),(3,'Oro','JR'),(4,'Bronce','JI'),(5,'Plata','JI'),(6,'Oro','JI'),(7,'Bronce','JM'),(8,'Plata','JM'),(9,'Oro','JM');
/*!40000 ALTER TABLE `medalla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pruebas`
--

DROP TABLE IF EXISTS `pruebas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pruebas` (
  `colum1` varchar(250) DEFAULT NULL,
  `colum2` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pruebas`
--

LOCK TABLES `pruebas` WRITE;
/*!40000 ALTER TABLE `pruebas` DISABLE KEYS */;
INSERT INTO `pruebas` VALUES ('test','puede que sepa'),('test2','nosabo');
/*!40000 ALTER TABLE `pruebas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subnivel`
--

DROP TABLE IF EXISTS `subnivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subnivel` (
  `Sub_ID` int NOT NULL AUTO_INCREMENT,
  `Meda_ID` int NOT NULL,
  `Instruccion` text NOT NULL,
  PRIMARY KEY (`Sub_ID`),
  KEY `Meda_ID` (`Meda_ID`),
  CONSTRAINT `subnivel_ibfk_1` FOREIGN KEY (`Meda_ID`) REFERENCES `medalla` (`Meda_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subnivel`
--

LOCK TABLES `subnivel` WRITE;
/*!40000 ALTER TABLE `subnivel` DISABLE KEYS */;
INSERT INTO `subnivel` VALUES (1,4,'Cuenta con una lista de tareas criticas del proceso a su cargo. Entregable: Mapeo de Proceso y Lista de Tareas Críticas por proceso. (Doc. Excel)'),(2,4,'Cuenta con el plan de entrenamiento y certificación del personal a su cargo. Entregable: Matriz de Entrenamiento. (Doc. Excel)'),(3,5,'Elabora HDTs operables de sus tareas criticas. Entregable: Lista de elaboración y validación de HDT y HDT finales. (Doc. Excel, pdf´s)'),(4,5,'Entrena con HDTs - evlalucaión aprobada de JI. Entregable: Evaluación de entrenadores aprobada. (Doc. Excel)'),(5,6,'Elaboro el 100% de HDTs de sus tareas criticas. Entregable: Lista de elaboración y validación de HDT y HDT finales. (Doc. Excel, pdf´s)'),(6,6,'100% de su equipo esta certificado en el  total de HDTs. Las x´s de su proceso se miden y estan en control 3 meses continuos. Entregable: Matriz de entrenamiento al 100% de equipo a su cargo. (Doc. Excel)'),(7,1,'Sostiene rutinas establecidas semanales con al menos 1 integrante de su equipo de trabajo. Entregable: Formato Job Relations. (Doc. Excel)'),(8,2,'Su equipo  percibe relaciones positivas de trabajo- el 100 % los items de la encuesta al supervisor se encuestra en el top 2 box. Entregable: Resultados de encuesta CH. (Text box)'),(9,3,'Los resultados de clima laboral del equipo de trabajo presentan mejora vs el año/encuesta anterior.  Entregable: Resultado en Perceptyx. (Text box)'),(10,7,'Se identifican mejoras en los pasos de las tareas criticas de manera rutinaria (minimo 1 por trimestre) a traves de la tarjera verde. Entregable: ICARD. (Doc. Excel)'),(11,8,'Identifica mejores practicas fuera de su proceso o sitio e implementa la mejora. Entregable: Presentación pptx. De Proyecto de Mejora. (Doc. PPTX.)'),(12,9,'Se evidencia la mejora en 1 o mas Xs de proceso y esta en control 3 meses continuos. Entregable: Correlación de X´s y HDT. (Doc. Excel)');
/*!40000 ALTER TABLE `subnivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supervisor`
--

DROP TABLE IF EXISTS `supervisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supervisor` (
  `Super_ID` int NOT NULL,
  `Usuario_ID` varchar(12) NOT NULL,
  `NumOperadores` int NOT NULL,
  `CertiBronce` tinyint(1) NOT NULL,
  `CertiPlata` tinyint(1) NOT NULL,
  `CertiOro` tinyint(1) NOT NULL,
  `Admin_ID` int NOT NULL,
  `Operarios_Totales` int DEFAULT NULL,
  `Mejoras_Implementadas` int DEFAULT NULL,
  `Mjrs_Mins_Paro_Porcentaje` float DEFAULT NULL,
  `Mjrs_Envs_Dsechds_Porcentaje` float DEFAULT NULL,
  `Mjrs_Mins_CambioFormato_Porcentaje` float DEFAULT NULL,
  `Imagen` varchar(250) DEFAULT NULL,
  `Revisado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Super_ID`),
  KEY `Admin_ID` (`Admin_ID`),
  KEY `Usuario_ID` (`Usuario_ID`),
  CONSTRAINT `supervisor_ibfk_2` FOREIGN KEY (`Admin_ID`) REFERENCES `administrador` (`Admin_ID`),
  CONSTRAINT `supervisor_ibfk_3` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`Usuario_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supervisor`
--

LOCK TABLES `supervisor` WRITE;
/*!40000 ALTER TABLE `supervisor` DISABLE KEYS */;
INSERT INTO `supervisor` VALUES (1,'EA011040',0,0,0,0,1,20,5,52,50,40,'https://google.com',1),(2,'EA019210',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',0),(3,'EA019650',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',0),(4,'EA020991',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',1),(5,'EA070192',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',0),(6,'EA129874',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',1),(7,'INSPDCPO',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/12w6kXRVoFL_9H7PfGajiNJtGWT4V--zY/view?usp=sharing',0),(8,'JOPELE15',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/1yVWFcH-OhSpprhUUGy-O9Yd2or2-nP2_/view?usp=sharing',0),(9,'JULIQU31',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/1yVWFcH-OhSpprhUUGy-O9Yd2or2-nP2_/view?usp=sharing',1),(10,'LUGOME14',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/1yVWFcH-OhSpprhUUGy-O9Yd2or2-nP2_/view?usp=sharing',0),(11,'VARACA22',0,0,0,0,1,20,NULL,NULL,NULL,NULL,'https://drive.google.com/file/d/1yVWFcH-OhSpprhUUGy-O9Yd2or2-nP2_/view?usp=sharing',1),(12,'YALURE17',0,0,0,0,1,20,8,47.8261,47.8261,47.8261,'https://drive.google.com/file/d/1yVWFcH-OhSpprhUUGy-O9Yd2or2-nP2_/view?usp=sharing',0),(13,'P1',13,1,0,0,1,17,6,-50,50,-1500,'https://www.google.com',1),(14,'P2',0,0,0,0,1,20,0,0,0,0,'https://drive.google.com/file/d/1daun8iBAeYZ6HHxV1t8JyhbH7oplukI5/view?usp=sharing',1),(15,'P3',0,0,0,0,1,20,0,0,0,0,'xd',0),(16,'P4',0,1,0,0,1,20,0,0,0,0,'xd',0),(17,'P5',0,0,0,0,1,20,0,0,0,0,'https://drive.google.com/file/d/1AzbRoRg4PrTuZBQB9E8GgWHS0OLMzXmy/view?usp=sharing',0);
/*!40000 ALTER TABLE `supervisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `Usuario_ID` varchar(12) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contrasenia` varchar(100) NOT NULL,
  `Planta` varchar(100) NOT NULL,
  `Tipo_Usuario` varchar(100) NOT NULL,
  PRIMARY KEY (`Usuario_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('ADMIN1234567','El Admin','correodeladmin@tec.mx','adminpass123','P. INSURGENTES','Administrador'),('EA011040','Maldonado González Eliseo','eliseo.maldonado22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('EA019210','Gutiérrez Gallegoz Juan Fernando','juan.gutierrez22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('EA019650','Rodríguez Moreno Cesar','cesar.rodriguezm22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('EA020991','Salazar Vázquez Jesús Luis','joseluis.salazar22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('EA070192','Rivera Martínez Reynaldo','reynaldo.riveram22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('EA129874','Rojas Méndez Juan Carlos','juancarlos.rojas22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('INSPDCPO','Pérez Oviedo Carlos Alberto','INSPDCPO22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('JOPELE15','Pedraza Leal José Rosendo','jose.pedraza22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('JULIQU31','Lima Quiroz Julio Cesar','julio.lima22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('LUGOME14','González Méndez Luis Lauro','lauro.gonzalez22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('P1','Leopoldo','leopoldo@tec.mx','aaa','P. LEÓN','Supervisor'),('P2','Macías','macias@tec.mx','aaa','P. LEÓN','Supervisor'),('P3','Veto','veto@tec.mx','aaa','P. LEÓN','Supervisor'),('P4','Vic','vic@tec.mx','aaa','P. LEÓN','Supervisor'),('P5','Pau','pau@tec.mx','aaa','P. LEÓN','Supervisor'),('VARACA22','Rangel Castillo Vasti Berenice','basti.rangel22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor'),('YALURE17','Luna Reyez Yahaira Lizbeth','rahaira.lunar22@arcacontal.com','arca2022','P. INSURGENTES','Supervisor');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-07 11:50:38
