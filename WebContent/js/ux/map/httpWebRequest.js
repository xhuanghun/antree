var points=[
   {
   	    point:[109.59, 19.29],
   	    iconUrl: 'images/marker-icon.png',
        iconSize: [16, 24],

        labelable: true,
        labelText: '<%=dt.Rows[k]["XMName"].ToString() %>',
        labelOffset: [12, -10],

        popupable: true,
        popupSize: [688, 456],
        popupTitle: '<%=dt.Rows[k]["XMName"].ToString() %>',
        //popupUrl: 'http://www.baidu.com/'
                    
        popupUrl: 'List.aspx?Tid=<%=dt.Rows[k]["id"].ToString() %>'
   },{
   	    point:[109.49, 19.79],
   	    iconUrl: 'images/marker-icon.png',
        iconSize: [16, 24],

        labelable: true,
        labelText: '<%=dt.Rows[k]["XMName"].ToString() %>',
        labelOffset: [12, -10],

        popupable: true,
        popupSize: [688, 456],
        popupTitle: '<%=dt.Rows[k]["XMName"].ToString() %>',
        //popupUrl: 'http://www.baidu.com/'
                    
        popupUrl: 'List.aspx?Tid=<%=dt.Rows[k]["id"].ToString() %>'
   },{
   	    point:[109.09, 19.29],
   	    iconUrl: 'images/marker-icon.png',
        iconSize: [16, 24],

        labelable: true,
        labelText: '<%=dt.Rows[k]["XMName"].ToString() %>',
        labelOffset: [12, -10],

        popupable: true,
        popupSize: [688, 456],
        popupTitle: '<%=dt.Rows[k]["XMName"].ToString() %>',
        //popupUrl: 'http://www.baidu.com/'
                    
        popupUrl: 'List.aspx?Tid=<%=dt.Rows[k]["id"].ToString() %>'
   },{
   	    point:[109.39, 19.69],
   	    iconUrl: 'images/marker-icon.png',
        iconSize: [16, 24],

        labelable: true,
        labelText: '<%=dt.Rows[k]["XMName"].ToString() %>',
        labelOffset: [12, -10],

        popupable: true,
        popupSize: [688, 456],
        popupTitle: '<%=dt.Rows[k]["XMName"].ToString() %>',
        //popupUrl: 'http://www.baidu.com/'
                    
        popupUrl: 'List.aspx?Tid=<%=dt.Rows[k]["id"].ToString() %>'
   }
];
//map.addpo(points);//批量添加点

var addPoints=function(points){
	if (points.length < 1){
		return;
	}
	for (var i = 0; i < points.length; i++)
    {
        addPoint(points[i]);
    }
};

var addPoint = function (point)
{
	if(!point.point){
		throw "参数point是必须的";
	}
	var option = {};
	option.point = point.point; //必须
    
    option.iconUrl = point.iconUrl || '/leaflet/images/marker-icon.png';
    option.iconSize = point.iconSize || [16, 16];

    option.labelable = point.labelable || false;
    option.labelText = point.labelText || "未命名";
    option.labelOffset = point.labelOffset || [30, 0];

    option.popupable = point.popupable || false;
    option.popupSize = point.popupSize || [500, 300];
    option.popupTitle = point.popupTitle || "";
    option.popupUrl = point.popupUrl || "http://baidu.com";
	
	var mark = new L.Marker(option.point,{icon:L.icon({ iconUrl: option.iconUrl, iconSize: option.iconSize })});
	if (option.labelable)
    {
        //mark.bindLabel(option.labelText, { noHide: true, clickable: true, offset: option.labelOffset });
        //mark.label.on("click", function (e) { mark.fire("click", e);});
    }
    
    if (option.popupable)
    {
        var html = 
                    "<div class='popupTitle'>"+option.popupTitle+"</div>"+
                    "<iframe src=" + option.popupUrl + " width='" + option.popupSize[0] + "'px' height='" + option.popupSize[1] + "px'></iframe>";
        var maps = document.getElementById("map");
        var mapWidth = maps.offsetWidth;
        var mapHeight = maps.offsetHeight;
        var popupOption =
                {
                    
                    maxWidth: option.popupSize[0],
                    minWidth: option.popupSize[0],
                    maxHeight: option.popupSize[1],
                    autoPanPaddingTopLeft: L.point((mapWidth - option.popupSize[0]) / 2, (mapHeight - option.popupSize[1]) / 2),
                    autoPanPaddingBottomRight: L.point((mapWidth - option.popupSize[0]) / 2, (mapHeight - option.popupSize[1]) / 2)
                };
        mark.bindPopup(html,popupOption);
    }
    var map = document.getElementById("map");
    mark.addTo(map);
};

addPoints(points);//批量添加点
