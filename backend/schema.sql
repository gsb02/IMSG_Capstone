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
  `ID` smallint NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) NOT NULL,
  `equipmentID` smallint NOT NULL,
  `quantitySmall` int NOT NULL,
  `quantityMedium` int NOT NULL,
  `quantityLarge` int NOT NULL,
  `quantityXL` int NOT NULL,
  `quantity2XL` int NOT NULL,
  `quantity3XL` int NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `apparelEquipmentID` FOREIGN KEY (`equipmentID`) REFERENCES `equipment` (`equipmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apparel`
--

LOCK TABLES `apparel` WRITE;
/*!40000 ALTER TABLE `apparel` DISABLE KEYS */;
/*!40000 ALTER TABLE `apparel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `equipmentID` smallint NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(255) NOT NULL,
  `storedQuantity` smallint NOT NULL,
  `distQuantity` smallint NOT NULL,
  `sportID` smallint NOT NULL,
  `equipmentType` smallint NOT NULL,
  `lastOrdered` date DEFAULT NULL,
  `lastDistributed` date DEFAULT NULL,
  PRIMARY KEY (`equipmentID`),
  KEY `sportID_idx` (`sportID`),
  CONSTRAINT `equipmentSportID` FOREIGN KEY (`sportID`) REFERENCES `sports` (`sportID`),
  CONSTRAINT `equipmentType` FOREIGN KEY (`equipmentType`) REFERENCES `equipment_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
INSERT INTO `equipment` VALUES (1,'Example Equipment',100,50,2,3,'2023-10-15','2023-11-05'),(2,'Example Equipment',100,50,2,3,'2023-10-15','2023-11-05'),(3,'Example Equipment',100,50,2,3,'2023-10-15','2023-11-05'),(4,'Example Equipment',100,50,2,3,'2023-10-15','2023-11-05'),(6,'Example Equipment',100,50,2,3,'2023-10-15','2023-11-05'),(7,'Example Equipment',100,50,2,4,'2023-10-15','2023-11-05'),(8,'Example Equipment',100,50,2,4,'2023-10-15','2023-11-05'),(9,'Example Equipment',100,50,2,4,'2023-10-15','2023-11-05'),(10,'Example Equipment',100,50,2,4,'2023-10-15','2023-11-05'),(11,'Example Equipment',100,50,2,4,'2023-10-15','2023-11-05'),(12,'Example jersey',100,50,2,4,'2023-10-15','2023-11-05'),(13,'Example jersey',100,50,2,4,'2023-10-15','2023-11-05');
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment_types`
--

DROP TABLE IF EXISTS `equipment_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment_types` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment_types`
--

LOCK TABLES `equipment_types` WRITE;
/*!40000 ALTER TABLE `equipment_types` DISABLE KEYS */;
INSERT INTO `equipment_types` VALUES (1,'apparel'),(2,'accessory'),(3,'shoe'),(4,'uniforms');
/*!40000 ALTER TABLE `equipment_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `itemName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `jerseys`
--

DROP TABLE IF EXISTS `jerseys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jerseys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `equipmentID` smallint NOT NULL,
  `color` varchar(50) NOT NULL,
  `size` varchar(20) NOT NULL,
  `jerseyNum` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `jerseyEquipmentID` FOREIGN KEY (`equipmentID`) REFERENCES `equipment` (`equipmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jerseys`
--

LOCK TABLES `jerseys` WRITE;
/*!40000 ALTER TABLE `jerseys` DISABLE KEYS */;
/*!40000 ALTER TABLE `jerseys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderID` smallint NOT NULL AUTO_INCREMENT,
  `orderDate` date NOT NULL,
  `orderCost` decimal(10,2) NOT NULL,
  `arrivalDate` date DEFAULT NULL,
  `sportID` smallint NOT NULL,
  PRIMARY KEY (`orderID`),
  KEY `orderSportID_idx` (`sportID`),
  CONSTRAINT `orderSportID` FOREIGN KEY (`sportID`) REFERENCES `sports` (`sportID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_equipment`
--

DROP TABLE IF EXISTS `player_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_equipment` (
  `playerID` smallint NOT NULL,
  `equipmentID` smallint NOT NULL,
  `quantity` smallint NOT NULL,
  PRIMARY KEY (`playerID`,`equipmentID`),
  KEY `equipmentID_idx` (`equipmentID`),
  CONSTRAINT `player_equipment_equipmentID` FOREIGN KEY (`equipmentID`) REFERENCES `equipment` (`equipmentID`),
  CONSTRAINT `player_equipment_playerID` FOREIGN KEY (`playerID`) REFERENCES `players` (`playerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_equipment`
--

LOCK TABLES `player_equipment` WRITE;
/*!40000 ALTER TABLE `player_equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `playerID` smallint NOT NULL AUTO_INCREMENT,
  `playerName` varchar(255) NOT NULL,
  `teamID` smallint NOT NULL,
  `age` smallint DEFAULT NULL,
  `class` char(2) DEFAULT NULL,
  `isCoach` tinyint(1) NOT NULL,
  `jerseyNum` smallint DEFAULT NULL,
  PRIMARY KEY (`playerID`),
  KEY `teamID_idx` (`teamID`),
  CONSTRAINT `teamID` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoes`
--

DROP TABLE IF EXISTS `shoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoes` (
  `name` varchar(255) DEFAULT NULL,
  `q_6` int DEFAULT NULL,
  `q_6_5` int DEFAULT NULL,
  `q_7` int DEFAULT NULL,
  `q_7_5` int DEFAULT NULL,
  `q_8` int DEFAULT NULL,
  `q_8_5` int DEFAULT NULL,
  `q_9` int DEFAULT NULL,
  `q_9_5` int DEFAULT NULL,
  `q_10` int DEFAULT NULL,
  `q_10_5` int DEFAULT NULL,
  `q_11` int DEFAULT NULL,
  `q_11_5` int DEFAULT NULL,
  `q_12` int DEFAULT NULL,
  `q_12_5` int DEFAULT NULL,
  `q_13` int DEFAULT NULL,
  `width` varchar(10) DEFAULT NULL,
  `equipmentID` smallint DEFAULT NULL,
  CONSTRAINT `shoeEquipmentID` FOREIGN KEY (`equipmentID`) REFERENCES `equipment` (`equipmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoes`
--

LOCK TABLES `shoes` WRITE;
/*!40000 ALTER TABLE `shoes` DISABLE KEYS */;
INSERT INTO `shoes` VALUES ('Example Shoe',10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,NULL,6);
/*!40000 ALTER TABLE `shoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizebreakdowns`
--

DROP TABLE IF EXISTS `sizebreakdowns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizebreakdowns` (
  `sizeBreakdownID` smallint NOT NULL AUTO_INCREMENT,
  `equipmentID` smallint NOT NULL,
  `small` smallint DEFAULT NULL,
  `med` smallint DEFAULT NULL,
  `large` smallint DEFAULT NULL,
  `size2x` smallint DEFAULT NULL,
  `size3x` smallint DEFAULT NULL,
  `anythingElse` char(50) DEFAULT NULL,
  PRIMARY KEY (`sizeBreakdownID`),
  UNIQUE KEY `equipmentID` (`equipmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizebreakdowns`
--

LOCK TABLES `sizebreakdowns` WRITE;
/*!40000 ALTER TABLE `sizebreakdowns` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizebreakdowns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sports` (
  `sportID` smallint NOT NULL AUTO_INCREMENT,
  `sportName` varchar(255) NOT NULL,
  PRIMARY KEY (`sportID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Baseball'),(2,'Basketball'),(3,'Field Hockey'),(4,'Football'),(5,'Ice Hockey'),(6,'Soccer'),(7,'Softball'),(8,'Swimming & Diving'),(9,'Track, Field & XC');
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_equipment`
--

DROP TABLE IF EXISTS `team_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_equipment` (
  `teamID` smallint NOT NULL,
  `equipmentID` smallint NOT NULL,
  `quantity` smallint NOT NULL,
  PRIMARY KEY (`teamID`,`equipmentID`),
  KEY `equipmentID_idx` (`equipmentID`),
  CONSTRAINT `team_equipment_equipmentID` FOREIGN KEY (`equipmentID`) REFERENCES `equipment` (`equipmentID`),
  CONSTRAINT `team_equipment_teamID` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_equipment`
--

LOCK TABLES `team_equipment` WRITE;
/*!40000 ALTER TABLE `team_equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `teamID` smallint NOT NULL AUTO_INCREMENT,
  `teamName` varchar(255) NOT NULL,
  `teamDesc` text,
  `sportID` smallint NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `season` year DEFAULT NULL,
  PRIMARY KEY (`teamID`),
  KEY `sportID_idx` (`sportID`),
  CONSTRAINT `sportID` FOREIGN KEY (`sportID`) REFERENCES `sports` (`sportID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;