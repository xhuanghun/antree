L.TileLayer.TiandituLayer = L.TileLayer.extend({
	getTileUrl: function(level, row, col) {
		var h = parseInt(Math.random() * 7);
		var layerType = this.options.layerType;
		var host = hosts[h];
		var url = "http://" + host +".tianditu.cn/" + layerType +
		          "wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
		//return "http://10.46.208.195:8084/DataServer?T=" + layerType +
		//	"&X=" + tilePoint.x +
		//	"&Y=" + tilePoint.y +
		//	"&L=" + (tilePoint.z + 1);
		
	}
	//http://" + host + ".tianditu.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
});

var hosts=new Array("t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7");

L.tileLayer.tiandituLayer = function(options) {
	return new L.TileLayer.TiandituLayer('', options);
};
