<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
	<body style="overflow:hidden;">
   <div id="firstForm" class="warp easyui-panel" data-options="border:false">
	<!-- Search panel start -->
 	 <div class="easyui-panel ui-search-panel" title="搜索" data-options="striped: true,collapsible:false,iconCls:'icon-search'">  
 	 <form id="searchForm">
 	 	<p class="ui-fields">
 	 	    <label class="ui-label">古树名木编码:</label><input name="code" class="easyui-box ui-text" style="width:100px;">
 	 	    <label class="ui-label">古树名木名称:</label><input name="zpmc" class="easyui-box ui-text" style="width:100px;">
        </p>        
        <a href="#" id="btn-search" class="easyui-linkbutton" iconCls="icon-search" >搜索</a>
      </form>  
     </div> 
     <!--  Search panel end -->
     
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list"></table>
     </form>
 </div>    
<script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
<script type="text/javascript" src="${msUrl}/js/ux/antree/antreePicture.js"></script>
  </body>
</html>
