//限制输入数字
$("[name=order-count-input]").keyup(function() {

	if(this.value.length == 1) {
		this.value = this.value.replace(/[^1-9]/g, '');
	} else {
		this.value = this.value.replace(/\D/g, '');
	}
	if(this.value == "" || this.value == "0") {
		//this.value = 1;
	}
	if(this.value.substr(0, 1) == "0") {
		this.value = this.value.substr(1);
	}

});
//限制输入数字
$("[name=order-count-input]").change(function() {
	if(this.value.length == 1) {
		this.value = this.value.replace(/[^1-9]/g, '');
	} else {
		this.value = this.value.replace(/\D/g, '');
	}
	if(this.value == "" || this.value == "0") {
		this.value = 1;
	}
	if(this.value.substr(0, 1) == "0") {
		this.value = this.value.substr(1);
	};

});
//筛选分类
$('.list li').click(function() {
	$(this).addClass('cur').siblings().removeClass('cur');
});
$('.selected').click(function() {

	$(".lib_content").toggle();

	if($(".lib_content").css("display") == "block") {
		$(this).find("span").attr("class", "filter");
		$(this).find("a").attr("class", "cur");
	} else {
		$(this).find("span").attr("class", "choose-icon filter");
		$(this).find("a").attr("class", "");
	}

});
//排序
//function sortNumber(a,b){
//	return a - b
//}
//var arr = new Array(6)
//arr[0] = "10"
//arr[1] = "5"
//arr[2] = "40"
//arr[3] = "25"
//arr[4] = "1000"
//arr[5] = "1"
//document.write(arr + "<br />")
//document.write(arr.sort(sortNumber))