$(function() {
		$('#express').click(function() {
			$(".page_title").css({
				"display": "block"
			});
		});

})
	//限制输入数字
	$("[name=order-count-input]").keyup(function() {

		if (this.value.length == 1) {
			this.value = this.value.replace(/[^1-9]/g, '');
		} else {
			this.value = this.value.replace(/\D/g, '');
		}
		if (this.value == "" || this.value == "0") {
			//this.value = 1;
		}
		if (this.value.substr(0, 1) == "0") {
			this.value = this.value.substr(1);
		}
		
	});
	//限制输入数字
	$("[name=order-count-input]").change(function() {
		if (this.value.length == 1) {
			this.value = this.value.replace(/[^1-9]/g, '');
		} else {
			this.value = this.value.replace(/\D/g, '');
		}
		if (this.value == "" || this.value == "0") {
			this.value = 1;
		}
		if (this.value.substr(0, 1) == "0") {
			this.value = this.value.substr(1);
		}

	});
//提现切换
$(function() {
	$('.Present-ul li i').click(function() {
		$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
	});
})
//地址切换
$(function() {
	$('.address-foot i').click(function() {
		$(this).toggleClass("cur").parents().siblings().children().find("i").removeClass("cur");
	});
})
//加减法
function min(o) {
	var t = $(o).next();
	if(t.val() > 1) {
		t.val(parseInt(t.val()) - 1)
			//		goldCount();
	}
}

function add(o) {
	var t = $(o).prev();
	t.val(parseInt(t.val()) + 1)
		//	goldCount();
}
//今日推荐
	$(function(){
		$('.subnav li').mousedown(function(){
		$(this).attr('class','cur').siblings().attr('class','')
		var num = $(this).index()
		$('.page-warp-hot').eq(num).show().siblings().hide();
	});
	
 })
//规格切换	
	$(function() {
	$('.g_attr li').click(function() {
		$(this).attr('class','cur').siblings().attr('class','')
		var num = $(this).index()
	});
})
//弹出层的时候用
//e:要显示层的Id  例如：div1|div2  多个用|隔开，一个无需|
//c:要关闭隐藏层的Id   例如：div1|div2  多个用|隔开，一个无需|
//f:遮罩层
function EjectDiv(e, c, f) {
	var bgdiv = document.getElementById(f);
	bgdiv.style.width = document.body.scrollWidth; //设置遮罩层宽
	$("#" + f).height($(document).height()); //设置遮罩层的高

	//要显示的层
	if (e != "") {
		var a = e.split('|');
		for (var i = 0; i < a.length; i++) {
			$("#" + a[i]).css("display", "block");
		}   
	}
	//要隐藏的层
	if (c != "") {
		var b = c.split('|');
		for (var j = 0; j < b.length; j++) {
			$("#" + b[j]).css("display", "none");
		}
	}
}
//关闭层的时候用
//c：要隐藏层的Id 例如：div1|div2  多个用|隔开，一个无需|
function closeDiv(c) {
	//要隐藏的层
	if (c != "") {
		var b = c.split('|');
		for (var j = 0; j < b.length; j++) {
			$("#" + b[j]).css("display", "none");
		}
	}
}

function HideDiv() {
	closeDiv("row_col|row_col_1|row_col_2|row_col_3|row_col_4|row_col_5|row_col_6|row_col_7|row_col_8|row_col_9|row_col_10|row_col_11|row_col_12|row_col_13|row_col_14|row_col_15|row_col_16|row_col_17|row_col_18");
}
//我的拼购切换 
	$(function(){
		$('.purchase li').mousedown(function(){
		$(this).attr('class','cur').siblings().attr('class','')
		var num = $(this).index()
		$('.div_orderlist').eq(num).show().siblings().hide();
	});
	
 })
//
$(function () {      
        $('.Complaint li').mouseenter(function () {
            $(this).attr('class', 'cur').siblings().attr('class', '')
            $(".Wmfe_Type").val($(this).index() + 1);
         
        });
    })
//产品详情
$(function(){
		$('.consulting li').mousedown(function(){
		$(this).attr('class','cur').siblings().attr('class','')
		var num = $(this).index()
		$('.Detailed-center').eq(num).show().siblings().hide();
	});
	
 })