<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
        <%@include file="/view/resource.jsp" %>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>古树名木一张图浏览系统</title>		
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/leaflet.css" />
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/leaflet-sidebar.css" />
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/coordinate.bar.css" />
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/Control.FullScreen.css" />	
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/L.Control.ZoomMin.css" />
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/leaflet.label.css" />	
		<link rel="stylesheet" type="text/css" href="${msUrl}/css/map/leaflet-search.css" />	

		<script src="${msUrl}/js/map/jquery.1.12.4.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/map/plugins/layout/jquery.layout-latest.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/map/plugins/layout/bootstrap.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div class="map-application">
			<div id="map" class="map"></div>
			<div id="visButtons"><button class='mapControl btnactive' id='twoControl' type='button' onclick='changeView("twoControl")'>矢量图层</button><button class='mapControl' id='threeControl' type='button' onclick='changeView("threeControl")'>影像图层</button></div>
		</div>
		
		<script src="${msUrl}/js/ux/map/leaflet-src.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/ux/map/plugins/leaflet.label.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/ux/map/plugins/leaflet-tilelayer-wmts-src.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/ux/map/leaflet-search.js" type="text/javascript" charset="utf-8"></script>
		<script src="${msUrl}/js/ux/map/plugins/L.Control.ZoomMin.js" type="text/javascript" charset="utf-8"></script>
        <script src="${msUrl}/js/ux/map/plugins/Control.FullScreen.js" type="text/javascript" charset="utf-8"></script>
	    <script src="${msUrl}/js/ux/map/loadGeoJson.js" type="text/javascript" charset="utf-8"></script>
	    <script src="${msUrl}/js/ux/map/plugins/TianDiTuLayer.js" type="text/javascript" charset="utf-8"></script>
	    <script src="${msUrl}/js/ux/map/loadMap.js" type="text/javascript" charset="utf-8"></script>
	    
	</body>
</html>
