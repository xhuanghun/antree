<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <%@include file="/view/resource.jsp" %>
  </head>
  <body>
   <div class="warp easyui-panel" data-options="border:false">
 	 <div class="easyui-panel ui-enter-panel" title="古树名木信息" data-options="striped: true,collapsible:false">  
 	 <form id="addForm" >
 	   <input class="hidden" name="code" id="code">
 	   <table width="100%" style="margin:0px;padding:0px;">
 	   <tr>
 	   <td colSpan="3">
 	 	<table cellSpacing=1 width="100%" id="roadDetailTable" >
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label style="backgroud:#454545">*</label><label>调查编号：</label></td>
 	 	      <td><input class="easyui-box" id="dcbh" name="dcbh" data-options="required:true"/></td>
 	 	      <td align="right" class="fontBold"><label>树种：</label></td>
 	 	      <td><input class="easyui-box" id="sz" name="sz" data-options="required:true"/></td>
 	 	      <td align="right" class="fontBold"><label>中文学名：</label></td>
 	 	      <td><input class="easyui-box" id="zwxm" name="zwxm" data-options="required:true"/></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>别名：</label></td>
 	 	      <td><input class="easyui-box" id="bm" name="bm"/></td>
 	 	      <td align="right" class="fontBold"><label>拉丁名：</label></td>
 	 	      <td><input class="easyui-box" id="ldm" name="ldm" /></td>
 	 	      <td align="right" class="fontBold"><label>科属：</label></td>
 	 	      <td><input class="easyui-combobox" id="ks" name="ks" url="${msUrl}/dataDictionary/getLdjsdjComboboxList.do" valueField="zdz"  textField="zdzms" panelHeight="auto" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>权属：</label></td>
 	 	      <td><input class="easyui-box" id="qs" name="qs"/></td>
 	 	      <td align="right" class="fontBold"><label>管理单位：</label></td>
 	 	      <td><input class="easyui-box" id="glwd" name="glwd"/></td>
 	 	      <td align="right" class="fontBold"><label>管理人员：</label></td>
 	 	      <td><input class="easyui-box" id="glry" name="glry"/></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>管理人员电话：</label></td>
              <td><input class="easyui-box" id="glrydh" name="glrydh"/></td>
              <td align="right" class="fontBold"><label>管理人员地址：</label></td>
 	 	      <td><input class="easyui-box" id="glryzd" name="glrydz"/></td>
 	 	      <td align="right" class="fontBold"><label>是否挂牌：</label></td>
 	 	      <td><select class="easyui-combobox" id="sfgp" name="sfgp" style="width:132;" panelHeight="auto">                       
                      <option value="1" selected>是</option>
                      <option value="2" >否</option>
 	 	          </select></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>树龄：</label></td>
 	 	      <td><input class="easyui-numberbox" id="sl" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="sl" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>树龄来源：</label></td>
 	 	      <td><input class="easyui-box" id="slly" name="slly"/></td>
 	 	      <td align="right" class="fontBold"><label>保护级别：</label></td>
 	 	      <td><input class="easyui-combobox" id="bhjb" name="bhjb" url="${msUrl}/dataDictionary/getLdjsdjComboboxList.do" valueField="zdz"  textField="zdzms" panelHeight="auto" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>级别：</label></td>
 	 	      <td><input class="easyui-combobox" id="jb" name="jb" url="${msUrl}/dataDictionary/getLdjsdjComboboxList.do" valueField="zdz"  textField="zdzms" panelHeight="auto" /></td>
 	 	      <td align="right" class="fontBold"><label>树高：</label></td>
 	 	      <td><input class="easyui-numberbox" id="sg" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="sg" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>胸围：</label></td>
 	 	      <td><input class="easyui-numberbox" id="xw" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="xw" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>地围：</label></td>
 	 	      <td><input class="easyui-numberbox" id="dw" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="dw" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>冠幅东西向：</label></td>
 	 	      <td><input class="easyui-box" id="gfdxx" name="gfdxx" /></td>
 	 	      <td align="right" class="fontBold"><label>冠幅南北向：</label></td>
 	 	      <td><input class="easyui-box" id="gfnbx" name="gfnbx" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>海拔：</label></td>
 	 	      <td><input class="easyui-numberbox" id="hb" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="hb" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>坡向：</label></td>
 	 	      <td><input class="easyui-numberbox" id="px" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="px" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>坡位：</label></td>
 	 	      <td><input class="easyui-numberbox" id="pw" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="pw" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>价值：</label></td>
 	 	      <td><input class="easyui-numberbox" id="jz" value="0" style="width:132;" data-options="required:true,validType:'sl',missingMessage:'树龄不能为空.',invalidMessage:'树龄格式不正确'" name="jz" precision="0" max="9999999" size="7" maxlength="7" style="text-align:right;"/></td>
 	 	      <td align="right" class="fontBold"><label>立地条件：</label></td>
 	 	      <td><input class="easyui-box" id="ldtj" name="ldtj" /></td>
 	 	      <td align="right" class="fontBold"><label>土壤质量：</label></td>
 	 	      <td><input class="easyui-box" id="trzl" name="trzl" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>土壤颜色：</label></td>
 	 	      <td><input class="easyui-box" id="trys" name="trys" /></td>
 	 	      <td align="right" class="fontBold"><label>土壤性质：</label></td>
 	 	      <td><input class="easyui-box" id="trxz" name="trxz" /></td>
 	 	      <td align="right" class="fontBold"><label>土壤紧实度：</label></td>
 	 	      <td><input class="easyui-box" id="trjsd" name="trjsd" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>生长环境：</label></td>
 	 	      <td><input class="easyui-box" id="szhj" name="szhj" /></td>
 	 	      <td align="right" class="fontBold"><label>生长势：</label></td>
 	 	      <td><input class="easyui-box" id="szs" name="szs" /></td>
 	 	      <td align="right" class="fontBold"><label>发布：</label></td>
 	 	      <td><input class="easyui-box" id="fb" name="fb" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	      <td align="right" class="fontBold"><label>树木特殊状况描述：</label></td>
 	 	      <td><input class="easyui-box" id="smtszkms" name="smtszkms" /></td>
 	 	      <td align="right" class="fontBold"><label>保护状况及建议：</label></td>
 	 	      <td><input class="easyui-box" id="bhzkjjy" name="bhzkjjy" /></td>
 	 	      <td align="right" class="fontBold"><label>古树传说或历史来历：</label></td>
 	 	      <td><input class="easyui-box" id="gscsls" name="gscsls" /></td>
 	 	   </tr>
 	 	   <tr>
 	 	     <td align="right" class="fontBold"><label>所属区域：</label></td>
 	 	      <td><input class="easyui-box" id="ssqy" name="ssqy" /></td>
 	 	      <td align="right" class="fontBold" name="bz"><label>备         注：</label></td>
 	 	      <td colSpan="3"><input class="easyui-box" id="bz" name="bz" /></td>
 	 	   </tr>
 	 	</table>
 	   </td>
 	   </tr>
 	   <tr >
 	      <td conspan="6">
 	         <table width="100%" height="100%">
 	         <tr>
	 	      <td align="right"  height="30"><a href="javascript:void(0)" class="easyui-linkbutton" id="btn-submit">确定</a></td>
	 	      <td width="1%" height="30">&nbsp;</td>
	 	      <td height="30" align="center" width="100px"><a href="javascript:void(0)"  class="easyui-linkbutton" id="btn-reset">重置</a></td>
	 	      <td width="1%" height="30">&nbsp;</td>
	 	      <td align="left" height="30"><a href="javascript:void(0)" class="easyui-linkbutton" id="btn-back">返回</a></td>
	 	     </tr>
	 	     </table>
 	      </td>
 	   </tr>
 	   </table>
      </form>  
     </div>
</div>

<script type="text/javascript" src="${msUrl}/js/ux/antree/antreeAdd.js"></script>
  </body>
</html>
