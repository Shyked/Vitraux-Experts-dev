-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           10.1.20-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Export de la structure de la base pour vitraux-db
CREATE DATABASE IF NOT EXISTS `vitraux-db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `vitraux-db`;

-- Export de la structure de la table vitraux-db. comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_item` varchar(200) NOT NULL,
  `id_corpus` varchar(200) NOT NULL,
  `id_user` varchar(100) NOT NULL,
  `text` varchar(500) NOT NULL DEFAULT '',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table vitraux-db. sources
CREATE TABLE IF NOT EXISTS `sources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_corpus` varchar(200) NOT NULL,
  `id_item` varchar(200) NOT NULL,
  `user` varchar(200) NOT NULL,
  `url` varchar(300) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

CREATE USER 'server'@'localhost' IDENTIFIED BY 'aqwzsxedc';
GRANT  SELECT,  INSERT  ON *.* TO 'server'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

ALTER TABLE `comments`
	ADD COLUMN `cpt_like` INT NULL DEFAULT '0' AFTER `date`,
	ADD COLUMN `cpt_dislike` INT NULL DEFAULT '0' AFTER `cpt_like`;