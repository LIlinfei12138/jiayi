// 看大牌数据遍历
var lookBig = [{
		"imgUrl": "./img/index1/lookBig/1.jpg",
		"imgName": "Bathfeeling浴见",
		"country": "中国"
	},
	{
		"imgUrl": "./img/index1/lookBig/2.jpg",
		"imgName": "Travel  Blue",
		"country": "英国"
	},
	{
		"imgUrl": "./img/index1/lookBig/3.jpg",
		"imgName": "唤醒者",
		"country": "中国-美国"
	},
	{
		"imgUrl": "./img/index1/lookBig/4.jpg",
		"imgName": "IMM Living",
		"country": "加拿大"
	}
];
$.each(lookBig, function(idx, item) {
	$("#look-big-data>ul").append("<li class='out-li fourth'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img filter' src=" + item.imgUrl + ">" +
		"<div class='word-data'>" +
		"<p>" + item.imgName + "</p>" +
		"<p>" + item.country + "</p>" +
		"</div>" +
		"</a>" +
		"</li>");
	// $("#look-big-data>ul").append("<li class='out-li'>"+
	// "<a class='left-move href='#'>"
	// "</li>")
});
// 新品数据遍历
var xinPin = [{
	"imgUrl": "./img/index1/xinPin/1.jpg",
	"imgName": "柠檬U站",
	"country": ".",
	"money": "￥75.00"
}, {
	"imgUrl": "./img/index1/xinPin/2.jpg",
	"imgName": "飞乐思暖宫带",
	"country": ".",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index1/xinPin/3.jpg",
	"imgName": "科大讯飞 阿尔法小蛋儿童陪教机器人",
	"country": ".",
	"money": "￥599.00"
}, {
	"imgUrl": "./img/index1/xinPin/4.jpg",
	"imgName": "卡儿酷汽车移动电源加湿器",
	"country": "Jiae·中国",
	"money": "￥399.00"
}];
$.each(xinPin, function(idx, item) {
	$("#xinPin>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
// 家居遍历数据
var jiaju = [{
	"imgUrl": "./img/index1/jiaJu/1.jpg",
	"imgName": "德国风暴伞迷你五折商务伞",
	"country": "EURO SCHIRM·德国",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index1/jiaJu/2.jpg",
	"imgName": "沙漏伴睡灯",
	"country": "Jiae·中国",
	"money": "￥128.00"
}, {
	"imgUrl": "./img/index1/jiaJu/3.jpg",
	"imgName": "超声波香薰机",
	"country": "Jiae·中国",
	"money": "￥149.00"
}, {
	"imgUrl": "./img/index1/jiaJu/4.jpg",
	"imgName": "智能声波电动牙刷",
	"country": "Oracleen·中国",
	"money": "￥399.00"
}, {
	"imgUrl": "./img/index1/jiaJu/5.jpg",
	"imgName": "终结者灭蚊灯",
	"country": "Smart Frog·中国",
	"money": "￥238.00"
}, {
	"imgUrl": "./img/index1/jiaJu/6.jpg",
	"imgName": "小萌菇灭蚊灯",
	"country": "Smart Frog·中国",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index1/jiaJu/7.jpg",
	"imgName": "竹语 经典系列伞",
	"country": "BamBoo·中国 ",
	"money": "￥249.00"
}, {
	"imgUrl": "./img/index1/jiaJu/8.jpg",
	"imgName": "竹语春の花伞系列",
	"country": "BamBoo·中国 ",
	"money": "￥299.00"
}];
$.each(jiaju, function(idx, item) {
	$("#jiaJu-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
var chufang = [{
	"imgUrl": "./img/index1/chuFang/1.jpg",
	"imgName": "九猪迷你榨汁杯二代",
	"country": "Jiae·中国",
	"money": "￥99.00"
},{
	"imgUrl": "./img/index1/chuFang/2.jpg",
	"imgName": "意大利进口高压锅 7L",
	"country": "LAGOSTINA·意大利",
	"money": "￥2580.00"
},{
	"imgUrl": "./img/index1/chuFang/3.jpg",
	"imgName": "意大利进口高压锅 5L",
	"country": "LAGOSTINA·意大利",
	"money": "￥1580.00"
},{
	"imgUrl": "./img/index1/chuFang/4.jpg",
	"imgName": "迷你便携电动榨汁机",
	"country": "Jiae·中国",
	"money": "￥159.00"
},{
	"imgUrl": "./img/index1/chuFang/5.jpg",
	"imgName": "味之素雪平锅",
	"country": "Jiae·中国",
	"money": "￥156.00"
},{
	"imgUrl": "./img/index1/chuFang/6.jpg",
	"imgName": "进口26厘米长短柄煎炒锅",
	"country": "LAGOSTINA·意大利",
	"money": "￥699.00"
},{
	"imgUrl": "./img/index1/chuFang/7.jpg",
	"imgName": "进口28厘米长短柄煎炒锅",
	"country": "LAGOSTINA·意大利",
	"money": "￥799.00"
},{
	"imgUrl": "./img/index1/chuFang/8.jpg",
	"imgName": "Klip It 圆型保鲜盒",
	"country": "Sistema·",
	"money": "￥42.00"
},];
$.each(chufang, function(idx, item) {
	$("#chufang-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
// 遍历数码数据
var shuma = [{
	"imgUrl": "./img/index1/shuMa/1.jpg",
	"imgName": "户外蓝牙音箱",
	"country": "Xoopar·香港",
	"money": "￥152.00"
}, {
	"imgUrl": "./img/index1/shuMa/2.jpg",
	"imgName": "熊猫公仔造型移动电源",
	"country": "Bone·台湾",
	"money": "￥298.00"
}, {
	"imgUrl": "./img/index1/shuMa/3.jpg",
	"imgName": "泡泡移动电源",
	"country": "Bone·台湾",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index1/shuMa/4.jpg",
	"imgName": "逗扣移动电源",
	"country": "Bone·台湾",
	"money": "￥368.00"
}, {
	"imgUrl": "./img/index1/shuMa/5.jpg",
	"imgName": "Phone 6/6P 运动保护套",
	"country": "Xoopar·香港",
	"money": "￥198.00"
}, {
	"imgUrl": "./img/index1/shuMa/6.jpg",
	"imgName": "美杜莎耳机",
	"country": "Mrice·中国",
	"money": "￥599.00"
}, {
	"imgUrl": "./img/index1/shuMa/7.jpg",
	"imgName": "鲍里斯移动充电座",
	"country": "MONKEY.B·以色列",
	"money": "￥138.00"
}, {
	"imgUrl": "./img/index1/shuMa/8.jpg",
	"imgName": "智能手机贴膜",
	"country": "Halo Back·美国",
	"money": "￥148.00"
}];
$.each(shuma, function(idx, item) {
	$("#shuMa-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
// 遍历酒具数据
var jiuju = [{
	"imgUrl": "./img/index1/jiuJu/1.jpg",
	"imgName": "玻璃快速醒酒器",
	"country": "Soirée home·美国",
	"money": "￥162.90"
}, {
	"imgUrl": "./img/index1/jiuJu/2.jpg",
	"imgName": "酒水饮料冰杯",
	"country": "Soirée home·美国",
	"money": "￥326.00"
}, {
	"imgUrl": "./img/index1/jiuJu/3.jpg",
	"imgName": "冰酒棒",
	"country": "Soirée home·美国",
	"money": "￥163.00"
}, {
	"imgUrl": "./img/index1/jiuJu/4.jpg",
	"imgName": "抽真空香槟酒塞",
	"country": "Soirée home·美国",
	"money": "￥130.50"
}, {
	"imgUrl": "./img/index1/jiuJu/5.jpg",
	"imgName": "极地冰球",
	"country": "Polar Ice Tray·台湾",
	"money": "￥228.00"
}, {
	"imgUrl": "./img/index1/jiuJu/6.jpg",
	"imgName": "智能真空保鲜瓶塞",
	"country": "UIXOO·中国",
	"money": "￥299.00"
}, {
	"imgUrl": "./img/index1/jiuJu/7.jpg",
	"imgName": "唤醒者电子醒酒器",
	"country": "唤醒者·中国-美国",
	"money": "￥980.00"
}, {
	"imgUrl": "./img/index1/jiuJu/8.jpg",
	"imgName": "2合1香槟塞引酒器",
	"country": "Vacu vin·荷兰",
	"money": "￥145.00"
}];
$.each(jiuju, function(idx, item) {
	$("#jiuJu-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
// 遍历电器数据
var dianqi = [{
	"imgUrl": "./img/index1/jiuJu/1.jpg",
	"imgName": "水百合迷你加湿器",
	"country": "Smart Frog·中国",
	"money": "￥88.00"
}, {
	"imgUrl": "./img/index1/dianQi/2.jpg",
	"imgName": "折纸书灯",
	"country": "Jiae·中国",
	"money": "￥399.00"
}, {
	"imgUrl": "./img/index1/dianQi/3.jpg",
	"imgName": "旅行电热水壶",
	"country": "优尔·中国",
	"money": "￥138.00 "
}, {
	"imgUrl": "./img/index1/dianQi/4.jpg",
	"imgName": "空气果1S空气质量监视器",
	"country": "空气果·中国",
	"money": "￥999.00"
}, {
	"imgUrl": "./img/index1/dianQi/5.jpg",
	"imgName": "迷你手持小型熨烫",
	"country": "优尔·中国",
	"money": "￥58.00"
}, {
	"imgUrl": "./img/index1/dianQi/6.jpg",
	"imgName": "智能水发电闹钟",
	"country": "Jiae·中国",
	"money": "￥129.00"
}, {
	"imgUrl": "./img/index1/dianQi/7.jpg",
	"imgName": "摩飞多功能厨师机",
	"country": "Morphy Ricahrds·英国",
	"money": "￥1680.00"
}, {
	"imgUrl": "./img/index1/dianQi/8.jpg",
	"imgName": "不锈钢电热水壶",
	"country": "Morphy Ricahrds·英",
	"money": "￥499.00"
}];
$.each(dianqi, function(idx, item) {
	$("#dianQi-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
// 遍历感兴趣的产品
var interestGoods = [{
	"imgUrl": "./img/index1/interestGoods/1.jpg",
	"imgName": "公仔蓝牙音箱",
	"country": "Xoopar·香港",
	"money": "￥368.00"
},{
	"imgUrl": "./img/index1/interestGoods/2.jpg",
	"imgName": "小猪蛋黄分离器",
	"country": "Peleg design·以色列",
	"money": "￥118.00"
},{
	"imgUrl": "./img/index1/interestGoods/3.jpg",
	"imgName": "动物皇冠白瓷储蓄罐",
	"country": "IMM Living·加拿大",
	"money": "￥539.00"
},{
	"imgUrl": "./img/index1/interestGoods/4.jpg",
	"imgName": "榉木台灯(优雅款)",
	"country": "beladesign·中国",
	"money": "￥288.00"
},];
$.each(interestGoods, function(idx, item) {
	$("#interest-goods-data>ul").append("<li class='out-li'>" +
		"<a href='#' class='left-move'>" +
		"<img class='img-daxiao move-img' src=" + item.imgUrl + ">" +
		"</a>" +
		"<div>" +
		"<div class='flex-justify-content'>" +
		"<a class='hover-red' href='#'>" +
		item.imgName +
		"</a>" +
		"<span class='from-country'>" + item.country + "</span>" +
		"</div>" +
		"<div class='flex-justify-content'>" +
		"<span class='red'>" + item.money + "</span>" +
		"<span class='shopping-car'></span>" +
		"</div>" +
		"</div>" +
		"</li>"
	);
});
var dataNameArr = [];