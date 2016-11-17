<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
   <script src="${msUrl}/js/jquery-easyui-1.3.2/jquery.qrcode.min.js" type="text/javascript" charset="utf-8"></script>
   <link rel="stylesheet" href="${msUrl}/css/count/amazeui.min.css">
   <link rel="stylesheet" href="${msUrl}/css/count/admin.css">
   <link rel="stylesheet" href="${msUrl}/css/count/font-awesome.min.css">
   <style type="text/css">
     .btn.green:focus,.btn.green:hover { background-color:#43a047; color: rgba(255, 255, 255, 0.87);}
   </style>
  </head>
	<body style="overflow:hidden;">
   <div class="warp easyui-panel" data-options="border:false">	   
       <div class="easyui-panel" title="统计分析预览" style="width:100%;height:99%;" data-options="striped: true,collapsible:false,fit:true"> 
           <div class="am-lg">  
	        <div class="am-u-sm-4">
	          <div class="am-panel am-panel-default">
	            <div class="am-panel-bd">
	              <div class="ico-box"><span class="fa fa-user"></span></div>
	              <span class="am-text-lg small-title">用户信息</span>
	              <hr data-am-widget="divider" class="am-divider am-divider-default am-no-layout">
	              <div class="left">
	                <a class="user" value="2" href="#">
	                  <p class="num">3</p>
	                  <p class="text">总数</p>
	                </a>
	              </div>
	              <div class="center">
	                <a class="user" value="1" href="#">
	                  <p class="num">3</p>
	                  <p class="text">启用</p>
	                </a>
	              </div>
	              <div class="right">
	                <a class="user" value="0" href="#">
	                  <p class="num text-danger">0</p>
	                  <p class="text">禁用</p>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	
	        <div class="am-u-sm-4">
	          <div class="am-panel am-panel-default">
	            <div class="am-panel-bd">
	              <div class="ico-box"><span class="fa fa-book"></span></div>
	              <span class="am-text-lg small-title">古树名木信息</span>
	              <hr data-am-widget="divider" class="am-divider am-divider-default am-no-layout">
	              <div class="left">
	                <a class="article" value="2" href="#">
	                  <p class="num">23</p>
	                  <p class="text">总数</p>
	                </a>
	              </div>
	              <div class="center">
	                <a class="article" value="1" href="#">
	                  <p class="num">29</p>
	                  <p class="text">照片</p>
	                </a>
	              </div>
	              <div class="right">
	                <a class="article" value="0" href="#">
	                  <p class="num text-danger">4</p>
	                  <p class="text">二维码</p>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div class="am-u-sm-4">
	          <div class="am-panel am-panel-default">
	            <div class="am-panel-bd">
	              <div class="ico-box"><span class="fa fa-paper-plane"></span></div>
	              <span class="am-text-lg small-title">移动端信息</span>
	              <hr data-am-widget="divider" class="am-divider am-divider-default am-no-layout">
	              <div class="left">
	                <a class="leave" value="2" href="#">
	                  <p class="num">1</p>
	                  <p class="text">巡查</p>
	                </a>
	              </div>
	              <div class="center">
	                <a class="leave" value="1" href="#">
	                  <p class="num">2</p>
	                  <p class="text">预警</p>
	                </a>
	              </div>
	              <div class="right">
	                <a class="leave" value="0" href="#">
	                  <p class="num text-danger">2</p>
	                  <p class="text">评论</p>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	
	      </div>
	    </div>     
   </div>    
   <script type="text/javascript" src="${msUrl}/js/ux/qrcode/qrcodeAdd.js"></script>
  </body>
</html>
