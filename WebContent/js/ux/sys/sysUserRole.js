$package('antree.UserRole');
antree.UserRole = function(){
	var _box = null;
	var _this = {
		openAddRole:function(record){
			$("#roleIds").combobox('clear'); //清空选择框
			$(".selectId").attr('checked',false); //checkbox 取消选中
			_box.handler.edit(function(result){
				$.each(result.data.roleIds,function(i,roleId){
					$("#selectId_"+roleId).attr("checked", true);
				});
			});
		},
		config:{
			action:{
				save:'addUserRole.do',
				getId:'getUser.do'
			},
  			dataGrid:{
  				title:'用户列表',
  				iconCls:'icon-grid',
  				fit:false,
	   			url:'userList.do',
	   			columns:[[
						{field:'id',checkbox:true},
						{field:'login',title:'用户',width:120,sortable:true,align:'center'},
						{field:'nickName',title:'名称',width:100,sortable:true,align:'center'},
						{field:'state',title:'状态',width:80,align:'center',sortable:true,styler:function(value,row,index){
							if(value == 1){
							  return 'color:red;';  
							}
						},
						formatter:function(value,row,index){
							if(value == 0){
								return "可用";
							}
							if(value == 1){
								return "禁用";
							}
						}},
						{field:'createTime',title:'创建时间',width:200,sortable:true,align:'center'},
						{field:'loginCount',title:'登录次数',align:'right',width:80,sortable:true,align:'center'},
						{field:'loginTime',title:'登录时间',width:200,sortable:true,align:'center'},
						{field:'roleStr',title:'角色',width:270,sortable:true,align:'center'}
				]],
				toolbar:[
					{id:'btnedit',iconCls:'icon-edit',text:'授权',btnType:'authRole',handler:function(){
							var selected = _box.utils.getCheckedRows();
							if ( _box.utils.checkSelectOne(selected)){
								_this.openAddRole(selected);
							}
						}
					}
				]
			}
		},
		init:function(){
			$("#roleIds").combobox({
				url:'../sysRole/loadRoleList.do',
				valueField:'id',
				textField:'roleName',
				multiple:true,
				formatter:function(row){
				  var s = "<span><input type='checkbox' class='selectId' style='vertical-align: middle' id='selectId_"+row.id+"'>"+row.roleName+"<span>"
				  return s;  
				},
				onSelect:function(record){
					$("#selectId_"+record.id).attr("checked", true);
				},
				onUnselect:function(record){
					$("#selectId_"+record.id).attr("checked", false);
				}
			});
			_box = new YDataGrid(_this.config); 
			_box.init();
			_box.initTbar();
		}
	}
	return _this;
}();

$(function(){
	antree.UserRole.init();
});		