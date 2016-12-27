//地址
$(function() {
		$('.default i').click(function() {
			$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
		});
	})
	//删除
$("[name=delete-product]").click(function() {
	if(confirm("确认删除吗？")) {
		//只有两行时
		if($("div .addressList").length == 0) {
			$(this).parents(".addressList").prev().remove();
		} else {
			//删除当前行
			if($(this).parents(".addressList").prev().find("span").eq(0).find("span").length > 0 && $(this).parents(".addressList").next().length == 0) {
				$(this).parents(".addressList").prev().remove();
			}
		}
		$(this).parents(".addressList").remove(); //删除当前行
	
	}
});