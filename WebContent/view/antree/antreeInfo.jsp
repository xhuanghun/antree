<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
   <script type="text/javascript" src="${msUrl}/js/commons/previewImage.js"></script>
  </head>
	<body style="overflow:hidden;">
   <div class="warp easyui-panel" data-options="border:false">	   
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list"></table>
     </form>
     
     <!-- Upload Win&From -->
     <div id="upload-win" class="easyui-dialog" title="上传图片" data-options="closed:true,modal: true"  style="width:426px;height:360px;">  
     	<div id="divPreview" style="text-align:center;">
             <img id="imgHeadPhoto"  width="410"  height="260" src="${msUrl}/images/nopic.jpg">
        </div>
     	<form id="uploadForm" class="ui-form" method="post" action="upload.do" enctype="multipart/form-data" accept="image/gif, image/jpeg,image/jpg, image/png"> 
     	  <input class="hidden" name="codeKey" id="codeKey">
     	  <div style="text-align:left;margin-button: 2px;">  
               <p><input type="file" name="uploadfile" style="width:300px;" onchange="PreviewImage(this,'imgHeadPhoto','divPreview')" id="upload_image" name="upload_image"/> 
                 <input type="submit" value="保存" ></p>  
          </div> 
     	</form>
  	 </div>
 </div>    
<script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
<script type="text/javascript" src="${msUrl}/js/ux/antree/antreeInfo.js"></script>
  </body>
</html>
