$package('antree.enterRoad');
$(function(){
	//alert( msUrl + "/enterRoad/getComboboxList.do");
	$('#btn-submit').click(function(){
        //alert($("#enterForm").form('validate'));
		if($("#addForm").form('validate')==false)return; //表单验证 
		var data = $("#addForm").serializeArray(); //自动将form表单封装成json
		$.ajax({
			   type: "POST",
			   url:msUrl + "/anTree/save.do",
			   data:data,
			   dataType:'json',			   
			   success: function(){
			     alert( "古树名木信息添加成功！");
			     var _url= msUrl + "/anTree/list.do";						    
				 window.location.href=_url;
			   }
			});
	});
	$('#btn-reset').click(function(){
		$("#layer").combobox('setValue','road_gs');
		$('#qdzh').numberbox('setValue', 0.000);
		$('#zdzh').numberbox('setValue', 0.000);
		$('#ldlc').numberbox('setValue', 0.000);
/*		$('#ldjsdj').numberbox('setValue', '11');
		$('#ldlmlx').numberbox('setValue', '21');*/
		$('#hdsl').numberbox('setValue', 0);
		$('#lmkd').numberbox('setValue', 0.0);
		$('#ljkd').numberbox('setValue', 0.0);
		$('#ldbm').val("");
		$('#lxbm').val("");
		$('#lxmc').val("");
		$('#qdmc').val("");
		$('#zdmc').val("");
		$('#tbwd').val("");
		$('#bz').val("");
	});
	$('#btn-back').click(function(){
		history.go(-1);
	});	
	/*处理时间的格式：2013-07-20*/
	/*$('#jcsjStr,#zjgjsjStr').datebox({
		closeText:"关闭",
		currentText:"今天",
		formatter:function(date){
			var y=date.getFullYear();
			var m=date.getMonth()+1;
			var d=date.getDate();
			//var h=date.getHours();
			//var M=date.getMinutes();
			//var s=date.getSeconds();
			function formatNumber(value){
				return (value <10 ? '0':'')+value;
			}
			//alert(formatNumber(h));
			return y+'-'+m+'-'+d;//+' '+formatNumber(h)+':'+formatNumber(M)+':'+formatNumber(s);
		},
		parser:function(s){
			var t=Date.parse(s);
			if(!isNaN(t)){
				return new Date(t);
			}else{
				return new Date();
			}
		}
	});	
	var date = new Date(); 
	var val = date.getFullYear()+"-" + (date.getMonth()+1)+"-" + date.getDate();
    //alert(val);
	$('#jcsjStr,#zjgjsjStr').datebox('setValue', val);*/
	var date = new Date(); 
	var val = date.getFullYear()+"-" + (date.getMonth()+1)+"-" + date.getDate();
	$('#jcsjStr,#zjgjsjStr').datebox('setValue', val);
});
/*onChange:function (newValue, oldValue){  
    if(newValue !=null){  
        //alert(newValue+oldValue);  
        var urlStr ="/ciccpsMember/member/getMemberSelectByName?name=" + encodeURIComponent(newValue);  
        $("#sel").combobox("reload",urlStr);  
    }
    
   
   $('#ldjsdjCombobox').combobox({  
		required : false,
		url : msUrl + "/enterRoad/getComboboxList.do", 
        valueField:'ldjsdj',  
        textField:'ldjsdj',
		mode : 'remote',
		panelHeight : 'auto',
		delay : 500,
		value : ''        
    }); 
    
}*/