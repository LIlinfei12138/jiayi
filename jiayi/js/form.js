// console.log($("input"));
// 获取到input
$input = $("input");
$input.focus(function(){
	if ($input.attr("value") == '山羊角咖啡杯') {
		$input.attr("value","");
	}
});
$input.blur(function(){
	if ($input.attr("value") == '') {
		$input.attr("value","山羊角咖啡杯");
	}
	return false;
});