$("#my-jiayi>a").mouseenter(function(even) {
	event.stopPropagation();
	$("#hover-my-jiayi").css("display", "flex");
	$("#hover-my-jiayi").stop(true);
	$("#hover-my-jiayi").animate({
		opacity: "1",
		top: "26px"
	}, 200);
});
$("#my-jiayi").mouseleave(function(even) {
	event.stopPropagation();
	$("#hover-my-jiayi").stop(true);
	$("#hover-my-jiayi").animate({
		opacity: "0",
		top: "40px"
	}, 200,  function() {
		$("#hover-my-jiayi").css("display", "none");
	});
});
$("#hover-my-jiayi").mouseleave(function(even) {
	even.stopPropagation();
	$("#hover-my-jiayi").stop(true);
	$("#hover-my-jiayi").animate({
		opacity: "0",
		top: "40px"
	}, 200,  function() {
		$("#hover-my-jiayi").css("display", "none");
	});
});








$("#hand-jiayi>a").mouseenter(function(){
	$("#hover-hand-jiayi").css("display", "block");
	$("#hover-hand-jiayi").stop(true);
	$("#hover-hand-jiayi").animate({
		opacity: "1",
		top: "26px"
	}, 200);
});
$("#hand-jiayi").mouseleave(function(){
	$("#hover-hand-jiayi").stop(true);
	$("#hover-hand-jiayi").animate({
		opacity: "0",
		top: "40px"
	}, 200,  function() {
		$("#hover-hand-jiayi").css("display", "none");
	});
});
$("#hover-hand-jiayi").mouseleave(function(){
	$("#hover-hand-jiayi").stop(true);
	$("#hover-hand-jiayi").animate({
		opacity: "0",
		top: "40px"
	}, 200,  function() {
		$("#hover-hand-jiayi").css("display", "none");
	});
});













$("#mai-hover").mouseover(function(){
	$("#form-hover").css("display","flex");
	$("#form-hover").stop(true);
	$("#form-hover").animate({
			opacity: "1",
			bottom: "-37px"
		}, 400);
});
$("#mai-hover").mouseleave(function(){
	$("#form-hover").stop(true);
	$("#form-hover").animate({
			opacity:"0",
			bottom: "-73px"
		}, 400,function(){
			$("#form-hover").css("display", "none");
		});
});