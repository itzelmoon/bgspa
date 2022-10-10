-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Diag_E-R_bgspa
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Diag_E-R_bgspa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Diag_E-R_bgspa` DEFAULT CHARACTER SET utf8 ;
USE `Diag_E-R_bgspa` ;

-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`productos` (
  `idprodcutos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `sku` VARCHAR(10) NOT NULL,
  `descripcion` VARCHAR(600) NULL,
  `precio` FLOAT NOT NULL,
  `img` VARCHAR(150) NULL,
  `categorias_idcategorias` INT NOT NULL,
  PRIMARY KEY (`idprodcutos`, `categorias_idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`direccion` (
  `iddireccion` INT NOT NULL AUTO_INCREMENT,
  `colonia` VARCHAR(20) NOT NULL,
  `calle` VARCHAR(20) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `codigo_postal` VARCHAR(5) NOT NULL,
  `estado` VARCHAR(25) NOT NULL,
  `ciudad` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`iddireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL,
  `apellido` VARCHAR(40) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `contrasena` VARCHAR(20) NOT NULL,
  `direccion_iddireccion` INT NOT NULL,
  PRIMARY KEY (`idusuarios`, `direccion_iddireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`pedidos` (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `costototal` FLOAT NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  `usuarios_direccion_iddireccion` INT NOT NULL,
  PRIMARY KEY (`idpedidos`, `usuarios_idusuarios`, `usuarios_direccion_iddireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Diag_E-R_bgspa`.`productos_has_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Diag_E-R_bgspa`.`productos_has_pedidos` (
  `productos_idprodcutos` INT NOT NULL,
  `productos_categorias_idcategorias` INT NOT NULL,
  `pedidos_idpedidos` INT NOT NULL,
  `pedidos_usuarios_idusuarios` INT NOT NULL,
  `pedidos_usuarios_direccion_iddireccion` INT NOT NULL,
  PRIMARY KEY (`productos_idprodcutos`, `productos_categorias_idcategorias`, `pedidos_idpedidos`, `pedidos_usuarios_idusuarios`, `pedidos_usuarios_direccion_iddireccion`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
