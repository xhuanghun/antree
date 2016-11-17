L.Control.Measure = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function(map) {
		var className = 'leaflet-bar leaflet-control',
			container = L.DomUtil.create('div', className);

		this._createButton('&#8674;', '长度测量', 'leaflet-control-measure leaflet-bar-part leaflet-bar-part-top-and-bottom', container, this._toggleMeasure, this);

		return container;
	},

	_createButton: function(html, title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		L.DomEvent
			.on(link, 'click', L.DomEvent.stopPropagation)
			.on(link, 'click', L.DomEvent.preventDefault)
			.on(link, 'click', fn, context)
			.on(link, 'dblclick', L.DomEvent.stopPropagation);

		return link;
	},

	_toggleMeasure: function() {
		this._measuring = !this._measuring;

		if (this._measuring) {
			L.DomUtil.addClass(this._container, 'leaflet-control-measure-on');
			this._startMeasuring();
		} else {
			L.DomUtil.removeClass(this._container, 'leaflet-control-measure-on');
			this._stopMeasuring();
		}
	},

	_startMeasuring: function() {
		this._oldCursor = this._map._container.style.cursor;
		this._map._container.style.cursor = 'crosshair';

		this._doubleClickZoom = this._map.doubleClickZoom.enabled();
		this._map.doubleClickZoom.disable();

		L.DomEvent
			.on(this._map, 'mousemove', this._mouseMove, this)
			.on(this._map, 'click', this._mouseClick, this)
			.on(this._map, 'dblclick', this._finishPath, this)
			.on(document, 'keydown', this._onKeyDown, this);

		if (!this._layerPaint) {
			this._layerPaint = L.layerGroup().addTo(this._map);
		}

		if (!this._points) {
			this._points = [];
		}
	},

	_stopMeasuring: function() {
		this._map._container.style.cursor = this._oldCursor;

		L.DomEvent
			.off(document, 'keydown', this._onKeyDown, this)
			.off(this._map, 'mousemove', this._mouseMove, this)
			.off(this._map, 'click', this._mouseClick, this)
			.off(this._map, 'dblclick', this._mouseClick, this);

		if (this._doubleClickZoom) {
			this._map.doubleClickZoom.enable();
		}

		if (this._layerPaint) {
			this._layerPaint.clearLayers();
		}

		this._restartPath();
	},

	_mouseMove: function(e) {
		if (!e.latlng || !this._lastPoint) {
			return;
		}

		if (!this._layerPaintPathTemp) {
			this._layerPaintPathTemp = L.polyline([this._lastPoint, e.latlng], {
				color: 'blue',
				weight: 2,
				clickable: false,
				dashArray: '9,3'
			}).addTo(this._layerPaint);
		} else {
			//some error need to fix 20160723
			//this._layerPaintPathTemp.spliceLatLngs(0, 2, this._lastPoint, e.latlng);
		}

		if (this._tooltip) {
			if (!this._distance) {
				this._distance = 0;
			}

			this._updateTooltipPosition(e.latlng);

			var distance = e.latlng.distanceTo(this._lastPoint);
			distance = L.GeometryUtil.readableDistance(distance, true);
			this._updateTooltipDistance(this._distance + distance, distance);
		}
	},

	_mouseClick: function(e) {
		// Skip if no coordinates
		if (!e.latlng) {
			return;
		}

		// If we have a tooltip, update the distance and create a new tooltip, leaving the old one exactly where it is (i.e. where the user has clicked)
		if (this._lastPoint && this._tooltip) {
			if (!this._distance) {
				this._distance = 0;
			}

			this._updateTooltipPosition(e.latlng);

			var distance = e.latlng.distanceTo(this._lastPoint);
			this._updateTooltipDistance(this._distance + distance, distance);

			this._distance += distance;
		}
		this._createTooltip(e.latlng);

		// If this is already the second click, add the location to the fix path (create one first if we don't have one)
		if (this._lastPoint && !this._layerPaintPath) {
			this._layerPaintPath = L.polyline([this._lastPoint], {
				color: 'red',
				weight: 4,
				clickable: false
			}).addTo(this._layerPaint);
		}

		if (this._layerPaintPath) {
			this._layerPaintPath.addLatLng(e.latlng);
		}

		// Upate the end marker to the current location
		if (this._lastCircle) {
			this._layerPaint.removeLayer(this._lastCircle);
		}

		this._lastCircle = new L.CircleMarker(e.latlng, {
			color: 'black',
			opacity: 1,
			weight: 1,
			fill: true,
			fillOpacity: 1,
			radius: 2,
			clickable: this._lastCircle ? true : false
		}).addTo(this._layerPaint);

		this._lastCircle.on('click', function() {
			this._finishPath();
		}, this);

		// Save current location as last location
		this._lastPoint = e.latlng;
	},

	_finishPath: function() {
		// Remove the last end marker as well as the last (moving tooltip)
		if (this._lastCircle) {
			this._layerPaint.removeLayer(this._lastCircle);
			this._createTooltip(this._lastCircle.getLatLng());
			//this._updateTooltipDistance(this._distance,distance);
			var icon = L.icon({
				iconUrl: 'images/close.png',
				iconAnchor: [0, 24]
			});
			this._closeButton = new L.Marker(this._lastCircle
				.getLatLng(), {
					icon: icon
				}).addTo(this._layerPaint);

			this._closeButton.on('click', function() {
				this._stopMeasuring();
			}, this);
		}
		if (this._tooltip) {
			this._layerPaint.removeLayer(this._tooltip);
		}
		if (this._layerPaint && this._layerPaintPathTemp) {
			this._layerPaint.removeLayer(this._layerPaintPathTemp);
		}

		// Reset everything
		this._restartPath();
	},

	_restartPath: function() {
		this._distance = 0;
		this._tooltip = undefined;
		this._lastCircle = undefined;
		this._lastPoint = undefined;
		this._layerPaintPath = undefined;
		this._layerPaintPathTemp = undefined;
	},

	_createTooltip: function(position) {
		var icon = L.divIcon({
			className: 'leaflet-measure-tooltip',
			iconAnchor: [-5, -5]
		});
		this._tooltip = L.marker(position, {
			icon: icon,
			clickable: false
		}).addTo(this._layerPaint);
	},

	_updateTooltipPosition: function(position) {
		this._tooltip.setLatLng(position);
	},

	_updateTooltipDistance: function(total, difference) {
		var totalRound = this._round(total),
			differenceRound = this._round(difference);

		var text = '<div class="leaflet-measure-tooltip-total">' + totalRound + ' nm</div>';
		if (differenceRound > 0 && totalRound != differenceRound) {
			text += '<div class="leaflet-measure-tooltip-difference">(+' + differenceRound + ' nm)</div>';
		}

		this._tooltip._icon.innerHTML = text;
	},

	_round: function(val) {
		return Math.round((val / 1852) * 10) / 10;
	},

	_onKeyDown: function(e) {
		if (e.keyCode == 27) {
			// If not in path exit measuring mode, else just finish path
			if (!this._lastPoint) {
				this._toggleMeasure();
			} else {
				this._finishPath();
			}
		}
	}
});
L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
	// Ported from the OpenLayers implementation. See https://github.com/openlayers/openlayers/blob/master/lib/OpenLayers/Geometry/LinearRing.js#L270
	geodesicArea: function (latLngs) {
		var pointsCount = latLngs.length,
			area = 0.0,
			d2r = L.LatLng.DEG_TO_RAD,
			p1, p2;

		if (pointsCount > 2) {
			for (var i = 0; i < pointsCount; i++) {
				p1 = latLngs[i];
				p2 = latLngs[(i + 1) % pointsCount];
				area += ((p2.lng - p1.lng) * d2r) *
						(2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
			}
			area = area * 6378137.0 * 6378137.0 / 2.0;
		}

		return Math.abs(area);
	},

	readableArea: function (area, isMetric) {
		var areaStr;

		if (isMetric) {
			if (area >= 10000) {
				areaStr = (area * 0.0001).toFixed(2) + ' ha';
			} else {
				areaStr = area.toFixed(2) + ' m&sup2;';
			}
		} else {
			area *= 0.836127; // Square yards in 1 meter

			if (area >= 3097600) { //3097600 square yards in 1 square mile
				areaStr = (area / 3097600).toFixed(2) + ' mi&sup2;';
			} else if (area >= 4840) {//48040 square yards in 1 acre
				areaStr = (area / 4840).toFixed(2) + ' acres';
			} else {
				areaStr = Math.ceil(area) + ' yd&sup2;';
			}
		}

		return areaStr;
	},

	readableDistance: function (distance, isMetric) {
		var distanceStr;

		if (isMetric) {
			// show metres when distance is < 1km, then show km
			if (distance > 1000) {
				//remove unit 20160723
				//distanceStr = (distance  / 1000).toFixed(2) + ' km';
				distanceStr = (distance  / 1000).toFixed(2);
			} else {
				//distanceStr = Math.ceil(distance) + ' m';
				distanceStr = Math.ceil(distance);
			}
		} else {
			distance *= 1.09361;

			if (distance > 1760) {
				//distanceStr = (distance / 1760).toFixed(2) + ' miles';
				distanceStr = (distance / 1760).toFixed(2);
			} else {
				//distanceStr = Math.ceil(distance) + ' yd';
				distanceStr = Math.ceil(distance);
			}
		}

		return distanceStr;
	}
});

L.Map.mergeOptions({
	measureControl: false
});

L.Map.addInitHook(function() {
	if (this.options.measureControl) {
		this.measureControl = new L.Control.Measure();
		this.addControl(this.measureControl);
	}
});

L.control.measure = function(options) {
	return new L.Control.Measure(options);
};