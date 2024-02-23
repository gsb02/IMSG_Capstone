-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: inventorytracker
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `apparel`
--

DROP TABLE IF EXISTS `apparel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apparel` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) NOT NULL,
  `equipmentID` int NOT NULL,
  `quantitySmall` int NOT NULL,
  `quantityMedium` int NOT NULL,
  `quantityLarge` int NOT NULL,
  `quantityXL` int NOT NULL,
  `quantity2XL` int NOT NULL,
  `quantity3XL` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `equipmentId` smallint NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(255) NOT NULL,
  `storedQuantity` smallint NOT NULL,
  `distQuantity` smallint NOT NULL,
  `sportID` smallint NOT NULL,
  `equipmentType` smallint NOT NULL,
  `lastOrdered` date DEFAULT NULL,
  `lastDistributed` date DEFAULT NULL,
  PRIMARY KEY (`equipmentId`),
  KEY `sportID_idx` (`sportID`),
  CONSTRAINT `equipmentSportID` FOREIGN KEY (`sportID`) REFERENCES `sports` (`sportId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderId` smallint NOT NULL AUTO_INCREMENT,
  `orderDate` date NOT NULL,
  `orderCost` decimal(10,2) NOT NULL,
  `arrivalDate` date DEFAULT NULL,
  `sportId` smallint NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `orderSportID_idx` (`sportId`),
  CONSTRAINT `orderSportID` FOREIGN KEY (`sportId`) REFERENCES `sports` (`sportId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `playerId` smallint NOT NULL AUTO_INCREMENT,
  `playerName` varchar(255) NOT NULL,
  `teamID` smallint NOT NULL,
  `age` smallint DEFAULT NULL,
  `class` char(2) DEFAULT NULL,
  `isCoach` tinyint(1) NOT NULL,
  `jerseyNum` smallint DEFAULT NULL,
  PRIMARY KEY (`playerId`),
  KEY `teamID_idx` (`teamID`),
  CONSTRAINT `teamID` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sizebreakdowns`
--

DROP TABLE IF EXISTS `sizebreakdowns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizebreakdowns` (
  `sizeBreakdownId` smallint NOT NULL AUTO_INCREMENT,
  `equipmentId` smallint NOT NULL,
  `small` smallint DEFAULT NULL,
  `med` smallint DEFAULT NULL,
  `large` smallint DEFAULT NULL,
  `size2x` smallint DEFAULT NULL,
  `size3x` smallint DEFAULT NULL,
  `anythingElse` char(50) DEFAULT NULL,
  PRIMARY KEY (`sizeBreakdownId`),
  UNIQUE KEY `equipmentId` (`equipmentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sports` (
  `sportId` smallint NOT NULL AUTO_INCREMENT,
  `sportName` varchar(255) NOT NULL,
  PRIMARY KEY (`sportId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


INSERT INTO `sports` (sportName) VALUES 
('Baseball'),
('Basketball'),
('Field Hockey'),
('Football'),
('Ice Hockey'),
('Soccer'),
('Softball'),
('Swimming & Diving'),
('Track, Field & XC');

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `teamId` smallint NOT NULL AUTO_INCREMENT,
  `teamName` varchar(255) NOT NULL,
  `teamDesc` text,
  `sportID` smallint NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `season` year DEFAULT NULL,
  PRIMARY KEY (`teamId`),
  KEY `sportID_idx` (`sportID`),
  CONSTRAINT `sportID` FOREIGN KEY (`sportID`) REFERENCES `sports` (`sportId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-21 21:23:20
