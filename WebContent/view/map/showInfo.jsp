<!DOCTYPE html>
<%@ page language="java"  language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style>
*{margin:0;padding:0;}
body{font-size:14px;font-family:"Microsoft YaHei";background:#FFFFFF;}
ul,li{list-style:none;}

#tab{position:relative;}
#tab .tabList ul li{
	float:left;
	background:#fefefe;
	background:-moz-linear-gradient(top, #fefefe, #ededed);	
	background:-o-linear-gradient(left top,left bottom, from(#fefefe), to(#ededed));
	background:-webkit-gradient(linear,left top,left bottom, from(#fefefe), to(#ededed));
	border:1px solid #ccc;
	padding:5px 0;
	width:24%;
	text-align:center;
	margin-left:-1px;
	position:relative;
	cursor:pointer;
}
#tab .tabCon{
	position:absolute;
	left:-1px;
	top:32px;
	border:1px solid #ccc;
	border-top:none;
	width:504px;
	height:100%;
}
#tab .tabCon div{
	padding:10px;
	position:absolute;
	opacity:0;
	filter:alpha(opacity=0);
}
#tab .tabList li.cur{
	border-bottom:none;
	background:#fff;
}
#tab .tabCon div.cur{
	opacity:1;
	filter:alpha(opacity=100);
}
</style>
<style type="text/css">
table.gridtable {
	font-family: verdana,arial,sans-serif;
	font-size:12px;
	color:#333333;
	border-width: 1px;
	border-color: #666666;
	border-collapse: collapse;
}
table.gridtable th {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #dedede;
}
table.gridtable td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #ffffff;
}
</style>
</head>
<body>

<!-- 代码 begin -->
<div id="tab" style="margin:0px">
  <div class="tabList">
	<ul>
		<li class="cur">基本信息</li>
		<li>施工进度</li>
		<li>图片信息</li>
		<li>附件信息</li>
	</ul>
  </div>
  <div class="tabCon">
	<div class="cur">
       <table class="gridtable" style="width:502px;height:100px;text-align:left;" border="0" cellspacing="0" cellpadding="0" >
          <tr style="width:500px;height: 40px;">
            <td style="width:100px;">项目名称：</td>
            <td style="width:150px;">${project.name}</td>
            <td style="width:100px;">项目代码：</td>
            <td style="width:150px;">${project.code}</td>
          </tr>
          <tr style="width:500px;height: 40px;">
            <td>项目地址：</td>
            <td>${project.address}</td>
            <td>项目类型：</td>
            <td>${project.projectBelong}</td>
          </tr>
          <tr style="width:500px;height: 40px;">
            <td>项目企业：</td>
            <td>${project.userProject}</td>
            <td>企业负责人：</td>
            <td>${project.userName}</td>
          </tr>
          <tr style="width:500px;height: 40px;">
            <td>项目经度：</td>
            <td>${project.gpsX}</td>
            <td>项目纬度：</td>
            <td>${project.gpsY}</td>
          </tr>
          <tr style="width:500px;height: 40px;">
            <td>内容：</td>
            <td>${project.content}</td>
            <td>联系电话：</td>
            <td>${project.userTel}</td>
          </tr>
       </table>
    </div>
	<div>
	  <table class="gridtable" style="width:502px;height:100px;text-align:left;" border="0" cellspacing="0" cellpadding="0" >
          <tr style="width:500px;height: 30px;">
            <td style="width:100px;">项目名称：</td>
            <td style="width:150px;">${project.name}</td>
            <td style="width:100px;">建设性质：</td>
            <td style="width:150px;">${report.constNatura}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>建设期限：</td>
            <td>${report.constructionPeriod}</td>
            <td>建设内容：</td>
            <td>${report.constructionContent}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>流程阶段：</td>
            <td>${report.stageProcess}</td>
            <td>完成情况：</td>
            <td>${report.completion}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>完成时间：</td>
            <td>${report.completionTime}</td>
            <td>责任单位：</td>
            <td>${report.responsUnit}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>辖区政府：</td>
            <td>${report.districtGovernment}</td>
            <td>责任处室：</td>
            <td>${report.responsibility}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>施工代建单位：</td>
            <td>${report.constAgencyUnit}</td>
            <td>存在问题：</td>
            <td>${report.thereProblem}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>前期代理单位：</td>
            <td>${report.previousAgencyUnit}</td>
            <td>上报时间：</td>
            <td>${report.upTime}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>投资总额（万元）：</td>
            <td>${report.totalInvestment}</td>
            <td>中央资金完成情况：</td>
            <td>${report.completion}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>总投资（万元）：</td>
            <td>${report.zongtouzhi}</td>
            <td>计划完成投资：</td>
            <td>${report.planCmpleteInvest}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>年度完成投资（万元）：</td>
            <td>${report.endInvestment}</td>
            <td>年度完成百分比：</td>
            <td>${report.endInvestmentPercen}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>累计完成投资（万元）：</td>
            <td>${report.totalInvest}</td>
            <td>累积完成百分比：</td>
            <td>${report.totalInvestPercen}</td>
          </tr>
          <tr style="width:500px;height: 30px;">
            <td>备注：</td>
            <td >&nbsp;</td>
          </tr>
       </table>
	</div>
	<div>正在建设中……</div>
	<div>正在建设中……</div>
  </div>
</div>

<script>
window.onload = function() {
    var oDiv = document.getElementById("tab");
    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
    }
}
</script>
<!-- 代码 en -->
</body>
</html>
 