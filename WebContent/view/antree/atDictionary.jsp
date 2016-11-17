<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
  <body>
<div class="warp easyui-panel"  data-options="border:false,fit:true" >
  	 <!-- Search panel start -->
 	 <div class="easyui-panel ui-search-panel" title="搜索" data-options="striped: true,collapsible:true,iconCls:'icon-search'">   
 	 <form id="searchForm">
 	 	<input class="hidden" id='search_parentId' name="parentId">
 	 	<p class="ui-fields">
            <label class="ui-label">表名:</label>
            <input name="bm"  class="easyui-box ui-text" style="width:100px;"> <!-- class="easyui-box ui-text" -->
            <label class="ui-label">字段:</label>
            <input name="zd"  class="easyui-box ui-text" style="width:100px;"> <!-- class="easyui-box ui-text" -->
        </p>
        <a id="btn-search" class="easyui-linkbutton"  iconCls="icon-search">搜索</a> <!-- iconCls="icon-search" -->
      </form>  
     </div> 
     <!--  Search panel end -->
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list" data-options="fit:true"></table>
     </form>
   
     <!-- Edit Win&From -->
     <div id="edit-win" class="easyui-dialog" title="字典" data-options="closed:true,iconCls:'icon-save',modal: true"  style="width:400px;height:250px;">  
     	<form id="editForm" class="ui-form" method="post"> 
     	 <!-- 隐藏文本框 -->
     	 <input class="hidden" name="id">
     	 <div class="ui-edit">
     	     <div class="fitem">  
	              <label>表名:</label>  
	              <input id="bm" name="bm" type="text"  data-options="required:true,validType:'bm'"/>
	           </div>
	            <div class="fitem">  
	               <label>字段:</label>  
	               <input id="zd" name="zd" type="text" data-options="required:true,validType:'zd'"/>
	           </div> 
	           <div class="fitem">  
	               <label>代码:</label>  
	              <input id="dm" name="dm" type="text" data-options="required:true,validType:'dm'"/>
	           </div> 
	           <div class="fitem">  
	              <label>描述:</label>  
	              <input id="ms" name="ms" type="text" data-options="required:true,validType:'ms'"/>
	           </div> 
	           <div class="fitem">  
	              <label>备注:</label>  
	              <input id="bz" name="bz" type="text" />
	           </div> 
     	 </div>
    	 
     	</form>
  	 </div>
</div>

  <script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
  <script type="text/javascript" src="${msUrl}/js/ux/antree/atDictionary.js"></script>

  </body>
</html>
