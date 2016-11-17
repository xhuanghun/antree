$package('antree.antreeInfo');
antree.antreeInfo = function(){
	var _box = null;
	var _this = {
		config:{
  			dataGrid:{
  				title:'照片信息',
  				iconCls:'icon-grid',
	   			url:'dataList.do',
	   			columns:[[
                        {field:'id',checkbox:true},
                        {field:'code',title:'古树名木编号',width:120,sortable:true},
						{field:'zpmc',title:'照片名称',width:120,sortable:true}, //field:'email',title:'Email',width:120,sortable:true
						{field:'zpms',title:'照片描述',width:120,sortable:true},
						{field:'lx',title:'类型',width:120,sortable:true},
						{field:'dx',title:'大小',width:80,sortable:true},
						{field:'scry',title:'上传人员',width:80,sortable:true},
						{field:'scsj',title:'上传时间',width:100,sortable:true},
						{field:'bz',title:'备注',width:120,sortable:true}
				]],
				toolbar:[
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
	antree.antreeInfo.init();
});	


var Codes = {
		getJSDJCodeString : function(value){
			switch(value){
			  case '高速':
				  return '10';
			      break;
			  case '一级':
				  return '11';
				  break;
			  case '二级':
				  return '12';
				  break;
			  case '三级':
				  return '13';
				  break;
			  case '四级':
				  return '14';
				  break;
			  case '等外':
				  return '30';
				  break;
			  default: return '';
			}
		},
		getJSDJNameString : function(value){
			switch(value){
			  case '10':
				  return '高速';
			      break;
			  case '11':
				  return '一级';
				  break;
			  case '12':
				  return '二级';
				  break;
			  case '13':
				  return '三级';
				  break;
			  case '14':
				  return '四级';
				  break;
			  case '30':
				  return '等外';
				  break;
			  default: return '';
			}
		},
		getLMLXNameString : function(value){
			switch(value){
			  case '11':
				  return '沥青混凝土';
			      break;
			  case '12':
				  return '水泥混凝土';
				  break;
			  case '21':
				  return '沥青贯入式';
				  break;
			  case '22':
				  return '沥青碎石';
				  break;
			  case '23':
				  return '沥青表面处治';
				  break;
			  case '31':
				  return '砂石路面';
				  break;
			  case '32':
				  return '石质路面';
				  break;
			  case '33':
				  return '渣石路面';
				  break;
			  case '34':
				  return '砖铺路面';
				  break;
			  case '35':
				  return '砼预制块';
				  break;
			  case '36':
				  return '无路面';
				  break;
			  default: return '';
			}
		}
};