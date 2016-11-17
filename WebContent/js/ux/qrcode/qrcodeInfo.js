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
	antree.qrcodeInfo.init();
});	


