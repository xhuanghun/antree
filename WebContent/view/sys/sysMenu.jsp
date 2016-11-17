<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
  <body>
<div class="warp easyui-panel"  data-options="border:false,fit:true" >
 	 <div class="easyui-panel ui-search-panel" title="搜索" data-options="striped: true,collapsible:true,iconCls:'icon-search'">   
 	 <form id="searchForm">
 	 	<input class="hidden" id='search_parentId' name="parentId">
 	 	<p class="ui-fields">
            <label class="ui-label">名称:</label>
            <input name="name"  class="easyui-box ui-text" style="width:100px;"> <!-- class="easyui-box ui-text" -->
        </p>
        <a id="btn-search" class="easyui-linkbutton"  iconCls="icon-search">搜索</a> <!-- iconCls="icon-search" -->
      </form>  
     </div> 
     <form id="listForm" method="post">
     <table id="data-list" data-options="fit:true"></table>
     </form>
     <div id="edit-win" class="easyui-dialog" title="菜单" data-options="closed:true,iconCls:'icon-save',modal: true"  style="width:500px;height:450px;">  
     	<form id="editForm" class="ui-form" method="post"> 
     	 <!-- 隐藏文本框 -->
     	 <input class="hidden" name="id">
     	 <input class="hidden" name="deleted">
    	 <input class="hidden" name="parentId" id='edit_parentId'>
    	 <div class="easyui-panel" border='false' style="width:450px;height: 350px;">  
	        <div class="easyui-layout" data-options="fit:true">  
	            <div data-options="region:'north',split:true" style="height:185px;padding:10px">  
	               <div class="ftitle">信息</div>    
		           <div class="fitem">  
		               <label>名称:</label>  
		               <input class="easyui-validatebox" type="text" name="name" data-options="required:true">
		           </div>  
		           <div class="fitem">  
		               <label>URL:</label>  
		               <input type="text" name="url"></input>
		           </div>  
		           <div class="fitem">  
		               <label>排序:</label>  
		               <input class="easyui-numberbox" type="text" value="1" name="rank" data-options="required:true,min:0,max:999">
		           </div> 
		           <div class="fitem">  
		               <label>Actions:</label>  
		               <input class="easyui-validatebox" type="text" name="actions" >
		               <span>注册的Action.按"|"分隔</span>
		           </div> 
	            </div>
	            <div data-options="region:'center'">  
	              	<div id="toolbar">  
				        <a href="javascript:void(0)" id='addLine_btn' class="easyui-linkbutton" iconCls="icon-add" plain="true" >增加</a>  
				        <a href="javascript:void(0)" id='addDefLine_btn'class="easyui-linkbutton" iconCls="icon-add" plain="true" >增加默认</a>
				        <a href="javascript:void(0)" id='delAllLine_btn'class="easyui-linkbutton" iconCls="icon-remove" plain="true" >删除所有</a>  
				    </div>  
				    <table id="btn-tb" style="width:100%">
				    	<thead>
				    	<tr>
				    		<th width="5%"></th>
				    		<th width="25%">按钮名称:</th>
				    		<th width="25%">按钮类型</th>
				    		<th width="35%">注册Action(用"|"分格)</th>
				    		<th width="10%">操作</th>
				    	</tr>
				    	</thead>
				    	<tbody>
				    	</tbody>
				    </table>
	            </div>
	         </div>
	       </div>	      
     	</form>
  	 </div>
</div>

  <script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
  <script type="text/javascript" src="${msUrl}/js/ux/sys/sysMenu.js"></script>
  </body>
</html>
