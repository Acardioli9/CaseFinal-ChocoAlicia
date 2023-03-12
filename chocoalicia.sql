-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Mar-2023 às 19:09
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `chocoalicia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `linhascomerciais`
--

CREATE TABLE `linhascomerciais` (
  `idlinha` int(11) NOT NULL,
  `nomelinha` varchar(255) DEFAULT NULL,
  `descricaolinha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `linhascomerciais`
--

INSERT INTO `linhascomerciais` (`idlinha`, `nomelinha`, `descricaolinha`) VALUES
(1, 'Bate Coração', 'Corações lapidados para você demonstrar todo seu amor pela pessoa querida. Apresentado em uma embalagem que vai fazer seu coração palpitar de felicidade.'),
(2, 'Você é Especial', 'Suas datas comemorativas terão um toque especial e singular. Além do sabor que já é nossa marca, personalizamos seu presente para deixar sua cara.'),
(3, 'Páscoa', 'Porque o que é bom deve ser saboreado o ano inteiro. Nossos ovos de colher te faz salivar do momento que você o vê até o último pedacinho de chocolate.'),
(4, 'Florescer', 'Se uma caixa de bombons já arranca suspiros... Imagina uma caixa repleta de trufas no formato da sua flor preferida. Sensacional, não?');

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(12) NOT NULL,
  `senha` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`id`, `username`, `senha`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idprod` int(11) NOT NULL,
  `linha` varchar(255) NOT NULL,
  `produto` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `tamanho` varchar(255) NOT NULL,
  `sabor` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idprod`, `linha`, `produto`, `descricao`, `tamanho`, `sabor`, `valor`) VALUES
(2, '1', 'Gotas rosa', 'Coração decorado com traços e gotas que fazem esse chocolate virar uma obra de arte.', '250g', 'Casca e recheio à sua escolha.', '29,99'),
(3, '1', 'Pérolas Encantadas', 'A decoração em pérolas traz sofisticação e elegância para esse presente que é uma jóia.', '250g', 'Casca e recheio à sua escolha.', '29,99'),
(4, '2', 'Caneca trufada', 'Uma caneca personalizada recheada de bombons de licor, para deixar seu café ainda melhor.', '200g', 'Casca e recheio à sua escolha.', '49,99'),
(7, '3', 'Ovo Pleno', NULL, '300g', 'Brownie com Nutella', '49,99'),
(8, '2', 'Barra de amor', 'Pra você me ajudar a segurar essa barra que é gostar de você', '350g', 'Ao leite com beijinho', '34,99'),
(9, '3', 'Ovo Master', NULL, '500g', 'Ninho com brownie', '69,99'),
(10, '4', 'Doce Bouquet', 'Trufas em vários formatos de flores que encantam com seu perfume e sabor.', '240g', 'Diversos', '26,99');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `linhascomerciais`
--
ALTER TABLE `linhascomerciais`
  ADD PRIMARY KEY (`idlinha`);

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idprod`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `linhascomerciais`
--
ALTER TABLE `linhascomerciais`
  MODIFY `idlinha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idprod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
