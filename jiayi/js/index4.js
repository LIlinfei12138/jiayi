function appendEmptyEle(number, target, content) {
	for (var i = 0; i < number; i++) {
		$(target).append(content);
	}
}
var flag = true;
var tiexinData = [{
	"imgUrl": "./img/index4/tieXin/1.jpg",
	"imgName": "便携折叠式双肩包 黑色",
	"country": "",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/tieXin/2.jpg",
	"imgName": "太空记忆护颈枕 灰色",
	"country": "Travel Blue·英国",
	"money": "￥248.00"
}, {
	"imgUrl": "./img/index4/tieXin/3.jpg",
	"imgName": "太空记忆护颈枕 紫色",
	"country": "Travel Blue·英国",
	"money": "￥248.00"
}, {
	"imgUrl": "./img/index4/tieXin/4.jpg",
	"imgName": "太空记忆护颈枕 蓝色",
	"country": "Travel  Blue·英国",
	"money": "￥248.00"
}, {
	"imgUrl": "./img/index4/tieXin/5.jpg",
	"imgName": "舒适旅行2件套 蓝色",
	"country": "Travel Blue·英国",
	"money": "￥148.00"
}, {
	"imgUrl": "./img/index4/tieXin/6.jpg",
	"imgName": "微珠填充颈枕 黑色",
	"country": "Travel Blue·英国",
	"money": "￥138.00"
}, {
	"imgUrl": "./img/index4/tieXin/7.jpg",
	"imgName": "舒适旅行宁静2件套 蓝色",
	"country": "",
	"money": "68.00 "
}, {
	"imgUrl": "./img/index4/tieXin/8.jpg",
	"imgName": "舒适旅行宁静2件套 蓝色",
	"country": "",
	"money": "￥68.00"
}, {
	"imgUrl": "./img/index4/tieXin/9.jpg",
	"imgName": "舒适透气3D眼罩 蓝色",
	"country": "Travel  Blue·英国",
	"money": "￥118.00"
}, {
	"imgUrl": "./img/index4/tieXin/10.jpg",
	"imgName": "多功能挎包 黑色",
	"country": "Travel  Blue·英国",
	"money": "￥248.00"
}, {
	"imgUrl": "./img/index4/tieXin/11.jpg",
	"imgName": "万用转换插座 白色",
	"country": "Travel Blue·英国",
	"money": "￥228.00"
}, {
	"imgUrl": "./img/index4/tieXin/12.jpg",
	"imgName": "双USB万用转换插座 白色",
	"country": "",
	"money": "￥128.00"
}, {
	"imgUrl": "./img/index4/tieXin/13.jpg",
	"imgName": "双USB车载充电器 白色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/14.jpg",
	"imgName": "2合1汽车逃生破窗器 红色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/15.jpg",
	"imgName": "2合1汽车逃生破窗器 黑色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/16.jpg",
	"imgName": "2合1汽车逃生破窗器 蓝色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/17.jpg",
	"imgName": "2合1汽车逃生破窗器 绿色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/18.jpg",
	"imgName": "2合1汽车逃生破窗器 橙色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/19.jpg",
	"imgName": "2合1汽车逃生破窗器 黄色",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/20.jpg",
	"imgName": "声波驱蚊器  钥匙款-金",
	"country": "tronix plus·韩国",
	"money": "￥258.00"
}, {
	"imgUrl": "./img/index4/tieXin/21.jpg",
	"imgName": "声波驱蚊器  钥匙款-银",
	"country": "tronix plus·韩国",
	"money": "￥258.00"
}, {
	"imgUrl": "./img/index4/tieXin/22.jpg",
	"imgName": "不脏手马桶翻盖把手 绿色",
	"country": "Jiae·中国",
	"money": "￥58.00"
}, {
	"imgUrl": "./img/index4/tieXin/23.jpg",
	"imgName": "自动弹升纸巾盒 绿色",
	"country": "Unique Art·台湾",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/tieXin/24.jpg",
	"imgName": "自动弹升纸巾盒 青绿色",
	"country": "Unique Art·台湾",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/tieXin/25.jpg",
	"imgName": "自动弹升纸巾盒 玫红色",
	"country": "Unique Art·台湾",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/tieXin/26.jpg",
	"imgName": "小牛自动按压牙签盒 红色",
	"country": "Artiart·台湾",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/tieXin/27.jpg",
	"imgName": "磁吸式漱口杯套装 粉色",
	"country": "Unique Art·台湾",
	"money": "￥130.00"
}, {
	"imgUrl": "./img/index4/tieXin/28.jpg",
	"imgName": "小牛自动按压牙签盒 白色",
	"country": "Artiart·台湾",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/tieXin/29.jpg",
	"imgName": "优雅月桂照片树 大号",
	"country": "Umbra·加拿大",
	"money": "￥139.00"
}, {
	"imgUrl": "./img/index4/tieXin/30.jpg",
	"imgName": "优雅月桂照片树 小号",
	"country": "Umbra·加拿大",
	"money": "￥79.00"
}, {
	"imgUrl": "./img/index4/tieXin/31.jpg",
	"imgName": "枕头通风晾晒架(2只装) 绿色",
	"country": "纳川·中国",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/tieXin/32.jpg",
	"imgName": "枕头通风晾晒架(2只装) 粉色",
	"country": "纳川·中国",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/tieXin/33.jpg",
	"imgName": "枕头通风晾晒架(2只装) 蓝色",
	"country": "纳川·中国",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/tieXin/34.jpg",
	"imgName": "小狗PP纸巾盒 绿色",
	"country": "纳川·中国",
	"money": "￥35.00"
}, {
	"imgUrl": "./img/index4/tieXin/35.jpg",
	"imgName": "小狗PP纸巾盒 蓝色",
	"country": "纳川·中国",
	"money": "￥35.00"
}, {
	"imgUrl": "./img/index4/tieXin/36.jpg",
	"imgName": "零食五格干果盒 红色",
	"country": "Artiart·台湾",
	"money": "￥209.00"
}, {
	"imgUrl": "./img/index4/tieXin/37.jpg",
	"imgName": "瀑布台式相片架",
	"country": "Umbra·加拿大",
	"money": "￥229.00"
}, {
	"imgUrl": "./img/index4/tieXin/38.jpg",
	"imgName": "软木护照包 软木",
	"country": "shuter·中国",
	"money": "￥159.00"
}, {
	"imgUrl": "./img/index4/tieXin/39.jpg",
	"imgName": "软木卡包 软木",
	"country": "shuter·中国",
	"money": "￥89.00"
}, {
	"imgUrl": "./img/index4/tieXin/40.jpg",
	"imgName": "匹诺曹原木纸巾盒  ",
	"country": "shuter·中国",
	"money": "￥128.00"
}, {
	"imgUrl": "./img/index4/tieXin/41.jpg",
	"imgName": "红绸礼物带 红色",
	"country": "MONKEY.B·以色列",
	"money": "￥90.00"
}, {
	"imgUrl": "./img/index4/tieXin/42.jpg",
	"imgName": "卡通创意飞碟包 黑色",
	"country": "Jiae·中国",
	"money": "￥85.00"
}, {
	"imgUrl": "./img/index4/tieXin/43.jpg",
	"imgName": "卡通创意卡夹",
	"country": "Jiae·中国",
	"money": "￥49.00"
}, {
	"imgUrl": "./img/index4/tieXin/44.jpg",
	"imgName": "卡通创意名片盒",
	"country": "Jiae·中国",
	"money": "￥49.00"
}, {
	"imgUrl": "./img/index4/tieXin/45.jpg",
	"imgName": "卡通创意小号钱包 黑色",
	"country": "Jiae·中国",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/tieXin/46.jpg",
	"imgName": "卡通创意帆布包",
	"country": "Jiae·中国",
	"money": "￥84.00"
}, {
	"imgUrl": "./img/index4/tieXin/47.jpg",
	"imgName": "卡通创意T恤  男款",
	"country": "Jiae·中国",
	"money": "￥90.00"
}, {
	"imgUrl": "./img/index4/tieXin/48.jpg",
	"imgName": "卡通创意T恤  女款",
	"country": "Jiae·中国",
	"money": "￥90.00"
}, {
	"imgUrl": "./img/index4/tieXin/49.jpg",
	"imgName": "防水腰包 蓝色",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, {
	"imgUrl": "./img/index4/tieXin/50.jpg",
	"imgName": "手持望眼镜",
	"country": "Jiae·中国",
	"money": "￥98.00"
}, {
	"imgUrl": "./img/index4/tieXin/51.jpg",
	"imgName": " 手持led发光风扇 蓝色",
	"country": "Jiae·中国",
	"money": "￥35.00"
}, {
	"imgUrl": "./img/index4/tieXin/52.jpg",
	"imgName": "蘑菇人方吉玩偶",
	"country": "Jiae·中国",
	"money": "￥35.00"
}, {
	"imgUrl": "./img/index4/tieXin/53.jpg",
	"imgName": "可挂式防潮除湿剂 4袋-绿 ",
	"country": "Jiae·中国",
	"money": "￥188.00"
}, {
	"imgUrl": "./img/index4/tieXin/54.jpg",
	"imgName": "活字印章 印章",
	"country": "Mine·西班牙",
	"money": "￥168.00"
}, {
	"imgUrl": "./img/index4/tieXin/55.jpg",
	"imgName": "活字印章 配套墨盒",
	"country": "Mine·西班牙",
	"money": "￥28.00"
}, {
	"imgUrl": "./img/index4/tieXin/56.jpg",
	"imgName": "少林功夫门挡",
	"country": "E-PALACE·中国",
	"money": "￥36.00"
}, {
	"imgUrl": "./img/index4/tieXin/57.jpg",
	"imgName": "太空记忆舒压颈枕 灰色色",
	"country": "Jiae·中国",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/tieXin/58.jpg",
	"imgName": "太空记忆舒压颈枕 蓝色",
	"country": "Jiae·中国",
	"money": "￥99.00"
}];
// $.each(tiexinData, function(idx, item) {
// 	$("#nav1-data>ul").append("<li class='out-li'>" +
// 		"<a href='#' class='left-move'>" +
// 		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
// 		"</a>" +
// 		"<div>" +
// 		"<div class='flex-justify-content'>" +
// 		"<a class='hover-red' href='#'>" +
// 		item.imgName +
// 		"</a>" +
// 		"<span class='from-country'>" + item.country + "</span>" +
// 		"</div>" +
// 		"<div class='flex-justify-content'>" +
// 		"<span class='red'>" + item.money + "</span>" +
// 		"<span class='shopping-car'></span>" +
// 		"</div>" +
// 		"</div>" +
// 		"</li>"
// 	);
// });
// appendEle();
var zawuData = [{
	"imgUrl": "./img/index4/zaWu/1.jpg",
	"imgName": "桌面收纳盒(可做支架) 绿色",
	"country": "",
	"money": "￥29.00"
}, {
	"imgUrl": "./img/index4/zaWu/2.jpg",
	"imgName": "桌面收纳盒(可做支架) 灰色",
	"country": "",
	"money": "￥29.00"
}, {
	"imgUrl": "./img/index4/zaWu/3.jpg",
	"imgName": "收纳备忘板 白色",
	"country": "Unkia·挪威",
	"money": "￥168.00"
}, {
	"imgUrl": "./img/index4/zaWu/4.jpg",
	"imgName": "桌面零钱储物盒 红色",
	"country": "Artiart·台湾",
	"money": "￥82.00"
}, {
	"imgUrl": "./img/index4/zaWu/5.jpg",
	"imgName": "桌面零钱储物盒 绿色",
	"country": "Artiart·台湾",
	"money": "￥82.00"
}, {
	"imgUrl": "./img/index4/zaWu/6.jpg",
	"imgName": "壁挂式鹿头收纳架 红色 ",
	"country": "Artiart·台湾",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/zaWu/7.jpg",
	"imgName": "壁挂式牛头收纳桶 红色",
	"country": "Artiart·台湾",
	"money": "￥89.00"
}, {
	"imgUrl": "./img/index4/zaWu/8.jpg",
	"imgName": "创意花型收纳盒 绿色 ",
	"country": "Artiart·台湾",
	"money": "￥75.00"
}, {
	"imgUrl": "./img/index4/zaWu/9.jpg",
	"imgName": "多功能挂式置物架 白色",
	"country": "纳川·中国",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/zaWu/10.jpg",
	"imgName": "多功能挂式置物架 绿色",
	"country": "纳川·中国",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/zaWu/11.jpg",
	"imgName": "多功能挂式置物架 蓝色",
	"country": "纳川·中国",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/zaWu/12.jpg",
	"imgName": "车载多用收纳盒 米色",
	"country": "Jiae·中国",
	"money": "￥36.00"
}, {
	"imgUrl": "./img/index4/zaWu/13.jpg",
	"imgName": "磁性钥匙架",
	"country": "Peleg design·以色列",
	"money": "￥110.00"
}, {
	"imgUrl": "./img/index4/zaWu/14.jpg",
	"imgName": "储物钥匙收纳盒 红色",
	"country": "Peleg design·以色列",
	"money": "￥174.00"
}, {
	"imgUrl": "./img/index4/zaWu/15.jpg",
	"imgName": "储物钥匙收纳盒 黑色",
	"country": "MONKEY.B·以色列",
	"money": "￥174.00"
}, {
	"imgUrl": "./img/index4/zaWu/16.jpg",
	"imgName": "储物钥匙收纳盒 白色",
	"country": "MONKEY.B·以色列",
	"money": "￥174.00"
}, {
	"imgUrl": "./img/index4/zaWu/17.jpg",
	"imgName": "吸盘式鲸鱼笔插 蓝色 鲸鱼",
	"country": "Artiart·台湾",
	"money": "￥24.00"
}, {
	"imgUrl": "./img/index4/zaWu/18.jpg",
	"imgName": "放松休憩好搭档套装",
	"country": "Jiae·中国",
	"money": "￥109.00"
}, {
	"imgUrl": "./img/index4/zaWu/19.jpg",
	"imgName": "创意收纳三件套套装",
	"country": "Jiae·中国",
	"money": "￥100.00"
}];
var umbrellaData = [{
	"imgUrl": "./img/index4/zhuyuSan/1.jpg",
	"imgName": "竹语生肖系列鸡年纪念款  鸡年纪念款（送竹皮笔记本",
	"country": "",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/2.jpg",
	"imgName": "竹语生肖系列鸡年纪念款  鸡年纪念款+印章",
	"country": "",
	"money": "￥499.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/3.jpg",
	"imgName": "竹语12星座系列伞  狮子",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/4.jpg",
	"imgName": "竹语12星座系列伞  白羊",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/5.jpg",
	"imgName": "竹语12星座系列伞  金牛",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/6.jpg",
	"imgName": "竹语12星座系列伞  双子",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/7.jpg",
	"imgName": "竹语12星座系列伞  巨蟹",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/8.jpg",
	"imgName": "竹语12星座系列伞  射手",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/9.jpg",
	"imgName": "竹语12星座系列伞  处女",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/10.jpg",
	"imgName": "竹语12星座系列伞  天秤",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/11.jpg",
	"imgName": "竹语12星座系列伞  天蝎",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/12.jpg",
	"imgName": "竹语12星座系列伞  摩羯",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/13.jpg",
	"imgName": "竹语12星座系列伞  水瓶",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/14.jpg",
	"imgName": "竹语12星座系列伞  双鱼",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/15.jpg",
	"imgName": "竹语 经典系列伞 黑色",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/16.jpg",
	"imgName": "竹语 经典系列伞 白色",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/17.jpg",
	"imgName": "竹语 素色系列伞  驼色",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/18.jpg",
	"imgName": "竹语 素色系列伞  绯紫",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/19.jpg",
	"imgName": "竹语春の花伞系列  春桃",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/20.jpg",
	"imgName": "竹语 素色系列伞  靛蓝",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/21.jpg",
	"imgName": "竹语春の花伞系列  绣球",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/22.jpg",
	"imgName": "竹语 素色系列伞  黛青",
	"country": "BamBoo·中国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/23.jpg",
	"imgName": "竹语春の花伞系列  风信",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/24.jpg",
	"imgName": "竹语 花色系列伞  钱塘",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/25.jpg",
	"imgName": "竹语春の花伞系列  栀子",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/26.jpg",
	"imgName": "竹语 花色系列伞  西子",
	"country": "BamBoo·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/27.jpg",
	"imgName": "竹语 七夕系列情侣伞  寡人男款",
	"country": "",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/28.jpg",
	"imgName": "竹语 七夕系列情侣伞  本宫女款",
	"country": "",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/zhuyuSan/29.jpg",
	"imgName": "竹语 七夕系列情侣伞  许与白情侣款",
	"country": "",
	"money": "￥299.00"
}, ];
var qijuriyongData = [{
	"imgUrl": "./img/index4/qijuriYong/1.jpg",
	"imgName": "智能声波电动牙刷 黑色",
	"country": "Oracleen·中国",
	"money": "￥399.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/2.jpg",
	"imgName": "八音盒  榉木-椭圆",
	"country": "beladesign·中国",
	"money": "￥159.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/3.jpg",
	"imgName": "八音盒  黑胡桃-椭圆",
	"country": "beladesign·中国",
	"money": "￥189.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/4.jpg",
	"imgName": "甜梦双层格纹竹纤维被  竹纤维被-猫头鹰奥利",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/5.jpg",
	"imgName": "甜梦双层格纹竹纤维被  竹纤维被-点点雏菊",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/6.jpg",
	"imgName": "甜梦双层格纹竹纤维被  竹纤维被-航海日志",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/7.jpg",
	"imgName": "甜梦双层格纹竹纤维被  里被-猫头鹰奥利",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/8.jpg",
	"imgName": "甜梦双层格纹竹纤维被  里被-可爱小狗",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/9.jpg",
	"imgName": "甜梦双层格纹竹纤维被  里被-快乐小鲸鱼",
	"country": "Bubble·英国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/10.jpg",
	"imgName": "Playspot地垫  绿色/咖啡",
	"country": "Skip Hop·美国",
	"money": "￥769.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/11.jpg",
	"imgName": "宝宝安全带护套  小鸡(0-12月)",
	"country": "",
	"money": "￥.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/12.jpg",
	"imgName": "宝宝安全带护套  青蛙（0-12月）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/13.jpg",
	"imgName": "宝宝安全带护套  小熊（0-12月）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/14.jpg",
	"imgName": "宝宝安全带护套  小仙女（0-12月）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/15.jpg",
	"imgName": "宝宝安全带护套  花猫（1-4岁）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/16.jpg",
	"imgName": "宝宝安全带护套  老鼠（1-4岁）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/17.jpg",
	"imgName": "创意滑梯首饰架  实木+金属",
	"country": "",
	"money": "￥229.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/18.jpg",
	"imgName": "宝宝安全带护套  狮子（1-4岁）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/19.jpg",
	"imgName": "小舞裙双面收纳袋",
	"country": "Umbra·加拿大",
	"money": "￥139.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/20.jpg",
	"imgName": "宝宝安全带护套  小仙女（1-4岁）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/21.jpg",
	"imgName": "优雅栀子花首饰架",
	"country": "Umbra·加拿大",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/22.jpg",
	"imgName": "宝宝安全带护套  熊猫（1-4岁）",
	"country": "",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/23.jpg",
	"imgName": "PPSU感温奶瓶  小号-黄色",
	"country": "",
	"money": "￥76.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/24.jpg",
	"imgName": "蘑菇款玻璃奶瓶  黄色120ml",
	"country": "",
	"money": "￥59.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/25.jpg",
	"imgName": "企鹅款PPSU奶瓶 橙色 160ml",
	"country": "",
	"money": "￥95.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/26.jpg",
	"imgName": "企鹅款PPSU奶瓶 橙色 240ml",
	"country": "",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/27.jpg",
	"imgName": "宽口玻璃奶瓶  绿色150ML",
	"country": "",
	"money": "￥35.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/28.jpg",
	"imgName": "A款吸管杯  粉色260ML",
	"country": "Anantara·中国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/29.jpg",
	"imgName": "A款吸管杯  蓝色260ML",
	"country": "Anantara·中国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/30.jpg",
	"imgName": "魔力无痕吸毛巾环 绿色",
	"country": "Artiart·台湾",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/31.jpg",
	"imgName": "黑胡桃烛台",
	"country": "beladesign·中国",
	"money": "￥49.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/32.jpg",
	"imgName": "魔力无痕吸挂钩 绿色",
	"country": "Artiart·台湾",
	"money": "￥80.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/33.jpg",
	"imgName": "休闲系列双肩包 灰色",
	"country": "shuter·中国",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/34.jpg",
	"imgName": "魔力无痕吸肥皂盒 绿色",
	"country": "Artiart·台湾",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/35.jpg",
	"imgName": "榉木茶几",
	"country": "beladesign·中国",
	"money": "￥890.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/36.jpg",
	"imgName": "榉木凳子",
	"country": "beladesign·中国",
	"money": "￥690.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/37.jpg",
	"imgName": "八音盒  榉木-方形",
	"country": "beladesign·中国",
	"money": "￥159.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/38.jpg",
	"imgName": "Butterflies 衣架（4只装） 白色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/39.jpg",
	"imgName": "Butterflies 衣架（4只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/40.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 粉色 ",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/41.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 蓝色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/42.jpg",
	"imgName": "Butterflies 衣架（2只装） 白色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/43.jpg",
	"imgName": "浴室套餐系列 绿色",
	"country": "Artiart·台湾",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/44.jpg",
	"imgName": "Butterflies 衣架（2只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/45.jpg",
	"imgName": "Butterflies 衣架（2只装） 粉色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/46.jpg",
	"imgName": "Butterflies 衣架（2只装） 蓝色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/47.jpg",
	"imgName": "Butterflies 衣架（4只装） 白色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/48.jpg",
	"imgName": "Butterflies 衣架（4只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/49.jpg",
	"imgName": "Butterflies 衣架（4只装） 粉色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/50.jpg",
	"imgName": "Butterflies 衣架（4只装） 蓝色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/51.jpg",
	"imgName": "Butterflies 衣架（4只装） 白色 ",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/52.jpg",
	"imgName": "Butterflies 衣架（4只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/53.jpg",
	"imgName": "Butterflies 衣架（4只装） 粉色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/54.jpg",
	"imgName": "Butterflies 衣架（4只装） 蓝色",
	"country": "MAWA·德国",
	"money": "￥65.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/55.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 白色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/56.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/57.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 粉色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/58.jpg",
	"imgName": "Butterflies 挂衣架（2只装） 蓝色 ",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/59.jpg",
	"imgName": "Butterflies 衣架（2只装） 白色 ",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/60.jpg",
	"imgName": "Butterflies 衣架（2只装） 黄色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/61.jpg",
	"imgName": "Butterflies 衣架（2只装） 粉色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/62.jpg",
	"imgName": "Butterflies 衣架（2只装） 蓝色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/63.jpg",
	"imgName": "Fashion Style 挂衣架（单只装） 红色",
	"country": "MAWA·德国",
	"money": "￥75.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/64.jpg",
	"imgName": "Fashion Style 肩宽衣架（单只装） 红色",
	"country": "MAWA·德国",
	"money": "￥75.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/65.jpg",
	"imgName": "Modern Living  防滑挂衣架 黑色",
	"country": "MAWA·德国",
	"money": "￥69.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/66.jpg",
	"imgName": "球迷款围巾 蓝色",
	"country": "Jiae·中国",
	"money": "￥68.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/67.jpg",
	"imgName": "3D抗雾霾潮牌口罩  阿猫阿狗",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/68.jpg",
	"imgName": "3D抗雾霾潮牌口罩  塔罗牌",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/69.jpg",
	"imgName": "3D抗雾霾潮牌口罩  荧光绿",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/70.jpg",
	"imgName": "3D抗雾霾潮牌口罩  盖世英雄",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/71.jpg",
	"imgName": "3D抗雾霾潮牌口罩  北极熊",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/72.jpg",
	"imgName": "3D抗雾霾潮牌口罩  设计狮",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/73.jpg",
	"imgName": "3D抗雾霾潮牌口罩  bang",
	"country": "Jiae·中国",
	"money": "￥269.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/74.jpg",
	"imgName": "魔力无痕吸牙刷架 绿色",
	"country": "Artiart·台湾",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/75.jpg",
	"imgName": "魔力无痕吸刮刀盒",
	"country": "Artiart·台湾",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/76.jpg",
	"imgName": "aircop驱蚊手环(2只装) 黑色",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/77.jpg",
	"imgName": "aircop驱蚊手环(2只装) 白色",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/78.jpg",
	"imgName": "aircop驱蚊手环(2只装) 绿色 ",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/79.jpg",
	"imgName": "aircop驱蚊手环(2只装) 橙色",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, {
	"imgUrl": "./img/index4/qijuriYong/80.jpg",
	"imgName": "aircop驱蚊手环(2只装) 红色",
	"country": "Jiae·中国",
	"money": "￥78.00"
}, ];
var jingzhishenghuoData = [{
	"imgUrl": "./img/index4/jingzhishengHuo/1.jpg",
	"imgName": "迷你酸奶机 褐色",
	"country": "Jiae·中国",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/2.jpg",
	"imgName": "迷你酸奶机 粉色",
	"country": "Jiae·中国",
	"money": "￥99.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/3.jpg",
	"imgName": "超声波香薰机 白色",
	"country": "Jiae·中国",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/4.jpg",
	"imgName": "旅行蒸汽电熨斗Y-816 红色",
	"country": "优尔·中国",
	"money": "￥286.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/5.jpg",
	"imgName": "旅行蒸汽电熨斗Y-816 白色",
	"country": "优尔·中国",
	"money": "￥286.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/6.jpg",
	"imgName": "小萌菇灭蚊灯 白色",
	"country": "Smart Frog·中国",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/7.jpg",
	"imgName": "终结者灭蚊灯 白色 ",
	"country": "Smart Frog·中国",
	"money": "￥238.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/8.jpg",
	"imgName": "智能声波电动牙刷 黑色",
	"country": "Oracleen·中国",
	"money": "￥399.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/9.jpg",
	"imgName": "飞乐思暖宫带 粉色 ",
	"country": ".",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/10.jpg",
	"imgName": "沙漏伴睡灯 白色",
	"country": "Jiae·中国",
	"money": "￥128.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/11.jpg",
	"imgName": "精美微风扇子   城市-黑色",
	"country": "Jiae·中国",
	"money": "￥208.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/12.jpg",
	"imgName": "微纸凳  小号-原色",
	"country": "十八纸·中国",
	"money": "￥159.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/13.jpg",
	"imgName": "微纸凳  小号-白色",
	"country": "十八纸·中国",
	"money": "￥178.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/14.jpg",
	"imgName": "微纸凳  中号-原色",
	"country": "十八纸·中国",
	"money": "￥179.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/15.jpg",
	"imgName": "鹿首白瓷储物罐 白色",
	"country": "IMM Living·加拿大",
	"money": "￥439.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/16.jpg",
	"imgName": "微纸凳  中号-白色",
	"country": "十八纸·中国",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/17.jpg",
	"imgName": "慢生活陶瓷储物罐  蜗牛",
	"country": "",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/18.jpg",
	"imgName": "微纸凳  小号-黑色",
	"country": "十八纸·中国",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/19.jpg",
	"imgName": "慢生活陶瓷储物罐  乌龟",
	"country": "",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/20.jpg",
	"imgName": "微纸凳  中号-黑色",
	"country": "十八纸·中国",
	"money": "￥218.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/21.jpg",
	"imgName": "微纸凳  中号-红色",
	"country": "十八纸·中国",
	"money": "￥218.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/22.jpg",
	"imgName": "微纸凳  小号-红色",
	"country": "十八纸·中国",
	"money": "￥178.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/23.jpg",
	"imgName": "风琴沙发  6人座-原色",
	"country": "十八纸·中国",
	"money": "￥2899.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/24.jpg",
	"imgName": "风琴沙发  6人座-白色",
	"country": "十八纸·中国",
	"money": "￥3188.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/25.jpg",
	"imgName": "风琴沙发  12人座-原色",
	"country": "十八纸·中国",
	"money": "￥4199.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/26.jpg",
	"imgName": "风琴沙发  12人座-白色",
	"country": "十八纸·中国",
	"money": "￥4688.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/27.jpg",
	"imgName": "纸蒲团  原色",
	"country": "十八纸·中国",
	"money": "￥328.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/28.jpg",
	"imgName": "纸蒲团  白色",
	"country": "十八纸·中国",
	"money": "￥358.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/29.jpg",
	"imgName": "风琴桌  白色-小号",
	"country": "十八纸·中国",
	"money": "￥598.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/30.jpg",
	"imgName": "风琴桌  白色-中号",
	"country": "十八纸·中国",
	"money": "￥698.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/31.jpg",
	"imgName": "风琴桌  白色-大号",
	"country": "十八纸·中国",
	"money": "￥798.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/32.jpg",
	"imgName": "风琴凳(小号)  3人座-原色",
	"country": "十八纸·中国",
	"money": "￥699.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/33.jpg",
	"imgName": "风琴凳(小号)  6人座-原色",
	"country": "十八纸·中国",
	"money": "￥999.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/34.jpg",
	"imgName": "风琴凳(小号)  12人座-原色",
	"country": "十八纸·中国",
	"money": "￥1399.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/35.jpg",
	"imgName": "风琴凳(小号)  3人座-白色",
	"country": "十八纸·中国",
	"money": "￥818.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/36.jpg",
	"imgName": "风琴凳(小号)  6人座-白色",
	"country": "十八纸·中国",
	"money": "￥1188.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/37.jpg",
	"imgName": "风琴凳(小号)  12人座-白色",
	"country": "十八纸·中国",
	"money": "￥1588.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/38.jpg",
	"imgName": "风琴凳(中号)  3人座-原色",
	"country": "十八纸·中国",
	"money": "￥799.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/39.jpg",
	"imgName": "风琴凳(中号)  6人座-原色",
	"country": "十八纸·中国",
	"money": "￥1399.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/40.jpg",
	"imgName": "风琴凳(中号)  12人座-原色",
	"country": "十八纸·中国",
	"money": "￥1899.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/41.jpg",
	"imgName": "风琴凳(中号)  3人座-白色",
	"country": "十八纸·中国",
	"money": "￥988.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/42.jpg",
	"imgName": "风琴凳(中号)  6人座-白色",
	"country": "十八纸·中国",
	"money": "￥1588.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/43.jpg",
	"imgName": "风琴凳(中号)  12人座-白色",
	"country": "十八纸·中国",
	"money": "￥2088.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/44.jpg",
	"imgName": "动物皇冠白瓷储蓄罐  狐狸",
	"country": "",
	"money": "￥539.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/45.jpg",
	"imgName": "动物皇冠白瓷储蓄罐  熊",
	"country": "",
	"money": "￥539.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/46.jpg",
	"imgName": "动物皇冠白瓷储蓄罐  狮子",
	"country": "",
	"money": "￥539.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/47.jpg",
	"imgName": "消失的动物马克杯  兔子",
	"country": "",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/48.jpg",
	"imgName": "消失的动物马克杯  狐狸",
	"country": "",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/49.jpg",
	"imgName": "消失的动物马克杯  松鼠",
	"country": "",
	"money": "￥199.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/50.jpg",
	"imgName": "孔雀造型白瓷储物罐",
	"country": "IMM Living·加拿大",
	"money": "￥549.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/51.jpg",
	"imgName": "精美微风扇子   古建-白色",
	"country": "Jiae·中国",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/52.jpg",
	"imgName": "趣味苍蝇拍 红色",
	"country": "ideadao·中国",
	"money": "￥39.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/53.jpg",
	"imgName": "蝎子饰品盘 白色",
	"country": "IMM Living·加拿大",
	"money": "￥399.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/54.jpg",
	"imgName": "孔雀饰品装饰盘 白色",
	"country": "IMM Living·加拿大",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/55.jpg",
	"imgName": "国王庭院多用瓶 白色 鹿首",
	"country": "",
	"money": "￥339.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/56.jpg",
	"imgName": "国王庭院多用瓶 白色 兔首",
	"country": "",
	"money": "￥339.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/57.jpg",
	"imgName": "兔造型甜品托盘  兔身",
	"country": "IMM Living·加拿大",
	"money": "￥439.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/58.jpg",
	"imgName": "兔造型甜品托盘  兔首",
	"country": "IMM Living·加拿大",
	"money": "￥489.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/59.jpg",
	"imgName": "espresso都会单车  黑色低跨款",
	"country": "器研所·台湾",
	"money": "￥39800.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/60.jpg",
	"imgName": "小矮人饰品装饰盘",
	"country": "IMM Living·加拿大",
	"money": "￥329.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/61.jpg",
	"imgName": "犀牛饰品装饰盘",
	"country": "IMM Living·加拿大",
	"money": "￥289.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/62.jpg",
	"imgName": "鹈鹕鸟饰品装饰盘",
	"country": "IMM Living·加拿大",
	"money": "￥549.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/63.jpg",
	"imgName": "海港木桩马克杯",
	"country": "IMM Living·加拿大",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index4/jingzhishengHuo/64.jpg",
	"imgName": "小熊造型甜品托盘",
	"country": "IMM Living·加拿大",
	"money": "￥469.00"
}, ];
//  {
// 	"imgUrl": "./img/index4/zaWu/19.jpg",
// 	"imgName": "创意收纳三件套套装",
// 	"country": "Jiae·中国",
// 	"money": "￥100.00"
// }, 

var dataArr = [tiexinData, zawuData, umbrellaData, qijuriyongData, jingzhishenghuoData];
// 遍历数据

// 遍历向谁添加
$(".content-data").each(function(idx, item) {
	// 遍历数组里面的数据
	$(dataArr[idx]).each(function(idx2, item2) {
		// 添加数据
		$(item).append("<li class='out-li'>" +
			"<a href='#' class='left-move'>" +
			"<img class='img-daxiao move-img' src=" + item2.imgUrl + ">" +
			"</a>" +
			"<div>" +
			"<div class='flex-justify-content'>" +
			"<a class='hover-red' href='#'>" +
			item2.imgName +
			"</a>" +
			"<span class='from-country'>" + item2.country + "</span>" +
			"</div>" +
			"<div class='flex-justify-content'>" +
			"<span class='red'>" + item2.money + "</span>" +
			"<span class='shopping-car'></span>" +
			"</div>" +
			"</div>" +
			"</li>"
		);
	})
});
// appendEmptyEle((tiexinData.length + 1) % 4, "#nav1-data>ul", "<li class='out-li'></li>");
// 增加空li
$(dataArr).each(function(index, item3) {
	// 要加多少个
	var number = (item3.length + 1) % 4;
	// 向谁里面添加
	var tar = ".content-data";
	// 添加的内容
	var string = "<li class='out-li'></li>";
	appendEmptyEle(number, tar, string);
});
// 获取吸顶栏
var $menu = $(".index4-menu");
// 获取要到的标签
var $imgPeople = $(".people");
// 获取要到的位置
var imgOffset = $imgPeople.offset().top;



$liNotFirst = $(".index4-menu>ul li:not(:first)");
var onOff = true;


// 获取li
var $Li = $(".index4-menu>ul li");
// 获取要到的大大的图片位置
var $imgPosi = $(".nav-img");







// 点击效果
// $Li.each(function(index, itemLi) {
// 	$(itemLi).click(function(event) {
// 		var flag = true;
// 		$(window).off("scroll");
// 		todo(index);
// 		if (flag) {
// 			$("html").stop(true, true).animate({
// 				"scrollTop": $($imgPosi[index]).offset().top - 44
// 			}, 1000, function() {
// 				// todo(index);
// 				// $(window).on("scroll",Check);
// 				$(window).scroll(function() {
// 					check();
// 				});
// 			});
// 			flag = false;
// 		}else{
// 			flag = true;
// 		}
// 	});
// });
$Li.click(function(){
	// 解决点击老是重复加类名
	$(window).off("scroll");
	var LiIndex = $(this).index();
	todo(LiIndex);
	var flag = true;
	for(var k = 0;k < $Li.length; k++){
		if (LiIndex == k){
			$("html,body").stop().animate({
				"scrollTop": $($imgPosi[LiIndex]).offset().top - 44
			},1000,function(){
				$(window).scroll(function() {
					check();
				});
			});
		}
	}
});
// 吸顶效果
// console.log(length);
function check() {
	// 第二种方法
	// var key = 0;
	// var flag = true;
	// var length = $imgPosi.length;
	if ($(document).scrollTop() >= imgOffset) {
		$menu.addClass("current");
	} else {
		$menu.removeClass("current");
	}
	// 第二种方法
	// 循环着写if判断条件
	// for (var j = 0; j < $imgPosi.length; j++) {
	// 	key++;
	// 	// 写flag的作用
	// 	// 因为是从大往小判断的,例如现在在第二张图片的位置,加上flag之后,第一次判断flag就会变成flase,其余的if(flag){}里面就不会生效
	// 	if (flag) {
	// 		// console.log($(window).scrollTop());
	// 		if ($(window).scrollTop() >= $($imgPosi[length - key]).offset().top - 55) {
	// 			// console.log(key);
	// 			var imgIndex = $imgPosi.length - key;
	// 			flag = false;
	// 		} else {
	// 			flag = true;
	// 		}
	// 	}
	// }
	// todo(imgIndex);
	$imgPosi.each(function(imgIndex, imgItem) {
		if ($(window).scrollTop() >= $($imgPosi[imgIndex]).offset().top - 55) {
			todo(imgIndex);
		}
	});
}
$(window).scroll(function() {
	check();
});

function todo(num) {
	// console.log(num);
	$($Li[num]).addClass("active").siblings().removeClass("active");
}
// for(var j = 0;j < $imgPosi.length ; j++){
// 	key ++;
// 	console.log($imgPosi.length - key);
// }
