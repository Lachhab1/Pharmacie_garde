-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 06, 2024 at 04:04 PM
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
(17, 'shelcal', 'do nothing', 270.00, 'shelcal-500mg-strip-of-15-tablets-2-1679999355.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id_m`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
