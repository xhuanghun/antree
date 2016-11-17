<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>古树名木管理系统</title>
    <%@include file="/view/resource.jsp" %>
    <link rel="stylesheet" type="text/css" href="${msUrl}/css/main.css">
    <script type="text/javascript" src="${msUrl}/js/ux/main/main.js"></script>
  </head>
  <body class="easyui-layout">
  	
 	<div class="ui-header" data-options="region:'north',split:true,border:false" style="height:70px;overflow: hidden;">
 	<h1>&nbsp;</h1>
 	<div  class="ui-login">
 		<div class="ui-login-info">
	 		欢迎 <span class="orange">${user.nickName}</span> 您第[<span class="orange">${user.loginCount}</span>]次登录系统 
	 		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 		<a class="modify-pwd-btn"  href="javascript:void(0);">修改密码</a> |
 			<a class="logout-btn" href="${msUrl}/logout.shtml">退出</a>
 		</div>
 	</div>
 	</div>
	<div data-options="region:'west',split:true,title:'系统菜单'" style="width:200px;">
		<div id="tree-box" class="easyui-accordion" data-options="fit:true,border:false">
			<c:forEach var="item" items="${menuList}">
			<div title="${item.text}">
				<c:forEach var="node" items="${item.children}">
				<a class="menu-item" href="${msUrl}${node.url}">${node.text}</a>
				</c:forEach>
			</div>
			</c:forEach>
		</div>
	</div>
	<div data-options="region:'south',split:true,border:false" style="height: 27px;overflow:hidden;">
		<div class="panel-header" style="border: none;text-align: center;background:#eeeeee;" >CopyRight &copy; 2016 海南大学  版权所有. &nbsp;&nbsp;海口金政信息科技有限公司:www.jzgis.com  &nbsp;&nbsp;琼ICP备xxxx号</div>
	</div>
	<div data-options="region:'center'" >
		<div class="easyui-tabs" id="tab-box" data-options="fit:true,border:false">
			<div title="首    页" style="padding:1px;overflow:hidden;"> 
				<div class="ui-index" >
				   <table cellSpacing="1" style="width:100%;height:100%;">
				      <tr>
				         <td height="20px">&nbsp;</td>
				      </tr>
				      <tr>
				         <td height="85px">
				            <table width="100%" height="100%">
				               <tr>
				                 <td class="ui-index-top">&nbsp;</td>
				                 <td class="ui-index-right">&nbsp;</td>
				               </tr>
				            </table>
				         </td>
				      </tr>
				      <tr>
				        <td height="302px" width="100%" class="ui-index-center">&nbsp;</td>
				      </tr>
				      <tr>
				         <td>&nbsp;</td>
				      </tr>
				   </table>
				</div>				
			</div>
		</div>	
	</div>
	<div id="modify-pwd-win"  class="easyui-dialog" buttons="#editPwdbtn" title="修改用户密码" data-options="closed:true,iconCls:'icon-save',modal:true" style="width:350px;height:200px;">
		<form id="pwdForm" action="modifyPwd.do" class="ui-form" method="post">
     		 <input class="hidden" name="id">
     		 <input class="hidden" name="login">
     		 <div class="ui-edit">
	           <div class="fitem">  
	              <label>旧密码:</label>  
	              <input id="oldPwd" name="oldPwd" type="password" class="easyui-validatebox"  data-options="required:true,missingMessage:'旧密码不能为空.'"/>
	           </div>
	            <div class="fitem">  
	               <label>新密码:</label>  
	               <input id="newPwd" name="newPwd" type="password" class="easyui-validatebox" data-options="required:true,missingMessage:'新密码不能为空.'" />
	           </div> 
	           <div class="fitem">  
	               <label>重复密码:</label>  
	              <input id="rpwd" name="rpwd" type="password" class="easyui-validatebox"   required="required" validType="equals['#newPwd']" />
	           </div> 
	         </div>
     	 </form>
     	 <div id="editPwdbtn" class="dialog-button" >  
            <a href="javascript:void(0)" class="easyui-linkbutton" id="btn-pwd-submit">保存</a>  
            <a href="javascript:void(0)" class="easyui-linkbutton" id="btn-pwd-close">关闭</a>  
         </div>
	</div>
  </body>
</html>
