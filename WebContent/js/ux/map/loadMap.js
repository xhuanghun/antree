var map, normal, image,markersLayer;
$(function(){	
	var normalm = L.tileLayer.tiandituLayer({
		layerType: 'vec_c',
		errorTileUrl: 'js/images/_blank.png',
		maxZoom: 20,
		minZoom: 7
	}),
		normala = L.tileLayer.tiandituLayer({
		layerType: 'cva_c',
		errorTileUrl: 'js/images/_blank.png',
		maxZoom: 18,
		minZoom: 9
	}),
		imgm = L.tileLayer.tiandituLayer({
		layerType: 'img_c',
		errorTileUrl: 'js/images/_blank.png',
		maxZoom: 20,
		minZoom: 7
	}),
	    imga = L.tileLayer.tiandituLayer({
		layerType: 'cia_c',
		errorTileUrl: 'js/images/_blank.png',
		maxZoom: 18,
		minZoom: 9
	});
	normal = L.layerGroup([normalm, normala]),
	image = L.layerGroup([imgm, imga]);
	map = L.map("map", {
		    crs:L.CRS.EPSG4326,
			center: [20.02, 110.35], //center : [19.59, 109.29],
			zoom: 11,
			minZoom: 7,
			maxZoom: 17,
			//zoomsliderControl : true,
			layers: [normal],
			zoomControl: false,
			//distanceMeasureControl: true,
			//measureControl: true,
			//areaMeasureControl: true,
			continuousWorld: false,
			attributionControl: true,
			fullscreenControl: true,
			fullscreenControlOptions: { // optional
			    title: "点击我全屏模式!",
			    titleCancel: "退出全屏模式"
			}
		});
		map.addControl(new L.Control.ZoomMin());
        L.control.scale({ imperial:false}).addTo(map);		
		markersLayer = new L.LayerGroup();	//layer contain searched elements	
	    map.addLayer(markersLayer);
	    var controlSearch = new L.Control.Search({
		    position:'topright',		
		    layer: markersLayer,
		    initial: false,
		    zoom: 12,
		    marker: false
	    });
	    map.addControl( controlSearch );	    
	    ////////////populate map with markers from sample data
	    //loadAjax();
	    //polylines(map);
	    loadFeature();
		//var legend = L.control({position: 'topright'});
        //legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
        //legend.addTo(map);        
});

function polylines(map){

	var points=[[19.7824875037,110.376335971],[19.7829318776,110.376821075],[19.7835172931,110.377124211],[19.7841719816,110.377208216],[19.7841925374,110.37727471],[19.7849549718,110.377127654],[19.785278064,110.377093016],[19.7857728404,110.377086473],[19.7864955015,110.377248637],[19.7871285702,110.377545445],[19.787631829,110.377686081],[19.7883301328,110.377650023],[19.7883436119,110.377704416],[19.7891109836,110.377603925],[19.7894107249,110.377677702],[19.7899375658,110.377933114],[19.7905133558,110.378409332],[19.7911736291,110.378536753],[19.7917390139,110.378524],[19.7917401264,110.378751186],[19.7922288944,110.378759042],[19.7922447639,110.378558613],[19.7925108463,110.378683825],[19.7932466869,110.379266503],[19.7940273452,110.380167799],[19.7956053271,110.380631611],[19.7979186298,110.381784502],[19.7980288103,110.381569845],[19.7959818634,110.38054288],[19.7959758676,110.380350414],[19.7959000664,110.380280101],[19.7958076611,110.380432371],[19.79521791,110.380298759],[19.7941790464,110.379993291],[19.7933990329,110.379087161],[19.792570519,110.378462342],[19.7925670332,110.37791574],[19.7922930053,110.377484869],[19.7919210889,110.377890034],[19.7916615059,110.378283058],[19.7915663333,110.378004633],[19.7914993977,110.378008267],[19.7914317669,110.378361663],[19.7905813553,110.378239478],[19.7900369094,110.377792445],[19.7895028335,110.377478699],[19.7892448054,110.377395276],[19.7889821197,110.377374571],[19.7888070199,110.377039231],[19.7887263148,110.377035802],[19.7887098482,110.377400582],[19.7876688388,110.37746408],[19.7872384791,110.377343943],[19.7865873222,110.377039314],[19.7863331729,110.37695667],[19.7858071055,110.376864234],[19.7852729253,110.3768713],[19.7849674508,110.376851374],[19.7847635367,110.376873235],[19.7842794128,110.37697781],[19.7835476641,110.376894471],[19.7830371424,110.376612452],[19.7826646881,110.37619386],[19.7825385897,110.375942975],[19.7824132008,110.375040944],[19.7828795838,110.374728238],[19.7828273521,110.374618094],[19.7824027768,110.37474153],[19.78239118,110.374545021],[19.7821521258,110.373990181],[19.7820098998,110.373729628],[19.7819699969,110.373474872],[19.7819553317,110.372934933],[19.7819795531,110.372683061],[19.7822755245,110.370862795],[19.7819686542,110.370817124],[19.7817965672,110.371939238],[19.7818682099,110.371950741],[19.7817549987,110.372647005],[19.7817282708,110.373069324],[19.781743893,110.373517915],[19.7818270848,110.373888372],[19.7820239176,110.374197811],[19.7821732473,110.374686618],[19.7819637412,110.374552629],[19.7818957903,110.374612531],[19.7821864628,110.375066098],[19.78233611,110.376043079],[19.7824875037,110.376335971]];
	
    var polyline = new L.Polyline(points, {
        color: 'red',
        opacity: 1,
        weight: 2,
        clickable: false
    }).addTo(map).bindPopup('龙泉至新坡一期工程占地');
    
    points=[[19.7822361513,110.375713594],[19.780974844,110.375984987],[19.7777213289,110.376267182],[19.7771600692,110.376388226],[19.7728938743,110.377583365],[19.7721252624,110.377667706],[19.7698118589,110.377681342],[19.7672990992,110.377391401],[19.7652000941,110.376774896],[19.7634327365,110.375491798],[19.7620536397,110.374194183],[19.7603607001,110.373368546],[19.7585397798,110.372579305],[19.7576224128,110.371867468],[19.7558907637,110.369701051],[19.7539716339,110.367825894],[19.7530539117,110.366971083],[19.7524614923,110.36658],[19.7487929005,110.364235215],[19.7489010341,110.36406525],[19.752579013,110.366416274],[19.7531702165,110.366805862],[19.7541135046,110.36768251],[19.7560326345,110.369557666],[19.7577827422,110.371744786],[19.7586206783,110.372394988],[19.7604415986,110.373184228],[19.7621690641,110.374029019],[19.763578281,110.375352094],[19.7652897781,110.376594636],[19.7673224384,110.377191656],[19.7698351981,110.377481596],[19.7721200544,110.377466685],[19.7732144835,110.377299982],[19.7773958103,110.376122159],[19.7779896704,110.376033595],[19.7809578234,110.375784611],[19.7824620978,110.37543845],[19.7830780057,110.375208516],[19.7869579895,110.373452324],[19.7873643734,110.372581347],[19.7870856258,110.371361947],[19.7870774321,110.37112923],[19.7871905749,110.370008372],[19.7870715478,110.369511425],[19.7865528908,110.368706666],[19.7862726279,110.36801669],[19.7861465249,110.367600756],[19.7855376794,110.366968908],[19.7849312612,110.366247539],[19.7844286705,110.365765205],[19.7842647035,110.365632523],[19.7839067967,110.366017002],[19.7834426053,110.365590275],[19.7837733822,110.365234941],[19.7833996087,110.364883957],[19.783213932,110.364366731],[19.7829630814,110.360826927],[19.7831649324,110.360812801],[19.783415783,110.364352604],[19.7834900211,110.364639275],[19.7839110675,110.365087033],[19.7842400809,110.364733592],[19.7847042723,110.365160318],[19.7844023897,110.365484615],[19.7845577251,110.365610315],[19.7851008634,110.366137826],[19.7856737361,110.366820044],[19.7863699867,110.367597056],[19.7864741489,110.367998477],[19.7867173354,110.368588972],[19.7872419487,110.369402972],[19.7873968389,110.369947118],[19.7872786509,110.371169929],[19.7873011474,110.371435451],[19.7875785127,110.372612784],[19.7870438037,110.373634436],[19.7832737252,110.375353325],[19.7825188756,110.375631462],[19.7822361513,110.375713594]];
    polyline = new L.Polyline(points, {
        color: 'red',
        opacity: 1,
        weight: 2,
        clickable: false
    }).addTo(map).bindPopup('新坡用地范围（调南面沟重新分标段）');
}

function loadAjax(){
	$.ajax({
		type: "GET",
		url: "../projectManage/projectManage/findAllEntity",
		data: {},
		dataType: 'json',
		success: function(result) {
			if (result.length > 0) {
				for(var i=0;i<result.length;i++){
					var iconUrl='../static/images/map/icon-' + result[i].stage + '.png';
					var iconSize=[16, 24];
					var labelOffset=[12, -10];
					var popupUrl='../map/showinfo?code=' + result[i].code;
					var mark = new L.Marker([result[i].gpsX, result[i].gpsY],{title: result[i].name,icon:L.icon({ iconUrl: iconUrl, iconSize: iconSize })});
					mark.bindLabel(result[i].name, { noHide: true, clickable: true, offset: labelOffset });
					var html = 
		                "<div class='popupTitle'>"+result[i].name+"</div>"+
		                "<iframe src='" + popupUrl + "' width='558px' height='406px'></iframe>";
		            var maps = document.getElementById("map");
		            var mapWidth = maps.offsetWidth;
		            var mapHeight = maps.offsetHeight;
		            var popupOption =
		            {
		                
		                maxWidth: 558,
		                minWidth: 558,
		                maxHeight: 406,
		                autoPanPaddingTopLeft: L.point((mapWidth - 558) / 2, (mapHeight - 406) / 2),
		                autoPanPaddingBottomRight: L.point((mapWidth - 558) / 2, (mapHeight -406) / 2)
		            };
		            mark.bindPopup(html,popupOption);
		            markersLayer.addLayer(mark);
				}
			}
		}
	});
}

function loadFeature() {
	for(i in points) {
	    if(!points[i].point){
	        throw "参数point是必须的";
        }
        var option = {};
        option.point = points[i].point; //必须    
        option.iconUrl = points[i].iconUrl || '/leaflet/images/marker-icon.png';
        option.iconSize = points[i].iconSize || [16, 16];
        option.labelable = points[i].labelable || false;
        option.labelText = points[i].labelText || "未命名";
        option.labelOffset = points[i].labelOffset || [30, 0];
        option.popupable = points[i].popupable || false;
        option.popupSize = points[i].popupSize || [500, 300];
        option.popupTitle = points[i].popupTitle || "";
        option.popupUrl = points[i].popupUrl || "http://baidu.com";	
        var mark = new L.Marker(option.point,{title: option.popupTitle,icon:L.icon({ iconUrl: option.iconUrl, iconSize: option.iconSize })});
        if (option.labelable)
        {
            mark.bindLabel(option.labelText, { noHide: true, clickable: true, offset: option.labelOffset });
            //mark.label.on("click", function (e) { mark.fire("click", e);});  
        }    
        if (option.popupable)
        {
            var html = 
                "<div class='popupTitle'>"+option.popupTitle+"</div>"+
                "<iframe src='" + option.popupUrl + "' width='" + option.popupSize[0] + "'px height='" + option.popupSize[1] + "px'></iframe>";
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
        markersLayer.addLayer(mark);
    }		
}


function changeView(target) {
	if($('#twoControl').hasClass('btnactive')) {
		$('#twoControl').removeClass('btnactive');
		map.addLayer(image);
		map.removeLayer(normal);
	} else {
		$('#threeControl').removeClass('btnactive');
		map.addLayer(normal);
		map.removeLayer(image);
	}
	$('#' + target).addClass('btnactive');
};







    


