! function(t, s) {
	"function" == typeof define && define.amd ? define(s) : "undefined" != typeof module ? module.exports = s() : t.proj4 = s()
}(this, function() {
	var t, s, i;
	return function(a) {
		function h(t, s) {
			return x.call(t, s)
		}

		function e(t, s) {
			var i, a, h, e, n, r, o, l, u, c, M = s && s.split("/"),
				f = y.map,
				m = f && f["*"] || {};
			if(t && "." === t.charAt(0))
				if(s) {
					for(M = M.slice(0, M.length - 1), t = M.concat(t.split("/")), l = 0; l < t.length; l += 1)
						if(c = t[l], "." === c) t.splice(l, 1), l -= 1;
						else if(".." === c) {
						if(1 === l && (".." === t[2] || ".." === t[0])) break;
						l > 0 && (t.splice(l - 1, 2), l -= 2)
					}
					t = t.join("/")
				} else 0 === t.indexOf("./") && (t = t.substring(2));
			if((M || m) && f) {
				for(i = t.split("/"), l = i.length; l > 0; l -= 1) {
					if(a = i.slice(0, l).join("/"), M)
						for(u = M.length; u > 0; u -= 1)
							if(h = f[M.slice(0, u).join("/")], h && (h = h[a])) {
								e = h, n = l;
								break
							}
					if(e) break;
					!r && m && m[a] && (r = m[a], o = l)
				}!e && r && (e = r, n = o), e && (i.splice(0, n, e), t = i.join("/"))
			}
			return t
		}

		function n(t, s) {
			return function() {
				return f.apply(a, v.call(arguments, 0).concat([t, s]))
			}
		}

		function r(t) {
			return function(s) {
				return e(s, t)
			}
		}

		function o(t) {
			return function(s) {
				_[t] = s
			}
		}

		function l(t) {
			if(h(d, t)) {
				var s = d[t];
				delete d[t], g[t] = !0, M.apply(a, s)
			}
			if(!h(_, t) && !h(g, t)) throw new Error("No " + t);
			return _[t]
		}

		function u(t) {
			var s, i = t ? t.indexOf("!") : -1;
			return i > -1 && (s = t.substring(0, i), t = t.substring(i + 1, t.length)), [s, t]
		}

		function c(t) {
			return function() {
				return y && y.config && y.config[t] || {}
			}
		}
		var M, f, m, p, _ = {},
			d = {},
			y = {},
			g = {},
			x = Object.prototype.hasOwnProperty,
			v = [].slice;
		m = function(t, s) {
			var i, a = u(t),
				h = a[0];
			return t = a[1], h && (h = e(h, s), i = l(h)), h ? t = i && i.normalize ? i.normalize(t, r(s)) : e(t, s) : (t = e(t, s), a = u(t), h = a[0], t = a[1], h && (i = l(h))), {
				f: h ? h + "!" + t : t,
				n: t,
				pr: h,
				p: i
			}
		}, p = {
			require: function(t) {
				return n(t)
			},
			exports: function(t) {
				var s = _[t];
				return "undefined" != typeof s ? s : _[t] = {}
			},
			module: function(t) {
				return {
					id: t,
					uri: "",
					exports: _[t],
					config: c(t)
				}
			}
		}, M = function(t, s, i, e) {
			var r, u, c, M, f, y, x = [];
			if(e = e || t, "function" == typeof i) {
				for(s = !s.length && i.length ? ["require", "exports", "module"] : s, f = 0; f < s.length; f += 1)
					if(M = m(s[f], e), u = M.f, "require" === u) x[f] = p.require(t);
					else if("exports" === u) x[f] = p.exports(t), y = !0;
				else if("module" === u) r = x[f] = p.module(t);
				else if(h(_, u) || h(d, u) || h(g, u)) x[f] = l(u);
				else {
					if(!M.p) throw new Error(t + " missing " + u);
					M.p.load(M.n, n(e, !0), o(u), {}), x[f] = _[u]
				}
				c = i.apply(_[t], x), t && (r && r.exports !== a && r.exports !== _[t] ? _[t] = r.exports : c === a && y || (_[t] = c))
			} else t && (_[t] = i)
		}, t = s = f = function(t, s, i, h, e) {
			return "string" == typeof t ? p[t] ? p[t](s) : l(m(t, s).f) : (t.splice || (y = t, s.splice ? (t = s, s = i, i = null) : t = a), s = s || function() {}, "function" == typeof i && (i = h, h = e), h ? M(a, t, s, i) : setTimeout(function() {
				M(a, t, s, i)
			}, 4), f)
		}, f.config = function(t) {
			return y = t, y.deps && f(y.deps, y.callback), f
		}, t._defined = _, i = function(t, s, i) {
			s.splice || (i = s, s = []), h(_, t) || h(d, t) || (d[t] = [t, s, i])
		}, i.amd = {
			jQuery: !0
		}
	}(), i("node_modules/almond/almond", function() {}), i("proj4/mgrs", ["require", "exports", "module"], function(t, s) {
		function i(t) {
			return t * (Math.PI / 180)
		}

		function a(t) {
			return 180 * (t / Math.PI)
		}

		function h(t) {
			var s, a, h, e, r, o, l, u, c, M = t.lat,
				f = t.lon,
				m = 6378137,
				p = .00669438,
				_ = .9996,
				d = i(M),
				y = i(f);
			c = Math.floor((f + 180) / 6) + 1, 180 === f && (c = 60), M >= 56 && 64 > M && f >= 3 && 12 > f && (c = 32), M >= 72 && 84 > M && (f >= 0 && 9 > f ? c = 31 : f >= 9 && 21 > f ? c = 33 : f >= 21 && 33 > f ? c = 35 : f >= 33 && 42 > f && (c = 37)), s = 6 * (c - 1) - 180 + 3, u = i(s), a = p / (1 - p), h = m / Math.sqrt(1 - p * Math.sin(d) * Math.sin(d)), e = Math.tan(d) * Math.tan(d), r = a * Math.cos(d) * Math.cos(d), o = Math.cos(d) * (y - u), l = m * ((1 - p / 4 - 3 * p * p / 64 - 5 * p * p * p / 256) * d - (3 * p / 8 + 3 * p * p / 32 + 45 * p * p * p / 1024) * Math.sin(2 * d) + (15 * p * p / 256 + 45 * p * p * p / 1024) * Math.sin(4 * d) - 35 * p * p * p / 3072 * Math.sin(6 * d));
			var g = _ * h * (o + (1 - e + r) * o * o * o / 6 + (5 - 18 * e + e * e + 72 * r - 58 * a) * o * o * o * o * o / 120) + 5e5,
				x = _ * (l + h * Math.tan(d) * (o * o / 2 + (5 - e + 9 * r + 4 * r * r) * o * o * o * o / 24 + (61 - 58 * e + e * e + 600 * r - 330 * a) * o * o * o * o * o * o / 720));
			return 0 > M && (x += 1e7), {
				northing: Math.round(x),
				easting: Math.round(g),
				zoneNumber: c,
				zoneLetter: n(M)
			}
		}

		function e(t) {
			var s = t.northing,
				i = t.easting,
				h = t.zoneLetter,
				n = t.zoneNumber;
			if(0 > n || n > 60) return null;
			var r, o, l, u, c, M, f, m, p, _, d = .9996,
				y = 6378137,
				g = .00669438,
				x = (1 - Math.sqrt(1 - g)) / (1 + Math.sqrt(1 - g)),
				v = i - 5e5,
				P = s;
			"N" > h && (P -= 1e7), m = 6 * (n - 1) - 180 + 3, r = g / (1 - g), f = P / d, p = f / (y * (1 - g / 4 - 3 * g * g / 64 - 5 * g * g * g / 256)), _ = p + (3 * x / 2 - 27 * x * x * x / 32) * Math.sin(2 * p) + (21 * x * x / 16 - 55 * x * x * x * x / 32) * Math.sin(4 * p) + 151 * x * x * x / 96 * Math.sin(6 * p), o = y / Math.sqrt(1 - g * Math.sin(_) * Math.sin(_)), l = Math.tan(_) * Math.tan(_), u = r * Math.cos(_) * Math.cos(_), c = y * (1 - g) / Math.pow(1 - g * Math.sin(_) * Math.sin(_), 1.5), M = v / (o * d);
			var b = _ - o * Math.tan(_) / c * (M * M / 2 - (5 + 3 * l + 10 * u - 4 * u * u - 9 * r) * M * M * M * M / 24 + (61 + 90 * l + 298 * u + 45 * l * l - 252 * r - 3 * u * u) * M * M * M * M * M * M / 720);
			b = a(b);
			var C = (M - (1 + 2 * l + u) * M * M * M / 6 + (5 - 2 * u + 28 * l - 3 * u * u + 8 * r + 24 * l * l) * M * M * M * M * M / 120) / Math.cos(_);
			C = m + a(C);
			var S;
			if(t.accuracy) {
				var j = e({
					northing: t.northing + t.accuracy,
					easting: t.easting + t.accuracy,
					zoneLetter: t.zoneLetter,
					zoneNumber: t.zoneNumber
				});
				S = {
					top: j.lat,
					right: j.lon,
					bottom: b,
					left: C
				}
			} else S = {
				lat: b,
				lon: C
			};
			return S
		}

		function n(t) {
			var s = "Z";
			return 84 >= t && t >= 72 ? s = "X" : 72 > t && t >= 64 ? s = "W" : 64 > t && t >= 56 ? s = "V" : 56 > t && t >= 48 ? s = "U" : 48 > t && t >= 40 ? s = "T" : 40 > t && t >= 32 ? s = "S" : 32 > t && t >= 24 ? s = "R" : 24 > t && t >= 16 ? s = "Q" : 16 > t && t >= 8 ? s = "P" : 8 > t && t >= 0 ? s = "N" : 0 > t && t >= -8 ? s = "M" : -8 > t && t >= -16 ? s = "L" : -16 > t && t >= -24 ? s = "K" : -24 > t && t >= -32 ? s = "J" : -32 > t && t >= -40 ? s = "H" : -40 > t && t >= -48 ? s = "G" : -48 > t && t >= -56 ? s = "F" : -56 > t && t >= -64 ? s = "E" : -64 > t && t >= -72 ? s = "D" : -72 > t && t >= -80 && (s = "C"), s
		}

		function r(t, s) {
			var i = "" + t.easting,
				a = "" + t.northing;
			return t.zoneNumber + t.zoneLetter + o(t.easting, t.northing, t.zoneNumber) + i.substr(i.length - 5, s) + a.substr(a.length - 5, s)
		}

		function o(t, s, i) {
			var a = l(i),
				h = Math.floor(t / 1e5),
				e = Math.floor(s / 1e5) % 20;
			return u(h, e, a)
		}

		function l(t) {
			var s = t % p;
			return 0 === s && (s = p), s
		}

		function u(t, s, i) {
			var a = i - 1,
				h = _.charCodeAt(a),
				e = d.charCodeAt(a),
				n = h + t - 1,
				r = e + s,
				o = !1;
			n > P && (n = n - P + y - 1, o = !0), (n === g || g > h && n > g || (n > g || g > h) && o) && n++, (n === x || x > h && n > x || (n > x || x > h) && o) && (n++, n === g && n++), n > P && (n = n - P + y - 1), r > v ? (r = r - v + y - 1, o = !0) : o = !1, (r === g || g > e && r > g || (r > g || g > e) && o) && r++, (r === x || x > e && r > x || (r > x || x > e) && o) && (r++, r === g && r++), r > v && (r = r - v + y - 1);
			var l = String.fromCharCode(n) + String.fromCharCode(r);
			return l
		}

		function c(t) {
			if(t && 0 === t.length) throw "MGRSPoint coverting from nothing";
			for(var s, i = t.length, a = null, h = "", e = 0; !/[A-Z]/.test(s = t.charAt(e));) {
				if(e >= 2) throw "MGRSPoint bad conversion from: " + t;
				h += s, e++
			}
			var n = parseInt(h, 10);
			if(0 === e || e + 3 > i) throw "MGRSPoint bad conversion from: " + t;
			var r = t.charAt(e++);
			if("A" >= r || "B" === r || "Y" === r || r >= "Z" || "I" === r || "O" === r) throw "MGRSPoint zone letter " + r + " not handled: " + t;
			a = t.substring(e, e += 2);
			for(var o = l(n), u = M(a.charAt(0), o), c = f(a.charAt(1), o); c < m(r);) c += 2e6;
			var p = i - e;
			if(0 !== p % 2) throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t;
			var _, d, y, g, x, v = p / 2,
				P = 0,
				b = 0;
			return v > 0 && (_ = 1e5 / Math.pow(10, v), d = t.substring(e, e + v), P = parseFloat(d) * _, y = t.substring(e + v), b = parseFloat(y) * _), g = P + u, x = b + c, {
				easting: g,
				northing: x,
				zoneLetter: r,
				zoneNumber: n,
				accuracy: _
			}
		}

		function M(t, s) {
			for(var i = _.charCodeAt(s - 1), a = 1e5, h = !1; i !== t.charCodeAt(0);) {
				if(i++, i === g && i++, i === x && i++, i > P) {
					if(h) throw "Bad character: " + t;
					i = y, h = !0
				}
				a += 1e5
			}
			return a
		}

		function f(t, s) {
			if(t > "V") throw "MGRSPoint given invalid Northing " + t;
			for(var i = d.charCodeAt(s - 1), a = 0, h = !1; i !== t.charCodeAt(0);) {
				if(i++, i === g && i++, i === x && i++, i > v) {
					if(h) throw "Bad character: " + t;
					i = y, h = !0
				}
				a += 1e5
			}
			return a
		}

		function m(t) {
			var s;
			switch(t) {
				case "C":
					s = 11e5;
					break;
				case "D":
					s = 2e6;
					break;
				case "E":
					s = 28e5;
					break;
				case "F":
					s = 37e5;
					break;
				case "G":
					s = 46e5;
					break;
				case "H":
					s = 55e5;
					break;
				case "J":
					s = 64e5;
					break;
				case "K":
					s = 73e5;
					break;
				case "L":
					s = 82e5;
					break;
				case "M":
					s = 91e5;
					break;
				case "N":
					s = 0;
					break;
				case "P":
					s = 8e5;
					break;
				case "Q":
					s = 17e5;
					break;
				case "R":
					s = 26e5;
					break;
				case "S":
					s = 35e5;
					break;
				case "T":
					s = 44e5;
					break;
				case "U":
					s = 53e5;
					break;
				case "V":
					s = 62e5;
					break;
				case "W":
					s = 7e6;
					break;
				case "X":
					s = 79e5;
					break;
				default:
					s = -1
			}
			if(s >= 0) return s;
			throw "Invalid zone letter: " + t
		}
		var p = 6,
			_ = "AJSAJS",
			d = "AFAFAF",
			y = 65,
			g = 73,
			x = 79,
			v = 86,
			P = 90;
		s.forward = function(t, s) {
			return s = s || 5, r(h({
				lat: t.lat,
				lon: t.lon
			}), s)
		}, s.inverse = function(t) {
			var s = e(c(t.toUpperCase()));
			return [s.left, s.bottom, s.right, s.top]
		}
	}), i("proj4/Point", ["./mgrs"], function(t) {
		function s(t, i, a) {
			if(!(this instanceof s)) return new s(t, i, a);
			if("object" == typeof t) this.x = t[0], this.y = t[1], this.z = t[2] || 0;
			else if("string" == typeof t && "undefined" == typeof i) {
				var h = t.split(",");
				this.x = parseFloat(h[0]), this.y = parseFloat(h[1]), this.z = parseFloat(h[2]) || 0
			} else this.x = t, this.y = i, this.z = a || 0;
			this.clone = function() {
				return new s(this.x, this.y, this.z)
			}, this.toString = function() {
				return "x=" + this.x + ",y=" + this.y
			}, this.toShortString = function() {
				return this.x + ", " + this.y
			}
		}
		return s.fromMGRS = function(i) {
			var a = t.inverse(i);
			return new s((a[2] + a[0]) / 2, (a[3] + a[1]) / 2)
		}, s.prototype.toMGRS = function(s) {
			return t.forward({
				lon: this.x,
				lat: this.y
			}, s)
		}, s
	}), i("proj4/extend", [], function() {
		return function(t, s) {
			t = t || {};
			var i, a;
			if(!s) return t;
			for(a in s) i = s[a], void 0 !== i && (t[a] = i);
			return t
		}
	}), i("proj4/common", [], function() {
		var t = {
			PI: 3.141592653589793,
			HALF_PI: 1.5707963267948966,
			TWO_PI: 6.283185307179586,
			FORTPI: .7853981633974483,
			R2D: 57.29577951308232,
			D2R: .017453292519943295,
			SEC_TO_RAD: 484813681109536e-20,
			EPSLN: 1e-10,
			MAX_ITER: 20,
			COS_67P5: .3826834323650898,
			AD_C: 1.0026,
			PJD_UNKNOWN: 0,
			PJD_3PARAM: 1,
			PJD_7PARAM: 2,
			PJD_GRIDSHIFT: 3,
			PJD_WGS84: 4,
			PJD_NODATUM: 5,
			SRS_WGS84_SEMIMAJOR: 6378137,
			SRS_WGS84_ESQUARED: .006694379990141316,
			SIXTH: .16666666666666666,
			RA4: .04722222222222222,
			RA6: .022156084656084655,
			RV4: .06944444444444445,
			RV6: .04243827160493827,
			msfnz: function(t, s, i) {
				var a = t * s;
				return i / Math.sqrt(1 - a * a)
			},
			tsfnz: function(t, s, i) {
				var a = t * i,
					h = .5 * t;
				return a = Math.pow((1 - a) / (1 + a), h), Math.tan(.5 * (this.HALF_PI - s)) / a
			},
			phi2z: function(t, s) {
				for(var i, a, h = .5 * t, e = this.HALF_PI - 2 * Math.atan(s), n = 0; 15 >= n; n++)
					if(i = t * Math.sin(e), a = this.HALF_PI - 2 * Math.atan(s * Math.pow((1 - i) / (1 + i), h)) - e, e += a, Math.abs(a) <= 1e-10) return e;
				return -9999
			},
			qsfnz: function(t, s) {
				var i;
				return t > 1e-7 ? (i = t * s, (1 - t * t) * (s / (1 - i * i) - .5 / t * Math.log((1 - i) / (1 + i)))) : 2 * s
			},
			iqsfnz: function(s, i) {
				var a = 1 - (1 - s * s) / (2 * s) * Math.log((1 - s) / (1 + s));
				if(Math.abs(Math.abs(i) - a) < 1e-6) return 0 > i ? -1 * t.HALF_PI : t.HALF_PI;
				for(var h, e, n, r, o = Math.asin(.5 * i), l = 0; 30 > l; l++)
					if(e = Math.sin(o), n = Math.cos(o), r = s * e, h = Math.pow(1 - r * r, 2) / (2 * n) * (i / (1 - s * s) - e / (1 - r * r) + .5 / s * Math.log((1 - r) / (1 + r))), o += h, Math.abs(h) <= 1e-10) return o;
				return 0 / 0
			},
			asinz: function(t) {
				return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t)
			},
			e0fn: function(t) {
				return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
			},
			e1fn: function(t) {
				return .375 * t * (1 + .25 * t * (1 + .46875 * t))
			},
			e2fn: function(t) {
				return .05859375 * t * t * (1 + .75 * t)
			},
			e3fn: function(t) {
				return t * t * t * (35 / 3072)
			},
			mlfn: function(t, s, i, a, h) {
				return t * h - s * Math.sin(2 * h) + i * Math.sin(4 * h) - a * Math.sin(6 * h)
			},
			imlfn: function(t, s, i, a, h) {
				var e, n;
				e = t / s;
				for(var r = 0; 15 > r; r++)
					if(n = (t - (s * e - i * Math.sin(2 * e) + a * Math.sin(4 * e) - h * Math.sin(6 * e))) / (s - 2 * i * Math.cos(2 * e) + 4 * a * Math.cos(4 * e) - 6 * h * Math.cos(6 * e)), e += n, Math.abs(n) <= 1e-10) return e;
				return 0 / 0
			},
			srat: function(t, s) {
				return Math.pow((1 - t) / (1 + t), s)
			},
			sign: function(t) {
				return 0 > t ? -1 : 1
			},
			adjust_lon: function(t) {
				return t = Math.abs(t) < this.PI ? t : t - this.sign(t) * this.TWO_PI
			},
			adjust_lat: function(t) {
				return t = Math.abs(t) < this.HALF_PI ? t : t - this.sign(t) * this.PI
			},
			latiso: function(t, s, i) {
				if(Math.abs(s) > this.HALF_PI) return Number.NaN;
				if(s === this.HALF_PI) return Number.POSITIVE_INFINITY;
				if(s === -1 * this.HALF_PI) return Number.NEGATIVE_INFINITY;
				var a = t * i;
				return Math.log(Math.tan((this.HALF_PI + s) / 2)) + t * Math.log((1 - a) / (1 + a)) / 2
			},
			fL: function(t, s) {
				return 2 * Math.atan(t * Math.exp(s)) - this.HALF_PI
			},
			invlatiso: function(t, s) {
				var i = this.fL(1, s),
					a = 0,
					h = 0;
				do a = i, h = t * Math.sin(a), i = this.fL(Math.exp(t * Math.log((1 + h) / (1 - h)) / 2), s); while (Math.abs(i - a) > 1e-12);
				return i
			},
			sinh: function(t) {
				var s = Math.exp(t);
				return s = (s - 1 / s) / 2
			},
			cosh: function(t) {
				var s = Math.exp(t);
				return s = (s + 1 / s) / 2
			},
			tanh: function(t) {
				var s = Math.exp(t);
				return s = (s - 1 / s) / (s + 1 / s)
			},
			asinh: function(t) {
				var s = t >= 0 ? 1 : -1;
				return s * Math.log(Math.abs(t) + Math.sqrt(t * t + 1))
			},
			acosh: function(t) {
				return 2 * Math.log(Math.sqrt((t + 1) / 2) + Math.sqrt((t - 1) / 2))
			},
			atanh: function(t) {
				return Math.log((t - 1) / (t + 1)) / 2
			},
			gN: function(t, s, i) {
				var a = s * i;
				return t / Math.sqrt(1 - a * a)
			},
			pj_enfn: function(t) {
				var s = [];
				s[0] = this.C00 - t * (this.C02 + t * (this.C04 + t * (this.C06 + t * this.C08))), s[1] = t * (this.C22 - t * (this.C04 + t * (this.C06 + t * this.C08)));
				var i = t * t;
				return s[2] = i * (this.C44 - t * (this.C46 + t * this.C48)), i *= t, s[3] = i * (this.C66 - t * this.C68), s[4] = i * t * this.C88, s
			},
			pj_mlfn: function(t, s, i, a) {
				return i *= s, s *= s, a[0] * t - i * (a[1] + s * (a[2] + s * (a[3] + s * a[4])))
			},
			pj_inv_mlfn: function(s, i, a) {
				for(var h = 1 / (1 - i), e = s, n = t.MAX_ITER; n; --n) {
					var r = Math.sin(e),
						o = 1 - i * r * r;
					if(o = (this.pj_mlfn(e, r, Math.cos(e), a) - s) * o * Math.sqrt(o) * h, e -= o, Math.abs(o) < t.EPSLN) return e
				}
				return e
			},
			nad_intr: function(t, s) {
				var i, a = {
						x: (t.x - 1e-7) / s.del[0],
						y: (t.y - 1e-7) / s.del[1]
					},
					h = {
						x: Math.floor(a.x),
						y: Math.floor(a.y)
					},
					e = {
						x: a.x - 1 * h.x,
						y: a.y - 1 * h.y
					},
					n = {
						x: Number.NaN,
						y: Number.NaN
					};
				if(h.x < 0) {
					if(!(-1 === h.x && e.x > .99999999999)) return n;
					h.x++, e.x = 0
				} else if(i = h.x + 1, i >= s.lim[0]) {
					if(!(i === s.lim[0] && e.x < 1e-11)) return n;
					h.x--, e.x = 1
				}
				if(h.y < 0) {
					if(!(-1 === h.y && e.y > .99999999999)) return n;
					h.y++, e.y = 0
				} else if(i = h.y + 1, i >= s.lim[1]) {
					if(!(i === s.lim[1] && e.y < 1e-11)) return n;
					h.y++, e.y = 1
				}
				i = h.y * s.lim[0] + h.x;
				var r = {
					x: s.cvs[i][0],
					y: s.cvs[i][1]
				};
				i++;
				var o = {
					x: s.cvs[i][0],
					y: s.cvs[i][1]
				};
				i += s.lim[0];
				var l = {
					x: s.cvs[i][0],
					y: s.cvs[i][1]
				};
				i--;
				var u = {
						x: s.cvs[i][0],
						y: s.cvs[i][1]
					},
					c = e.x * e.y,
					M = e.x * (1 - e.y),
					f = (1 - e.x) * (1 - e.y),
					m = (1 - e.x) * e.y;
				return n.x = f * r.x + M * o.x + m * u.x + c * l.x, n.y = f * r.y + M * o.y + m * u.y + c * l.y, n
			},
			nad_cvt: function(s, i, a) {
				var h = {
					x: Number.NaN,
					y: Number.NaN
				};
				if(isNaN(s.x)) return h;
				var e = {
					x: s.x,
					y: s.y
				};
				e.x -= a.ll[0], e.y -= a.ll[1], e.x = t.adjust_lon(e.x - t.PI) + t.PI;
				var n = t.nad_intr(e, a);
				if(i) {
					if(isNaN(n.x)) return h;
					n.x = e.x + n.x, n.y = e.y - n.y;
					var r, o, l = 9,
						u = 1e-12;
					do {
						if(o = t.nad_intr(n, a), isNaN(o.x)) {
							this.reportError("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
							break
						}
						r = {
							x: n.x - o.x - e.x,
							y: n.y + o.y - e.y
						}, n.x -= r.x, n.y -= r.y
					} while (l-- && Math.abs(r.x) > u && Math.abs(r.y) > u);
					if(0 > l) return this.reportError("Inverse grid shift iterator failed to converge."), h;
					h.x = t.adjust_lon(n.x + a.ll[0]), h.y = n.y + a.ll[1]
				} else isNaN(n.x) || (h.x = s.x - n.x, h.y = s.y + n.y);
				return h
			},
			C00: 1,
			C02: .25,
			C04: .046875,
			C06: .01953125,
			C08: .01068115234375,
			C22: .75,
			C44: .46875,
			C46: .013020833333333334,
			C48: .007120768229166667,
			C66: .3645833333333333,
			C68: .005696614583333333,
			C88: .3076171875
		};
		return t
	}), i("proj4/constants", [], function() {
		var t = {};
		return t.PrimeMeridian = {
			greenwich: 0,
			lisbon: -9.131906111111,
			paris: 2.337229166667,
			bogota: -74.080916666667,
			madrid: -3.687938888889,
			rome: 12.452333333333,
			bern: 7.439583333333,
			jakarta: 106.807719444444,
			ferro: -17.666666666667,
			brussels: 4.367975,
			stockholm: 18.058277777778,
			athens: 23.7163375,
			oslo: 10.722916666667
		}, t.Ellipsoid = {
			MERIT: {
				a: 6378137,
				rf: 298.257,
				ellipseName: "MERIT 1983"
			},
			SGS85: {
				a: 6378136,
				rf: 298.257,
				ellipseName: "Soviet Geodetic System 85"
			},
			GRS80: {
				a: 6378137,
				rf: 298.257222101,
				ellipseName: "GRS 1980(IUGG, 1980)"
			},
			IAU76: {
				a: 6378140,
				rf: 298.257,
				ellipseName: "IAU 1976"
			},
			airy: {
				a: 6377563.396,
				b: 6356256.91,
				ellipseName: "Airy 1830"
			},
			"APL4.": {
				a: 6378137,
				rf: 298.25,
				ellipseName: "Appl. Physics. 1965"
			},
			NWL9D: {
				a: 6378145,
				rf: 298.25,
				ellipseName: "Naval Weapons Lab., 1965"
			},
			mod_airy: {
				a: 6377340.189,
				b: 6356034.446,
				ellipseName: "Modified Airy"
			},
			andrae: {
				a: 6377104.43,
				rf: 300,
				ellipseName: "Andrae 1876 (Den., Iclnd.)"
			},
			aust_SA: {
				a: 6378160,
				rf: 298.25,
				ellipseName: "Australian Natl & S. Amer. 1969"
			},
			GRS67: {
				a: 6378160,
				rf: 298.247167427,
				ellipseName: "GRS 67(IUGG 1967)"
			},
			bessel: {
				a: 6377397.155,
				rf: 299.1528128,
				ellipseName: "Bessel 1841"
			},
			bess_nam: {
				a: 6377483.865,
				rf: 299.1528128,
				ellipseName: "Bessel 1841 (Namibia)"
			},
			clrk66: {
				a: 6378206.4,
				b: 6356583.8,
				ellipseName: "Clarke 1866"
			},
			clrk80: {
				a: 6378249.145,
				rf: 293.4663,
				ellipseName: "Clarke 1880 mod."
			},
			clrk58: {
				a: 6378293.645208759,
				rf: 294.2606763692654,
				ellipseName: "Clarke 1858"
			},
			CPM: {
				a: 6375738.7,
				rf: 334.29,
				ellipseName: "Comm. des Poids et Mesures 1799"
			},
			delmbr: {
				a: 6376428,
				rf: 311.5,
				ellipseName: "Delambre 1810 (Belgium)"
			},
			engelis: {
				a: 6378136.05,
				rf: 298.2566,
				ellipseName: "Engelis 1985"
			},
			evrst30: {
				a: 6377276.345,
				rf: 300.8017,
				ellipseName: "Everest 1830"
			},
			evrst48: {
				a: 6377304.063,
				rf: 300.8017,
				ellipseName: "Everest 1948"
			},
			evrst56: {
				a: 6377301.243,
				rf: 300.8017,
				ellipseName: "Everest 1956"
			},
			evrst69: {
				a: 6377295.664,
				rf: 300.8017,
				ellipseName: "Everest 1969"
			},
			evrstSS: {
				a: 6377298.556,
				rf: 300.8017,
				ellipseName: "Everest (Sabah & Sarawak)"
			},
			fschr60: {
				a: 6378166,
				rf: 298.3,
				ellipseName: "Fischer (Mercury Datum) 1960"
			},
			fschr60m: {
				a: 6378155,
				rf: 298.3,
				ellipseName: "Fischer 1960"
			},
			fschr68: {
				a: 6378150,
				rf: 298.3,
				ellipseName: "Fischer 1968"
			},
			helmert: {
				a: 6378200,
				rf: 298.3,
				ellipseName: "Helmert 1906"
			},
			hough: {
				a: 6378270,
				rf: 297,
				ellipseName: "Hough"
			},
			intl: {
				a: 6378388,
				rf: 297,
				ellipseName: "International 1909 (Hayford)"
			},
			kaula: {
				a: 6378163,
				rf: 298.24,
				ellipseName: "Kaula 1961"
			},
			lerch: {
				a: 6378139,
				rf: 298.257,
				ellipseName: "Lerch 1979"
			},
			mprts: {
				a: 6397300,
				rf: 191,
				ellipseName: "Maupertius 1738"
			},
			new_intl: {
				a: 6378157.5,
				b: 6356772.2,
				ellipseName: "New International 1967"
			},
			plessis: {
				a: 6376523,
				rf: 6355863,
				ellipseName: "Plessis 1817 (France)"
			},
			krass: {
				a: 6378245,
				rf: 298.3,
				ellipseName: "Krassovsky, 1942"
			},
			SEasia: {
				a: 6378155,
				b: 6356773.3205,
				ellipseName: "Southeast Asia"
			},
			walbeck: {
				a: 6376896,
				b: 6355834.8467,
				ellipseName: "Walbeck"
			},
			WGS60: {
				a: 6378165,
				rf: 298.3,
				ellipseName: "WGS 60"
			},
			WGS66: {
				a: 6378145,
				rf: 298.25,
				ellipseName: "WGS 66"
			},
			WGS72: {
				a: 6378135,
				rf: 298.26,
				ellipseName: "WGS 72"
			},
			WGS84: {
				a: 6378137,
				rf: 298.257223563,
				ellipseName: "WGS 84"
			},
			sphere: {
				a: 6370997,
				b: 6370997,
				ellipseName: "Normal Sphere (r=6370997)"
			}
		}, t.Datum = {
			wgs84: {
				towgs84: "0,0,0",
				ellipse: "WGS84",
				datumName: "WGS84"
			},
			ch1903: {
				towgs84: "674.374,15.056,405.346",
				ellipse: "bessel",
				datumName: "swiss"
			},
			ggrs87: {
				towgs84: "-199.87,74.79,246.62",
				ellipse: "GRS80",
				datumName: "Greek_Geodetic_Reference_System_1987"
			},
			nad83: {
				towgs84: "0,0,0",
				ellipse: "GRS80",
				datumName: "North_American_Datum_1983"
			},
			nad27: {
				nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
				ellipse: "clrk66",
				datumName: "North_American_Datum_1927"
			},
			potsdam: {
				towgs84: "606.0,23.0,413.0",
				ellipse: "bessel",
				datumName: "Potsdam Rauenberg 1950 DHDN"
			},
			carthage: {
				towgs84: "-263.0,6.0,431.0",
				ellipse: "clark80",
				datumName: "Carthage 1934 Tunisia"
			},
			hermannskogel: {
				towgs84: "653.0,-212.0,449.0",
				ellipse: "bessel",
				datumName: "Hermannskogel"
			},
			ire65: {
				towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
				ellipse: "mod_airy",
				datumName: "Ireland 1965"
			},
			rassadiran: {
				towgs84: "-133.63,-157.5,-158.62",
				ellipse: "intl",
				datumName: "Rassadiran"
			},
			nzgd49: {
				towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
				ellipse: "intl",
				datumName: "New Zealand Geodetic Datum 1949"
			},
			osgb36: {
				towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
				ellipse: "airy",
				datumName: "Airy 1830"
			},
			s_jtsk: {
				towgs84: "589,76,480",
				ellipse: "bessel",
				datumName: "S-JTSK (Ferro)"
			},
			beduaram: {
				towgs84: "-106,-87,188",
				ellipse: "clrk80",
				datumName: "Beduaram"
			},
			gunung_segara: {
				towgs84: "-403,684,41",
				ellipse: "bessel",
				datumName: "Gunung Segara Jakarta"
			}
		}, t.Datum.OSB36 = t.Datum.OSGB36, t.wktProjections = {
			"Lambert Tangential Conformal Conic Projection": "lcc",
			Lambert_Conformal_Conic: "lcc",
			Lambert_Conformal_Conic_2SP: "lcc",
			Mercator: "merc",
			"Popular Visualisation Pseudo Mercator": "merc",
			Mercator_1SP: "merc",
			Transverse_Mercator: "tmerc",
			"Transverse Mercator": "tmerc",
			"Lambert Azimuthal Equal Area": "laea",
			"Universal Transverse Mercator System": "utm",
			Hotine_Oblique_Mercator: "omerc",
			"Hotine Oblique Mercator": "omerc",
			Hotine_Oblique_Mercator_Azimuth_Natural_Origin: "omerc",
			Hotine_Oblique_Mercator_Azimuth_Center: "omerc",
			Van_der_Grinten_I: "vandg",
			VanDerGrinten: "vandg",
			Stereographic_North_Pole: "sterea",
			Oblique_Stereographic: "sterea",
			Polar_Stereographic: "sterea",
			Polyconic: "poly",
			New_Zealand_Map_Grid: "nzmg",
			Miller_Cylindrical: "mill",
			Krovak: "krovak",
			Equirectangular: "eqc",
			Equidistant_Cylindrical: "eqc",
			Cassini: "cass",
			Cassini_Soldner: "cass",
			Azimuthal_Equidistant: "aeqd",
			Albers_Conic_Equal_Area: "aea",
			Albers: "aea",
			Mollweide: "moll",
			Lambert_Azimuthal_Equal_Area: "laea",
			Sinusoidal: "sinu",
			Equidistant_Conic: "eqdc",
			Mercator_Auxiliary_Sphere: "merc"
		}, t.grids = {
			"null": {
				ll: [-3.14159265, -1.57079633],
				del: [3.14159265, 1.57079633],
				lim: [3, 3],
				count: 9,
				cvs: [
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
				]
			}
		}, t
	}), i("proj4/global", [], function() {
		return function(t) {
			t("WGS84", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"]
		}
	}), i("proj4/projString", ["./common", "./constants"], function(t, s) {
		return function(i) {
			var a = {},
				h = {};
			i.split("+").map(function(t) {
				return t.trim()
			}).filter(function(t) {
				return t
			}).forEach(function(t) {
				var s = t.split("=");
				"@null" !== s[1] && (s.push(!0), h[s[0].toLowerCase()] = s[1])
			});
			var e, n, r, o = {
				proj: "projName",
				datum: "datumCode",
				rf: function(t) {
					a.rf = parseFloat(t, 10)
				},
				lat_0: function(s) {
					a.lat0 = s * t.D2R
				},
				lat_1: function(s) {
					a.lat1 = s * t.D2R
				},
				lat_2: function(s) {
					a.lat2 = s * t.D2R
				},
				lat_ts: function(s) {
					a.lat_ts = s * t.D2R
				},
				lon_0: function(s) {
					a.long0 = s * t.D2R
				},
				lon_1: function(s) {
					a.long1 = s * t.D2R
				},
				lon_2: function(s) {
					a.long2 = s * t.D2R
				},
				alpha: function(s) {
					a.alpha = parseFloat(s) * t.D2R
				},
				lonc: function(s) {
					a.longc = s * t.D2R
				},
				x_0: function(t) {
					a.x0 = parseFloat(t, 10)
				},
				y_0: function(t) {
					a.y0 = parseFloat(t, 10)
				},
				k_0: function(t) {
					a.k0 = parseFloat(t, 10)
				},
				k: function(t) {
					a.k0 = parseFloat(t, 10)
				},
				r_a: function() {
					a.R_A = !0
				},
				zone: function(t) {
					a.zone = parseInt(t, 10)
				},
				south: function() {
					a.utmSouth = !0
				},
				towgs84: function(t) {
					a.datum_params = t.split(",").map(function(t) {
						return parseFloat(t, 10)
					})
				},
				to_meter: function(t) {
					a.to_meter = parseFloat(t, 10)
				},
				from_greenwich: function(s) {
					a.from_greenwich = s * t.D2R
				},
				pm: function(i) {
					a.from_greenwich = (s.PrimeMeridian[i] ? s.PrimeMeridian[i] : parseFloat(i, 10)) * t.D2R
				},
				axis: function(t) {
					var s = "ewnsud";
					3 === t.length && -1 !== s.indexOf(t.substr(0, 1)) && -1 !== s.indexOf(t.substr(1, 1)) && -1 !== s.indexOf(t.substr(2, 1)) && (a.axis = t)
				}
			};
			for(e in h) n = h[e], e in o ? (r = o[e], "function" == typeof r ? r(n) : a[r] = n) : a[e] = n;
			return a
		}
	}), i("proj4/wkt", ["./extend", "./constants", "./common"], function(t, s, i) {
		function a(s, i, a) {
			s[i] = a.map(function(t) {
				var s = {};
				return h(t, s), s
			}).reduce(function(s, i) {
				return t(s, i)
			}, {})
		}

		function h(t, s) {
			var i;
			return Array.isArray(t) ? (i = t.shift(), "PARAMETER" === i && (i = t.shift()), 1 === t.length ? Array.isArray(t[0]) ? (s[i] = {}, h(t[0], s[i])) : s[i] = t[0] : t.length ? "TOWGS84" === i ? s[i] = t : (s[i] = {}, ["UNIT", "PRIMEM", "VERT_DATUM"].indexOf(i) > -1 ? (s[i] = {
				name: t[0].toLowerCase(),
				convert: t[1]
			}, 3 === t.length && (s[i].auth = t[2])) : "SPHEROID" === i ? (s[i] = {
				name: t[0],
				a: t[1],
				rf: t[2]
			}, 4 === t.length && (s[i].auth = t[3])) : ["GEOGCS", "GEOCCS", "DATUM", "VERT_CS", "COMPD_CS", "LOCAL_CS", "FITTED_CS", "LOCAL_DATUM"].indexOf(i) > -1 ? (t[0] = ["name", t[0]], a(s, i, t)) : t.every(function(t) {
				return Array.isArray(t)
			}) ? a(s, i, t) : h(t, s[i])) : s[i] = !0, void 0) : (s[t] = !0, void 0)
		}

		function e(t, s) {
			var i = s[0],
				a = s[1];
			!(i in t) && a in t && (t[i] = t[a], 3 === s.length && (t[i] = s[2](t[i])))
		}

		function n(t) {
			return t * i.D2R
		}

		function r(t) {
			function i(s) {
				var i = t.to_meter || 1;
				return parseFloat(s, 10) * i
			}
			"GEOGCS" === t.type ? t.projName = "longlat" : "LOCAL_CS" === t.type ? (t.projName = "identity", t.local = !0) : t.projName = s.wktProjections[t.PROJECTION], t.UNIT && (t.units = t.UNIT.name.toLowerCase(), "metre" === t.units && (t.units = "meter"), t.UNIT.convert && (t.to_meter = parseFloat(t.UNIT.convert, 10))), t.GEOGCS && (t.datumCode = t.GEOGCS.DATUM ? t.GEOGCS.DATUM.name.toLowerCase() : t.GEOGCS.name.toLowerCase(), "d_" === t.datumCode.slice(0, 2) && (t.datumCode = t.datumCode.slice(2)), ("new_zealand_geodetic_datum_1949" === t.datumCode || "new_zealand_1949" === t.datumCode) && (t.datumCode = "nzgd49"), "wgs_1984" === t.datumCode && ("Mercator_Auxiliary_Sphere" === t.PROJECTION && (t.sphere = !0), t.datumCode = "wgs84"), "_ferro" === t.datumCode.slice(-6) && (t.datumCode = t.datumCode.slice(0, -6)), "_jakarta" === t.datumCode.slice(-8) && (t.datumCode = t.datumCode.slice(0, -8)), t.GEOGCS.DATUM && t.GEOGCS.DATUM.SPHEROID && (t.ellps = t.GEOGCS.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t.ellps.toLowerCase().slice(0, 13) && (t.ellps = "intl"), t.a = t.GEOGCS.DATUM.SPHEROID.a, t.rf = parseFloat(t.GEOGCS.DATUM.SPHEROID.rf, 10))), t.b && !isFinite(t.b) && (t.b = t.a);
			var a = function(s) {
					return e(t, s)
				},
				h = [
					["standard_parallel_1", "Standard_Parallel_1"],
					["standard_parallel_2", "Standard_Parallel_2"],
					["false_easting", "False_Easting"],
					["false_northing", "False_Northing"],
					["central_meridian", "Central_Meridian"],
					["latitude_of_origin", "Latitude_Of_Origin"],
					["scale_factor", "Scale_Factor"],
					["k0", "scale_factor"],
					["latitude_of_center", "Latitude_of_center"],
					["lat0", "latitude_of_center", n],
					["longitude_of_center", "Longitude_Of_Center"],
					["longc", "longitude_of_center", n],
					["x0", "false_easting", i],
					["y0", "false_northing", i],
					["long0", "central_meridian", n],
					["lat0", "latitude_of_origin", n],
					["lat0", "standard_parallel_1", n],
					["lat1", "standard_parallel_1", n],
					["lat2", "standard_parallel_2", n],
					["alpha", "azimuth", n],
					["srsCode", "name"]
				];
			h.forEach(a), t.long0 || !t.longc || "Albers_Conic_Equal_Area" !== t.PROJECTION && "Lambert_Azimuthal_Equal_Area" !== t.PROJECTION || (t.long0 = t.longc)
		}
		return function(s, i) {
			var a = JSON.parse(("," + s).replace(/\,([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\,([A-Z_0-9]+?)\]/g, ',"$1"]')),
				e = a.shift(),
				n = a.shift();
			a.unshift(["name", n]), a.unshift(["type", e]), a.unshift("output");
			var o = {};
			return h(a, o), r(o.output), t(i, o.output)
		}
	}), i("proj4/defs", ["./common", "./constants", "./global", "./projString", "./wkt"], function(t, s, i, a, h) {
		function e(t) {
			var s = this;
			if(2 === arguments.length) e[t] = "+" === arguments[1][0] ? a(arguments[1]) : h(arguments[1]);
			else if(1 === arguments.length) return Array.isArray(t) ? t.map(function(t) {
				Array.isArray(t) ? e.apply(s, t) : e(t)
			}) : ("string" == typeof t || ("EPSG" in t ? e["EPSG:" + t.EPSG] = t : "ESRI" in t ? e["ESRI:" + t.ESRI] = t : "IAU2000" in t ? e["IAU2000:" + t.IAU2000] = t : console.log(t)), void 0)
		}
		return i(e), e
	}), i("proj4/datum", ["./common"], function(t) {
		var s = function(i) {
			if(!(this instanceof s)) return new s(i);
			if(this.datum_type = t.PJD_WGS84, i) {
				if(i.datumCode && "none" === i.datumCode && (this.datum_type = t.PJD_NODATUM), i.datum_params) {
					for(var a = 0; a < i.datum_params.length; a++) i.datum_params[a] = parseFloat(i.datum_params[a]);
					(0 !== i.datum_params[0] || 0 !== i.datum_params[1] || 0 !== i.datum_params[2]) && (this.datum_type = t.PJD_3PARAM), i.datum_params.length > 3 && (0 !== i.datum_params[3] || 0 !== i.datum_params[4] || 0 !== i.datum_params[5] || 0 !== i.datum_params[6]) && (this.datum_type = t.PJD_7PARAM, i.datum_params[3] *= t.SEC_TO_RAD, i.datum_params[4] *= t.SEC_TO_RAD, i.datum_params[5] *= t.SEC_TO_RAD, i.datum_params[6] = i.datum_params[6] / 1e6 + 1)
				}
				this.datum_type = i.grids ? t.PJD_GRIDSHIFT : this.datum_type, this.a = i.a, this.b = i.b, this.es = i.es, this.ep2 = i.ep2, this.datum_params = i.datum_params, this.datum_type === t.PJD_GRIDSHIFT && (this.grids = i.grids)
			}
		};
		return s.prototype = {
			compare_datums: function(s) {
				return this.datum_type !== s.datum_type ? !1 : this.a !== s.a || Math.abs(this.es - s.es) > 5e-11 ? !1 : this.datum_type === t.PJD_3PARAM ? this.datum_params[0] === s.datum_params[0] && this.datum_params[1] === s.datum_params[1] && this.datum_params[2] === s.datum_params[2] : this.datum_type === t.PJD_7PARAM ? this.datum_params[0] === s.datum_params[0] && this.datum_params[1] === s.datum_params[1] && this.datum_params[2] === s.datum_params[2] && this.datum_params[3] === s.datum_params[3] && this.datum_params[4] === s.datum_params[4] && this.datum_params[5] === s.datum_params[5] && this.datum_params[6] === s.datum_params[6] : this.datum_type === t.PJD_GRIDSHIFT || s.datum_type === t.PJD_GRIDSHIFT ? this.nadgrids === s.nadgrids : !0
			},
			geodetic_to_geocentric: function(s) {
				var i, a, h, e, n, r, o, l = s.x,
					u = s.y,
					c = s.z ? s.z : 0,
					M = 0;
				if(u < -t.HALF_PI && u > -1.001 * t.HALF_PI) u = -t.HALF_PI;
				else if(u > t.HALF_PI && u < 1.001 * t.HALF_PI) u = t.HALF_PI;
				else if(u < -t.HALF_PI || u > t.HALF_PI) return null;
				return l > t.PI && (l -= 2 * t.PI), n = Math.sin(u), o = Math.cos(u), r = n * n, e = this.a / Math.sqrt(1 - this.es * r), i = (e + c) * o * Math.cos(l), a = (e + c) * o * Math.sin(l), h = (e * (1 - this.es) + c) * n, s.x = i, s.y = a, s.z = h, M
			},
			geocentric_to_geodetic: function(s) {
				var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g = 1e-12,
					x = g * g,
					v = 30,
					P = s.x,
					b = s.y,
					C = s.z ? s.z : 0;
				if(m = !1, i = Math.sqrt(P * P + b * b), a = Math.sqrt(P * P + b * b + C * C), i / this.a < g) {
					if(m = !0, _ = 0, a / this.a < g) return d = t.HALF_PI, y = -this.b, void 0
				} else _ = Math.atan2(b, P);
				h = C / a, e = i / a, n = 1 / Math.sqrt(1 - this.es * (2 - this.es) * e * e), l = e * (1 - this.es) * n, u = h * n, p = 0;
				do p++, o = this.a / Math.sqrt(1 - this.es * u * u), y = i * l + C * u - o * (1 - this.es * u * u), r = this.es * o / (o + y), n = 1 / Math.sqrt(1 - r * (2 - r) * e * e), c = e * (1 - r) * n, M = h * n, f = M * l - c * u, l = c, u = M; while (f * f > x && v > p);
				return d = Math.atan(M / Math.abs(c)), s.x = _, s.y = d, s.z = y, s
			},
			geocentric_to_geodetic_noniter: function(s) {
				var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g = s.x,
					x = s.y,
					v = s.z ? s.z : 0;
				if(g = parseFloat(g), x = parseFloat(x), v = parseFloat(v), y = !1, 0 !== g) i = Math.atan2(x, g);
				else if(x > 0) i = t.HALF_PI;
				else if(0 > x) i = -t.HALF_PI;
				else if(y = !0, i = 0, v > 0) a = t.HALF_PI;
				else {
					if(!(0 > v)) return a = t.HALF_PI, h = -this.b, void 0;
					a = -t.HALF_PI
				}
				return n = g * g + x * x, e = Math.sqrt(n), r = v * t.AD_C, l = Math.sqrt(r * r + n), c = r / l, f = e / l, M = c * c * c, o = v + this.b * this.ep2 * M, d = e - this.a * this.es * f * f * f, u = Math.sqrt(o * o + d * d), m = o / u, p = d / u, _ = this.a / Math.sqrt(1 - this.es * m * m), h = p >= t.COS_67P5 ? e / p - _ : p <= -t.COS_67P5 ? e / -p - _ : v / m + _ * (this.es - 1), y === !1 && (a = Math.atan(m / p)), s.x = i, s.y = a, s.z = h, s
			},
			geocentric_to_wgs84: function(s) {
				if(this.datum_type === t.PJD_3PARAM) s.x += this.datum_params[0], s.y += this.datum_params[1], s.z += this.datum_params[2];
				else if(this.datum_type === t.PJD_7PARAM) {
					var i = this.datum_params[0],
						a = this.datum_params[1],
						h = this.datum_params[2],
						e = this.datum_params[3],
						n = this.datum_params[4],
						r = this.datum_params[5],
						o = this.datum_params[6],
						l = o * (s.x - r * s.y + n * s.z) + i,
						u = o * (r * s.x + s.y - e * s.z) + a,
						c = o * (-n * s.x + e * s.y + s.z) + h;
					s.x = l, s.y = u, s.z = c
				}
			},
			geocentric_from_wgs84: function(s) {
				if(this.datum_type === t.PJD_3PARAM) s.x -= this.datum_params[0], s.y -= this.datum_params[1], s.z -= this.datum_params[2];
				else if(this.datum_type === t.PJD_7PARAM) {
					var i = this.datum_params[0],
						a = this.datum_params[1],
						h = this.datum_params[2],
						e = this.datum_params[3],
						n = this.datum_params[4],
						r = this.datum_params[5],
						o = this.datum_params[6],
						l = (s.x - i) / o,
						u = (s.y - a) / o,
						c = (s.z - h) / o;
					s.x = l + r * u - n * c, s.y = -r * l + u + e * c, s.z = n * l - e * u + c
				}
			}
		}, s
	}), i("proj4/projCode/longlat", ["require", "exports", "module"], function(t, s) {
		function i(t) {
			return t
		}
		s.init = function() {}, s.forward = i, s.inverse = i
	}), i("proj4/projCode/tmerc", ["../common"], function(t) {
		return {
			init: function() {
				this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
			},
			forward: function(s) {
				var i, a, h, e = s.x,
					n = s.y,
					r = t.adjust_lon(e - this.long0),
					o = Math.sin(n),
					l = Math.cos(n);
				if(this.sphere) {
					var u = l * Math.sin(r);
					if(Math.abs(Math.abs(u) - 1) < 1e-10) return 93;
					a = .5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)), i = Math.acos(l * Math.cos(r) / Math.sqrt(1 - u * u)), 0 > n && (i = -i), h = this.a * this.k0 * (i - this.lat0)
				} else {
					var c = l * r,
						M = Math.pow(c, 2),
						f = this.ep2 * Math.pow(l, 2),
						m = Math.tan(n),
						p = Math.pow(m, 2);
					i = 1 - this.es * Math.pow(o, 2);
					var _ = this.a / Math.sqrt(i),
						d = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, n);
					a = this.k0 * _ * c * (1 + M / 6 * (1 - p + f + M / 20 * (5 - 18 * p + Math.pow(p, 2) + 72 * f - 58 * this.ep2))) + this.x0, h = this.k0 * (d - this.ml0 + _ * m * M * (.5 + M / 24 * (5 - p + 9 * f + 4 * Math.pow(f, 2) + M / 30 * (61 - 58 * p + Math.pow(p, 2) + 600 * f - 330 * this.ep2)))) + this.y0
				}
				return s.x = a, s.y = h, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r, o = 6;
				if(this.sphere) {
					var l = Math.exp(s.x / (this.a * this.k0)),
						u = .5 * (l - 1 / l),
						c = this.lat0 + s.y / (this.a * this.k0),
						M = Math.cos(c);
					i = Math.sqrt((1 - M * M) / (1 + u * u)), n = t.asinz(i), 0 > c && (n = -n), r = 0 === u && 0 === M ? this.long0 : t.adjust_lon(Math.atan2(u, M) + this.long0)
				} else {
					var f = s.x - this.x0,
						m = s.y - this.y0;
					for(i = (this.ml0 + m / this.k0) / this.a, a = i, e = 0; !0 && (h = (i + this.e1 * Math.sin(2 * a) - this.e2 * Math.sin(4 * a) + this.e3 * Math.sin(6 * a)) / this.e0 - a, a += h, !(Math.abs(h) <= t.EPSLN)); e++)
						if(e >= o) return 95;
					if(Math.abs(a) < t.HALF_PI) {
						var p = Math.sin(a),
							_ = Math.cos(a),
							d = Math.tan(a),
							y = this.ep2 * Math.pow(_, 2),
							g = Math.pow(y, 2),
							x = Math.pow(d, 2),
							v = Math.pow(x, 2);
						i = 1 - this.es * Math.pow(p, 2);
						var P = this.a / Math.sqrt(i),
							b = P * (1 - this.es) / i,
							C = f / (P * this.k0),
							S = Math.pow(C, 2);
						n = a - P * d * S / b * (.5 - S / 24 * (5 + 3 * x + 10 * y - 4 * g - 9 * this.ep2 - S / 30 * (61 + 90 * x + 298 * y + 45 * v - 252 * this.ep2 - 3 * g))), r = t.adjust_lon(this.long0 + C * (1 - S / 6 * (1 + 2 * x + y - S / 20 * (5 - 2 * y + 28 * x - 3 * g + 8 * this.ep2 + 24 * v))) / _)
					} else n = t.HALF_PI * t.sign(m), r = this.long0
				}
				return s.x = r, s.y = n, s
			}
		}
	}), i("proj4/projCode/utm", ["../common", "./tmerc"], function(t, s) {
		return {
			dependsOn: "tmerc",
			init: function() {
				this.zone && (this.lat0 = 0, this.long0 = (6 * Math.abs(this.zone) - 183) * t.D2R, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = .9996, s.init.apply(this), this.forward = s.forward, this.inverse = s.inverse)
			}
		}
	}), i("proj4/projCode/gauss", ["../common"], function(t) {
		return {
			init: function() {
				var s = Math.sin(this.lat0),
					i = Math.cos(this.lat0);
				i *= i, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * s * s), this.C = Math.sqrt(1 + this.es * i * i / (1 - this.es)), this.phic0 = Math.asin(s / this.C), this.ratexp = .5 * this.C * this.e, this.K = Math.tan(.5 * this.phic0 + t.FORTPI) / (Math.pow(Math.tan(.5 * this.lat0 + t.FORTPI), this.C) * t.srat(this.e * s, this.ratexp))
			},
			forward: function(s) {
				var i = s.x,
					a = s.y;
				return s.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * a + t.FORTPI), this.C) * t.srat(this.e * Math.sin(a), this.ratexp)) - t.HALF_PI, s.x = this.C * i, s
			},
			inverse: function(s) {
				for(var i = 1e-14, a = s.x / this.C, h = s.y, e = Math.pow(Math.tan(.5 * h + t.FORTPI) / this.K, 1 / this.C), n = t.MAX_ITER; n > 0 && (h = 2 * Math.atan(e * t.srat(this.e * Math.sin(s.y), -.5 * this.e)) - t.HALF_PI, !(Math.abs(h - s.y) < i)); --n) s.y = h;
				return n ? (s.x = a, s.y = h, s) : null
			}
		}
	}), i("proj4/projCode/sterea", ["../common", "./gauss"], function(t, s) {
		return {
			init: function() {
				s.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"))
			},
			forward: function(i) {
				var a, h, e, n;
				return i.x = t.adjust_lon(i.x - this.long0), s.forward.apply(this, [i]), a = Math.sin(i.y), h = Math.cos(i.y), e = Math.cos(i.x), n = this.k0 * this.R2 / (1 + this.sinc0 * a + this.cosc0 * h * e), i.x = n * h * Math.sin(i.x), i.y = n * (this.cosc0 * a - this.sinc0 * h * e), i.x = this.a * i.x + this.x0, i.y = this.a * i.y + this.y0, i
			},
			inverse: function(i) {
				var a, h, e, n, r;
				if(i.x = (i.x - this.x0) / this.a, i.y = (i.y - this.y0) / this.a, i.x /= this.k0, i.y /= this.k0, r = Math.sqrt(i.x * i.x + i.y * i.y)) {
					var o = 2 * Math.atan2(r, this.R2);
					a = Math.sin(o), h = Math.cos(o), n = Math.asin(h * this.sinc0 + i.y * a * this.cosc0 / r), e = Math.atan2(i.x * a, r * this.cosc0 * h - i.y * this.sinc0 * a)
				} else n = this.phic0, e = 0;
				return i.x = e, i.y = n, s.inverse.apply(this, [i]), i.x = t.adjust_lon(i.x + this.long0), i
			}
		}
	}), i("proj4/projCode/somerc", [], function() {
		return {
			init: function() {
				var t = this.lat0;
				this.lambda0 = this.long0;
				var s = Math.sin(t),
					i = this.a,
					a = this.rf,
					h = 1 / a,
					e = 2 * h - Math.pow(h, 2),
					n = this.e = Math.sqrt(e);
				this.R = this.k0 * i * Math.sqrt(1 - e) / (1 - e * Math.pow(s, 2)), this.alpha = Math.sqrt(1 + e / (1 - e) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(s / this.alpha);
				var r = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)),
					o = Math.log(Math.tan(Math.PI / 4 + t / 2)),
					l = Math.log((1 + n * s) / (1 - n * s));
				this.K = r - this.alpha * o + this.alpha * n / 2 * l
			},
			forward: function(t) {
				var s = Math.log(Math.tan(Math.PI / 4 - t.y / 2)),
					i = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))),
					a = -this.alpha * (s + i) + this.K,
					h = 2 * (Math.atan(Math.exp(a)) - Math.PI / 4),
					e = this.alpha * (t.x - this.lambda0),
					n = Math.atan(Math.sin(e) / (Math.sin(this.b0) * Math.tan(h) + Math.cos(this.b0) * Math.cos(e))),
					r = Math.asin(Math.cos(this.b0) * Math.sin(h) - Math.sin(this.b0) * Math.cos(h) * Math.cos(e));
				return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0, t.x = this.R * n + this.x0, t
			},
			inverse: function(t) {
				for(var s = t.x - this.x0, i = t.y - this.y0, a = s / this.R, h = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), e = Math.asin(Math.cos(this.b0) * Math.sin(h) + Math.sin(this.b0) * Math.cos(h) * Math.cos(a)), n = Math.atan(Math.sin(a) / (Math.cos(this.b0) * Math.cos(a) - Math.sin(this.b0) * Math.tan(h))), r = this.lambda0 + n / this.alpha, o = 0, l = e, u = -1e3, c = 0; Math.abs(l - u) > 1e-7;) {
					if(++c > 20) return;
					o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + e / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(o)) - Math.PI / 2
				}
				return t.x = r, t.y = l, t
			}
		}
	}), i("proj4/projCode/omerc", ["../common"], function(t) {
		return {
			init: function() {
				this.no_off = this.no_off || !1, this.no_rot = this.no_rot || !1, isNaN(this.k0) && (this.k0 = 1);
				var s = Math.sin(this.lat0),
					i = Math.cos(this.lat0),
					a = this.e * s;
				this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(i, 4)), this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - a * a);
				var h = t.tsfnz(this.e, this.lat0, s),
					e = this.bl / i * Math.sqrt((1 - this.es) / (1 - a * a));
				1 > e * e && (e = 1);
				var n, r;
				if(isNaN(this.longc)) {
					var o = t.tsfnz(this.e, this.lat1, Math.sin(this.lat1)),
						l = t.tsfnz(this.e, this.lat2, Math.sin(this.lat2));
					this.el = this.lat0 >= 0 ? (e + Math.sqrt(e * e - 1)) * Math.pow(h, this.bl) : (e - Math.sqrt(e * e - 1)) * Math.pow(h, this.bl);
					var u = Math.pow(o, this.bl),
						c = Math.pow(l, this.bl);
					n = this.el / u, r = .5 * (n - 1 / n);
					var M = (this.el * this.el - c * u) / (this.el * this.el + c * u),
						f = (c - u) / (c + u),
						m = t.adjust_lon(this.long1 - this.long2);
					this.long0 = .5 * (this.long1 + this.long2) - Math.atan(M * Math.tan(.5 * this.bl * m) / f) / this.bl, this.long0 = t.adjust_lon(this.long0);
					var p = t.adjust_lon(this.long1 - this.long0);
					this.gamma0 = Math.atan(Math.sin(this.bl * p) / r), this.alpha = Math.asin(e * Math.sin(this.gamma0))
				} else n = this.lat0 >= 0 ? e + Math.sqrt(e * e - 1) : e - Math.sqrt(e * e - 1), this.el = n * Math.pow(h, this.bl), r = .5 * (n - 1 / n), this.gamma0 = Math.asin(Math.sin(this.alpha) / e), this.long0 = this.longc - Math.asin(r * Math.tan(this.gamma0)) / this.bl;
				this.uc = this.no_off ? 0 : this.lat0 >= 0 ? this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha)) : -1 * this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha))
			},
			forward: function(s) {
				var i, a, h, e = s.x,
					n = s.y,
					r = t.adjust_lon(e - this.long0);
				if(Math.abs(Math.abs(n) - t.HALF_PI) <= t.EPSLN) h = n > 0 ? -1 : 1, a = this.al / this.bl * Math.log(Math.tan(t.FORTPI + .5 * h * this.gamma0)), i = -1 * h * t.HALF_PI * this.al / this.bl;
				else {
					var o = t.tsfnz(this.e, n, Math.sin(n)),
						l = this.el / Math.pow(o, this.bl),
						u = .5 * (l - 1 / l),
						c = .5 * (l + 1 / l),
						M = Math.sin(this.bl * r),
						f = (u * Math.sin(this.gamma0) - M * Math.cos(this.gamma0)) / c;
					a = Math.abs(Math.abs(f) - 1) <= t.EPSLN ? Number.POSITIVE_INFINITY : .5 * this.al * Math.log((1 - f) / (1 + f)) / this.bl, i = Math.abs(Math.cos(this.bl * r)) <= t.EPSLN ? this.al * this.bl * r : this.al * Math.atan2(u * Math.cos(this.gamma0) + M * Math.sin(this.gamma0), Math.cos(this.bl * r)) / this.bl
				}
				return this.no_rot ? (s.x = this.x0 + i, s.y = this.y0 + a) : (i -= this.uc, s.x = this.x0 + a * Math.cos(this.alpha) + i * Math.sin(this.alpha), s.y = this.y0 + i * Math.cos(this.alpha) - a * Math.sin(this.alpha)), s
			},
			inverse: function(s) {
				var i, a;
				this.no_rot ? (a = s.y - this.y0, i = s.x - this.x0) : (a = (s.x - this.x0) * Math.cos(this.alpha) - (s.y - this.y0) * Math.sin(this.alpha), i = (s.y - this.y0) * Math.cos(this.alpha) + (s.x - this.x0) * Math.sin(this.alpha), i += this.uc);
				var h = Math.exp(-1 * this.bl * a / this.al),
					e = .5 * (h - 1 / h),
					n = .5 * (h + 1 / h),
					r = Math.sin(this.bl * i / this.al),
					o = (r * Math.cos(this.gamma0) + e * Math.sin(this.gamma0)) / n,
					l = Math.pow(this.el / Math.sqrt((1 + o) / (1 - o)), 1 / this.bl);
				return Math.abs(o - 1) < t.EPSLN ? (s.x = this.long0, s.y = t.HALF_PI) : Math.abs(o + 1) < t.EPSLN ? (s.x = this.long0, s.y = -1 * t.HALF_PI) : (s.y = t.phi2z(this.e, l), s.x = t.adjust_lon(this.long0 - Math.atan2(e * Math.cos(this.gamma0) - r * Math.sin(this.gamma0), Math.cos(this.bl * i / this.al)) / this.bl)), s
			}
		}
	}), i("proj4/projCode/lcc", ["../common"], function(t) {
		return {
			init: function() {
				if(this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), !(Math.abs(this.lat1 + this.lat2) < t.EPSLN)) {
					var s = this.b / this.a;
					this.e = Math.sqrt(1 - s * s);
					var i = Math.sin(this.lat1),
						a = Math.cos(this.lat1),
						h = t.msfnz(this.e, i, a),
						e = t.tsfnz(this.e, this.lat1, i),
						n = Math.sin(this.lat2),
						r = Math.cos(this.lat2),
						o = t.msfnz(this.e, n, r),
						l = t.tsfnz(this.e, this.lat2, n),
						u = t.tsfnz(this.e, this.lat0, Math.sin(this.lat0));
					this.ns = Math.abs(this.lat1 - this.lat2) > t.EPSLN ? Math.log(h / o) / Math.log(e / l) : i, isNaN(this.ns) && (this.ns = i), this.f0 = h / (this.ns * Math.pow(e, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic")
				}
			},
			forward: function(s) {
				var i = s.x,
					a = s.y;
				Math.abs(2 * Math.abs(a) - t.PI) <= t.EPSLN && (a = t.sign(a) * (t.HALF_PI - 2 * t.EPSLN));
				var h, e, n = Math.abs(Math.abs(a) - t.HALF_PI);
				if(n > t.EPSLN) h = t.tsfnz(this.e, a, Math.sin(a)), e = this.a * this.f0 * Math.pow(h, this.ns);
				else {
					if(n = a * this.ns, 0 >= n) return null;
					e = 0
				}
				var r = this.ns * t.adjust_lon(i - this.long0);
				return s.x = this.k0 * e * Math.sin(r) + this.x0, s.y = this.k0 * (this.rh - e * Math.cos(r)) + this.y0, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r = (s.x - this.x0) / this.k0,
					o = this.rh - (s.y - this.y0) / this.k0;
				this.ns > 0 ? (i = Math.sqrt(r * r + o * o), a = 1) : (i = -Math.sqrt(r * r + o * o), a = -1);
				var l = 0;
				if(0 !== i && (l = Math.atan2(a * r, a * o)), 0 !== i || this.ns > 0) {
					if(a = 1 / this.ns, h = Math.pow(i / (this.a * this.f0), a), e = t.phi2z(this.e, h), -9999 === e) return null
				} else e = -t.HALF_PI;
				return n = t.adjust_lon(l / this.ns + this.long0), s.x = n, s.y = e, s
			}
		}
	}), i("proj4/projCode/krovak", ["../common"], function(t) {
		return {
			init: function() {
				this.a = 6377397.155, this.es = .006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = .863937979737193), this.long0 || (this.long0 = .4334234309119251), this.k0 || (this.k0 = .9999), this.s45 = .785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq
			},
			forward: function(s) {
				var i, a, h, e, n, r, o, l = s.x,
					u = s.y,
					c = t.adjust_lon(l - this.long0);
				return i = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), a = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / i) - this.s45), h = -c * this.alfa, e = Math.asin(Math.cos(this.ad) * Math.sin(a) + Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), n = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(e)), r = this.n * n, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(e / 2 + this.s45), this.n), s.y = o * Math.cos(r) / 1, s.x = o * Math.sin(r) / 1, this.czech || (s.y *= -1, s.x *= -1), s
			},
			inverse: function(t) {
				var s, i, a, h, e, n, r, o, l = t.x;
				t.x = t.y, t.y = l, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), e = Math.atan2(t.y, t.x), h = e / Math.sin(this.s0), a = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), s = Math.asin(Math.cos(this.ad) * Math.sin(a) - Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), i = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(s)), t.x = this.long0 - i / this.alfa, r = s, o = 0;
				var u = 0;
				do t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(s / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(r)) / (1 - this.e * Math.sin(r)), this.e / 2)) - this.s45), Math.abs(r - t.y) < 1e-10 && (o = 1), r = t.y, u += 1; while (0 === o && 15 > u);
				return u >= 15 ? null : t
			}
		}
	}), i("proj4/projCode/cass", ["../common"], function(t) {
		return {
			init: function() {
				this.sphere || (this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0))
			},
			forward: function(s) {
				var i, a, h = s.x,
					e = s.y;
				if(h = t.adjust_lon(h - this.long0), this.sphere) i = this.a * Math.asin(Math.cos(e) * Math.sin(h)), a = this.a * (Math.atan2(Math.tan(e), Math.cos(h)) - this.lat0);
				else {
					var n = Math.sin(e),
						r = Math.cos(e),
						o = t.gN(this.a, this.e, n),
						l = Math.tan(e) * Math.tan(e),
						u = h * Math.cos(e),
						c = u * u,
						M = this.es * r * r / (1 - this.es),
						f = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, e);
					i = o * u * (1 - c * l * (1 / 6 - (8 - l + 8 * M) * c / 120)), a = f - this.ml0 + o * n / r * c * (.5 + (5 - l + 6 * M) * c / 24)
				}
				return s.x = i + this.x0, s.y = a + this.y0, s
			},
			inverse: function(s) {
				s.x -= this.x0, s.y -= this.y0;
				var i, a, h = s.x / this.a,
					e = s.y / this.a;
				if(this.sphere) {
					var n = e + this.lat0;
					i = Math.asin(Math.sin(n) * Math.cos(h)), a = Math.atan2(Math.tan(h), Math.cos(n))
				} else {
					var r = this.ml0 / this.a + e,
						o = t.imlfn(r, this.e0, this.e1, this.e2, this.e3);
					if(Math.abs(Math.abs(o) - t.HALF_PI) <= t.EPSLN) return s.x = this.long0, s.y = t.HALF_PI, 0 > e && (s.y *= -1), s;
					var l = t.gN(this.a, this.e, Math.sin(o)),
						u = l * l * l / this.a / this.a * (1 - this.es),
						c = Math.pow(Math.tan(o), 2),
						M = h * this.a / l,
						f = M * M;
					i = o - l * Math.tan(o) / u * M * M * (.5 - (1 + 3 * c) * M * M / 24), a = M * (1 - f * (c / 3 + (1 + 3 * c) * c * f / 15)) / Math.cos(o)
				}
				return s.x = t.adjust_lon(a + this.long0), s.y = t.adjust_lat(i), s
			}
		}
	}), i("proj4/projCode/laea", ["../common"], function(t) {
		return {
			S_POLE: 1,
			N_POLE: 2,
			EQUIT: 3,
			OBLIQ: 4,
			init: function() {
				var s = Math.abs(this.lat0);
				if(this.mode = Math.abs(s - t.HALF_PI) < t.EPSLN ? this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(s) < t.EPSLN ? this.EQUIT : this.OBLIQ, this.es > 0) {
					var i;
					switch(this.qp = t.qsfnz(this.e, 1), this.mmf = .5 / (1 - this.es), this.apa = this.authset(this.es), this.mode) {
						case this.N_POLE:
							this.dd = 1;
							break;
						case this.S_POLE:
							this.dd = 1;
							break;
						case this.EQUIT:
							this.rq = Math.sqrt(.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = .5 * this.qp;
							break;
						case this.OBLIQ:
							this.rq = Math.sqrt(.5 * this.qp), i = Math.sin(this.lat0), this.sinb1 = t.qsfnz(this.e, i) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * i * i) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd
					}
				} else this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0))
			},
			forward: function(s) {
				var i, a, h, e, n, r, o, l, u, c, M = s.x,
					f = s.y;
				if(M = t.adjust_lon(M - this.long0), this.sphere) {
					if(n = Math.sin(f), c = Math.cos(f), h = Math.cos(M), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
						if(a = this.mode === this.EQUIT ? 1 + c * h : 1 + this.sinph0 * n + this.cosph0 * c * h, a <= t.EPSLN) return null;
						a = Math.sqrt(2 / a), i = a * c * Math.sin(M), a *= this.mode === this.EQUIT ? n : this.cosph0 * n - this.sinph0 * c * h
					} else if(this.mode === this.N_POLE || this.mode === this.S_POLE) {
						if(this.mode === this.N_POLE && (h = -h), Math.abs(f + this.phi0) < t.EPSLN) return null;
						a = t.FORTPI - .5 * f, a = 2 * (this.mode === this.S_POLE ? Math.cos(a) : Math.sin(a)), i = a * Math.sin(M), a *= h
					}
				} else {
					switch(o = 0, l = 0, u = 0, h = Math.cos(M), e = Math.sin(M), n = Math.sin(f), r = t.qsfnz(this.e, n), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = r / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
						case this.OBLIQ:
							u = 1 + this.sinb1 * o + this.cosb1 * l * h;
							break;
						case this.EQUIT:
							u = 1 + l * h;
							break;
						case this.N_POLE:
							u = t.HALF_PI + f, r = this.qp - r;
							break;
						case this.S_POLE:
							u = f - t.HALF_PI, r = this.qp + r
					}
					if(Math.abs(u) < t.EPSLN) return null;
					switch(this.mode) {
						case this.OBLIQ:
						case this.EQUIT:
							u = Math.sqrt(2 / u), a = this.mode === this.OBLIQ ? this.ymf * u * (this.cosb1 * o - this.sinb1 * l * h) : (u = Math.sqrt(2 / (1 + l * h))) * o * this.ymf, i = this.xmf * u * l * e;
							break;
						case this.N_POLE:
						case this.S_POLE:
							r >= 0 ? (i = (u = Math.sqrt(r)) * e, a = h * (this.mode === this.S_POLE ? u : -u)) : i = a = 0
					}
				}
				return s.x = this.a * i + this.x0, s.y = this.a * a + this.y0, s
			},
			inverse: function(s) {
				s.x -= this.x0, s.y -= this.y0;
				var i, a, h, e, n, r, o, l = s.x / this.a,
					u = s.y / this.a;
				if(this.sphere) {
					var c, M = 0,
						f = 0;
					if(c = Math.sqrt(l * l + u * u), a = .5 * c, a > 1) return null;
					switch(a = 2 * Math.asin(a), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (f = Math.sin(a), M = Math.cos(a)), this.mode) {
						case this.EQUIT:
							a = Math.abs(c) <= t.EPSLN ? 0 : Math.asin(u * f / c), l *= f, u = M * c;
							break;
						case this.OBLIQ:
							a = Math.abs(c) <= t.EPSLN ? this.phi0 : Math.asin(M * this.sinph0 + u * f * this.cosph0 / c), l *= f * this.cosph0, u = (M - Math.sin(a) * this.sinph0) * c;
							break;
						case this.N_POLE:
							u = -u, a = t.HALF_PI - a;
							break;
						case this.S_POLE:
							a -= t.HALF_PI
					}
					i = 0 !== u || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(l, u) : 0
				} else {
					if(o = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
						if(l /= this.dd, u *= this.dd, r = Math.sqrt(l * l + u * u), r < t.EPSLN) return s.x = 0, s.y = this.phi0, s;
						e = 2 * Math.asin(.5 * r / this.rq), h = Math.cos(e), l *= e = Math.sin(e), this.mode === this.OBLIQ ? (o = h * this.sinb1 + u * e * this.cosb1 / r, n = this.qp * o, u = r * this.cosb1 * h - u * this.sinb1 * e) : (o = u * e / r, n = this.qp * o, u = r * h)
					} else if(this.mode === this.N_POLE || this.mode === this.S_POLE) {
						if(this.mode === this.N_POLE && (u = -u), n = l * l + u * u, !n) return s.x = 0, s.y = this.phi0, s;
						o = 1 - n / this.qp, this.mode === this.S_POLE && (o = -o)
					}
					i = Math.atan2(l, u), a = this.authlat(Math.asin(o), this.apa)
				}
				return s.x = t.adjust_lon(this.long0 + i), s.y = a, s
			},
			P00: .3333333333333333,
			P01: .17222222222222222,
			P02: .10257936507936508,
			P10: .06388888888888888,
			P11: .0664021164021164,
			P20: .016415012942191543,
			authset: function(t) {
				var s, i = [];
				return i[0] = t * this.P00, s = t * t, i[0] += s * this.P01, i[1] = s * this.P10, s *= t, i[0] += s * this.P02, i[1] += s * this.P11, i[2] = s * this.P20, i
			},
			authlat: function(t, s) {
				var i = t + t;
				return t + s[0] * Math.sin(i) + s[1] * Math.sin(i + i) + s[2] * Math.sin(i + i + i)
			}
		}
	}), i("proj4/projCode/merc", ["../common"], function(t) {
		return {
			init: function() {
				var s = this.b / this.a;
				this.es = 1 - s * s, this.e = Math.sqrt(this.es), this.lat_ts ? this.k0 = this.sphere ? Math.cos(this.lat_ts) : t.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k0 = this.k ? this.k : 1)
			},
			forward: function(s) {
				var i = s.x,
					a = s.y;
				if(a * t.R2D > 90 && a * t.R2D < -90 && i * t.R2D > 180 && i * t.R2D < -180) return null;
				var h, e;
				if(Math.abs(Math.abs(a) - t.HALF_PI) <= t.EPSLN) return null;
				if(this.sphere) h = this.x0 + this.a * this.k0 * t.adjust_lon(i - this.long0), e = this.y0 + this.a * this.k0 * Math.log(Math.tan(t.FORTPI + .5 * a));
				else {
					var n = Math.sin(a),
						r = t.tsfnz(this.e, a, n);
					h = this.x0 + this.a * this.k0 * t.adjust_lon(i - this.long0), e = this.y0 - this.a * this.k0 * Math.log(r)
				}
				return s.x = h, s.y = e, s
			},
			inverse: function(s) {
				var i, a, h = s.x - this.x0,
					e = s.y - this.y0;
				if(this.sphere) a = t.HALF_PI - 2 * Math.atan(Math.exp(-e / (this.a * this.k0)));
				else {
					var n = Math.exp(-e / (this.a * this.k0));
					if(a = t.phi2z(this.e, n), -9999 === a) return null
				}
				return i = t.adjust_lon(this.long0 + h / (this.a * this.k0)), s.x = i, s.y = a, s
			}
		}
	}), i("proj4/projCode/aea", ["../common"], function(t) {
		return {
			init: function() {
				Math.abs(this.lat1 + this.lat2) < t.EPSLN || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = t.msfnz(this.e3, this.sin_po, this.cos_po), this.qs1 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = t.msfnz(this.e3, this.sin_po, this.cos_po), this.qs2 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.ns0 = Math.abs(this.lat1 - this.lat2) > t.EPSLN ? (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0)
			},
			forward: function(s) {
				var i = s.x,
					a = s.y;
				this.sin_phi = Math.sin(a), this.cos_phi = Math.cos(a);
				var h = t.qsfnz(this.e3, this.sin_phi, this.cos_phi),
					e = this.a * Math.sqrt(this.c - this.ns0 * h) / this.ns0,
					n = this.ns0 * t.adjust_lon(i - this.long0),
					r = e * Math.sin(n) + this.x0,
					o = this.rh - e * Math.cos(n) + this.y0;
				return s.x = r, s.y = o, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r;
				return s.x -= this.x0, s.y = this.rh - s.y + this.y0, this.ns0 >= 0 ? (i = Math.sqrt(s.x * s.x + s.y * s.y), h = 1) : (i = -Math.sqrt(s.x * s.x + s.y * s.y), h = -1), e = 0, 0 !== i && (e = Math.atan2(h * s.x, h * s.y)), h = i * this.ns0 / this.a, this.sphere ? r = Math.asin((this.c - h * h) / (2 * this.ns0)) : (a = (this.c - h * h) / this.ns0, r = this.phi1z(this.e3, a)), n = t.adjust_lon(e / this.ns0 + this.long0), s.x = n, s.y = r, s
			},
			phi1z: function(s, i) {
				var a, h, e, n, r, o = t.asinz(.5 * i);
				if(s < t.EPSLN) return o;
				for(var l = s * s, u = 1; 25 >= u; u++)
					if(a = Math.sin(o), h = Math.cos(o), e = s * a, n = 1 - e * e, r = .5 * n * n / h * (i / (1 - l) - a / n + .5 / s * Math.log((1 - e) / (1 + e))), o += r, Math.abs(r) <= 1e-7) return o;
				return null
			}
		}
	}), i("proj4/projCode/gnom", ["../common"], function(t) {
		return {
			init: function() {
				this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1
			},
			forward: function(s) {
				var i, a, h, e, n, r, o, l, u = s.x,
					c = s.y;
				return h = t.adjust_lon(u - this.long0), i = Math.sin(c), a = Math.cos(c), e = Math.cos(h), r = this.sin_p14 * i + this.cos_p14 * a * e, n = 1, r > 0 || Math.abs(r) <= t.EPSLN ? (o = this.x0 + this.a * n * a * Math.sin(h) / r, l = this.y0 + this.a * n * (this.cos_p14 * i - this.sin_p14 * a * e) / r) : (o = this.x0 + this.infinity_dist * a * Math.sin(h), l = this.y0 + this.infinity_dist * (this.cos_p14 * i - this.sin_p14 * a * e)), s.x = o, s.y = l, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r;
				return s.x = (s.x - this.x0) / this.a, s.y = (s.y - this.y0) / this.a, s.x /= this.k0, s.y /= this.k0, (i = Math.sqrt(s.x * s.x + s.y * s.y)) ? (e = Math.atan2(i, this.rc), a = Math.sin(e), h = Math.cos(e), r = t.asinz(h * this.sin_p14 + s.y * a * this.cos_p14 / i), n = Math.atan2(s.x * a, i * this.cos_p14 * h - s.y * this.sin_p14 * a), n = t.adjust_lon(this.long0 + n)) : (r = this.phic0, n = 0), s.x = n, s.y = r, s
			}
		}
	}), i("proj4/projCode/cea", ["../common"], function(t) {
		return {
			init: function() {
				this.sphere || (this.k0 = t.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)))
			},
			forward: function(s) {
				var i, a, h = s.x,
					e = s.y,
					n = t.adjust_lon(h - this.long0);
				if(this.sphere) i = this.x0 + this.a * n * Math.cos(this.lat_ts), a = this.y0 + this.a * Math.sin(e) / Math.cos(this.lat_ts);
				else {
					var r = t.qsfnz(this.e, Math.sin(e));
					i = this.x0 + this.a * this.k0 * n, a = this.y0 + .5 * this.a * r / this.k0
				}
				return s.x = i, s.y = a, s
			},
			inverse: function(s) {
				s.x -= this.x0, s.y -= this.y0;
				var i, a;
				return this.sphere ? (i = t.adjust_lon(this.long0 + s.x / this.a / Math.cos(this.lat_ts)), a = Math.asin(s.y / this.a * Math.cos(this.lat_ts))) : (a = t.iqsfnz(this.e, 2 * s.y * this.k0 / this.a), i = t.adjust_lon(this.long0 + s.x / (this.a * this.k0))), s.x = i, s.y = a, s
			}
		}
	}), i("proj4/projCode/eqc", ["../common"], function(t) {
		return {
			init: function() {
				this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_t || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts)
			},
			forward: function(s) {
				var i = s.x,
					a = s.y,
					h = t.adjust_lon(i - this.long0),
					e = t.adjust_lat(a - this.lat0);
				return s.x = this.x0 + this.a * h * this.rc, s.y = this.y0 + this.a * e, s
			},
			inverse: function(s) {
				var i = s.x,
					a = s.y;
				return s.x = t.adjust_lon(this.long0 + (i - this.x0) / (this.a * this.rc)), s.y = t.adjust_lat(this.lat0 + (a - this.y0) / this.a), s
			}
		}
	}), i("proj4/projCode/poly", ["../common"], function(t) {
		return {
			init: function() {
				this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
			},
			forward: function(s) {
				var i, a, h, e = s.x,
					n = s.y,
					r = t.adjust_lon(e - this.long0);
				if(h = r * Math.sin(n), this.sphere) Math.abs(n) <= t.EPSLN ? (i = this.a * r, a = -1 * this.a * this.lat0) : (i = this.a * Math.sin(h) / Math.tan(n), a = this.a * (t.adjust_lat(n - this.lat0) + (1 - Math.cos(h)) / Math.tan(n)));
				else if(Math.abs(n) <= t.EPSLN) i = this.a * r, a = -1 * this.ml0;
				else {
					var o = t.gN(this.a, this.e, Math.sin(n)) / Math.tan(n);
					i = o * Math.sin(h), a = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(h))
				}
				return s.x = i + this.x0, s.y = a + this.y0, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r, o, l, u;
				if(h = s.x - this.x0, e = s.y - this.y0, this.sphere)
					if(Math.abs(e + this.a * this.lat0) <= t.EPSLN) i = t.adjust_lon(h / this.a + this.long0), a = 0;
					else {
						r = this.lat0 + e / this.a, o = h * h / this.a / this.a + r * r, l = r;
						var c;
						for(n = t.MAX_ITER; n; --n)
							if(c = Math.tan(l), u = -1 * (r * (l * c + 1) - l - .5 * (l * l + o) * c) / ((l - r) / c - 1), l += u, Math.abs(u) <= t.EPSLN) {
								a = l;
								break
							}
						i = t.adjust_lon(this.long0 + Math.asin(h * Math.tan(l) / this.a) / Math.sin(a))
					}
				else if(Math.abs(e + this.ml0) <= t.EPSLN) a = 0, i = t.adjust_lon(this.long0 + h / this.a);
				else {
					r = (this.ml0 + e) / this.a, o = h * h / this.a / this.a + r * r, l = r;
					var M, f, m, p, _;
					for(n = t.MAX_ITER; n; --n)
						if(_ = this.e * Math.sin(l), M = Math.sqrt(1 - _ * _) * Math.tan(l), f = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, l), m = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = f / this.a, u = (r * (M * p + 1) - p - .5 * M * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * r * p) / (4 * M) + (r - p) * (M * m - 2 / Math.sin(2 * l)) - m), l -= u, Math.abs(u) <= t.EPSLN) {
							a = l;
							break
						}
					M = Math.sqrt(1 - this.es * Math.pow(Math.sin(a), 2)) * Math.tan(a), i = t.adjust_lon(this.long0 + Math.asin(h * M / this.a) / Math.sin(a))
				}
				return s.x = i, s.y = a, s
			}
		}
	}), i("proj4/projCode/nzmg", ["../common"], function(t) {
		return {
			iterations: 1,
			init: function() {
				this.A = [], this.A[1] = .6399175073, this.A[2] = -.1358797613, this.A[3] = .063294409, this.A[4] = -.02526853, this.A[5] = .0117879, this.A[6] = -.0055161, this.A[7] = .0026906, this.A[8] = -.001333, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = .7557853228, this.B_im[1] = 0, this.B_re[2] = .249204646, this.B_im[2] = .003371507, this.B_re[3] = -.001541739, this.B_im[3] = .04105856, this.B_re[4] = -.10162907, this.B_im[4] = .01727609, this.B_re[5] = -.26623489, this.B_im[5] = -.36249218, this.B_re[6] = -.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -.577245789, this.C_im[2] = -.007809598, this.C_re[3] = .508307513, this.C_im[3] = -.112208952, this.C_re[4] = -.15094762, this.C_im[4] = .18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = .5185406398, this.D[3] = -.03333098, this.D[4] = -.1052906, this.D[5] = -.0368594, this.D[6] = .007317, this.D[7] = .0122, this.D[8] = .00394, this.D[9] = -.0013
			},
			forward: function(s) {
				var i, a = s.x,
					h = s.y,
					e = h - this.lat0,
					n = a - this.long0,
					r = 1e-5 * (e / t.SEC_TO_RAD),
					o = n,
					l = 1,
					u = 0;
				for(i = 1; 10 >= i; i++) l *= r, u += this.A[i] * l;
				var c, M, f = u,
					m = o,
					p = 1,
					_ = 0,
					d = 0,
					y = 0;
				for(i = 1; 6 >= i; i++) c = p * f - _ * m, M = _ * f + p * m, p = c, _ = M, d = d + this.B_re[i] * p - this.B_im[i] * _, y = y + this.B_im[i] * p + this.B_re[i] * _;
				return s.x = y * this.a + this.x0, s.y = d * this.a + this.y0, s
			},
			inverse: function(s) {
				var i, a, h, e = s.x,
					n = s.y,
					r = e - this.x0,
					o = n - this.y0,
					l = o / this.a,
					u = r / this.a,
					c = 1,
					M = 0,
					f = 0,
					m = 0;
				for(i = 1; 6 >= i; i++) a = c * l - M * u, h = M * l + c * u, c = a, M = h, f = f + this.C_re[i] * c - this.C_im[i] * M, m = m + this.C_im[i] * c + this.C_re[i] * M;
				for(var p = 0; p < this.iterations; p++) {
					var _, d, y = f,
						g = m,
						x = l,
						v = u;
					for(i = 2; 6 >= i; i++) _ = y * f - g * m, d = g * f + y * m, y = _, g = d, x += (i - 1) * (this.B_re[i] * y - this.B_im[i] * g), v += (i - 1) * (this.B_im[i] * y + this.B_re[i] * g);
					y = 1, g = 0;
					var P = this.B_re[1],
						b = this.B_im[1];
					for(i = 2; 6 >= i; i++) _ = y * f - g * m, d = g * f + y * m, y = _, g = d, P += i * (this.B_re[i] * y - this.B_im[i] * g), b += i * (this.B_im[i] * y + this.B_re[i] * g);
					var C = P * P + b * b;
					f = (x * P + v * b) / C, m = (v * P - x * b) / C
				}
				var S = f,
					j = m,
					N = 1,
					A = 0;
				for(i = 1; 9 >= i; i++) N *= S, A += this.D[i] * N;
				var I = this.lat0 + 1e5 * A * t.SEC_TO_RAD,
					E = this.long0 + j;
				return s.x = E, s.y = I, s
			}
		}
	}), i("proj4/projCode/mill", ["../common"], function(t) {
		return {
			init: function() {},
			forward: function(s) {
				var i = s.x,
					a = s.y,
					h = t.adjust_lon(i - this.long0),
					e = this.x0 + this.a * h,
					n = this.y0 + 1.25 * this.a * Math.log(Math.tan(t.PI / 4 + a / 2.5));
				return s.x = e, s.y = n, s
			},
			inverse: function(s) {
				s.x -= this.x0, s.y -= this.y0;
				var i = t.adjust_lon(this.long0 + s.x / this.a),
					a = 2.5 * (Math.atan(Math.exp(.8 * s.y / this.a)) - t.PI / 4);
				return s.x = i, s.y = a, s
			}
		}
	}), i("proj4/projCode/sinu", ["../common"], function(t) {
		return {
			init: function() {
				this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = t.pj_enfn(this.es)
			},
			forward: function(s) {
				var i, a, h = s.x,
					e = s.y;
				if(h = t.adjust_lon(h - this.long0), this.sphere) {
					if(this.m)
						for(var n = this.n * Math.sin(e), r = t.MAX_ITER; r; --r) {
							var o = (this.m * e + Math.sin(e) - n) / (this.m + Math.cos(e));
							if(e -= o, Math.abs(o) < t.EPSLN) break
						} else e = 1 !== this.n ? Math.asin(this.n * Math.sin(e)) : e;
					i = this.a * this.C_x * h * (this.m + Math.cos(e)), a = this.a * this.C_y * e
				} else {
					var l = Math.sin(e),
						u = Math.cos(e);
					a = this.a * t.pj_mlfn(e, l, u, this.en), i = this.a * h * u / Math.sqrt(1 - this.es * l * l)
				}
				return s.x = i, s.y = a, s
			},
			inverse: function(s) {
				var i, a, h;
				if(s.x -= this.x0, s.y -= this.y0, i = s.y / this.a, this.sphere) s.y /= this.C_y, i = this.m ? Math.asin((this.m * s.y + Math.sin(s.y)) / this.n) : 1 !== this.n ? Math.asin(Math.sin(s.y) / this.n) : s.y, h = s.x / (this.C_x * (this.m + Math.cos(s.y)));
				else {
					i = t.pj_inv_mlfn(s.y / this.a, this.es, this.en);
					var e = Math.abs(i);
					e < t.HALF_PI ? (e = Math.sin(i), a = this.long0 + s.x * Math.sqrt(1 - this.es * e * e) / (this.a * Math.cos(i)), h = t.adjust_lon(a)) : e - t.EPSLN < t.HALF_PI && (h = this.long0)
				}
				return s.x = h, s.y = i, s
			}
		}
	}), i("proj4/projCode/moll", ["../common"], function(t) {
		return {
			init: function() {},
			forward: function(s) {
				for(var i = s.x, a = s.y, h = t.adjust_lon(i - this.long0), e = a, n = t.PI * Math.sin(a), r = 0; !0; r++) {
					var o = -(e + Math.sin(e) - n) / (1 + Math.cos(e));
					if(e += o, Math.abs(o) < t.EPSLN) break
				}
				e /= 2, t.PI / 2 - Math.abs(a) < t.EPSLN && (h = 0);
				var l = .900316316158 * this.a * h * Math.cos(e) + this.x0,
					u = 1.4142135623731 * this.a * Math.sin(e) + this.y0;
				return s.x = l, s.y = u, s
			},
			inverse: function(s) {
				var i, a;
				s.x -= this.x0, s.y -= this.y0, a = s.y / (1.4142135623731 * this.a), Math.abs(a) > .999999999999 && (a = .999999999999), i = Math.asin(a);
				var h = t.adjust_lon(this.long0 + s.x / (.900316316158 * this.a * Math.cos(i)));
				h < -t.PI && (h = -t.PI), h > t.PI && (h = t.PI), a = (2 * i + Math.sin(2 * i)) / t.PI, Math.abs(a) > 1 && (a = 1);
				var e = Math.asin(a);
				return s.x = h, s.y = e, s
			}
		}
	}), i("proj4/projCode/eqdc", ["../common"], function(t) {
		return {
			init: function() {
				return Math.abs(this.lat1 + this.lat2) < t.EPSLN ? (t.reportError("eqdc:init: Equal Latitudes"), void 0) : (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = t.msfnz(this.e, this.sinphi, this.cosphi), this.ml1 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < t.EPSLN ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = t.msfnz(this.e, this.sinphi, this.cosphi), this.ml2 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0), void 0)
			},
			forward: function(s) {
				var i, a = s.x,
					h = s.y;
				if(this.sphere) i = this.a * (this.g - h);
				else {
					var e = t.mlfn(this.e0, this.e1, this.e2, this.e3, h);
					i = this.a * (this.g - e)
				}
				var n = this.ns * t.adjust_lon(a - this.long0),
					r = this.x0 + i * Math.sin(n),
					o = this.y0 + this.rh - i * Math.cos(n);
				return s.x = r, s.y = o, s
			},
			inverse: function(s) {
				s.x -= this.x0, s.y = this.rh - s.y + this.y0;
				var i, a, h, e;
				this.ns >= 0 ? (a = Math.sqrt(s.x * s.x + s.y * s.y), i = 1) : (a = -Math.sqrt(s.x * s.x + s.y * s.y), i = -1);
				var n = 0;
				if(0 !== a && (n = Math.atan2(i * s.x, i * s.y)), this.sphere) return e = t.adjust_lon(this.long0 + n / this.ns), h = t.adjust_lat(this.g - a / this.a), s.x = e, s.y = h, s;
				var r = this.g - a / this.a;
				return h = t.imlfn(r, this.e0, this.e1, this.e2, this.e3), e = t.adjust_lon(this.long0 + n / this.ns), s.x = e, s.y = h, s
			}
		}
	}), i("proj4/projCode/vandg", ["../common"], function(t) {
		return {
			init: function() {
				this.R = this.a
			},
			forward: function(s) {
				var i, a, h = s.x,
					e = s.y,
					n = t.adjust_lon(h - this.long0);
				Math.abs(e) <= t.EPSLN && (i = this.x0 + this.R * n, a = this.y0);
				var r = t.asinz(2 * Math.abs(e / t.PI));
				(Math.abs(n) <= t.EPSLN || Math.abs(Math.abs(e) - t.HALF_PI) <= t.EPSLN) && (i = this.x0, a = e >= 0 ? this.y0 + t.PI * this.R * Math.tan(.5 * r) : this.y0 + t.PI * this.R * -Math.tan(.5 * r));
				var o = .5 * Math.abs(t.PI / n - n / t.PI),
					l = o * o,
					u = Math.sin(r),
					c = Math.cos(r),
					M = c / (u + c - 1),
					f = M * M,
					m = M * (2 / u - 1),
					p = m * m,
					_ = t.PI * this.R * (o * (M - p) + Math.sqrt(l * (M - p) * (M - p) - (p + l) * (f - p))) / (p + l);
				0 > n && (_ = -_), i = this.x0 + _;
				var d = l + M;
				return _ = t.PI * this.R * (m * d - o * Math.sqrt((p + l) * (l + 1) - d * d)) / (p + l), a = e >= 0 ? this.y0 + _ : this.y0 - _, s.x = i, s.y = a, s
			},
			inverse: function(s) {
				var i, a, h, e, n, r, o, l, u, c, M, f, m;
				return s.x -= this.x0, s.y -= this.y0, M = t.PI * this.R, h = s.x / M, e = s.y / M, n = h * h + e * e, r = -Math.abs(e) * (1 + n), o = r - 2 * e * e + h * h, l = -2 * r + 1 + 2 * e * e + n * n, m = e * e / l + (2 * o * o * o / l / l / l - 9 * r * o / l / l) / 27, u = (r - o * o / 3 / l) / l, c = 2 * Math.sqrt(-u / 3), M = 3 * m / u / c, Math.abs(M) > 1 && (M = M >= 0 ? 1 : -1), f = Math.acos(M) / 3, a = s.y >= 0 ? (-c * Math.cos(f + t.PI / 3) - o / 3 / l) * t.PI : -(-c * Math.cos(f + t.PI / 3) - o / 3 / l) * t.PI, i = Math.abs(h) < t.EPSLN ? this.long0 : t.adjust_lon(this.long0 + t.PI * (n - 1 + Math.sqrt(1 + 2 * (h * h - e * e) + n * n)) / 2 / h), s.x = i, s.y = a, s
			}
		}
	}), i("proj4/projCode/aeqd", ["../common"], function(t) {
		return {
			init: function() {
				this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0)
			},
			forward: function(s) {
				var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g, x, v, P, b, C, S = s.x,
					j = s.y,
					N = Math.sin(s.y),
					A = Math.cos(s.y),
					I = t.adjust_lon(S - this.long0);
				return this.sphere ? Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (s.x = this.x0 + this.a * (t.HALF_PI - j) * Math.sin(I), s.y = this.y0 - this.a * (t.HALF_PI - j) * Math.cos(I), s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (s.x = this.x0 + this.a * (t.HALF_PI + j) * Math.sin(I), s.y = this.y0 + this.a * (t.HALF_PI + j) * Math.cos(I), s) : (g = this.sin_p12 * N + this.cos_p12 * A * Math.cos(I), d = Math.acos(g), y = d / Math.sin(d), s.x = this.x0 + this.a * y * A * Math.sin(I), s.y = this.y0 + this.a * y * (this.cos_p12 * N - this.sin_p12 * A * Math.cos(I)), s) : (i = t.e0fn(this.es), a = t.e1fn(this.es), h = t.e2fn(this.es), e = t.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (n = this.a * t.mlfn(i, a, h, e, t.HALF_PI), r = this.a * t.mlfn(i, a, h, e, j), s.x = this.x0 + (n - r) * Math.sin(I), s.y = this.y0 - (n - r) * Math.cos(I), s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (n = this.a * t.mlfn(i, a, h, e, t.HALF_PI), r = this.a * t.mlfn(i, a, h, e, j), s.x = this.x0 + (n + r) * Math.sin(I), s.y = this.y0 + (n + r) * Math.cos(I), s) : (o = N / A, l = t.gN(this.a, this.e, this.sin_p12), u = t.gN(this.a, this.e, N), c = Math.atan((1 - this.es) * o + this.es * l * this.sin_p12 / (u * A)), M = Math.atan2(Math.sin(I), this.cos_p12 * Math.tan(c) - this.sin_p12 * Math.cos(I)), x = 0 === M ? Math.asin(this.cos_p12 * Math.sin(c) - this.sin_p12 * Math.cos(c)) : Math.abs(Math.abs(M) - t.PI) <= t.EPSLN ? -Math.asin(this.cos_p12 * Math.sin(c) - this.sin_p12 * Math.cos(c)) : Math.asin(Math.sin(I) * Math.cos(c) / Math.sin(M)), f = this.e * this.sin_p12 / Math.sqrt(1 - this.es), m = this.e * this.cos_p12 * Math.cos(M) / Math.sqrt(1 - this.es), p = f * m, _ = m * m, v = x * x, P = v * x, b = P * x, C = b * x, d = l * x * (1 - v * _ * (1 - _) / 6 + P / 8 * p * (1 - 2 * _) + b / 120 * (_ * (4 - 7 * _) - 3 * f * f * (1 - 7 * _)) - C / 48 * p), s.x = this.x0 + d * Math.sin(M), s.y = this.y0 + d * Math.cos(M), s))
			},
			inverse: function(s) {
				s.x -= this.x0, s.y -= this.y0;
				var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g, x, v, P, b, C;
				if(this.sphere) {
					if(i = Math.sqrt(s.x * s.x + s.y * s.y), i > 2 * t.HALF_PI * this.a) return;
					return a = i / this.a, h = Math.sin(a), e = Math.cos(a), n = this.long0, Math.abs(i) <= t.EPSLN ? r = this.lat0 : (r = t.asinz(e * this.sin_p12 + s.y * h * this.cos_p12 / i), o = Math.abs(this.lat0) - t.HALF_PI, n = Math.abs(o) <= t.EPSLN ? this.lat0 >= 0 ? t.adjust_lon(this.long0 + Math.atan2(s.x, -s.y)) : t.adjust_lon(this.long0 - Math.atan2(-s.x, s.y)) : t.adjust_lon(this.long0 + Math.atan2(s.x * h, i * this.cos_p12 * e - s.y * this.sin_p12 * h))), s.x = n, s.y = r, s
				}
				return l = t.e0fn(this.es), u = t.e1fn(this.es), c = t.e2fn(this.es), M = t.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (f = this.a * t.mlfn(l, u, c, M, t.HALF_PI), i = Math.sqrt(s.x * s.x + s.y * s.y), m = f - i, r = t.imlfn(m / this.a, l, u, c, M), n = t.adjust_lon(this.long0 + Math.atan2(s.x, -1 * s.y)), s.x = n, s.y = r, s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (f = this.a * t.mlfn(l, u, c, M, t.HALF_PI), i = Math.sqrt(s.x * s.x + s.y * s.y), m = i - f, r = t.imlfn(m / this.a, l, u, c, M), n = t.adjust_lon(this.long0 + Math.atan2(s.x, s.y)), s.x = n, s.y = r, s) : (i = Math.sqrt(s.x * s.x + s.y * s.y), d = Math.atan2(s.x, s.y), p = t.gN(this.a, this.e, this.sin_p12), y = Math.cos(d), g = this.e * this.cos_p12 * y, x = -g * g / (1 - this.es), v = 3 * this.es * (1 - x) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), P = i / p, b = P - x * (1 + x) * Math.pow(P, 3) / 6 - v * (1 + 3 * x) * Math.pow(P, 4) / 24, C = 1 - x * b * b / 2 - P * b * b * b / 6, _ = Math.asin(this.sin_p12 * Math.cos(b) + this.cos_p12 * Math.sin(b) * y), n = t.adjust_lon(this.long0 + Math.asin(Math.sin(d) * Math.sin(b) / Math.cos(_))), r = Math.atan((1 - this.es * C * this.sin_p12 / Math.sin(_)) * Math.tan(_) / (1 - this.es)), s.x = n, s.y = r, s)
			}
		}
	}), i("proj4/projections", ["require", "exports", "module", "./projCode/longlat", "./projCode/tmerc", "./projCode/utm", "./projCode/sterea", "./projCode/somerc", "./projCode/omerc", "./projCode/lcc", "./projCode/krovak", "./projCode/cass", "./projCode/laea", "./projCode/merc", "./projCode/aea", "./projCode/gnom", "./projCode/cea", "./projCode/eqc", "./projCode/poly", "./projCode/nzmg", "./projCode/mill", "./projCode/sinu", "./projCode/moll", "./projCode/eqdc", "./projCode/vandg", "./projCode/aeqd", "./projCode/longlat"], function(t, s) {
		s.longlat = t("./projCode/longlat"), s.identity = s.longlat, s.tmerc = t("./projCode/tmerc"), s.utm = t("./projCode/utm"), s.sterea = t("./projCode/sterea"), s.somerc = t("./projCode/somerc"), s.omerc = t("./projCode/omerc"), s.lcc = t("./projCode/lcc"), s.krovak = t("./projCode/krovak"), s.cass = t("./projCode/cass"), s.laea = t("./projCode/laea"), s.merc = t("./projCode/merc"), s.aea = t("./projCode/aea"), s.gnom = t("./projCode/gnom"), s.cea = t("./projCode/cea"), s.eqc = t("./projCode/eqc"), s.poly = t("./projCode/poly"), s.nzmg = t("./projCode/nzmg"), s.mill = t("./projCode/mill"), s.sinu = t("./projCode/sinu"), s.moll = t("./projCode/moll"), s.eqdc = t("./projCode/eqdc"), s.vandg = t("./projCode/vandg"), s.aeqd = t("./projCode/aeqd"), s.longlat = t("./projCode/longlat"), s.identity = s.longlat
	}), i("proj4/Proj", ["./extend", "./common", "./defs", "./constants", "./datum", "./projections", "./wkt", "./projString"], function(t, s, i, a, h, e, n, r) {
		var o = function l(s) {
			if(!(this instanceof l)) return new l(s);
			this.srsCodeInput = s;
			var a;
			"string" == typeof s ? s in i ? (this.deriveConstants(i[s]), t(this, i[s])) : s.indexOf("GEOGCS") >= 0 || s.indexOf("GEOCCS") >= 0 || s.indexOf("PROJCS") >= 0 || s.indexOf("LOCAL_CS") >= 0 ? (a = n(s), this.deriveConstants(a), t(this, a)) : "+" === s[0] && (a = r(s), this.deriveConstants(a), t(this, a)) : (this.deriveConstants(s), t(this, s)), this.initTransforms(this.projName)
		};
		return o.prototype = {
			initTransforms: function(s) {
				if(!(s in o.projections)) throw "unknown projection " + s;
				t(this, o.projections[s]), this.init()
			},
			deriveConstants: function(i) {
				if(i.nadgrids && 0 === i.nadgrids.length && (i.nadgrids = null), i.nadgrids) {
					i.grids = i.nadgrids.split(",");
					var e = null,
						n = i.grids.length;
					if(n > 0)
						for(var r = 0; n > r; r++) {
							e = i.grids[r];
							var o = e.split("@");
							"" !== o[o.length - 1] && (i.grids[r] = {
								mandatory: 1 === o.length,
								name: o[o.length - 1],
								grid: a.grids[o[o.length - 1]]
							}, i.grids[r].mandatory && !i.grids[r].grid)
						}
				}
				if(i.datumCode && "none" !== i.datumCode) {
					var l = a.Datum[i.datumCode];
					l && (i.datum_params = l.towgs84 ? l.towgs84.split(",") : null, i.ellps = l.ellipse, i.datumName = l.datumName ? l.datumName : i.datumCode)
				}
				if(!i.a) {
					var u = a.Ellipsoid[i.ellps] ? a.Ellipsoid[i.ellps] : a.Ellipsoid.WGS84;
					t(i, u)
				}
				i.rf && !i.b && (i.b = (1 - 1 / i.rf) * i.a), (0 === i.rf || Math.abs(i.a - i.b) < s.EPSLN) && (i.sphere = !0, i.b = i.a), i.a2 = i.a * i.a, i.b2 = i.b * i.b, i.es = (i.a2 - i.b2) / i.a2, i.e = Math.sqrt(i.es), i.R_A && (i.a *= 1 - i.es * (s.SIXTH + i.es * (s.RA4 + i.es * s.RA6)), i.a2 = i.a * i.a, i.b2 = i.b * i.b, i.es = 0), i.ep2 = (i.a2 - i.b2) / i.b2, i.k0 || (i.k0 = 1), i.axis || (i.axis = "enu"), i.datum = h(i)
			}
		}, o.projections = e, o
	}), i("proj4/datum_transform", ["./common"], function(t) {
		return function(s, i, a) {
			function h(s) {
				return s === t.PJD_3PARAM || s === t.PJD_7PARAM
			}
			var e, n, r;
			if(s.compare_datums(i)) return a;
			if(s.datum_type === t.PJD_NODATUM || i.datum_type === t.PJD_NODATUM) return a;
			var o = s.a,
				l = s.es,
				u = i.a,
				c = i.es,
				M = s.datum_type;
			if(M === t.PJD_GRIDSHIFT)
				if(0 === this.apply_gridshift(s, 0, a)) s.a = t.SRS_WGS84_SEMIMAJOR, s.es = t.SRS_WGS84_ESQUARED;
				else {
					if(!s.datum_params) return s.a = o, s.es = s.es, a;
					for(e = 1, n = 0, r = s.datum_params.length; r > n; n++) e *= s.datum_params[n];
					if(0 === e) return s.a = o, s.es = s.es, a;
					M = s.datum_params.length > 3 ? t.PJD_7PARAM : t.PJD_3PARAM
				}
			return i.datum_type === t.PJD_GRIDSHIFT && (i.a = t.SRS_WGS84_SEMIMAJOR, i.es = t.SRS_WGS84_ESQUARED), (s.es !== i.es || s.a !== i.a || h(M) || h(i.datum_type)) && (s.geodetic_to_geocentric(a), h(s.datum_type) && s.geocentric_to_wgs84(a), h(i.datum_type) && i.geocentric_from_wgs84(a), i.geocentric_to_geodetic(a)), i.datum_type === t.PJD_GRIDSHIFT && this.apply_gridshift(i, 1, a), s.a = o, s.es = l, i.a = u, i.es = c, a
		}
	}), i("proj4/adjust_axis", [], function() {
		return function(t, s, i) {
			var a, h, e, n = i.x,
				r = i.y,
				o = i.z || 0;
			for(e = 0; 3 > e; e++)
				if(!s || 2 !== e || void 0 !== i.z) switch(0 === e ? (a = n, h = "x") : 1 === e ? (a = r, h = "y") : (a = o, h = "z"), t.axis[e]) {
					case "e":
						i[h] = a;
						break;
					case "w":
						i[h] = -a;
						break;
					case "n":
						i[h] = a;
						break;
					case "s":
						i[h] = -a;
						break;
					case "u":
						void 0 !== i[h] && (i.z = a);
						break;
					case "d":
						void 0 !== i[h] && (i.z = -a);
						break;
					default:
						return null
				}
				return i
		}
	}), i("proj4/transform", ["./common", "./datum_transform", "./adjust_axis", "./Proj"], function(t, s, i, a) {
		return function(h, e, n) {
			function r(s, i) {
				return(s.datum.datum_type === t.PJD_3PARAM || s.datum.datum_type === t.PJD_7PARAM) && "WGS84" !== i.datumCode
			}
			var o;
			return h.datum && e.datum && (r(h, e) || r(e, h)) && (o = new a("WGS84"), this.transform(h, o, n), h = o), "enu" !== h.axis && i(h, !1, n), "longlat" === h.projName ? (n.x *= t.D2R, n.y *= t.D2R) : (h.to_meter && (n.x *= h.to_meter, n.y *= h.to_meter), h.inverse(n)), h.from_greenwich && (n.x += h.from_greenwich), n = s(h.datum, e.datum, n), e.from_greenwich && (n.x -= e.from_greenwich), "longlat" === e.projName ? (n.x *= t.R2D, n.y *= t.R2D) : (e.forward(n), e.to_meter && (n.x /= e.to_meter, n.y /= e.to_meter)), "enu" !== e.axis && i(e, !0, n), n
		}
	}), i("proj4/core", ["./Point", "./Proj", "./transform"], function(t, s, i) {
		var a = s("WGS84");
		return function(h, e, n) {
			var r = function(s, a, n) {
				var r;
				return Array.isArray(n) ? (r = i(s, a, t(n)), 3 === n.length ? [r.x, r.y, r.z] : [r.x, r.y]) : i(h, e, n)
			};
			return h = h instanceof s ? h : s(h), "undefined" == typeof e ? (e = h, h = a) : "string" == typeof e ? e = s(e) : "x" in e || Array.isArray(e) ? (n = e, e = h, h = a) : e = e instanceof s ? e : s(e), n ? r(h, e, n) : {
				forward: function(t) {
					return r(h, e, t)
				},
				inverse: function(t) {
					return r(e, h, t)
				}
			}
		}
	}), i("proj4", ["proj4/core", "proj4/Proj", "proj4/Point", "proj4/defs", "proj4/transform", "proj4/mgrs"], function(t, s, i, a, h, e) {
		return t.defaultDatum = "WGS84", t.Proj = s, t.WGS84 = new t.Proj("WGS84"), t.Point = i, t.defs = a, t.transform = h, t.mgrs = e, t
	}), s("proj4")
});