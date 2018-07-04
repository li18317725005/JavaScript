jQuery.fn.fileAll=function(fileNum){
	var AllImg={
		file_Max:'6',/*图片数量*/
		file_box:'img-box',/*上传盒子class*/
		del_name:'img_del',/*删除盒子class*/
		Add_Id:'img-add',/*新增按钮ID*/
		Add_Src:'images/four.jpg',/*新增Img*/
	}
	$.extend(AllImg,fileNum); 
	var Img = $(this);
	Img.find("img").each(function(){
		$(document).on("click","."+AllImg.del_name,function(){
			$(this).parents("."+AllImg.file_box).remove();
		})
		var Src=$(this).attr("src");
		$(this).siblings("input[type='file']").attr("value",Src)
	})
	$("#"+AllImg.Add_Id).on("click",function(){
		var ImgNum= Img.find("."+AllImg.file_box).length;
		var Img_Html='<div class="'+AllImg.file_box+'"><span class="'+AllImg.del_name+'"></span><input type="file"><img src="'+AllImg.Add_Src+'"></div>';
		if(ImgNum<AllImg.file_Max){
			Img.append(Img_Html)
		}
	})
	$(document).on("change","input[type='file']",function(){
		var objUrl = getObjectURL(this.files[0]);
		if (objUrl) {
			$(this).siblings("img").attr("src", objUrl) ;
			$(this).attr("value",objUrl)
		}
	});			
}
function getObjectURL(file) {
	var url = null ; 
	if (window.createObjectURL!=undefined) {
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { 
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { 
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}
$("#four").fileAll({
	file_Max:'6',/*图片数量*/
	file_box:'img-box',/*上传盒子class*/
	del_name:'img_del',/*删除盒子class*/
	Add_Id:'img-add',/*新增按钮ID*/
	Add_Src:'images/four.jpg',/*新增Img*/
});