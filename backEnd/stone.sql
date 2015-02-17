-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2015 at 09:04 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `stone`
--
CREATE DATABASE IF NOT EXISTS `stone` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `stone`;

-- --------------------------------------------------------

--
-- Table structure for table `case`
--

CREATE TABLE IF NOT EXISTS `case` (
  `caseId` int(11) NOT NULL AUTO_INCREMENT COMMENT '案例ID',
  `title` varchar(64) NOT NULL COMMENT '案例名称',
  `caseType` varchar(64) NOT NULL COMMENT '案例类型',
  `caseTime` datetime NOT NULL COMMENT '案例时间',
  `inventoryId` int(11) NOT NULL COMMENT '用石种类，外键',
  `designerId` int(11) NOT NULL COMMENT '设计师，外键',
  `designerCompany` int(11) NOT NULL COMMENT '设计公司，外键',
  `companyId` int(11) NOT NULL COMMENT '供应公司',
  `description` text NOT NULL COMMENT '描述',
  `imageSmall` varchar(256) NOT NULL COMMENT '图片小',
  `imageMedium` varchar(256) NOT NULL COMMENT '图片中',
  `imageLarge` varchar(256) NOT NULL COMMENT '图片大',
  PRIMARY KEY (`caseId`),
  KEY `inventoryId` (`inventoryId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `case`
--

INSERT INTO `case` (`caseId`, `title`, `caseType`, `caseTime`, `inventoryId`, `designerId`, `designerCompany`, `companyId`, `description`, `imageSmall`, `imageMedium`, `imageLarge`) VALUES
(1, '酒店大堂', '', '2015-02-15 15:58:00', 1, 0, 1, 1, '牛逼不牛逼，你看这个地板砖，一个字：高大上。请尽情在上面摩擦！', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg'),
(2, '酒店房间', '', '2015-02-16 15:58:00', 2, 0, 2, 2, '你看这块大独板，没有做不到只有想不到', 'images/case/2_1440x1024.jpg', 'images/case/2_1440x1024.jpg', 'images/case/2_1440x1024.jpg'),
(3, '教学楼大厅', '', '2015-02-17 15:58:00', 3, 0, 3, 3, '你再来看这个大拼花，这弧度这力度，搭配黄金灯泡，逼格一下就凸显！', 'images/case/3_1440x1024.jpg', 'images/case/3_1440x1024.jpg', 'images/case/3_1440x1024.jpg'),
(4, '白宫会客厅', '', '2015-02-18 15:58:00', 4, 0, 4, 4, '我们这款黑石富于现代感，更富于传统气息，在这里，设计师们搭配了金属质感莲花，让酒店装潢显得与众不同！', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg'),
(5, '天安门城门', '', '2015-02-19 15:58:00', 1, 0, 1, 1, '牛逼不牛逼，你看这个地板砖，一个字：高大上。请尽情在上面摩擦！', 'images/case/2_1440x1024.jpg', 'images/case/2_1440x1024.jpg', 'images/case/2_1440x1024.jpg'),
(6, '少林寺武场', '', '2015-02-20 15:58:00', 2, 0, 2, 2, '你看这块大独板，没有做不到只有想不到', 'images/case/3_1440x1024.jpg', 'images/case/3_1440x1024.jpg', 'images/case/3_1440x1024.jpg'),
(7, '新闻直播厅', '', '2015-02-21 15:58:00', 3, 0, 3, 3, '你再来看这个大拼花，这弧度这力度，搭配黄金灯泡，逼格一下就凸显！', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg', 'images/case/1_1440x1024.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `companyId` int(11) NOT NULL AUTO_INCREMENT COMMENT '公司ID',
  `enAlias` varchar(32) NOT NULL COMMENT '英文简写',
  `cnAlias` varchar(32) NOT NULL COMMENT '中文简写',
  `enFullName` varchar(64) NOT NULL COMMENT '英文公司全称',
  `cnFullName` varchar(64) NOT NULL COMMENT '中文公司全称',
  `logoUrl` varchar(256) NOT NULL COMMENT '商标图片',
  `properties` varchar(256) NOT NULL COMMENT '公司属性(逗号分隔)',
  `categories` varchar(256) NOT NULL COMMENT '经营范围(逗号分隔)',
  `companyDescription` text NOT NULL COMMENT '公司宗旨',
  `companyDetail` text NOT NULL COMMENT '公司简介',
  `employeeAmount` int(11) NOT NULL COMMENT '公司规模',
  `foundDate` date NOT NULL COMMENT '成立日期',
  `address` varchar(256) NOT NULL COMMENT '公司地址',
  `nation` varchar(32) NOT NULL COMMENT '所在国家',
  `state` varchar(32) NOT NULL COMMENT '省/州',
  `city` varchar(32) NOT NULL COMMENT '市',
  `landLine` varchar(32) NOT NULL COMMENT '公司电话',
  `contactPerson` varchar(32) NOT NULL COMMENT '联系人姓名',
  `contactNumber` varchar(32) NOT NULL COMMENT '联系人电话',
  `website` varchar(256) NOT NULL COMMENT '公司主页',
  `email` varchar(256) NOT NULL COMMENT '邮箱',
  `craft` int(11) DEFAULT NULL COMMENT '工艺(外键)',
  PRIMARY KEY (`companyId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`companyId`, `enAlias`, `cnAlias`, `enFullName`, `cnFullName`, `logoUrl`, `properties`, `categories`, `companyDescription`, `companyDetail`, `employeeAmount`, `foundDate`, `address`, `nation`, `state`, `city`, `landLine`, `contactPerson`, `contactNumber`, `website`, `email`, `craft`) VALUES
(1, 'zhhj', '中恒汇金', 'Zhongheng Huijin Stone (Beijing) Co., Ltd.', '中恒汇金石业（北京）股份有限公司', 'images/logo/1.jpg', '股份/自有矿山/经销商', '大理石', '精诚所至 金石为开', '中恒汇金是集文化产业、金融投资、矿山开发、工业园区开发为一体的实业控股集团公司。营运总部设在首都CBD区亮马河大厦。\n  目前集团拥有中恒汇金（北京）股份有限公司、新疆汇金石业、库木塔格丽山矿区、汇金石业产业园区等机构。\n  中恒汇金石业（北京）股份有限公司是集矿山开采、生产加工、品牌运营、进出口贸易、仓储物流、技术研发及大型工程承接为一体的大型集团公司。公司所拥有的9.6平方公里新疆库木塔格戈壁丽山矿是中国最大的玉化大理石矿山，年开采荒料5万立方米，年加工大板能力达150万平方米，产品极具玉质纹理与花色，突显出其高贵典雅的气质。\n  公司在新疆鄯善县投资建设的汇金石业工业园，占地333.8亩，总投资规划2.6亿元人民币，并购置国内外先进的生产、加工、运输、检测、环保等设备。厂区总面积22.3万平方米，建筑面积12万平方米，设有办公楼、会所、高管楼、员工宿舍楼、生产加工车间以及娱乐区，将成为中国规模最大、设备最全的大理石生产加工基地。\n  中恒汇金以“创造财富 创意美好未来”为美好愿景，创造具有国际竞争力的多元化企业集团。', 500, '2012-09-22', '北京市朝阳区东三环北路8号亮马河大厦1座2层/The 2nd floor of Landmark building, No. 8, North Dongsanhuan Road,Chaoyang District, Beijing, China', '中国', '', '北京', '010-69750729', '王颖伟', '13718128622', 'www.marble-huijin.com', 'info@marble-huijin.com', NULL),
(2, 'hlqy', '华亮企业', 'Hualiang Stone Co., Ltd.', '华亮石材有限公司', 'images/logo/1.jpg', '有限责任,经销商', '大理石,花岗岩', '以品质传世 为未来造城', '这里是公司的介绍，公司的介绍\n  这里是公司的介绍，公司的介绍, 这里是公司的介绍，公司的介绍\n  这里是公司的介绍，公司的介绍这里是公司的介绍，公司的介绍。', 500, '2011-07-15', '叉烧区五花路10号回锅大厦5层404室', '中国', '', '南安', '010-69750729', '大宝', '13718128622', 'www.marble-huijin.com', 'info@marble-huijin.com', NULL),
(3, 'zhhj1', '中恒汇金', 'Zhongheng Huijin Stone (Beijing) Co., Ltd.', '中恒汇金石业（北京）股份有限公司', 'images/logo/1.jpg', '股份/自有矿山/经销商', '大理石', '精诚所至 金石为开', '中恒汇金是集文化产业、金融投资、矿山开发、工业园区开发为一体的实业控股集团公司。营运总部设在首都CBD区亮马河大厦。\n  目前集团拥有中恒汇金（北京）股份有限公司、新疆汇金石业、库木塔格丽山矿区、汇金石业产业园区等机构。\n  中恒汇金石业（北京）股份有限公司是集矿山开采、生产加工、品牌运营、进出口贸易、仓储物流、技术研发及大型工程承接为一体的大型集团公司。公司所拥有的9.6平方公里新疆库木塔格戈壁丽山矿是中国最大的玉化大理石矿山，年开采荒料5万立方米，年加工大板能力达150万平方米，产品极具玉质纹理与花色，突显出其高贵典雅的气质。\n  公司在新疆鄯善县投资建设的汇金石业工业园，占地333.8亩，总投资规划2.6亿元人民币，并购置国内外先进的生产、加工、运输、检测、环保等设备。厂区总面积22.3万平方米，建筑面积12万平方米，设有办公楼、会所、高管楼、员工宿舍楼、生产加工车间以及娱乐区，将成为中国规模最大、设备最全的大理石生产加工基地。\n  中恒汇金以“创造财富 创意美好未来”为美好愿景，创造具有国际竞争力的多元化企业集团。', 500, '2012-09-22', '北京市朝阳区东三环北路8号亮马河大厦1座2层/The 2nd floor of Landmark building, No. 8, North Dongsanhuan Road,Chaoyang District, Beijing, China', '中国', '', '北京', '010-69750729', '王颖伟', '13718128622', 'www.marble-huijin.com', 'info@marble-huijin.com', NULL),
(4, 'hlqy2', '华亮企业', 'Hualiang Stone Co., Ltd.', '华亮石材有限公司', 'images/logo/1.jpg', '有限责任,经销商', '大理石,花岗岩', '以品质传世 为未来造城', '这里是公司的介绍，公司的介绍\n  这里是公司的介绍，公司的介绍, 这里是公司的介绍，公司的介绍\n  这里是公司的介绍，公司的介绍这里是公司的介绍，公司的介绍。', 500, '2011-07-15', '叉烧区五花路10号回锅大厦5层404室', '中国', '', '南安', '010-69750729', '大宝', '13718128622', 'www.marble-huijin.com', 'info@marble-huijin.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE IF NOT EXISTS `inventory` (
  `inventoryId` int(11) NOT NULL AUTO_INCREMENT COMMENT '库存ID',
  `stoneId` int(11) NOT NULL COMMENT '石头ID(外键)',
  `companyId` int(11) NOT NULL COMMENT '公司ID(外键)',
  `mainColor` varchar(16) NOT NULL COMMENT '主要颜色(逗号分隔的r,g,b)',
  `veinColor` varchar(16) NOT NULL COMMENT '纹理颜色(逗号分隔的r,g,b)',
  `shipLocation` varchar(256) NOT NULL COMMENT '产地',
  `stoneBoardImageUrl` varchar(256) NOT NULL COMMENT '图片',
  `stoneProductImageUrl` varchar(256) NOT NULL COMMENT '产品图片',
  `standard` varchar(16) NOT NULL COMMENT '规格(123x456)',
  `storage` int(11) NOT NULL COMMENT '储存量',
  `price` double(11,2) NOT NULL COMMENT '价格',
  `fullName` varchar(64) NOT NULL COMMENT '存货名称',
  PRIMARY KEY (`inventoryId`),
  KEY `stoneId` (`stoneId`),
  KEY `companyId` (`companyId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventoryId`, `stoneId`, `companyId`, `mainColor`, `veinColor`, `shipLocation`, `stoneBoardImageUrl`, `stoneProductImageUrl`, `standard`, `storage`, `price`, `fullName`) VALUES
(1, 1, 1, '12,34,56', '78,9a,bc', '哪里啊？到底是哪里？', '[{image:''images/board/1.jpg'',text:''1''},{image:''images/board/2.jpg'',text:''2''},{image:''images/board/3.jpg'',text:''3''},{image:''images/board/4.jpg'',text:''4''}]', '[{image:''images/product/1.1200x800.jpg'',text:''1''},{image:''images/product/2.1200x800.jpg'',text:''2''},{image:''images/product/3.1200x800.jpg'',text:''3''},{image:''images/product/4.1200x800.jpg'',text:''4''}]', '456x789', 500, 110.00, ' '),
(2, 2, 2, '78,9a,bc', 'de,f0,12', '哪里啊？到底是哪里？', '[{image:''images/board/1.jpg'',text:''1''},{image:''images/board/2.jpg'',text:''2''},{image:''images/board/3.jpg'',text:''3''},{image:''images/board/4.jpg'',text:''5''}]', '[{image:''images/product/1.1200x800.jpg'',text:''1''},{image:''images/product/2.1200x800.jpg'',text:''2''},{image:''images/product/3.1200x800.jpg'',text:''3''},{image:''images/product/4.1200x800.jpg'',text:''5''}]', '456x790', 500, 110.00, ' '),
(3, 3, 3, 'de,f0,12', '34,56,78', '哪里啊？到底是哪里？', '[{image:''images/board/1.jpg'',text:''1''},{image:''images/board/2.jpg'',text:''2''},{image:''images/board/3.jpg'',text:''3''},{image:''images/board/4.jpg'',text:''6''}]', '[{image:''images/product/1.1200x800.jpg'',text:''1''},{image:''images/product/2.1200x800.jpg'',text:''2''},{image:''images/product/3.1200x800.jpg'',text:''3''},{image:''images/product/4.1200x800.jpg'',text:''6''}]', '456x791', 500, 110.00, ' '),
(4, 4, 4, '34,56,78', '12,34,56', '哪里啊？到底是哪里？', '[{image:''images/board/1.jpg'',text:''1''},{image:''images/board/2.jpg'',text:''2''},{image:''images/board/3.jpg'',text:''3''},{image:''images/board/4.jpg'',text:''7''}]', '[{image:''images/product/1.1200x800.jpg'',text:''1''},{image:''images/product/2.1200x800.jpg'',text:''2''},{image:''images/product/3.1200x800.jpg'',text:''3''},{image:''images/product/4.1200x800.jpg'',text:''7''}]', '456x792', 500, 110.00, ' ');

-- --------------------------------------------------------

--
-- Table structure for table `stone`
--

CREATE TABLE IF NOT EXISTS `stone` (
  `stoneId` int(11) NOT NULL AUTO_INCREMENT COMMENT '石头ID',
  `stoneCode` varchar(16) NOT NULL COMMENT '石头编码(国家统一)',
  `fullName` varchar(64) NOT NULL COMMENT '石头名称',
  `nickName` varchar(32) NOT NULL COMMENT '石头简称',
  `stoneCategory` varchar(32) NOT NULL COMMENT '石头类型(如大理石)',
  `originLocation` varchar(256) NOT NULL COMMENT '产地',
  `description` text NOT NULL COMMENT '描述',
  `mainImage` varchar(256) NOT NULL COMMENT '主图',
  PRIMARY KEY (`stoneId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=149 ;

--
-- Dumping data for table `stone`
--

INSERT INTO `stone` (`stoneId`, `stoneCode`, `fullName`, `nickName`, `stoneCategory`, `originLocation`, `description`, `mainImage`) VALUES
(1, 'SB001', '戈壁彩', '', '大理石', '新疆', '来自新疆的戈壁彩颜色的大理石', 'images/board/1.jpg'),
(2, 'SB002', '金丝银灰', '', '大理石', '新疆', '来自新疆的金丝银灰颜色的大理石', 'images/board/2.jpg'),
(3, 'SB003', '蓝色星球', '', '大理石', '新疆', '来自新疆的蓝色星球颜色的大理石', 'images/board/3.jpg'),
(4, 'SB004', '玛瑙红', '', '大理石', '新疆', '来自新疆的玛瑙红颜色的大理石', 'images/board/4.jpg'),
(5, 'SB005', '梦幻蓝', '', '大理石', '新疆', '来自新疆的梦幻蓝颜色的大理石', 'images/board/1.jpg'),
(6, 'SB006', '树化玉', '', '大理石', '新疆', '来自新疆的树化玉颜色的大理石', 'images/board/2.jpg'),
(7, 'SB007', '午夜星河', '', '大理石', '新疆', '来自新疆的午夜星河颜色的大理石', 'images/board/3.jpg'),
(8, 'SB008', '银河灰', '', '大理石', '新疆', '来自新疆的银河灰颜色的大理石', 'images/board/4.jpg'),
(9, 'SB009', '阿波罗', '', '大理石', '云南', '来自云南的阿波罗颜色的大理石', 'images/board/1.jpg'),
(10, 'SB010', '阿伯利米黄', '', '大理石', '云南', '来自云南的阿伯利米黄颜色的大理石', 'images/board/2.jpg'),
(11, 'SB011', '阿富汗金', '', '大理石', '云南', '来自云南的阿富汗金颜色的大理石', 'images/board/3.jpg'),
(12, 'SB012', '阿曼米黄', '', '大理石', '云南', '来自云南的阿曼米黄颜色的大理石', 'images/board/4.jpg'),
(13, 'SB013', '安格拉 angela', '', '大理石', '云南', '来自云南的安格拉 angela颜色的大理石', 'images/board/1.jpg'),
(14, 'SB014', '安卡拉米黄 ankara beige', '', '大理石', '云南', '来自云南的安卡拉米黄 ankara beige颜色的大理石', 'images/board/2.jpg'),
(15, 'SB015', '安娜米黄 anna cream', '', '大理石', '云南', '来自云南的安娜米黄 anna cream颜色的大理石', 'images/board/3.jpg'),
(16, 'SB016', '奥斯卡米黄', '', '大理石', '云南', '来自云南的奥斯卡米黄颜色的大理石', 'images/board/4.jpg'),
(17, 'SB017', '奥特曼', '', '大理石', '云南', '来自云南的奥特曼颜色的大理石', 'images/board/1.jpg'),
(18, 'SB018', '白宫米黄', '', '大理石', '云南', '来自云南的白宫米黄颜色的大理石', 'images/board/2.jpg'),
(19, 'SB019', '白海棠', '', '大理石', '云南', '来自云南的白海棠颜色的大理石', 'images/board/3.jpg'),
(20, 'SB020', '白沙米黄limestone', '', '大理石', '云南', '来自云南的白沙米黄limestone颜色的大理石', 'images/board/4.jpg'),
(21, 'SB021', '白玉兰 white cream', '', '大理石', '云南', '来自云南的白玉兰 white cream颜色的大理石', 'images/board/1.jpg'),
(22, 'SB022', '宝丽雅', '', '大理石', '云南', '来自云南的宝丽雅颜色的大理石', 'images/board/2.jpg'),
(23, 'SB023', '保罗灰', '', '大理石', '云南', '来自云南的保罗灰颜色的大理石', 'images/board/3.jpg'),
(24, 'SB024', '北欧米黄nordic cream', '', '大理石', '云南', '来自云南的北欧米黄nordic cream颜色的大理石', 'images/board/4.jpg'),
(25, 'SB025', '贝沙金', '', '大理石', '云南', '来自云南的贝沙金颜色的大理石', 'images/board/1.jpg'),
(26, 'SB026', '彩虹米黄 rainbow beige', '', '大理石', '云南', '来自云南的彩虹米黄 rainbow beige颜色的大理石', 'images/board/2.jpg'),
(27, 'SB027', '嫦娥米黄 chang''e beige', '', '大理石', '云南', '来自云南的嫦娥米黄 chang''e beige颜色的大理石', 'images/board/3.jpg'),
(28, 'SB028', '超级雅米黄 super century cream', '', '大理石', '云南', '来自云南的超级雅米黄 super century cream颜色的大理石', 'images/board/4.jpg'),
(29, 'SB029', '橙玉石', '', '大理石', '云南', '来自云南的橙玉石颜色的大理石', 'images/board/1.jpg'),
(30, 'SB030', '大花绿', '', '大理石', '云南', '来自云南的大花绿颜色的大理石', 'images/board/2.jpg'),
(31, 'SB031', '德国米黄', '', '大理石', '云南', '来自云南的德国米黄颜色的大理石', 'images/board/3.jpg'),
(32, 'SB032', '帝后金', '', '大理石', '云南', '来自云南的帝后金颜色的大理石', 'images/board/4.jpg'),
(33, 'SB033', '鹅毛金', '', '大理石', '云南', '来自云南的鹅毛金颜色的大理石', 'images/board/1.jpg'),
(34, 'SB034', '东尼米黄', '', '大理石', '云南', '来自云南的东尼米黄颜色的大理石', 'images/board/2.jpg'),
(35, 'SB035', '帝皇金', '', '大理石', '云南', '来自云南的帝皇金颜色的大理石', 'images/board/3.jpg'),
(36, 'SB036', '法国金花', '', '大理石', '云南', '来自云南的法国金花颜色的大理石', 'images/board/4.jpg'),
(37, 'SB037', '法国流金', '', '大理石', '云南', '来自云南的法国流金颜色的大理石', 'images/board/1.jpg'),
(38, 'SB038', '法国米黄', '', '大理石', '云南', '来自云南的法国米黄颜色的大理石', 'images/board/2.jpg'),
(39, 'SB039', '法国木纹', '', '大理石', '云南', '来自云南的法国木纹颜色的大理石', 'images/board/3.jpg'),
(40, 'SB040', '法兰米黄', '', '大理石', '云南', '来自云南的法兰米黄颜色的大理石', 'images/board/4.jpg'),
(41, 'SB041', '梵高皇', '', '大理石', '云南', '来自云南的梵高皇颜色的大理石', 'images/board/1.jpg'),
(42, 'SB042', '啡贝花', '', '大理石', '云南', '来自云南的啡贝花颜色的大理石', 'images/board/2.jpg'),
(43, 'SB043', '啡水晶', '', '大理石', '云南', '来自云南的啡水晶颜色的大理石', 'images/board/3.jpg'),
(44, 'SB044', '啡网', '', '大理石', '云南', '来自云南的啡网颜色的大理石', 'images/board/4.jpg'),
(45, 'SB045', '粉红罗莎', '', '大理石', '云南', '来自云南的粉红罗莎颜色的大理石', 'images/board/1.jpg'),
(46, 'SB046', '古堡灰', '', '大理石', '云南', '来自云南的古堡灰颜色的大理石', 'images/board/2.jpg'),
(47, 'SB047', '古木纹', '', '大理石', '云南', '来自云南的古木纹颜色的大理石', 'images/board/3.jpg'),
(48, 'SB048', '黑金花', '', '大理石', '云南', '来自云南的黑金花颜色的大理石', 'images/board/4.jpg'),
(49, 'SB049', '黑金伦', '', '大理石', '云南', '来自云南的黑金伦颜色的大理石', 'images/board/1.jpg'),
(50, 'SB050', '红龙玉', '', '大理石', '云南', '来自云南的红龙玉颜色的大理石', 'images/board/2.jpg'),
(51, 'SB051', '红玫瑰', '', '大理石', '广西', '来自广西的红玫瑰颜色的大理石', 'images/board/3.jpg'),
(52, 'SB052', '红木纹', '', '大理石', '广西', '来自广西的红木纹颜色的大理石', 'images/board/4.jpg'),
(53, 'SB053', '皇冠米黄', '', '大理石', '广西', '来自广西的皇冠米黄颜色的大理石', 'images/board/1.jpg'),
(54, 'SB054', '黄金桂', '', '大理石', '广西', '来自广西的黄金桂颜色的大理石', 'images/board/2.jpg'),
(55, 'SB055', '黄金玉', '', '大理石', '广西', '来自广西的黄金玉颜色的大理石', 'images/board/3.jpg'),
(56, 'SB056', '灰姑娘', '', '大理石', '广西', '来自广西的灰姑娘颜色的大理石', 'images/board/4.jpg'),
(57, 'SB057', '灰黄玉', '', '大理石', '广西', '来自广西的灰黄玉颜色的大理石', 'images/board/1.jpg'),
(58, 'SB058', '灰木纹', '', '大理石', '广西', '来自广西的灰木纹颜色的大理石', 'images/board/2.jpg'),
(59, 'SB059', '金年华', '', '大理石', '广西', '来自广西的金年华颜色的大理石', 'images/board/3.jpg'),
(60, 'SB060', '金世纪米黄', '', '大理石', '广西', '来自广西的金世纪米黄颜色的大理石', 'images/board/4.jpg'),
(61, 'SB061', '金丝洞', '', '大理石', '广西', '来自广西的金丝洞颜色的大理石', 'images/board/1.jpg'),
(62, 'SB062', '金镶玉', '', '大理石', '广西', '来自广西的金镶玉颜色的大理石', 'images/board/2.jpg'),
(63, 'SB063', '金叶米黄', '', '大理石', '广西', '来自广西的金叶米黄颜色的大理石', 'images/board/3.jpg'),
(64, 'SB064', '旧米黄 botticino', '', '大理石', '广西', '来自广西的旧米黄 botticino颜色的大理石', 'images/board/4.jpg'),
(65, 'SB065', '菊花米黄', '', '大理石', '广西', '来自广西的菊花米黄颜色的大理石', 'images/board/1.jpg'),
(66, 'SB066', '橘皮红', '', '大理石', '广西', '来自广西的橘皮红颜色的大理石', 'images/board/2.jpg'),
(67, 'SB067', '爵士白volakas', '', '大理石', '广西', '来自广西的爵士白volakas颜色的大理石', 'images/board/3.jpg'),
(68, 'SB068', '爵士灰', '', '大理石', '广西', '来自广西的爵士灰颜色的大理石', 'images/board/4.jpg'),
(69, 'SB069', '卡布奇诺', '', '大理石', '广西', '来自广西的卡布奇诺颜色的大理石', 'images/board/1.jpg'),
(70, 'SB070', '卡琳娜', '', '大理石', '广西', '来自广西的卡琳娜颜色的大理石', 'images/board/2.jpg'),
(71, 'SB071', '卡洛米黄', '', '大理石', '广西', '来自广西的卡洛米黄颜色的大理石', 'images/board/3.jpg'),
(72, 'SB072', '卡佐灰', '', '大理石', '广西', '来自广西的卡佐灰颜色的大理石', 'images/board/4.jpg'),
(73, 'SB073', '凯撒灰', '', '大理石', '广西', '来自广西的凯撒灰颜色的大理石', 'images/board/1.jpg'),
(74, 'SB074', '凯悦红', '', '大理石', '广西', '来自广西的凯悦红颜色的大理石', 'images/board/2.jpg'),
(75, 'SB075', '克罗地亚', '', '大理石', '广西', '来自广西的克罗地亚颜色的大理石', 'images/board/3.jpg'),
(76, 'SB076', '莱卡米黄', '', '大理石', '广西', '来自广西的莱卡米黄颜色的大理石', 'images/board/4.jpg'),
(77, 'SB077', '蓝色妖姬', '', '大理石', '广西', '来自广西的蓝色妖姬颜色的大理石', 'images/board/1.jpg'),
(78, 'SB078', '林肯米黄', '', '大理石', '广西', '来自广西的林肯米黄颜色的大理石', 'images/board/2.jpg'),
(79, 'SB079', '玛瑙绿', '', '大理石', '广西', '来自广西的玛瑙绿颜色的大理石', 'images/board/3.jpg'),
(80, 'SB080', '玛雅米黄', '', '大理石', '广西', '来自广西的玛雅米黄颜色的大理石', 'images/board/4.jpg'),
(81, 'SB081', '美尼斯金', '', '大理石', '广西', '来自广西的美尼斯金颜色的大理石', 'images/board/1.jpg'),
(82, 'SB082', '米黄洞石', '', '大理石', '广西', '来自广西的米黄洞石颜色的大理石', 'images/board/2.jpg'),
(83, 'SB083', '缅甸绿', '', '大理石', '广西', '来自广西的缅甸绿颜色的大理石', 'images/board/3.jpg'),
(84, 'SB084', '莫妮卡红', '', '大理石', '广西', '来自广西的莫妮卡红颜色的大理石', 'images/board/4.jpg'),
(85, 'SB085', '莫妮卡兰', '', '大理石', '广西', '来自广西的莫妮卡兰颜色的大理石', 'images/board/1.jpg'),
(86, 'SB086', '木化石 moca cream', '', '大理石', '广西', '来自广西的木化石 moca cream颜色的大理石', 'images/board/2.jpg'),
(87, 'SB087', '木纹玉', '', '大理石', '广西', '来自广西的木纹玉颜色的大理石', 'images/board/3.jpg'),
(88, 'SB088', '奶油玫瑰 rose cream', '', '大理石', '广西', '来自广西的奶油玫瑰 rose cream颜色的大理石', 'images/board/4.jpg'),
(89, 'SB089', '挪威红', '', '大理石', '广西', '来自广西的挪威红颜色的大理石', 'images/board/1.jpg'),
(90, 'SB090', '诺娃米黄 nova beige', '', '大理石', '广西', '来自广西的诺娃米黄 nova beige颜色的大理石', 'images/board/2.jpg'),
(91, 'SB091', '欧陆米黄 continental beige', '', '大理石', '广西', '来自广西的欧陆米黄 continental beige颜色的大理石', 'images/board/3.jpg'),
(92, 'SB092', '葡萄米黄 grape beige', '', '大理石', '广西', '来自广西的葡萄米黄 grape beige颜色的大理石', 'images/board/4.jpg'),
(93, 'SB093', '浅啡网', '', '大理石', '广西', '来自广西的浅啡网颜色的大理石', 'images/board/1.jpg'),
(94, 'SB094', '人造洞石 artificial travertino', '', '大理石', '广西', '来自广西的人造洞石 artificial travertino颜色的大理石', 'images/board/2.jpg'),
(95, 'SB095', '塞纳金', '', '大理石', '广西', '来自广西的塞纳金颜色的大理石', 'images/board/3.jpg'),
(96, 'SB096', '沙粒米黄 sand beige', '', '大理石', '广西', '来自广西的沙粒米黄 sand beige颜色的大理石', 'images/board/4.jpg'),
(97, 'SB097', '沙漠金', '', '大理石', '广西', '来自广西的沙漠金颜色的大理石', 'images/board/1.jpg'),
(98, 'SB098', '沙漠米黄 desert beige', '', '大理石', '广西', '来自广西的沙漠米黄 desert beige颜色的大理石', 'images/board/2.jpg'),
(99, 'SB099', '莎安娜米黄 royal botticino', '', '大理石', '广西', '来自广西的莎安娜米黄 royal botticino颜色的大理石', 'images/board/3.jpg'),
(100, 'SB100', '深啡网', '', '大理石', '广西', '来自广西的深啡网颜色的大理石', 'images/board/4.jpg'),
(101, 'SB101', '世纪米黄', '', '大理石', '广西', '来自广西的世纪米黄颜色的大理石', 'images/board/1.jpg'),
(102, 'SB102', '松香玉', '', '大理石', '广西', '来自广西的松香玉颜色的大理石', 'images/board/2.jpg'),
(103, 'SB103', '太空灰', '', '大理石', '广西', '来自广西的太空灰颜色的大理石', 'images/board/3.jpg'),
(104, 'SB104', '太阳米黄 sum beige', '', '大理石', '广西', '来自广西的太阳米黄 sum beige颜色的大理石', 'images/board/4.jpg'),
(105, 'SB105', '瓦伦西亚黄', '', '大理石', '广西', '来自广西的瓦伦西亚黄颜色的大理石', 'images/board/1.jpg'),
(106, 'SB106', '西班牙米黄 crema marfil', '', '大理石', '广西', '来自广西的西班牙米黄 crema marfil颜色的大理石', 'images/board/2.jpg'),
(107, 'SB107', '西西里米黄', '', '大理石', '广西', '来自广西的西西里米黄颜色的大理石', 'images/board/3.jpg'),
(108, 'SB108', '西耶那金', '', '大理石', '广西', '来自广西的西耶那金颜色的大理石', 'images/board/4.jpg'),
(109, 'SB109', '香波米黄', '', '大理石', '广西', '来自广西的香波米黄颜色的大理石', 'images/board/1.jpg'),
(110, 'SB110', '香木米黄', '', '大理石', '广西', '来自广西的香木米黄颜色的大理石', 'images/board/2.jpg'),
(111, 'SB111', '新格利', '', '大理石', '广西', '来自广西的新格利颜色的大理石', 'images/board/3.jpg'),
(112, 'SB112', '新欧亚米黄 new octavia beige', '', '大理石', '广西', '来自广西的新欧亚米黄 new octavia beige颜色的大理石', 'images/board/4.jpg'),
(113, 'SB113', '新雅米黄 mila cream', '', '大理石', '广西', '来自广西的新雅米黄 mila cream颜色的大理石', 'images/board/1.jpg'),
(114, 'SB114', '雅典洞石', '', '大理石', '广西', '来自广西的雅典洞石颜色的大理石', 'images/board/2.jpg'),
(115, 'SB115', '雅典啡', '', '大理石', '广西', '来自广西的雅典啡颜色的大理石', 'images/board/3.jpg'),
(116, 'SB116', '雅典米黄 athens beige', '', '大理石', '广西', '来自广西的雅典米黄 athens beige颜色的大理石', 'images/board/4.jpg'),
(117, 'SB117', '雅士红', '', '大理石', '广西', '来自广西的雅士红颜色的大理石', 'images/board/1.jpg'),
(118, 'SB118', '亚伦米黄 allen beige', '', '大理石', '广西', '来自广西的亚伦米黄 allen beige颜色的大理石', 'images/board/2.jpg'),
(119, 'SB119', '意大利黑金花', '', '大理石', '广西', '来自广西的意大利黑金花颜色的大理石', 'images/board/3.jpg'),
(120, 'SB120', '意大利灰italian grey', '', '大理石', '广西', '来自广西的意大利灰italian grey颜色的大理石', 'images/board/4.jpg'),
(121, 'SB121', '意大利木纹', '', '大理石', '四川', '来自四川的意大利木纹颜色的大理石', 'images/board/1.jpg'),
(122, 'SB122', '银貂', '', '大理石', '四川', '来自四川的银貂颜色的大理石', 'images/board/2.jpg'),
(123, 'SB123', '印尼西米', '', '大理石', '四川', '来自四川的印尼西米颜色的大理石', 'images/board/3.jpg'),
(124, 'SB124', '英格兰米黄 england beige', '', '大理石', '四川', '来自四川的英格兰米黄 england beige颜色的大理石', 'images/board/4.jpg'),
(125, 'SB125', '云多拉灰', '', '大理石', '四川', '来自四川的云多拉灰颜色的大理石', 'images/board/1.jpg'),
(126, 'SB126', '蜘蛛玉', '', '大理石', '四川', '来自四川的蜘蛛玉颜色的大理石', 'images/board/2.jpg'),
(127, 'SB127', '直纹白marmara white', '', '大理石', '四川', '来自四川的直纹白marmara white颜色的大理石', 'images/board/3.jpg'),
(128, 'SB128', '中东米黄', '', '大理石', '四川', '来自四川的中东米黄颜色的大理石', 'images/board/4.jpg'),
(129, 'SB129', '中欧米黄', '', '大理石', '四川', '来自四川的中欧米黄颜色的大理石', 'images/board/1.jpg'),
(130, 'SB130', '紫罗红', '', '大理石', '四川', '来自四川的紫罗红颜色的大理石', 'images/board/2.jpg'),
(131, 'SB131', '晋江巴厝白', '', '花岗岩', '四川', '来自四川的晋江巴厝白颜色的花岗岩', 'images/board/3.jpg'),
(132, 'SB132', '安溪红', '', '花岗岩', '四川', '来自四川的安溪红颜色的花岗岩', 'images/board/4.jpg'),
(133, 'SB133', '啡钻', '', '花岗岩', '四川', '来自四川的啡钻颜色的花岗岩', 'images/board/1.jpg'),
(134, 'SB134', '黑金沙', '', '花岗岩', '四川', '来自四川的黑金沙颜色的花岗岩', 'images/board/2.jpg'),
(135, 'SB135', '红钻', '', '花岗岩', '四川', '来自四川的红钻颜色的花岗岩', 'images/board/3.jpg'),
(136, 'SB136', '幻彩红', '', '花岗岩', '四川', '来自四川的幻彩红颜色的花岗岩', 'images/board/4.jpg'),
(137, 'SB137', '皇室啡', '', '花岗岩', '四川', '来自四川的皇室啡颜色的花岗岩', 'images/board/1.jpg'),
(138, 'SB138', '黄金麻', '', '花岗岩', '四川', '来自四川的黄金麻颜色的花岗岩', 'images/board/2.jpg'),
(139, 'SB139', '黄金钻', '', '花岗岩', '四川', '来自四川的黄金钻颜色的花岗岩', 'images/board/3.jpg'),
(140, 'SB140', '金丝缎', '', '花岗岩', '四川', '来自四川的金丝缎颜色的花岗岩', 'images/board/4.jpg'),
(141, 'SB141', '金钻麻', '', '花岗岩', '四川', '来自四川的金钻麻颜色的花岗岩', 'images/board/1.jpg'),
(142, 'SB142', '绿星', '', '花岗岩', '四川', '来自四川的绿星颜色的花岗岩', 'images/board/2.jpg'),
(143, 'SB143', '美国白麻', '', '花岗岩', '四川', '来自四川的美国白麻颜色的花岗岩', 'images/board/3.jpg'),
(144, 'SB144', '蒙古黑', '', '花岗岩', '四川', '来自四川的蒙古黑颜色的花岗岩', 'images/board/4.jpg'),
(145, 'SB145', '世贸金麻', '', '花岗岩', '四川', '来自四川的世贸金麻颜色的花岗岩', 'images/board/1.jpg'),
(146, 'SB146', '印度白金', '', '花岗岩', '四川', '来自四川的印度白金颜色的花岗岩', 'images/board/2.jpg'),
(147, 'SB147', '印度红', '', '花岗岩', '四川', '来自四川的印度红颜色的花岗岩', 'images/board/3.jpg'),
(148, 'SB148', '英国棕', '', '花岗岩', '四川', '来自四川的英国棕颜色的花岗岩', 'images/board/4.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `case`
--
ALTER TABLE `case`
  ADD CONSTRAINT `case_ibfk_1` FOREIGN KEY (`inventoryId`) REFERENCES `inventory` (`inventoryId`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`stoneId`) REFERENCES `stone` (`stoneId`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`companyId`) REFERENCES `company` (`companyId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

grant all privileges on stone.* to 'stone'@'%' identified by 'stone123';
