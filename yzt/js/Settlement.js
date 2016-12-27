//勾事件
$(function() {
		$('.grid i').click(function() {
			$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
		});
	})
//加减法
function min(o) {
	var t = $(o).next();
	if(t.val() > 1) {
		t.val(parseInt(t.val()) - 1)
//		priceCount
	}
}

function add(o) {
	var t = $(o).prev();
	t.val(parseInt(t.val()) + 1)
//	priceCount
}

//收货地址
$(function() {
	$('.new-tit i').click(function() {
		$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
		$("[data-default='receiver']").text($(this).parent().find("span").eq(0).text());
        $("[data-default='mobile']").text($(this).parent().find("span").eq(1).text());
        $("[data-default='address']").text($(this).parent().parent().find("span").find("p").eq(0).text());
        $("[data-default='a']").attr("href", $(this).parent().parent().find("span").find("p").eq(1).find("a").attr("href"));		
	});
})
$(function() {
	$(".new-abtn-type1").click(function() {   
	$(".new-mu-pl").toggle();
	 $(".new-mu-p").toggle(); 
	})
})

