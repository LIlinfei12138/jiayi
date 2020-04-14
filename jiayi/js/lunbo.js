// 自动轮播




// // 大图片轮播
// // 多少张图片
// var length = $("#big-ul>li").length;
// console.log(length);
// // 克隆第一张图片
// $("#big-ul").append($("#big-ul>li:first").clone(true));
// var count = 0;

// function rightMove() {
// 	count++;
// 	$($("#bottom-ul>li")[count]).addClass("brighten");
// 	if (count == length) {
// 		$($("#bottom-ul>li")[0]).addClass("brighten");
// 	}
// 	$("#big-ul").stop(true).animate({
// 		"left": count * -1350 + "px"
// 	}, 1000, function() {
// 		if (count >= length) {
// 			$("#big-ul").css("left", "0px");
// 			count = 0;
// 		}
// 	});
// 	$($("#bottom-ul>li")[count - 1]).removeClass("brighten");
// }
// var timer = setInterval(rightMove, 2000);
// $("#big-ul").mouseenter(function() {
// 	clearInterval(timer);
// 	$("#lunbo-bottom-box").css("display", "block");
// });
// $("#big-ul").mouseleave(function() {
// 	timer = setInterval(rightMove, 2000);
// 	$("#lunbo-bottom-box").css("display", "none");
// });
// // 底部滑动
// var flag = true;
// $("#bottom-ul>li").each(function(idx, item) {
// 	$(item).mouseenter(function() {
// 		if (!flag) return;
// 		flag = false;
// 		$("#lunbo-bottom-box").css("display", "block");
// 		$(item).addClass("brighten").siblings().removeClass("brighten");
// 		clearInterval(timer);
// 		count = idx;
// 		$("#big-ul").stop(true).animate({
// 			"left": count * -1350 + "px"
// 		}, 1000);
// 		setTimeout(function() {
// 			flag = true;
// 		}, 200);
// 	});
// 	$(item).mouseleave(function() {
// 		// timer = setInterval(rightMove, 2000);
// 		$("#lunbo-bottom-box").css("display", "none");
// 	});
// });





// 不自动轮播

var length = $("#big-ul>li").length;

var count = 0;

var flag = true;
$("#bottom-ul>li").each(function(idx, item) {
	$("#bottom-ul>li").each(function(idx, item) {
		$(item).mouseenter(function() {
			if (!flag) return;
			flag = false;
			$("#lunbo-bottom-box").css("display", "block");
			$(item).addClass("brighten").siblings().removeClass("brighten");
			count = idx;
			$("#big-ul").stop(true).animate({
				"left": count * -1350 + "px"
			}, 1000);
			setTimeout(function() {
				flag = true;
			}, 100);
		});
	});
		$(item).mouseleave(function() {
			$("#lunbo-bottom-box").css("display", "none");
		});
});
$("#big-ul").mouseenter(function() {
	$("#lunbo-bottom-box").css("display", "block");
});
$("#big-ul").mouseleave(function() {
	$("#lunbo-bottom-box").css("display", "none");
});
