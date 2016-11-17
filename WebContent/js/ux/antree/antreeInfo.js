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
                        {field:'code',title:'编号',width:120,sortable:true},
						{field:'sz',title:'树种',width:120,sortable:true},
						{field:'zwxm',title:'中文学名',width:120,sortable:true},
						{field:'bm',title:'别名',width:80,sortable:true},
						{field:'ldm',title:'拉丁名',width:80,sortable:true},
						{field:'ks',title:'科属',width:100,sortable:true	},	
						{field:'ssqy',title:'所属区域',width:100,sortable:true	},	
						{field:'bz',title:'备注',width:120,sortable:true}/*,
						{field:'opt',title:'操作',width:160,align:'center',   
			  	        	formatter:function(value,rec,index){     
		                        var v = '<a href="#" onclick="viewImages(\''+ index +'\')">查看照片</a> | ';   
		                        var d = '<a href="#" onclick="viewImages(\''+ index +'\')">定位</a> ';   
		                        return v + d;//return s+e+d;     
		                    } 
			  	        }*/
				]],
				toolbar:[
						{id:'btnedit',iconCls:'icon-add',text:'添加',btnType:'addrnter',handler:function(){
							var data ={};
							antree.getById('getMaxCode.do',data,function(result){
								if(result.success){
									$("#code").val(result.antreeCode);
									 var _url= msUrl + "/anTree/create.do";					    
									 window.location.href=_url;
								}
								else{
									alert("无法添加古树名木信息，请联系管理员!"); 
								}
							  });							   
						    }					   
						},
						{id:'btnedit',text:'编辑',btnType:'edit'},
						{id:'btndelete',text:'删除',btnType:'remove'},
						{id:'btnUpImage',iconCls:'',text:'上传图片',btnType:'upload',handler:function(){
							var Grid = $('#data-list');
							var records=Grid.datagrid('getChecked');
							if(records && records.length == 0){
								antree.alert('警告','未选中记录.','warning');
								return;
							}else if(records && records.length > 1){
								antree.alert('警告','只能选择一行记录.','warning');
								return;
							}else{
								//var idKey = records[0]['id'] ; //主键
								var codeKey = records[0]['code'];//编号
								$('#codeKey').val(codeKey);
								$('#upload-win').dialog('open');
							}
						  }
						}
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
	
	function change_photo(){
	    PreviewImage($("input[name='upload_image']")[0], 'Img', 'Imgdiv');
	};
});	


