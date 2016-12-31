$(function() {
	//mainform1
	//密码是否可见(mainform1)
	$(".pwdBtnShow").click(function() {
		if($(".pwdBtnShow").attr("isshow") == "false") {
			$(".pwdBtnShow i").css("background-position", "13px 9px");
			$(".password").hide();
			$(".password1").val($(".password").val());
			$(".password1").show();
			$(".pwdBtnShow").attr("isshow", "true");
		} else {
			$(".pwdBtnShow i").css("background-position", "13px 9px");
			$(".password1").hide();
			$(".password").val($(".password1").val());
			$(".password").show();
			$(".pwdBtnShow").attr("isshow", "false");
		}

	});

	//mainForm2
	//密码是否可见(mainform2)
	$(".pwdBtnShowN").click(function() {
		if($(".pwdBtnShowN").attr("isshow") == "false") {
			$(".pwdBtnShowN i").css("background-position", "13px 9px");
			$(".passwordN").hide();
			$(".password1N").val($(".passwordN").val());
			$(".password1N").show();
			$(".pwdBtnShowN").attr("isshow", "true");
		} else {
			$(".pwdBtnShowN i").css("background-position", "13px 9px");
			$(".password1N").hide();
			$(".passwordN").val($(".password1N").val());
			$(".passwordN").show();
			$(".pwdBtnShowN").attr("isshow", "false");
		}

	});

});
//注册下一步切换
$(function() {
	$('.similar-content li i').click(function() {
		$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
	});
})