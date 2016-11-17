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
 	 <table>
 	   <tr>
 	     <td >
 	        <table>
 	       <tr>
 	          <td><label class="ui-label">古树名木编号:</label></td>
 	          <td><input name="code" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">管理单位:</label></td>
 	          <td><input name="gldw" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">管理人员: </label></td>
 	          <td><input name="glry" class="easyui-box" style="width:100px;"></td>
 	       </tr>
 	       <tr>
 	          <td><label class="ui-label">中文学名:</label></td>
 	          <td><input name="zwxm" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">别名:</label></td>
 	          <td><input name="bm" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">拉丁名: </label></td>
 	          <td><input name="ldm" class="easyui-box" style="width:100px;"></td>
 	       </tr>
 	       <tr>
 	          <td><label class="ui-label">立地条件:</label></td>
 	          <td><input name="ldtj" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">生长环境:</label></td>
 	          <td><input name="szhj" class="easyui-box" style="width:100px;"></td>
 	          <td><label class="ui-label">生长势: </label></td>
 	          <td><input name="szs" class="easyui-box" style="width:100px;"></td>
 	       </tr>
 	       </table>
 	     </td>
 	     <td ><a href="#" id="btn-search" class="easyui-linkbutton" iconCls="icon-search" >搜索</a></td>
 	   </tr>
 	 </table>
 	    

        
      </form>  
     </div> 
     <!--  Search panel end -->
     
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list"></table>
     </form>
 </div>    
<script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
<script type="text/javascript" src="${msUrl}/js/ux/antree/antreeQuery.js"></script>
  </body>
</html>
