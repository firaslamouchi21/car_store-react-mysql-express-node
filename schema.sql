-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema car_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `car_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `car_store` ;

-- -----------------------------------------------------
-- Table `car_store`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_store`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `year` INT NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  `available` TINYINT(1) NULL DEFAULT NULL,
  `horsepower` INT NULL DEFAULT NULL,
  `drivetrain` VARCHAR(50) NULL DEFAULT NULL,
  `transmission` VARCHAR(255) NULL DEFAULT NULL,
  `torque` INT NULL DEFAULT NULL,
  `engine` VARCHAR(255) NULL DEFAULT NULL,
  `acceleration_0_100` DECIMAL(5,2) NULL DEFAULT NULL,
  `top_speed` DOUBLE NULL DEFAULT NULL,
  `brakes` VARCHAR(255) NULL DEFAULT NULL,
  `car_type` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(2048) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
