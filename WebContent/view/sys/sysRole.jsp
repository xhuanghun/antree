<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
	<body>
<div class="warp easyui-panel" data-options="border:false">
	<!-- Search panel start -->
 	 <div class="easyui-panel ui-search-panel" title="搜索" data-options="striped: true,collapsible:true,iconCls:'icon-search'">  
 	 <form id="searchForm">
 	 	<p class="ui-fields">
            <label class="ui-label">角色名称:</label> 
            <input name="roleName" class="easyui-box ui-text" style="width:100px;height:25px">
        </p>  
        <a href="#" id="btn-search" class="easyui-linkbutton" iconCls="icon-search">搜索</a>
      </form>  
     </div> 
     <!--  Search panel end -->
     
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list"></table>
	 </form> 
     <!-- Edit Form -->
     <div id="edit-win" class="easyui-dialog" title="角色管理" data-options="closed:true,iconCls:'icon-save',modal:true" style="width:400px;height:410px;">  
     	<form id="editForm" class="ui-form" method="post">  
     		 <input class="hidden" type="text" name="id">
     		 <div class="ui-edit">
	     	   <div class="ftitle">角色信息</div>    
	           <div class="fitem">  
	               <label>角色名称:</label>  
	               <input class="easyui-validatebox" type="text" name="roleName" data-options="required:true,validType:'length[1,10]'">
	           </div>  
	           <div class="fitem">  
	               <label>状态:</label>  
	               <select class="easyui-combobox" name="state" data-options="required:true">
                    	<option value="0" selected="selected">可用</option>
                    	<option value="1">禁用</option>
                   	</select>
	           </div>  
	           <!-- 
	           <div class="fitem">  
	               <label>Description:</label>  
	               <textarea class="easyui-validatebox" data-options="length:[0,100]" name="descr"></textarea>
	           </div>
	            -->
	            <div class="fitem" style="">  
	               <label>功能授权:</label>
	               <div style="border: 1px solid #A4BED4; width:230px;height:150px;margin-left: 104px ;margin-top:-16px;overflow: auto; ">  
	               	<ul id="menu-tree"  >
	               	</ul>
	               </div>
	               <!-- 
	               <select id="menu-tree" name="menuIds" class="easyui-combotree" data-options="url:'${msUrl}/sysMenu/getMenuTree.do'" multiple style="width:180px;"></select>
	                -->
	           </div>
	           <div class="fitem">  
	               <label style="margin-top:-27px">角色描述:</label>  
	               <textarea class="easyui-validatebox" data-options="validType:'length[0,100]'" style="width:230px;height:60px" name="descr"></textarea>
	           </div>  
	         </div>
     	</form>
  	 </div> 
  
</div>

<script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
<script type="text/javascript" src="${msUrl}/js/ux/sys/sysRole.js"></script>
  </body>
</html>
