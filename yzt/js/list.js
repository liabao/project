$(function() {
		searchbox();
		classifytab();
		$('#pt-search').click(function() {
			$('#js-searchbox').toggle();
		});
	})
	//搜索框
function searchbox() {
	var _default = $("#js-search").val();

}
//分类选项卡
function classifytab() {
	var _li = $("#js-classify-title").find("li");
	$.each(_li, function(i) {
		$(this).click(function() {
			var type = $(this).data('type');
			if(type == 'brand') {
				$('#p-sidenav').css('display', 'block');
			} else {
				$('#p-sidenav').css('display', 'none');
			}
			$(this).addClass("on").siblings().removeClass("on");
			var _con = $(".js-con-0");
			_con.css("display", "block").siblings().css("display", "none");
			windowHeight();
		});
	});
}

function windowHeight() {
	var screenHeight = $(window).height();
	var titleHeight = $('.com-title').height();
	var comHeight = $('.p-area').height();
	var footerHeight = $('.com-footer-area').height();
	if(screenHeight > (titleHeight + comHeight + footerHeight)) {
		$('.p-area').css('height', (screenHeight - titleHeight - footerHeight) + 'px');
	}
}