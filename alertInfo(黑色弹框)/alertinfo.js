
/*提示框*/
function alertInfo(hd){
	if($('.am-Prompt').html()){
		$(".am-Prompt").remove();
		popup(hd)
	}else{
		popup(hd)
	}	
}
function popup(hd){
	var temStr = '<div class="am-Prompt "><div class="Prompt">'+hd+'</div></div>';
	$("body").append(temStr);
	$(".am-Prompt").show();
	$(".am-Prompt").addClass("animation")
	setTimeout(function(){
		$(".am-Prompt").removeClass("animation")
		$(".am-Prompt").hide();
	},2000)
}
