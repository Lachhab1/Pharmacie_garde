-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2023 at 06:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_pharmacie`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id_a` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id_cl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commandes`
--

CREATE TABLE `commandes` (
  `id_c` int(11) NOT NULL,
  `id_cl` int(11) NOT NULL,
  `id_m` int(11) NOT NULL,
  `id_d` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `deliverers`
--

CREATE TABLE `deliverers` (
  `id_d` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id_m` int(11) NOT NULL,
  `name_m` varchar(50) NOT NULL,
  `description_m` text NOT NULL,
  `price` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id_m`, `name_m`, `description_m`, `price`) VALUES
(0, 'Updated Paracetamol', 'Updated pain reliever and fever reducer', 6.99),
(1, 'Paracetamol', 'Pain reliever and fever reducer', 5.99),
(2, 'Ibuprofen', 'Anti-inflammatory and pain reliever', 7.49),
(3, 'Aspirin', 'Pain reliever and blood thinner', 4.99),
(4, 'Amoxicillin', 'Antibiotic for bacterial infections', 9.99),
(5, 'Loratadine', 'Antihistamine for allergies', 6.29),
(6, 'Omeprazole', 'Proton pump inhibitor for heartburn', 8.99),
(7, 'Simvastatin', 'Cholesterol-lowering medication', 12.99),
(8, 'Metformin', 'Antidiabetic medication', 10.49),
(9, 'Losartan', 'Antihypertensive medication', 11.99),
(10, 'Levothyroxine', 'Thyroid hormone replacement', 5.79);

-- --------------------------------------------------------

--
-- Table structure for table `periode_garde`
--

CREATE TABLE `periode_garde` (
  `id_period` int(11) NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `periode_garde`
--

INSERT INTO `periode_garde` (`id_period`, `start`, `end`) VALUES
(0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacists`
--

CREATE TABLE `pharmacists` (
  `id_pr` int(11) NOT NULL,
  `pharmacy` int(11) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `id_p` int(11) NOT NULL,
  `name_p` varchar(50) NOT NULL,
  `address_u` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `phone_p` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`id_p`, `name_p`, `address_u`, `latitude`, `longitude`, `phone_p`) VALUES
(1, 'Pharmacy A', '123 Main St', '40.7128', '-74.0060', '1234567890'),
(2, 'Pharmacy B', '456 Oak St', '34.0522', '-118.2437', '9876543210'),
(3, 'Pharmacy C', '789 Pine St', '41.8781', '-87.6298', '5678901234');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_garde`
--

CREATE TABLE `pharmacy_garde` (
  `id_p` int(11) NOT NULL,
  `id_period` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_medicine`
--

CREATE TABLE `pharmacy_medicine` (
  `id_p` int(11) NOT NULL,
  `id_m` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('0','1','2') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `role`) VALUES
(1, 'fff', 'fff', 'fff', 'fff', 'ffff', '0'),
(2, 'John', 'Doe', 'john.doe@example.com', '$2b$10$Fz28MYkVgIKsHzbm.pTvhu6YnC3BfdPvJSXjpQhqwvEP2iu5QxP9m', '1234567890', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_a`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_cl`);

--
-- Indexes for table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id_c`),
  ADD KEY `fk_c_cl` (`id_cl`),
  ADD KEY `fk_c_m` (`id_m`),
  ADD KEY `fk_c_d` (`id_d`);

--
-- Indexes for table `deliverers`
--
ALTER TABLE `deliverers`
  ADD PRIMARY KEY (`id_d`);

--
-- Indexes for table `periode_garde`
--
ALTER TABLE `periode_garde`
  ADD PRIMARY KEY (`id_period`);

--
-- Indexes for table `pharmacists`
--
ALTER TABLE `pharmacists`
  ADD PRIMARY KEY (`id_pr`),
  ADD KEY `pharmacy` (`pharmacy`),
  ADD KEY `pharmacists_ibfk_2` (`user`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`id_p`);

--
-- Indexes for table `pharmacy_garde`
--
ALTER TABLE `pharmacy_garde`
  ADD PRIMARY KEY (`id_p`,`id_period`),
  ADD KEY `fk_pg_g` (`id_period`);

--
-- Indexes for table `pharmacy_medicine`
--
ALTER TABLE `pharmacy_medicine`
  ADD PRIMARY KEY (`id_p`,`id_m`),
  ADD KEY `fk_pm_m` (`id_m`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `fk_c_cl` FOREIGN KEY (`id_cl`) REFERENCES `clients` (`id_cl`),
  ADD CONSTRAINT `fk_c_d` FOREIGN KEY (`id_d`) REFERENCES `deliverers` (`id_d`);

--
-- Constraints for table `pharmacists`
--
ALTER TABLE `pharmacists`
  ADD CONSTRAINT `pharmacists_ibfk_1` FOREIGN KEY (`pharmacy`) REFERENCES `pharmacy` (`id_p`),
  ADD CONSTRAINT `pharmacists_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`);

--
-- Constraints for table `pharmacy_garde`
--
ALTER TABLE `pharmacy_garde`
  ADD CONSTRAINT `fk_pg_g` FOREIGN KEY (`id_period`) REFERENCES `periode_garde` (`id_period`),
  ADD CONSTRAINT `fk_pg_p` FOREIGN KEY (`id_p`) REFERENCES `pharmacy` (`id_p`);

--
-- Constraints for table `pharmacy_medicine`
--
ALTER TABLE `pharmacy_medicine`
  ADD CONSTRAINT `fk_pm_p` FOREIGN KEY (`id_p`) REFERENCES `pharmacy` (`id_p`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
