-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 08:08 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kickoff`
--

-- --------------------------------------------------------

--
-- Table structure for table `fifa_teams`
--

CREATE TABLE `fifa_teams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `league` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ova` int(11) DEFAULT NULL,
  `att` int(11) DEFAULT NULL,
  `mid` int(11) DEFAULT NULL,
  `def` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fifa_teams`
--

INSERT INTO `fifa_teams` (`id`, `name`, `league`, `logo`, `ova`, `att`, `mid`, `def`) VALUES
(1, 'Manchester City', 'English Premier League', 'manchester-city-300x300.png', 85, 87, 86, 83),
(2, 'Real Madrid CF', 'Spain Primera Division', 'real-madrid-300x300.png', 85, 85, 85, 83),
(3, 'FC Bayern München', 'German 1 Bundesliga', 'fc-bayern-munchen-300x300.png', 84, 90, 84, 83),
(4, 'FC Barcelona', 'Spain Primera Division', 'fc-barcelona-300x300.png', 84, 84, 84, 83),
(5, 'Liverpool', 'English Premier League', 'liverpool-300x300.png', 83, 84, 82, 84),
(6, 'Paris Saint-Germain', 'French Ligue 1', 'paris-saint-germain-300x300.png', 83, 86, 79, 83),
(7, 'Atlético de Madrid', 'Spain Primera Division', 'atletico-madrid-300x300.png', 83, 85, 82, 81),
(8, 'Inter', 'Italian Serie A', 'inter-300x300.png', 82, 81, 82, 82),
(9, 'Arsenal', 'English Premier League', 'arsenal-300x300.png', 82, 82, 84, 81),
(10, 'Manchester United', 'English Premier League', 'manchester-united-300x300.png', 82, 82, 83, 80),
(11, 'Newcastle United', 'English Premier League', 'newcastle-united-300x300.png', 81, 79, 81, 82),
(12, 'Tottenham Hotspur', 'English Premier League', 'tottenham-hotspur-300x300.png', 81, 81, 80, 79),
(13, 'Borussia Dortmund', 'German 1 Bundesliga', 'borussia-dortmund-300x300.png', 81, 81, 81, 81),
(14, 'Napoli', 'Italian Serie A', 'napoli-300x300.png', 81, 82, 82, 80),
(15, 'Aston Villa', 'English Premier League', 'aston-villa-300x300.png', 80, 82, 79, 79),
(16, 'Chelsea', 'English Premier League', 'chelsea-300x300.png', 80, 77, 81, 78),
(17, 'Bayer 04 Leverkusen', 'German 1 Bundesliga', 'bayer-04-leverkusen-300x300.png', 80, 81, 81, 79),
(18, 'RB Leipzig', 'German 1 Bundesliga', 'rb-leipzig-300x300.png', 80, 82, 79, 79),
(19, 'Juventus', 'Italian Serie A', 'juventus-300x300.png', 80, 81, 80, 79),
(20, 'Lazio', 'Italian Serie A', 'lazio-300x300.png', 80, 81, 79, 80),
(21, 'AC Milan', 'Italian Serie A', 'milan-300x300.png', 80, 81, 79, 81),
(22, 'Roma', 'Italian Serie A', 'roma-300x300.png', 80, 82, 78, 81),
(23, 'Sevilla FC', 'Spain Primera Division', 'sevilla-300x300.png', 80, 80, 79, 82),
(24, 'Athletic Club de Bilbao', 'Spain Primera Division', 'athletic-club-300x300.png', 79, 77, 79, 77),
(25, 'Real Betis Balompié', 'Spain Primera Division', 'real-betis-300x300.png', 79, 83, 79, 77),
(26, 'Real Sociedad', 'Spain Primera Division', 'real-sociedad-300x300.png', 79, 79, 81, 79),
(27, 'Villarreal CF', 'Spain Primera Division', 'villarreal-300x300.png', 79, 79, 80, 77),
(28, 'SL Benfica', 'Portuguese Primeira Liga', 'benfica-300x300.png', 79, 80, 81, 77),
(29, 'West Ham United', 'English Premier League', 'west-ham-united-300x300.png', 78, 78, 79, 78),
(30, 'Fiorentina', 'Italian Serie A', 'fiorentina-300x300.png', 78, 78, 77, 78),
(31, 'Atalanta', 'Italian Serie A', 'atalanta-300x300.png', 78, 79, 77, 77),
(32, 'Galatasaray SK', 'Turkish Süper Lig', 'galatasaray-300x300.png', 78, 80, 79, 78),
(33, 'Olympique de Marseille', 'French Ligue 1', 'olympique-de-marseille-300x300.png', 78, 77, 78, 78),
(34, 'FC Porto', 'Portuguese Primeira Liga', 'porto-300x300.png', 78, 78, 78, 77),
(35, 'AFC Richmond', 'English Premier League', 'afc-richmond-300x300.png', 78, 81, 79, 77),
(36, 'Everton', 'English Premier League', 'everton-300x300.png', 77, 79, 77, 75),
(37, 'Nottingham Forest', 'English Premier League', 'nottingham-forest-300x300.png', 77, 75, 77, 75),
(38, 'Brighton & Hove Albion', 'English Premier League', 'brighton-and-hove-albion-300x300.png', 77, 77, 77, 78),
(39, '1 FC Union Berlin', 'German 1 Bundesliga', 'fc-union-berlin-300x300.png', 77, 77, 75, 77),
(40, 'Racing Club de Lens', 'French Ligue 1', 'lens-300x300.png', 77, 77, 76, 77),
(41, 'AS Monaco', 'French Ligue 1', 'monaco-300x300.png', 77, 81, 77, 75),
(42, 'Fenerbahçe SK', 'Turkish Süper Lig', 'fenerbahce-300x300.png', 77, 78, 76, 74),
(43, 'Al Hilal', 'Saudi Professional League', 'al-hilal-300x300.png', 77, 79, 79, 74),
(44, 'Al Ittihad', 'Saudi Professional League', 'al-ittihad-300x300.png', 77, 83, 79, 70),
(45, 'Fulham', 'English Premier League', 'fulham-300x300.png', 77, 76, 77, 76),
(46, 'VfL Wolfsburg', 'German 1 Bundesliga', 'vfl-wolfsburg-300x300.png', 77, 76, 78, 75),
(47, 'CA Osasuna', 'Spain Primera Division', 'osasuna-300x300.png', 77, 77, 77, 77),
(48, 'Sporting CP', 'Portuguese Primeira Liga', 'sporting-cp-300x300.png', 77, 78, 77, 78),
(49, 'Crystal Palace', 'English Premier League', 'crystal-palace-300x300.png', 76, 75, 76, 76),
(50, 'Al Nassr', 'Saudi Professional League', 'al-nassr-300x300.png', 76, 86, 77, 74),
(51, 'Flamengo', 'Campeonato Brasileiro Série A', 'flamengo-300x300.png', 76, 77, 76, 75),
(52, 'Borussia Mönchengladbach', 'German 1 Bundesliga', 'borussia-monchengladbach-300x300.png', 76, 75, 76, 75),
(53, 'Sport-Club Freiburg', 'German 1 Bundesliga', 'sc-freiburg-300x300.png', 76, 76, 76, 77),
(54, 'Eintracht Frankfurt', 'German 1 Bundesliga', 'eintracht-frankfurt-300x300.png', 76, 76, 76, 75),
(55, 'TSG Hoffenheim', 'German 1 Bundesliga', 'tsg-hoffenheim-300x300.png', 76, 77, 76, 75),
(56, 'LOSC Lille', 'French Ligue 1', 'lille-300x300.png', 76, 77, 75, 75),
(57, 'Olympique Lyonnais', 'French Ligue 1', 'olympique-lyonnais-300x300.png', 76, 77, 75, 76),
(58, 'Getafe CF', 'Spain Primera Division', 'getafe-300x300.png', 76, 82, 76, 75),
(59, 'OGC Nice', 'French Ligue 1', 'nice-300x300.png', 76, 77, 76, 75),
(60, 'Stade Rennais FC', 'French Ligue 1', 'rennes-300x300.png', 76, 77, 78, 74),
(61, 'River Plate', 'Argentina Primera División', 'river-plate-300x300.png', 76, 75, 77, 75),
(62, 'SC Braga', 'Portuguese Primeira Liga', 'sporting-braga-300x300.png', 76, 77, 77, 75),
(63, 'Wolverhampton Wanderers', 'English Premier League', 'wolverhampton-wanderers-300x300.png', 76, 75, 77, 76),
(64, 'Palmeiras', 'Campeonato Brasileiro Série A', 'palmeiras-300x300.png', 76, 78, 77, 74),
(65, 'Brentford', 'English Premier League', 'brentford-300x300.png', 76, 75, 76, 76),
(66, 'RC Celta de Vigo', 'Spain Primera Division', 'celta-de-vigo-300x300.png', 76, 79, 76, 75),
(67, 'RCD Mallorca', 'Spain Primera Division', 'mallorca-300x300.png', 76, 77, 77, 74),
(68, 'Rayo Vallecano', 'Spain Primera Division', 'rayo-vallecano-300x300.png', 76, 76, 77, 77),
(69, 'Girona FC', 'Spain Primera Division', 'girona-300x300.png', 76, 77, 76, 76),
(70, 'Feyenoord', 'Holland Eredivisie', 'feyenoord-300x300.png', 76, 76, 74, 77),
(71, 'PSV', 'Holland Eredivisie', 'psv-300x300.png', 76, 78, 74, 75),
(72, 'Clube Atlético Mineiro', 'Campeonato Brasileiro Série A', 'atletico-mineiro-300x300.png', 75, 77, 75, 76),
(73, 'AEK Athens', 'Greek Super League', 'aek-athens-300x300.png', 75, 76, 75, 74),
(74, 'Torino FC', 'Italian Serie A', 'torino-300x300.png', 75, 76, 74, 76),
(75, 'Unión Deportiva Almería', 'Spain Primera Division', 'almeria-300x300.png', 75, 75, 74, 74),
(76, 'Beşiktaş JK', 'Turkish Süper Lig', 'besiktas-300x300.png', 75, 75, 76, 75),
(77, 'Boca Juniors', 'Argentina Primera División', 'boca-juniors-300x300.png', 75, 76, 73, 75),
(78, 'Leicester City', 'English Premier League', 'leicester-city-300x300.png', 75, 73, 76, 75),
(79, 'US Sassuolo Calcio', 'Italian Serie A', 'sassuolo-300x300.png', 75, 78, 73, 72),
(80, 'AFC Bournemouth', 'English Premier League', 'afc-bournemouth-300x300.png', 75, 75, 75, 74),
(81, '1 FSV Mainz 05', 'German 1 Bundesliga', 'fsv-mainz-05-300x300.png', 75, 77, 75, 74),
(82, 'Cádiz CF', 'Spain Primera Division', 'cadiz-300x300.png', 75, 74, 75, 73),
(83, 'AC Monza', 'Italian Serie A', 'monza-300x300.png', 75, 75, 75, 74),
(84, 'Valencia CF', 'Spain Primera Division', 'valencia-300x300.png', 75, 74, 74, 76),
(85, 'Ajax', 'Holland Eredivisie', 'ajax-300x300.png', 75, 77, 74, 73),
(86, 'Unión Deportiva Las Palmas', 'Spanish Segunda División', 'las-palmas-300x300.png', 74, 75, 75, 72),
(87, 'RSC Anderlecht', 'Belgian Pro League', 'anderlecht-300x300.png', 74, 72, 75, 71),
(88, 'Club Brugge KV', 'Belgian Pro League', 'club-brugge-300x300.png', 74, 72, 74, 72),
(89, 'Burnley', 'English League Championship', 'burnley-300x300.png', 74, 69, 74, 73),
(90, 'Club Athletico Paranaense', 'Campeonato Brasileiro Série A', 'athletico-paranaense-300x300.png', 74, 74, 72, 76),
(91, 'Internacional', 'Campeonato Brasileiro Série A', 'internacional-300x300.png', 74, 71, 74, 75),
(92, '1 FC Köln', 'German 1 Bundesliga', 'fc-koln-300x300.png', 74, 73, 74, 73),
(93, 'SV Werder Bremen', 'German 1 Bundesliga', 'werder-bremen-300x300.png', 74, 75, 74, 74),
(94, 'Udinese Calcio', 'Italian Serie A', 'udinese-300x300.png', 74, 74, 73, 74),
(95, 'FC Augsburg', 'German 1 Bundesliga', 'fc-augsburg-300x300.png', 74, 72, 74, 74),
(96, 'Celtic', 'Scottish Premiership', 'celtic-300x300.png', 74, 74, 75, 71),
(97, 'RB Bragantino', 'Campeonato Brasileiro Série A', 'bragantino-300x300.png', 74, 74, 73, 75),
(98, 'Panathinaikos FC', 'Greek Super League', 'panathinaikos-300x300.png', 74, 74, 75, 72),
(99, 'Trabzonspor', 'Turkish Süper Lig', 'trabzonspor-300x300.png', 74, 73, 75, 71),
(100, 'Bologna', 'Italian Serie A', 'bologna-300x300.png', 74, 73, 76, 73),
(101, 'RCD Espanyol de Barcelona', 'Spain Primera Division', 'espanyol-300x300.png', 74, 76, 74, 74),
(102, 'Hellas Verona', 'Italian Serie A', 'hellas-verona-300x300.png', 74, 71, 74, 74),
(103, 'Sheffield United', 'English League Championship', 'sheffield-united-300x300.png', 73, 72, 74, 72),
(104, 'Leeds United', 'English Premier League', 'leeds-united-300x300.png', 73, 72, 72, 72),
(105, 'SK Slavia Praha', 'Czech First League', 'slavia-praha-300x300.png', 73, 71, 74, 74),
(106, 'AC Sparta Praha', 'Czech First League', 'sparta-praha-300x300.png', 73, 73, 73, 74),
(107, 'Southampton', 'English Premier League', 'southampton-300x300.png', 73, 71, 70, 74),
(108, 'Sport Club Corinthians Paulista', 'Campeonato Brasileiro Série A', 'corinthians-300x300.png', 73, 74, 73, 74),
(109, 'Santos', 'Campeonato Brasileiro Série A', 'santos-300x300.png', 73, 74, 73, 72),
(110, 'VfB Stuttgart', 'German 1 Bundesliga', 'vfb-stuttgart-300x300.png', 73, 76, 73, 73),
(111, 'US Salernitana 1919', 'Italian Serie A', 'salernitana-300x300.png', 73, 74, 73, 71),
(112, 'Montpellier Hérault SC', 'French Ligue 1', 'montpellier-300x300.png', 73, 68, 75, 73),
(113, 'FC Nantes', 'French Ligue 1', 'nantes-300x300.png', 73, 73, 73, 73),
(114, 'Rangers FC', 'Scottish Premiership', 'rangers-300x300.png', 73, 72, 74, 74),
(115, 'São Paulo', 'Campeonato Brasileiro Série A', 'sao-paulo-300x300.png', 73, 72, 73, 73),
(116, 'AZ Alkmaar', 'Holland Eredivisie', 'az-alkmaar-300x300.png', 73, 71, 73, 71),
(117, 'Stade de Reims', 'French Ligue 1', 'stade-de-reims-300x300.png', 73, 69, 75, 72),
(118, 'FC Viktoria Plzeň', 'Czech First League', 'viktoria-plzen-300x300.png', 73, 72, 73, 72),
(119, 'VfL Bochum 1848', 'German 1 Bundesliga', 'vfl-bochum-1848-300x300.png', 73, 74, 73, 73),
(120, 'KRC Genk', 'Belgian Pro League', 'genk-300x300.png', 73, 71, 72, 73),
(121, 'FC Red Bull Salzburg', 'Austrian Football Bundesliga', 'salzburg-300x300.png', 73, 69, 73, 73),
(122, 'Empoli', 'Italian Serie A', 'empoli-300x300.png', 73, 74, 74, 72),
(123, 'FC Lorient', 'French Ligue 1', 'lorient-300x300.png', 73, 73, 73, 73),
(124, 'Genoa', 'Italian Serie B', 'genoa-300x300.png', 73, 76, 73, 71),
(125, 'Racing Club', 'Argentina Primera División', 'racing-club-300x300.png', 73, 74, 73, 73),
(126, 'Royal Antwerp FC', 'Belgian Pro League', 'antwerp-300x300.png', 73, 76, 72, 73),
(127, 'Granada CF', 'Spanish Segunda División', 'granada-300x300.png', 73, 76, 72, 72),
(128, 'Inter Miami CF', 'USA Major League Soccer', 'inter-miami-300x300.png', 73, 77, 71, 72),
(129, 'Norwich City', 'English League Championship', 'norwich-city-300x300.png', 72, 70, 72, 71),
(130, 'Clermont Foot 63', 'French Ligue 1', 'clermont-300x300.png', 72, 71, 72, 71),
(131, 'Club Atlético Talleres', 'Argentina Primera División', 'talleres-cordoba-300x300.png', 72, 71, 72, 71),
(132, 'Cagliari', 'Italian Serie B', 'cagliari-300x300.png', 72, 72, 72, 71),
(133, 'FC København', 'Danish Superliga', 'kobenhavn-300x300.png', 72, 70, 73, 72),
(134, 'Fluminense', 'Campeonato Brasileiro Série A', 'fluminense-300x300.png', 72, 74, 72, 72),
(135, 'RC Strasbourg Alsace', 'French Ligue 1', 'strasbourg-300x300.png', 72, 72, 72, 72),
(136, 'Lecce', 'Italian Serie A', 'lecce-300x300.png', 72, 74, 68, 72),
(137, 'Los Angeles FC', 'USA Major League Soccer', 'los-angeles-fc-300x300.png', 72, 75, 71, 72),
(138, 'Stade Brestois 29', 'French Ligue 1', 'brest-300x300.png', 72, 72, 73, 72),
(139, 'Luton Town', 'English League Championship', 'luton-town-300x300.png', 72, 72, 72, 72),
(140, 'PAOK', 'Greek Super League', 'paok-300x300.png', 72, 72, 73, 70),
(141, 'Adana Demirspor', 'Turkish Süper Lig', 'adana-demirspor-300x300.png', 72, 71, 74, 73),
(142, 'KAA Gent', 'Belgian Pro League', 'gent-300x300.png', 72, 73, 72, 70),
(143, 'Real Valladolid CF', 'Spain Primera Division', 'real-valladolid-300x300.png', 72, 71, 72, 72),
(144, 'Deportivo Alavés', 'Spanish Segunda División', 'deportivo-alaves-300x300.png', 72, 73, 73, 73),
(145, 'Elche CF', 'Spain Primera Division', 'elche-300x300.png', 72, 73, 71, 71),
(146, 'Estudiantes de La Plata', 'Argentina Primera División', 'estudiantes-300x300.png', 72, 73, 72, 72),
(147, 'San Lorenzo de Almagro', 'Argentina Primera División', 'san-lorenzo-300x300.png', 72, 71, 72, 73),
(148, 'Atlético Clube Goianiense', 'Campeonato Brasileiro Série A', 'atletico-clube-goianiense-300x300.png', 72, 71, 71, 73),
(149, 'Ceará Sporting Club', 'Campeonato Brasileiro Série A', 'ceara-sporting-club-300x300.png', 72, 71, 72, 72),
(150, 'Philadelphia Union', 'USA Major League Soccer', 'philadelphia-union-300x300.png', 71, 71, 71, 71),
(151, 'Hajduk Split', 'Croatian First Football League', 'hajduk-split-300x300.png', 71, 77, 70, 70),
(152, 'Middlesbrough', 'English League Championship', 'middlesbrough-300x300.png', 71, 69, 70, 71),
(153, 'Independiente del Valle', 'Ecuadorian Serie A', 'independiente-del-valle-300x300.png', 71, 71, 73, 69),
(154, 'Club Atlético Independiente', 'Argentina Primera División', 'independiente-300x300.png', 71, 71, 72, 71),
(155, 'Toulouse Football Club', 'French Ligue 1', 'toulouse-300x300.png', 71, 75, 71, 72),
(156, 'AS Saint-Étienne', 'French Ligue 2', 'saint-etienne-300x300.png', 71, 70, 70, 71),
(157, 'Hamburger SV', 'German 2 Bundesliga', 'hamburger-sv-300x300.png', 71, 71, 71, 70),
(158, 'FC Schalke 04', 'German 1 Bundesliga', 'schalke-04-300x300.png', 71, 71, 70, 71),
(159, 'Al Shabab', 'Saudi Professional League', 'al-shabab-300x300.png', 71, 74, 70, 70),
(160, 'Club Atlético Lanús', 'Argentina Primera División', 'lanus-300x300.png', 71, 71, 71, 71),
(161, 'Levante Unión Deportiva', 'Spanish Segunda División', 'levante-300x300.png', 71, 70, 70, 71),
(162, 'Club Atlético Colón', 'Argentina Primera División', 'colon-300x300.png', 71, 69, 71, 71),
(163, 'US Cremonese', 'Italian Serie A', 'cremonese-300x300.png', 71, 72, 72, 70),
(164, 'Ferencvárosi TC', 'Hungarian Nemzeti Bajnokság I', 'ferencvaros-300x300.png', 71, 71, 71, 70),
(165, 'Defensa y Justicia', 'Argentina Primera División', 'defensa-y-justicia-300x300.png', 71, 72, 71, 70),
(166, 'Vitória de Guimarães', 'Portuguese Primeira Liga', 'vitoria-sc-300x300.png', 71, 70, 72, 69),
(167, 'West Bromwich Albion', 'English League Championship', 'west-bromwich-albion-300x300.png', 71, 70, 72, 70),
(168, 'FC Twente', 'Holland Eredivisie', 'fc-twente-300x300.png', 71, 70, 70, 73),
(169, '1 FC Heidenheim 1846', 'German 2 Bundesliga', 'heidenheim-300x300.png', 71, 72, 70, 71),
(170, 'BSC Young Boys', 'Swiss Super League', 'young-boys-300x300.png', 71, 74, 69, 69),
(171, 'Barcelona Sporting Club', 'Ecuadorian Serie A', 'barcelona-guayaquil-300x300.png', 71, 73, 71, 70),
(172, 'İstanbul Başakşehir FK', 'Turkish Süper Lig', 'istanbul-basaksehir-300x300.png', 71, 73, 71, 71),
(173, 'Club Libertad', 'Paraguayan Primera División', 'libertad-300x300.png', 71, 71, 68, 70),
(174, 'Hertha BSC', 'German 1 Bundesliga', 'hertha-bsc-300x300.png', 71, 70, 70, 72),
(175, 'SV Darmstadt 98', 'German 2 Bundesliga', 'darmstadt-98-300x300.png', 71, 69, 71, 71),
(176, 'Argentinos Juniors', 'Argentina Primera División', 'argentinos-juniors-300x300.png', 71, 72, 71, 71),
(177, 'Dynamo Kyiv', 'Ukrainian Premier League', 'dynamo-kyiv-300x300.png', 71, 69, 71, 70),
(178, 'Shakhtar Donetsk', 'Ukrainian Premier League', 'shakhtar-donetsk-300x300.png', 71, 74, 71, 70),
(179, 'Fortaleza', 'Campeonato Brasileiro Série A', 'fortaleza-300x300.png', 71, 71, 71, 72),
(180, 'Dinamo Zagreb', 'Croatian First Football League', 'dinamo-zagreb-300x300.png', 71, 70, 72, 71),
(181, 'SD Eibar', 'Spanish Segunda División', 'sd-eibar-300x300.png', 71, 71, 72, 71),
(182, 'FC Midtjylland', 'Danish Superliga', 'midtjylland-300x300.png', 71, 69, 70, 72),
(183, 'Mamelodi Sundowns FC', 'South African Premier Division', 'mamelodi-sundowns-300x300.png', 71, 67, 70, 69),
(184, 'Watford', 'English League Championship', 'watford-300x300.png', 70, 70, 71, 69),
(185, 'CD Tenerife', 'Spanish Segunda División', 'tenerife-300x300.png', 70, 72, 70, 70),
(186, 'Coventry City', 'English League Championship', 'coventry-city-300x300.png', 70, 71, 71, 70),
(187, 'Preston North End', 'English League Championship', 'preston-north-end-300x300.png', 70, 69, 70, 68),
(188, 'Fatih Karagümrük SK', 'Turkish Süper Lig', 'fatih-karagumruk-300x300.png', 70, 71, 69, 70),
(189, 'Stoke City', 'English League Championship', 'stoke-city-300x300.png', 70, 71, 70, 69),
(190, 'Aarhus GF', 'Danish Superliga', 'agf-300x300.png', 70, 71, 68, 69),
(191, 'Minnesota United FC', 'USA Major League Soccer', 'minnesota-united-300x300.png', 70, 75, 70, 67),
(192, 'Portland Timbers', 'USA Major League Soccer', 'portland-timbers-300x300.png', 70, 68, 71, 67),
(193, 'Seattle Sounders FC', 'USA Major League Soccer', 'seattle-sounders-300x300.png', 70, 71, 73, 69),
(194, 'Frosinone', 'Italian Serie B', 'frosinone-300x300.png', 70, 70, 70, 67),
(195, 'Fortuna Düsseldorf', 'German 2 Bundesliga', 'fortuna-dusseldorf-300x300.png', 70, 69, 70, 70),
(196, 'Parma', 'Italian Serie B', 'parma-300x300.png', 70, 68, 69, 65),
(197, 'Palermo', 'Italian Serie B', 'palermo-300x300.png', 70, 72, 70, 70),
(198, 'San Jose Earthquakes', 'USA Major League Soccer', 'san-jose-earthquakes-300x300.png', 70, 72, 71, 68),
(199, 'Malmö FF', 'Swedish Allsvenskan', 'malmo-ff-300x300.png', 70, 71, 70, 70),
(200, 'FC Metz', 'French Ligue 2', 'metz-300x300.png', 70, 69, 68, 71),
(201, 'Heart of Midlothian', 'Scottish Premiership', 'hearts-300x300.png', 70, 71, 67, 69),
(202, 'Atlético Tucumán', 'Argentina Primera División', 'atletico-tucuman-300x300.png', 70, 69, 71, 69),
(203, 'Club Atlético Huracán', 'Argentina Primera División', 'huracan-300x300.png', 70, 70, 71, 69),
(204, 'Millwall', 'English League Championship', 'millwall-300x300.png', 70, 72, 71, 70),
(205, 'Club Atlético Tigre', 'Argentina Primera División', 'tigre-300x300.png', 70, 70, 71, 70),
(206, 'FC Utrecht', 'Holland Eredivisie', 'fc-utrecht-300x300.png', 70, 67, 70, 70),
(207, 'América Futebol Clube', 'Campeonato Brasileiro Série A', 'america-mineiro-300x300.png', 70, 67, 69, 71),
(208, 'FC Arouca', 'Portuguese Primeira Liga', 'arouca-300x300.png', 70, 70, 69, 70),
(209, 'Colo-Colo', 'Chilean Primera División', 'colo-colo-300x300.png', 70, 68, 72, 68),
(210, 'LDU Quito', 'Ecuadorian Serie A', 'ldu-quito-300x300.png', 70, 71, 71, 70),
(211, 'MKE Ankaragücü', 'Turkish Süper Lig', 'ankaragucu-300x300.png', 70, 71, 70, 68),
(212, 'Pisa', 'Italian Serie B', 'pisa-300x300.png', 70, 66, 70, 67),
(213, 'Spezia', 'Italian Serie A', 'spezia-300x300.png', 70, 69, 72, 70),
(214, 'FK Bodø/Glimt', 'Norwegian Eliteserien', 'bodo-glimt-300x300.png', 70, 69, 71, 71),
(215, 'Royal Charleroi SC', 'Belgian Pro League', 'sporting-charleroi-300x300.png', 70, 69, 71, 67),
(216, 'Hull City', 'English League Championship', 'hull-city-300x300.png', 70, 69, 71, 70),
(217, 'Club Alianza Lima', 'Peruvian Primera División', 'alianza-lima-300x300.png', 70, 72, 70, 71),
(218, 'Cardiff City', 'English League Championship', 'cardiff-city-300x300.png', 70, 70, 71, 68),
(219, 'İttifak Holding Konyaspor', 'Turkish Süper Lig', 'konyaspor-300x300.png', 70, 68, 70, 70),
(220, 'Futebol Clube de Famalicão', 'Portuguese Primeira Liga', 'famalicao-300x300.png', 70, 71, 69, 70),
(221, 'New England Revolution', 'USA Major League Soccer', 'new-england-300x300.png', 70, 70, 71, 69),
(222, 'LA Galaxy', 'USA Major League Soccer', 'la-galaxy-300x300.png', 70, 70, 69, 68),
(223, 'Ulsan Hyundai FC', 'Korean K League 1', 'ulsan-300x300.png', 70, 72, 69, 69),
(224, 'Jeonbuk Hyundai Motors', 'Korean K League 1', 'jeonbuk-motors-300x300.png', 70, 69, 70, 70),
(225, 'Le Havre AC', 'French Ligue 2', 'le-havre-300x300.png', 70, 70, 70, 71),
(226, 'Real Sporting de Gijón', 'Spanish Segunda División', 'sporting-gijon-300x300.png', 70, 69, 69, 71),
(227, 'SK Sturm Graz', 'Austrian Football Bundesliga', 'sturm-graz-300x300.png', 70, 69, 71, 70),
(228, '.como', 'Italian Serie B', '.como-300x300.png', 70, 71, 70, 68),
(229, 'Club Nacional de Football', 'Uruguayan Primera División', 'nacional-300x300.png', 70, 70, 70, 69),
(230, 'Royale Union Saint-Gilloise', 'Belgian Pro League', 'union-saint-gilloise-300x300.png', 70, 68, 70, 71),
(231, 'Vélez Sarsfield', 'Argentina Primera División', 'velez-sarsfield-300x300.png', 70, 73, 70, 71),
(232, 'Ettifaq FC', 'Saudi Professional League', 'al-ettifaq-300x300.png', 70, 73, 73, 64),
(233, 'Hannover 96', 'German 2 Bundesliga', 'hannover-96-300x300.png', 70, 67, 70, 70),
(234, 'Standard de Liège', 'Belgian Pro League', 'standard-liege-300x300.png', 70, 69, 68, 68),
(235, 'Rio Ave FC', 'Portuguese Primeira Liga', 'rio-ave-300x300.png', 70, 69, 70, 70),
(236, 'Real Oviedo', 'Spanish Segunda División', 'real-oviedo-300x300.png', 70, 69, 71, 70),
(237, 'Atlético Nacional', 'Colombian Categoría Primera A', 'atletico-nacional-300x300.png', 70, 69, 70, 70),
(238, 'Independiente Medellín', 'Colombian Categoría Primera A', 'independiente-medellin-300x300.png', 70, 71, 70, 68),
(239, 'Real Zaragoza', 'Spanish Segunda División', 'real-zaragoza-300x300.png', 70, 70, 70, 70),
(240, 'Club Olimpia', 'Paraguayan Primera División', 'olimpia-300x300.png', 70, 69, 69, 69),
(241, 'Rosario Central', 'Argentina Primera División', 'rosario-central-300x300.png', 70, 64, 71, 70),
(242, 'Club Atlético Peñarol', 'Uruguayan Primera División', 'penarol-300x300.png', 70, 72, 70, 69),
(243, 'FC Cincinnati', 'USA Major League Soccer', 'cincinnati-300x300.png', 70, 70, 72, 67),
(244, 'América de Cali', 'Colombian Categoría Primera A', 'america-de-cali-300x300.png', 70, 70, 70, 70),
(245, 'Cuiabá', 'Campeonato Brasileiro Série A', 'cuiaba-300x300.png', 70, 69, 70, 71),
(246, 'Blackburn Rovers', 'English League Championship', 'blackburn-rovers-300x300.png', 69, 70, 69, 70),
(247, 'GD Chaves', 'Portuguese Primeira Liga', 'chaves-300x300.png', 69, 68, 69, 70),
(248, 'Al Fateh', 'Saudi Professional League', 'al-fateh-300x300.png', 69, 73, 69, 66),
(249, 'Brøndby IF', 'Danish Superliga', 'brondby-300x300.png', 69, 71, 71, 68),
(250, 'Queens Park Rangers', 'English League Championship', 'queens-park-rangers-300x300.png', 69, 67, 68, 69),
(251, '1 FC Kaiserslautern', 'German 2 Bundesliga', 'kaiserslautern-300x300.png', 69, 70, 68, 69),
(252, 'Estoril Praia', 'Portuguese Primeira Liga', 'estoril-300x300.png', 69, 69, 66, 69),
(253, 'APOEL Nicosia FC', 'Cypriot First Division', 'apoel-300x300.png', 69, 70, 68, 66),
(254, 'Karlsruher SC', 'German 2 Bundesliga', 'karlsruher-sc-300x300.png', 69, 74, 70, 68),
(255, 'UC Sampdoria', 'Italian Serie A', 'sampdoria-300x300.png', 69, 70, 68, 68),
(256, 'SC Paderborn 07', 'German 2 Bundesliga', 'paderborn-300x300.png', 69, 71, 67, 69),
(257, 'Portimonense SC', 'Portuguese Primeira Liga', 'portimonense-300x300.png', 69, 69, 69, 67),
(258, 'Platense', 'Argentina Primera División', 'platense-300x300.png', 69, 68, 69, 69),
(259, 'Bari', 'Italian Serie B', 'bari-1908-300x300.png', 69, 63, 69, 68),
(260, 'FC Girondins de Bordeaux', 'French Ligue 2', 'bordeaux-300x300.png', 69, 70, 68, 70),
(261, 'Newell’s Old Boys', 'Argentina Primera División', 'newells-old-boys-300x300.png', 69, 68, 70, 70),
(262, 'Albacete BP', 'Spanish Segunda División', 'albacete-300x300.png', 69, 69, 69, 69),
(263, 'Club Atlético Banfield', 'Argentina Primera División', 'banfield-300x300.png', 69, 70, 69, 68),
(264, 'Club Atlético Central Córdoba', 'Argentina Primera División', 'central-cordoba-sde-300x300.png', 69, 71, 68, 69),
(265, 'Casa Pia', 'Portuguese Primeira Liga', 'casa-pia-300x300.png', 69, 69, 66, 70),
(266, 'Al Ain FC', 'UAE Pro League', 'al-ain-300x300.png', 69, 78, 70, 68),
(267, 'Birmingham City', 'English League Championship', 'birmingham-city-300x300.png', 69, 69, 69, 69),
(268, 'Godoy Cruz', 'Argentina Primera División', 'godoy-cruz-300x300.png', 69, 69, 69, 70),
(269, 'Ipswich Town', 'English League One', 'ipswich-town-300x300.png', 69, 68, 69, 69),
(270, 'Burgos CF', 'Spanish Segunda División', 'burgos-300x300.png', 69, 69, 70, 69),
(271, 'Lech Poznań', 'Polish Ekstraklasa', 'lech-poznan-300x300.png', 69, 73, 69, 68),
(272, 'Sunderland', 'English League Championship', 'sunderland-300x300.png', 69, 57, 68, 69),
(273, 'Boavista FC', 'Portuguese Primeira Liga', 'boavista-300x300.png', 69, 67, 70, 70),
(274, 'Club Deportes Tolima', 'Colombian Categoría Primera A', 'deportes-tolima-300x300.png', 69, 69, 69, 68),
(275, 'NEC Nijmegen', 'Holland Eredivisie', 'nec-300x300.png', 69, 70, 68, 68),
(276, 'SC Heerenveen', 'Holland Eredivisie', 'sc-heerenveen-300x300.png', 69, 70, 69, 68),
(277, 'Bristol City', 'English League Championship', 'bristol-city-300x300.png', 69, 67, 70, 69),
(278, 'Universidad Católica', 'Chilean Primera División', 'universidad-catolica-300x300.png', 69, 72, 69, 70),
(279, 'FC Basel 1893', 'Swiss Super League', 'basel-300x300.png', 69, 68, 69, 67),
(280, 'CS Emelec', 'Ecuadorian Serie A', 'emelec-300x300.png', 69, 70, 68, 68),
(281, 'Raków Częstochowa', 'Polish Ekstraklasa', 'rakow-czestochowa-300x300.png', 69, 69, 69, 67),
(282, 'Club Sporting Cristal', 'Peruvian Primera División', 'sporting-cristal-300x300.png', 69, 69, 70, 70),
(283, 'Swansea City', 'English League Championship', 'swansea-city-300x300.png', 69, 70, 70, 67),
(284, 'KVC Westerlo', 'Belgian Pro League', 'westerlo-300x300.png', 69, 68, 69, 68),
(285, '1 FC Nürnberg', 'German 2 Bundesliga', 'nurnberg-300x300.png', 69, 65, 67, 67),
(286, 'Demir Grup Sivasspor', 'Turkish Süper Lig', 'sivasspor-300x300.png', 69, 72, 69, 66),
(287, 'FC Dallas', 'USA Major League Soccer', 'dallas-300x300.png', 69, 73, 71, 65),
(288, 'Sporting Kansas City', 'USA Major League Soccer', 'sporting-kc-300x300.png', 69, 72, 70, 66),
(289, 'Gazişehir Gaziantep FK', 'Turkish Süper Lig', 'gaziantep-fk-300x300.png', 69, 68, 70, 68),
(290, 'New York City FC', 'USA Major League Soccer', 'new-york-city-300x300.png', 69, 67, 69, 69),
(291, 'BK Häcken', 'Swedish Allsvenskan', 'hacken-300x300.png', 69, 66, 70, 68),
(292, 'Racing Santander', 'Spanish Segunda División', 'racing-santander-300x300.png', 69, 67, 69, 68),
(293, 'Venezia FC', 'Italian Serie B', 'venezia-300x300.png', 69, 70, 68, 69),
(294, 'Real Salt Lake', 'USA Major League Soccer', 'real-salt-lake-300x300.png', 69, 72, 69, 66),
(295, 'Orlando City Soccer Club', 'USA Major League Soccer', 'orlando-city-300x300.png', 69, 65, 71, 64),
(296, 'Antalyaspor', 'Turkish Süper Lig', 'antalyaspor-300x300.png', 69, 71, 69, 69),
(297, 'Junior FC', 'Colombian Categoría Primera A', 'junior-300x300.png', 69, 74, 69, 69),
(298, 'Nashville SC', 'USA Major League Soccer', 'nashville-sc-300x300.png', 69, 71, 70, 69),
(299, 'FC Cartagena', 'Spanish Segunda División', 'fc-cartagena-300x300.png', 69, 68, 69, 70),
(300, 'Atlanta United', 'USA Major League Soccer', 'atlanta-united-300x300.png', 69, 74, 69, 68),
(301, 'Oud-Heverlee Leuven', 'Belgian Pro League', 'oh-leuven-300x300.png', 69, 65, 69, 67),
(302, 'SD Huesca', 'Spanish Segunda División', 'huesca-300x300.png', 69, 68, 68, 69),
(303, 'FC St Pauli', 'German 2 Bundesliga', 'st-pauli-300x300.png', 69, 69, 69, 70),
(304, 'Angers SCO', 'French Ligue 1', 'angers-sco-300x300.png', 69, 70, 70, 69),
(305, 'LASK Linz', 'Austrian Football Bundesliga', 'lask-linz-300x300.png', 69, 69, 70, 69),
(306, 'Orlando Pirates', 'South African Premier Division', 'orlando-pirates-300x300.png', 69, 70, 69, 68),
(307, 'Clube Sport Marítimo', 'Portuguese Primeira Liga', 'maritimo-300x300.png', 69, 72, 68, 70),
(308, 'Santa Clara', 'Portuguese Primeira Liga', 'santa-clara-300x300.png', 69, 69, 68, 69),
(309, 'FC Sochaux-Montbéliard', 'French Ligue 2', 'sochaux-300x300.png', 69, 71, 68, 69),
(310, 'FK Austria Wien', 'Austrian Football Bundesliga', 'austria-wien-300x300.png', 68, 63, 68, 67),
(311, 'Sheffield Wednesday', 'English League One', 'sheffield-wednesday-300x300.png', 68, 68, 69, 67),
(312, 'Amiens SC', 'French Ligue 2', 'amiens-sc-300x300.png', 68, 67, 68, 65),
(313, 'CD Leganés', 'Spanish Segunda División', 'leganes-300x300.png', 68, 69, 68, 69),
(314, 'Al Wehda', 'Saudi Professional League', 'al-wahda-300x300.png', 68, 74, 68, 67),
(315, 'FC Hansa Rostock', 'German 2 Bundesliga', 'hansa-rostock-300x300.png', 68, 69, 68, 67),
(316, 'Toronto FC', 'USA Major League Soccer', 'toronto-300x300.png', 68, 73, 67, 65),
(317, 'ESTAC Troyes', 'French Ligue 1', 'troyes-300x300.png', 68, 67, 68, 67),
(318, 'Ascoli', 'Italian Serie B', 'ascoli-300x300.png', 68, 67, 67, 68),
(319, 'AJ Auxerre', 'French Ligue 1', 'auxerre-300x300.png', 68, 68, 68, 69),
(320, 'Holstein Kiel', 'German 2 Bundesliga', 'holstein-kiel-300x300.png', 68, 68, 68, 67),
(321, 'Damac FC', 'Saudi Professional League', 'damac-300x300.png', 68, 67, 71, 65),
(322, 'Servette FC', 'Swiss Super League', 'servette-300x300.png', 68, 69, 70, 67),
(323, 'Club Atlético Sarmiento', 'Argentina Primera División', 'sarmiento-300x300.png', 68, 69, 65, 69),
(324, 'Legia Warszawa', 'Polish Ekstraklasa', 'legia-warszawa-300x300.png', 68, 68, 69, 67),
(325, 'Gil Vicente FC', 'Portuguese Primeira Liga', 'gil-vicente-300x300.png', 68, 66, 69, 66),
(326, 'Unión de Santa Fe', 'Argentina Primera División', 'union-santa-fe-300x300.png', 68, 67, 68, 68),
(327, 'AC Ajaccio', 'French Ligue 1', 'ajaccio-300x300.png', 68, 67, 69, 67),
(328, 'Shandong Taishan', 'Chinese Super League', 'shandong-taishan-300x300.png', 68, 73, 67, 68),
(329, 'Vitesse', 'Holland Eredivisie', 'vitesse-300x300.png', 68, 67, 69, 67),
(330, 'Fortuna Sittard', 'Holland Eredivisie', 'fortuna-sittard-300x300.png', 68, 67, 68, 68),
(331, 'FC Andorra', 'Spanish Segunda División', 'fc-andorra-300x300.png', 68, 65, 67, 67),
(332, 'FC St Gallen 1879', 'Swiss Super League', 'st-gallen-300x300.png', 68, 66, 69, 67),
(333, 'KV Mechelen', 'Belgian Pro League', 'mechelen-300x300.png', 68, 67, 69, 68),
(334, 'Wuhan Three Towns', 'Chinese Super League', 'wuhan-three-towns-300x300.png', 68, 74, 67, 68),
(335, 'Huddersfield Town', 'English League Championship', 'huddersfield-town-300x300.png', 68, 68, 66, 67),
(336, 'Barracas Central', 'Argentina Primera División', 'barracas-central-300x300.png', 68, 69, 69, 68),
(337, 'FCSB (Steaua)', 'Romanian Liga I', 'fcsb-300x300.png', 68, 70, 69, 68),
(338, 'Pogoń Szczecin', 'Polish Ekstraklasa', 'pogon-szczecin-300x300.png', 68, 68, 67, 67),
(339, 'Shanghai Port FC', 'Chinese Super League', 'shanghai-port-300x300.png', 68, 69, 69, 68),
(340, 'Molde FK', 'Norwegian Eliteserien', 'molde-300x300.png', 68, 69, 68, 68),
(341, 'Al Fayha', 'Saudi Professional League', 'al-feiha-300x300.png', 68, 72, 69, 65),
(342, 'SpVgg Greuther Fürth', 'German 2 Bundesliga', 'spvgg-greuther-furth-300x300.png', 68, 67, 68, 67),
(343, 'Columbus Crew', 'USA Major League Soccer', 'columbus-crew-300x300.png', 68, 71, 69, 66),
(344, 'DC United', 'USA Major League Soccer', 'dc-united-300x300.png', 68, 69, 70, 67),
(345, 'New York Red Bulls', 'USA Major League Soccer', 'new-york-rb-300x300.png', 68, 67, 67, 68),
(346, 'FC Vizela', 'Portuguese Primeira Liga', 'vizela-300x300.png', 68, 67, 69, 69),
(347, 'Chicago Fire Football Club', 'USA Major League Soccer', 'chicago-fire-300x300.png', 68, 68, 69, 68),
(348, 'Colorado Rapids', 'USA Major League Soccer', 'colorado-rapids-300x300.png', 68, 67, 65, 67),
(349, 'Houston Dynamo', 'USA Major League Soccer', 'houston-dynamo-300x300.png', 68, 64, 68, 66),
(350, 'Brescia', 'Italian Serie B', 'brescia-300x300.png', 68, 67, 67, 68),
(351, 'Charlotte FC', 'USA Major League Soccer', 'charlotte-300x300.png', 68, 73, 69, 67),
(352, 'Stade Malherbe Caen', 'French Ligue 2', 'caen-300x300.png', 68, 68, 67, 69),
(353, 'Gimnasia y Esgrima La Plata', 'Argentina Primera División', 'gimnasia-la-plata-300x300.png', 68, 69, 68, 68),
(354, 'FBC Melgar', 'Peruvian Primera División', 'melgar-300x300.png', 68, 69, 68, 68),
(355, 'KV Kortrijk', 'Belgian Pro League', 'kortrijk-300x300.png', 68, 70, 67, 66),
(356, 'Austin FC', 'USA Major League Soccer', 'austin-300x300.png', 68, 68, 70, 65),
(357, 'Aytemiz Alanyaspor', 'Turkish Süper Lig', 'alanyaspor-300x300.png', 68, 69, 70, 66),
(358, 'Vancouver Whitecaps FC', 'USA Major League Soccer', 'vancouver-whitecaps-300x300.png', 68, 70, 68, 68),
(359, 'FC Nordsjælland', 'Danish Superliga', 'nordsjalland-300x300.png', 68, 69, 68, 68),
(360, '1 FC Magdeburg', 'German 2 Bundesliga', 'magdeburg-300x300.png', 68, 68, 68, 68),
(361, 'SK Rapid Wien', 'Austrian Football Bundesliga', 'rapid-wien-300x300.png', 68, 73, 67, 68),
(362, 'Kaizer Chiefs', 'South African Premier Division', 'kaizer-chiefs-300x300.png', 68, 67, 65, 66),
(363, 'FC Paços de Ferreira', 'Portuguese Primeira Liga', 'pacos-de-ferreira-300x300.png', 68, 68, 68, 69),
(364, 'SV Zulte Waregem', 'Belgian Pro League', 'zulte-waregem-300x300.png', 68, 70, 68, 66),
(365, 'KV Oostende', 'Belgian Pro League', 'kv-oostende-300x300.png', 68, 68, 68, 66),
(366, 'FC Sion', 'Swiss Super League', 'sion-300x300.png', 68, 73, 67, 67),
(367, 'Urbs Reggina 1914', 'Italian Serie B', 'reggina-300x300.png', 68, 68, 68, 67),
(368, 'CD Universidad Católica del Ecuador', 'Ecuadorian Serie A', 'cd-universidad-catolica-del-ecuador-300x300.png', 68, 71, 67, 67),
(369, 'Rotherham United', 'English League Championship', 'rotherham-united-300x300.png', 67, 67, 68, 65),
(370, 'Grenoble Foot 38', 'French Ligue 2', 'grenoble-foot-38-300x300.png', 67, 65, 67, 67),
(371, 'Stade Lavallois Mayenne FC', 'French Ligue 2', 'laval-300x300.png', 67, 67, 67, 66),
(372, 'Club de Foot Montréal', 'USA Major League Soccer', 'cf-montreal-300x300.png', 67, 67, 67, 66),
(373, 'Sparta Rotterdam', 'Holland Eredivisie', 'sparta-rotterdam-300x300.png', 67, 67, 68, 66),
(374, 'Cosenza', 'Italian Serie B', 'cosenza-300x300.png', 67, 69, 67, 67),
(375, 'Rosenborg BK', 'Norwegian Eliteserien', 'rosenborg-300x300.png', 67, 66, 67, 66),
(376, 'Viking FK', 'Norwegian Eliteserien', 'viking-300x300.png', 67, 69, 65, 66),
(377, 'FC Lugano', 'Swiss Super League', 'lugano-300x300.png', 67, 69, 69, 64),
(378, 'Universitatea Craiova', 'Romanian Liga I', 'universitatea-craiova-300x300.png', 67, 68, 68, 65),
(379, 'Club Atlético River Plate', 'Uruguayan Primera División', 'river-plate-1-300x300.png', 67, 66, 67, 67),
(380, 'Ternana', 'Italian Serie B', 'ternana-300x300.png', 67, 70, 65, 68),
(381, 'En Avant de Guingamp', 'French Ligue 2', 'guingamp-300x300.png', 67, 67, 66, 66),
(382, 'Aberdeen', 'Scottish Premiership', 'aberdeen-300x300.png', 67, 70, 66, 66),
(383, 'Hibernian', 'Scottish Premiership', 'hibernian-300x300.png', 67, 66, 68, 65),
(384, 'Derby County', 'English League One', 'derby-county-300x300.png', 67, 66, 66, 67),
(385, 'Club The Strongest', 'Bolivian Primera División', 'the-strongest-300x300.png', 67, 69, 66, 65),
(386, 'FC Zürich', 'Swiss Super League', 'zurich-300x300.png', 67, 66, 69, 67),
(387, 'FC Luzern', 'Swiss Super League', 'luzern-300x300.png', 67, 64, 70, 66),
(388, 'Plymouth Argyle', 'English League One', 'plymouth-argyle-300x300.png', 67, 67, 67, 67),
(389, 'Abha Club', 'Saudi Professional League', 'abha-300x300.png', 67, 66, 69, 64),
(390, 'Cienciano', 'Peruvian Primera División', 'cienciano-300x300.png', 67, 69, 68, 66),
(391, 'Atakaş Hatayspor', 'Turkish Süper Lig', 'hatayspor-300x300.png', 67, 69, 67, 67),
(392, 'Eintracht Braunschweig', 'German 2 Bundesliga', 'eintracht-braunschweig-300x300.png', 67, 67, 68, 67),
(393, 'Incheon United FC', 'Korean K League 1', 'incheon-united-300x300.png', 67, 68, 70, 66),
(394, 'Suwon FC', 'Korean K League 1', 'suwon-300x300.png', 67, 68, 67, 65),
(395, 'AIK', 'Swedish Allsvenskan', 'aik-300x300.png', 67, 65, 64, 67),
(396, 'Pohang Steelers', 'Korean K League 1', 'pohang-steelers-300x300.png', 67, 71, 67, 69),
(397, 'Jeju United FC', 'Korean K League 1', 'jeju-united-300x300.png', 67, 67, 64, 67),
(398, 'Paris FC', 'French Ligue 2', 'paris-300x300.png', 67, 68, 68, 67),
(399, 'Deportivo Ñublense', 'Chilean Primera División', 'nublense-300x300.png', 67, 70, 66, 66),
(400, 'Modena', 'Italian Serie B', 'modena-300x300.png', 67, 67, 67, 68),
(401, 'FC Seoul', 'Korean K League 1', 'seoul-300x300.png', 67, 60, 68, 67),
(402, 'KSV Cercle Brugge', 'Belgian Pro League', 'cercle-brugge-300x300.png', 67, 68, 65, 66),
(403, 'Liverpool Fútbol Club', 'Uruguayan Primera División', 'liverpool-1-300x300.png', 67, 69, 68, 66),
(404, 'CFR Cluj', 'Romanian Liga I', 'cfr-cluj-300x300.png', 67, 66, 68, 66),
(405, 'VfL Osnabrück', 'German 3 Bundesliga', 'osnabruck-300x300.png', 67, 66, 68, 66),
(406, 'Kasimpaşa SK', 'Turkish Süper Lig', 'kasimpasa-300x300.png', 67, 69, 67, 66),
(407, 'Pau FC', 'French Ligue 2', 'pau-300x300.png', 67, 67, 66, 66),
(408, 'Randers FC', 'Danish Superliga', 'randers-300x300.png', 67, 66, 64, 66),
(409, 'FC Farul Constanța', 'Romanian Liga I', 'ssc-farul-300x300.png', 67, 65, 69, 65),
(410, 'Aalborg BK', 'Danish Superliga', 'aab-300x300.png', 67, 69, 68, 66),
(411, 'Málaga CF', 'Spanish Segunda División', 'malaga-300x300.png', 67, 70, 67, 66),
(412, 'FC Groningen', 'Holland Eredivisie', 'fc-groningen-300x300.png', 67, 69, 67, 66),
(413, 'Ümraniyespor', 'Turkish Süper Lig', 'umraniyespor-300x300.png', 67, 68, 67, 67),
(414, 'SC Cambuur', 'Holland Eredivisie', 'sc-cambuur-300x300.png', 67, 67, 67, 65),
(415, 'SPAL', 'Italian Serie B', 'spal-300x300.png', 67, 68, 65, 65),
(416, 'Benevento', 'Italian Serie B', 'benevento-300x300.png', 67, 68, 67, 68),
(417, 'Perugia', 'Italian Serie B', 'perugia-300x300.png', 67, 66, 67, 66),
(418, 'Nîmes Olympique', 'French Ligue 2', 'nimes-300x300.png', 67, 68, 65, 65),
(419, 'SD Ponferradina', 'Spanish Segunda División', 'ponferradina-300x300.png', 67, 66, 67, 67),
(420, 'Reading', 'English League Championship', 'reading-300x300.png', 66, 59, 65, 64),
(421, 'Bolton Wanderers', 'English League One', 'bolton-wanderers-300x300.png', 66, 67, 65, 65),
(422, 'FC U Craiova 1948', 'Romanian Liga I', 'u-craiova-1948-300x300.png', 66, 65, 66, 65),
(423, 'Daegu FC', 'Korean K League 1', 'daegu-300x300.png', 66, 69, 65, 65),
(424, 'Al Raed', 'Saudi Professional League', 'al-raed-300x300.png', 66, 68, 67, 62),
(425, 'Al Taawoun', 'Saudi Professional League', 'al-taawon-300x300.png', 66, 68, 71, 61),
(426, '1 FC Saarbrücken', 'German 3 Bundesliga', 'saarbrucken-300x300.png', 66, 65, 66, 66),
(427, 'Silkeborg IF', 'Danish Superliga', 'silkeborg-300x300.png', 66, 65, 66, 65),
(428, 'Go Ahead Eagles', 'Holland Eredivisie', 'go-ahead-eagles-300x300.png', 66, 67, 66, 67),
(429, 'Rapid București', 'Romanian Liga I', 'rapid-bucuresti-300x300.png', 66, 67, 65, 66),
(430, 'SC Bastia', 'French Ligue 2', 'bastia-300x300.png', 66, 65, 69, 64),
(431, 'Arsenal de Sarandí', 'Argentina Primera División', 'arsenal-de-sarandi-300x300.png', 66, 65, 67, 67),
(432, 'IFK Göteborg', 'Swedish Allsvenskan', 'ifk-goteborg-300x300.png', 66, 68, 63, 66),
(433, 'SV Elversberg', 'German 3 Bundesliga', 'elversberg-300x300.png', 66, 66, 66, 66),
(434, 'Club Cerro Porteño', 'Paraguayan Primera División', 'cerro-porteno-300x300.png', 66, 69, 65, 64),
(435, 'Charlton Athletic', 'English League One', 'charlton-athletic-300x300.png', 66, 62, 66, 65),
(436, 'Melbourne City FC', 'Australian A-League', 'melbourne-city-300x300.png', 66, 73, 68, 65),
(437, 'Shanghai Shenhua FC', 'Chinese Super League', 'shanghai-shenhua-300x300.png', 66, 70, 65, 64),
(438, 'Südtirol', 'Italian Serie B', 'sudtirol-300x300.png', 66, 68, 65, 64),
(439, 'RKC Waalwijk', 'Holland Eredivisie', 'rkc-waalwijk-300x300.png', 66, 66, 64, 67),
(440, 'Valenciennes FC', 'French Ligue 2', 'valenciennes-300x300.png', 66, 65, 65, 65),
(441, 'Blackpool', 'English League Championship', 'blackpool-300x300.png', 66, 66, 65, 66),
(442, 'Barnsley', 'English League One', 'barnsley-300x300.png', 66, 64, 67, 63),
(443, 'Caracas Fútbol Club', 'Venezuelan Primera División', 'caracas-300x300.png', 66, 67, 66, 66),
(444, 'Deportivo Táchira FC', 'Venezuelan Primera División', 'deportivo-tachira-300x300.png', 66, 67, 66, 66),
(445, 'Vålerenga Fotball', 'Norwegian Eliteserien', 'valerenga-300x300.png', 66, 65, 67, 66),
(446, 'Beijing Guoan FC', 'Chinese Super League', 'beijing-guoan-300x300.png', 66, 71, 65, 67),
(447, 'Yukatel Kayserispor', 'Turkish Süper Lig', 'kayserispor-300x300.png', 66, 66, 68, 66),
(448, 'Zagłębie Lubin', 'Polish Ekstraklasa', 'zaglebie-lubin-300x300.png', 66, 66, 66, 65),
(449, 'Viborg FF', 'Danish Superliga', 'viborg-300x300.png', 66, 64, 67, 66),
(450, 'US Quevilly Rouen Métropole', 'French Ligue 2', 'quevilly-rouen-300x300.png', 66, 64, 66, 65),
(451, 'Excelsior', 'Holland Eredivisie', 'excelsior-300x300.png', 66, 65, 65, 65),
(452, 'IF Elfsborg', 'Swedish Allsvenskan', 'elfsborg-300x300.png', 66, 66, 63, 67),
(453, 'Djurgårdens IF', 'Swedish Allsvenskan', 'djurgarden-300x300.png', 66, 66, 68, 66),
(454, 'RZ Pellets Wolfsberger AC', 'Austrian Football Bundesliga', 'wolfsberger-ac-300x300.png', 66, 67, 66, 67),
(455, 'Suwon Samsung Bluewings', 'Korean K League 1', 'suwon-bluewings-300x300.png', 66, 64, 69, 65),
(456, 'KAS Eupen', 'Belgian Pro League', 'as-eupen-300x300.png', 66, 67, 67, 65),
(457, 'Sepsi OSK Sf Gheorghe', 'Romanian Liga I', 'sepsi-300x300.png', 66, 65, 66, 65),
(458, 'İstanbulspor', 'Turkish Süper Lig', 'istanbulspor-300x300.png', 66, 64, 65, 66),
(459, 'SV Wehen Wiesbaden', 'German 3 Bundesliga', 'wehen-wiesbaden-300x300.png', 66, 65, 64, 66),
(460, 'Piast Gliwice', 'Polish Ekstraklasa', 'piast-gliwice-300x300.png', 66, 67, 65, 65),
(461, 'Radomiak Radom', 'Polish Ekstraklasa', 'radomiak-radom-300x300.png', 66, 66, 66, 66),
(462, 'Gangwon FC', 'Korean K League 1', 'gangwon-300x300.png', 66, 66, 66, 65),
(463, 'Al Khaleej', 'Saudi Professional League', 'al-khaleej-300x300.png', 66, 65, 66, 66),
(464, 'CD Mirandés', 'Spanish Segunda División', 'mirandes-300x300.png', 66, 64, 66, 66),
(465, 'FC Emmen', 'Holland Eredivisie', 'fc-emmen-300x300.png', 66, 66, 65, 65),
(466, 'UD Ibiza', 'Spanish Segunda División', 'ud-ibiza-300x300.png', 66, 67, 65, 65),
(467, 'Dijon FCO', 'French Ligue 2', 'dijon-300x300.png', 66, 69, 65, 65),
(468, 'CD Lugo', 'Spanish Segunda División', 'lugo-300x300.png', 66, 66, 66, 66),
(469, 'GZT Giresunspor', 'Turkish Süper Lig', 'giresunspor-300x300.png', 66, 68, 67, 66),
(470, 'Club Nacional', 'Paraguayan Primera División', 'club-nacional-300x300.png', 66, 61, 66, 67),
(471, 'La Equidad', 'Colombian Categoría Primera A', 'la-equidad-300x300.png', 66, 64, 66, 67),
(472, 'Montevideo Wanderers', 'Uruguayan Primera División', 'montevideo-wanderers-300x300.png', 66, 65, 66, 66),
(473, 'Cerro Largo Fútbol Club', 'Uruguayan Primera División', 'cerro-largo-futbol-club-300x300.png', 66, 67, 65, 66),
(474, 'Deportivo Cali', 'Colombian Categoría Primera A', 'deportivo-cali-300x300.png', 66, 65, 68, 66),
(475, 'Sport Boys', 'Peruvian Primera División', 'sport-boys-300x300.png', 66, 66, 67, 66),
(476, 'Austria Lustenau', 'Austrian Football Bundesliga', 'austria-lustenau-300x300.png', 65, 66, 64, 63),
(477, 'Odense Boldklub', 'Danish Superliga', 'ob-300x300.png', 65, 65, 66, 65),
(478, 'Metropolitanos de Caracas FC', 'Venezuelan Primera División', 'metropolitanos-300x300.png', 65, 65, 66, 64),
(479, 'FC Voluntari', 'Romanian Liga I', 'voluntari-300x300.png', 65, 64, 64, 65),
(480, 'TSV 1860 München', 'German 3 Bundesliga', '1860-munchen-300x300.png', 65, 66, 65, 64),
(481, 'Melbourne Victory', 'Australian A-League', 'melbourne-victory-300x300.png', 65, 67, 65, 64),
(482, 'FC Annecy', 'French Ligue 2', 'annecy-300x300.png', 65, 66, 65, 63),
(483, 'Lillestrøm SK', 'Norwegian Eliteserien', 'lillestrom-300x300.png', 65, 63, 67, 65),
(484, 'Rodez Aveyron Football', 'French Ligue 2', 'rodez-300x300.png', 65, 65, 64, 65),
(485, 'Viktoria Köln', 'German 3 Bundesliga', 'viktoria-koln-300x300.png', 65, 63, 65, 65),
(486, 'Villarreal Club de Fútbol B', 'Spanish Segunda División', 'villarreal-ii-300x300.png', 65, 65, 66, 65),
(487, 'Grasshopper Club Zürich', 'Swiss Super League', 'grasshopper-300x300.png', 65, 64, 65, 65),
(488, 'Sarpsborg 08 FF', 'Norwegian Eliteserien', 'sarpsborg-08-300x300.png', 65, 60, 66, 62),
(489, 'SV Sandhausen', 'German 2 Bundesliga', 'sandhausen-300x300.png', 65, 68, 64, 65),
(490, 'Cittadella', 'Italian Serie B', 'cittadella-300x300.png', 65, 64, 65, 64),
(491, 'Wigan Athletic', 'English League Championship', 'wigan-athletic-300x300.png', 65, 67, 63, 64),
(492, 'Warta Poznań', 'Polish Ekstraklasa', 'warta-poznan-300x300.png', 65, 66, 64, 65),
(493, 'FC Ingolstadt 04', 'German 3 Bundesliga', 'ingolstadt-300x300.png', 65, 64, 64, 66),
(494, 'Chengdu Rongcheng FC', 'Chinese Super League', 'chengdu-rongcheng-300x300.png', 65, 70, 63, 66),
(495, 'Wy.combe Wanderers', 'English League One', 'wy.combe-wanderers-300x300.png', 65, 64, 65, 64),
(496, 'Peterborough United', 'English League One', 'peterborough-united-300x300.png', 65, 71, 65, 65),
(497, 'Delfín Sporting Club', 'Ecuadorian Serie A', 'delfin-300x300.png', 65, 67, 66, 63),
(498, 'Lyngby BK', 'Danish Superliga', 'lyngby-300x300.png', 65, 63, 66, 64),
(499, 'Jagiellonia Białystok', 'Polish Ekstraklasa', 'jagiellonia-bialystok-300x300.png', 65, 70, 64, 64),
(500, 'Wrexham AFC', 'English National League', 'wrexham-300x300.png', 65, 59, 63, 65),
(501, 'Cracovia', 'Polish Ekstraklasa', 'cracovia-krakow-300x300.png', 65, 65, 66, 65),
(502, 'DSC Arminia Bielefeld', 'German 2 Bundesliga', 'dsc-arminia-bielefeld-300x300.png', 65, 66, 65, 63),
(503, 'Oxford United', 'English League One', 'oxford-united-300x300.png', 65, 65, 65, 65),
(504, 'Universitatea Cluj', 'Romanian Liga I', 'universitatea-cluj-300x300.png', 65, 66, 65, 65),
(505, 'Górnik Zabrze', 'Polish Ekstraklasa', 'gornik-zabrze-300x300.png', 65, 63, 65, 65),
(506, 'Sint-Truidense VV', 'Belgian Pro League', 'sint-truiden-300x300.png', 65, 64, 65, 66),
(507, 'Al Tai', 'Saudi Professional League', 'al-tai-300x300.png', 65, 65, 67, 64),
(508, 'IFK Norrköping', 'Swedish Allsvenskan', 'norrkoping-300x300.png', 65, 64, 65, 63),
(509, 'WSG Tirol', 'Austrian Football Bundesliga', 'wsg-tirol-300x300.png', 65, 63, 66, 64),
(510, 'Hammarby IF', 'Swedish Allsvenskan', 'hammarby-300x300.png', 65, 64, 63, 65),
(511, 'TSV Egger Glas Hartberg', 'Austrian Football Bundesliga', 'hartberg-300x300.png', 65, 64, 65, 64),
(512, 'AFC Hermannstadt', 'Romanian Liga I', 'hermannstadt-300x300.png', 65, 63, 65, 64),
(513, 'Estudiantes de Mérida', 'Venezuelan Primera División', 'estudiantes-merida-300x300.png', 65, 65, 65, 65),
(514, 'HJK Helsinki', 'Finnish Veikkausliiga', 'hjk-300x300.png', 65, 63, 65, 64),
(515, 'SG Dynamo Dresden', 'German 3 Bundesliga', 'dynamo-dresden-300x300.png', 65, 65, 66, 64),
(516, 'SK Austria Klagenfurt', 'Austrian Football Bundesliga', 'austria-klagenfurt-300x300.png', 65, 64, 65, 67),
(517, 'Portsmouth', 'English League One', 'portsmouth-300x300.png', 65, 70, 64, 66),
(518, 'SV Ried', 'Austrian Football Bundesliga', 'ried-300x300.png', 65, 62, 62, 65),
(519, 'Chamois Niortais Football Club', 'French Ligue 2', 'niort-300x300.png', 65, 61, 65, 64),
(520, 'Seraing', 'Belgian Pro League', 'rfc-seraing-300x300.png', 65, 66, 65, 64),
(521, 'Lechia Gdańsk', 'Polish Ekstraklasa', 'lechia-gdansk-300x300.png', 65, 68, 64, 64),
(522, 'Deportivo La Guaira FC', 'Venezuelan Primera División', 'deportivo-la-guaira-fc-300x300.png', 65, 64, 65, 64),
(523, 'Guaireña FC', 'Paraguayan Primera División', 'guairena-fc-300x300.png', 65, 64, 66, 64),
(524, 'Independiente Petrolero', 'Bolivian Primera División', 'independiente-petrolero-300x300.png', 65, 66, 65, 65),
(525, 'CD Everton de Viña del Mar', 'Chilean Primera División', 'cd-everton-de-vina-del-mar-300x300.png', 65, 65, 63, 69),
(526, 'Unión La Calera', 'Chilean Primera División', 'union-la-calera-300x300.png', 65, 66, 66, 65),
(527, 'Club Always Ready', 'Bolivian Primera División', 'club-always-ready-300x300.png', 65, 67, 65, 66),
(528, 'Milton Keynes Dons', 'English League One', 'milton-keynes-dons-300x300.png', 64, 65, 63, 63),
(529, 'Rot-Weiß Essen', 'German 3 Bundesliga', 'rot-weiss-essen-300x300.png', 64, 64, 64, 64),
(530, 'SSV Jahn Regensburg', 'German 2 Bundesliga', 'jahn-regensburg-300x300.png', 64, 63, 64, 63),
(531, 'MSV Duisburg', 'German 3 Bundesliga', 'msv-duisburg-300x300.png', 64, 65, 64, 64),
(532, 'Zhejiang Professional FC', 'Chinese Super League', 'zhejiang-300x300.png', 64, 72, 64, 62),
(533, 'General Caballero (JLM)', 'Paraguayan Primera División', 'general-caballero-jlm-300x300.png', 64, 63, 65, 64),
(534, 'Western Sydney Wanderers', 'Australian A-League', 'western-sydney-wanderers-300x300.png', 64, 69, 63, 63),
(535, 'Widzew Łódź', 'Polish Ekstraklasa', 'widzew-lodz-300x300.png', 64, 65, 65, 63),
(536, 'PGE FKS Stal Mielec', 'Polish Ekstraklasa', 'stal-mielec-300x300.png', 64, 66, 65, 63),
(537, 'Western United FC', 'Australian A-League', 'western-united-300x300.png', 64, 64, 65, 64),
(538, 'Livingston FC', 'Scottish Premiership', 'livingston-300x300.png', 64, 64, 64, 63),
(539, 'Club Deportivo Oriente Petrolero', 'Bolivian Primera División', 'oriente-petrolero-300x300.png', 64, 67, 64, 64),
(540, 'Shrewsbury Town', 'English League One', 'shrewsbury-town-300x300.png', 64, 64, 63, 63),
(541, 'Fleetwood Town', 'English League One', 'fleetwood-town-300x300.png', 64, 63, 63, 65),
(542, 'FC Volendam', 'Holland Eredivisie', 'fc-volendam-300x300.png', 64, 64, 63, 64),
(543, 'Stockport County', 'English League Two', 'stockport-county-300x300.png', 64, 63, 65, 63),
(544, 'Hallescher FC', 'German 3 Bundesliga', 'hallescher-fc-300x300.png', 64, 64, 63, 64),
(545, 'Lincoln City', 'English League One', 'lincoln-city-300x300.png', 64, 65, 64, 64),
(546, 'Changchun Yatai FC', 'Chinese Super League', 'changchun-yatai-300x300.png', 64, 72, 64, 62),
(547, 'Strømsgodset IF', 'Norwegian Eliteserien', 'stromsgodset-300x300.png', 64, 62, 64, 65),
(548, 'AFC UTA Arad', 'Romanian Liga I', 'uta-arad-300x300.png', 64, 64, 64, 64),
(549, 'Kalmar FF', 'Swedish Allsvenskan', 'kalmar-300x300.png', 64, 64, 65, 65),
(550, 'SC Rheindorf Altach', 'Austrian Football Bundesliga', 'rheindorf-altach-300x300.png', 64, 64, 64, 64);
INSERT INTO `fifa_teams` (`id`, `name`, `league`, `logo`, `ova`, `att`, `mid`, `def`) VALUES
(551, 'Henan Songshan Longmen FC', 'Chinese Super League', 'henan-300x300.png', 64, 68, 65, 63),
(552, 'Sportclub Verl', 'German 3 Bundesliga', 'verl-300x300.png', 64, 64, 64, 64),
(553, 'Leyton Orient', 'English League Two', 'leyton-orient-300x300.png', 64, 64, 64, 63),
(554, 'Burton Albion', 'English League One', 'burton-albion-300x300.png', 64, 64, 64, 64),
(555, 'Club Deportivo Guabirá', 'Bolivian Primera División', 'guabira-300x300.png', 64, 61, 64, 64),
(556, 'Bristol Rovers', 'English League One', 'bristol-rovers-300x300.png', 64, 65, 65, 63),
(557, 'FC Winterthur', 'Swiss Super League', 'winterthur-300x300.png', 64, 65, 64, 63),
(558, 'St Johnstone FC', 'Scottish Premiership', 'st-johnstone-300x300.png', 64, 63, 63, 62),
(559, 'SV Waldhof Mannheim 07', 'German 3 Bundesliga', 'waldhof-mannheim-300x300.png', 64, 64, 64, 65),
(560, 'St Mirren', 'Scottish Premiership', 'st-mirren-300x300.png', 64, 62, 68, 64),
(561, 'Hamarkameratene', 'Norwegian Eliteserien', 'hamkam-300x300.png', 64, 64, 63, 64),
(562, 'Korona Kielce', 'Polish Ekstraklasa', 'korona-kielce-300x300.png', 64, 64, 64, 63),
(563, 'Śląsk Wrocław', 'Polish Ekstraklasa', 'slask-wroclaw-300x300.png', 64, 67, 64, 64),
(564, 'FC Erzgebirge Aue', 'German 3 Bundesliga', 'erzgebirge-aue-300x300.png', 64, 66, 64, 63),
(565, 'Petrolul Ploiești', 'Romanian Liga I', 'petrolul-52-300x300.png', 64, 63, 65, 64),
(566, 'FSV Zwickau', 'German 3 Bundesliga', 'zwickau-300x300.png', 64, 64, 63, 63),
(567, 'SV Meppen', 'German 3 Bundesliga', 'meppen-300x300.png', 64, 64, 64, 63),
(568, 'Sangju Sangmu FC', 'Korean K League 1', 'gimcheon-sangmu-300x300.png', 64, 63, 65, 62),
(569, 'Wisła Płock', 'Polish Ekstraklasa', 'wisla-plock-300x300.png', 64, 64, 66, 62),
(570, 'Club Atlético Aldosivi', 'Argentina Primera División', 'aldosivi-300x300.png', 64, 59, 65, 65),
(571, 'Al Batin', 'Saudi Professional League', 'al-batin-300x300.png', 64, 65, 64, 61),
(572, 'Miedź Legnica', 'Polish Ekstraklasa', 'miedz-legnica-300x300.png', 64, 64, 63, 64),
(573, 'Ayacucho', 'Peruvian Primera División', 'ayacucho-300x300.png', 64, 63, 65, 63),
(574, 'Club Deportivo Jorge Wilstermann', 'Bolivian Primera División', 'club-deportivo-jorge-wilstermann-300x300.png', 64, 63, 64, 64),
(575, 'Royal Pari', 'Bolivian Primera División', 'royal-pari-300x300.png', 64, 63, 65, 63),
(576, 'Mushuc Runa', 'Ecuadorian Serie A', 'mushuc-runa-300x300.png', 64, 64, 64, 64),
(577, '9 de Octubre', 'Ecuadorian Serie A', '9-de-octubre-300x300.png', 64, 65, 65, 64),
(578, 'Hermanos Colmenarez', 'Venezuelan Primera División', 'hermanos-colmenarez-300x300.png', 64, 64, 65, 65),
(579, 'Dundee United', 'Scottish Premiership', 'dundee-united-300x300.png', 64, 65, 65, 62),
(580, 'Al Adalah', 'Saudi Professional League', 'al-adalah-300x300.png', 64, 68, 65, 60),
(581, 'AFC Chindia Târgoviște', 'Romanian Liga I', 'chindia-targoviste-300x300.png', 64, 64, 64, 63),
(582, 'Salford City', 'English League Two', 'salford-city-300x300.png', 63, 63, 63, 64),
(583, 'Gillingham', 'English League Two', 'gillingham-300x300.png', 63, 63, 64, 63),
(584, 'Bradford City', 'English League Two', 'bradford-city-300x300.png', 63, 63, 63, 61),
(585, 'Adelaide United', 'Australian A-League', 'adelaide-united-300x300.png', 63, 63, 62, 63),
(586, 'Perth Glory', 'Australian A-League', 'perth-glory-300x300.png', 63, 66, 62, 63),
(587, 'Sydney FC', 'Australian A-League', 'sydney-300x300.png', 63, 65, 62, 63),
(588, 'Forest Green Rovers', 'English League One', 'forest-green-rovers-300x300.png', 63, 62, 61, 63),
(589, 'Shamrock Rovers', 'Rep Ireland Premier Division', 'shamrock-rovers-300x300.png', 63, 64, 61, 63),
(590, 'IK Sirius', 'Swedish Allsvenskan', 'sirius-300x300.png', 63, 61, 65, 61),
(591, 'Kilmarnock', 'Scottish Premiership', 'kilmarnock-300x300.png', 63, 64, 62, 64),
(592, 'Motherwell', 'Scottish Premiership', 'motherwell-300x300.png', 63, 61, 63, 62),
(593, 'Borussia Dortmund II', 'German 3 Bundesliga', 'borussia-dortmund-ii-300x300.png', 63, 63, 63, 62),
(594, 'Shijiazhuang Ever Bright FC', 'Chinese Super League', 'cangzhou-mighty-lions-300x300.png', 63, 69, 61, 63),
(595, 'Stevenage', 'English League Two', 'stevenage-300x300.png', 63, 62, 64, 64),
(596, 'Ross County FC', 'Scottish Premiership', 'ross-county-300x300.png', 63, 63, 64, 62),
(597, 'Port Vale', 'English League One', 'port-vale-300x300.png', 63, 62, 63, 64),
(598, 'Northampton Town', 'English League Two', 'northampton-town-300x300.png', 63, 65, 64, 63),
(599, 'Exeter City', 'English League One', 'exeter-city-300x300.png', 63, 63, 63, 63),
(600, 'Cheltenham Town', 'English League One', 'cheltenham-town-300x295.png', 63, 63, 62, 63),
(601, 'Mansfield Town', 'English League Two', 'mansfield-town-300x300.png', 63, 62, 63, 63),
(602, 'Cambridge United', 'English League One', 'cambridge-united-300x300.png', 63, 63, 63, 64),
(603, 'Tianjin Jinmen Tiger FC', 'Chinese Super League', 'tianjin-jinmen-tiger-300x300.png', 63, 70, 65, 62),
(604, 'FC Botoşani', 'Romanian Liga I', 'botosani-300x300.png', 63, 61, 64, 64),
(605, 'Tromsø IL', 'Norwegian Eliteserien', 'tromso-300x300.png', 63, 61, 64, 62),
(606, 'Macarthur FC', 'Australian A-League', 'macarthur-300x300.png', 63, 72, 62, 62),
(607, 'FK Haugesund', 'Norwegian Eliteserien', 'haugesund-300x300.png', 63, 63, 64, 62),
(608, 'Carlisle United', 'English League Two', 'carlisle-united-300x300.png', 63, 62, 64, 63),
(609, 'Aalesunds FK', 'Norwegian Eliteserien', 'aalesund-300x300.png', 63, 62, 62, 63),
(610, 'Degerfors IF', 'Swedish Allsvenskan', 'degerfors-300x300.png', 63, 62, 63, 63),
(611, 'Patronato', 'Argentina Primera División', 'patronato-300x300.png', 63, 61, 65, 63),
(612, 'ATK Mohun Bagan FC', 'Indian Super League', 'atk-mohun-bagan-300x300.png', 63, 65, 64, 63),
(613, 'IFK Värnamo', 'Swedish Allsvenskan', 'varnamo-300x300.png', 63, 68, 63, 62),
(614, 'Club Sol de América', 'Paraguayan Primera División', 'club-sol-de-america-300x300.png', 63, 62, 64, 63),
(615, 'Unión Española', 'Chilean Primera División', 'union-espanola-300x300.png', 63, 65, 59, 66),
(616, 'CD Antofagasta', 'Chilean Primera División', 'cd-antofagasta-300x300.png', 63, 65, 63, 63),
(617, 'Campionii FC Arges', 'Romanian Liga I', 'arges-300x300.png', 63, 63, 63, 63),
(618, 'AC Horsens', 'Danish Superliga', 'horsens-300x300.png', 63, 66, 63, 63),
(619, 'CS Mioveni', 'Romanian Liga I', 'mioveni-300x300.png', 63, 66, 63, 63),
(620, 'VfB Oldenburg', 'German 3 Bundesliga', 'vfb-oldenburg-300x300.png', 63, 63, 62, 63),
(621, 'Walsall', 'English League Two', 'walsall-300x300.png', 62, 62, 61, 62),
(622, 'Brisbane Roar', 'Australian A-League', 'brisbane-roar-300x300.png', 62, 61, 63, 63),
(623, 'Central Coast Mariners', 'Australian A-League', 'central-coast-mariners-300x300.png', 62, 60, 63, 62),
(624, 'Newcastle Jets', 'Australian A-League', 'newcastle-jets-300x300.png', 62, 58, 64, 61),
(625, 'Grimsby Town', 'English League Two', 'grimsby-town-300x300.png', 62, 63, 62, 62),
(626, 'Harrogate Town', 'English League Two', 'harrogate-town-300x300.png', 62, 64, 61, 62),
(627, 'SC Freiburg II', 'German 3 Bundesliga', 'freiburg-ii-300x300.png', 62, 63, 62, 61),
(628, 'Barrow', 'English League Two', 'barrow-300x300.png', 62, 61, 61, 61),
(629, 'AFC Wimbledon', 'English League Two', 'afc-wimbledon-300x300.png', 62, 62, 62, 60),
(630, 'Swindon Town', 'English League Two', 'swindon-town-300x300.png', 62, 62, 62, 61),
(631, 'Colchester United', 'English League Two', 'colchester-united-300x300.png', 62, 59, 61, 61),
(632, 'Mumbai City FC', 'Indian Super League', 'mumbai-city-300x300.png', 62, 62, 64, 61),
(633, 'Odds BK', 'Norwegian Eliteserien', 'odd-300x300.png', 62, 60, 62, 63),
(634, 'Derry City', 'Rep Ireland Premier Division', 'derry-city-300x300.png', 62, 60, 62, 61),
(635, 'Mjällby AIF', 'Swedish Allsvenskan', 'mjallby-300x300.png', 62, 62, 60, 63),
(636, 'Kristiansund BK', 'Norwegian Eliteserien', 'kristiansund-300x300.png', 62, 63, 62, 62),
(637, 'SpVgg Bayreuth', 'German 3 Bundesliga', 'bayreuth-300x300.png', 62, 63, 63, 62),
(638, 'Dundalk FC', 'Rep Ireland Premier Division', 'dundalk-300x300.png', 61, 65, 60, 60),
(639, 'Varbergs BoIS FC', 'Swedish Allsvenskan', 'varberg-bois-300x300.png', 61, 58, 60, 62),
(640, 'Doncaster Rovers', 'English League Two', 'doncaster-rovers-300x300.png', 61, 62, 60, 61),
(641, 'FC Goa', 'Indian Super League', 'goa-300x300.png', 61, 65, 62, 60),
(642, 'Kerala Blasters FC', 'Indian Super League', 'kerala-blasters-300x300.png', 61, 64, 60, 60),
(643, 'Wellington Phoenix', 'Australian A-League', 'wellington-phoenix-300x300.png', 61, 62, 62, 61),
(644, 'Shenzhen FC', 'Chinese Super League', 'shenzhen-300x300.png', 61, 61, 62, 59),
(645, 'St Patrick’s Athletic', 'Rep Ireland Premier Division', 'st-patricks-300x300.png', 61, 60, 61, 60),
(646, 'Meizhou Hakka', 'Chinese Super League', 'meizhou-hakka-300x300.png', 61, 59, 61, 63),
(647, 'Tranmere Rovers', 'English League Two', 'tranmere-rovers-300x300.png', 61, 62, 61, 60),
(648, 'Sutton United', 'English League Two', 'sutton-united-300x300.png', 61, 61, 61, 62),
(649, 'Sandefjord Fotball', 'Norwegian Eliteserien', 'sandefjord-300x300.png', 61, 64, 60, 61),
(650, 'Accrington Stanley', 'English League One', 'accrington-stanley-300x300.png', 61, 59, 62, 59),
(651, 'Dalian Professional Football Club', 'Chinese Super League', 'dalian-professional-300x300.png', 61, 64, 61, 59),
(652, 'GIF Sundsvall', 'Swedish Allsvenskan', 'gif-sundsvall-300x300.png', 61, 63, 59, 62),
(653, 'Helsingborgs IF', 'Swedish Allsvenskan', 'helsingborg-300x300.png', 61, 61, 62, 61),
(654, 'Seongnam FC', 'Korean K League 1', 'seongnam-300x300.png', 61, 63, 59, 59),
(655, 'Crawley Town', 'English League Two', 'crawley-town-300x300.png', 60, 58, 60, 60),
(656, 'Bohemian FC', 'Rep Ireland Premier Division', 'bohemians-300x300.png', 60, 61, 60, 60),
(657, 'Morecambe', 'English League One', 'morecambe-300x300.png', 60, 57, 60, 61),
(658, 'Crewe Alexandra', 'English League Two', 'crewe-alexandra-300x300.png', 60, 62, 60, 61),
(659, 'Newport County', 'English League Two', 'newport-county-300x300.png', 60, 61, 60, 60),
(660, 'Bengaluru FC', 'Indian Super League', 'bengaluru-300x300.png', 60, 62, 60, 61),
(661, 'FK Jerv', 'Norwegian Eliteserien', 'jerv-300x300.png', 60, 62, 61, 58),
(662, 'Hartlepool United', 'English League Two', 'hartlepool-united-300x300.png', 60, 60, 62, 59),
(663, 'Rochdale', 'English League Two', 'rochdale-300x300.png', 60, 59, 60, 61),
(664, 'SC East Bengal FC', 'Indian Super League', 'east-bengal-300x300.png', 59, 66, 60, 58),
(665, 'Sligo Rovers', 'Rep Ireland Premier Division', 'sligo-rovers-300x300.png', 59, 63, 58, 60),
(666, 'Shelbourne FC', 'Rep Ireland Premier Division', 'shelbourne-300x300.png', 59, 60, 57, 59),
(667, 'Odisha FC', 'Indian Super League', 'odisha-fc-300x300.png', 59, 60, 59, 59),
(668, 'Hyderabad FC', 'Indian Super League', 'hyderabad-300x300.png', 58, 58, 60, 56),
(669, 'Jamshedpur FC', 'Indian Super League', 'jamshedpur-300x300.png', 58, 64, 58, 55),
(670, 'Wuhan FC', 'Chinese Super League', 'wuhan-zall-300x300.png', 58, 70, 59, 54),
(671, 'Guangzhou FC', 'Chinese Super League', 'guangzhou-300x300.png', 58, 53, 60, 57),
(672, 'Drogheda United', 'Rep Ireland Premier Division', 'drogheda-united-300x300.png', 57, 56, 58, 57),
(673, 'NorthEast United FC', 'Indian Super League', 'northeast-united-300x300.png', 57, 57, 61, 57),
(674, 'Chennaiyin FC', 'Indian Super League', 'chennaiyin-300x300.png', 57, 62, 57, 54),
(675, 'Finn Harps', 'Rep Ireland Premier Division', 'finn-harps-300x300.png', 57, 55, 57, 57),
(676, 'Guangzhou City', 'Chinese Super League', 'guangzhou-city-300x300.png', 56, 57, 60, 53),
(677, 'UCD AFC', 'Rep Ireland Premier Division', 'ucd-300x300.png', 55, 54, 55, 55),
(678, 'Hebei FC', 'Chinese Super League', 'hebei-300x300.png', 52, 52, 50, 54);

-- --------------------------------------------------------

--
-- Table structure for table `fixture_type`
--

CREATE TABLE `fixture_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fixture_type`
--

INSERT INTO `fixture_type` (`id`, `name`) VALUES
(1, 'Single'),
(2, 'Home and Away');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `no_of_players` int(11) NOT NULL,
  `no_of_teams_per_players` int(11) NOT NULL,
  `players` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `teams` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `match_type` int(11) DEFAULT NULL,
  `fixture_type` int(11) DEFAULT NULL,
  `random` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `no_of_players`, `no_of_teams_per_players`, `players`, `teams`, `match_type`, `fixture_type`, `random`, `created_at`, `updated_at`) VALUES
(14, 4, 1, '[1,2,3,4]', '[11,22,33,44]', 1, 1, 0, '2024-06-07 21:07:59', '2024-06-07 21:07:59'),
(15, 4, 2, '[1,2,3,4]', '[11,22,33,44,111,222,333,444]', 1, 1, 0, '2024-06-07 21:50:33', '2024-06-07 21:50:33');

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `game` int(11) NOT NULL,
  `player_team_combination` longtext DEFAULT NULL,
  `league_is_compelete` tinyint(4) DEFAULT NULL,
  `league_matches` longtext DEFAULT NULL,
  `knockout_is_compelete` tinyint(4) DEFAULT NULL,
  `knockout_matches` longtext DEFAULT NULL,
  `final_is_complete` tinyint(4) DEFAULT NULL,
  `final_matches` longtext DEFAULT NULL,
  `friendly_is_complete` tinyint(4) DEFAULT NULL,
  `friendly_matches` longtext DEFAULT NULL,
  `others_is_complete` tinyint(4) DEFAULT NULL,
  `others_type` varchar(100) DEFAULT NULL,
  `others_matches` longtext DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`id`, `game`, `player_team_combination`, `league_is_compelete`, `league_matches`, `knockout_is_compelete`, `knockout_matches`, `final_is_complete`, `final_matches`, `friendly_is_complete`, `friendly_matches`, `others_is_complete`, `others_type`, `others_matches`, `created_at`, `updated_at`) VALUES
(2, 15, '[\r\n{\r\n\"playerId\": 1,\r\n\"playerName\": \"L. Messi\",\r\n\"playerImage\": \"http://localhost:3000/public/images/players/messi.png\",\r\n\"playerAvatar\": \"\",\r\n\"playerLevel\": 5,\r\n\"playerGoals\": 15,\r\n\"playerTotalMatch\": 8,\r\n\"playerTotalWin\": 5,\r\n\"playerTotalLose\": 3,\r\n\"playerTotalDraw\": 2,\r\n\"teams\": [\r\n{\r\n\"id\": 11,\r\n\"name\": \"Newcastle United\",\r\n\"league\": \"English Premier League\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/newcastle-united-300x300.png\",\r\n\"ova\": 81,\r\n\"att\": 79,\r\n\"mid\": 81,\r\n\"def\": 82\r\n},\r\n{\r\n\"id\": 33,\r\n\"name\": \"Olympique de Marseille\",\r\n\"league\": \"French Ligue 1\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/olympique-de-marseille-300x300.png\",\r\n\"ova\": 78,\r\n\"att\": 77,\r\n\"mid\": 78,\r\n\"def\": 78\r\n}\r\n]\r\n},\r\n{\r\n\"playerId\": 2,\r\n\"playerName\": \"Neimar JR\",\r\n\"playerImage\": \"http://localhost:3000/public/images/players/neimar.png\",\r\n\"playerAvatar\": \"\",\r\n\"playerLevel\": 5,\r\n\"playerGoals\": 15,\r\n\"playerTotalMatch\": 8,\r\n\"playerTotalWin\": 5,\r\n\"playerTotalLose\": 3,\r\n\"playerTotalDraw\": 2,\r\n\"teams\": [\r\n{\r\n\"id\": 333,\r\n\"name\": \"KV Mechelen\",\r\n\"league\": \"Belgian Pro League\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/mechelen-300x300.png\",\r\n\"ova\": 68,\r\n\"att\": 67,\r\n\"mid\": 69,\r\n\"def\": 68\r\n},\r\n{\r\n\"id\": 444,\r\n\"name\": \"Deportivo Táchira FC\",\r\n\"league\": \"Venezuelan Primera División\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/deportivo-tachira-300x300.png\",\r\n\"ova\": 66,\r\n\"att\": 67,\r\n\"mid\": 66,\r\n\"def\": 66\r\n}\r\n]\r\n},\r\n{\r\n\"playerId\": 3,\r\n\"playerName\": \"C. Ronaldo\",\r\n\"playerImage\": \"http://localhost:3000/public/images/players/ronaldo.png\",\r\n\"playerAvatar\": \"\",\r\n\"playerLevel\": 5,\r\n\"playerGoals\": 15,\r\n\"playerTotalMatch\": 8,\r\n\"playerTotalWin\": 5,\r\n\"playerTotalLose\": 3,\r\n\"playerTotalDraw\": 2,\r\n\"teams\": [\r\n{\r\n\"id\": 44,\r\n\"name\": \"Al Ittihad\",\r\n\"league\": \"Saudi Professional League\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/al-ittihad-300x300.png\",\r\n\"ova\": 77,\r\n\"att\": 83,\r\n\"mid\": 79,\r\n\"def\": 70\r\n},\r\n{\r\n\"id\": 222,\r\n\"name\": \"LA Galaxy\",\r\n\"league\": \"USA Major League Soccer\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/la-galaxy-300x300.png\",\r\n\"ova\": 70,\r\n\"att\": 70,\r\n\"mid\": 69,\r\n\"def\": 68\r\n}\r\n]\r\n},\r\n{\r\n\"playerId\": 4,\r\n\"playerName\": \"K. Mbappe\",\r\n\"playerImage\": \"http://localhost:3000/public/images/players/mbappe.png\",\r\n\"playerAvatar\": \"http://localhost:3000/public/images/players/mbappe_avatar.png\",\r\n\"playerLevel\": 5,\r\n\"playerGoals\": 15,\r\n\"playerTotalMatch\": 8,\r\n\"playerTotalWin\": 5,\r\n\"playerTotalLose\": 3,\r\n\"playerTotalDraw\": 2,\r\n\"teams\": [\r\n{\r\n\"id\": 111,\r\n\"name\": \"US Salernitana 1919\",\r\n\"league\": \"Italian Serie A\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/salernitana-300x300.png\",\r\n\"ova\": 73,\r\n\"att\": 74,\r\n\"mid\": 73,\r\n\"def\": 71\r\n},\r\n{\r\n\"id\": 22,\r\n\"name\": \"Roma\",\r\n\"league\": \"Italian Serie A\",\r\n\"logo\": \"http://localhost:3000/public/images/logos/roma-300x300.png\",\r\n\"ova\": 80,\r\n\"att\": 82,\r\n\"mid\": 78,\r\n\"def\": 81\r\n}\r\n]\r\n}\r\n]', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-07 23:03:47', '2024-06-07 23:03:47');

-- --------------------------------------------------------

--
-- Table structure for table `match_type`
--

CREATE TABLE `match_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `match_type`
--

INSERT INTO `match_type` (`id`, `name`) VALUES
(1, 'League'),
(2, 'League + Knockout'),
(3, 'League + Knockout + Final'),
(4, 'Knockout'),
(5, 'Knockout + Final'),
(6, 'Friendly'),
(7, '1V1 8 Match Format');

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `image`, `avatar`) VALUES
(1, 'L. Messi', 'messi.png', ''),
(2, 'Neimar JR', 'neimar.png', ''),
(3, 'C. Ronaldo', 'ronaldo.png', NULL),
(4, 'K. Mbappe', 'mbappe.png', 'mbappe_avatar.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fifa_teams`
--
ALTER TABLE `fifa_teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fixture_type`
--
ALTER TABLE `fixture_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `forignkey` (`match_type`),
  ADD KEY `fixture_type` (`fixture_type`);

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game` (`game`);

--
-- Indexes for table `match_type`
--
ALTER TABLE `match_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fifa_teams`
--
ALTER TABLE `fifa_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=679;

--
-- AUTO_INCREMENT for table `fixture_type`
--
ALTER TABLE `fixture_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `matches`
--
ALTER TABLE `matches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `match_type`
--
ALTER TABLE `match_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `forignkey` FOREIGN KEY (`match_type`) REFERENCES `match_type` (`id`),
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`fixture_type`) REFERENCES `fixture_type` (`id`);

--
-- Constraints for table `matches`
--
ALTER TABLE `matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`game`) REFERENCES `games` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
