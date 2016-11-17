L.TileLayer.TiandituLayer = L.TileLayer.extend({
	getTileUrl: function(tilePoint) {
		var h = parseInt(Math.random() * 7);
		var layerType = this.options.layerType;
		var host = hosts[h];
		return "http://"+host+".tianditu.com/DataServer?T=" + layerType +
			"&x=" + tilePoint.x +
			"&y=" + tilePoint.y +
			"&l=" + (tilePoint.z + 1);
		
	}
});

var hosts=new Array("t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7");

L.tileLayer.tiandituLayer = function(options) {
	return new L.TileLayer.TiandituLayer('', options);
};
