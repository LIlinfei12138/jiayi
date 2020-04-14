$(".menu-have-hover").each(function(idx, item) {
	$(item).mouseenter(function() {
		$(item).addClass("display");
	});
});
$(".menu-have-hover").each(function(idx, item) {
	$(item).mouseleave(function() {
		$(item).removeClass("display");
	});
});
// var secondMenuArr = [{
// 	"yxjj": [
// 		{
// 		"imgUrl": "./img/secondImg/yuxuanjiaju/tiexinsheji.png",
// 		"imgName": "贴心设计",
// 		},
// 		{
// 		"imgUrl":"./img/secondImg/yuxuanjiaju/zawushouna.png",
// 		"imgName":"杂物收纳"
// 		}
// 	],
// 	"pwcf":[
// 		{
// 		"imgUrl":"www.baidu.com",
// 		"imgName":"百度"
// 		}
// 	]
// }];
// var secondMenuArr = [{
// 	"yxjj": [{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/tiexinsheji.png",
// 			"imgName": "贴心设计",
// 		},
// 		{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/zawushouna.png",
// 			"imgName": "杂物收纳"
// 		}
// 	],
// }, {
// 	"pwcf": [{
// 		"imgUrl": "www.baidu.com",
// 		"imgName": "百度"
// 	}]
// }];
// var secondMenuObj = {
// 	"yxjj": [{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/tiexinsheji.png",
// 			"imgName": "贴心设计",
// 		},
// 		{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/zawushouna.png",
// 			"imgName": "杂物收纳"
// 		}
// 	],
// 	"pwcf": [{
// 		"imgUrl": "www.baidu.com",
// 		"imgName": "百度"
// 	}]
// };


// var secondMenuObj = [
// 	{
// 		"yxjj":[{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/tiexinsheji.png",
// 			"imgName": "贴心设计"
// 		},{
// 			"imgUrl": "./img/secondImg/yuxuanjiaju/zawushouna.png",
// 			"imgName": "杂物收纳"
// 		}]
// 	},{
// 		"pwcf":[{
// 			"imgUrl": "www.baidu.com",
// 			"imgName": "百度"
// 		}]
// 	}
// ];






// var secondMenuObj = {
// 	"yxjj":{
// 		"imgUrl":"./img/secondImg/yuxuanjiaju/tiexinsheji.png",
// 		"imgName":"贴心设计"
// 	}
// };
var secondMenuObj = {
	yxjj:[
		{"imgUrl":"./img/secondImg/yuxuanjiaju/tiexinsheji.png","imgName":"贴心设计"},
		{"imgUrl":"./img/secondImg/yuxuanjiaju/zawushouna.png","imgName":"杂物收纳"},
	],
	pwcf:[
		{"imgUrl":"www.baidu.com","imgName":"百度"},
	]
}
// var yxjj = [{
// 	"imgUrl": "111",
// 	"imgName": "111"
// }, {
// 	"imgurl": "222",
// 	"imgName": "222"
// }];
// var zong = [yxjj,pwcf];
