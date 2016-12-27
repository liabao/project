
// 全选，全不选
$(function() {

	$("#buy-sele-all").click(function() {
		var flag = $(this).val();
		if (flag == 1) {
			$(this).val(0);
			$(".checkbox").attr("checked", true);
		} else {
			$(this).val(1);
			$(".checkbox").attr("checked", false);
		}
		priceCount();
	});

});
//勾事件
function checkedClick(obj) {
	var flag = $(obj).prev().is(':checked');
	if (flag) {
		$(obj).prev().attr("checked", false);
		$("#buy-sele-all").attr("checked", false); //将全选勾除
		$("#buy-sele-all").val(1);

	} else {
		$(obj).prev().attr("checked", true);
		//如果全部都选中了，将全选勾选
		var groupUL = $(".grid-wrap").find("ul").find("li").get();
		var checkUL = $(".grid-wrap").find("div[class='icheck pull-left mr5'] :checkbox:checked").get();
		if (groupUL.length == checkUL.length) {
			$("#buy-sele-all").attr("checked", true);
			$("#buy-sele-all").val(0);
		}
	}
	priceCount();
}
/*算加减* */
function priceCount() {
	var price = 0;
	
	var isBool = false;
	$(".grid li").each(function() {
		if ($(this).find(".checkbox").prop("checked") == true) {
			var _price = parseFloat($(this).find(".row-out-tit span").find("i").text().substring(1));
			var numbers = parseInt($(this).find("#order-count-input").val());
			price += _price * numbers;
			isBool = true;
		}
	})
	if (isBool){
		$(".disabled_submit").css("background", "#6DC7CF");

	}
	else{
		$(".disabled_submit").css("background", "#6DC7CF");		
	}
	$("#allmoney").html("￥"+price);
	
}
function submitClick() {
	var isBool = false;
	$(".grid li").each(function() {
		if ($(this).find(".checkbox").prop("checked") == true) {

			isBool = true;
		}
	})
	if (isBool)
		location.href = "Settlementindex.html";
}
function min(o) {
	var t = $(o).next();
	if(t.val() > 1) {
		t.val(parseInt(t.val()) - 1)
		priceCount();
	}
}

function add(o) {
	var t = $(o).prev();
	t.val(parseInt(t.val()) + 1)
		priceCount();
}