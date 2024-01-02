-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2024 at 08:42 PM
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
('mopakapa', 'afamflafam', '33.70686111895195', '-7.361129136625914', '0687554433', 1),
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
('Pharmacy 19', '098 Street 19, City', '98.7654', '21.0987', '+1112223333', 990011223);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`id_p`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=990011224;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
