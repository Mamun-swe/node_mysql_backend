-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 26, 2020 at 06:52 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL,
  `token` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `phone`, `role`, `password`, `token`) VALUES
(15, 'Admin', 'admin@gmail.com', '01721988188', 'admin', '$2a$10$HjW.vXNs5KN0WFh1OKaAXu4cscxXt/5IJsxNFWWn3FSLL0h6/kHY6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImZ1bGxuYW1lIjoiQWRtaW4iLCJpYXQiOjE2MDM3MzQ1MDcsImV4cCI6MTYwMzgyMDkwN30.M7_vnOE5HugVaGlv7tuHw2tEl_5vubXWMYDg08ULxOY'),
(16, 'Radoan', 'radoan@gmail.com', '01533592610', 'user', '$2a$10$/w9nOhl8ggnk6g/OZkWSau.Y4n2zxo5Hzq3Pk1joklQ0ljQSJfJaK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZG9hbkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoiUmFkb2FuIiwiaWF0IjoxNjAzNzM0MjEyLCJleHAiOjE2MDM4MjA2MTJ9.Bbmw_TUcx4og_aYk7DxXxPLFDFSnuk4a2I9DtXSdFhM'),
(17, 'Abdullah Al Mamun', 'mamun.swe.277@gmail.com', '01721988188', 'user', '$2a$10$qkQusvvrQpu8HFe27kXejuWKX0gAuYLcje64pkFzFEAzv5.i5XGsa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbXVuLnN3ZS4yNzdAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJmdWxsbmFtZSI6IkFiZHVsbGFoIEFsIE1hbXVuIiwiaWF0IjoxNjAzNzM0NTM5LCJleHAiOjE2MDM4MjA5Mzl9.KyS9nvy1vSIUytiOEAH5b8l04557mLkHszuhrTtwXVs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
