-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 06, 2024 at 04:28 PM
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
  `price` decimal(6,2) DEFAULT NULL,
  `path` char(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id_m`, `name_m`, `description_m`, `price`, `path`) VALUES
(1, 'Paracetamol', 'Pain reliever and fever reducer', 5.99, NULL),
(2, 'Ibuprofen', 'Anti-inflammatory and pain reliever', 7.49, 'im1.jpg'),
(3, 'Aspirin', 'Pain reliever and blood thinner', 4.99, NULL),
(4, 'Amoxicillin', 'Antibiotic for bacterial infections', 9.99, NULL),
(5, 'Loratadine', 'Antihistamine for allergies', 6.29, NULL),
(6, 'Omeprazole', 'Proton pump inhibitor for heartburn', 8.99, NULL),
(7, 'Simvastatin', 'Cholesterol-lowering medication', 12.99, NULL),
(8, 'Metformin', 'Antidiabetic medication', 10.49, NULL),
(9, 'Losartan', 'Antihypertensive medication', 11.99, NULL),
(10, 'Levothyroxine', 'Thyroid hormone replacement', 5.79, NULL),
(13, 'Aspirine', 'La rla 3la mskin', 30.00, NULL),
(14, '7admid', 'alkfaknmfkafla', 300.00, 'im1.jpg'),
(15, 'Neurobion Forte Tablet 30\'S', 'Product Details\nBrand\nExpires on or After\n27/02/2025', 200.00, 'neurobion-forte-tablet-30s-1-1669655036.webp'),
(16, 'subradine', 'nothing for now', 100.00, 'supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.webp'),
(17, 'shelcal', 'do nothing', 270.00, 'shelcal-500mg-strip-of-15-tablets-2-1679999355.webp'),
(18, 'Ditol', 'afjkabfjkajbi', 300.00, 'detol.jpeg');

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
  `name_p` varchar(50) NOT NULL,
  `address_u` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `phone_p` varchar(20) NOT NULL,
  `id_p` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`name_p`, `address_u`, `latitude`, `longitude`, `phone_p`, `id_p`) VALUES
('mopakapa', 'afamflafam', '33.70575664153154', '-7.3631676154772325', '0687554433', 1),
('lma', 'raja lwad sal7', '33.706559914887414', '-7.3608716445604845', '07889944', 3),
('amf af', 'alfnalfnafaklf', '33.70636355987193', '-7.360893102232604', '184289841', 4),
('Pharmacy 20', '109 Street 20, City', '76.5432', '43.2109', '+3334445555', 1122334),
('Pharmacy 10', '109 Street 10, City', '98.7654', '65.4321', '+3332221111', 12345678),
('Pharmacy 11', '210 Street 11, City', '76.5432', '54.3210', '+4445556666', 112233445),
('Pharmacy 1', '123 Street 1, City', '12.3456', '78.9012', '+1234567890', 123456789),
('Pharmacy 12', '321 Street 12, City', '54.3210', '32.1098', '+7778889999', 223344556),
('Pharmacy 2', '456 Street 2, City', '34.5678', '90.1234', '+9876543210', 234567890),
('Pharmacy 13', '432 Street 13, City', '32.1098', '10.9876', '+9990001111', 334455667),
('Pharmacy 3', '789 Street 3, City', '56.7890', '12.3456', '+1112223333', 345678901),
('Pharmacy 14', '543 Street 14, City', '10.9876', '98.7654', '+1112223333', 445566778),
('Pharmacy 4', '321 Street 4, City', '78.9012', '23.4567', '+9998887777', 456789012),
('Pharmacy 15', '654 Street 15, City', '21.0987', '76.5432', '+3334445555', 556677889),
('Pharmacy 5', '654 Street 5, City', '90.1234', '45.6789', '+7776665555', 567890123),
('Pharmacy 16', '765 Street 16, City', '43.2109', '54.3210', '+5556667777', 667788990),
('Pharmacy 6', '987 Street 6, City', '11.2345', '67.8901', '+4443332222', 678901234),
('Pharmacy 17', '876 Street 17, City', '65.4321', '32.1098', '+7778889999', 778899001),
('Pharmacy 7', '210 Street 7, City', '43.8765', '89.0123', '+2221110000', 789012345),
('Pharmacy 18', '987 Street 18, City', '87.6543', '10.9876', '+9990001111', 889900112),
('Pharmacy 8', '543 Street 8, City', '65.4321', '21.0987', '+5554443333', 890123456),
('Pharmacy 9', '876 Street 9, City', '87.6543', '43.2109', '+6665554444', 901234567),
('Pharmacy 19', '098 Street 19, City', '98.7654', '21.0987', '+1112223333', 990011223),
('Sky', 'ranodm adreess tell i find one', '33.45152100204127', '-7.511241185561428', '0766443322', 990011224),
('Med', 'random adress mediouna', '33.455537732332274', '-7.515450702875192', '077244222', 990011226),
('Med2', 'my adress', '33.45486918092712', '-7.515412958420731', '0244223399', 990011227);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_garde`
--

CREATE TABLE `pharmacy_garde` (
  `id_p` int(11) NOT NULL,
  `id_period` int(11) NOT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacy_garde`
--

INSERT INTO `pharmacy_garde` (`id_p`, `id_period`, `startTime`, `endTime`) VALUES
(1122334, 36, '2024-01-16 08:00:00', '2024-01-17 21:00:00'),
(12345678, 38, '2024-01-10 08:00:00', '2024-01-13 21:00:00'),
(990011224, 39, '2024-01-07 08:00:00', '2024-01-09 21:00:00'),
(990011226, 41, '2024-01-07 08:00:00', '2024-01-08 21:00:00'),
(990011227, 42, '2024-01-07 08:00:00', '2024-01-08 21:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_medicine`
--

CREATE TABLE `pharmacy_medicine` (
  `id_p` int(11) NOT NULL,
  `id_m` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacy_medicine`
--

INSERT INTO `pharmacy_medicine` (`id_p`, `id_m`, `stock`) VALUES
(1, 2, 20),
(3, 15, 100),
(3, 16, 54),
(4, 17, 24),
(990011224, 18, 45);

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
(2, 'John', 'Doe', 'john.doe@example.com', '$2b$10$Fz28MYkVgIKsHzbm.pTvhu6YnC3BfdPvJSXjpQhqwvEP2iu5QxP9m', '1234567890', '1'),
(3, 'Mohammed', 'Lachhab', 'momo@momo.com', '$2b$10$/2.95ABrxtVrU3Cy/ZZQwepFjgGimM7rMucRuUb./uCRJvW3743sy', '0788995544', '0'),
(4, 'Ahmed', 'Ahmed', 'sopa@sopa.com', '$2b$10$UWjM/ek5GTLDUWooZ/bJxemBqZbehj9bryF5sXURvlx2ijb32a/kK', '0788995544', '1'),
(6, 'Ahmed', 'Ahmed', 'ali@ali.com', '$2b$10$DymTGKiEd8nsnMcxYlTQQujd/dfB0IR7noRygS3wEpnxY0u5EBtzC', '0788995544', '2'),
(7, 'Ahmed', 'Ahmed', 'ali1@ali.com', '$2b$10$Io19k4ab82CEqljkdjHX5OMuLr7mUqPUBvl0tV7VwIG7W3tKS8UA.', '0788995544', '2'),
(24, 'Ahmed', 'Ahmed', 'ali22@ali.com', '$2b$10$J6t9mNFGgvLrVWkIB7lTPe9w/ckAO3PLzp08ihFd/.vkh8Wo00Jl2', '0788995544', '2'),
(25, 'Ahmed', 'Ahmed', 'ali44@ali.com', '$2b$10$oxi9ahskfpCf98SRmmHYVee7HD3/sPtZXXBBTLPCnhKyqyPQN7WZm', '0788995544', '2');

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
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id_m`);

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
  ADD PRIMARY KEY (`id_period`),
  ADD KEY `fk_phar` (`id_p`);

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
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=990011228;

--
-- AUTO_INCREMENT for table `pharmacy_garde`
--
ALTER TABLE `pharmacy_garde`
  MODIFY `id_period` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
  ADD CONSTRAINT `fk_pg_p` FOREIGN KEY (`id_p`) REFERENCES `pharmacy` (`id_p`),
  ADD CONSTRAINT `fk_phar` FOREIGN KEY (`id_p`) REFERENCES `pharmacy` (`id_p`);

--
-- Constraints for table `pharmacy_medicine`
--
ALTER TABLE `pharmacy_medicine`
  ADD CONSTRAINT `fk_pm_p` FOREIGN KEY (`id_p`) REFERENCES `pharmacy` (`id_p`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
