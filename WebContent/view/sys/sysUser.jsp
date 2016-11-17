<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
	<body>
<div class="warp easyui-panel" data-options="border:false">
	<!-- Search panel start -->
 	 <div class="easyui-panel ui-search-panel" title="搜索" data-options="striped: true,collapsible:false,iconCls:'icon-search'">  
 	 <form id="searchForm">
 	 	<p class="ui-fields">
 	 	    <label class="ui-label">用户账号:</label><input name="login" class="easyui-box ui-text" style="width:100px;height:26px">
            <label class="ui-label">用户名称:</label><input name="nickName" class="easyui-box ui-text" style="width:100px;height:26px">
        </p>
        <a href="#" id="btn-search" class="easyui-linkbutton"  iconCls="icon-search">搜索</a>
      </form>  
     </div> 
     <!--  Search panel end -->     
     <!-- DataList  -->
     <form id="listForm" method="post">
     <table id="data-list"></table>
     </form>     
     <!-- huang 2013-6 Add Form -->
     <div id="add-win" class="easyui-dialog" title="添加" data-options="closed:true,iconCls:'icon-save',modal:true" style="width:800px;height:300px;">
        <form id="addForm" class="ui-form" method="post">  
     		 <input class="hidden" type="text" name="id">
     		 <input class="hidden" name="deleted">
     		 <div class="ui-edit">
	     	   <div class="ftitle">用户信息</div>    
	           <div class="fitem">  
	               <label>账户:</label>  
	               <input class="easyui-validatebox" type="text" name="login" data-options="required:true,validType:'login'">
	           </div>
	           <div class="fitem">  
	               <label>密码:</label>  
	               <input class="easyui-validatebox" type="password" name="pwd" data-options="required:true,validType:'pwd'">
	           </div>    
	           <div class="fitem">  
	               <label>确认密码:</label>  
	               <input class="easyui-validatebox" type="password" name="rpwd" required="required" validType="equals['#pwd']">
	           </div>   
	           <div class="fitem">  
	               <label>名称:</label>  
	               <input class="easyui-validatebox" type="text" name="nickName" data-options="required:true,validType:'length[1,10]'">
	           </div>
	            <div class="fitem">  
	               <label>状态:</label>  
	               <select class="easyui-combobox" name="state" data-options="required:true">
                    	<option value="0" selected="selected">可用</option>
                    	<option value="1">禁用</option>
                   	</select>
	           </div> 
	           <div class="fitem">  
	               <label>邮箱:</label>  
	               <input class="easyui-validatebox" type="text" name="email" data-options="required:true,validType:'email'">
	           </div>
	         </div>
     	</form>
     </div>
     <!-- Edit Form -->
     <div id="edit-win" class="easyui-dialog" title="用户管理" data-options="closed:true,iconCls:'icon-save',modal:true" style="width:400px;height:300px;">  
     	<form id="editForm" class="ui-form" method="post">  
     		 <input class="hidden" type="text" name="id">
     		 <input class="hidden" name="deleted">
     		 <div class="ui-edit">
	     	   <div class="ftitle">用户信息</div>    
	           <div class="fitem">  
	               <label>账户:</label>  
	               <input class="easyui-validatebox" type="text" name="login" data-options="required:true,validType:'length[1,20]'" onkeyup="value=value.replace(/[\W]/g,'')">
	           </div>
	           <div class="fitem">  
	               <label>密码:</label>  
	               <input class="easyui-validatebox" type="password" name="pwd" data-options="required:true,validType:'length[6,20]'" onkeyup="value=value.replace(/[\W]/g,'')">
	           </div>
	           <div class="fitem">  
	               <label>名称:</label>  
	               <input class="easyui-validatebox" type="text" name="nickName" data-options="required:true,validType:'length[1,10]'">
	           </div>
	            <div class="fitem">  
	               <label>状态:</label>  
	               <select class="easyui-combobox" name="state" data-options="required:true" editable="false">
                    	<option value="0" selected="selected">可用</option>
                    	<option value="1">禁用</option>
                   	</select>
	           </div> 
	           <div class="fitem">  
	               <label>邮箱:</label>  
	               <!-- <input class="easyui-validatebox" id="email" type="text" name="email" data-options="required:true,validType:'email'" onChange="checkMail('email')" > -->
	                <input class="easyui-validatebox easyui-textbox" id="email" name="email" data-options="required:true,validType:'email'" onChange="checkMail()" > 
	           </div>
	         </div>
     	</form>
  	 </div> 
  	 
  	 <!-- Edit Password Form -->
     <div id="edit-pwd-win" class="easyui-dialog" buttons="#editPwdbtn" title="修改密码" data-options="closed:true,iconCls:'icon-save',modal:true" style="width:250px;height:240px;">
     	<form id="pwdForm" class="ui-form" method="post">  
     		 <input class="hidden" name="id">
     		 <div class="ui-edit">
	     	   <div class="ftitle">用户信息</div>    
	           <div class="fitem">  
	               <label style="margin-left:-30px">用户账号:</label>  
	               <input class="easyui-validatebox" readonly="readonly" name="login" data-options="required:true,validType:'login'" disabled="disabled">
	           </div>  
	           <div class="fitem">  
	              <label style="margin-left:-30px">旧密码:</label>  
	              <input id="oldPwd" name="oldPwd" type="password" class="easyui-validatebox" data-options="required:true,validType:'length[6,20]'" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"/>
	           </div>
	            <div class="fitem">  
	               <label style="margin-left:-30px">新密码:</label>  
	               <input id="newPwd" name="newPwd" type="password" class="easyui-validatebox" data-options="required:true,validType:'length[6,20]'" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"/>
	           </div> 
	           <div class="fitem">  
	               <label style="margin-left:-30px">确认密码:</label>  
	              <input id="rpwd" name="rpwd" type="password" class="easyui-validatebox"   required="required" validType="equals['#newPwd']" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"/>
	           </div> 
	         </div>
     	</form>
     	 <div id="editPwdbtn" class="dialog-button">  
            <a href="javascript:void(0)" class="easyui-linkbutton" id="btn-pwd-submit">确定</a>  
            <a href="javascript:void(0)" class="easyui-linkbutton" id="btn-pwd-close">关闭</a>  
        </div>
  	 </div> 
  	
</div>

<script type="text/javascript" src="${msUrl}/js/commons/YDataGrid.js"></script>
<script type="text/javascript" src="${msUrl}/js/ux/sys/sysUser.js"></script>
  </body>
</html>
