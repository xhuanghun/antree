$package('antree.antreeInfo');
antree.antreeInfo = function(){
	var _box = null;
	var _this = {
		config:{
  			dataGrid:{
  				title:'古树名木信息',
  				iconCls:'icon-grid',
	   			url:'dataList.do',
	   			columns:[[
                        {field:'id',checkbox:true},
                        {field:'code',title:'古树名木编号',width:120,sortable:true},
						{field:'gldw',title:'管理单位',width:120,sortable:true}, //field:'email',title:'Email',width:120,sortable:true
						{field:'glry',title:'管理人员',width:120,sortable:true},
						{field:'zwxm',title:'中文学名',width:120,sortable:true},
						{field:'bm',title:'别名',width:80,sortable:true},
						{field:'ldm',title:'拉丁名',width:80,sortable:true},
						{field:'ldtj',title:'立地条件',width:100,sortable:true},
						{field:'szhj',title:'生长环境',width:100,sortable:true},
						{field:'szs',title:'生长势',width:100,sortable:true},
						{field:'bz',title:'备注',width:120,sortable:true}
				]]
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