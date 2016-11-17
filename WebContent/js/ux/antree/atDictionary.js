$package('antree.atDictionary');
antree.atDictionary = function(){
	var _box = null;
	var _this = {
		config:{
  			dataGrid:{
  				title:'数据字典',
  				iconCls:'icon-grid',
	   			url:'dataList.do',
	   			columns:[[
                        {field:'id',checkbox:true},
						{field:'bm',title:'表名',width:120,sortable:true}, //field:'email',title:'Email',width:120,sortable:true
						{field:'zd',title:'字段',width:120,sortable:true},
						{field:'dm',title:'代码',width:80,sortable:true},
						{field:'ms',title:'描述',width:80,sortable:true},											
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
	antree.atDictionary.init();
});	
