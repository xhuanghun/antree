<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
   <script src="${msUrl}/js/jquery-easyui-1.3.2/jquery.qrcode.min.js" type="text/javascript" charset="utf-8"></script>
   <style type="text/css">
     .btn.green:focus,.btn.green:hover { background-color:#43a047; color: rgba(255, 255, 255, 0.87);}
   </style>
  </head>
	<body style="overflow:hidden;">
   <div class="warp easyui-panel" data-options="border:false">	   
       <div class="easyui-panel" title="二维码" style="width:100%;height:99%;" data-options="striped: true,collapsible:false,fit:true"> 
          <table style="width:100%;height:99%;">
              <tr>
                 <td style="width:5%;">&nbsp;</td>
                 <td colspan="2" style="width:90%;height:30px;text-align:center;font-size:20;">根据内容信息生成对应的二维码</td>
                 <td style="width:5%;">&nbsp;</td>
              </tr>
              <tr>
                 <td style="width:5%;">&nbsp;</td>
                 <td>
                    <table width="100%">
                        <tr>
                           <td>输入古树名木编号：<input class="easyui-textbox" id="code" value=""></td>
                        </tr>
                        <tr>
                           <td>输入二维码字符串：<input class="easyui-textbox" id="qrcodetxt" value="" data-options="multiline:true" style="width:300px;height:100px"></td>
                        </tr>
                    </table>                    
                 </td>
                 <td><div id="qrcode" style="width:200px;height:200px;"></div></td>
                 <td style="width:5%;">&nbsp;</td>
              </tr>
              <tr>
                 <td style="width:5%;">&nbsp;</td>
                 <td colspan="2">
                     <input type="button" id="btn_create" value="生成二维码">
                     <input type="button" id="btn_save" value="提交">
                 </td>
                 <td style="width:5%;">&nbsp;</td>
              </tr>
              <tr>
                 <td colspan="4" style="width:100%;height:10px;">&nbsp;</td>
              </tr>
           </table>  
        </div>      
   </div>    
   <script type="text/javascript" src="${msUrl}/js/ux/qrcode/qrcodeAdd.js"></script>
  </body>
</html>
