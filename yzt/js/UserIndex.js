//底部导航
$('.b_f_left').click(function() {
//	$(this).addClass('active').siblings().removeClass('active');
});
/*小箭头*/
$(function(){
	$(window).scroll(function(e) {
        // 小火箭出现是有条件的。如果是大于第二屏的时候出现，否则隐藏
		var win_h = $(window).height()
		var win_top = $(window).scrollTop()
		
		if( win_h <= win_top ){
			$('.my-top').fadeIn();	
		}else{
			$('.my-top').fadeOut();
		}
    });
	
	$('.my-top').click(function(e) {
        
		$('html,body').animate({ scrollTop:0 },500)
    });
})
