$package('antree.qrcodeInfo');
antree.qrcodeInfo = function(){
	var _box = null;
	var _this = {
		config:{
  			dataGrid:{
  				title:'二维码信息',
  				iconCls:'icon-grid',
	   			url:'dataList.do',
	   			columns:[[
                        {field:'id',checkbox:true},
                        {field:'code',title:'编号',width:120,sortable:true},
						{field:'tplj',title:'图片路径',width:120,sortable:true},
						{field:'ljdz',title:'中文学名',width:120,sortable:true},
						{field:'ljcs',title:'别名',width:80,sortable:true},											
						{field:'bz',title:'备注',width:120,sortable:true}
				]],
				toolbar:[						
						{id:'btndelete',text:'删除',btnType:'remove'}
					]
			}
		},
		init:function(){
			_box = new YDataGrid(_this.config); 
			_box.init();
			_box.initTbar();
		}
	};	
	return _this;
}();

$(function(){
	var str = "http://www.jzgis.com";
	$('#qrcode').qrcode(str);
	
	$("#btn_create").click(function(){
		$("#qrcode").empty();
		var str = toUtf8($("#qrcodetxt").val());
		$('#qrcode').qrcode(str);
	});
	
	$("#btn_save").click(function(){
		$("#qrcode").empty();
		var str = toUtf8($("#qrcodetxt").val());
		$('#qrcode').qrcode(str);
		//-------
		if($("#code").val()==""){
			alert("请先输入古树名木编号！");
			return;
		}
		if($("#qrcodetxt").val()==""){
			alert("请先输入二维码字符串！");
			return;
		}
		var can = $("#qrcode canvas").get(0).getContext("2d");
		var context = can.canvas.toDataURL("image/png");
		//-------------
		var data = {code:$("#code").val(),qrcodetxt:$("#qrcodetxt").val(), content:context};		
		$.ajax({
			   type: "POST",
			   url:msUrl + "/qrCode/save.do",
			   data:data,
			   dataType:'json',			   
			   success: function(data){
				   alert(data.msg);
			   },
			   error:function(){
				   //alert( "添加失败！");
				   alert(data.msg);
			   }
			});
	});
});	

function convertCanvasToImage(canvas) {  
    //新Image对象，可以理解为DOM  
    var image = new Image();  
    // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
    // 指定格式 PNG  
    image.src = canvas.toDataURL("image/png");  
    return image;  
} 

function toUtf8(str) {   
    var out, i, len, c;   
    out = "";   
    len = str.length;   
    for(i = 0; i < len; i++) {   
    	c = str.charCodeAt(i);   
    	if ((c >= 0x0001) && (c <= 0x007F)) {   
        	out += str.charAt(i);   
    	} else if (c > 0x07FF) {   
        	out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
        	out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
    	} else {   
        	out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
    	}   
    }   
    return out;   
}  


