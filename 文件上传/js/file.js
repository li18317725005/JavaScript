(function($) {
    $.fn.fileImg = function(method) {
        var Img = $(this);
        var fileHtml = Img.last().html();
        var fileSet = {
            file_cont: function() {},
            file_num: '1',
            file_close: '.file_close',
        };
        $.extend(fileSet, method);
        Img.on("change", "input[type='file']", function() {
            var path = $(this).val();
            var Start = path.lastIndexOf(".");
            var objUrl = getObjectURL(this.files[0]);
            var num = Img.children().length;
            var ext = path.substring(Start, path.length).toUpperCase();
            if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                fileSet.file_cont();
                return false
            } else {
                if (objUrl) {
					$(this).siblings("i").find(".addbtn").hide();
                    $(this).siblings("i").css("background-image", "url(" + objUrl + ")");
                    $(this).siblings("span").show();
                    if (fileSet.file_num != 1) {
                        if (num < fileSet.file_num) {
                            Img.append(fileHtml)
                        }
                    }
                }
            }
        });
        Img.on("click", fileSet.file_close, function() {
            if ($(this).parent().parent().children().last().find("input[type='file']").val() != "") {
                Img.append(fileHtml)
            }
            $(this).parent().remove()
        })
    }
})(jQuery);

function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
}