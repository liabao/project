//上传图片
function clearFile(o) {
	var _length = $("#warp").find("li").length;
	var _index = $(o).parent().index() + 1;
	var _val = $(o).parent().find("input").val();
	var isDelete = false;

	if(_length != 1 && _index != _length && _val != "") {
		$(o).parent().remove();
		isDelete = true;
	}
	if(_index == _length && _val != "") {
		$(o).parent().remove();
		isDelete = true;
	}
	if(isDelete) {
		_length = $("#warp").find("li").length;
		if($("#warp").find("li").eq(_length - 1).find("input").val() != "")
			$("#warp").append('<li><input type="file"  onchange="fileChange(this)" class="warp-img"><img src="../Images/images14.png"><span class="del cIcon" onclick="clearFile(this)" style="display:none"></span></li>');
	}
}

function fileChange(o) {
	var $file = $(o);
	$file.parent().find("span").css("display", "block");
	var fileObj = $file[0];
	var windowURL = window.URL || window.webkitURL;
	var dataURL;
	var $img = $(o).parent().find("img");
	if(fileObj && fileObj.files && fileObj.files[0]) {
		dataURL = windowURL.createObjectURL(fileObj.files[0]);
		$img.attr('src', dataURL);
	}
	var _length = $("#warp").find("li").length;
	if($file.parent().index() + 1 == _length && _length < 9) {
		$file.parent().parent().append('<li><input type="file"  onchange="fileChange(this)" class="warp-img"><img src="../Images/images14.png"><span class="del cIcon" onclick="clearFile(this)" style="display:none"></span></li>');
	}
}