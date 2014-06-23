(function (e, undefined) {
	var t,
	n,
	r = typeof undefined,
	i = e.location,
	o = e.document,
	s = o.documentElement,
	a = e.jQuery,
	u = e.$,
	l = {},
	c = [],
	p = "2.0.3",
	f = c.concat,
	h = c.push,
	d = c.slice,
	g = c.indexOf,
	m = l.toString,
	y = l.hasOwnProperty,
	v = p.trim,
	x = function (e, n) {
		return new x.fn.init(e, n, t)
	},
	b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	w = /\S+/g,
	T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	k = /^-ms-/,
	N = /-([\da-z])/gi,
	E = function (e, t) {
		return t.toUpperCase()
	},
	S = function () {
		o.removeEventListener("DOMContentLoaded", S, !1),
		e.removeEventListener("load", S, !1),
		x.ready()
	};
	x.fn = x.prototype = {
		jquery : p,
		constructor : x,
		init : function (e, t, n) {
			var r,
			i;
			if (!e)
				return this;
			if ("string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t)
					return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
						for (r in t)
							x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = o.getElementById(r[2]),
				i && i.parentNode && (this.length = 1, this[0] = i),
				this.context = o,
				this.selector = e,
				this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector : "",
		length : 0,
		toArray : function () {
			return d.call(this)
		},
		get : function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack : function (e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this,
			t.context = this.context,
			t
		},
		each : function (e, t) {
			return x.each(this, e, t)
		},
		ready : function (e) {
			return x.ready.promise().done(e),
			this
		},
		slice : function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first : function () {
			return this.eq(0)
		},
		last : function () {
			return this.eq(-1)
		},
		eq : function (e) {
			var t = this.length,
			n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map : function (e) {
			return this.pushStack(x.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
		},
		end : function () {
			return this.prevObject || this.constructor(null)
		},
		push : h,
		sort : [].sort,
		splice : [].splice
	},
	x.fn.init.prototype = x.fn,
	x.extend = x.fn.extend = function () {
		var e,
		t,
		n,
		r,
		i,
		o,
		s = arguments[0] || {},
		a = 1,
		u = arguments.length,
		l = !1;
		for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
			if (null != (e = arguments[a]))
				for (t in e)
					n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
		return s
	},
	x.extend({
		expando : "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noConflict : function (t) {
			return e.$ === x && (e.$ = u),
			t && e.jQuery === x && (e.jQuery = a),
			x
		},
		isReady : !1,
		readyWait : 1,
		holdReady : function (e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready : function (e) {
			(e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")))
		},
		isFunction : function (e) {
			return "function" === x.type(e)
		},
		isArray : Array.isArray,
		isWindow : function (e) {
			return null != e && e === e.window
		},
		isNumeric : function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type : function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject : function (e) {
			if ("object" !== x.type(e) || e.nodeType || x.isWindow(e))
				return !1;
			try {
				if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf"))
					return !1
			} catch (t) {
				return !1
			}
			return !0
		},
		isEmptyObject : function (e) {
			var t;
			for (t in e)
				return !1;
			return !0
		},
		error : function (e) {
			throw Error(e)
		},
		parseHTML : function (e, t, n) {
			if (!e || "string" != typeof e)
				return null;
			"boolean" == typeof t && (n = t, t = !1),
			t = t || o;
			var r = C.exec(e),
			i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON : JSON.parse,
		parseXML : function (e) {
			var t,
			n;
			if (!e || "string" != typeof e)
				return null;
			try {
				n = new DOMParser,
				t = n.parseFromString(e, "text/xml")
			} catch (r) {
				t = undefined
			}
			return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e),
			t
		},
		noop : function () {},
		globalEval : function (e) {
			var t,
			n = eval;
			e = x.trim(e),
			e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase : function (e) {
			return e.replace(k, "ms-").replace(N, E)
		},
		nodeName : function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each : function (e, t, n) {
			var r,
			i = 0,
			o = e.length,
			s = j(e);
			if (n) {
				if (s) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1)
							break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1)
							break
			} else if (s) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1)
						break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1)
						break;
			return e
		},
		trim : function (e) {
			return null == e ? "" : v.call(e)
		},
		makeArray : function (e, t) {
			var n = t || [];
			return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
			n
		},
		inArray : function (e, t, n) {
			return null == t ? -1 : g.call(t, e, n)
		},
		merge : function (e, t) {
			var n = t.length,
			r = e.length,
			i = 0;
			if ("number" == typeof n)
				for (; n > i; i++)
					e[r++] = t[i];
			else
				while (t[i] !== undefined)
					e[r++] = t[i++];
			return e.length = r,
			e
		},
		grep : function (e, t, n) {
			var r,
			i = [],
			o = 0,
			s = e.length;
			for (n = !!n; s > o; o++)
				r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map : function (e, t, n) {
			var r,
			i = 0,
			o = e.length,
			s = j(e),
			a = [];
			if (s)
				for (; o > i; i++)
					r = t(e[i], i, n), null != r && (a[a.length] = r);
			else
				for (i in e)
					r = t(e[i], i, n), null != r && (a[a.length] = r);
			return f.apply([], a)
		},
		guid : 1,
		proxy : function (e, t) {
			var n,
			r,
			i;
			return "string" == typeof t && (n = e[t], t = e, e = n),
			x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
				return e.apply(t || this, r.concat(d.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : undefined
		},
		access : function (e, t, n, r, i, o, s) {
			var a = 0,
			u = e.length,
			l = null == n;
			if ("object" === x.type(n)) {
				i = !0;
				for (a in n)
					x.access(e, t, a, n[a], !0, o, s)
			} else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
							return l.call(x(e), n)
						})), t))
				for (; u > a; a++)
					t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		now : Date.now,
		swap : function (e, t, n, r) {
			var i,
			o,
			s = {};
			for (o in t)
				s[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t)
				e.style[o] = s[o];
			return i
		}
	}),
	x.ready.promise = function (t) {
		return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))),
		n.promise(t)
	},
	x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});
	function j(e) {
		var t = e.length,
		n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	t = x(o),
	function (e, undefined) {
		var t,
		n,
		r,
		i,
		o,
		s,
		a,
		u,
		l,
		c,
		p,
		f,
		h,
		d,
		g,
		m,
		y,
		v = "sizzle" + -new Date,
		b = e.document,
		w = 0,
		T = 0,
		C = st(),
		k = st(),
		N = st(),
		E = !1,
		S = function (e, t) {
			return e === t ? (E = !0, 0) : 0
		},
		j = typeof undefined,
		D = 1 << 31,
		A = {}

		.hasOwnProperty,
		L = [],
		q = L.pop,
		H = L.push,
		O = L.push,
		F = L.slice,
		P = L.indexOf || function (e) {
			var t = 0,
			n = this.length;
			for (; n > t; t++)
				if (this[t] === e)
					return t;
			return -1
		},
		R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		M = "[\\x20\\t\\r\\n\\f]",
		W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		$ = W.replace("w", "w#"),
		B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
		I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
		z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
		_ = RegExp("^" + M + "*," + M + "*"),
		X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
		U = RegExp(M + "*[+~]"),
		Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"),
		V = RegExp(I),
		G = RegExp("^" + $ + "$"),
		J = {
			ID : RegExp("^#(" + W + ")"),
			CLASS : RegExp("^\\.(" + W + ")"),
			TAG : RegExp("^(" + W.replace("w", "w*") + ")"),
			ATTR : RegExp("^" + B),
			PSEUDO : RegExp("^" + I),
			CHILD : RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
			bool : RegExp("^(?:" + R + ")$", "i"),
			needsContext : RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
		},
		Q = /^[^{]+\{\s*\[native \w/,
		K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Z = /^(?:input|select|textarea|button)$/i,
		et = /^h\d$/i,
		tt = /'|\\/g,
		nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
		rt = function (e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
		};
		try {
			O.apply(L = F.call(b.childNodes), b.childNodes),
			L[b.childNodes.length].nodeType
		} catch (it) {
			O = {
				apply : L.length ? function (e, t) {
					H.apply(e, F.call(t))
				}
				 : function (e, t) {
					var n = e.length,
					r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		function ot(e, t, r, i) {
			var o,
			s,
			a,
			u,
			l,
			f,
			g,
			m,
			x,
			w;
			if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e)
				return r;
			if (1 !== (u = t.nodeType) && 9 !== u)
				return [];
			if (h && !i) {
				if (o = K.exec(e))
					if (a = o[1]) {
						if (9 === u) {
							if (s = t.getElementById(a), !s || !s.parentNode)
								return r;
							if (s.id === a)
								return r.push(s), r
						} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
							return r.push(s), r
					} else {
						if (o[2])
							return O.apply(r, t.getElementsByTagName(e)), r;
						if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
							return O.apply(r, t.getElementsByClassName(a)), r
					}
				if (n.qsa && (!d || !d.test(e))) {
					if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
						f = gt(e),
						(g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m),
						m = "[id='" + m + "'] ",
						l = f.length;
						while (l--)
							f[l] = m + mt(f[l]);
						x = U.test(e) && t.parentNode || t,
						w = f.join(",")
					}
					if (w)
						try {
							return O.apply(r, x.querySelectorAll(w)),
							r
						} catch (T) {}

					finally {
						g || t.removeAttribute("id")
					}
				}
			}
			return kt(e.replace(z, "$1"), t, r, i)
		}
		function st() {
			var e = [];
			function t(n, r) {
				return e.push(n += " ") > i.cacheLength && delete t[e.shift()],
				t[n] = r
			}
			return t
		}
		function at(e) {
			return e[v] = !0,
			e
		}
		function ut(e) {
			var t = p.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			}
			finally {
				t.parentNode && t.parentNode.removeChild(t),
				t = null
			}
		}
		function lt(e, t) {
			var n = e.split("|"),
			r = e.length;
			while (r--)
				i.attrHandle[n[r]] = t
		}
		function ct(e, t) {
			var n = t && e,
			r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
			if (r)
				return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t)
						return -1;
			return e ? 1 : -1
		}
		function pt(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function ft(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function ht(e) {
			return at(function (t) {
				return t = +t,
				at(function (n, r) {
					var i,
					o = e([], n.length, t),
					s = o.length;
					while (s--)
						n[i = o[s]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		s = ot.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		},
		n = ot.support = {},
		c = ot.setDocument = function (e) {
			var t = e ? e.ownerDocument || e : b,
			r = t.defaultView;
			return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
					c()
				}), n.attributes = ut(function (e) {
						return e.className = "i",
						!e.getAttribute("className")
					}), n.getElementsByTagName = ut(function (e) {
						return e.appendChild(t.createComment("")),
						!e.getElementsByTagName("*").length
					}), n.getElementsByClassName = ut(function (e) {
						return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
						e.firstChild.className = "i",
						2 === e.getElementsByClassName("i").length
					}), n.getById = ut(function (e) {
						return f.appendChild(e).id = v,
						!t.getElementsByName || !t.getElementsByName(v).length
					}), n.getById ? (i.find.ID = function (e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, i.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete i.find.ID, i.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), i.find.TAG = n.getElementsByTagName ? function (e, t) {
				return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
			}
				 : function (e, t) {
				var n,
				r = [],
				i = 0,
				o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++])
						1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, i.find.CLASS = n.getElementsByClassName && function (e, t) {
				return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
			}, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
						e.innerHTML = "<select><option selected=''></option></select>",
						e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"),
						e.querySelectorAll(":checked").length || d.push(":checked")
					}), ut(function (e) {
						var n = t.createElement("input");
						n.setAttribute("type", "hidden"),
						e.appendChild(n).setAttribute("t", ""),
						e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"),
						e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
						e.querySelectorAll("*,:x"),
						d.push(",.*:")
					})), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
					n.disconnectedMatch = m.call(e, "div"),
					m.call(e, "[s!='']:x"),
					g.push("!=", I)
				}), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
				r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			}
				 : function (e, t) {
				if (t)
					while (t = t.parentNode)
						if (t === e)
							return !0;
				return !1
			}, S = f.compareDocumentPosition ? function (e, r) {
				if (e === r)
					return E = !0, 0;
				var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
				return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			}
				 : function (e, n) {
				var r,
				i = 0,
				o = e.parentNode,
				s = n.parentNode,
				a = [e],
				u = [n];
				if (e === n)
					return E = !0, 0;
				if (!o || !s)
					return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
				if (o === s)
					return ct(e, n);
				r = e;
				while (r = r.parentNode)
					a.unshift(r);
				r = n;
				while (r = r.parentNode)
					u.unshift(r);
				while (a[i] === u[i])
					i++;
				return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
			}, t) : p
		},
		ot.matches = function (e, t) {
			return ot(e, null, null, t)
		},
		ot.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
				try {
					var r = m.call(e, t);
					if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
						return r
				} catch (i) {}

			return ot(t, p, null, [e]).length > 0
		},
		ot.contains = function (e, t) {
			return (e.ownerDocument || e) !== p && c(e),
			y(e, t)
		},
		ot.attr = function (e, t) {
			(e.ownerDocument || e) !== p && c(e);
			var r = i.attrHandle[t.toLowerCase()],
			o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
			return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
		},
		ot.error = function (e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		},
		ot.uniqueSort = function (e) {
			var t,
			r = [],
			i = 0,
			o = 0;
			if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
				while (t = e[o++])
					t === e[o] && (i = r.push(o));
				while (i--)
					e.splice(r[i], 1)
			}
			return e
		},
		o = ot.getText = function (e) {
			var t,
			n = "",
			r = 0,
			i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent)
						return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling)
						n += o(e)
				} else if (3 === i || 4 === i)
					return e.nodeValue
			} else
				for (; t = e[r]; r++)
					n += o(t);
			return n
		},
		i = ot.selectors = {
			cacheLength : 50,
			createPseudo : at,
			match : J,
			attrHandle : {},
			find : {},
			relative : {
				">" : {
					dir : "parentNode",
					first : !0
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : !0
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				ATTR : function (e) {
					return e[1] = e[1].replace(nt, rt),
					e[3] = (e[4] || e[5] || "").replace(nt, rt),
					"~=" === e[2] && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD : function (e) {
					return e[1] = e[1].toLowerCase(),
					"nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] =  + (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =  + (e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]),
					e
				},
				PSEUDO : function (e) {
					var t,
					n = !e[5] && e[2];
					return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter : {
				TAG : function (e) {
					var t = e.replace(nt, rt).toLowerCase();
					return "*" === e ? function () {
						return !0
					}
					 : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS : function (e) {
					var t = C[e + " "];
					return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
					})
				},
				ATTR : function (e, t, n) {
					return function (r) {
						var i = ot.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD : function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
					s = "last" !== e.slice(-4),
					a = "of-type" === t;
					return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode
					}
					 : function (t, n, u) {
						var l,
						c,
						p,
						f,
						h,
						d,
						g = o !== s ? "nextSibling" : "previousSibling",
						m = t.parentNode,
						y = a && t.nodeName.toLowerCase(),
						x = !u && !a;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g])
										if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
											return !1;
									d = g = "only" === e && !d && "nextSibling"
								}
								return !0
							}
							if (d = [s ? m.firstChild : m.lastChild], s && x) {
								c = m[v] || (m[v] = {}),
								l = c[e] || [],
								h = l[0] === w && l[1],
								f = l[0] === w && l[2],
								p = h && m.childNodes[h];
								while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
									if (1 === p.nodeType && ++f && p === t) {
										c[e] = [w, h, f];
										break
									}
							} else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w)
								f = l[1];
							else
								while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
									if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t))
										break;
							return f -= i,
							f === r || 0 === f % r && f / r >= 0
						}
					}
				},
				PSEUDO : function (e, t) {
					var n,
					r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
					return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
							var i,
							o = r(e, t),
							s = o.length;
							while (s--)
								i = P.call(e, o[s]), e[i] = !(n[i] = o[s])
						}) : function (e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos : {
				not : at(function (e) {
					var t = [],
					n = [],
					r = a(e.replace(z, "$1"));
					return r[v] ? at(function (e, t, n, i) {
						var o,
						s = r(e, null, i, []),
						a = e.length;
						while (a--)
							(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function (e, i, o) {
						return t[0] = e,
						r(t, null, o, n),
						!n.pop()
					}
				}),
				has : at(function (e) {
					return function (t) {
						return ot(e, t).length > 0
					}
				}),
				contains : at(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
					}
				}),
				lang : at(function (e) {
					return G.test(e || "") || ot.error("unsupported lang: " + e),
					e = e.replace(nt, rt).toLowerCase(),
					function (t) {
						var n;
						do
							if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
								return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target : function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root : function (e) {
					return e === f
				},
				focus : function (e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled : function (e) {
					return e.disabled === !1
				},
				disabled : function (e) {
					return e.disabled === !0
				},
				checked : function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected : function (e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				empty : function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
							return !1;
					return !0
				},
				parent : function (e) {
					return !i.pseudos.empty(e)
				},
				header : function (e) {
					return et.test(e.nodeName)
				},
				input : function (e) {
					return Z.test(e.nodeName)
				},
				button : function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text : function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first : ht(function () {
					return [0]
				}),
				last : ht(function (e, t) {
					return [t - 1]
				}),
				eq : ht(function (e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even : ht(function (e, t) {
					var n = 0;
					for (; t > n; n += 2)
						e.push(n);
					return e
				}),
				odd : ht(function (e, t) {
					var n = 1;
					for (; t > n; n += 2)
						e.push(n);
					return e
				}),
				lt : ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0; )
						e.push(r);
					return e
				}),
				gt : ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r; )
						e.push(r);
					return e
				})
			}
		},
		i.pseudos.nth = i.pseudos.eq;
		for (t in {
			radio : !0,
			checkbox : !0,
			file : !0,
			password : !0,
			image : !0
		})
			i.pseudos[t] = pt(t);
		for (t in {
			submit : !0,
			reset : !0
		})
			i.pseudos[t] = ft(t);
		function dt() {}

		dt.prototype = i.filters = i.pseudos,
		i.setFilters = new dt;
		function gt(e, t) {
			var n,
			r,
			o,
			s,
			a,
			u,
			l,
			c = k[e + " "];
			if (c)
				return t ? 0 : c.slice(0);
			a = e,
			u = [],
			l = i.preFilter;
			while (a) {
				(!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])),
				n = !1,
				(r = X.exec(a)) && (n = r.shift(), o.push({
						value : n,
						type : r[0].replace(z, " ")
					}), a = a.slice(n.length));
				for (s in i.filter)
					!(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
							value : n,
							type : s,
							matches : r
						}), a = a.slice(n.length));
				if (!n)
					break
			}
			return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
		}
		function mt(e) {
			var t = 0,
			n = e.length,
			r = "";
			for (; n > t; t++)
				r += e[t].value;
			return r
		}
		function yt(e, t, n) {
			var i = t.dir,
			o = n && "parentNode" === i,
			s = T++;
			return t.first ? function (t, n, r) {
				while (t = t[i])
					if (1 === t.nodeType || o)
						return e(t, n, r)
			}
			 : function (t, n, a) {
				var u,
				l,
				c,
				p = w + " " + s;
				if (a) {
					while (t = t[i])
						if ((1 === t.nodeType || o) && e(t, n, a))
							return !0
				} else
					while (t = t[i])
						if (1 === t.nodeType || o)
							if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
								if ((u = l[1]) === !0 || u === r)
									return u === !0
							} else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0)
								return !0
			}
		}
		function vt(e) {
			return e.length > 1 ? function (t, n, r) {
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r))
						return !1;
				return !0
			}
			 : e[0]
		}
		function xt(e, t, n, r, i) {
			var o,
			s = [],
			a = 0,
			u = e.length,
			l = null != t;
			for (; u > a; a++)
				(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
			return s
		}
		function bt(e, t, n, r, i, o) {
			return r && !r[v] && (r = bt(r)),
			i && !i[v] && (i = bt(i, o)),
			at(function (o, s, a, u) {
				var l,
				c,
				p,
				f = [],
				h = [],
				d = s.length,
				g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
				m = !e || !o && t ? g : xt(g, f, e, a, u),
				y = n ? i || (o ? e : d || r) ? [] : s : m;
				if (n && n(m, y, a, u), r) {
					l = xt(y, h),
					r(l, [], a, u),
					c = l.length;
					while (c--)
						(p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
				}
				if (o) {
					if (i || e) {
						if (i) {
							l = [],
							c = y.length;
							while (c--)
								(p = y[c]) && l.push(m[c] = p);
							i(null, y = [], l, u)
						}
						c = y.length;
						while (c--)
							(p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
					}
				} else
					y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y)
			})
		}
		function wt(e) {
			var t,
			n,
			r,
			o = e.length,
			s = i.relative[e[0].type],
			a = s || i.relative[" "],
			l = s ? 1 : 0,
			c = yt(function (e) {
					return e === t
				}, a, !0),
			p = yt(function (e) {
					return P.call(t, e) > -1
				}, a, !0),
			f = [function (e, n, r) {
					return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
				}
			];
			for (; o > l; l++)
				if (n = i.relative[e[l].type])
					f = [yt(vt(f), n)];
				else {
					if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
						for (r = ++l; o > r; r++)
							if (i.relative[e[r].type])
								break;
						return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({
									value : " " === e[l - 2].type ? "*" : ""
								})).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
					}
					f.push(n)
				}
			return vt(f)
		}
		function Tt(e, t) {
			var n = 0,
			o = t.length > 0,
			s = e.length > 0,
			a = function (a, l, c, f, h) {
				var d,
				g,
				m,
				y = [],
				v = 0,
				x = "0",
				b = a && [],
				T = null != h,
				C = u,
				k = a || s && i.find.TAG("*", h && l.parentNode || l),
				N = w += null == C ? 1 : Math.random() || .1;
				for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
					if (s && d) {
						g = 0;
						while (m = e[g++])
							if (m(d, l, c)) {
								f.push(d);
								break
							}
						T && (w = N, r = ++n)
					}
					o && ((d = !m && d) && v--, a && b.push(d))
				}
				if (v += x, o && x !== v) {
					g = 0;
					while (m = t[g++])
						m(b, y, l, c);
					if (a) {
						if (v > 0)
							while (x--)
								b[x] || y[x] || (y[x] = q.call(f));
						y = xt(y)
					}
					O.apply(f, y),
					T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
				}
				return T && (w = N, u = C),
				b
			};
			return o ? at(a) : a
		}
		a = ot.compile = function (e, t) {
			var n,
			r = [],
			i = [],
			o = N[e + " "];
			if (!o) {
				t || (t = gt(e)),
				n = t.length;
				while (n--)
					o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
				o = N(e, Tt(i, r))
			}
			return o
		};
		function Ct(e, t, n) {
			var r = 0,
			i = t.length;
			for (; i > r; r++)
				ot(e, t[r], n);
			return n
		}
		function kt(e, t, r, o) {
			var s,
			u,
			l,
			c,
			p,
			f = gt(e);
			if (!o && 1 === f.length) {
				if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
					if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t)
						return r;
					e = e.slice(u.shift().value.length)
				}
				s = J.needsContext.test(e) ? 0 : u.length;
				while (s--) {
					if (l = u[s], i.relative[c = l.type])
						break;
					if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
						if (u.splice(s, 1), e = o.length && mt(u), !e)
							return O.apply(r, o), r;
						break
					}
				}
			}
			return a(e, f)(o, t, !h, r, U.test(e)),
			r
		}
		n.sortStable = v.split("").sort(S).join("") === v,
		n.detectDuplicates = E,
		c(),
		n.sortDetached = ut(function (e) {
				return 1 & e.compareDocumentPosition(p.createElement("div"))
			}),
		ut(function (e) {
			return e.innerHTML = "<a href='#'></a>",
			"#" === e.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function (e, t, n) {
			return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}),
		n.attributes && ut(function (e) {
			return e.innerHTML = "<input/>",
			e.firstChild.setAttribute("value", ""),
			"" === e.firstChild.getAttribute("value")
		}) || lt("value", function (e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
		}),
		ut(function (e) {
			return null == e.getAttribute("disabled")
		}) || lt(R, function (e, t, n) {
			var r;
			return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
		}),
		x.find = ot,
		x.expr = ot.selectors,
		x.expr[":"] = x.expr.pseudos,
		x.unique = ot.uniqueSort,
		x.text = ot.getText,
		x.isXMLDoc = ot.isXML,
		x.contains = ot.contains
	}
	(e);
	var D = {};
	function A(e) {
		var t = D[e] = {};
		return x.each(e.match(w) || [], function (e, n) {
			t[n] = !0
		}),
		t
	}
	x.Callbacks = function (e) {
		e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
		var t,
		n,
		r,
		i,
		o,
		s,
		a = [],
		u = !e.once && [],
		l = function (p) {
			for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
				if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
					t = !1;
					break
				}
			r = !1,
			a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
		},
		c = {
			add : function () {
				if (a) {
					var n = a.length;
					(function s(t) {
						x.each(t, function (t, n) {
							var r = x.type(n);
							"function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
						})
					})(arguments),
					r ? o = a.length : t && (i = n, l(t))
				}
				return this
			},
			remove : function () {
				return a && x.each(arguments, function (e, t) {
					var n;
					while ((n = x.inArray(t, a, n)) > -1)
						a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
				}),
				this
			},
			has : function (e) {
				return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
			},
			empty : function () {
				return a = [],
				o = 0,
				this
			},
			disable : function () {
				return a = u = t = undefined,
				this
			},
			disabled : function () {
				return !a
			},
			lock : function () {
				return u = undefined,
				t || c.disable(),
				this
			},
			locked : function () {
				return !u
			},
			fireWith : function (e, t) {
				return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)),
				this
			},
			fire : function () {
				return c.fireWith(this, arguments),
				this
			},
			fired : function () {
				return !!n
			}
		};
		return c
	},
	x.extend({
		Deferred : function (e) {
			var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
			n = "pending",
			r = {
				state : function () {
					return n
				},
				always : function () {
					return i.done(arguments).fail(arguments),
					this
				},
				then : function () {
					var e = arguments;
					return x.Deferred(function (n) {
						x.each(t, function (t, o) {
							var s = o[0],
							a = x.isFunction(e[t]) && e[t];
							i[o[1]](function () {
								var e = a && a.apply(this, arguments);
								e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				promise : function (e) {
					return null != e ? x.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			x.each(t, function (e, o) {
				var s = o[2],
				a = o[3];
				r[o[1]] = s.add,
				a && s.add(function () {
					n = a
				}, t[1^e][2].disable, t[2][2].lock),
				i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments),
					this
				},
				i[o[0] + "With"] = s.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when : function (e) {
			var t = 0,
			n = d.call(arguments),
			r = n.length,
			i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
			o = 1 === i ? e : x.Deferred(),
			s = function (e, t, n) {
				return function (r) {
					t[e] = this,
					n[e] = arguments.length > 1 ? d.call(arguments) : r,
					n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
				}
			},
			a,
			u,
			l;
			if (r > 1)
				for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)
					n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
			return i || o.resolveWith(l, n),
			o.promise()
		}
	}),
	x.support = function (t) {
		var n = o.createElement("input"),
		r = o.createDocumentFragment(),
		i = o.createElement("div"),
		s = o.createElement("select"),
		a = s.appendChild(o.createElement("option"));
		return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
				var n,
				r,
				s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				a = o.getElementsByTagName("body")[0];
				a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {
						zoom : 1
					}
						 : {}, function () {
						t.boxSizing = 4 === i.offsetWidth
					}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
								width : "4px"
							}).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
			}), t) : t
	}
	({});
	var L,
	q,
	H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	O = /([A-Z])/g;
	function F() {
		Object.defineProperty(this.cache = {}, 0, {
			get : function () {
				return {}

			}
		}),
		this.expando = x.expando + Math.random()
	}
	F.uid = 1,
	F.accepts = function (e) {
		return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
	},
	F.prototype = {
		key : function (e) {
			if (!F.accepts(e))
				return 0;
			var t = {},
			n = e[this.expando];
			if (!n) {
				n = F.uid++;
				try {
					t[this.expando] = {
						value : n
					},
					Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n,
					x.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}),
			n
		},
		set : function (e, t, n) {
			var r,
			i = this.key(e),
			o = this.cache[i];
			if ("string" == typeof t)
				o[t] = n;
			else if (x.isEmptyObject(o))
				x.extend(this.cache[i], t);
			else
				for (r in t)
					o[r] = t[r];
			return o
		},
		get : function (e, t) {
			var n = this.cache[this.key(e)];
			return t === undefined ? n : n[t]
		},
		access : function (e, t, n) {
			var r;
			return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
		},
		remove : function (e, t) {
			var n,
			r,
			i,
			o = this.key(e),
			s = this.cache[o];
			if (t === undefined)
				this.cache[o] = {};
			else {
				x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])),
				n = r.length;
				while (n--)
					delete s[r[n]]
			}
		},
		hasData : function (e) {
			return !x.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard : function (e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	},
	L = new F,
	q = new F,
	x.extend({
		acceptData : F.accepts,
		hasData : function (e) {
			return L.hasData(e) || q.hasData(e)
		},
		data : function (e, t, n) {
			return L.access(e, t, n)
		},
		removeData : function (e, t) {
			L.remove(e, t)
		},
		_data : function (e, t, n) {
			return q.access(e, t, n)
		},
		_removeData : function (e, t) {
			q.remove(e, t)
		}
	}),
	x.fn.extend({
		data : function (e, t) {
			var n,
			r,
			i = this[0],
			o = 0,
			s = null;
			if (e === undefined) {
				if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
					for (n = i.attributes; n.length > o; o++)
						r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
					q.set(i, "hasDataAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function () {
				L.set(this, e)
			}) : x.access(this, function (t) {
				var n,
				r = x.camelCase(e);
				if (i && t === undefined) {
					if (n = L.get(i, e), n !== undefined)
						return n;
					if (n = L.get(i, r), n !== undefined)
						return n;
					if (n = P(i, r, undefined), n !== undefined)
						return n
				} else
					this.each(function () {
						var n = L.get(this, r);
						L.set(this, r, t),
						-1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
					})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData : function (e) {
			return this.each(function () {
				L.remove(this, e)
			})
		}
	});
	function P(e, t, n) {
		var r;
		if (n === undefined && 1 === e.nodeType)
			if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
				} catch (i) {}

				L.set(e, t, n)
			} else
				n = undefined;
		return n
	}
	x.extend({
		queue : function (e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined
		},
		dequeue : function (e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
			r = n.length,
			i = n.shift(),
			o = x._queueHooks(e, t),
			s = function () {
				x.dequeue(e, t)
			};
			"inprogress" === i && (i = n.shift(), r--),
			i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)),
			!r && o && o.empty.fire()
		},
		_queueHooks : function (e, t) {
			var n = t + "queueHooks";
			return q.get(e, n) || q.access(e, n, {
				empty : x.Callbacks("once memory").add(function () {
					q.remove(e, [t + "queue", n])
				})
			})
		}
	}),
	x.fn.extend({
		queue : function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--),
			n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
				var n = x.queue(this, e, t);
				x._queueHooks(this, e),
				"fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
			})
		},
		dequeue : function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		},
		delay : function (e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e,
			t = t || "fx",
			this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue : function (e) {
			return this.queue(e || "fx", [])
		},
		promise : function (e, t) {
			var n,
			r = 1,
			i = x.Deferred(),
			o = this,
			s = this.length,
			a = function () {
				--r || i.resolveWith(o, [o])
			};
			"string" != typeof e && (t = e, e = undefined),
			e = e || "fx";
			while (s--)
				n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
			return a(),
			i.promise(t)
		}
	});
	var R,
	M,
	W = /[\t\r\n\f]/g,
	$ = /\r/g,
	B = /^(?:input|select|textarea|button)$/i;
	x.fn.extend({
		attr : function (e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr : function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		},
		prop : function (e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp : function (e) {
			return this.each(function () {
				delete this[x.propFix[e] || e]
			})
		},
		addClass : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s = 0,
			a = this.length,
			u = "string" == typeof e && e;
			if (x.isFunction(e))
				return this.each(function (t) {
					x(this).addClass(e.call(this, t, this.className))
				});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
						o = 0;
						while (i = t[o++])
							0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s = 0,
			a = this.length,
			u = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e))
				return this.each(function (t) {
					x(this).removeClass(e.call(this, t, this.className))
				});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0)
								r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass : function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n) {
					var t,
					i = 0,
					o = x(this),
					s = e.match(w) || [];
					while (t = s[i++])
						o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
			})
		},
		hasClass : function (e) {
			var t = " " + e + " ",
			n = 0,
			r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0)
					return !0;
			return !1
		},
		val : function (e) {
			var t,
			n,
			r,
			i = this[0]; {
				if (arguments.length)
					return r = x.isFunction(e), this.each(function (n) {
						var i;
						1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
											return null == e ? "" : e + ""
										})), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
					});
				if (i)
					return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
			}
		}
	}),
	x.extend({
		valHooks : {
			option : {
				get : function (e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select : {
				get : function (e) {
					var t,
					n,
					r = e.options,
					i = e.selectedIndex,
					o = "select-one" === e.type || 0 > i,
					s = o ? null : [],
					a = o ? i + 1 : r.length,
					u = 0 > i ? a : o ? i : 0;
					for (; a > u; u++)
						if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o)
								return t;
							s.push(t)
						}
					return s
				},
				set : function (e, t) {
					var n,
					r,
					i = e.options,
					o = x.makeArray(t),
					s = i.length;
					while (s--)
						r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1),
					o
				}
			}
		},
		attr : function (e, t, n) {
			var i,
			o,
			s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)
				return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined))
		},
		removeAttr : function (e, t) {
			var n,
			r,
			i = 0,
			o = t && t.match(w);
			if (o && 1 === e.nodeType)
				while (n = o[i++])
					r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks : {
			type : {
				set : function (e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			}
		},
		propFix : {
			"for" : "htmlFor",
			"class" : "className"
		},
		prop : function (e, t, n) {
			var r,
			i,
			o,
			s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)
				return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks : {
			tabIndex : {
				get : function (e) {
					return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}),
	M = {
		set : function (e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n),
			n
		}
	},
	x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = x.expr.attrHandle[t] || x.find.attr;
		x.expr.attrHandle[t] = function (e, t, r) {
			var i = x.expr.attrHandle[t],
			o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
			return x.expr.attrHandle[t] = i,
			o
		}
	}),
	x.support.optSelected || (x.propHooks.selected = {
			get : function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex,
				null
			}
		}),
	x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	}),
	x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set : function (e, t) {
				return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
			}
		},
		x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var I = /^key/,
	z = /^(?:mouse|contextmenu)|click/,
	_ = /^(?:focusinfocus|focusoutblur)$/,
	X = /^([^.]*)(?:\.(.+)|)$/;
	function U() {
		return !0
	}
	function Y() {
		return !1
	}
	function V() {
		try {
			return o.activeElement
		} catch (e) {}

	}
	x.event = {
		global : {},
		add : function (e, t, n, i, o) {
			var s,
			a,
			u,
			l,
			c,
			p,
			f,
			h,
			d,
			g,
			m,
			y = q.get(e);
			if (y) {
				n.handler && (s = n, n = s.handler, o = s.selector),
				n.guid || (n.guid = x.guid++),
				(l = y.events) || (l = y.events = {}),
				(a = y.handle) || (a = y.handle = function (e) {
					return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
				}, a.elem = e),
				t = (t || "").match(w) || [""],
				c = t.length;
				while (c--)
					u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
								type : d,
								origType : m,
								data : i,
								handler : n,
								guid : n.guid,
								selector : o,
								needsContext : o && x.expr.match.needsContext.test(o),
								namespace : g.join(".")
							}, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
				e = null
			}
		},
		remove : function (e, t, n, r, i) {
			var o,
			s,
			a,
			u,
			l,
			c,
			p,
			f,
			h,
			d,
			g,
			m = q.hasData(e) && q.get(e);
			if (m && (u = m.events)) {
				t = (t || "").match(w) || [""],
				l = t.length;
				while (l--)
					if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
						p = x.event.special[h] || {},
						h = (r ? p.delegateType : p.bindType) || h,
						f = u[h] || [],
						a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
						s = o = f.length;
						while (o--)
							c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
						s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h])
					} else
						for (h in u)
							x.event.remove(e, h + t[l], n, r, !0);
				x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"))
			}
		},
		trigger : function (t, n, r, i) {
			var s,
			a,
			u,
			l,
			c,
			p,
			f,
			h = [r || o],
			d = y.call(t, "type") ? t.type : t,
			g = y.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !x.isWindow(r)) {
					for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
						h.push(a), u = a;
					u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
				}
				s = 0;
				while ((a = h[s++]) && !t.isPropagationStopped())
					t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
				return t.type = d,
				i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)),
				t.result
			}
		},
		dispatch : function (e) {
			e = x.event.fix(e);
			var t,
			n,
			r,
			i,
			o,
			s = [],
			a = d.call(arguments),
			u = (q.get(this, "events") || {})[e.type] || [],
			l = x.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u),
				t = 0;
				while ((i = s[t++]) && !e.isPropagationStopped()) {
					e.currentTarget = i.elem,
					n = 0;
					while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
						(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return l.postDispatch && l.postDispatch.call(this, e),
				e.result
			}
		},
		handlers : function (e, t) {
			var n,
			r,
			i,
			o,
			s = [],
			a = t.delegateCount,
			u = e.target;
			if (a && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== e.type) {
						for (r = [], n = 0; a > n; n++)
							o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && s.push({
							elem : u,
							handlers : r
						})
					}
			return t.length > a && s.push({
				elem : this,
				handlers : t.slice(a)
			}),
			s
		},
		props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
				e
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter : function (e, t) {
				var n,
				r,
				i,
				s = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
				e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
				e
			}
		},
		fix : function (e) {
			if (e[x.expando])
				return e;
			var t,
			n,
			r,
			i = e.type,
			s = e,
			a = this.fixHooks[i];
			a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}),
			r = a.props ? this.props.concat(a.props) : this.props,
			e = new x.Event(s),
			t = r.length;
			while (t--)
				n = r[t], e[n] = s[n];
			return e.target || (e.target = o),
			3 === e.target.nodeType && (e.target = e.target.parentNode),
			a.filter ? a.filter(e, s) : e
		},
		special : {
			load : {
				noBubble : !0
			},
			focus : {
				trigger : function () {
					return this !== V() && this.focus ? (this.focus(), !1) : undefined
				},
				delegateType : "focusin"
			},
			blur : {
				trigger : function () {
					return this === V() && this.blur ? (this.blur(), !1) : undefined
				},
				delegateType : "focusout"
			},
			click : {
				trigger : function () {
					return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined
				},
				_default : function (e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload : {
				postDispatch : function (e) {
					e.result !== undefined && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate : function (e, t, n, r) {
			var i = x.extend(new x.Event, n, {
					type : e,
					isSimulated : !0,
					originalEvent : {}

				});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	x.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	},
	x.Event = function (e, t) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t)
	},
	x.Event.prototype = {
		isDefaultPrevented : Y,
		isPropagationStopped : Y,
		isImmediatePropagationStopped : Y,
		preventDefault : function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = U,
			e && e.preventDefault && e.preventDefault()
		},
		stopPropagation : function () {
			var e = this.originalEvent;
			this.isPropagationStopped = U,
			e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = U,
			this.stopPropagation()
		}
	},
	x.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (e, t) {
		x.event.special[e] = {
			delegateType : t,
			bindType : t,
			handle : function (e) {
				var n,
				r = this,
				i = e.relatedTarget,
				o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
				n
			}
		}
	}),
	x.support.focusinBubbles || x.each({
		focus : "focusin",
		blur : "focusout"
	}, function (e, t) {
		var n = 0,
		r = function (e) {
			x.event.simulate(t, e.target, x.event.fix(e), !0)
		};
		x.event.special[t] = {
			setup : function () {
				0 === n++ && o.addEventListener(e, r, !0)
			},
			teardown : function () {
				0 === --n && o.removeEventListener(e, r, !0)
			}
		}
	}),
	x.fn.extend({
		on : function (e, t, n, r, i) {
			var o,
			s;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = undefined);
				for (s in e)
					this.on(s, t, n, e[s], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1)
				r = Y;
			else if (!r)
				return this;
			return 1 === i && (o = r, r = function (e) {
				return x().off(e),
				o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = x.guid++)),
			this.each(function () {
				x.event.add(this, e, r, n, t)
			})
		},
		one : function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off : function (e, t, n) {
			var r,
			i;
			if (e && e.preventDefault && e.handleObj)
				return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e)
					this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = undefined),
			n === !1 && (n = Y),
			this.each(function () {
				x.event.remove(this, e, n, t)
			})
		},
		trigger : function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler : function (e, t) {
			var n = this[0];
			return n ? x.event.trigger(e, t, n, !0) : undefined
		}
	});
	var G = /^.[^:#\[\.,]*$/,
	J = /^(?:parents|prev(?:Until|All))/,
	Q = x.expr.match.needsContext,
	K = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	x.fn.extend({
		find : function (e) {
			var t,
			n = [],
			r = this,
			i = r.length;
			if ("string" != typeof e)
				return this.pushStack(x(e).filter(function () {
						for (t = 0; i > t; t++)
							if (x.contains(r[t], this))
								return !0
					}));
			for (t = 0; i > t; t++)
				x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n),
			n.selector = this.selector ? this.selector + " " + e : e,
			n
		},
		has : function (e) {
			var t = x(e, this),
			n = t.length;
			return this.filter(function () {
				var e = 0;
				for (; n > e; e++)
					if (x.contains(this, t[e]))
						return !0
			})
		},
		not : function (e) {
			return this.pushStack(et(this, e || [], !0))
		},
		filter : function (e) {
			return this.pushStack(et(this, e || [], !1))
		},
		is : function (e) {
			return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
		},
		closest : function (e, t) {
			var n,
			r = 0,
			i = this.length,
			o = [],
			s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index : function (e) {
			return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add : function (e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
			r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack : function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});
	function Z(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent : function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents : function (e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil : function (e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next : function (e) {
			return Z(e, "nextSibling")
		},
		prev : function (e) {
			return Z(e, "previousSibling")
		},
		nextAll : function (e) {
			return x.dir(e, "nextSibling")
		},
		prevAll : function (e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil : function (e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil : function (e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings : function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children : function (e) {
			return x.sibling(e.firstChild)
		},
		contents : function (e) {
			return e.contentDocument || x.merge([], e.childNodes)
		}
	}, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n),
			r && "string" == typeof r && (i = x.filter(r, i)),
			this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()),
			this.pushStack(i)
		}
	}),
	x.extend({
		filter : function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
					return 1 === e.nodeType
				}))
		},
		dir : function (e, t, n) {
			var r = [],
			i = n !== undefined;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && x(e).is(n))
						break;
					r.push(e)
				}
			return r
		},
		sibling : function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	function et(e, t, n) {
		if (x.isFunction(t))
			return x.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			});
		if (t.nodeType)
			return x.grep(e, function (e) {
				return e === t !== n
			});
		if ("string" == typeof t) {
			if (G.test(t))
				return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function (e) {
			return g.call(t, e) >= 0 !== n
		})
	}
	var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	nt = /<([\w:]+)/,
	rt = /<|&#?\w+;/,
	it = /<(?:script|style|link)/i,
	ot = /^(?:checkbox|radio)$/i,
	st = /checked\s*(?:[^=]|=\s*.checked.)/i,
	at = /^$|\/(?:java|ecma)script/i,
	ut = /^true\/(.*)/,
	lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	ct = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		thead : [1, "<table>", "</table>"],
		col : [2, "<table><colgroup>", "</colgroup></table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default : [0, "", ""]
	};
	ct.optgroup = ct.option,
	ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead,
	ct.th = ct.td,
	x.fn.extend({
		text : function (e) {
			return x.access(this, function (e) {
				return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		append : function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend : function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before : function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after : function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove : function (e, t) {
			var n,
			r = e ? x.filter(e, this) : this,
			i = 0;
			for (; null != (n = r[i]); i++)
				t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty : function () {
			var e,
			t = 0;
			for (; null != (e = this[t]); t++)
				1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
			return this
		},
		clone : function (e, t) {
			return e = null == e ? !1 : e,
			t = null == t ? e : t,
			this.map(function () {
				return x.clone(this, e, t)
			})
		},
		html : function (e) {
			return x.access(this, function (e) {
				var t = this[0] || {},
				n = 0,
				r = this.length;
				if (e === undefined && 1 === t.nodeType)
					return t.innerHTML;
				if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(tt, "<$1></$2>");
					try {
						for (; r > n; n++)
							t = this[n] || {},
						1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}

				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith : function () {
			var e = x.map(this, function (e) {
					return [e.nextSibling, e.parentNode]
				}),
			t = 0;
			return this.domManip(arguments, function (n) {
				var r = e[t++],
				i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0),
			t ? this : this.remove()
		},
		detach : function (e) {
			return this.remove(e, !0)
		},
		domManip : function (e, t, n) {
			e = f.apply([], e);
			var r,
			i,
			o,
			s,
			a,
			u,
			l = 0,
			c = this.length,
			p = this,
			h = c - 1,
			d = e[0],
			g = x.isFunction(d);
			if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d))
				return this.each(function (r) {
					var i = p.eq(r);
					g && (e[0] = d.call(this, r, i.html())),
					i.domManip(e, t, n)
				});
			if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
				for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++)
					a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
				if (s)
					for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)
						a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
			}
			return this
		}
	}),
	x.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (e, t) {
		x.fn[e] = function (e) {
			var n,
			r = [],
			i = x(e),
			o = i.length - 1,
			s = 0;
			for (; o >= s; s++)
				n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
			return this.pushStack(r)
		}
	}),
	x.extend({
		clone : function (e, t, n) {
			var r,
			i,
			o,
			s,
			a = e.cloneNode(!0),
			u = x.contains(e.ownerDocument, e);
			if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)
					yt(o[r], s[r]);
			if (t)
				if (n)
					for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)
						gt(o[r], s[r]);
				else
					gt(e, a);
			return s = mt(a, "script"),
			s.length > 0 && dt(s, !u && mt(e, "script")),
			a
		},
		buildFragment : function (e, t, n, r) {
			var i,
			o,
			s,
			a,
			u,
			l,
			c = 0,
			p = e.length,
			f = t.createDocumentFragment(),
			h = [];
			for (; p > c; c++)
				if (i = e[c], i || 0 === i)
					if ("object" === x.type(i))
						x.merge(h, i.nodeType ? [i] : i);
					else if (rt.test(i)) {
						o = o || f.appendChild(t.createElement("div")),
						s = (nt.exec(i) || ["", ""])[1].toLowerCase(),
						a = ct[s] || ct._default,
						o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2],
						l = a[0];
						while (l--)
							o = o.lastChild;
						x.merge(h, o.childNodes),
						o = f.firstChild,
						o.textContent = ""
					} else
						h.push(t.createTextNode(i));
			f.textContent = "",
			c = 0;
			while (i = h[c++])
				if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
					l = 0;
					while (i = o[l++])
						at.test(i.type || "") && n.push(i)
				}
			return f
		},
		cleanData : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s,
			a = x.event.special,
			u = 0;
			for (; (n = e[u]) !== undefined; u++) {
				if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
					if (r = Object.keys(t.events || {}), r.length)
						for (s = 0; (i = r[s]) !== undefined; s++)
							a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
					q.cache[o] && delete q.cache[o]
				}
				delete L.cache[n[L.expando]]
			}
		},
		_evalUrl : function (e) {
			return x.ajax({
				url : e,
				type : "GET",
				dataType : "script",
				async : !1,
				global : !1,
				"throws" : !0
			})
		}
	});
	function pt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function ft(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
		e
	}
	function ht(e) {
		var t = ut.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"),
		e
	}
	function dt(e, t) {
		var n = e.length,
		r = 0;
		for (; n > r; r++)
			q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
	}
	function gt(e, t) {
		var n,
		r,
		i,
		o,
		s,
		a,
		u,
		l;
		if (1 === t.nodeType) {
			if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
				delete s.handle,
				s.events = {};
				for (i in l)
					for (n = 0, r = l[i].length; r > n; n++)
						x.event.add(t, i, l[i][n])
			}
			L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u))
		}
	}
	function mt(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
	}
	function yt(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	x.fn.extend({
		wrapAll : function (e) {
			var t;
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
						var e = this;
						while (e.firstElementChild)
							e = e.firstElementChild;
						return e
					}).append(this)), this)
		},
		wrapInner : function (e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = x(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap : function (e) {
			var t = x.isFunction(e);
			return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var vt,
	xt,
	bt = /^(none|table(?!-c[ea]).+)/,
	wt = /^margin/,
	Tt = RegExp("^(" + b + ")(.*)$", "i"),
	Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
	kt = RegExp("^([+-])=(" + b + ")", "i"),
	Nt = {
		BODY : "block"
	},
	Et = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	St = {
		letterSpacing : 0,
		fontWeight : 400
	},
	jt = ["Top", "Right", "Bottom", "Left"],
	Dt = ["Webkit", "O", "Moz", "ms"];
	function At(e, t) {
		if (t in e)
			return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
		r = t,
		i = Dt.length;
		while (i--)
			if (t = Dt[i] + n, t in e)
				return t;
		return r
	}
	function Lt(e, t) {
		return e = t || e,
		"none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}
	function qt(t) {
		return e.getComputedStyle(t, null)
	}
	function Ht(e, t) {
		var n,
		r,
		i,
		o = [],
		s = 0,
		a = e.length;
		for (; a > s; s++)
			r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (s = 0; a > s; s++)
			r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}
	x.fn.extend({
		css : function (e, t) {
			return x.access(this, function (e, t, n) {
				var r,
				i,
				o = {},
				s = 0;
				if (x.isArray(t)) {
					for (r = qt(e), i = t.length; i > s; s++)
						o[t[s]] = x.css(e, t[s], !1, r);
					return o
				}
				return n !== undefined ? x.style(e, t, n) : x.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show : function () {
			return Ht(this, !0)
		},
		hide : function () {
			return Ht(this)
		},
		toggle : function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Lt(this) ? x(this).show() : x(this).hide()
			})
		}
	}),
	x.extend({
		cssHooks : {
			opacity : {
				get : function (e, t) {
					if (t) {
						var n = vt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber : {
			columnCount : !0,
			fillOpacity : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			order : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {
			"float" : "cssFloat"
		},
		style : function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
				o,
				s,
				a = x.camelCase(t),
				u = e.style;
				return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)),
				s = x.cssHooks[t] || x.cssHooks[a],
				n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined)
			}
		},
		css : function (e, t, n, r) {
			var i,
			o,
			s,
			a = x.camelCase(t);
			return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)),
			s = x.cssHooks[t] || x.cssHooks[a],
			s && "get" in s && (i = s.get(e, !0, n)),
			i === undefined && (i = vt(e, t, r)),
			"normal" === i && t in St && (i = St[t]),
			"" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i
		}
	}),
	vt = function (e, t, n) {
		var r,
		i,
		o,
		s = n || qt(e),
		a = s ? s.getPropertyValue(t) || s[t] : undefined,
		u = e.style;
		return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)),
		a
	};
	function Ot(e, t, n) {
		var r = Tt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function Ft(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
		s = 0;
		for (; 4 > o; o += 2)
			"margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
		return s
	}
	function Pt(e, t, n) {
		var r = !0,
		i = "width" === t ? e.offsetWidth : e.offsetHeight,
		o = qt(e),
		s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i))
				return i;
			r = s && (x.support.boxSizingReliable || i === e.style[t]),
			i = parseFloat(i) || 0
		}
		return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}
	function Rt(e) {
		var t = o,
		n = Nt[e];
		return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n),
		n
	}
	function Mt(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
		r = x.css(n[0], "display");
		return n.remove(),
		r
	}
	x.each(["height", "width"], function (e, t) {
		x.cssHooks[t] = {
			get : function (e, n, r) {
				return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () {
					return Pt(e, t, r)
				}) : Pt(e, t, r) : undefined
			},
			set : function (e, n, r) {
				var i = r && qt(e);
				return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}),
	x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
				get : function (e, t) {
					return t ? x.swap(e, {
						display : "inline-block"
					}, vt, [e, "marginRight"]) : undefined
				}
			}),
		!x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
			x.cssHooks[t] = {
				get : function (e, n) {
					return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
				}
			}
		})
	}),
	x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	}),
	x.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function (e, t) {
		x.cssHooks[e + t] = {
			expand : function (n) {
				var r = 0,
				i = {},
				o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++)
					i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		},
		wt.test(e) || (x.cssHooks[e + t].set = Ot)
	});
	var Wt = /%20/g,
	$t = /\[\]$/,
	Bt = /\r?\n/g,
	It = /^(?:submit|button|image|reset|file)$/i,
	zt = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize : function () {
			return x.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
			}).map(function (e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return {
						name : t.name,
						value : e.replace(Bt, "\r\n")
					}
				}) : {
					name : t.name,
					value : n.replace(Bt, "\r\n")
				}
			}).get()
		}
	}),
	x.param = function (e, t) {
		var n,
		r = [],
		i = function (e, t) {
			t = x.isFunction(t) ? t() : null == t ? "" : t,
			r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
			x.each(e, function () {
				i(this.name, this.value)
			});
		else
			for (n in e)
				_t(n, e[n], t, i);
		return r.join("&").replace(Wt, "+")
	};
	function _t(e, t, n, r) {
		var i;
		if (x.isArray(t))
			x.each(t, function (t, i) {
				n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
		else if (n || "object" !== x.type(t))
			r(e, t);
		else
			for (i in t)
				_t(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}),
	x.fn.extend({
		hover : function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind : function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind : function (e, t) {
			return this.off(e, null, t)
		},
		delegate : function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate : function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Xt,
	Ut,
	Yt = x.now(),
	Vt = /\?/,
	Gt = /#.*$/,
	Jt = /([?&])_=[^&]*/,
	Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	Zt = /^(?:GET|HEAD)$/,
	en = /^\/\//,
	tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	nn = x.fn.load,
	rn = {},
	on = {},
	sn = "*/".concat("*");
	try {
		Ut = i.href
	} catch (an) {
		Ut = o.createElement("a"),
		Ut.href = "",
		Ut = Ut.href
	}
	Xt = tn.exec(Ut.toLowerCase()) || [];
	function un(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r,
			i = 0,
			o = t.toLowerCase().match(w) || [];
			if (x.isFunction(n))
				while (r = o[i++])
					"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function ln(e, t, n, r) {
		var i = {},
		o = e === on;
		function s(a) {
			var u;
			return i[a] = !0,
			x.each(e[a] || [], function (e, a) {
				var l = a(t, n, r);
				return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1)
			}),
			u
		}
		return s(t.dataTypes[0]) || !i["*"] && s("*")
	}
	function cn(e, t) {
		var n,
		r,
		i = x.ajaxSettings.flatOptions || {};
		for (n in t)
			t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && x.extend(!0, e, r),
		e
	}
	x.fn.load = function (e, t, n) {
		if ("string" != typeof e && nn)
			return nn.apply(this, arguments);
		var r,
		i,
		o,
		s = this,
		a = e.indexOf(" ");
		return a >= 0 && (r = e.slice(a), e = e.slice(0, a)),
		x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"),
		s.length > 0 && x.ajax({
			url : e,
			type : i,
			dataType : "html",
			data : t
		}).done(function (e) {
			o = arguments,
			s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
		}).complete(n && function (e, t) {
			s.each(n, o || [e.responseText, t, e])
		}),
		this
	},
	x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}),
	x.extend({
		active : 0,
		lastModified : {},
		etag : {},
		ajaxSettings : {
			url : Ut,
			type : "GET",
			isLocal : Kt.test(Xt[1]),
			global : !0,
			processData : !0,
			async : !0,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			accepts : {
				"*" : sn,
				text : "text/plain",
				html : "text/html",
				xml : "application/xml, text/xml",
				json : "application/json, text/javascript"
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText",
				json : "responseJSON"
			},
			converters : {
				"* text" : String,
				"text html" : !0,
				"text json" : x.parseJSON,
				"text xml" : x.parseXML
			},
			flatOptions : {
				url : !0,
				context : !0
			}
		},
		ajaxSetup : function (e, t) {
			return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
		},
		ajaxPrefilter : un(rn),
		ajaxTransport : un(on),
		ajax : function (e, t) {
			"object" == typeof e && (t = e, e = undefined),
			t = t || {};
			var n,
			r,
			i,
			o,
			s,
			a,
			u,
			l,
			c = x.ajaxSetup({}, t),
			p = c.context || c,
			f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event,
			h = x.Deferred(),
			d = x.Callbacks("once memory"),
			g = c.statusCode || {},
			m = {},
			y = {},
			v = 0,
			b = "canceled",
			T = {
				readyState : 0,
				getResponseHeader : function (e) {
					var t;
					if (2 === v) {
						if (!o) {
							o = {};
							while (t = Qt.exec(i))
								o[t[1].toLowerCase()] = t[2]
						}
						t = o[e.toLowerCase()]
					}
					return null == t ? null : t
				},
				getAllResponseHeaders : function () {
					return 2 === v ? i : null
				},
				setRequestHeader : function (e, t) {
					var n = e.toLowerCase();
					return v || (e = y[n] = y[n] || e, m[e] = t),
					this
				},
				overrideMimeType : function (e) {
					return v || (c.mimeType = e),
					this
				},
				statusCode : function (e) {
					var t;
					if (e)
						if (2 > v)
							for (t in e)
								g[t] = [g[t], e[t]];
						else
							T.always(e[T.status]);
					return this
				},
				abort : function (e) {
					var t = e || b;
					return n && n.abort(t),
					k(0, t),
					this
				}
			};
			if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v)
				return T;
			u = c.global,
			u && 0 === x.active++ && x.event.trigger("ajaxStart"),
			c.type = c.type.toUpperCase(),
			c.hasContent = !Zt.test(c.type),
			r = c.url,
			c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)),
			c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])),
			(c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType),
			T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
			for (l in c.headers)
				T.setRequestHeader(l, c.headers[l]);
			if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
				return T.abort();
			b = "abort";
			for (l in {
				success : 1,
				error : 1,
				complete : 1
			})
				T[l](c[l]);
			if (n = ln(on, c, t, T)) {
				T.readyState = 1,
				u && f.trigger("ajaxSend", [T, c]),
				c.async && c.timeout > 0 && (s = setTimeout(function () {
							T.abort("timeout")
						}, c.timeout));
				try {
					v = 1,
					n.send(m, k)
				} catch (C) {
					if (!(2 > v))
						throw C;
					k(-1, C)
				}
			} else
				k(-1, "No Transport");
			function k(e, t, o, a) {
				var l,
				m,
				y,
				b,
				w,
				C = t;
				2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON : function (e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript : function (e, t) {
			return x.get(e, undefined, t, "script")
		}
	}),
	x.each(["get", "post"], function (e, t) {
		x[t] = function (e, n, r, i) {
			return x.isFunction(n) && (i = i || r, r = n, n = undefined),
			x.ajax({
				url : e,
				type : t,
				dataType : i,
				data : n,
				success : r
			})
		}
	});
	function pn(e, t, n) {
		var r,
		i,
		o,
		s,
		a = e.contents,
		u = e.dataTypes;
		while ("*" === u[0])
			u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in a)
				if (a[i] && a[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0]in n)
			o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined
	}
	function fn(e, t, n, r) {
		var i,
		o,
		s,
		a,
		u,
		l = {},
		c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters)
				l[s.toLowerCase()] = e.converters[s];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o)
					o = u;
				else if ("*" !== u && u !== o) {
					if (s = l[u + " " + o] || l["* " + o], !s)
						for (i in l)
							if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
								s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
								break
							}
					if (s !== !0)
						if (s && e["throws"])
							t = s(t);
						else
							try {
								t = s(t)
							} catch (p) {
								return {
									state : "parsererror",
									error : s ? p : "No conversion from " + u + " to " + o
								}
							}
				}
		return {
			state : "success",
			data : t
		}
	}
	x.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /(?:java|ecma)script/
		},
		converters : {
			"text script" : function (e) {
				return x.globalEval(e),
				e
			}
		}
	}),
	x.ajaxPrefilter("script", function (e) {
		e.cache === undefined && (e.cache = !1),
		e.crossDomain && (e.type = "GET")
	}),
	x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t,
			n;
			return {
				send : function (r, i) {
					t = x("<script>").prop({
							async : !0,
							charset : e.scriptCharset,
							src : e.url
						}).on("load error", n = function (e) {
							t.remove(),
							n = null,
							e && i("error" === e.type ? 404 : 200, e.type)
						}),
					o.head.appendChild(t[0])
				},
				abort : function () {
					n && n()
				}
			}
		}
	});
	var hn = [],
	dn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			var e = hn.pop() || x.expando + "_" + Yt++;
			return this[e] = !0,
			e
		}
	}),
	x.ajaxPrefilter("json jsonp", function (t, n, r) {
		var i,
		o,
		s,
		a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return s || x.error(i + " was not called"),
			s[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
			s = arguments
		}, r.always(function () {
				e[i] = o,
				t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)),
				s && x.isFunction(o) && o(s[0]),
				s = o = undefined
			}), "script") : undefined
	}),
	x.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (e) {}

	};
	var gn = x.ajaxSettings.xhr(),
	mn = {
		0 : 200,
		1223 : 204
	},
	yn = 0,
	vn = {};
	e.ActiveXObject && x(e).on("unload", function () {
		for (var e in vn)
			vn[e]();
		vn = undefined
	}),
	x.support.cors = !!gn && "withCredentials" in gn,
	x.support.ajax = gn = !!gn,
	x.ajaxTransport(function (e) {
		var t;
		return x.support.cors || gn && !e.crossDomain ? {
			send : function (n, r) {
				var i,
				o,
				s = e.xhr();
				if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (i in e.xhrFields)
						s[i] = e.xhrFields[i];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
				e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n)
					s.setRequestHeader(i, n[i]);
				t = function (e) {
					return function () {
						t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
								text : s.responseText
							}
								 : undefined, s.getAllResponseHeaders()))
					}
				},
				s.onload = t(),
				s.onerror = t("error"),
				t = vn[o = yn++] = t("abort"),
				s.send(e.hasContent && e.data || null)
			},
			abort : function () {
				t && t()
			}
		}
		 : undefined
	});
	var xn,
	bn,
	wn = /^(?:toggle|show|hide)$/,
	Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
	Cn = /queueHooks$/,
	kn = [An],
	Nn = {
		"*" : [function (e, t) {
				var n = this.createTween(e, t),
				r = n.cur(),
				i = Tn.exec(t),
				o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
				s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)),
				a = 1,
				u = 20;
				if (s && s[3] !== o) {
					o = o || s[3],
					i = i || [],
					s = +r || 1;
					do
						a = a || ".5", s /= a, x.style(n.elem, e, s + o);
					while (a !== (a = n.cur() / r) && 1 !== a && --u)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
				n
			}
		]
	};
	function En() {
		return setTimeout(function () {
			xn = undefined
		}),
		xn = x.now()
	}
	function Sn(e, t, n) {
		var r,
		i = (Nn[t] || []).concat(Nn["*"]),
		o = 0,
		s = i.length;
		for (; s > o; o++)
			if (r = i[o].call(n, t, e))
				return r
	}
	function jn(e, t, n) {
		var r,
		i,
		o = 0,
		s = kn.length,
		a = x.Deferred().always(function () {
				delete u.elem
			}),
		u = function () {
			if (i)
				return !1;
			var t = xn || En(),
			n = Math.max(0, l.startTime + l.duration - t),
			r = n / l.duration || 0,
			o = 1 - r,
			s = 0,
			u = l.tweens.length;
			for (; u > s; s++)
				l.tweens[s].run(o);
			return a.notifyWith(e, [l, o, n]),
			1 > o && u ? n : (a.resolveWith(e, [l]), !1)
		},
		l = a.promise({
				elem : e,
				props : x.extend({}, t),
				opts : x.extend(!0, {
					specialEasing : {}

				}, n),
				originalProperties : t,
				originalOptions : n,
				startTime : xn || En(),
				duration : n.duration,
				tweens : [],
				createTween : function (t, n) {
					var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r),
					r
				},
				stop : function (t) {
					var n = 0,
					r = t ? l.tweens.length : 0;
					if (i)
						return this;
					for (i = !0; r > n; n++)
						l.tweens[n].run(1);
					return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
					this
				}
			}),
		c = l.props;
		for (Dn(c, l.opts.specialEasing); s > o; o++)
			if (r = kn[o].call(l, e, c, l.opts))
				return r;
		return x.map(c, Sn, l),
		x.isFunction(l.opts.start) && l.opts.start.call(e, l),
		x.fx.timer(x.extend(u, {
				elem : e,
				anim : l,
				queue : l.opts.queue
			})),
		l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function Dn(e, t) {
		var n,
		r,
		i,
		o,
		s;
		for (n in e)
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
				o = s.expand(o),
				delete e[r];
				for (n in o)
					n in e || (e[n] = o[n], t[n] = i)
			} else
				t[r] = i
	}
	x.Animation = x.extend(jn, {
			tweener : function (e, t) {
				x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				var n,
				r = 0,
				i = e.length;
				for (; i > r; r++)
					n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t)
			},
			prefilter : function (e, t) {
				t ? kn.unshift(e) : kn.push(e)
			}
		});
	function An(e, t, n) {
		var r,
		i,
		o,
		s,
		a,
		u,
		l = this,
		c = {},
		p = e.style,
		f = e.nodeType && Lt(e),
		h = q.get(e, "fxshow");
		n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
				a.unqueued || u()
			}), a.unqueued++, l.always(function () {
				l.always(function () {
					a.unqueued--,
					x.queue(e, "fx").length || a.empty.fire()
				})
			})),
		1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")),
		n.overflow && (p.overflow = "hidden", l.always(function () {
				p.overflow = n.overflow[0],
				p.overflowX = n.overflow[1],
				p.overflowY = n.overflow[2]
			}));
		for (r in t)
			if (i = t[r], wn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
					if ("show" !== i || !h || h[r] === undefined)
						continue;
					f = !0
				}
				c[r] = h && h[r] || x.style(e, r)
			}
		if (!x.isEmptyObject(c)) {
			h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}),
			o && (h.hidden = !f),
			f ? x(e).show() : l.done(function () {
				x(e).hide()
			}),
			l.done(function () {
				var t;
				q.remove(e, "fxshow");
				for (t in c)
					x.style(e, t, c[t])
			});
			for (r in c)
				s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function Ln(e, t, n, r, i) {
		return new Ln.prototype.init(e, t, n, r, i)
	}
	x.Tween = Ln,
	Ln.prototype = {
		constructor : Ln,
		init : function (e, t, n, r, i, o) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur : function () {
			var e = Ln.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
		},
		run : function (e) {
			var t,
			n = Ln.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : Ln.propHooks._default.set(this),
			this
		}
	},
	Ln.prototype.init.prototype = Ln.prototype,
	Ln.propHooks = {
		_default : {
			get : function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set : function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
		set : function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];
		x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
		}
	}),
	x.fn.extend({
		fadeTo : function (e, t, n, r) {
			return this.filter(Lt).css("opacity", 0).show().end().animate({
				opacity : t
			}, e, n, r)
		},
		animate : function (e, t, n, r) {
			var i = x.isEmptyObject(e),
			o = x.speed(t, n, r),
			s = function () {
				var t = jn(this, x.extend({}, e), o);
				(i || q.get(this, "finish")) && t.stop(!0)
			};
			return s.finish = s,
			i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop : function (e, t, n) {
			var r = function (e) {
				var t = e.stop;
				delete e.stop,
				t(n)
			};
			return "string" != typeof e && (n = t, t = e, e = undefined),
			t && e !== !1 && this.queue(e || "fx", []),
			this.each(function () {
				var t = !0,
				i = null != e && e + "queueHooks",
				o = x.timers,
				s = q.get(this);
				if (i)
					s[i] && s[i].stop && r(s[i]);
				else
					for (i in s)
						s[i] && s[i].stop && Cn.test(i) && r(s[i]);
				for (i = o.length; i--; )
					o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && x.dequeue(this, e)
			})
		},
		finish : function (e) {
			return e !== !1 && (e = e || "fx"),
			this.each(function () {
				var t,
				n = q.get(this),
				r = n[e + "queue"],
				i = n[e + "queueHooks"],
				o = x.timers,
				s = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
					o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; s > t; t++)
					r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});
	function qn(e, t) {
		var n,
		r = {
			height : e
		},
		i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t)
			n = jt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e),
		r
	}
	x.each({
		slideDown : qn("show"),
		slideUp : qn("hide"),
		slideToggle : qn("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	x.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete : n || !n && t || x.isFunction(e) && e,
			duration : e,
			easing : n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
		(null == r.queue || r.queue === !0) && (r.queue = "fx"),
		r.old = r.complete,
		r.complete = function () {
			x.isFunction(r.old) && r.old.call(this),
			r.queue && x.dequeue(this, r.queue)
		},
		r
	},
	x.easing = {
		linear : function (e) {
			return e
		},
		swing : function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	},
	x.timers = [],
	x.fx = Ln.prototype.init,
	x.fx.tick = function () {
		var e,
		t = x.timers,
		n = 0;
		for (xn = x.now(); t.length > n; n++)
			e = t[n], e() || t[n] !== e || t.splice(n--, 1);
		t.length || x.fx.stop(),
		xn = undefined
	},
	x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start()
	},
	x.fx.interval = 13,
	x.fx.start = function () {
		bn || (bn = setInterval(x.fx.tick, x.fx.interval))
	},
	x.fx.stop = function () {
		clearInterval(bn),
		bn = null
	},
	x.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	},
	x.fx.step = {},
	x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem
		}).length
	}),
	x.fn.offset = function (e) {
		if (arguments.length)
			return e === undefined ? this : this.each(function (t) {
				x.offset.setOffset(this, e, t)
			});
		var t,
		n,
		i = this[0],
		o = {
			top : 0,
			left : 0
		},
		s = i && i.ownerDocument;
		if (s)
			return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
				top : o.top + n.pageYOffset - t.clientTop,
				left : o.left + n.pageXOffset - t.clientLeft
			}) : o
	},
	x.offset = {
		setOffset : function (e, t, n) {
			var r,
			i,
			o,
			s,
			a,
			u,
			l,
			c = x.css(e, "position"),
			p = x(e),
			f = {};
			"static" === c && (e.style.position = "relative"),
			a = p.offset(),
			o = x.css(e, "top"),
			u = x.css(e, "left"),
			l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
			l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0),
			x.isFunction(t) && (t = t.call(e, n, a)),
			null != t.top && (f.top = t.top - a.top + s),
			null != t.left && (f.left = t.left - a.left + i),
			"using" in t ? t.using.call(e, f) : p.css(f)
		}
	},
	x.fn.extend({
		position : function () {
			if (this[0]) {
				var e,
				t,
				n = this[0],
				r = {
					top : 0,
					left : 0
				};
				return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {
					top : t.top - r.top - x.css(n, "marginTop", !0),
					left : t.left - r.left - x.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent : function () {
			return this.map(function () {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
					e = e.offsetParent;
				return e || s
			})
		}
	}),
	x.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function (t, n) {
		var r = "pageYOffset" === n;
		x.fn[t] = function (i) {
			return x.access(this, function (t, i, o) {
				var s = Hn(t);
				return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined)
			}, t, i, arguments.length, null)
		}
	});
	function Hn(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	x.each({
		Height : "height",
		Width : "width"
	}, function (e, t) {
		x.each({
			padding : "inner" + e,
			content : t,
			"" : "outer" + e
		}, function (n, r) {
			x.fn[r] = function (r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
				s = n || (r === !0 || i === !0 ? "margin" : "border");
				return x.access(this, function (t, n, r) {
					var i;
					return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
				}, t, o ? r : undefined, o, null)
			}
		})
	}),
	x.fn.size = function () {
		return this.length
	},
	x.fn.andSelf = x.fn.addBack,
	"object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function () {
			return x
		}),
	"object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);
(function (t, e) {
	function i(e, i) {
		var n,
		o,
		a,
		r = e.nodeName.toLowerCase();
		return "area" === r ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap=#" + o + "]")[0], !!a && s(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && s(e)
	}
	function s(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	var n = 0,
	o = /^ui-id-\d+$/;
	t.ui = t.ui || {},
	t.extend(t.ui, {
		version : "1.10.3",
		keyCode : {
			BACKSPACE : 8,
			COMMA : 188,
			DELETE : 46,
			DOWN : 40,
			END : 35,
			ENTER : 13,
			ESCAPE : 27,
			HOME : 36,
			LEFT : 37,
			NUMPAD_ADD : 107,
			NUMPAD_DECIMAL : 110,
			NUMPAD_DIVIDE : 111,
			NUMPAD_ENTER : 108,
			NUMPAD_MULTIPLY : 106,
			NUMPAD_SUBTRACT : 109,
			PAGE_DOWN : 34,
			PAGE_UP : 33,
			PERIOD : 190,
			RIGHT : 39,
			SPACE : 32,
			TAB : 9,
			UP : 38
		}
	}),
	t.fn.extend({
		focus : function (e) {
			return function (i, s) {
				return "number" == typeof i ? this.each(function () {
					var e = this;
					setTimeout(function () {
						t(e).focus(),
						s && s.call(e)
					}, i)
				}) : e.apply(this, arguments)
			}
		}
		(t.fn.focus),
		scrollParent : function () {
			var e;
			return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
					return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
				}).eq(0) : this.parents().filter(function () {
					return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
				}).eq(0),
			/fixed/.test(this.css("position")) || !e.length ? t(document) : e
		},
		zIndex : function (i) {
			if (i !== e)
				return this.css("zIndex", i);
			if (this.length)
				for (var s, n, o = t(this[0]); o.length && o[0] !== document; ) {
					if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n))
						return n;
					o = o.parent()
				}
			return 0
		},
		uniqueId : function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++n)
			})
		},
		removeUniqueId : function () {
			return this.each(function () {
				o.test(this.id) && t(this).removeAttr("id")
			})
		}
	}),
	t.extend(t.expr[":"], {
		data : t.expr.createPseudo ? t.expr.createPseudo(function (e) {
			return function (i) {
				return !!t.data(i, e)
			}
		}) : function (e, i, s) {
			return !!t.data(e, s[3])
		},
		focusable : function (e) {
			return i(e, !isNaN(t.attr(e, "tabindex")))
		},
		tabbable : function (e) {
			var s = t.attr(e, "tabindex"),
			n = isNaN(s);
			return (n || s >= 0) && i(e, !n)
		}
	}),
	t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, s) {
		function n(e, i, s, n) {
			return t.each(o, function () {
				i -= parseFloat(t.css(e, "padding" + this)) || 0,
				s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
				n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
			}),
			i
		}
		var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
		a = s.toLowerCase(),
		r = {
			innerWidth : t.fn.innerWidth,
			innerHeight : t.fn.innerHeight,
			outerWidth : t.fn.outerWidth,
			outerHeight : t.fn.outerHeight
		};
		t.fn["inner" + s] = function (i) {
			return i === e ? r["inner" + s].call(this) : this.each(function () {
				t(this).css(a, n(this, i) + "px")
			})
		},
		t.fn["outer" + s] = function (e, i) {
			return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function () {
				t(this).css(a, n(this, e, !0, i) + "px")
			})
		}
	}),
	t.fn.addBack || (t.fn.addBack = function (t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}),
	t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
		return function (i) {
			return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
		}
	}
		(t.fn.removeData)),
	t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
	t.support.selectstart = "onselectstart" in document.createElement("div"),
	t.fn.extend({
		disableSelection : function () {
			return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
				t.preventDefault()
			})
		},
		enableSelection : function () {
			return this.unbind(".ui-disableSelection")
		}
	}),
	t.extend(t.ui, {
		plugin : {
			add : function (e, i, s) {
				var n,
				o = t.ui[e].prototype;
				for (n in s)
					o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
			},
			call : function (t, e, i) {
				var s,
				n = t.plugins[e];
				if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
					for (s = 0; n.length > s; s++)
						t.options[n[s][0]] && n[s][1].apply(t.element, i)
			}
		},
		hasScroll : function (e, i) {
			if ("hidden" === t(e).css("overflow"))
				return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
			n = !1;
			return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
		}
	})
})(jQuery), function (t, e) {
	var i = 0,
	s = Array.prototype.slice,
	n = t.cleanData;
	t.cleanData = function (e) {
		for (var i, s = 0; null != (i = e[s]); s++)
			try {
				t(i).triggerHandler("remove")
			} catch (o) {}

		n(e)
	},
	t.widget = function (i, s, n) {
		var o,
		a,
		r,
		h,
		l = {},
		c = i.split(".")[0];
		i = i.split(".")[1],
		o = c + "-" + i,
		n || (n = s, s = t.Widget),
		t.expr[":"][o.toLowerCase()] = function (e) {
			return !!t.data(e, o)
		},
		t[c] = t[c] || {},
		a = t[c][i],
		r = t[c][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
		},
		t.extend(r, a, {
			version : n.version,
			_proto : t.extend({}, n),
			_childConstructors : []
		}),
		h = new s,
		h.options = t.widget.extend({}, h.options),
		t.each(n, function (i, n) {
			return t.isFunction(n) ? (l[i] = function () {
				var t = function () {
					return s.prototype[i].apply(this, arguments)
				},
				e = function (t) {
					return s.prototype[i].apply(this, t)
				};
				return function () {
					var i,
					s = this._super,
					o = this._superApply;
					return this._super = t,
					this._superApply = e,
					i = n.apply(this, arguments),
					this._super = s,
					this._superApply = o,
					i
				}
			}
				(), e) : (l[i] = n, e)
		}),
		r.prototype = t.widget.extend(h, {
				widgetEventPrefix : a ? h.widgetEventPrefix : i
			}, l, {
				constructor : r,
				namespace : c,
				widgetName : i,
				widgetFullName : o
			}),
		a ? (t.each(a._childConstructors, function (e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, r, i._proto)
			}), delete a._childConstructors) : s._childConstructors.push(r),
		t.widget.bridge(i, r)
	},
	t.widget.extend = function (i) {
		for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
			for (n in a[r])
				o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
		return i
	},
	t.widget.bridge = function (i, n) {
		var o = n.prototype.widgetFullName || i;
		t.fn[i] = function (a) {
			var r = "string" == typeof a,
			h = s.call(arguments, 1),
			l = this;
			return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a,
			r ? this.each(function () {
				var s,
				n = t.data(this, o);
				return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
			}) : this.each(function () {
				var e = t.data(this, o);
				e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
			}),
			l
		}
	},
	t.Widget = function () {},
	t.Widget._childConstructors = [],
	t.Widget.prototype = {
		widgetName : "widget",
		widgetEventPrefix : "",
		defaultElement : "<div>",
		options : {
			disabled : !1,
			create : null
		},
		_createWidget : function (e, s) {
			s = t(s || this.defaultElement || this)[0],
			this.element = t(s),
			this.uuid = i++,
			this.eventNamespace = "." + this.widgetName + this.uuid,
			this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
			this.bindings = t(),
			this.hoverable = t(),
			this.focusable = t(),
			s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
					remove : function (t) {
						t.target === s && this.destroy()
					}
				}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
			this._create(),
			this._trigger("create", null, this._getCreateEventData()),
			this._init()
		},
		_getCreateOptions : t.noop,
		_getCreateEventData : t.noop,
		_create : t.noop,
		_init : t.noop,
		destroy : function () {
			this._destroy(),
			this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
			this.bindings.unbind(this.eventNamespace),
			this.hoverable.removeClass("ui-state-hover"),
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy : t.noop,
		widget : function () {
			return this.element
		},
		option : function (i, s) {
			var n,
			o,
			a,
			r = i;
			if (0 === arguments.length)
				return t.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (r = {}, n = i.split("."), i = n.shift(), n.length) {
					for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)
						o[n[a]] = o[n[a]] || {},
					o = o[n[a]];
					if (i = n.pop(), s === e)
						return o[i] === e ? null : o[i];
					o[i] = s
				} else {
					if (s === e)
						return this.options[i] === e ? null : this.options[i];
					r[i] = s
				}
			return this._setOptions(r),
			this
		},
		_setOptions : function (t) {
			var e;
			for (e in t)
				this._setOption(e, t[e]);
			return this
		},
		_setOption : function (t, e) {
			return this.options[t] = e,
			"disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
			this
		},
		enable : function () {
			return this._setOption("disabled", !1)
		},
		disable : function () {
			return this._setOption("disabled", !0)
		},
		_on : function (i, s, n) {
			var o,
			a = this;
			"boolean" != typeof i && (n = s, s = i, i = !1),
			n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()),
			t.each(n, function (n, r) {
				function h() {
					return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
				}
				"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
				c = l[1] + a.eventNamespace,
				u = l[2];
				u ? o.delegate(u, c, h) : s.bind(c, h)
			})
		},
		_off : function (t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
			t.unbind(e).undelegate(e)
		},
		_delay : function (t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, e || 0)
		},
		_hoverable : function (e) {
			this.hoverable = this.hoverable.add(e),
			this._on(e, {
				mouseenter : function (e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave : function (e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable : function (e) {
			this.focusable = this.focusable.add(e),
			this._on(e, {
				focusin : function (e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout : function (e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger : function (e, i, s) {
			var n,
			o,
			a = this.options[e];
			if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
				for (n in o)
					n in i || (i[n] = o[n]);
			return this.element.trigger(i, s),
			!(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	},
	t.each({
		show : "fadeIn",
		hide : "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = {
					effect : n
				});
			var a,
			r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
			n = n || {},
			"number" == typeof n && (n = {
					duration : n
				}),
			a = !t.isEmptyObject(n),
			n.complete = o,
			n.delay && s.delay(n.delay),
			a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](),
				o && o.call(s[0]),
				i()
			})
		}
	})
}
(jQuery), function (t) {
	var e = !1;
	t(document).mouseup(function () {
		e = !1
	}),
	t.widget("ui.mouse", {
		version : "1.10.3",
		options : {
			cancel : "input,textarea,button,select,option",
			distance : 1,
			delay : 0
		},
		_mouseInit : function () {
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}),
			this.started = !1
		},
		_mouseDestroy : function () {
			this.element.unbind("." + this.widgetName),
			this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown : function (i) {
			if (!e) {
				this._mouseStarted && this._mouseUp(i),
				this._mouseDownEvent = i;
				var s = this,
				n = 1 === i.which,
				o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
				return n && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
								s.mouseDelayMet = !0
							}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
						return s._mouseMove(t)
					}, this._mouseUpDelegate = function (t) {
						return s._mouseUp(t)
					}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove : function (e) {
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp : function (e) {
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
			this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
			!1
		},
		_mouseDistanceMet : function (t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet : function () {
			return this.mouseDelayMet
		},
		_mouseStart : function () {},
		_mouseDrag : function () {},
		_mouseStop : function () {},
		_mouseCapture : function () {
			return !0
		}
	})
}
(jQuery), function (t) {
	t.widget("ui.draggable", t.ui.mouse, {
		version : "1.10.3",
		widgetEventPrefix : "drag",
		options : {
			addClasses : !0,
			appendTo : "parent",
			axis : !1,
			connectToSortable : !1,
			containment : !1,
			cursor : "auto",
			cursorAt : !1,
			grid : !1,
			handle : !1,
			helper : "original",
			iframeFix : !1,
			opacity : !1,
			refreshPositions : !1,
			revert : !1,
			revertDuration : 500,
			scope : "default",
			scroll : !0,
			scrollSensitivity : 20,
			scrollSpeed : 20,
			snap : !1,
			snapMode : "both",
			snapTolerance : 20,
			stack : !1,
			zIndex : !1,
			drag : null,
			start : null,
			stop : null
		},
		_create : function () {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
			this.options.addClasses && this.element.addClass("ui-draggable"),
			this.options.disabled && this.element.addClass("ui-draggable-disabled"),
			this._mouseInit()
		},
		_destroy : function () {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
			this._mouseDestroy()
		},
		_mouseCapture : function (e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
						t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
							width : this.offsetWidth + "px",
							height : this.offsetHeight + "px",
							position : "absolute",
							opacity : "0.001",
							zIndex : 1e3
						}).css(t(this).offset()).appendTo("body")
					}), !0) : !1)
		},
		_mouseStart : function (e) {
			var i = this.options;
			return this.helper = this._createHelper(e),
			this.helper.addClass("ui-draggable-dragging"),
			this._cacheHelperProportions(),
			t.ui.ddmanager && (t.ui.ddmanager.current = this),
			this._cacheMargins(),
			this.cssPosition = this.helper.css("position"),
			this.scrollParent = this.helper.scrollParent(),
			this.offsetParent = this.helper.offsetParent(),
			this.offsetParentCssPosition = this.offsetParent.css("position"),
			this.offset = this.positionAbs = this.element.offset(),
			this.offset = {
				top : this.offset.top - this.margins.top,
				left : this.offset.left - this.margins.left
			},
			this.offset.scroll = !1,
			t.extend(this.offset, {
				click : {
					left : e.pageX - this.offset.left,
					top : e.pageY - this.offset.top
				},
				parent : this._getParentOffset(),
				relative : this._getRelativeOffset()
			}),
			this.originalPosition = this.position = this._generatePosition(e),
			this.originalPageX = e.pageX,
			this.originalPageY = e.pageY,
			i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
			this._setContainment(),
			this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_mouseDrag : function (e, i) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1)
					return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
			this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			!1
		},
		_mouseStop : function (e) {
			var i = this,
			s = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
			this.dropped && (s = this.dropped, this.dropped = !1),
			"original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
					i._trigger("stop", e) !== !1 && i._clear()
				}) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp : function (e) {
			return t("div.ui-draggable-iframeFix").each(function () {
				this.parentNode.removeChild(this)
			}),
			t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
			t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel : function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
			this
		},
		_getHandle : function (e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper : function (e) {
			var i = this.options,
			s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
			s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
			s
		},
		_adjustOffsetFromHelper : function (e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
					left : +e[0],
					top : +e[1] || 0
				}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset : function () {
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			(this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top : 0,
					left : 0
				}), {
				top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset : function () {
			if ("relative" === this.cssPosition) {
				var t = this.element.position();
				return {
					top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top : 0,
				left : 0
			}
		},
		_cacheMargins : function () {
			this.margins = {
				left : parseInt(this.element.css("marginLeft"), 10) || 0,
				top : parseInt(this.element.css("marginTop"), 10) || 0,
				right : parseInt(this.element.css("marginRight"), 10) || 0,
				bottom : parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions : function () {
			this.helperProportions = {
				width : this.helper.outerWidth(),
				height : this.helper.outerHeight()
			}
		},
		_setContainment : function () {
			var e,
			i,
			s,
			n = this.options;
			return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
		},
		_convertPositionTo : function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
			n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
			return this.offset.scroll || (this.offset.scroll = {
					top : n.scrollTop(),
					left : n.scrollLeft()
				}), {
				top : i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
				left : i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
			}
		},
		_generatePosition : function (e) {
			var i,
			s,
			n,
			o,
			a = this.options,
			r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			h = e.pageX,
			l = e.pageY;
			return this.offset.scroll || (this.offset.scroll = {
					top : r.scrollTop(),
					left : r.scrollLeft()
				}),
			this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)), {
				top : l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
				left : h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
			}
		},
		_clear : function () {
			this.helper.removeClass("ui-draggable-dragging"),
			this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
			this.helper = null,
			this.cancelHelperRemoval = !1
		},
		_trigger : function (e, i, s) {
			return s = s || this._uiHash(),
			t.ui.plugin.call(this, e, [i, s]),
			"drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
			t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins : {},
		_uiHash : function () {
			return {
				helper : this.helper,
				position : this.position,
				originalPosition : this.originalPosition,
				offset : this.positionAbs
			}
		}
	}),
	t.ui.plugin.add("draggable", "connectToSortable", {
		start : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = s.options,
			o = t.extend({}, i, {
					item : s.element
				});
			s.sortables = [],
			t(n.connectToSortable).each(function () {
				var i = t.data(this, "ui-sortable");
				i && !i.options.disabled && (s.sortables.push({
						instance : i,
						shouldRevert : i.options.revert
					}), i.refreshPositions(), i._trigger("activate", e, o))
			})
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = t.extend({}, i, {
					item : s.element
				});
			t.each(s.sortables, function () {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
						top : "auto",
						left : "auto"
					})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
			})
		},
		drag : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = this;
			t.each(s.sortables, function () {
				var o = !1,
				a = this;
				this.instance.positionAbs = s.positionAbs,
				this.instance.helperProportions = s.helperProportions,
				this.instance.offset.click = s.offset.click,
				this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function () {
						return this.instance.positionAbs = s.positionAbs,
						this.instance.helperProportions = s.helperProportions,
						this.instance.offset.click = s.offset.click,
						this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1),
						o
					})),
				o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
						return i.helper[0]
					}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
			})
		}
	}),
	t.ui.plugin.add("draggable", "cursor", {
		start : function () {
			var e = t("body"),
			i = t(this).data("ui-draggable").options;
			e.css("cursor") && (i._cursor = e.css("cursor")),
			e.css("cursor", i.cursor)
		},
		stop : function () {
			var e = t(this).data("ui-draggable").options;
			e._cursor && t("body").css("cursor", e._cursor)
		}
	}),
	t.ui.plugin.add("draggable", "opacity", {
		start : function (e, i) {
			var s = t(i.helper),
			n = t(this).data("ui-draggable").options;
			s.css("opacity") && (n._opacity = s.css("opacity")),
			s.css("opacity", n.opacity)
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._opacity && t(i.helper).css("opacity", s._opacity)
		}
	}),
	t.ui.plugin.add("draggable", "scroll", {
		start : function () {
			var e = t(this).data("ui-draggable");
			e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
		},
		drag : function (e) {
			var i = t(this).data("ui-draggable"),
			s = i.options,
			n = !1;
			i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))),
			n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
		}
	}),
	t.ui.plugin.add("draggable", "snap", {
		start : function () {
			var e = t(this).data("ui-draggable"),
			i = e.options;
			e.snapElements = [],
			t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
				var i = t(this),
				s = i.offset();
				this !== e.element[0] && e.snapElements.push({
					item : this,
					width : i.outerWidth(),
					height : i.outerHeight(),
					top : s.top,
					left : s.left
				})
			})
		},
		drag : function (e, i) {
			var s,
			n,
			o,
			a,
			r,
			h,
			l,
			c,
			u,
			d,
			p = t(this).data("ui-draggable"),
			f = p.options,
			g = f.snapTolerance,
			m = i.offset.left,
			v = m + p.helperProportions.width,
			_ = i.offset.top,
			b = _ + p.helperProportions.height;
			for (u = p.snapElements.length - 1; u >= 0; u--)
				r = p.snapElements[u].left, h = r + p.snapElements[u].width, l = p.snapElements[u].top, c = l + p.snapElements[u].height, r - g > v || m > h + g || l - g > b || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
							snapItem : p.snapElements[u].item
						})), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(l - b), n = g >= Math.abs(c - _), o = g >= Math.abs(r - v), a = g >= Math.abs(h - m), s && (i.position.top = p._convertPositionTo("relative", {
									top : l - p.helperProportions.height,
									left : 0
								}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
									top : c,
									left : 0
								}).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : r - p.helperProportions.width
								}).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : h
								}).left - p.margins.left)), d = s || n || o || a, "outer" !== f.snapMode && (s = g >= Math.abs(l - _), n = g >= Math.abs(c - b), o = g >= Math.abs(r - m), a = g >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
									top : l,
									left : 0
								}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
									top : c - p.helperProportions.height,
									left : 0
								}).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : r
								}).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : h - p.helperProportions.width
								}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
							snapItem : p.snapElements[u].item
						})), p.snapElements[u].snapping = s || n || o || a || d)
		}
	}),
	t.ui.plugin.add("draggable", "stack", {
		start : function () {
			var e,
			i = this.data("ui-draggable").options,
			s = t.makeArray(t(i.stack)).sort(function (e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
					t(this).css("zIndex", e + i)
				}), this.css("zIndex", e + s.length))
		}
	}),
	t.ui.plugin.add("draggable", "zIndex", {
		start : function (e, i) {
			var s = t(i.helper),
			n = t(this).data("ui-draggable").options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")),
			s.css("zIndex", n.zIndex)
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._zIndex && t(i.helper).css("zIndex", s._zIndex)
		}
	})
}
(jQuery), function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}
	t.widget("ui.droppable", {
		version : "1.10.3",
		widgetEventPrefix : "drop",
		options : {
			accept : "*",
			activeClass : !1,
			addClasses : !0,
			greedy : !1,
			hoverClass : !1,
			scope : "default",
			tolerance : "intersect",
			activate : null,
			deactivate : null,
			drop : null,
			out : null,
			over : null
		},
		_create : function () {
			var e = this.options,
			i = e.accept;
			this.isover = !1,
			this.isout = !0,
			this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			},
			this.proportions = {
				width : this.element[0].offsetWidth,
				height : this.element[0].offsetHeight
			},
			t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [],
			t.ui.ddmanager.droppables[e.scope].push(this),
			e.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy : function () {
			for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)
				i[e] === this && i.splice(e, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption : function (e, i) {
			"accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			}),
			t.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate : function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass),
			i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate : function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass),
			i && this._trigger("deactivate", e, this.ui(i))
		},
		_over : function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
		},
		_out : function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
		},
		_drop : function (e, i) {
			var s = i || t.ui.ddmanager.current,
			n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
					var e = t.data(this, "ui-droppable");
					return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
							offset : e.element.offset()
						}), e.options.tolerance) ? (n = !0, !1) : undefined
				}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
		},
		ui : function (t) {
			return {
				draggable : t.currentItem || t.element,
				helper : t.helper,
				position : t.position,
				offset : t.positionAbs
			}
		}
	}),
	t.ui.intersect = function (t, i, s) {
		if (!i.offset)
			return !1;
		var n,
		o,
		a = (t.positionAbs || t.position.absolute).left,
		r = a + t.helperProportions.width,
		h = (t.positionAbs || t.position.absolute).top,
		l = h + t.helperProportions.height,
		c = i.offset.left,
		u = c + i.proportions.width,
		d = i.offset.top,
		p = d + i.proportions.height;
		switch (s) {
		case "fit":
			return a >= c && u >= r && h >= d && p >= l;
		case "intersect":
			return a + t.helperProportions.width / 2 > c && u > r - t.helperProportions.width / 2 && h + t.helperProportions.height / 2 > d && p > l - t.helperProportions.height / 2;
		case "pointer":
			return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
			o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
			e(o, d, i.proportions.height) && e(n, c, i.proportions.width);
		case "touch":
			return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (a >= c && u >= a || r >= c && u >= r || c > a && r > u);
		default:
			return !1
		}
	},
	t.ui.ddmanager = {
		current : null,
		droppables : {
			"default" : []
		},
		prepareOffsets : function (e, i) {
			var s,
			n,
			o = t.ui.ddmanager.droppables[e.options.scope] || [],
			a = i ? i.type : null,
			r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t : for (s = 0; o.length > s; s++)
				if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === o[s].element[0]) {
							o[s].proportions.height = 0;
							continue t
						}
					o[s].visible = "none" !== o[s].element.css("display"),
					o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions = {
							width : o[s].element[0].offsetWidth,
							height : o[s].element[0].offsetHeight
						})
				}
		},
		drop : function (e, i) {
			var s = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}),
			s
		},
		dragStart : function (e, i) {
			e.element.parentsUntil("body").bind("scroll.droppable", function () {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag : function (e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
			t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s,
					n,
					o,
					a = t.ui.intersect(e, this, this.options.tolerance),
					r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
									return t.data(this, "ui-droppable").options.scope === n
								}), o.length && (s = t.data(o[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop : function (e, i) {
			e.element.parentsUntil("body").unbind("scroll.droppable"),
			e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}
}
(jQuery), function (t) {
	function e(t) {
		return parseInt(t, 10) || 0
	}
	function i(t) {
		return !isNaN(parseInt(t, 10))
	}
	t.widget("ui.resizable", t.ui.mouse, {
		version : "1.10.3",
		widgetEventPrefix : "resize",
		options : {
			alsoResize : !1,
			animate : !1,
			animateDuration : "slow",
			animateEasing : "swing",
			aspectRatio : !1,
			autoHide : !1,
			containment : !1,
			ghost : !1,
			grid : !1,
			handles : "e,s,se",
			helper : !1,
			maxHeight : null,
			maxWidth : null,
			minHeight : 10,
			minWidth : 10,
			zIndex : 90,
			resize : null,
			start : null,
			stop : null
		},
		_create : function () {
			var e,
			i,
			s,
			n,
			o,
			a = this,
			r = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
					_aspectRatio : !!r.aspectRatio,
					aspectRatio : r.aspectRatio,
					originalElement : this.element,
					_proportionallyResizeElements : [],
					_helper : r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
							position : this.element.css("position"),
							width : this.element.outerWidth(),
							height : this.element.outerHeight(),
							top : this.element.css("top"),
							left : this.element.css("left")
						})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
						marginLeft : this.originalElement.css("marginLeft"),
						marginTop : this.originalElement.css("marginTop"),
						marginRight : this.originalElement.css("marginRight"),
						marginBottom : this.originalElement.css("marginBottom")
					}), this.originalElement.css({
						marginLeft : 0,
						marginTop : 0,
						marginRight : 0,
						marginBottom : 0
					}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
							position : "static",
							zoom : 1,
							display : "block"
						})), this.originalElement.css({
						margin : this.originalElement.css("margin")
					}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
						n : ".ui-resizable-n",
						e : ".ui-resizable-e",
						s : ".ui-resizable-s",
						w : ".ui-resizable-w",
						se : ".ui-resizable-se",
						sw : ".ui-resizable-sw",
						ne : ".ui-resizable-ne",
						nw : ".ui-resizable-nw"
					}
						 : "e,s,se"), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)
					s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({
						zIndex : r.zIndex
					}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
			this._renderAxis = function (e) {
				var i,
				s,
				n,
				o;
				e = e || this.element;
				for (i in this.handles)
					this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length
			},
			this._renderAxis(this.element),
			this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
			this._handles.mouseover(function () {
				a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
			}),
			r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
					r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
				}).mouseleave(function () {
					r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
				})),
			this._mouseInit()
		},
		_destroy : function () {
			this._mouseDestroy();
			var e,
			i = function (e) {
				t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
					position : e.css("position"),
					width : e.outerWidth(),
					height : e.outerHeight(),
					top : e.css("top"),
					left : e.css("left")
				}).insertAfter(e), e.remove()),
			this.originalElement.css("resize", this.originalResizeStyle),
			i(this.originalElement),
			this
		},
		_mouseCapture : function (e) {
			var i,
			s,
			n = !1;
			for (i in this.handles)
				s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart : function (i) {
			var s,
			n,
			o,
			a = this.options,
			r = this.element.position(),
			h = this.element;
			return this.resizing = !0,
			/absolute/.test(h.css("position")) ? h.css({
				position : "absolute",
				top : h.css("top"),
				left : h.css("left")
			}) : h.is(".ui-draggable") && h.css({
				position : "absolute",
				top : r.top,
				left : r.left
			}),
			this._renderProxy(),
			s = e(this.helper.css("left")),
			n = e(this.helper.css("top")),
			a.containment && (s += t(a.containment).scrollLeft() || 0, n += t(a.containment).scrollTop() || 0),
			this.offset = this.helper.offset(),
			this.position = {
				left : s,
				top : n
			},
			this.size = this._helper ? {
				width : h.outerWidth(),
				height : h.outerHeight()
			}
			 : {
				width : h.width(),
				height : h.height()
			},
			this.originalSize = this._helper ? {
				width : h.outerWidth(),
				height : h.outerHeight()
			}
			 : {
				width : h.width(),
				height : h.height()
			},
			this.originalPosition = {
				left : s,
				top : n
			},
			this.sizeDiff = {
				width : h.outerWidth() - h.width(),
				height : h.outerHeight() - h.height()
			},
			this.originalMousePosition = {
				left : i.pageX,
				top : i.pageY
			},
			this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
			o = t(".ui-resizable-" + this.axis).css("cursor"),
			t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o),
			h.addClass("ui-resizable-resizing"),
			this._propagate("start", i),
			!0
		},
		_mouseDrag : function (e) {
			var i,
			s = this.helper,
			n = {},
			o = this.originalMousePosition,
			a = this.axis,
			r = this.position.top,
			h = this.position.left,
			l = this.size.width,
			c = this.size.height,
			u = e.pageX - o.left || 0,
			d = e.pageY - o.top || 0,
			p = this._change[a];
			return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
		},
		_mouseStop : function (e) {
			this.resizing = !1;
			var i,
			s,
			n,
			o,
			a,
			r,
			h,
			l = this.options,
			c = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
					width : c.helper.width() - o,
					height : c.helper.height() - n
				}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
						top : h,
						left : r
					})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()),
			t("body").css("cursor", "auto"),
			this.element.removeClass("ui-resizable-resizing"),
			this._propagate("stop", e),
			this._helper && this.helper.remove(),
			!1
		},
		_updateVirtualBoundaries : function (t) {
			var e,
			s,
			n,
			o,
			a,
			r = this.options;
			a = {
				minWidth : i(r.minWidth) ? r.minWidth : 0,
				maxWidth : i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight : i(r.minHeight) ? r.minHeight : 0,
				maxHeight : i(r.maxHeight) ? r.maxHeight : 1 / 0
			},
			(this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, s = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), a.maxWidth > s && (a.maxWidth = s), a.maxHeight > o && (a.maxHeight = o)),
			this._vBoundaries = a
		},
		_updateCache : function (t) {
			this.offset = this.helper.offset(),
			i(t.left) && (this.position.left = t.left),
			i(t.top) && (this.position.top = t.top),
			i(t.height) && (this.size.height = t.height),
			i(t.width) && (this.size.width = t.width)
		},
		_updateRatio : function (t) {
			var e = this.position,
			s = this.size,
			n = this.axis;
			return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio),
			"sw" === n && (t.left = e.left + (s.width - t.width), t.top = null),
			"nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)),
			t
		},
		_respectSize : function (t) {
			var e = this._vBoundaries,
			s = this.axis,
			n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
			o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
			a = i(t.width) && e.minWidth && e.minWidth > t.width,
			r = i(t.height) && e.minHeight && e.minHeight > t.height,
			h = this.originalPosition.left + this.originalSize.width,
			l = this.position.top + this.size.height,
			c = /sw|nw|w/.test(s),
			u = /nw|ne|n/.test(s);
			return a && (t.width = e.minWidth),
			r && (t.height = e.minHeight),
			n && (t.width = e.maxWidth),
			o && (t.height = e.maxHeight),
			a && c && (t.left = h - e.minWidth),
			n && c && (t.left = h - e.maxWidth),
			r && u && (t.top = l - e.minHeight),
			o && u && (t.top = l - e.maxHeight),
			t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
			t
		},
		_proportionallyResize : function () {
			if (this._proportionallyResizeElements.length) {
				var t,
				e,
				i,
				s,
				n,
				o = this.helper || this.element;
				for (t = 0; this._proportionallyResizeElements.length > t; t++) {
					if (n = this._proportionallyResizeElements[t], !this.borderDif)
						for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)
							this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
					n.css({
						height : o.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width : o.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy : function () {
			var e = this.element,
			i = this.options;
			this.elementOffset = e.offset(),
			this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
					width : this.element.outerWidth() - 1,
					height : this.element.outerHeight() - 1,
					position : "absolute",
					left : this.elementOffset.left + "px",
					top : this.elementOffset.top + "px",
					zIndex : ++i.zIndex
				}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change : {
			e : function (t, e) {
				return {
					width : this.originalSize.width + e
				}
			},
			w : function (t, e) {
				var i = this.originalSize,
				s = this.originalPosition;
				return {
					left : s.left + e,
					width : i.width - e
				}
			},
			n : function (t, e, i) {
				var s = this.originalSize,
				n = this.originalPosition;
				return {
					top : n.top + i,
					height : s.height - i
				}
			},
			s : function (t, e, i) {
				return {
					height : this.originalSize.height + i
				}
			},
			se : function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw : function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne : function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw : function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate : function (e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]),
			"resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins : {},
		ui : function () {
			return {
				originalElement : this.originalElement,
				element : this.element,
				helper : this.helper,
				position : this.position,
				size : this.size,
				originalSize : this.originalSize,
				originalPosition : this.originalPosition
			}
		}
	}),
	t.ui.plugin.add("resizable", "animate", {
		stop : function (e) {
			var i = t(this).data("ui-resizable"),
			s = i.options,
			n = i._proportionallyResizeElements,
			o = n.length && /textarea/i.test(n[0].nodeName),
			a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
			r = o ? 0 : i.sizeDiff.width,
			h = {
				width : i.size.width - r,
				height : i.size.height - a
			},
			l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
			c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
					top : c,
					left : l
				}
					 : {}), {
				duration : s.animateDuration,
				easing : s.animateEasing,
				step : function () {
					var s = {
						width : parseInt(i.element.css("width"), 10),
						height : parseInt(i.element.css("height"), 10),
						top : parseInt(i.element.css("top"), 10),
						left : parseInt(i.element.css("left"), 10)
					};
					n && n.length && t(n[0]).css({
						width : s.width,
						height : s.height
					}),
					i._updateCache(s),
					i._propagate("resize", e)
				}
			})
		}
	}),
	t.ui.plugin.add("resizable", "containment", {
		start : function () {
			var i,
			s,
			n,
			o,
			a,
			r,
			h,
			l = t(this).data("ui-resizable"),
			c = l.options,
			u = l.element,
			d = c.containment,
			p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
			p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
						left : 0,
						top : 0
					}, l.containerPosition = {
						left : 0,
						top : 0
					}, l.parentData = {
						element : t(document),
						left : 0,
						top : 0,
						width : t(document).width(),
						height : t(document).height() || document.body.parentNode.scrollHeight
					}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
						s[t] = e(i.css("padding" + n))
					}), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
						height : i.innerHeight() - s[3],
						width : i.innerWidth() - s[1]
					}, n = l.containerOffset, o = l.containerSize.height, a = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a, h = t.ui.hasScroll(p) ? p.scrollHeight : o, l.parentData = {
						element : p,
						left : n.left,
						top : n.top,
						width : r,
						height : h
					}))
		},
		resize : function (e) {
			var i,
			s,
			n,
			o,
			a = t(this).data("ui-resizable"),
			r = a.options,
			h = a.containerOffset,
			l = a.position,
			c = a._aspectRatio || e.shiftKey,
			u = {
				top : 0,
				left : 0
			},
			d = a.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (u = h),
			l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? h.left : 0),
			l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? h.top : 0),
			a.offset.left = a.parentData.left + a.position.left,
			a.offset.top = a.parentData.top + a.position.top,
			i = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width),
			s = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - h.top) + a.sizeDiff.height),
			n = a.containerElement.get(0) === a.element.parent().get(0),
			o = /relative|absolute/.test(a.containerElement.css("position")),
			n && o && (i -= a.parentData.left),
			i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio)),
			s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio))
		},
		stop : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.containerOffset,
			n = e.containerPosition,
			o = e.containerElement,
			a = t(e.helper),
			r = a.offset(),
			h = a.outerWidth() - e.sizeDiff.width,
			l = a.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
				left : r.left - n.left - s.left,
				width : h,
				height : l
			}),
			e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
				left : r.left - n.left - s.left,
				width : h,
				height : l
			})
		}
	}),
	t.ui.plugin.add("resizable", "alsoResize", {
		start : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = function (e) {
				t(e).each(function () {
					var e = t(this);
					e.data("ui-resizable-alsoresize", {
						width : parseInt(e.width(), 10),
						height : parseInt(e.height(), 10),
						left : parseInt(e.css("left"), 10),
						top : parseInt(e.css("top"), 10)
					})
				})
			};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
				s(t)
			})
		},
		resize : function (e, i) {
			var s = t(this).data("ui-resizable"),
			n = s.options,
			o = s.originalSize,
			a = s.originalPosition,
			r = {
				height : s.size.height - o.height || 0,
				width : s.size.width - o.width || 0,
				top : s.position.top - a.top || 0,
				left : s.position.left - a.left || 0
			},
			h = function (e, s) {
				t(e).each(function () {
					var e = t(this),
					n = t(this).data("ui-resizable-alsoresize"),
					o = {},
					a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
					t.each(a, function (t, e) {
						var i = (n[e] || 0) + (r[e] || 0);
						i && i >= 0 && (o[e] = i || null)
					}),
					e.css(o)
				})
			};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
				h(t, e)
			})
		},
		stop : function () {
			t(this).removeData("resizable-alsoresize")
		}
	}),
	t.ui.plugin.add("resizable", "ghost", {
		start : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.size;
			e.ghost = e.originalElement.clone(),
			e.ghost.css({
				opacity : .25,
				display : "block",
				position : "relative",
				height : s.height,
				width : s.width,
				margin : 0,
				left : 0,
				top : 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
			e.ghost.appendTo(e.helper)
		},
		resize : function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.ghost.css({
				position : "relative",
				height : e.size.height,
				width : e.size.width
			})
		},
		stop : function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}),
	t.ui.plugin.add("resizable", "grid", {
		resize : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.size,
			n = e.originalSize,
			o = e.originalPosition,
			a = e.axis,
			r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
			h = r[0] || 1,
			l = r[1] || 1,
			c = Math.round((s.width - n.width) / h) * h,
			u = Math.round((s.height - n.height) / l) * l,
			d = n.width + c,
			p = n.height + u,
			f = i.maxWidth && d > i.maxWidth,
			g = i.maxHeight && p > i.maxHeight,
			m = i.minWidth && i.minWidth > d,
			v = i.minHeight && i.minHeight > p;
			i.grid = r,
			m && (d += h),
			v && (p += l),
			f && (d -= h),
			g && (p -= l),
			/^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : (e.size.width = d, e.size.height = p, e.position.top = o.top - u, e.position.left = o.left - c)
		}
	})
}
(jQuery), function (t) {
	t.widget("ui.selectable", t.ui.mouse, {
		version : "1.10.3",
		options : {
			appendTo : "body",
			autoRefresh : !0,
			distance : 0,
			filter : "*",
			tolerance : "touch",
			selected : null,
			selecting : null,
			start : null,
			stop : null,
			unselected : null,
			unselecting : null
		},
		_create : function () {
			var e,
			i = this;
			this.element.addClass("ui-selectable"),
			this.dragged = !1,
			this.refresh = function () {
				e = t(i.options.filter, i.element[0]),
				e.addClass("ui-selectee"),
				e.each(function () {
					var e = t(this),
					i = e.offset();
					t.data(this, "selectable-item", {
						element : this,
						$element : e,
						left : i.left,
						top : i.top,
						right : i.left + e.outerWidth(),
						bottom : i.top + e.outerHeight(),
						startselected : !1,
						selected : e.hasClass("ui-selected"),
						selecting : e.hasClass("ui-selecting"),
						unselecting : e.hasClass("ui-unselecting")
					})
				})
			},
			this.refresh(),
			this.selectees = e.addClass("ui-selectee"),
			this._mouseInit(),
			this.helper = t("<div class='ui-selectable-helper'></div>")
		},
		_destroy : function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
			this.element.removeClass("ui-selectable ui-selectable-disabled"),
			this._mouseDestroy()
		},
		_mouseStart : function (e) {
			var i = this,
			s = this.options;
			this.opos = [e.pageX, e.pageY],
			this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
					left : e.pageX,
					top : e.pageY,
					width : 0,
					height : 0
				}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
					var s = t.data(this, "selectable-item");
					s.startselected = !0,
					e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
							unselecting : s.element
						}))
				}), t(e.target).parents().addBack().each(function () {
					var s,
					n = t.data(this, "selectable-item");
					return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
							selecting : n.element
						}) : i._trigger("unselecting", e, {
							unselecting : n.element
						}), !1) : undefined
				}))
		},
		_mouseDrag : function (e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i,
				s = this,
				n = this.options,
				o = this.opos[0],
				a = this.opos[1],
				r = e.pageX,
				h = e.pageY;
				return o > r && (i = r, r = o, o = i),
				a > h && (i = h, h = a, a = i),
				this.helper.css({
					left : o,
					top : a,
					width : r - o,
					height : h - a
				}),
				this.selectees.each(function () {
					var i = t.data(this, "selectable-item"),
					l = !1;
					i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || o > i.right || i.top > h || a > i.bottom) : "fit" === n.tolerance && (l = i.left > o && r > i.right && i.top > a && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
									selecting : i.element
								}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
										unselecting : i.element
									}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
										unselecting : i.element
									})))))
				}),
				!1
			}
		},
		_mouseStop : function (e) {
			var i = this;
			return this.dragged = !1,
			t(".ui-unselecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"),
				s.unselecting = !1,
				s.startselected = !1,
				i._trigger("unselected", e, {
					unselected : s.element
				})
			}),
			t(".ui-selecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"),
				s.selecting = !1,
				s.selected = !0,
				s.startselected = !0,
				i._trigger("selected", e, {
					selected : s.element
				})
			}),
			this._trigger("stop", e),
			this.helper.remove(),
			!1
		}
	})
}
(jQuery), function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}
	function i(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version : "1.10.3",
		widgetEventPrefix : "sort",
		ready : !1,
		options : {
			appendTo : "parent",
			axis : !1,
			connectWith : !1,
			containment : !1,
			cursor : "auto",
			cursorAt : !1,
			dropOnEmpty : !0,
			forcePlaceholderSize : !1,
			forceHelperSize : !1,
			grid : !1,
			handle : !1,
			helper : "original",
			items : "> *",
			opacity : !1,
			placeholder : !1,
			revert : !1,
			scroll : !0,
			scrollSensitivity : 20,
			scrollSpeed : 20,
			scope : "default",
			tolerance : "intersect",
			zIndex : 1e3,
			activate : null,
			beforeStop : null,
			change : null,
			deactivate : null,
			out : null,
			over : null,
			receive : null,
			remove : null,
			sort : null,
			start : null,
			stop : null,
			update : null
		},
		_create : function () {
			var t = this.options;
			this.containerCache = {},
			this.element.addClass("ui-sortable"),
			this.refresh(),
			this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1,
			this.offset = this.element.offset(),
			this._mouseInit(),
			this.ready = !0
		},
		_destroy : function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled"),
			this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--)
				this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption : function (e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture : function (e, i) {
			var s = null,
			n = !1,
			o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
					return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
				}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
						this === e.target && (n = !0)
					}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart : function (e, i, s) {
			var n,
			o,
			a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top : this.offset.top - this.margins.top,
					left : this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click : {
						left : e.pageX - this.offset.left,
						top : e.pageY - this.offset.top
					},
					parent : this._getParentOffset(),
					relative : this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
					prev : this.currentItem.prev()[0],
					parent : this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--)
					this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this),
			t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
			this.dragging = !0,
			this.helper.addClass("ui-sortable-helper"),
			this._mouseDrag(e),
			!0
		},
		_mouseDrag : function (e) {
			var i,
			s,
			n,
			o,
			a = this.options,
			r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
						break;
					this._rearrange(e, s),
					this._trigger("change", e, this._uiHash());
					break
				}
			return this._contactContainers(e),
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			this._trigger("sort", e, this._uiHash()),
			this.lastPositionAbs = this.positionAbs,
			!1
		},
		_mouseStop : function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
					n = this.placeholder.offset(),
					o = this.options.axis,
					a = {};
					o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
					o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
					this.reverting = !0,
					t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else
					this._clear(e, i);
				return !1
			}
		},
		cancel : function () {
			if (this.dragging) {
				this._mouseUp({
					target : null
				}),
				"original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--)
					this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
					helper : null,
					dragging : !1,
					reverting : !1,
					_noFinalSort : null
				}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
			this
		},
		serialize : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			s = [];
			return e = e || {},
			t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}),
			!s.length && e.key && s.push(e.key + "="),
			s.join("&")
		},
		toArray : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			s = [];
			return e = e || {},
			i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}),
			s
		},
		_intersectsWith : function (t) {
			var e = this.positionAbs.left,
			i = e + this.helperProportions.width,
			s = this.positionAbs.top,
			n = s + this.helperProportions.height,
			o = t.left,
			a = o + t.width,
			r = t.top,
			h = r + t.height,
			l = this.offset.click.top,
			c = this.offset.click.left,
			u = "x" === this.options.axis || s + l > r && h > s + l,
			d = "y" === this.options.axis || e + c > o && a > e + c,
			p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer : function (t) {
			var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
			s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
			n = i && s,
			o = this._getDragVerticalDirection(),
			a = this._getDragHorizontalDirection();
			return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
		},
		_intersectsWithSides : function (t) {
			var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
			s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
			n = this._getDragVerticalDirection(),
			o = this._getDragHorizontalDirection();
			return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
		},
		_getDragVerticalDirection : function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection : function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh : function (t) {
			return this._refreshItems(t),
			this.refreshPositions(),
			this
		},
		_connectWith : function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery : function (e) {
			var i,
			s,
			n,
			o,
			a = [],
			r = [],
			h = this._connectWith();
			if (h && e)
				for (i = h.length - 1; i >= 0; i--)
					for (n = t(h[i]), s = n.length - 1; s >= 0; s--)
						o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
			for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
							options : this.options,
							item : this.currentItem
						}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--)
				r[i][0].each(function () {
					a.push(this)
				});
			return t(a)
		},
		_removeCurrentsFromItems : function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
					for (var i = 0; e.length > i; i++)
						if (e[i] === t.item[0])
							return !1;
					return !0
				})
		},
		_refreshItems : function (e) {
			this.items = [],
			this.containers = [this];
			var i,
			s,
			n,
			o,
			a,
			r,
			h,
			l,
			c = this.items,
			u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item : this.currentItem
					}) : t(this.options.items, this.element), this]],
			d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i]), s = n.length - 1; s >= 0; s--)
						o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
										item : this.currentItem
									}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (i = u.length - 1; i >= 0; i--)
				for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
					h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
						item : h,
						instance : a,
						width : 0,
						height : 0,
						left : 0,
						top : 0
					})
		},
		refreshPositions : function (e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i,
			s,
			n,
			o;
			for (i = this.items.length - 1; i >= 0; i--)
				s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers)
				this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--)
					o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder : function (e) {
			e = e || this;
			var i,
			s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
					element : function () {
						var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tr" === s ? e.currentItem.children().each(function () {
							t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
						}) : "img" === s && n.attr("src", e.currentItem.attr("src")),
						i || n.css("visibility", "hidden"),
						n
					},
					update : function (t, n) {
						(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
					}
				}),
			e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
			e.currentItem.after(e.placeholder),
			s.placeholder.update(e, e.placeholder)
		},
		_contactContainers : function (s) {
			var n,
			o,
			a,
			r,
			h,
			l,
			c,
			u,
			d,
			p,
			f = null,
			g = null;
			for (n = this.containers.length - 1; n >= 0; n--)
				if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (f && t.contains(this.containers[n].element[0], f.element[0]))
							continue;
						f = this.containers[n],
						g = n
					} else
						this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
			if (f)
				if (1 === this.containers.length)
					this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
				else {
					for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)
						t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
					if (!r && !this.options.dropOnEmpty)
						return;
					if (this.currentContainer === this.containers[g])
						return;
					r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0),
					this._trigger("change", s, this._uiHash()),
					this.containers[g]._trigger("change", s, this._uiHash(this)),
					this.currentContainer = this.containers[g],
					this.options.placeholder.update(this.currentContainer, this.placeholder),
					this.containers[g]._trigger("over", s, this._uiHash(this)),
					this.containers[g].containerCache.over = 1
				}
		},
		_createHelper : function (e) {
			var i = this.options,
			s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
			s[0] === this.currentItem[0] && (this._storedCSS = {
					width : this.currentItem[0].style.width,
					height : this.currentItem[0].style.height,
					position : this.currentItem.css("position"),
					top : this.currentItem.css("top"),
					left : this.currentItem.css("left")
				}),
			(!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
			(!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
			s
		},
		_adjustOffsetFromHelper : function (e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
					left : +e[0],
					top : +e[1] || 0
				}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset : function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			(this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top : 0,
					left : 0
				}), {
				top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset : function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top : 0,
				left : 0
			}
		},
		_cacheMargins : function () {
			this.margins = {
				left : parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top : parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions : function () {
			this.helperProportions = {
				width : this.helper.outerWidth(),
				height : this.helper.outerHeight()
			}
		},
		_setContainment : function () {
			var e,
			i,
			s,
			n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode),
			("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
			/^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo : function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
			n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			o = /(html|body)/i.test(n[0].tagName);
			return {
				top : i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
				left : i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition : function (e) {
			var i,
			s,
			n = this.options,
			o = e.pageX,
			a = e.pageY,
			r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
			this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top : a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left : o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange : function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
			this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear : function (t, e) {
			this.reverting = !1;
			var i,
			s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS)
					("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else
				this.currentItem.show();
			for (this.fromOutside && !e && s.push(function (t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (s.push(function (t) {
							this._trigger("remove", t, this._uiHash())
						}), s.push(function (t) {
							return function (e) {
								t._trigger("receive", e, this._uiHash(this))
							}
						}
							.call(this, this.currentContainer)), s.push(function (t) {
							return function (e) {
								t._trigger("update", e, this._uiHash(this))
							}
						}
							.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)
				e || s.push(function (t) {
					return function (e) {
						t._trigger("deactivate", e, this._uiHash(this))
					}
				}
					.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function (t) {
						return function (e) {
							t._trigger("out", e, this._uiHash(this))
						}
					}
						.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++)
						s[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1,
				!1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (i = 0; s.length > i; i++)
					s[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1,
			!0
		},
		_trigger : function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash : function (e) {
			var i = e || this;
			return {
				helper : i.helper,
				placeholder : i.placeholder || t([]),
				position : i.position,
				originalPosition : i.originalPosition,
				offset : i.positionAbs,
				item : i.currentItem,
				sender : e ? e.element : null
			}
		}
	})
}
(jQuery), function (t, e) {
	var i = "ui-effects-";
	t.effects = {
		effect : {}

	},
	function (t, e) {
		function i(t, e, i) {
			var s = u[e.type] || {};
			return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
		}
		function s(i) {
			var s = l(),
			n = s._rgba = [];
			return i = i.toLowerCase(),
			f(h, function (t, o) {
				var a,
				r = o.re.exec(i),
				h = r && o.parse(r),
				l = o.space || "rgba";
				return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
			}),
			n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
		}
		function n(t, e, i) {
			return i = (i + 1) % 1,
			1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
		}
		var o,
		a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		r = /^([\-+])=\s*(\d+\.?\d*)/,
		h = [{
				re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (t) {
					return [t[1], t[2], t[3], t[4]]
				}
			}, {
				re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (t) {
					return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
				}
			}, {
				re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse : function (t) {
					return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
				}
			}, {
				re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse : function (t) {
					return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
				}
			}, {
				re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space : "hsla",
				parse : function (t) {
					return [t[1], t[2] / 100, t[3] / 100, t[4]]
				}
			}
		],
		l = t.Color = function (e, i, s, n) {
			return new t.Color.fn.parse(e, i, s, n)
		},
		c = {
			rgba : {
				props : {
					red : {
						idx : 0,
						type : "byte"
					},
					green : {
						idx : 1,
						type : "byte"
					},
					blue : {
						idx : 2,
						type : "byte"
					}
				}
			},
			hsla : {
				props : {
					hue : {
						idx : 0,
						type : "degrees"
					},
					saturation : {
						idx : 1,
						type : "percent"
					},
					lightness : {
						idx : 2,
						type : "percent"
					}
				}
			}
		},
		u = {
			"byte" : {
				floor : !0,
				max : 255
			},
			percent : {
				max : 1
			},
			degrees : {
				mod : 360,
				floor : !0
			}
		},
		d = l.support = {},
		p = t("<p>")[0],
		f = t.each;
		p.style.cssText = "background-color:rgba(1,1,1,.5)",
		d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
		f(c, function (t, e) {
			e.cache = "_" + t,
			e.props.alpha = {
				idx : 3,
				type : "percent",
				def : 1
			}
		}),
		l.fn = t.extend(l.prototype, {
				parse : function (n, a, r, h) {
					if (n === e)
						return this._rgba = [null, null, null, null], this;
					(n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
					var u = this,
					d = t.type(n),
					p = this._rgba = [];
					return a !== e && (n = [n, a, r, h], d = "array"),
					"string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
							p[e.idx] = i(n[e.idx], e)
						}), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
							n[e.cache] && (u[e.cache] = n[e.cache].slice())
						}) : f(c, function (e, s) {
							var o = s.cache;
							f(s.props, function (t, e) {
								if (!u[o] && s.to) {
									if ("alpha" === t || null == n[t])
										return;
									u[o] = s.to(u._rgba)
								}
								u[o][e.idx] = i(n[t], e, !0)
							}),
							u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
						}), this) : e
				},
				is : function (t) {
					var i = l(t),
					s = !0,
					n = this;
					return f(c, function (t, o) {
						var a,
						r = i[o.cache];
						return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
								return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
							})),
						s
					}),
					s
				},
				_space : function () {
					var t = [],
					e = this;
					return f(c, function (i, s) {
						e[s.cache] && t.push(i)
					}),
					t.pop()
				},
				transition : function (t, e) {
					var s = l(t),
					n = s._space(),
					o = c[n],
					a = 0 === this.alpha() ? l("transparent") : this,
					r = a[o.cache] || o.to(a._rgba),
					h = r.slice();
					return s = s[o.cache],
					f(o.props, function (t, n) {
						var o = n.idx,
						a = r[o],
						l = s[o],
						c = u[n.type] || {};
						null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
					}),
					this[n](h)
				},
				blend : function (e) {
					if (1 === this._rgba[3])
						return this;
					var i = this._rgba.slice(),
					s = i.pop(),
					n = l(e)._rgba;
					return l(t.map(i, function (t, e) {
							return (1 - s) * n[e] + s * t
						}))
				},
				toRgbaString : function () {
					var e = "rgba(",
					i = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("),
					e + i.join() + ")"
				},
				toHslaString : function () {
					var e = "hsla(",
					i = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0),
							e && 3 > e && (t = Math.round(100 * t) + "%"),
							t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("),
					e + i.join() + ")"
				},
				toHexString : function (e) {
					var i = this._rgba.slice(),
					s = i.pop();
					return e && i.push(~~(255 * s)),
					"#" + t.map(i, function (t) {
						return t = (t || 0).toString(16),
						1 === t.length ? "0" + t : t
					}).join("")
				},
				toString : function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}),
		l.fn.parse.prototype = l.fn,
		c.hsla.to = function (t) {
			if (null == t[0] || null == t[1] || null == t[2])
				return [null, null, null, t[3]];
			var e,
			i,
			s = t[0] / 255,
			n = t[1] / 255,
			o = t[2] / 255,
			a = t[3],
			r = Math.max(s, n, o),
			h = Math.min(s, n, o),
			l = r - h,
			c = r + h,
			u = .5 * c;
			return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240,
			i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c),
			[Math.round(e) % 360, i, u, null == a ? 1 : a]
		},
		c.hsla.from = function (t) {
			if (null == t[0] || null == t[1] || null == t[2])
				return [null, null, null, t[3]];
			var e = t[0] / 360,
			i = t[1],
			s = t[2],
			o = t[3],
			a = .5 >= s ? s * (1 + i) : s + i - s * i,
			r = 2 * s - a;
			return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
		},
		f(c, function (s, n) {
			var o = n.props,
			a = n.cache,
			h = n.to,
			c = n.from;
			l.fn[s] = function (s) {
				if (h && !this[a] && (this[a] = h(this._rgba)), s === e)
					return this[a].slice();
				var n,
				r = t.type(s),
				u = "array" === r || "object" === r ? s : arguments,
				d = this[a].slice();
				return f(o, function (t, e) {
					var s = u["object" === r ? t : e.idx];
					null == s && (s = d[e.idx]),
					d[e.idx] = i(s, e)
				}),
				c ? (n = l(c(d)), n[a] = d, n) : l(d)
			},
			f(o, function (e, i) {
				l.fn[e] || (l.fn[e] = function (n) {
					var o,
					a = t.type(n),
					h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
					l = this[h](),
					c = l[i.idx];
					return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
				})
			})
		}),
		l.hook = function (e) {
			var i = e.split(" ");
			f(i, function (e, i) {
				t.cssHooks[i] = {
					set : function (e, n) {
						var o,
						a,
						r = "";
						if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
							if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
								for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; )
									try {
										r = t.css(a, "backgroundColor"),
										a = a.parentNode
									} catch (h) {}

								n = n.blend(r && "transparent" !== r ? r : "_default")
							}
							n = n.toRgbaString()
						}
						try {
							e.style[i] = n
						} catch (h) {}

					}
				},
				t.fx.step[i] = function (e) {
					e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0),
					t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
				}
			})
		},
		l.hook(a),
		t.cssHooks.borderColor = {
			expand : function (t) {
				var e = {};
				return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
					e["border" + s + "Color"] = t
				}),
				e
			}
		},
		o = t.Color.names = {
			aqua : "#00ffff",
			black : "#000000",
			blue : "#0000ff",
			fuchsia : "#ff00ff",
			gray : "#808080",
			green : "#008000",
			lime : "#00ff00",
			maroon : "#800000",
			navy : "#000080",
			olive : "#808000",
			purple : "#800080",
			red : "#ff0000",
			silver : "#c0c0c0",
			teal : "#008080",
			white : "#ffffff",
			yellow : "#ffff00",
			transparent : [null, null, null, 0],
			_default : "#ffffff"
		}
	}
	(jQuery),
	function () {
		function i(e) {
			var i,
			s,
			n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
			o = {};
			if (n && n.length && n[0] && n[n[0]])
				for (s = n.length; s--; )
					i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
			else
				for (i in n)
					"string" == typeof n[i] && (o[i] = n[i]);
			return o
		}
		function s(e, i) {
			var s,
			n,
			a = {};
			for (s in i)
				n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
			return a
		}
		var n = ["add", "remove", "toggle"],
		o = {
			border : 1,
			borderBottom : 1,
			borderColor : 1,
			borderLeft : 1,
			borderRight : 1,
			borderTop : 1,
			borderWidth : 1,
			margin : 1,
			padding : 1
		};
		t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
			t.fx.step[i] = function (t) {
				("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
			}
		}),
		t.fn.addBack || (t.fn.addBack = function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}),
		t.effects.animateClass = function (e, o, a, r) {
			var h = t.speed(o, a, r);
			return this.queue(function () {
				var o,
				a = t(this),
				r = a.attr("class") || "",
				l = h.children ? a.find("*").addBack() : a;
				l = l.map(function () {
						var e = t(this);
						return {
							el : e,
							start : i(this)
						}
					}),
				o = function () {
					t.each(n, function (t, i) {
						e[i] && a[i + "Class"](e[i])
					})
				},
				o(),
				l = l.map(function () {
						return this.end = i(this.el[0]),
						this.diff = s(this.start, this.end),
						this
					}),
				a.attr("class", r),
				l = l.map(function () {
						var e = this,
						i = t.Deferred(),
						s = t.extend({}, h, {
								queue : !1,
								complete : function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s),
						i.promise()
					}),
				t.when.apply(t, l.get()).done(function () {
					o(),
					t.each(arguments, function () {
						var e = this.el;
						t.each(this.diff, function (t) {
							e.css(t, "")
						})
					}),
					h.complete.call(a[0])
				})
			})
		},
		t.fn.extend({
			addClass : function (e) {
				return function (i, s, n, o) {
					return s ? t.effects.animateClass.call(this, {
						add : i
					}, s, n, o) : e.apply(this, arguments)
				}
			}
			(t.fn.addClass),
			removeClass : function (e) {
				return function (i, s, n, o) {
					return arguments.length > 1 ? t.effects.animateClass.call(this, {
						remove : i
					}, s, n, o) : e.apply(this, arguments)
				}
			}
			(t.fn.removeClass),
			toggleClass : function (i) {
				return function (s, n, o, a, r) {
					return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
						add : s
					}
						 : {
						remove : s
					}, o, a, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
						toggle : s
					}, n, o, a)
				}
			}
			(t.fn.toggleClass),
			switchClass : function (e, i, s, n, o) {
				return t.effects.animateClass.call(this, {
					add : i,
					remove : e
				}, s, n, o)
			}
		})
	}
	(),
	function () {
		function s(e, i, s, n) {
			return t.isPlainObject(e) && (i = e, e = e.effect),
			e = {
				effect : e
			},
			null == i && (i = {}),
			t.isFunction(i) && (n = i, s = null, i = {}),
			("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}),
			t.isFunction(s) && (n = s, s = null),
			i && t.extend(e, i),
			s = s || i.duration,
			e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
			e.complete = n || i.complete,
			e
		}
		function n(e) {
			return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
		}
		t.extend(t.effects, {
			version : "1.10.3",
			save : function (t, e) {
				for (var s = 0; e.length > s; s++)
					null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
			},
			restore : function (t, s) {
				var n,
				o;
				for (o = 0; s.length > o; o++)
					null !== s[o] && (n = t.data(i + s[o]), n === e && (n = ""), t.css(s[o], n))
			},
			setMode : function (t, e) {
				return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
				e
			},
			getBaseline : function (t, e) {
				var i,
				s;
				switch (t[0]) {
				case "top":
					i = 0;
					break;
				case "middle":
					i = .5;
					break;
				case "bottom":
					i = 1;
					break;
				default:
					i = t[0] / e.height
				}
				switch (t[1]) {
				case "left":
					s = 0;
					break;
				case "center":
					s = .5;
					break;
				case "right":
					s = 1;
					break;
				default:
					s = t[1] / e.width
				}
				return {
					x : s,
					y : i
				}
			},
			createWrapper : function (e) {
				if (e.parent().is(".ui-effects-wrapper"))
					return e.parent();
				var i = {
					width : e.outerWidth(!0),
					height : e.outerHeight(!0),
					"float" : e.css("float")
				},
				s = t("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize : "100%",
						background : "transparent",
						border : "none",
						margin : 0,
						padding : 0
					}),
				n = {
					width : e.width(),
					height : e.height()
				},
				o = document.activeElement;
				try {
					o.id
				} catch (a) {
					o = document.body
				}
				return e.wrap(s),
				(e[0] === o || t.contains(e[0], o)) && t(o).focus(),
				s = e.parent(),
				"static" === e.css("position") ? (s.css({
						position : "relative"
					}), e.css({
						position : "relative"
					})) : (t.extend(i, {
						position : e.css("position"),
						zIndex : e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s),
						isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position : "relative",
						top : 0,
						left : 0,
						right : "auto",
						bottom : "auto"
					})),
				e.css(n),
				s.css(i).show()
			},
			removeWrapper : function (e) {
				var i = document.activeElement;
				return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
				e
			},
			setTransition : function (e, i, s, n) {
				return n = n || {},
				t.each(i, function (t, i) {
					var o = e.cssUnit(i);
					o[0] > 0 && (n[i] = o[0] * s + o[1])
				}),
				n
			}
		}),
		t.fn.extend({
			effect : function () {
				function e(e) {
					function s() {
						t.isFunction(o) && o.call(n[0]),
						t.isFunction(e) && e()
					}
					var n = t(this),
					o = i.complete,
					r = i.mode;
					(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : a.call(n[0], i, s)
				}
				var i = s.apply(this, arguments),
				n = i.mode,
				o = i.queue,
				a = t.effects.effect[i.effect];
				return t.fx.off || !a ? n ? this[n](i.duration, i.complete) : this.each(function () {
					i.complete && i.complete.call(this)
				}) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
			},
			show : function (t) {
				return function (e) {
					if (n(e))
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "show",
					this.effect.call(this, i)
				}
			}
			(t.fn.show),
			hide : function (t) {
				return function (e) {
					if (n(e))
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "hide",
					this.effect.call(this, i)
				}
			}
			(t.fn.hide),
			toggle : function (t) {
				return function (e) {
					if (n(e) || "boolean" == typeof e)
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "toggle",
					this.effect.call(this, i)
				}
			}
			(t.fn.toggle),
			cssUnit : function (e) {
				var i = this.css(e),
				s = [];
				return t.each(["em", "px", "%", "pt"], function (t, e) {
					i.indexOf(e) > 0 && (s = [parseFloat(i), e])
				}),
				s
			}
		})
	}
	(),
	function () {
		var e = {};
		t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
			e[i] = function (e) {
				return Math.pow(e, t + 2)
			}
		}),
		t.extend(e, {
			Sine : function (t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			Circ : function (t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			Elastic : function (t) {
				return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
			},
			Back : function (t) {
				return t * t * (3 * t - 2)
			},
			Bounce : function (t) {
				for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
			}
		}),
		t.each(e, function (e, i) {
			t.easing["easeIn" + e] = i,
			t.easing["easeOut" + e] = function (t) {
				return 1 - i(1 - t)
			},
			t.easing["easeInOut" + e] = function (t) {
				return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
			}
		})
	}
	()
}
(jQuery), function (t) {
	var e = 0,
	i = {},
	s = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
	s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show",
	t.widget("ui.accordion", {
		version : "1.10.3",
		options : {
			active : 0,
			animate : {},
			collapsible : !1,
			event : "click",
			header : "> li > :first-child,> :not(li):even",
			heightStyle : "auto",
			icons : {
				activeHeader : "ui-icon-triangle-1-s",
				header : "ui-icon-triangle-1-e"
			},
			activate : null,
			beforeActivate : null
		},
		_create : function () {
			var e = this.options;
			this.prevShow = this.prevHide = t(),
			this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
			e.collapsible || e.active !== !1 && null != e.active || (e.active = 0),
			this._processPanels(),
			0 > e.active && (e.active += this.headers.length),
			this._refresh()
		},
		_getCreateEventData : function () {
			return {
				header : this.active,
				panel : this.active.length ? this.active.next() : t(),
				content : this.active.length ? this.active.next() : t()
			}
		},
		_createIcons : function () {
			var e = this.options.icons;
			e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons : function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy : function () {
			var t;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
			this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}),
			this._destroyIcons(),
			t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
					/^ui-accordion/.test(this.id) && this.removeAttribute("id")
				}),
			"content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption : function (t, e) {
			return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
		},
		_keydown : function (e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
				s = this.headers.length,
				n = this.headers.index(e.target),
				o = !1;
				switch (e.keyCode) {
				case i.RIGHT:
				case i.DOWN:
					o = this.headers[(n + 1) % s];
					break;
				case i.LEFT:
				case i.UP:
					o = this.headers[(n - 1 + s) % s];
					break;
				case i.SPACE:
				case i.ENTER:
					this._eventHandler(e);
					break;
				case i.HOME:
					o = this.headers[0];
					break;
				case i.END:
					o = this.headers[s - 1]
				}
				o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
			}
		},
		_panelKeyDown : function (e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
		},
		refresh : function () {
			var e = this.options;
			this._processPanels(),
			e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
			this._destroyIcons(),
			this._refresh()
		},
		_processPanels : function () {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
			this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh : function () {
			var i,
			s = this.options,
			n = s.heightStyle,
			o = this.element.parent(),
			a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
			this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
			this.active.next().addClass("ui-accordion-content-active").show(),
			this.headers.attr("role", "tab").each(function (e) {
				var i = t(this),
				s = i.attr("id"),
				n = i.next(),
				o = n.attr("id");
				s || (s = a + "-header-" + e, i.attr("id", s)),
				o || (o = a + "-panel-" + e, n.attr("id", o)),
				i.attr("aria-controls", o),
				n.attr("aria-labelledby", s)
			}).next().attr("role", "tabpanel"),
			this.headers.not(this.active).attr({
				"aria-selected" : "false",
				tabIndex : -1
			}).next().attr({
				"aria-expanded" : "false",
				"aria-hidden" : "true"
			}).hide(),
			this.active.length ? this.active.attr({
				"aria-selected" : "true",
				tabIndex : 0
			}).next().attr({
				"aria-expanded" : "true",
				"aria-hidden" : "false"
			}) : this.headers.eq(0).attr("tabIndex", 0),
			this._createIcons(),
			this._setupEvents(s.event),
			"fill" === n ? (i = o.height(), this.element.siblings(":visible").each(function () {
					var e = t(this),
					s = e.css("position");
					"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
				}), this.headers.each(function () {
					i -= t(this).outerHeight(!0)
				}), this.headers.next().each(function () {
					t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
				}).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function () {
					i = Math.max(i, t(this).css("height", "").height())
				}).height(i))
		},
		_activate : function (e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
					target : i,
					currentTarget : i,
					preventDefault : t.noop
				}))
		},
		_findActive : function (e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents : function (e) {
			var i = {
				keydown : "_keydown"
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}),
			this._off(this.headers.add(this.headers.next())),
			this._on(this.headers, i),
			this._on(this.headers.next(), {
				keydown : "_panelKeyDown"
			}),
			this._hoverable(this.headers),
			this._focusable(this.headers)
		},
		_eventHandler : function (e) {
			var i = this.options,
			s = this.active,
			n = t(e.currentTarget),
			o = n[0] === s[0],
			a = o && i.collapsible,
			r = a ? t() : n.next(),
			h = s.next(),
			l = {
				oldHeader : s,
				oldPanel : h,
				newHeader : a ? t() : n,
				newPanel : r
			};
			e.preventDefault(),
			o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = a ? !1 : this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
		},
		_toggle : function (e) {
			var i = e.newPanel,
			s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0),
			this.prevShow = i,
			this.prevHide = s,
			this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)),
			s.attr({
				"aria-expanded" : "false",
				"aria-hidden" : "true"
			}),
			s.prev().attr("aria-selected", "false"),
			i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1),
			i.attr({
				"aria-expanded" : "true",
				"aria-hidden" : "false"
			}).prev().attr({
				"aria-selected" : "true",
				tabIndex : 0
			})
		},
		_animate : function (t, e, n) {
			var o,
			a,
			r,
			h = this,
			l = 0,
			c = t.length && (!e.length || t.index() < e.index()),
			u = this.options.animate || {},
			d = c && u.down || u,
			p = function () {
				h._toggleComplete(n)
			};
			return "number" == typeof d && (r = d),
			"string" == typeof d && (a = d),
			a = a || d.easing || u.easing,
			r = r || d.duration || u.duration,
			e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
					duration : r,
					easing : a,
					step : function (t, e) {
						e.now = Math.round(t)
					}
				}), t.hide().animate(s, {
					duration : r,
					easing : a,
					complete : p,
					step : function (t, i) {
						i.now = Math.round(t),
						"height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l), l = 0)
					}
				}), undefined) : e.animate(i, r, a, p) : t.animate(s, r, a, p)
		},
		_toggleComplete : function (t) {
			var e = t.oldPanel;
			e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
			e.length && (e.parent()[0].className = e.parent()[0].className),
			this._trigger("activate", null, t)
		}
	})
}
(jQuery), function (t) {
	var e = 0;
	t.widget("ui.autocomplete", {
		version : "1.10.3",
		defaultElement : "<input>",
		options : {
			appendTo : null,
			autoFocus : !1,
			delay : 300,
			minLength : 1,
			position : {
				my : "left top",
				at : "left bottom",
				collision : "none"
			},
			source : null,
			change : null,
			close : null,
			focus : null,
			open : null,
			response : null,
			search : null,
			select : null
		},
		pending : 0,
		_create : function () {
			var e,
			i,
			s,
			n = this.element[0].nodeName.toLowerCase(),
			o = "textarea" === n,
			a = "input" === n;
			this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"),
			this.valueMethod = this.element[o || a ? "val" : "text"],
			this.isNewMenu = !0,
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
			this._on(this.element, {
				keydown : function (n) {
					if (this.element.prop("readOnly"))
						return e = !0, s = !0, i = !0, undefined;
					e = !1,
					s = !1,
					i = !1;
					var o = t.ui.keyCode;
					switch (n.keyCode) {
					case o.PAGE_UP:
						e = !0,
						this._move("previousPage", n);
						break;
					case o.PAGE_DOWN:
						e = !0,
						this._move("nextPage", n);
						break;
					case o.UP:
						e = !0,
						this._keyEvent("previous", n);
						break;
					case o.DOWN:
						e = !0,
						this._keyEvent("next", n);
						break;
					case o.ENTER:
					case o.NUMPAD_ENTER:
						this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
						break;
					case o.TAB:
						this.menu.active && this.menu.select(n);
						break;
					case o.ESCAPE:
						this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
						break;
					default:
						i = !0,
						this._searchTimeout(n)
					}
				},
				keypress : function (s) {
					if (e)
						return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
					if (!i) {
						var n = t.ui.keyCode;
						switch (s.keyCode) {
						case n.PAGE_UP:
							this._move("previousPage", s);
							break;
						case n.PAGE_DOWN:
							this._move("nextPage", s);
							break;
						case n.UP:
							this._keyEvent("previous", s);
							break;
						case n.DOWN:
							this._keyEvent("next", s)
						}
					}
				},
				input : function (t) {
					return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined)
				},
				focus : function () {
					this.selectedItem = null,
					this.previous = this._value()
				},
				blur : function (t) {
					return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined)
				}
			}),
			this._initSource(),
			this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
					role : null
				}).hide().data("ui-menu"),
			this._on(this.menu.element, {
				mousedown : function (e) {
					e.preventDefault(),
					this.cancelBlur = !0,
					this._delay(function () {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					t(e.target).closest(".ui-menu-item").length || this._delay(function () {
						var e = this;
						this.document.one("mousedown", function (s) {
							s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
						})
					})
				},
				menufocus : function (e, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)))
						return this.menu.blur(), this.document.one("mousemove", function () {
							t(e.target).trigger(e.originalEvent)
						}), undefined;
					var s = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", e, {
						item : s
					}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
				},
				menuselect : function (t, e) {
					var i = e.item.data("ui-autocomplete-item"),
					s = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
							this.previous = s,
							this.selectedItem = i
						})),
					!1 !== this._trigger("select", t, {
						item : i
					}) && this._value(i.value),
					this.term = this._value(),
					this.close(t),
					this.selectedItem = i
				}
			}),
			this.liveRegion = t("<span>", {
					role : "status",
					"aria-live" : "polite"
				}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),
			this._on(this.window, {
				beforeunload : function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy : function () {
			clearTimeout(this.searching),
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
			this.menu.element.remove(),
			this.liveRegion.remove()
		},
		_setOption : function (t, e) {
			this._super(t, e),
			"source" === t && this._initSource(),
			"appendTo" === t && this.menu.element.appendTo(this._appendTo()),
			"disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_appendTo : function () {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
			e || (e = this.element.closest(".ui-front")),
			e.length || (e = this.document[0].body),
			e
		},
		_initSource : function () {
			var e,
			i,
			s = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
				s(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
				s.xhr && s.xhr.abort(),
				s.xhr = t.ajax({
						url : i,
						data : e,
						dataType : "json",
						success : function (t) {
							n(t)
						},
						error : function () {
							n([])
						}
					})
			}) : this.source = this.options.source
		},
		_searchTimeout : function (t) {
			clearTimeout(this.searching),
			this.searching = this._delay(function () {
					this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
				}, this.options.delay)
		},
		search : function (t, e) {
			return t = null != t ? t : this._value(),
			this.term = this._value(),
			t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined
		},
		_search : function (t) {
			this.pending++,
			this.element.addClass("ui-autocomplete-loading"),
			this.cancelSearch = !1,
			this.source({
				term : t
			}, this._response())
		},
		_response : function () {
			var t = this,
			i = ++e;
			return function (s) {
				i === e && t.__response(s),
				t.pending--,
				t.pending || t.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response : function (t) {
			t && (t = this._normalize(t)),
			this._trigger("response", null, {
				content : t
			}),
			!this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close : function (t) {
			this.cancelSearch = !0,
			this._close(t)
		},
		_close : function (t) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change : function (t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item : this.selectedItem
			})
		},
		_normalize : function (e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
				return "string" == typeof e ? {
					label : e,
					value : e
				}
				 : t.extend({
					label : e.label || e.value,
					value : e.value || e.label
				}, e)
			})
		},
		_suggest : function (e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e),
			this.isNewMenu = !0,
			this.menu.refresh(),
			i.show(),
			this._resizeMenu(),
			i.position(t.extend({
					of : this.element
				}, this.options.position)),
			this.options.autoFocus && this.menu.next()
		},
		_resizeMenu : function () {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu : function (e, i) {
			var s = this;
			t.each(i, function (t, i) {
				s._renderItemData(e, i)
			})
		},
		_renderItemData : function (t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem : function (e, i) {
			return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
		},
		_move : function (t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined)
		},
		widget : function () {
			return this.menu.element
		},
		_value : function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent : function (t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		}
	}),
	t.extend(t.ui.autocomplete, {
		escapeRegex : function (t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter : function (e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e, function (t) {
				return s.test(t.label || t.value || t)
			})
		}
	}),
	t.widget("ui.autocomplete", t.ui.autocomplete, {
		options : {
			messages : {
				noResults : "No search results.",
				results : function (t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response : function (t) {
			var e;
			this._superApply(arguments),
			this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
		}
	})
}
(jQuery), function (t) {
	var e,
	i,
	s,
	n,
	o = "ui-button ui-widget ui-state-default ui-corner-all",
	a = "ui-state-hover ui-state-active ",
	r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
	h = function () {
		var e = t(this);
		setTimeout(function () {
			e.find(":ui-button").button("refresh")
		}, 1)
	},
	l = function (e) {
		var i = e.name,
		s = e.form,
		n = t([]);
		return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
					return !this.form
				})),
		n
	};
	t.widget("ui.button", {
		version : "1.10.3",
		defaultElement : "<button>",
		options : {
			disabled : null,
			text : !0,
			label : null,
			icons : {
				primary : null,
				secondary : null
			}
		},
		_create : function () {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h),
			"boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
			this._determineButtonType(),
			this.hasTitle = !!this.buttonElement.attr("title");
			var a = this,
			r = this.options,
			c = "checkbox" === this.type || "radio" === this.type,
			u = c ? "" : "ui-state-active",
			d = "ui-state-focus";
			null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
			this._hoverable(this.buttonElement),
			this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
				r.disabled || this === e && t(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function () {
				r.disabled || t(this).removeClass(u)
			}).bind("click" + this.eventNamespace, function (t) {
				r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
			}),
			this.element.bind("focus" + this.eventNamespace, function () {
				a.buttonElement.addClass(d)
			}).bind("blur" + this.eventNamespace, function () {
				a.buttonElement.removeClass(d)
			}),
			c && (this.element.bind("change" + this.eventNamespace, function () {
					n || a.refresh()
				}), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
					r.disabled || (n = !1, i = t.pageX, s = t.pageY)
				}).bind("mouseup" + this.eventNamespace, function (t) {
					r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
				})),
			"checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				return r.disabled || n ? !1 : undefined
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				if (r.disabled || n)
					return !1;
				t(this).addClass("ui-state-active"),
				a.buttonElement.attr("aria-pressed", "true");
				var e = a.element[0];
				l(e).not(e).map(function () {
					return t(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
					return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, a.document.one("mouseup", function () {
							e = null
						}), undefined)
				}).bind("mouseup" + this.eventNamespace, function () {
					return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
				}).bind("keydown" + this.eventNamespace, function (e) {
					return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
				}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
					t(this).removeClass("ui-state-active")
				}), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
					e.keyCode === t.ui.keyCode.SPACE && t(this).click()
				})),
			this._setOption("disabled", r.disabled),
			this._resetButton()
		},
		_determineButtonType : function () {
			var t,
			e,
			i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
			"checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget : function () {
			return this.buttonElement
		},
		_destroy : function () {
			this.element.removeClass("ui-helper-hidden-accessible"),
			this.buttonElement.removeClass(o + " " + a + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
			this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption : function (t, e) {
			return this._super(t, e),
			"disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
		},
		refresh : function () {
			var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			e !== this.options.disabled && this._setOption("disabled", e),
			"radio" === this.type ? l(this.element[0]).each(function () {
				t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton : function () {
			if ("input" === this.type)
				return this.options.label && this.element.val(this.options.label), undefined;
			var e = this.buttonElement.removeClass(r),
			i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
			s = this.options.icons,
			n = s.primary && s.secondary,
			o = [];
			s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"),
			e.addClass(o.join(" "))
		}
	}),
	t.widget("ui.buttonset", {
		version : "1.10.3",
		options : {
			items : "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create : function () {
			this.element.addClass("ui-buttonset")
		},
		_init : function () {
			this.refresh()
		},
		_setOption : function (t, e) {
			"disabled" === t && this.buttons.button("option", t, e),
			this._super(t, e)
		},
		refresh : function () {
			var e = "rtl" === this.element.css("direction");
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
					return t(this).button("widget")[0]
				}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy : function () {
			this.element.removeClass("ui-buttonset"),
			this.buttons.map(function () {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
}
(jQuery), function (t, e) {
	function i() {
		this._curInst = null,
		this._keyEvent = !1,
		this._disabledInputs = [],
		this._datepickerShowing = !1,
		this._inDialog = !1,
		this._mainDivId = "ui-datepicker-div",
		this._inlineClass = "ui-datepicker-inline",
		this._appendClass = "ui-datepicker-append",
		this._triggerClass = "ui-datepicker-trigger",
		this._dialogClass = "ui-datepicker-dialog",
		this._disableClass = "ui-datepicker-disabled",
		this._unselectableClass = "ui-datepicker-unselectable",
		this._currentClass = "ui-datepicker-current-day",
		this._dayOverClass = "ui-datepicker-days-cell-over",
		this.regional = [],
		this.regional[""] = {
			closeText : "Done",
			prevText : "Prev",
			nextText : "Next",
			currentText : "Today",
			monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader : "Wk",
			dateFormat : "mm/dd/yy",
			firstDay : 0,
			isRTL : !1,
			showMonthAfterYear : !1,
			yearSuffix : ""
		},
		this._defaults = {
			showOn : "focus",
			showAnim : "fadeIn",
			showOptions : {},
			defaultDate : null,
			appendText : "",
			buttonText : "...",
			buttonImage : "",
			buttonImageOnly : !1,
			hideIfNoPrevNext : !1,
			navigationAsDateFormat : !1,
			gotoCurrent : !1,
			changeMonth : !1,
			changeYear : !1,
			yearRange : "c-10:c+10",
			showOtherMonths : !1,
			selectOtherMonths : !1,
			showWeek : !1,
			calculateWeek : this.iso8601Week,
			shortYearCutoff : "+10",
			minDate : null,
			maxDate : null,
			duration : "fast",
			beforeShowDay : null,
			beforeShow : null,
			onSelect : null,
			onChangeMonthYear : null,
			onClose : null,
			numberOfMonths : 1,
			showCurrentAtPos : 0,
			stepMonths : 1,
			stepBigMonths : 12,
			altField : "",
			altFormat : "",
			constrainInput : !0,
			showButtonPanel : !1,
			autoSize : !1,
			disabled : !1
		},
		t.extend(this._defaults, this.regional[""]),
		this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}
	function s(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(i, "mouseout", function () {
			t(this).removeClass("ui-state-hover"),
			-1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
			-1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", function () {
			t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
		})
	}
	function n(e, i) {
		t.extend(e, i);
		for (var s in i)
			null == i[s] && (e[s] = i[s]);
		return e
	}
	t.extend(t.ui, {
		datepicker : {
			version : "1.10.3"
		}
	});
	var o,
	a = "datepicker";
	t.extend(i.prototype, {
		markerClassName : "hasDatepicker",
		maxRows : 4,
		_widgetDatepicker : function () {
			return this.dpDiv
		},
		setDefaults : function (t) {
			return n(this._defaults, t || {}),
			this
		},
		_attachDatepicker : function (e, i) {
			var s,
			n,
			o;
			s = e.nodeName.toLowerCase(),
			n = "div" === s || "span" === s,
			e.id || (this.uuid += 1, e.id = "dp" + this.uuid),
			o = this._newInst(t(e), n),
			o.settings = t.extend({}, i || {}),
			"input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
		},
		_newInst : function (e, i) {
			var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id : n,
				input : e,
				selectedDay : 0,
				selectedMonth : 0,
				selectedYear : 0,
				drawMonth : 0,
				drawYear : 0,
				inline : i,
				dpDiv : i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker : function (e, i) {
			var s = t(e);
			i.append = t([]),
			i.trigger = t([]),
			s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, a, i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments : function (e, i) {
			var s,
			n,
			o,
			a = this._get(i, "appendText"),
			r = this._get(i, "isRTL");
			i.append && i.append.remove(),
			a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)),
			e.unbind("focus", this._showDatepicker),
			i.trigger && i.trigger.remove(),
			s = this._get(i, "showOn"),
			("focus" === s || "both" === s) && e.focus(this._showDatepicker),
			("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
							src : o,
							alt : n,
							title : n
						}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
								src : o,
								alt : n,
								title : n
							}) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
					return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
					!1
				}))
		},
		_autoSize : function (t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e,
				i,
				s,
				n,
				o = new Date(2009, 11, 20),
				a = this._get(t, "dateFormat");
				a.match(/[DM]/) && (e = function (t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++)
						t[n].length > i && (i = t[n].length, s = n);
					return s
				}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
				t.input.attr("size", this._formatDate(t, o).length)
			}
		},
		_inlineDatepicker : function (e, i) {
			var s = t(e);
			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, a, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker : function (e, i, s, o, r) {
			var h,
			l,
			c,
			u,
			d,
			p = this._dialogInst;
			return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], a, p)),
			n(p.settings, o || {}),
			i = i && i.constructor === Date ? this._formatDate(p, i) : i,
			this._dialogInput.val(i),
			this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null,
			this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]),
			this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
			p.settings.onSelect = s,
			this._inDialog = !0,
			this.dpDiv.addClass(this._dialogClass),
			this._showDatepicker(this._dialogInput[0]),
			t.blockUI && t.blockUI(this.dpDiv),
			t.data(this._dialogInput[0], a, p),
			this
		},
		_destroyDatepicker : function (e) {
			var i,
			s = t(e),
			n = t.data(e, a);
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, a), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker : function (e) {
			var i,
			s,
			n = t(e),
			o = t.data(e, a);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
						this.disabled = !1
					}).end().filter("img").css({
						opacity : "1.0",
						cursor : ""
					})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
						return t === e ? null : t
					}))
		},
		_disableDatepicker : function (e) {
			var i,
			s,
			n = t(e),
			o = t.data(e, a);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
						this.disabled = !0
					}).end().filter("img").css({
						opacity : "0.5",
						cursor : "default"
					})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
						return t === e ? null : t
					}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker : function (t) {
			if (!t)
				return !1;
			for (var e = 0; this._disabledInputs.length > e; e++)
				if (this._disabledInputs[e] === t)
					return !0;
			return !1
		},
		_getInst : function (e) {
			try {
				return t.data(e, a)
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker : function (i, s, o) {
			var a,
			r,
			h,
			l,
			c = this._getInst(i);
			return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (a = s || {}, "string" == typeof s && (a = {}, a[s] = o), c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, a), null !== h && a.dateFormat !== e && a.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && a.dateFormat !== e && a.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in a && (a.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c)), e)
		},
		_changeDatepicker : function (t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker : function (t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker : function (t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker : function (t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e),
			i ? this._getDate(i) : null
		},
		_doKeyDown : function (e) {
			var i,
			s,
			n,
			o = t.datepicker._getInst(e.target),
			a = !0,
			r = o.dpDiv.is(".ui-datepicker-rtl");
			if (o._keyEvent = !0, t.datepicker._datepickerShowing)
				switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(),
					a = !1;
					break;
				case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv),
					n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
					i = t.datepicker._get(o, "onSelect"),
					i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(),
					!1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
					a = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
					a = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
					a = e.ctrlKey || e.metaKey,
					e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
					a = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
					a = e.ctrlKey || e.metaKey,
					e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
					a = e.ctrlKey || e.metaKey;
					break;
				default:
					a = !1
				}
			else
				36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
			a && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress : function (i) {
			var s,
			n,
			o = t.datepicker._getInst(i.target);
			return t.datepicker._get(o, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
		},
		_doKeyUp : function (e) {
			var i,
			s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal)
				try {
					i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)),
					i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
				} catch (n) {}

			return !0
		},
		_showDatepicker : function (e) {
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
				var i,
				s,
				o,
				a,
				r,
				h,
				l;
				i = t.datepicker._getInst(e),
				t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
				s = t.datepicker._get(i, "beforeShow"),
				o = s ? s.apply(e, [e, i]) : {},
				o !== !1 && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function () {
						return a |= "fixed" === t(this).css("position"),
						!a
					}), r = {
						left : t.datepicker._pos[0],
						top : t.datepicker._pos[1]
					}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
						position : "absolute",
						display : "block",
						top : "-1000px"
					}), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
						position : t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
						display : "none",
						left : r.left + "px",
						top : r.top + "px"
					}), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
			}
		},
		_updateDatepicker : function (e) {
			this.maxRows = 4,
			o = e,
			e.dpDiv.empty().append(this._generateHTML(e)),
			this._attachHandlers(e),
			e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var i,
			s = this._getNumberOfMonths(e),
			n = s[1],
			a = 17;
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
			n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"),
			e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
			e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
			e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
			e.yearshtml && (i = e.yearshtml, setTimeout(function () {
					i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
					i = e.yearshtml = null
				}, 0))
		},
		_shouldFocusInput : function (t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset : function (e, i, s) {
			var n = e.dpDiv.outerWidth(),
			o = e.dpDiv.outerHeight(),
			a = e.input ? e.input.outerWidth() : 0,
			r = e.input ? e.input.outerHeight() : 0,
			h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
			l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - a : 0,
			i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
			i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
			i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
			i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0),
			i
		},
		_findPos : function (e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
				e = e[n ? "previousSibling" : "nextSibling"];
			return i = t(e).offset(),
			[i.left, i.top]
		},
		_hideDatepicker : function (e) {
			var i,
			s,
			n,
			o,
			r = this._curInst;
			!r || e && r !== t.data(e, a) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function () {
				t.datepicker._tidyDialog(r)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
						position : "absolute",
						left : "0",
						top : "-100px"
					}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog : function (t) {
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick : function (e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
				s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate : function (e, i, s) {
			var n = t(e),
			o = this._getInst(n[0]);
			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
		},
		_gotoToday : function (e) {
			var i,
			s = t(e),
			n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()),
			this._notifyChange(n),
			this._adjustDate(s)
		},
		_selectMonthYear : function (e, i, s) {
			var n = t(e),
			o = this._getInst(n[0]);
			o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
			this._notifyChange(o),
			this._adjustDate(n)
		},
		_selectDay : function (e, i, s, n) {
			var o,
			a = t(e);
			t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
		},
		_clearDate : function (e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate : function (e, i) {
			var s,
			n = t(e),
			o = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(o),
			o.input && o.input.val(i),
			this._updateAlternate(o),
			s = this._get(o, "onSelect"),
			s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
			o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
		},
		_updateAlternate : function (e) {
			var i,
			s,
			n,
			o = this._get(e, "altField");
			o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function () {
					t(this).val(n)
				}))
		},
		noWeekends : function (t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week : function (t) {
			var e,
			i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
			e = i.getTime(),
			i.setMonth(0),
			i.setDate(1),
			Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate : function (i, s, n) {
			if (null == i || null == s)
				throw "Invalid arguments";
			if (s = "object" == typeof s ? "" + s : s + "", "" === s)
				return null;
			var o,
			a,
			r,
			h,
			l = 0,
			c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
			d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
			p = (n ? n.dayNames : null) || this._defaults.dayNames,
			f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
			g = (n ? n.monthNames : null) || this._defaults.monthNames,
			m = -1,
			v = -1,
			_ = -1,
			b = -1,
			y = !1,
			w = function (t) {
				var e = i.length > o + 1 && i.charAt(o + 1) === t;
				return e && o++,
				e
			},
			k = function (t) {
				var e = w(t),
				i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
				n = RegExp("^\\d{1," + i + "}"),
				o = s.substring(l).match(n);
				if (!o)
					throw "Missing number at position " + l;
				return l += o[0].length,
				parseInt(o[0], 10)
			},
			x = function (i, n, o) {
				var a = -1,
				r = t.map(w(i) ? o : n, function (t, e) {
						return [[e, t]]
					}).sort(function (t, e) {
						return  - (t[1].length - e[1].length)
					});
				if (t.each(r, function (t, i) {
						var n = i[1];
						return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = i[0], l += n.length, !1) : e
					}), -1 !== a)
					return a + 1;
				throw "Unknown name at position " + l
			},
			D = function () {
				if (s.charAt(l) !== i.charAt(o))
					throw "Unexpected literal at position " + l;
				l++
			};
			for (o = 0; i.length > o; o++)
				if (y)
					"'" !== i.charAt(o) || w("'") ? D() : y = !1;
				else
					switch (i.charAt(o)) {
					case "d":
						_ = k("d");
						break;
					case "D":
						x("D", d, p);
						break;
					case "o":
						b = k("o");
						break;
					case "m":
						v = k("m");
						break;
					case "M":
						v = x("M", f, g);
						break;
					case "y":
						m = k("y");
						break;
					case "@":
						h = new Date(k("@")),
						m = h.getFullYear(),
						v = h.getMonth() + 1,
						_ = h.getDate();
						break;
					case "!":
						h = new Date((k("!") - this._ticksTo1970) / 1e4),
						m = h.getFullYear(),
						v = h.getMonth() + 1,
						_ = h.getDate();
						break;
					case "'":
						w("'") ? D() : y = !0;
						break;
					default:
						D()
					}
			if (s.length > l && (r = s.substr(l), !/^\s+/.test(r)))
				throw "Extra/unparsed characters found in date: " + r;
			if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), b > -1)
				for (v = 1, _ = b; ; ) {
					if (a = this._getDaysInMonth(m, v - 1), a >= _)
						break;
					v++,
					_ -= a
				}
			if (h = this._daylightSavingAdjust(new Date(m, v - 1, _)), h.getFullYear() !== m || h.getMonth() + 1 !== v || h.getDate() !== _)
				throw "Invalid date";
			return h
		},
		ATOM : "yy-mm-dd",
		COOKIE : "D, dd M yy",
		ISO_8601 : "yy-mm-dd",
		RFC_822 : "D, d M y",
		RFC_850 : "DD, dd-M-y",
		RFC_1036 : "D, d M y",
		RFC_1123 : "D, d M yy",
		RFC_2822 : "D, d M yy",
		RSS : "D, d M y",
		TICKS : "!",
		TIMESTAMP : "@",
		W3C : "yy-mm-dd",
		_ticksTo1970 : 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate : function (t, e, i) {
			if (!e)
				return "";
			var s,
			n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
			o = (i ? i.dayNames : null) || this._defaults.dayNames,
			a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
			r = (i ? i.monthNames : null) || this._defaults.monthNames,
			h = function (e) {
				var i = t.length > s + 1 && t.charAt(s + 1) === e;
				return i && s++,
				i
			},
			l = function (t, e, i) {
				var s = "" + e;
				if (h(t))
					for (; i > s.length; )
						s = "0" + s;
				return s
			},
			c = function (t, e, i, s) {
				return h(t) ? s[e] : i[e]
			},
			u = "",
			d = !1;
			if (e)
				for (s = 0; t.length > s; s++)
					if (d)
						"'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else
						switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, o);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), a, r);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
						}
			return u
		},
		_possibleChars : function (t) {
			var e,
			i = "",
			s = !1,
			n = function (i) {
				var s = t.length > e + 1 && t.charAt(e + 1) === i;
				return s && e++,
				s
			};
			for (e = 0; t.length > e; e++)
				if (s)
					"'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else
					switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
					}
			return i
		},
		_get : function (t, i) {
			return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
		},
		_setDateFromField : function (t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
				s = t.lastVal = t.input ? t.input.val() : null,
				n = this._getDefaultDate(t),
				o = n,
				a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, s, a) || n
				} catch (r) {
					s = e ? "" : s
				}
				t.selectedDay = o.getDate(),
				t.drawMonth = t.selectedMonth = o.getMonth(),
				t.drawYear = t.selectedYear = o.getFullYear(),
				t.currentDay = s ? o.getDate() : 0,
				t.currentMonth = s ? o.getMonth() : 0,
				t.currentYear = s ? o.getFullYear() : 0,
				this._adjustInstDate(t)
			}
		},
		_getDefaultDate : function (t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate : function (e, i, s) {
			var n = function (t) {
				var e = new Date;
				return e.setDate(e.getDate() + t),
				e
			},
			o = function (i) {
				try {
					return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
				} catch (s) {}

				for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
					switch (l[2] || "d") {
					case "d":
					case "D":
						r += parseInt(l[1], 10);
						break;
					case "w":
					case "W":
						r += 7 * parseInt(l[1], 10);
						break;
					case "m":
					case "M":
						a += parseInt(l[1], 10),
						r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
						break;
					case "y":
					case "Y":
						o += parseInt(l[1], 10),
						r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
					}
					l = h.exec(i)
				}
				return new Date(o, a, r)
			},
			a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return a = a && "Invalid Date" == "" + a ? s : a,
			a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)),
			this._daylightSavingAdjust(a)
		},
		_daylightSavingAdjust : function (t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate : function (t, e, i) {
			var s = !e,
			n = t.selectedMonth,
			o = t.selectedYear,
			a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = a.getDate(),
			t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
			t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
			n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
			this._adjustInstDate(t),
			t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate : function (t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers : function (e) {
			var i = this._get(e, "stepMonths"),
			s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function () {
				var e = {
					prev : function () {
						t.datepicker._adjustDate(s, -i, "M")
					},
					next : function () {
						t.datepicker._adjustDate(s, +i, "M")
					},
					hide : function () {
						t.datepicker._hideDatepicker()
					},
					today : function () {
						t.datepicker._gotoToday(s)
					},
					selectDay : function () {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
						!1
					},
					selectMonth : function () {
						return t.datepicker._selectMonthYear(s, this, "M"),
						!1
					},
					selectYear : function () {
						return t.datepicker._selectMonthYear(s, this, "Y"),
						!1
					}
				};
				t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML : function (t) {
			var e,
			i,
			s,
			n,
			o,
			a,
			r,
			h,
			l,
			c,
			u,
			d,
			p,
			f,
			g,
			m,
			v,
			_,
			b,
			y,
			w,
			k,
			x,
			D,
			C,
			I,
			P,
			T,
			M,
			S,
			z,
			A,
			H,
			E,
			N,
			W,
			O,
			F,
			R,
			L = new Date,
			j = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
			Y = this._get(t, "isRTL"),
			B = this._get(t, "showButtonPanel"),
			V = this._get(t, "hideIfNoPrevNext"),
			K = this._get(t, "navigationAsDateFormat"),
			U = this._getNumberOfMonths(t),
			q = this._get(t, "showCurrentAtPos"),
			Q = this._get(t, "stepMonths"),
			X = 1 !== U[0] || 1 !== U[1],
			$ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
			G = this._getMinMaxDate(t, "min"),
			J = this._getMinMaxDate(t, "max"),
			Z = t.drawMonth - q,
			te = t.drawYear;
			if (0 > Z && (Z += 12, te--), J)
				for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e; )
					Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - Q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : V ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + Q, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : V ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? $ : j, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
				for (x = "", this.maxRows = 4, D = 0; U[1] > D; D++) {
					if (C = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", P = "", X) {
						if (P += "<div class='ui-datepicker-group", U[1] > 1)
							switch (D) {
							case 0:
								P += " ui-datepicker-group-first",
								I = " ui-corner-" + (Y ? "right" : "left");
								break;
							case U[1] - 1:
								P += " ui-datepicker-group-last",
								I = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								P += " ui-datepicker-group-middle",
								I = ""
							}
						P += "'>"
					}
					for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, G, J, k > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)
						M = (w + c) % 7, T += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
					for (P += T + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((z + S) / 7), H = X ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = H, E = this._daylightSavingAdjust(new Date(te, Z, 1 - z)), N = 0; H > N; N++) {
						for (P += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(E) + "</td>" : "", w = 0; 7 > w; w++)
							O = m ? m.apply(t.input ? t.input[0] : null, [E]) : [!0, ""], F = E.getMonth() !== Z, R = F && !_ || !O[0] || G && G > E || J && E > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (E.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === E.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (E.getTime() === $.getTime() ? " " + this._currentClass : "") + (E.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + E.getMonth() + "' data-year='" + E.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + E.getDate() + "</span>" : "<a class='ui-state-default" + (E.getTime() === j.getTime() ? " ui-state-highlight" : "") + (E.getTime() === $.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + E.getDate() + "</a>") + "</td>", E.setDate(E.getDate() + 1), E = this._daylightSavingAdjust(E);
						P += W + "</tr>"
					}
					Z++,
					Z > 11 && (Z = 0, te++),
					P += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && D === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
					x += P
				}
				y += x
			}
			return y += l,
			t._keyEvent = !1,
			y
		},
		_generateMonthYearHeader : function (t, e, i, s, n, o, a, r) {
			var h,
			l,
			c,
			u,
			d,
			p,
			f,
			g,
			m = this._get(t, "changeMonth"),
			v = this._get(t, "changeYear"),
			_ = this._get(t, "showMonthAfterYear"),
			b = "<div class='ui-datepicker-title'>",
			y = "";
			if (o || !m)
				y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)
					(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				y += "</select>"
			}
			if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
				if (t.yearshtml = "", o || !v)
					b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
						var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
						return isNaN(e) ? d : e
					}, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)
						t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>",
					b += t.yearshtml,
					t.yearshtml = null
				}
			return b += this._get(t, "yearSuffix"),
			_ && (b += (!o && m && v ? "" : "&#xa0;") + y),
			b += "</div>"
		},
		_adjustInstDate : function (t, e, i) {
			var s = t.drawYear + ("Y" === i ? e : 0),
			n = t.drawMonth + ("M" === i ? e : 0),
			o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
			a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
			t.selectedDay = a.getDate(),
			t.drawMonth = t.selectedMonth = a.getMonth(),
			t.drawYear = t.selectedYear = a.getFullYear(),
			("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax : function (t, e) {
			var i = this._getMinMaxDate(t, "min"),
			s = this._getMinMaxDate(t, "max"),
			n = i && i > e ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange : function (t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths : function (t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate : function (t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth : function (t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth : function (t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth : function (t, e, i, s) {
			var n = this._getNumberOfMonths(t),
			o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
			return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
			this._isInRange(t, o)
		},
		_isInRange : function (t, e) {
			var i,
			s,
			n = this._getMinMaxDate(t, "min"),
			o = this._getMinMaxDate(t, "max"),
			a = null,
			r = null,
			h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)),
			(!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
		},
		_getFormatConfig : function (t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff : e,
				dayNamesShort : this._get(t, "dayNamesShort"),
				dayNames : this._get(t, "dayNames"),
				monthNamesShort : this._get(t, "monthNamesShort"),
				monthNames : this._get(t, "monthNames")
			}
		},
		_formatDate : function (t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}),
	t.fn.datepicker = function (e) {
		if (!this.length)
			return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0),
		0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	},
	t.datepicker = new i,
	t.datepicker.initialized = !1,
	t.datepicker.uuid = (new Date).getTime(),
	t.datepicker.version = "1.10.3"
}
(jQuery), function (t) {
	var e = {
		buttons : !0,
		height : !0,
		maxHeight : !0,
		maxWidth : !0,
		minHeight : !0,
		minWidth : !0,
		width : !0
	},
	i = {
		maxHeight : !0,
		maxWidth : !0,
		minHeight : !0,
		minWidth : !0
	};
	t.widget("ui.dialog", {
		version : "1.10.3",
		options : {
			appendTo : "body",
			autoOpen : !0,
			buttons : [],
			closeOnEscape : !0,
			closeText : "close",
			dialogClass : "",
			draggable : !0,
			hide : null,
			height : "auto",
			maxHeight : null,
			maxWidth : null,
			minHeight : 150,
			minWidth : 150,
			modal : !1,
			position : {
				my : "center",
				at : "center",
				of : window,
				collision : "fit",
				using : function (e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable : !0,
			show : null,
			title : null,
			width : 300,
			beforeClose : null,
			close : null,
			drag : null,
			dragStart : null,
			dragStop : null,
			focus : null,
			open : null,
			resize : null,
			resizeStart : null,
			resizeStop : null
		},
		_create : function () {
			this.originalCss = {
				display : this.element[0].style.display,
				width : this.element[0].style.width,
				minHeight : this.element[0].style.minHeight,
				maxHeight : this.element[0].style.maxHeight,
				height : this.element[0].style.height
			},
			this.originalPosition = {
				parent : this.element.parent(),
				index : this.element.parent().children().index(this.element)
			},
			this.originalTitle = this.element.attr("title"),
			this.options.title = this.options.title || this.originalTitle,
			this._createWrapper(),
			this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
			this._createTitlebar(),
			this._createButtonPane(),
			this.options.draggable && t.fn.draggable && this._makeDraggable(),
			this.options.resizable && t.fn.resizable && this._makeResizable(),
			this._isOpen = !1
		},
		_init : function () {
			this.options.autoOpen && this.open()
		},
		_appendTo : function () {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy : function () {
			var t,
			e = this.originalPosition;
			this._destroyOverlay(),
			this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
			this.uiDialog.stop(!0, !0).remove(),
			this.originalTitle && this.element.attr("title", this.originalTitle),
			t = e.parent.children().eq(e.index),
			t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget : function () {
			return this.uiDialog
		},
		disable : t.noop,
		enable : t.noop,
		close : function (e) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
					i._trigger("close", e)
				}))
		},
		isOpen : function () {
			return this._isOpen
		},
		moveToTop : function () {
			this._moveToTop()
		},
		_moveToTop : function (t, e) {
			var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
			return i && !e && this._trigger("focus", t),
			i
		},
		open : function () {
			var e = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
					e._focusTabbable(),
					e._trigger("focus")
				}), this._trigger("open"), undefined)
		},
		_focusTabbable : function () {
			var t = this.element.find("[autofocus]");
			t.length || (t = this.element.find(":tabbable")),
			t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
			t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
			t.length || (t = this.uiDialog),
			t.eq(0).focus()
		},
		_keepFocus : function (e) {
			function i() {
				var e = this.document[0].activeElement,
				i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(),
			i.call(this),
			this._delay(i)
		},
		_createWrapper : function () {
			this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
					tabIndex : -1,
					role : "dialog"
				}).appendTo(this._appendTo()),
			this._on(this.uiDialog, {
				keydown : function (e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
						return e.preventDefault(), this.close(e), undefined;
					if (e.keyCode === t.ui.keyCode.TAB) {
						var i = this.uiDialog.find(":tabbable"),
						s = i.filter(":first"),
						n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
					}
				},
				mousedown : function (t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}),
			this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby" : this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar : function () {
			var e;
			this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
			this._on(this.uiDialogTitlebar, {
				mousedown : function (e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}),
			this.uiDialogTitlebarClose = t("<button></button>").button({
					label : this.options.closeText,
					icons : {
						primary : "ui-icon-closethick"
					},
					text : !1
				}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
			this._on(this.uiDialogTitlebarClose, {
				click : function (t) {
					t.preventDefault(),
					this.close(t)
				}
			}),
			e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
			this._title(e),
			this.uiDialog.attr({
				"aria-labelledby" : e.attr("id")
			})
		},
		_title : function (t) {
			this.options.title || t.html("&#160;"),
			t.text(this.options.title)
		},
		_createButtonPane : function () {
			this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
			this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
			this._createButtons()
		},
		_createButtons : function () {
			var e = this,
			i = this.options.buttons;
			return this.uiDialogButtonPane.remove(),
			this.uiButtonSet.empty(),
			t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function (i, s) {
					var n,
					o;
					s = t.isFunction(s) ? {
						click : s,
						text : i
					}
					 : s,
					s = t.extend({
							type : "button"
						}, s),
					n = s.click,
					s.click = function () {
						n.apply(e.element[0], arguments)
					},
					o = {
						icons : s.icons,
						text : s.showText
					},
					delete s.icons,
					delete s.showText,
					t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
				}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
		},
		_makeDraggable : function () {
			function e(t) {
				return {
					position : t.position,
					offset : t.offset
				}
			}
			var i = this,
			s = this.options;
			this.uiDialog.draggable({
				cancel : ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle : ".ui-dialog-titlebar",
				containment : "document",
				start : function (s, n) {
					t(this).addClass("ui-dialog-dragging"),
					i._blockFrames(),
					i._trigger("dragStart", s, e(n))
				},
				drag : function (t, s) {
					i._trigger("drag", t, e(s))
				},
				stop : function (n, o) {
					s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()],
					t(this).removeClass("ui-dialog-dragging"),
					i._unblockFrames(),
					i._trigger("dragStop", n, e(o))
				}
			})
		},
		_makeResizable : function () {
			function e(t) {
				return {
					originalPosition : t.originalPosition,
					originalSize : t.originalSize,
					position : t.position,
					size : t.size
				}
			}
			var i = this,
			s = this.options,
			n = s.resizable,
			o = this.uiDialog.css("position"),
			a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel : ".ui-dialog-content",
				containment : "document",
				alsoResize : this.element,
				maxWidth : s.maxWidth,
				maxHeight : s.maxHeight,
				minWidth : s.minWidth,
				minHeight : this._minHeight(),
				handles : a,
				start : function (s, n) {
					t(this).addClass("ui-dialog-resizing"),
					i._blockFrames(),
					i._trigger("resizeStart", s, e(n))
				},
				resize : function (t, s) {
					i._trigger("resize", t, e(s))
				},
				stop : function (n, o) {
					s.height = t(this).height(),
					s.width = t(this).width(),
					t(this).removeClass("ui-dialog-resizing"),
					i._unblockFrames(),
					i._trigger("resizeStop", n, e(o))
				}
			}).css("position", o)
		},
		_minHeight : function () {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position : function () {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(),
			this.uiDialog.position(this.options.position),
			t || this.uiDialog.hide()
		},
		_setOptions : function (s) {
			var n = this,
			o = !1,
			a = {};
			t.each(s, function (t, s) {
				n._setOption(t, s),
				t in e && (o = !0),
				t in i && (a[t] = s)
			}),
			o && (this._size(), this._position()),
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
		},
		_setOption : function (t, e) {
			var i,
			s,
			n = this.uiDialog;
			"dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e),
			"disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
					label : "" + e
				}), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size : function () {
			var t,
			e,
			i,
			s = this.options;
			this.element.show().css({
				width : "auto",
				minHeight : 0,
				maxHeight : "none",
				height : 0
			}),
			s.minWidth > s.width && (s.width = s.minWidth),
			t = this.uiDialog.css({
					height : "auto",
					width : s.width
				}).outerHeight(),
			e = Math.max(0, s.minHeight - t),
			i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
			"auto" === s.height ? this.element.css({
				minHeight : e,
				maxHeight : i,
				height : "auto"
			}) : this.element.height(Math.max(0, s.height - t)),
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames : function () {
			this.iframeBlocks = this.document.find("iframe").map(function () {
					var e = t(this);
					return t("<div>").css({
						position : "absolute",
						width : e.outerWidth(),
						height : e.outerHeight()
					}).appendTo(e.parent()).offset(e.offset())[0]
				})
		},
		_unblockFrames : function () {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction : function (e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay : function () {
			if (this.options.modal) {
				var e = this,
				i = this.widgetFullName;
				t.ui.dialog.overlayInstances || this._delay(function () {
					t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (s) {
						e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
					})
				}),
				this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
				this._on(this.overlay, {
					mousedown : "_keepFocus"
				}),
				t.ui.dialog.overlayInstances++
			}
		},
		_destroyOverlay : function () {
			this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
		}
	}),
	t.ui.dialog.overlayInstances = 0,
	t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
		_position : function () {
			var e,
			i = this.options.position,
			s = [],
			n = [0, 0];
			i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function (t, e) {
						+s[t] === s[t] && (n[t] = s[t], s[t] = e)
					}), i = {
						my : s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
						at : s.join(" ")
					}), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position,
			e = this.uiDialog.is(":visible"),
			e || this.uiDialog.show(),
			this.uiDialog.position(i),
			e || this.uiDialog.hide()
		}
	})
}
(jQuery), function (t) {
	var e = /up|down|vertical/,
	i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (s, n) {
		var o,
		a,
		r,
		h = t(this),
		l = ["position", "top", "bottom", "left", "right", "height", "width"],
		c = t.effects.setMode(h, s.mode || "hide"),
		u = s.direction || "up",
		d = e.test(u),
		p = d ? "height" : "width",
		f = d ? "top" : "left",
		g = i.test(u),
		m = {},
		v = "show" === c;
		h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l),
		h.show(),
		o = t.effects.createWrapper(h).css({
				overflow : "hidden"
			}),
		a = o[p](),
		r = parseFloat(o.css(f)) || 0,
		m[p] = v ? a : 0,
		g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
				position : "absolute"
			}), m[f] = v ? r : a + r),
		v && (o.css(p, 0), g || o.css(f, r + a)),
		o.animate(m, {
			duration : s.duration,
			easing : s.easing,
			queue : !1,
			complete : function () {
				"hide" === c && h.hide(),
				t.effects.restore(h, l),
				t.effects.removeWrapper(h),
				n()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.bounce = function (e, i) {
		var s,
		n,
		o,
		a = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		h = t.effects.setMode(a, e.mode || "effect"),
		l = "hide" === h,
		c = "show" === h,
		u = e.direction || "up",
		d = e.distance,
		p = e.times || 5,
		f = 2 * p + (c || l ? 1 : 0),
		g = e.duration / f,
		m = e.easing,
		v = "up" === u || "down" === u ? "top" : "left",
		_ = "up" === u || "left" === u,
		b = a.queue(),
		y = b.length;
		for ((c || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
					opacity : 1
				}, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), l && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, s = 0; p > s; s++)
			n = {},
		n[v] = (_ ? "-=" : "+=") + d,
		a.animate(n, g, m).animate(o, g, m),
		d = l ? 2 * d : d / 2;
		l && (n = {
				opacity : 0
			}, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m)),
		a.queue(function () {
			l && a.hide(),
			t.effects.restore(a, r),
			t.effects.removeWrapper(a),
			i()
		}),
		y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
		a.dequeue()
	}
}
(jQuery), function (t) {
	t.effects.effect.clip = function (e, i) {
		var s,
		n,
		o,
		a = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		h = t.effects.setMode(a, e.mode || "hide"),
		l = "show" === h,
		c = e.direction || "vertical",
		u = "vertical" === c,
		d = u ? "height" : "width",
		p = u ? "top" : "left",
		f = {};
		t.effects.save(a, r),
		a.show(),
		s = t.effects.createWrapper(a).css({
				overflow : "hidden"
			}),
		n = "IMG" === a[0].tagName ? s : a,
		o = n[d](),
		l && (n.css(d, 0), n.css(p, o / 2)),
		f[d] = l ? o : 0,
		f[p] = l ? 0 : o / 2,
		n.animate(f, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				l || a.hide(),
				t.effects.restore(a, r),
				t.effects.removeWrapper(a),
				i()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.drop = function (e, i) {
		var s,
		n = t(this),
		o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
		a = t.effects.setMode(n, e.mode || "hide"),
		r = "show" === a,
		h = e.direction || "left",
		l = "up" === h || "down" === h ? "top" : "left",
		c = "up" === h || "left" === h ? "pos" : "neg",
		u = {
			opacity : r ? 1 : 0
		};
		t.effects.save(n, o),
		n.show(),
		t.effects.createWrapper(n),
		s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
		r && n.css("opacity", 0).css(l, "pos" === c ? -s : s),
		u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s,
		n.animate(u, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === a && n.hide(),
				t.effects.restore(n, o),
				t.effects.removeWrapper(n),
				i()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.explode = function (e, i) {
		function s() {
			b.push(this),
			b.length === u * d && n()
		}
		function n() {
			p.css({
				visibility : "visible"
			}),
			t(b).remove(),
			g || p.hide(),
			i()
		}
		var o,
		a,
		r,
		h,
		l,
		c,
		u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
		d = u,
		p = t(this),
		f = t.effects.setMode(p, e.mode || "hide"),
		g = "show" === f,
		m = p.show().css("visibility", "hidden").offset(),
		v = Math.ceil(p.outerWidth() / d),
		_ = Math.ceil(p.outerHeight() / u),
		b = [];
		for (o = 0; u > o; o++)
			for (h = m.top + o * _, c = o - (u - 1) / 2, a = 0; d > a; a++)
				r = m.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
					position : "absolute",
					visibility : "visible",
					left : -a * v,
					top : -o * _
				}).parent().addClass("ui-effects-explode").css({
					position : "absolute",
					overflow : "hidden",
					width : v,
					height : _,
					left : r + (g ? l * v : 0),
					top : h + (g ? c * _ : 0),
					opacity : g ? 0 : 1
				}).animate({
					left : r + (g ? 0 : l * v),
					top : h + (g ? 0 : c * _),
					opacity : g ? 1 : 0
				}, e.duration || 500, e.easing, s)
	}
}
(jQuery), function (t) {
	t.effects.effect.fade = function (e, i) {
		var s = t(this),
		n = t.effects.setMode(s, e.mode || "toggle");
		s.animate({
			opacity : n
		}, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : i
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.fold = function (e, i) {
		var s,
		n,
		o = t(this),
		a = ["position", "top", "bottom", "left", "right", "height", "width"],
		r = t.effects.setMode(o, e.mode || "hide"),
		h = "show" === r,
		l = "hide" === r,
		c = e.size || 15,
		u = /([0-9]+)%/.exec(c),
		d = !!e.horizFirst,
		p = h !== d,
		f = p ? ["width", "height"] : ["height", "width"],
		g = e.duration / 2,
		m = {},
		v = {};
		t.effects.save(o, a),
		o.show(),
		s = t.effects.createWrapper(o).css({
				overflow : "hidden"
			}),
		n = p ? [s.width(), s.height()] : [s.height(), s.width()],
		u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]),
		h && s.css(d ? {
			height : 0,
			width : c
		}
			 : {
			height : c,
			width : 0
		}),
		m[f[0]] = h ? n[0] : c,
		v[f[1]] = h ? n[1] : 0,
		s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
			l && o.hide(),
			t.effects.restore(o, a),
			t.effects.removeWrapper(o),
			i()
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.highlight = function (e, i) {
		var s = t(this),
		n = ["backgroundImage", "backgroundColor", "opacity"],
		o = t.effects.setMode(s, e.mode || "show"),
		a = {
			backgroundColor : s.css("backgroundColor")
		};
		"hide" === o && (a.opacity = 0),
		t.effects.save(s, n),
		s.show().css({
			backgroundImage : "none",
			backgroundColor : e.color || "#ffff99"
		}).animate(a, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === o && s.hide(),
				t.effects.restore(s, n),
				i()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.pulsate = function (e, i) {
		var s,
		n = t(this),
		o = t.effects.setMode(n, e.mode || "show"),
		a = "show" === o,
		r = "hide" === o,
		h = a || "hide" === o,
		l = 2 * (e.times || 5) + (h ? 1 : 0),
		c = e.duration / l,
		u = 0,
		d = n.queue(),
		p = d.length;
		for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++)
			n.animate({
				opacity : u
			}, c, e.easing), u = 1 - u;
		n.animate({
			opacity : u
		}, c, e.easing),
		n.queue(function () {
			r && n.hide(),
			i()
		}),
		p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))),
		n.dequeue()
	}
}
(jQuery), function (t) {
	t.effects.effect.puff = function (e, i) {
		var s = t(this),
		n = t.effects.setMode(s, e.mode || "hide"),
		o = "hide" === n,
		a = parseInt(e.percent, 10) || 150,
		r = a / 100,
		h = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		};
		t.extend(e, {
			effect : "scale",
			queue : !1,
			fade : !0,
			mode : n,
			complete : i,
			percent : o ? a : 100,
			from : o ? h : {
				height : h.height * r,
				width : h.width * r,
				outerHeight : h.outerHeight * r,
				outerWidth : h.outerWidth * r
			}
		}),
		s.effect(e)
	},
	t.effects.effect.scale = function (e, i) {
		var s = t(this),
		n = t.extend(!0, {}, e),
		o = t.effects.setMode(s, e.mode || "effect"),
		a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
		r = e.direction || "both",
		h = e.origin,
		l = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		},
		c = {
			y : "horizontal" !== r ? a / 100 : 1,
			x : "vertical" !== r ? a / 100 : 1
		};
		n.effect = "size",
		n.queue = !1,
		n.complete = i,
		"effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0),
		n.from = e.from || ("show" === o ? {
				height : 0,
				width : 0,
				outerHeight : 0,
				outerWidth : 0
			}
				 : l),
		n.to = {
			height : l.height * c.y,
			width : l.width * c.x,
			outerHeight : l.outerHeight * c.y,
			outerWidth : l.outerWidth * c.x
		},
		n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)),
		s.effect(n)
	},
	t.effects.effect.size = function (e, i) {
		var s,
		n,
		o,
		a = t(this),
		r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
		h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
		l = ["width", "height", "overflow"],
		c = ["fontSize"],
		u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
		d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
		p = t.effects.setMode(a, e.mode || "effect"),
		f = e.restore || "effect" !== p,
		g = e.scale || "both",
		m = e.origin || ["middle", "center"],
		v = a.css("position"),
		_ = f ? r : h,
		b = {
			height : 0,
			width : 0,
			outerHeight : 0,
			outerWidth : 0
		};
		"show" === p && a.show(),
		s = {
			height : a.height(),
			width : a.width(),
			outerHeight : a.outerHeight(),
			outerWidth : a.outerWidth()
		},
		"toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)),
		o = {
			from : {
				y : a.from.height / s.height,
				x : a.from.width / s.width
			},
			to : {
				y : a.to.height / s.height,
				x : a.to.width / s.width
			}
		},
		("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))),
		("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(l), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)),
		t.effects.save(a, _),
		a.show(),
		t.effects.createWrapper(a),
		a.css("overflow", "hidden").css(a.from),
		m && (n = t.effects.getBaseline(m, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x),
		a.css(a.from),
		("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), a.find("*[width]").each(function () {
				var i = t(this),
				s = {
					height : i.height(),
					width : i.width(),
					outerHeight : i.outerHeight(),
					outerWidth : i.outerWidth()
				};
				f && t.effects.save(i, l),
				i.from = {
					height : s.height * o.from.y,
					width : s.width * o.from.x,
					outerHeight : s.outerHeight * o.from.y,
					outerWidth : s.outerWidth * o.from.x
				},
				i.to = {
					height : s.height * o.to.y,
					width : s.width * o.to.x,
					outerHeight : s.height * o.to.y,
					outerWidth : s.width * o.to.x
				},
				o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)),
				o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)),
				i.css(i.from),
				i.animate(i.to, e.duration, e.easing, function () {
					f && t.effects.restore(i, l)
				})
			})),
		a.animate(a.to, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				0 === a.to.opacity && a.css("opacity", a.from.opacity),
				"hide" === p && a.hide(),
				t.effects.restore(a, _),
				f || ("static" === v ? a.css({
						position : "relative",
						top : a.to.top,
						left : a.to.left
					}) : t.each(["top", "left"], function (t, e) {
						a.css(e, function (e, i) {
							var s = parseInt(i, 10),
							n = t ? a.to.left : a.to.top;
							return "auto" === i ? n + "px" : s + n + "px"
						})
					})),
				t.effects.removeWrapper(a),
				i()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.shake = function (e, i) {
		var s,
		n = t(this),
		o = ["position", "top", "bottom", "left", "right", "height", "width"],
		a = t.effects.setMode(n, e.mode || "effect"),
		r = e.direction || "left",
		h = e.distance || 20,
		l = e.times || 3,
		c = 2 * l + 1,
		u = Math.round(e.duration / c),
		d = "up" === r || "down" === r ? "top" : "left",
		p = "up" === r || "left" === r,
		f = {},
		g = {},
		m = {},
		v = n.queue(),
		_ = v.length;
		for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++)
			n.animate(g, u, e.easing).animate(m, u, e.easing);
		n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
			"hide" === a && n.hide(),
			t.effects.restore(n, o),
			t.effects.removeWrapper(n),
			i()
		}),
		_ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))),
		n.dequeue()
	}
}
(jQuery), function (t) {
	t.effects.effect.slide = function (e, i) {
		var s,
		n = t(this),
		o = ["position", "top", "bottom", "left", "right", "width", "height"],
		a = t.effects.setMode(n, e.mode || "show"),
		r = "show" === a,
		h = e.direction || "left",
		l = "up" === h || "down" === h ? "top" : "left",
		c = "up" === h || "left" === h,
		u = {};
		t.effects.save(n, o),
		n.show(),
		s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
		t.effects.createWrapper(n).css({
			overflow : "hidden"
		}),
		r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s),
		u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s,
		n.animate(u, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === a && n.hide(),
				t.effects.restore(n, o),
				t.effects.removeWrapper(n),
				i()
			}
		})
	}
}
(jQuery), function (t) {
	t.effects.effect.transfer = function (e, i) {
		var s = t(this),
		n = t(e.to),
		o = "fixed" === n.css("position"),
		a = t("body"),
		r = o ? a.scrollTop() : 0,
		h = o ? a.scrollLeft() : 0,
		l = n.offset(),
		c = {
			top : l.top - r,
			left : l.left - h,
			height : n.innerHeight(),
			width : n.innerWidth()
		},
		u = s.offset(),
		d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top : u.top - r,
				left : u.left - h,
				height : s.innerHeight(),
				width : s.innerWidth(),
				position : o ? "fixed" : "absolute"
			}).animate(c, e.duration, e.easing, function () {
				d.remove(),
				i()
			})
	}
}
(jQuery), function (t) {
	t.widget("ui.menu", {
		version : "1.10.3",
		defaultElement : "<ul>",
		delay : 300,
		options : {
			icons : {
				submenu : "ui-icon-carat-1-e"
			},
			menus : "ul",
			position : {
				my : "left top",
				at : "right top"
			},
			role : "menu",
			blur : null,
			focus : null,
			select : null
		},
		_create : function () {
			this.activeMenu = this.element,
			this.mouseHandled = !1,
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role : this.options.role,
				tabIndex : 0
			}).bind("click" + this.eventNamespace, t.proxy(function (t) {
					this.options.disabled && t.preventDefault()
				}, this)),
			this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
			this._on({
				"mousedown .ui-menu-item > a" : function (t) {
					t.preventDefault()
				},
				"click .ui-state-disabled > a" : function (t) {
					t.preventDefault()
				},
				"click .ui-menu-item:has(a)" : function (e) {
					var i = t(e.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item" : function (e) {
					var i = t(e.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
					this.focus(e, i)
				},
				mouseleave : "collapseAll",
				"mouseleave .ui-menu" : "collapseAll",
				focus : function (t, e) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					e || this.focus(t, i)
				},
				blur : function (e) {
					this._delay(function () {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown : "_keydown"
			}),
			this.refresh(),
			this._on(this.document, {
				click : function (e) {
					t(e.target).closest(".ui-menu").length || this.collapseAll(e),
					this.mouseHandled = !1
				}
			})
		},
		_destroy : function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}),
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown : function (e) {
			function i(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s,
			n,
			o,
			a,
			r,
			h = !0;
			switch (e.keyCode) {
			case t.ui.keyCode.PAGE_UP:
				this.previousPage(e);
				break;
			case t.ui.keyCode.PAGE_DOWN:
				this.nextPage(e);
				break;
			case t.ui.keyCode.HOME:
				this._move("first", "first", e);
				break;
			case t.ui.keyCode.END:
				this._move("last", "last", e);
				break;
			case t.ui.keyCode.UP:
				this.previous(e);
				break;
			case t.ui.keyCode.DOWN:
				this.next(e);
				break;
			case t.ui.keyCode.LEFT:
				this.collapse(e);
				break;
			case t.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
				break;
			case t.ui.keyCode.ENTER:
			case t.ui.keyCode.SPACE:
				this._activate(e);
				break;
			case t.ui.keyCode.ESCAPE:
				this.collapse(e);
				break;
			default:
				h = !1,
				n = this.previousFilter || "",
				o = String.fromCharCode(e.keyCode),
				a = !1,
				clearTimeout(this.filterTimer),
				o === n ? a = !0 : o = n + o,
				r = RegExp("^" + i(o), "i"),
				s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(t(this).children("a").text())
					}),
				s = a && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s,
				s.length || (o = String.fromCharCode(e.keyCode), r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
							return r.test(t(this).children("a").text())
						})),
				s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () {
								delete this.previousFilter
							}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			h && e.preventDefault()
		},
		_activate : function (t) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh : function () {
			var e,
			i = this.options.icons.submenu,
			s = this.element.find(this.options.menus);
			s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role : this.options.role,
				"aria-hidden" : "true",
				"aria-expanded" : "false"
			}).each(function () {
				var e = t(this),
				s = e.prev("a"),
				n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n),
				e.attr("aria-labelledby", s.attr("id"))
			}),
			e = s.add(this.element),
			e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex : -1,
				role : this._itemRole()
			}),
			e.children(":not(.ui-menu-item)").each(function () {
				var e = t(this);
				/[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
			}),
			e.children(".ui-state-disabled").attr("aria-disabled", "true"),
			this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole : function () {
			return {
				menu : "menuitem",
				listbox : "option"
			}
			[this.options.role]
		},
		_setOption : function (t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
			this._super(t, e)
		},
		focus : function (t, e) {
			var i,
			s;
			this.blur(t, t && "focus" === t.type),
			this._scrollIntoView(e),
			this.active = e.first(),
			s = this.active.children("a").addClass("ui-state-focus"),
			this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
			this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
			t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
					this._close()
				}, this.delay),
			i = e.children(".ui-menu"),
			i.length && /^mouse/.test(t.type) && this._startOpening(i),
			this.activeMenu = e.parent(),
			this._trigger("focus", t, {
				item : e
			})
		},
		_scrollIntoView : function (e) {
			var i,
			s,
			n,
			o,
			a,
			r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
		},
		blur : function (t, e) {
			e || clearTimeout(this.timer),
			this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
					item : this.active
				}))
		},
		_startOpening : function (t) {
			clearTimeout(this.timer),
			"true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
						this._close(),
						this._open(t)
					}, this.delay))
		},
		_open : function (e) {
			var i = t.extend({
					of : this.active
				}, this.options.position);
			clearTimeout(this.timer),
			this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
			e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll : function (e, i) {
			clearTimeout(this.timer),
			this.timer = this._delay(function () {
					var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
					s.length || (s = this.element),
					this._close(s),
					this.blur(e),
					this.activeMenu = s
				}, this.delay)
		},
		_close : function (t) {
			t || (t = this.active ? this.active.parent() : this.element),
			t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse : function (t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand : function (t) {
			var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			e && e.length && (this._open(e.parent()), this._delay(function () {
					this.focus(t, e)
				}))
		},
		next : function (t) {
			this._move("next", "first", t)
		},
		previous : function (t) {
			this._move("prev", "last", t)
		},
		isFirstItem : function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem : function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move : function (t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
			s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()),
			this.focus(i, s)
		},
		nextPage : function (e) {
			var i,
			s,
			n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
							return i = t(this),
							0 > i.offset().top - s - n
						}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
		},
		previousPage : function (e) {
			var i,
			s,
			n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
							return i = t(this),
							i.offset().top - s + n > 0
						}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
		},
		_hasScroll : function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select : function (e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item : this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0),
			this._trigger("select", e, i)
		}
	})
}
(jQuery), function (t, e) {
	function i(t, e, i) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
	}
	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}
	function n(e) {
		var i = e[0];
		return 9 === i.nodeType ? {
			width : e.width(),
			height : e.height(),
			offset : {
				top : 0,
				left : 0
			}
		}
		 : t.isWindow(i) ? {
			width : e.width(),
			height : e.height(),
			offset : {
				top : e.scrollTop(),
				left : e.scrollLeft()
			}
		}
		 : i.preventDefault ? {
			width : 0,
			height : 0,
			offset : {
				top : i.pageY,
				left : i.pageX
			}
		}
		 : {
			width : e.outerWidth(),
			height : e.outerHeight(),
			offset : e.offset()
		}
	}
	t.ui = t.ui || {};
	var o,
	a = Math.max,
	r = Math.abs,
	h = Math.round,
	l = /left|center|right/,
	c = /top|center|bottom/,
	u = /[\+\-]\d+(\.[\d]+)?%?/,
	d = /^\w+/,
	p = /%$/,
	f = t.fn.position;
	t.position = {
		scrollbarWidth : function () {
			if (o !== e)
				return o;
			var i,
			s,
			n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
			a = n.children()[0];
			return t("body").append(n),
			i = a.offsetWidth,
			n.css("overflow", "scroll"),
			s = a.offsetWidth,
			i === s && (s = n[0].clientWidth),
			n.remove(),
			o = i - s
		},
		getScrollInfo : function (e) {
			var i = e.isWindow ? "" : e.element.css("overflow-x"),
			s = e.isWindow ? "" : e.element.css("overflow-y"),
			n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
			o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
			return {
				width : o ? t.position.scrollbarWidth() : 0,
				height : n ? t.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo : function (e) {
			var i = t(e || window),
			s = t.isWindow(i[0]);
			return {
				element : i,
				isWindow : s,
				offset : i.offset() || {
					left : 0,
					top : 0
				},
				scrollLeft : i.scrollLeft(),
				scrollTop : i.scrollTop(),
				width : s ? i.width() : i.outerWidth(),
				height : s ? i.height() : i.outerHeight()
			}
		}
	},
	t.fn.position = function (e) {
		if (!e || !e.of)
			return f.apply(this, arguments);
		e = t.extend({}, e);
		var o,
		p,
		g,
		m,
		v,
		_,
		b = t(e.of),
		y = t.position.getWithinInfo(e.within),
		w = t.position.getScrollInfo(y),
		k = (e.collision || "flip").split(" "),
		x = {};
		return _ = n(b),
		b[0].preventDefault && (e.at = "left top"),
		p = _.width,
		g = _.height,
		m = _.offset,
		v = t.extend({}, m),
		t.each(["my", "at"], function () {
			var t,
			i,
			s = (e[this] || "").split(" ");
			1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]),
			s[0] = l.test(s[0]) ? s[0] : "center",
			s[1] = c.test(s[1]) ? s[1] : "center",
			t = u.exec(s[0]),
			i = u.exec(s[1]),
			x[this] = [t ? t[0] : 0, i ? i[0] : 0],
			e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
		}),
		1 === k.length && (k[1] = k[0]),
		"right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2),
		"bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2),
		o = i(x.at, p, g),
		v.left += o[0],
		v.top += o[1],
		this.each(function () {
			var n,
			l,
			c = t(this),
			u = c.outerWidth(),
			d = c.outerHeight(),
			f = s(this, "marginLeft"),
			_ = s(this, "marginTop"),
			D = u + f + s(this, "marginRight") + w.width,
			C = d + _ + s(this, "marginBottom") + w.height,
			I = t.extend({}, v),
			P = i(x.my, c.outerWidth(), c.outerHeight());
			"right" === e.my[0] ? I.left -= u : "center" === e.my[0] && (I.left -= u / 2),
			"bottom" === e.my[1] ? I.top -= d : "center" === e.my[1] && (I.top -= d / 2),
			I.left += P[0],
			I.top += P[1],
			t.support.offsetFractions || (I.left = h(I.left), I.top = h(I.top)),
			n = {
				marginLeft : f,
				marginTop : _
			},
			t.each(["left", "top"], function (i, s) {
				t.ui.position[k[i]] && t.ui.position[k[i]][s](I, {
					targetWidth : p,
					targetHeight : g,
					elemWidth : u,
					elemHeight : d,
					collisionPosition : n,
					collisionWidth : D,
					collisionHeight : C,
					offset : [o[0] + P[0], o[1] + P[1]],
					my : e.my,
					at : e.at,
					within : y,
					elem : c
				})
			}),
			e.using && (l = function (t) {
				var i = m.left - I.left,
				s = i + p - u,
				n = m.top - I.top,
				o = n + g - d,
				h = {
					target : {
						element : b,
						left : m.left,
						top : m.top,
						width : p,
						height : g
					},
					element : {
						element : c,
						left : I.left,
						top : I.top,
						width : u,
						height : d
					},
					horizontal : 0 > s ? "left" : i > 0 ? "right" : "center",
					vertical : 0 > o ? "top" : n > 0 ? "bottom" : "middle"
				};
				u > p && p > r(i + s) && (h.horizontal = "center"),
				d > g && g > r(n + o) && (h.vertical = "middle"),
				h.important = a(r(i), r(s)) > a(r(n), r(o)) ? "horizontal" : "vertical",
				e.using.call(this, t, h)
			}),
			c.offset(t.extend(I, {
					using : l
				}))
		})
	},
	t.ui.position = {
		fit : {
			left : function (t, e) {
				var i,
				s = e.within,
				n = s.isWindow ? s.scrollLeft : s.offset.left,
				o = s.width,
				r = t.left - e.collisionPosition.marginLeft,
				h = n - r,
				l = r + e.collisionWidth - o - n;
				e.collisionWidth > o ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
			},
			top : function (t, e) {
				var i,
				s = e.within,
				n = s.isWindow ? s.scrollTop : s.offset.top,
				o = e.within.height,
				r = t.top - e.collisionPosition.marginTop,
				h = n - r,
				l = r + e.collisionHeight - o - n;
				e.collisionHeight > o ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
			}
		},
		flip : {
			left : function (t, e) {
				var i,
				s,
				n = e.within,
				o = n.offset.left + n.scrollLeft,
				a = n.width,
				h = n.isWindow ? n.scrollLeft : n.offset.left,
				l = t.left - e.collisionPosition.marginLeft,
				c = l - h,
				u = l + e.collisionWidth - a - h,
				d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
				p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
				f = -2 * e.offset[0];
				0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
			},
			top : function (t, e) {
				var i,
				s,
				n = e.within,
				o = n.offset.top + n.scrollTop,
				a = n.height,
				h = n.isWindow ? n.scrollTop : n.offset.top,
				l = t.top - e.collisionPosition.marginTop,
				c = l - h,
				u = l + e.collisionHeight - a - h,
				d = "top" === e.my[1],
				p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
				f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
				g = -2 * e.offset[1];
				0 > c ? (s = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
			}
		},
		flipfit : {
			left : function () {
				t.ui.position.flip.left.apply(this, arguments),
				t.ui.position.fit.left.apply(this, arguments)
			},
			top : function () {
				t.ui.position.flip.top.apply(this, arguments),
				t.ui.position.fit.top.apply(this, arguments)
			}
		}
	},
	function () {
		var e,
		i,
		s,
		n,
		o,
		a = document.getElementsByTagName("body")[0],
		r = document.createElement("div");
		e = document.createElement(a ? "div" : "body"),
		s = {
			visibility : "hidden",
			width : 0,
			height : 0,
			border : 0,
			margin : 0,
			background : "none"
		},
		a && t.extend(s, {
			position : "absolute",
			left : "-1000px",
			top : "-1000px"
		});
		for (o in s)
			e.style[o] = s[o];
		e.appendChild(r),
		i = a || document.documentElement,
		i.insertBefore(e, i.firstChild),
		r.style.cssText = "position: absolute; left: 10.7432222px;",
		n = t(r).offset().left,
		t.support.offsetFractions = n > 10 && 11 > n,
		e.innerHTML = "",
		i.removeChild(e)
	}
	()
}
(jQuery), function (t, e) {
	t.widget("ui.progressbar", {
		version : "1.10.3",
		options : {
			max : 100,
			value : 0,
			change : null,
			complete : null
		},
		min : 0,
		_create : function () {
			this.oldValue = this.options.value = this._constrainedValue(),
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role : "progressbar",
				"aria-valuemin" : this.min
			}),
			this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
			this._refreshValue()
		},
		_destroy : function () {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
			this.valueDiv.remove()
		},
		value : function (t) {
			return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
		},
		_constrainedValue : function (t) {
			return t === e && (t = this.options.value),
			this.indeterminate = t === !1,
			"number" != typeof t && (t = 0),
			this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions : function (t) {
			var e = t.value;
			delete t.value,
			this._super(t),
			this.options.value = this._constrainedValue(e),
			this._refreshValue()
		},
		_setOption : function (t, e) {
			"max" === t && (e = Math.max(this.min, e)),
			this._super(t, e)
		},
		_percentage : function () {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue : function () {
			var e = this.options.value,
			i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
			this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
			this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
					"aria-valuemax" : this.options.max,
					"aria-valuenow" : e
				}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)),
			this.oldValue !== e && (this.oldValue = e, this._trigger("change")),
			e === this.options.max && this._trigger("complete")
		}
	})
}
(jQuery), function (t) {
	var e = 5;
	t.widget("ui.slider", t.ui.mouse, {
		version : "1.10.3",
		widgetEventPrefix : "slide",
		options : {
			animate : !1,
			distance : 0,
			max : 100,
			min : 0,
			orientation : "horizontal",
			range : !1,
			step : 1,
			value : 0,
			values : null,
			change : null,
			slide : null,
			start : null,
			stop : null
		},
		_create : function () {
			this._keySliding = !1,
			this._mouseSliding = !1,
			this._animateOff = !0,
			this._handleIndex = null,
			this._detectOrientation(),
			this._mouseInit(),
			this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
			this._refresh(),
			this._setOption("disabled", this.options.disabled),
			this._animateOff = !1
		},
		_refresh : function () {
			this._createRange(),
			this._createHandles(),
			this._setupEvents(),
			this._refreshValue()
		},
		_createHandles : function () {
			var e,
			i,
			s = this.options,
			n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
			o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
			a = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)
				a.push(o);
			this.handles = n.add(t(a.join("")).appendTo(this.element)),
			this.handle = this.handles.eq(0),
			this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange : function () {
			var e = this.options,
			i = "";
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
					left : "",
					bottom : ""
				}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
		},
		_setupEvents : function () {
			var t = this.handles.add(this.range).filter("a");
			this._off(t),
			this._on(t, this._handleEvents),
			this._hoverable(t),
			this._focusable(t)
		},
		_destroy : function () {
			this.handles.remove(),
			this.range.remove(),
			this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
			this._mouseDestroy()
		},
		_mouseCapture : function (e) {
			var i,
			s,
			n,
			o,
			a,
			r,
			h,
			l,
			c = this,
			u = this.options;
			return u.disabled ? !1 : (this.elementSize = {
					width : this.element.outerWidth(),
					height : this.element.outerHeight()
				}, this.elementOffset = this.element.offset(), i = {
					x : e.pageX,
					y : e.pageY
				}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
					var i = Math.abs(s - c.values(e));
					(n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
				}), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
						left : 0,
						top : 0
					}
					 : {
					left : e.pageX - h.left - o.width() / 2,
					top : e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
				}, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
		},
		_mouseStart : function () {
			return !0
		},
		_mouseDrag : function (t) {
			var e = {
				x : t.pageX,
				y : t.pageY
			},
			i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i),
			!1
		},
		_mouseStop : function (t) {
			return this.handles.removeClass("ui-state-active"),
			this._mouseSliding = !1,
			this._stop(t, this._handleIndex),
			this._change(t, this._handleIndex),
			this._handleIndex = null,
			this._clickOffset = null,
			this._animateOff = !1,
			!1
		},
		_detectOrientation : function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse : function (t) {
			var e,
			i,
			s,
			n,
			o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
			s = i / e,
			s > 1 && (s = 1),
			0 > s && (s = 0),
			"vertical" === this.orientation && (s = 1 - s),
			n = this._valueMax() - this._valueMin(),
			o = this._valueMin() + s * n,
			this._trimAlignValue(o)
		},
		_start : function (t, e) {
			var i = {
				handle : this.handles[e],
				value : this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
			this._trigger("start", t, i)
		},
		_slide : function (t, e, i) {
			var s,
			n,
			o;
			this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
							handle : this.handles[e],
							value : i,
							values : n
						}), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
						handle : this.handles[e],
						value : i
					}), o !== !1 && this.value(i))
		},
		_stop : function (t, e) {
			var i = {
				handle : this.handles[e],
				value : this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
			this._trigger("stop", t, i)
		},
		_change : function (t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle : this.handles[e],
					value : this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
				this._lastChangedValue = e,
				this._trigger("change", t, i)
			}
		},
		value : function (t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
		},
		values : function (e, i) {
			var s,
			n,
			o;
			if (arguments.length > 1)
				return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
			if (!arguments.length)
				return this._values();
			if (!t.isArray(arguments[0]))
				return this.options.values && this.options.values.length ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)
				s[o] = this._trimAlignValue(n[o]), this._change(null, o);
			this._refreshValue()
		},
		_setOption : function (e, i) {
			var s,
			n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
			case "orientation":
				this._detectOrientation(),
				this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
				this._refreshValue();
				break;
			case "value":
				this._animateOff = !0,
				this._refreshValue(),
				this._change(null, 0),
				this._animateOff = !1;
				break;
			case "values":
				for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)
					this._change(null, s);
				this._animateOff = !1;
				break;
			case "min":
			case "max":
				this._animateOff = !0,
				this._refreshValue(),
				this._animateOff = !1;
				break;
			case "range":
				this._animateOff = !0,
				this._refresh(),
				this._animateOff = !1
			}
		},
		_value : function () {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values : function (t) {
			var e,
			i,
			s;
			if (arguments.length)
				return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
					i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue : function (t) {
			if (this._valueMin() >= t)
				return this._valueMin();
			if (t >= this._valueMax())
				return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
			i = (t - this._valueMin()) % e,
			s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
			parseFloat(s.toFixed(5))
		},
		_valueMin : function () {
			return this.options.min
		},
		_valueMax : function () {
			return this.options.max
		},
		_refreshValue : function () {
			var e,
			i,
			s,
			n,
			o,
			a = this.options.range,
			r = this.options,
			h = this,
			l = this._animateOff ? !1 : r.animate,
			c = {};
			this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())),
				c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
				t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
				h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
							left : i + "%"
						}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
							width : i - e + "%"
						}, {
							queue : !1,
							duration : r.animate
						})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
							bottom : i + "%"
						}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
							height : i - e + "%"
						}, {
							queue : !1,
							duration : r.animate
						}))),
				e = i
			}) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
					width : i + "%"
				}, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
					width : 100 - i + "%"
				}, {
					queue : !1,
					duration : r.animate
				}), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
					height : i + "%"
				}, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
					height : 100 - i + "%"
				}, {
					queue : !1,
					duration : r.animate
				}))
		},
		_handleEvents : {
			keydown : function (i) {
				var s,
				n,
				o,
				a,
				r = t(i.target).data("ui-slider-handle-index");
				switch (i.keyCode) {
				case t.ui.keyCode.HOME:
				case t.ui.keyCode.END:
				case t.ui.keyCode.PAGE_UP:
				case t.ui.keyCode.PAGE_DOWN:
				case t.ui.keyCode.UP:
				case t.ui.keyCode.RIGHT:
				case t.ui.keyCode.DOWN:
				case t.ui.keyCode.LEFT:
					if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))
						return
				}
				switch (a = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
				case t.ui.keyCode.HOME:
					o = this._valueMin();
					break;
				case t.ui.keyCode.END:
					o = this._valueMax();
					break;
				case t.ui.keyCode.PAGE_UP:
					o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
					break;
				case t.ui.keyCode.UP:
				case t.ui.keyCode.RIGHT:
					if (n === this._valueMax())
						return;
					o = this._trimAlignValue(n + a);
					break;
				case t.ui.keyCode.DOWN:
				case t.ui.keyCode.LEFT:
					if (n === this._valueMin())
						return;
					o = this._trimAlignValue(n - a)
				}
				this._slide(i, r, o)
			},
			click : function (t) {
				t.preventDefault()
			},
			keyup : function (e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	})
}
(jQuery), function (t) {
	function e(t) {
		return function () {
			var e = this.element.val();
			t.apply(this, arguments),
			this._refresh(),
			e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.spinner", {
		version : "1.10.3",
		defaultElement : "<input>",
		widgetEventPrefix : "spin",
		options : {
			culture : null,
			icons : {
				down : "ui-icon-triangle-1-s",
				up : "ui-icon-triangle-1-n"
			},
			incremental : !0,
			max : null,
			min : null,
			numberFormat : null,
			page : 10,
			step : 1,
			change : null,
			spin : null,
			start : null,
			stop : null
		},
		_create : function () {
			this._setOption("max", this.options.max),
			this._setOption("min", this.options.min),
			this._setOption("step", this.options.step),
			this._value(this.element.val(), !0),
			this._draw(),
			this._on(this._events),
			this._refresh(),
			this._on(this.window, {
				beforeunload : function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions : function () {
			var e = {},
			i = this.element;
			return t.each(["min", "max", "step"], function (t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}),
			e
		},
		_events : {
			keydown : function (t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup : "_stop",
			focus : function () {
				this.previous = this.element.val()
			},
			blur : function (t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel : function (t, e) {
				if (e) {
					if (!this.spinning && !this._start(t))
						return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t),
					clearTimeout(this.mousewheelTimer),
					this.mousewheelTimer = this._delay(function () {
							this.spinning && this._stop(t)
						}, 100),
					t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button" : function (e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = s, this._delay(function () {
							this.previous = s
						}))
				}
				var s;
				s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
				e.preventDefault(),
				i.call(this),
				this.cancelBlur = !0,
				this._delay(function () {
					delete this.cancelBlur,
					i.call(this)
				}),
				this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button" : "_stop",
			"mouseenter .ui-spinner-button" : function (e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button" : "_stop"
		},
		_draw : function () {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"),
			this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
			this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
			this.options.disabled && this.disable()
		},
		_keydown : function (e) {
			var i = this.options,
			s = t.ui.keyCode;
			switch (e.keyCode) {
			case s.UP:
				return this._repeat(null, 1, e),
				!0;
			case s.DOWN:
				return this._repeat(null, -1, e),
				!0;
			case s.PAGE_UP:
				return this._repeat(null, i.page, e),
				!0;
			case s.PAGE_DOWN:
				return this._repeat(null, -i.page, e),
				!0
			}
			return !1
		},
		_uiSpinnerHtml : function () {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml : function () {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
		},
		_start : function (t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat : function (t, e, i) {
			t = t || 500,
			clearTimeout(this.timer),
			this.timer = this._delay(function () {
					this._repeat(40, e, i)
				}, t),
			this._spin(e * this.options.step, i)
		},
		_spin : function (t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1),
			i = this._adjustValue(i + t * this._increment(this.counter)),
			this.spinning && this._trigger("spin", e, {
				value : i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment : function (e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision : function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
			t
		},
		_precisionOf : function (t) {
			var e = "" + t,
			i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue : function (t) {
			var e,
			i,
			s = this.options;
			return e = null !== s.min ? s.min : 0,
			i = t - e,
			i = Math.round(i / s.step) * s.step,
			t = e + i,
			t = parseFloat(t.toFixed(this._precision())),
			null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop : function (t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption : function (t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e,
				this.element.val(this._format(i)),
				void 0
			}
			("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
			"icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
			this._super(t, e),
			"disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions : e(function (t) {
			this._super(t),
			this._value(this.element.val())
		}),
		_parse : function (t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
			"" === t || isNaN(t) ? null : t
		},
		_format : function (t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh : function () {
			this.element.attr({
				"aria-valuemin" : this.options.min,
				"aria-valuemax" : this.options.max,
				"aria-valuenow" : this._parse(this.element.val())
			})
		},
		_value : function (t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))),
			this.element.val(t),
			this._refresh()
		},
		_destroy : function () {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
			this.uiSpinner.replaceWith(this.element)
		},
		stepUp : e(function (t) {
			this._stepUp(t)
		}),
		_stepUp : function (t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown : e(function (t) {
			this._stepDown(t)
		}),
		_stepDown : function (t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp : e(function (t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown : e(function (t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value : function (t) {
			return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget : function () {
			return this.uiSpinner
		}
	})
}
(jQuery), function (t, e) {
	function i() {
		return ++n
	}
	function s(t) {
		return t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
	}
	var n = 0,
	o = /#.*$/;
	t.widget("ui.tabs", {
		version : "1.10.3",
		delay : 300,
		options : {
			active : null,
			collapsible : !1,
			event : "click",
			heightStyle : "content",
			hide : null,
			show : null,
			activate : null,
			beforeActivate : null,
			beforeLoad : null,
			load : null
		},
		_create : function () {
			var e = this,
			i = this.options;
			this.running = !1,
			this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}),
			this._processTabs(),
			i.active = this._initialActive(),
			t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
								return e.tabs.index(t)
							}))).sort()),
			this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(),
			this._refresh(),
			this.active.length && this.load(i.active)
		},
		_initialActive : function () {
			var i = this.options.active,
			s = this.options.collapsible,
			n = location.hash.substring(1);
			return null === i && (n && this.tabs.each(function (s, o) {
					return t(o).attr("aria-controls") === n ? (i = s, !1) : e
				}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)),
			i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)),
			!s && i === !1 && this.anchors.length && (i = 0),
			i
		},
		_getCreateEventData : function () {
			return {
				tab : this.active,
				panel : this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown : function (i) {
			var s = t(this.document[0].activeElement).closest("li"),
			n = this.tabs.index(s),
			o = !0;
			if (!this._handlePageNav(i)) {
				switch (i.keyCode) {
				case t.ui.keyCode.RIGHT:
				case t.ui.keyCode.DOWN:
					n++;
					break;
				case t.ui.keyCode.UP:
				case t.ui.keyCode.LEFT:
					o = !1,
					n--;
					break;
				case t.ui.keyCode.END:
					n = this.anchors.length - 1;
					break;
				case t.ui.keyCode.HOME:
					n = 0;
					break;
				case t.ui.keyCode.SPACE:
					return i.preventDefault(),
					clearTimeout(this.activating),
					this._activate(n),
					e;
				case t.ui.keyCode.ENTER:
					return i.preventDefault(),
					clearTimeout(this.activating),
					this._activate(n === this.options.active ? !1 : n),
					e;
				default:
					return
				}
				i.preventDefault(),
				clearTimeout(this.activating),
				n = this._focusNextTab(n, o),
				i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
							this.option("active", n)
						}, this.delay))
			}
		},
		_panelKeydown : function (e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav : function (i) {
			return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
		},
		_findNextTab : function (e, i) {
			function s() {
				return e > n && (e = 0),
				0 > e && (e = n),
				e
			}
			for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); )
				e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab : function (t, e) {
			return t = this._findNextTab(t, e),
			this.tabs.eq(t).focus(),
			t
		},
		_setOption : function (t, i) {
			return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
		},
		_tabId : function (t) {
			return t.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector : function (t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh : function () {
			var e = this.options,
			i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
					return i.index(t)
				}),
			this._processTabs(),
			e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()),
			this._refresh()
		},
		_refresh : function () {
			this._setupDisabled(this.options.disabled),
			this._setupEvents(this.options.event),
			this._setupHeightStyle(this.options.heightStyle),
			this.tabs.not(this.active).attr({
				"aria-selected" : "false",
				tabIndex : -1
			}),
			this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded" : "false",
				"aria-hidden" : "true"
			}),
			this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
					"aria-selected" : "true",
					tabIndex : 0
				}), this._getPanelForTab(this.active).show().attr({
					"aria-expanded" : "true",
					"aria-hidden" : "false"
				})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs : function () {
			var e = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
			this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
					role : "tab",
					tabIndex : -1
				}),
			this.anchors = this.tabs.map(function () {
					return t("a", this)[0]
				}).addClass("ui-tabs-anchor").attr({
					role : "presentation",
					tabIndex : -1
				}),
			this.panels = t(),
			this.anchors.each(function (i, n) {
				var o,
				a,
				r,
				h = t(n).uniqueId().attr("id"),
				l = t(n).closest("li"),
				c = l.attr("aria-controls");
				s(n) ? (o = n.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(l), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")),
				a.length && (e.panels = e.panels.add(a)),
				c && l.data("ui-tabs-aria-controls", c),
				l.attr({
					"aria-controls" : o.substring(1),
					"aria-labelledby" : h
				}),
				a.attr("aria-labelledby", h)
			}),
			this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList : function () {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel : function (e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled : function (e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++)
				e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents : function (e) {
			var i = {
				click : function (t) {
					t.preventDefault()
				}
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}),
			this._off(this.anchors.add(this.tabs).add(this.panels)),
			this._on(this.anchors, i),
			this._on(this.tabs, {
				keydown : "_tabKeydown"
			}),
			this._on(this.panels, {
				keydown : "_panelKeydown"
			}),
			this._focusable(this.tabs),
			this._hoverable(this.tabs)
		},
		_setupHeightStyle : function (e) {
			var i,
			s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
					var e = t(this),
					s = e.css("position");
					"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
				}), this.element.children().not(this.panels).each(function () {
					i -= t(this).outerHeight(!0)
				}), this.panels.each(function () {
					t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
				}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
					i = Math.max(i, t(this).height("").height())
				}).height(i))
		},
		_eventHandler : function (e) {
			var i = this.options,
			s = this.active,
			n = t(e.currentTarget),
			o = n.closest("li"),
			a = o[0] === s[0],
			r = a && i.collapsible,
			h = r ? t() : this._getPanelForTab(o),
			l = s.length ? this._getPanelForTab(s) : t(),
			c = {
				oldTab : s,
				oldPanel : l,
				newTab : r ? t() : o,
				newPanel : h
			};
			e.preventDefault(),
			o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
		},
		_toggle : function (e, i) {
			function s() {
				o.running = !1,
				o._trigger("activate", e, i)
			}
			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
				a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
			}
			var o = this,
			a = i.newPanel,
			r = i.oldPanel;
			this.running = !0,
			r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
				n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()),
			r.attr({
				"aria-expanded" : "false",
				"aria-hidden" : "true"
			}),
			i.oldTab.attr("aria-selected", "false"),
			a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1),
			a.attr({
				"aria-expanded" : "true",
				"aria-hidden" : "false"
			}),
			i.newTab.attr({
				"aria-selected" : "true",
				tabIndex : 0
			})
		},
		_activate : function (e) {
			var i,
			s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
					target : i,
					currentTarget : i,
					preventDefault : t.noop
				}))
		},
		_findActive : function (e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex : function (t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
			t
		},
		_destroy : function () {
			this.xhr && this.xhr.abort(),
			this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
			this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
			this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
			this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}),
			this.tabs.each(function () {
				var e = t(this),
				i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}),
			this.panels.show(),
			"content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable : function (i) {
			var s = this.options.disabled;
			s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
								return t !== i ? t : null
							}) : t.map(this.tabs, function (t, e) {
								return e !== i ? e : null
							})), this._setupDisabled(s))
		},
		disable : function (i) {
			var s = this.options.disabled;
			if (s !== !0) {
				if (i === e)
					s = !0;
				else {
					if (i = this._getIndex(i), -1 !== t.inArray(i, s))
						return;
					s = t.isArray(s) ? t.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load : function (e, i) {
			e = this._getIndex(e);
			var n = this,
			o = this.tabs.eq(e),
			a = o.find(".ui-tabs-anchor"),
			r = this._getPanelForTab(o),
			h = {
				tab : o,
				panel : r
			};
			s(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
						setTimeout(function () {
							r.html(t),
							n._trigger("load", i, h)
						}, 1)
					}).complete(function (t, e) {
						setTimeout(function () {
							"abort" === e && n.panels.stop(!1, !0),
							o.removeClass("ui-tabs-loading"),
							r.removeAttr("aria-busy"),
							t === n.xhr && delete n.xhr
						}, 1)
					})))
		},
		_ajaxSettings : function (e, i, s) {
			var n = this;
			return {
				url : e.attr("href"),
				beforeSend : function (e, o) {
					return n._trigger("beforeLoad", i, t.extend({
							jqXHR : e,
							ajaxSettings : o
						}, s))
				}
			}
		},
		_getPanelForTab : function (e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
}
(jQuery), function (t) {
	function e(e, i) {
		var s = (e.attr("aria-describedby") || "").split(/\s+/);
		s.push(i),
		e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	}
	function i(e) {
		var i = e.data("ui-tooltip-id"),
		s = (e.attr("aria-describedby") || "").split(/\s+/),
		n = t.inArray(i, s);
		-1 !== n && s.splice(n, 1),
		e.removeData("ui-tooltip-id"),
		s = t.trim(s.join(" ")),
		s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	}
	var s = 0;
	t.widget("ui.tooltip", {
		version : "1.10.3",
		options : {
			content : function () {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide : !0,
			items : "[title]:not([disabled])",
			position : {
				my : "left top+15",
				at : "left bottom",
				collision : "flipfit flip"
			},
			show : !0,
			tooltipClass : null,
			track : !1,
			close : null,
			open : null
		},
		_create : function () {
			this._on({
				mouseover : "open",
				focusin : "open"
			}),
			this.tooltips = {},
			this.parents = {},
			this.options.disabled && this._disable()
		},
		_setOption : function (e, i) {
			var s = this;
			return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
					s._updateContent(e)
				}), void 0)
		},
		_disable : function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0],
				e.close(n, !0)
			}),
			this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
			})
		},
		_enable : function () {
			this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open : function (e) {
			var i = this,
			s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
					var e,
					s = t(this);
					s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)),
					s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
							element : this,
							title : s.attr("title")
						}, s.attr("title", ""))
				}), this._updateContent(s, e))
		},
		_updateContent : function (t, e) {
			var i,
			s = this.options.content,
			n = this,
			o = e ? e.type : null;
			return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
						t.data("ui-tooltip-open") && n._delay(function () {
							e && (e.type = o),
							this._open(e, t, i)
						})
					}), i && this._open(e, t, i), void 0)
		},
		_open : function (i, s, n) {
			function o(t) {
				l.of = t,
				a.is(":hidden") || a.position(l)
			}
			var a,
			r,
			h,
			l = t.extend({}, this.options.position);
			if (n) {
				if (a = this._find(s), a.length)
					return a.find(".ui-tooltip-content").html(n), void 0;
				s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")),
				a = this._tooltip(s),
				e(s, a.attr("id")),
				a.find(".ui-tooltip-content").html(n),
				this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
						mousemove : o
					}), o(i)) : a.position(t.extend({
						of : s
					}, this.options.position)),
				a.hide(),
				this._show(a, this.options.show),
				this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
							a.is(":visible") && (o(l.of), clearInterval(h))
						}, t.fx.interval)),
				this._trigger("open", i, {
					tooltip : a
				}),
				r = {
					keyup : function (e) {
						if (e.keyCode === t.ui.keyCode.ESCAPE) {
							var i = t.Event(e);
							i.currentTarget = s[0],
							this.close(i, !0)
						}
					},
					remove : function () {
						this._removeTooltip(a)
					}
				},
				i && "mouseover" !== i.type || (r.mouseleave = "close"),
				i && "focusin" !== i.type || (r.focusout = "close"),
				this._on(!0, s, r)
			}
		},
		close : function (e) {
			var s = this,
			n = t(e ? e.currentTarget : this.element),
			o = this._find(n);
			this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
					s._removeTooltip(t(this))
				}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
					t(i.element).attr("title", i.title),
					delete s.parents[e]
				}), this.closing = !0, this._trigger("close", e, {
					tooltip : o
				}), this.closing = !1)
		},
		_tooltip : function (e) {
			var i = "ui-tooltip-" + s++,
			n = t("<div>").attr({
					id : i,
					role : "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return t("<div>").addClass("ui-tooltip-content").appendTo(n),
			n.appendTo(this.document[0].body),
			this.tooltips[i] = e,
			n
		},
		_find : function (e) {
			var i = e.data("ui-tooltip-id");
			return i ? t("#" + i) : t()
		},
		_removeTooltip : function (t) {
			t.remove(),
			delete this.tooltips[t.attr("id")]
		},
		_destroy : function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0],
				e.close(n, !0),
				t("#" + i).remove(),
				s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			})
		}
	})
}
(jQuery);
(function (ea) {
	function Q(Q, da) {
		function R(a) {
			return c.preferFlash && t && !c.ignoreFlash && "undefined" !== typeof c.flash[a] && c.flash[a]
		}
		function m(a) {
			return function (c) {
				var d = this._t;
				return !d || !d._a ? null : a.call(this, c)
			}
		}
		this.setupOptions = {
			url : Q || null,
			flashVersion : 8,
			debugMode : !0,
			debugFlash : !1,
			useConsole : !0,
			consoleOnly : !0,
			waitForWindowLoad : !1,
			bgColor : "#ffffff",
			useHighPerformance : !1,
			flashPollingInterval : null,
			html5PollingInterval : null,
			flashLoadTimeout : 1E3,
			wmode : null,
			allowScriptAccess : "always",
			useFlashBlock : !1,
			useHTML5Audio : !0,
			html5Test : /^(probably|maybe)$/i,
			preferFlash : !0,
			noSWFCache : !1
		};
		this.defaultOptions = {
			autoLoad : !1,
			autoPlay : !1,
			from : null,
			loops : 1,
			onid3 : null,
			onload : null,
			whileloading : null,
			onplay : null,
			onpause : null,
			onresume : null,
			whileplaying : null,
			onposition : null,
			onstop : null,
			onfailure : null,
			onfinish : null,
			multiShot : !0,
			multiShotEvents : !1,
			position : null,
			pan : 0,
			stream : !0,
			to : null,
			type : null,
			usePolicyFile : !1,
			volume : 100
		};
		this.flash9Options = {
			isMovieStar : null,
			usePeakData : !1,
			useWaveformData : !1,
			useEQData : !1,
			onbufferchange : null,
			ondataerror : null
		};
		this.movieStarOptions = {
			bufferTime : 3,
			serverURL : null,
			onconnect : null,
			duration : null
		};
		this.audioFormats = {
			mp3 : {
				type : ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
				required : !0
			},
			mp4 : {
				related : ["aac", "m4a"],
				type : ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
				required : !1
			},
			ogg : {
				type : ["audio/ogg; codecs=vorbis"],
				required : !1
			},
			wav : {
				type : ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
				required : !1
			}
		};
		this.movieID = "sm2-container";
		this.id = da || "sm2movie";
		this.debugID = "soundmanager-debug";
		this.debugURLParam = /([#?&])debug=1/i;
		this.versionNumber = "V2.97a.20120624";
		this.altURL = this.movieURL = this.version = null;
		this.enabled = this.swfLoaded = !1;
		this.oMC = null;
		this.sounds = {};
		this.soundIDs = [];
		this.didFlashBlock = this.muted = !1;
		this.filePattern = null;
		this.filePatterns = {
			flash8 : /\.mp3(\?.*)?$/i,
			flash9 : /\.mp3(\?.*)?$/i
		};
		this.features = {
			buffering : !1,
			peakData : !1,
			waveformData : !1,
			eqData : !1,
			movieStar : !1
		};
		this.sandbox = {};
		var fa;
		try {
			fa = "undefined" !== typeof Audio && "undefined" !== typeof(new Audio).canPlayType
		} catch (Za) {
			fa = !1
		}
		this.hasHTML5 = fa;
		this.html5 = {
			usingFlash : null
		};
		this.flash = {};
		this.ignoreFlash = this.html5Only = !1;
		var Ca,
		c = this,
		i = null,
		S,
		q = navigator.userAgent,
		h = ea,
		ga = h.location.href.toString(),
		l = document,
		ha,
		Da,
		ia,
		j,
		w = [],
		J = !1,
		K = !1,
		k = !1,
		s = !1,
		ja = !1,
		L,
		r,
		ka,
		T,
		la,
		B,
		C,
		D,
		Ea,
		ma,
		U,
		V,
		E,
		na,
		oa,
		pa,
		W,
		F,
		Fa,
		qa,
		Ga,
		X,
		Ha,
		M = null,
		ra = null,
		u,
		sa,
		G,
		Y,
		Z,
		H,
		p,
		N = !1,
		ta = !1,
		Ia,
		Ja,
		Ka,
		$ = 0,
		O = null,
		aa,
		n = null,
		La,
		ba,
		P,
		x,
		ua,
		va,
		Ma,
		o,
		Wa = Array.prototype.slice,
		z = !1,
		t,
		wa,
		Na,
		v,
		Oa,
		xa = q.match(/(ipad|iphone|ipod)/i),
		y = q.match(/msie/i),
		Xa = q.match(/webkit/i),
		ya = q.match(/safari/i) && !q.match(/chrome/i),
		Pa = q.match(/opera/i),
		za = q.match(/(mobile|pre\/|xoom)/i) || xa,
		Qa = !ga.match(/usehtml5audio/i) && !ga.match(/sm2\-ignorebadua/i) && ya && !q.match(/silk/i) && q.match(/OS X 10_6_([3-7])/i),
		Aa = "undefined" !== typeof l.hasFocus ? l.hasFocus() : null,
		ca = ya && ("undefined" === typeof l.hasFocus || !l.hasFocus()),
		Ra = !ca,
		Sa = /(mp3|mp4|mpa|m4a)/i,
		Ba = l.location ? l.location.protocol.match(/http/i) : null,
		Ta = !Ba ? "http://" : "",
		Ua = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|mp4v|3gp|3g2)\s*(?:$|;)/i,
		Va = "mpeg4,aac,flv,mov,mp4,m4v,f4v,m4a,mp4v,3gp,3g2".split(","),
		Ya = RegExp("\\.(" + Va.join("|") + ")(\\?.*)?$", "i");
		this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
		this.useAltURL = !Ba;
		this._global_a = null;
		if (za && (c.useHTML5Audio = !0, c.preferFlash = !1, xa))
			z = c.ignoreFlash = !0;
		this.setup = function (a) {
			"undefined" !== typeof a && k && n && c.ok() && ("undefined" !== typeof a.flashVersion || "undefined" !== typeof a.url) && H(u("setupLate"));
			ka(a);
			return c
		};
		this.supported = this.ok = function () {
			return n ? k && !s : c.useHTML5Audio && c.hasHTML5
		};
		this.getMovie = function (a) {
			return S(a) || l[a] || h[a]
		};
		this.createSound = function (a, e) {
			function d() {
				b = Y(b);
				c.sounds[f.id] = new Ca(f);
				c.soundIDs.push(f.id);
				return c.sounds[f.id]
			}
			var b = null,
			g = null,
			f = null;
			if (!k || !c.ok())
				return H(void 0), !1;
			"undefined" !== typeof e && (a = {
					id : a,
					url : e
				});
			b = r(a);
			b.url = aa(b.url);
			f = b;
			if (p(f.id, !0))
				return c.sounds[f.id];
			if (ba(f))
				g = d(), g._setup_html5(f);
			else {
				if (8 < j && null === f.isMovieStar)
					f.isMovieStar = !(!f.serverURL && !(f.type && f.type.match(Ua) || f.url.match(Ya)));
				f = Z(f, void 0);
				g = d();
				if (8 === j)
					i._createSound(f.id, f.loops || 1, f.usePolicyFile);
				else if (i._createSound(f.id, f.url, f.usePeakData, f.useWaveformData, f.useEQData, f.isMovieStar, f.isMovieStar ? f.bufferTime : !1, f.loops || 1, f.serverURL, f.duration || null, f.autoPlay, !0, f.autoLoad, f.usePolicyFile), !f.serverURL)
					g.connected = !0, f.onconnect && f.onconnect.apply(g);
				!f.serverURL && (f.autoLoad || f.autoPlay) && g.load(f)
			}
			!f.serverURL && f.autoPlay && g.play();
			return g
		};
		this.destroySound = function (a, e) {
			if (!p(a))
				return !1;
			var d = c.sounds[a],
			b;
			d._iO = {};
			d.stop();
			d.unload();
			for (b = 0; b < c.soundIDs.length; b++)
				if (c.soundIDs[b] === a) {
					c.soundIDs.splice(b, 1);
					break
				}
			e || d.destruct(!0);
			delete c.sounds[a];
			return !0
		};
		this.load = function (a, e) {
			return !p(a) ? !1 : c.sounds[a].load(e)
		};
		this.unload = function (a) {
			return !p(a) ? !1 : c.sounds[a].unload()
		};
		this.onposition = this.onPosition = function (a, e, d, b) {
			return !p(a) ? !1 : c.sounds[a].onposition(e, d, b)
		};
		this.clearOnPosition = function (a, e, d) {
			return !p(a) ? !1 : c.sounds[a].clearOnPosition(e, d)
		};
		this.start = this.play = function (a, e) {
			var d = !1;
			if (!k || !c.ok())
				return H("soundManager.play(): " + u(!k ? "notReady" : "notOK")), d;
			if (!p(a)) {
				e instanceof Object || (e = {
						url : e
					});
				if (e && e.url)
					e.id = a, d = c.createSound(e).play();
				return d
			}
			return c.sounds[a].play(e)
		};
		this.setPosition = function (a, e) {
			return !p(a) ? !1 : c.sounds[a].setPosition(e)
		};
		this.stop = function (a) {
			return !p(a) ? !1 : c.sounds[a].stop()
		};
		this.stopAll = function () {
			for (var a in c.sounds)
				c.sounds.hasOwnProperty(a) && c.sounds[a].stop()
		};
		this.pause = function (a) {
			return !p(a) ? !1 : c.sounds[a].pause()
		};
		this.pauseAll = function () {
			var a;
			for (a = c.soundIDs.length - 1; 0 <= a; a--)
				c.sounds[c.soundIDs[a]].pause()
		};
		this.resume = function (a) {
			return !p(a) ? !1 : c.sounds[a].resume()
		};
		this.resumeAll = function () {
			var a;
			for (a = c.soundIDs.length - 1; 0 <= a; a--)
				c.sounds[c.soundIDs[a]].resume()
		};
		this.togglePause = function (a) {
			return !p(a) ? !1 : c.sounds[a].togglePause()
		};
		this.setPan = function (a, e) {
			return !p(a) ? !1 : c.sounds[a].setPan(e)
		};
		this.setVolume = function (a, e) {
			return !p(a) ? !1 : c.sounds[a].setVolume(e)
		};
		this.mute = function (a) {
			var e = 0;
			"string" !== typeof a && (a = null);
			if (a)
				return !p(a) ? !1 : c.sounds[a].mute();
			for (e = c.soundIDs.length - 1; 0 <= e; e--)
				c.sounds[c.soundIDs[e]].mute();
			return c.muted = !0
		};
		this.muteAll = function () {
			c.mute()
		};
		this.unmute = function (a) {
			"string" !== typeof a && (a = null);
			if (a)
				return !p(a) ? !1 : c.sounds[a].unmute();
			for (a = c.soundIDs.length - 1; 0 <= a; a--)
				c.sounds[c.soundIDs[a]].unmute();
			c.muted = !1;
			return !0
		};
		this.unmuteAll = function () {
			c.unmute()
		};
		this.toggleMute = function (a) {
			return !p(a) ? !1 : c.sounds[a].toggleMute()
		};
		this.getMemoryUse = function () {
			var a = 0;
			i && 8 !== j && (a = parseInt(i._getMemoryUse(), 10));
			return a
		};
		this.disable = function (a) {
			var e;
			"undefined" === typeof a && (a = !1);
			if (s)
				return !1;
			s = !0;
			for (e = c.soundIDs.length - 1; 0 <= e; e--)
				Ga(c.sounds[c.soundIDs[e]]);
			L(a);
			o.remove(h, "load", C);
			return !0
		};
		this.canPlayMIME = function (a) {
			var e;
			c.hasHTML5 && (e = P({
						type : a
					}));
			!e && n && (e = a && c.ok() ? !!(8 < j && a.match(Ua) || a.match(c.mimePattern)) : null);
			return e
		};
		this.canPlayURL = function (a) {
			var e;
			c.hasHTML5 && (e = P({
						url : a
					}));
			!e && n && (e = a && c.ok() ? !!a.match(c.filePattern) : null);
			return e
		};
		this.canPlayLink = function (a) {
			return "undefined" !== typeof a.type && a.type && c.canPlayMIME(a.type) ? !0 : c.canPlayURL(a.href)
		};
		this.getSoundById = function (a) {
			if (!a)
				throw Error("soundManager.getSoundById(): sID is null/undefined");
			return c.sounds[a]
		};
		this.onready = function (a, c) {
			var d = !1;
			if ("function" === typeof a)
				c || (c = h), la("onready", a, c), B();
			else
				throw u("needFunction", "onready");
			return !0
		};
		this.ontimeout = function (a, c) {
			var d = !1;
			if ("function" === typeof a)
				c || (c = h), la("ontimeout", a, c), B({
					type : "ontimeout"
				});
			else
				throw u("needFunction", "ontimeout");
			return !0
		};
		this._wD = this._writeDebug = function () {
			return !0
		};
		this._debug = function () {};
		this.reboot = function () {
			var a,
			e;
			for (a = c.soundIDs.length - 1; 0 <= a; a--)
				c.sounds[c.soundIDs[a]].destruct();
			if (i)
				try {
					if (y)
						ra = i.innerHTML;
					M = i.parentNode.removeChild(i)
				} catch (d) {}

			ra = M = n = null;
			c.enabled = oa = k = N = ta = J = K = s = c.swfLoaded = !1;
			c.soundIDs = [];
			c.sounds = {};
			i = null;
			for (a in w)
				if (w.hasOwnProperty(a))
					for (e = w[a].length - 1; 0 <= e; e--)
						w[a][e].fired = !1;
			h.setTimeout(c.beginDelayedInit, 20)
		};
		this.getMoviePercent = function () {
			return i && "undefined" !== typeof i.PercentLoaded ? i.PercentLoaded() : null
		};
		this.beginDelayedInit = function () {
			ja = !0;
			E();
			setTimeout(function () {
				if (ta)
					return !1;
				W();
				V();
				return ta = !0
			}, 20);
			D()
		};
		this.destruct = function () {
			c.disable(!0)
		};
		Ca = function (a) {
			var e,
			d,
			b = this,
			g,
			f,
			A,
			I,
			h,
			l,
			m = !1,
			k = [],
			o = 0,
			q,
			s,
			n = null;
			e = null;
			d = null;
			this.sID = this.id = a.id;
			this.url = a.url;
			this._iO = this.instanceOptions = this.options = r(a);
			this.pan = this.options.pan;
			this.volume = this.options.volume;
			this.isHTML5 = !1;
			this._a = null;
			this.id3 = {};
			this._debug = function () {};
			this.load = function (a) {
				var c = null;
				if ("undefined" !== typeof a)
					b._iO = r(a, b.options), b.instanceOptions = b._iO;
				else if (a = b.options, b._iO = a, b.instanceOptions = b._iO, n && n !== b.url)
					b._iO.url = b.url, b.url = null;
				if (!b._iO.url)
					b._iO.url = b.url;
				b._iO.url = aa(b._iO.url);
				if (b._iO.url === b.url && 0 !== b.readyState && 2 !== b.readyState)
					return 3 === b.readyState && b._iO.onload && b._iO.onload.apply(b, [!!b.duration]), b;
				a = b._iO;
				n = b.url;
				b.loaded = !1;
				b.readyState = 1;
				b.playState = 0;
				b.id3 = {};
				if (ba(a)) {
					if (c = b._setup_html5(a), !c._called_load) {
						b._html5_canplay = !1;
						if (b._a.src !== a.url)
							b._a.src = a.url, b.setPosition(0);
						b._a.autobuffer = "auto";
						b._a.preload = "auto";
						c._called_load = !0;
						a.autoPlay && b.play()
					}
				} else
					try {
						b.isHTML5 = !1,
						b._iO = Z(Y(a)),
						a = b._iO,
						8 === j ? i._load(b.id, a.url, a.stream, a.autoPlay, a.whileloading ? 1 : 0, a.loops || 1, a.usePolicyFile) : i._load(b.id, a.url, !!a.stream, !!a.autoPlay, a.loops || 1, !!a.autoLoad, a.usePolicyFile)
					} catch (e) {
						F({
							type : "SMSOUND_LOAD_JS_EXCEPTION",
							fatal : !0
						})
					}
				return b
			};
			this.unload = function () {
				if (0 !== b.readyState) {
					if (b.isHTML5) {
						if (I(), b._a)
							b._a.pause(), ua(b._a, "about:blank"), b.url = "about:blank"
					} else
						8 === j ? i._unload(b.id, "about:blank") : i._unload(b.id);
					g()
				}
				return b
			};
			this.destruct = function (a) {
				if (b.isHTML5) {
					if (I(), b._a)
						b._a.pause(), ua(b._a), z || A(), b._a._t = null, b._a = null
				} else
					b._iO.onfailure = null, i._destroySound(b.id);
				a || c.destroySound(b.id, !0)
			};
			this.start = this.play = function (a, c) {
				var e,
				d;
				d = !0;
				d = null;
				c = "undefined" === typeof c ? !0 : c;
				a || (a = {});
				b._iO = r(a, b._iO);
				b._iO = r(b._iO, b.options);
				b._iO.url = aa(b._iO.url);
				b.instanceOptions = b._iO;
				if (b._iO.serverURL && !b.connected)
					return b.getAutoPlay() || b.setAutoPlay(!0), b;
				ba(b._iO) && (b._setup_html5(b._iO), h());
				if (1 === b.playState && !b.paused)
					(e = b._iO.multiShot) || (d = b);
				if (null !== d)
					return d;
				if (!b.loaded)
					if (0 === b.readyState) {
						if (!b.isHTML5)
							b._iO.autoPlay = !0;
						b.load(b._iO)
					} else
						2 === b.readyState && (d = b);
				if (null !== d)
					return d;
				if (!b.isHTML5 && 9 === j && 0 < b.position && b.position === b.duration)
					a.position = 0;
				if (b.paused && b.position && 0 < b.position)
					b.resume();
				else {
					b._iO = r(a, b._iO);
					if (null !== b._iO.from && null !== b._iO.to && 0 === b.instanceCount && 0 === b.playState && !b._iO.serverURL) {
						e = function () {
							b._iO = r(a, b._iO);
							b.play(b._iO)
						};
						if (b.isHTML5 && !b._html5_canplay)
							b.load({
								_oncanplay : e
							}), d = !1;
						else if (!b.isHTML5 && !b.loaded && (!b.readyState || 2 !== b.readyState))
							b.load({
								onload : e
							}), d = !1;
						if (null !== d)
							return d;
						b._iO = s()
					}
					(!b.instanceCount || b._iO.multiShotEvents || !b.isHTML5 && 8 < j && !b.getAutoPlay()) && b.instanceCount++;
					b._iO.onposition && 0 === b.playState && l(b);
					b.playState = 1;
					b.paused = !1;
					b.position = "undefined" !== typeof b._iO.position && !isNaN(b._iO.position) ? b._iO.position : 0;
					if (!b.isHTML5)
						b._iO = Z(Y(b._iO));
					b._iO.onplay && c && (b._iO.onplay.apply(b), m = !0);
					b.setVolume(b._iO.volume, !0);
					b.setPan(b._iO.pan, !0);
					b.isHTML5 ? (h(), d = b._setup_html5(), b.setPosition(b._iO.position), d.play()) : (d = i._start(b.id, b._iO.loops || 1, 9 === j ? b._iO.position : b._iO.position / 1E3, b._iO.multiShot), 9 === j && !d && b._iO.onplayerror && b._iO.onplayerror.apply(b))
				}
				return b
			};
			this.stop = function (a) {
				var c = b._iO;
				if (1 === b.playState) {
					b._onbufferchange(0);
					b._resetOnPosition(0);
					b.paused = !1;
					if (!b.isHTML5)
						b.playState = 0;
					q();
					c.to && b.clearOnPosition(c.to);
					if (b.isHTML5) {
						if (b._a)
							a = b.position, b.setPosition(0), b.position = a, b._a.pause(), b.playState = 0, b._onTimer(), I()
					} else
						i._stop(b.id, a), c.serverURL && b.unload();
					b.instanceCount = 0;
					b._iO = {};
					c.onstop && c.onstop.apply(b)
				}
				return b
			};
			this.setAutoPlay = function (a) {
				b._iO.autoPlay = a;
				b.isHTML5 || (i._setAutoPlay(b.id, a), a && !b.instanceCount && 1 === b.readyState && b.instanceCount++)
			};
			this.getAutoPlay = function () {
				return b._iO.autoPlay
			};
			this.setPosition = function (a) {
				"undefined" === typeof a && (a = 0);
				var c = b.isHTML5 ? Math.max(a, 0) : Math.min(b.duration || b._iO.duration, Math.max(a, 0));
				b.position = c;
				a = b.position / 1E3;
				b._resetOnPosition(b.position);
				b._iO.position = c;
				if (b.isHTML5) {
					if (b._a && b._html5_canplay && b._a.currentTime !== a)
						try {
							b._a.currentTime = a,
							(0 === b.playState || b.paused) && b._a.pause()
						} catch (e) {}

				} else
					a = 9 === j ? b.position : a, b.readyState && 2 !== b.readyState && i._setPosition(b.id, a, b.paused || !b.playState, b._iO.multiShot);
				b.isHTML5 && b.paused && b._onTimer(!0);
				return b
			};
			this.pause = function (a) {
				if (b.paused || 0 === b.playState && 1 !== b.readyState)
					return b;
				b.paused = !0;
				b.isHTML5 ? (b._setup_html5().pause(), I()) : (a || "undefined" === typeof a) && i._pause(b.id, b._iO.multiShot);
				b._iO.onpause && b._iO.onpause.apply(b);
				return b
			};
			this.resume = function () {
				var a = b._iO;
				if (!b.paused)
					return b;
				b.paused = !1;
				b.playState = 1;
				b.isHTML5 ? (b._setup_html5().play(), h()) : (a.isMovieStar && !a.serverURL && b.setPosition(b.position), i._pause(b.id, a.multiShot));
				!m && a.onplay ? (a.onplay.apply(b), m = !0) : a.onresume && a.onresume.apply(b);
				return b
			};
			this.togglePause = function () {
				if (0 === b.playState)
					return b.play({
						position : 9 === j && !b.isHTML5 ? b.position : b.position / 1E3
					}), b;
				b.paused ? b.resume() : b.pause();
				return b
			};
			this.setPan = function (a, c) {
				"undefined" === typeof a && (a = 0);
				"undefined" === typeof c && (c = !1);
				b.isHTML5 || i._setPan(b.id, a);
				b._iO.pan = a;
				if (!c)
					b.pan = a, b.options.pan = a;
				return b
			};
			this.setVolume = function (a, e) {
				"undefined" === typeof a && (a = 100);
				"undefined" === typeof e && (e = !1);
				if (b.isHTML5) {
					if (b._a)
						b._a.volume = Math.max(0, Math.min(1, a / 100))
				} else
					i._setVolume(b.id, c.muted && !b.muted || b.muted ? 0 : a);
				b._iO.volume = a;
				if (!e)
					b.volume = a, b.options.volume = a;
				return b
			};
			this.mute = function () {
				b.muted = !0;
				if (b.isHTML5) {
					if (b._a)
						b._a.muted = !0
				} else
					i._setVolume(b.id, 0);
				return b
			};
			this.unmute = function () {
				b.muted = !1;
				var a = "undefined" !== typeof b._iO.volume;
				if (b.isHTML5) {
					if (b._a)
						b._a.muted = !1
				} else
					i._setVolume(b.id, a ? b._iO.volume : b.options.volume);
				return b
			};
			this.toggleMute = function () {
				return b.muted ? b.unmute() : b.mute()
			};
			this.onposition = this.onPosition = function (a, c, e) {
				k.push({
					position : parseInt(a, 10),
					method : c,
					scope : "undefined" !== typeof e ? e : b,
					fired : !1
				});
				return b
			};
			this.clearOnPosition = function (b, a) {
				var c,
				b = parseInt(b, 10);
				if (isNaN(b))
					return !1;
				for (c = 0; c < k.length; c++)
					if (b === k[c].position && (!a || a === k[c].method))
						k[c].fired && o--, k.splice(c, 1)
			};
			this._processOnPosition = function () {
				var a,
				c;
				a = k.length;
				if (!a || !b.playState || o >= a)
					return !1;
				for (a -= 1; 0 <= a; a--)
					if (c = k[a], !c.fired && b.position >= c.position)
						c.fired = !0, o++, c.method.apply(c.scope, [c.position]);
				return !0
			};
			this._resetOnPosition = function (b) {
				var a,
				c;
				a = k.length;
				if (!a)
					return !1;
				for (a -= 1; 0 <= a; a--)
					if (c = k[a], c.fired && b <= c.position)
						c.fired = !1, o--;
				return !0
			};
			s = function () {
				var a = b._iO,
				c = a.from,
				e = a.to,
				d,
				f;
				f = function () {
					b.clearOnPosition(e, f);
					b.stop()
				};
				d = function () {
					if (null !== e && !isNaN(e))
						b.onPosition(e, f)
				};
				if (null !== c && !isNaN(c))
					a.position = c, a.multiShot = !1, d();
				return a
			};
			l = function () {
				var a,
				c = b._iO.onposition;
				if (c)
					for (a in c)
						if (c.hasOwnProperty(a))
							b.onPosition(parseInt(a, 10), c[a])
			};
			q = function () {
				var a,
				c = b._iO.onposition;
				if (c)
					for (a in c)
						c.hasOwnProperty(a) && b.clearOnPosition(parseInt(a, 10))
			};
			h = function () {
				b.isHTML5 && Ia(b)
			};
			I = function () {
				b.isHTML5 && Ja(b)
			};
			g = function (a) {
				a || (k = [], o = 0);
				m = !1;
				b._hasTimer = null;
				b._a = null;
				b._html5_canplay = !1;
				b.bytesLoaded = null;
				b.bytesTotal = null;
				b.duration = b._iO && b._iO.duration ? b._iO.duration : null;
				b.durationEstimate = null;
				b.buffered = [];
				b.eqData = [];
				b.eqData.left = [];
				b.eqData.right = [];
				b.failures = 0;
				b.isBuffering = !1;
				b.instanceOptions = {};
				b.instanceCount = 0;
				b.loaded = !1;
				b.metadata = {};
				b.readyState = 0;
				b.muted = !1;
				b.paused = !1;
				b.peakData = {
					left : 0,
					right : 0
				};
				b.waveformData = {
					left : [],
					right : []
				};
				b.playState = 0;
				b.position = null;
				b.id3 = {}

			};
			g();
			this._onTimer = function (a) {
				var c,
				f = !1,
				g = {};
				if (b._hasTimer || a) {
					if (b._a && (a || (0 < b.playState || 1 === b.readyState) && !b.paused)) {
						c = b._get_html5_duration();
						if (c !== e)
							e = c, b.duration = c, f = !0;
						b.durationEstimate = b.duration;
						c = 1E3 * b._a.currentTime || 0;
						c !== d && (d = c, f = !0);
						(f || a) && b._whileplaying(c, g, g, g, g)
					}
					return f
				}
			};
			this._get_html5_duration = function () {
				var a = b._iO,
				c = b._a ? 1E3 * b._a.duration : a ? a.duration : void 0;
				return c && !isNaN(c) && Infinity !== c ? c : a ? a.duration : null
			};
			this._apply_loop = function (b, a) {
				b.loop = 1 < a ? "loop" : ""
			};
			this._setup_html5 = function (a) {
				var a = r(b._iO, a),
				e = decodeURI,
				d = z ? c._global_a : b._a,
				i = e(a.url),
				h = d && d._t ? d._t.instanceOptions : null,
				A;
				if (d) {
					if (d._t) {
						if (!z && i === e(n))
							A = d;
						else if (z && h.url === a.url && (!n || n === h.url))
							A = d;
						if (A)
							return b._apply_loop(d, a.loops), A
					}
					z && d._t && d._t.playState && a.url !== h.url && d._t.stop();
					g(h && h.url ? a.url === h.url : n ? n === a.url : !1);
					d.src = a.url;
					n = b.url = a.url;
					d._called_load = !1
				} else if (b._a = a.autoLoad || a.autoPlay ? new Audio(a.url) : Pa ? new Audio(null) : new Audio, d = b._a, d._called_load = !1, z)
					c._global_a = d;
				b.isHTML5 = !0;
				b._a = d;
				d._t = b;
				f();
				b._apply_loop(d, a.loops);
				a.autoLoad || a.autoPlay ? b.load() : (d.autobuffer = !1, d.preload = "auto");
				return d
			};
			f = function () {
				if (b._a._added_events)
					return !1;
				var a;
				b._a._added_events = !0;
				for (a in v)
					v.hasOwnProperty(a) && b._a && b._a.addEventListener(a, v[a], !1);
				return !0
			};
			A = function () {
				var a;
				b._a._added_events = !1;
				for (a in v)
					v.hasOwnProperty(a) && b._a && b._a.removeEventListener(a, v[a], !1)
			};
			this._onload = function (a) {
				a = !!a || !b.isHTML5 && 8 === j && b.duration;
				b.loaded = a;
				b.readyState = a ? 3 : 2;
				b._onbufferchange(0);
				b._iO.onload && b._iO.onload.apply(b, [a]);
				return !0
			};
			this._onbufferchange = function (a) {
				if (0 === b.playState || a && b.isBuffering || !a && !b.isBuffering)
					return !1;
				b.isBuffering = 1 === a;
				b._iO.onbufferchange && b._iO.onbufferchange.apply(b);
				return !0
			};
			this._onsuspend = function () {
				b._iO.onsuspend && b._iO.onsuspend.apply(b);
				return !0
			};
			this._onfailure = function (a, c, e) {
				b.failures++;
				if (b._iO.onfailure && 1 === b.failures)
					b._iO.onfailure(b, a, c, e)
			};
			this._onfinish = function () {
				var a = b._iO.onfinish;
				b._onbufferchange(0);
				b._resetOnPosition(0);
				if (b.instanceCount) {
					b.instanceCount--;
					if (!b.instanceCount && (q(), b.playState = 0, b.paused = !1, b.instanceCount = 0, b.instanceOptions = {}, b._iO = {}, I(), b.isHTML5))
						b.position = 0;
					(!b.instanceCount || b._iO.multiShotEvents) && a && a.apply(b)
				}
			};
			this._whileloading = function (a, c, e, d) {
				var f = b._iO;
				b.bytesLoaded = a;
				b.bytesTotal = c;
				b.duration = Math.floor(e);
				b.bufferLength = d;
				if (f.isMovieStar)
					b.durationEstimate = b.duration;
				else if (b.durationEstimate = f.duration ? b.duration > f.duration ? b.duration : f.duration : parseInt(b.bytesTotal / b.bytesLoaded * b.duration, 10), "undefined" === typeof b.durationEstimate)
					b.durationEstimate = b.duration;
				if (!b.isHTML5)
					b.buffered = [{
							start : 0,
							end : b.duration
						}
					];
				(3 !== b.readyState || b.isHTML5) && f.whileloading && f.whileloading.apply(b)
			};
			this._whileplaying = function (a, c, e, d, f) {
				var g = b._iO;
				if (isNaN(a) || null === a)
					return !1;
				b.position = Math.max(0, a);
				b._processOnPosition();
				if (!b.isHTML5 && 8 < j) {
					if (g.usePeakData && "undefined" !== typeof c && c)
						b.peakData = {
							left : c.leftPeak,
							right : c.rightPeak
						};
					if (g.useWaveformData && "undefined" !== typeof e && e)
						b.waveformData = {
							left : e.split(","),
							right : d.split(",")
						};
					if (g.useEQData && "undefined" !== typeof f && f && f.leftEQ && (a = f.leftEQ.split(","), b.eqData = a, b.eqData.left = a, "undefined" !== typeof f.rightEQ && f.rightEQ))
						b.eqData.right = f.rightEQ.split(",")
				}
				1 === b.playState && (!b.isHTML5 && 8 === j && !b.position && b.isBuffering && b._onbufferchange(0), g.whileplaying && g.whileplaying.apply(b));
				return !0
			};
			this._oncaptiondata = function (a) {
				b.captiondata = a;
				b._iO.oncaptiondata && b._iO.oncaptiondata.apply(b)
			};
			this._onmetadata = function (a, c) {
				var e = {},
				d,
				f;
				for (d = 0, f = a.length; d < f; d++)
					e[a[d]] = c[d];
				b.metadata = e;
				b._iO.onmetadata && b._iO.onmetadata.apply(b)
			};
			this._onid3 = function (a, c) {
				var e = [],
				d,
				f;
				for (d = 0, f = a.length; d < f; d++)
					e[a[d]] = c[d];
				b.id3 = r(b.id3, e);
				b._iO.onid3 && b._iO.onid3.apply(b)
			};
			this._onconnect = function (a) {
				a = 1 === a;
				if (b.connected = a)
					b.failures = 0, p(b.id) && (b.getAutoPlay() ? b.play(void 0, b.getAutoPlay()) : b._iO.autoLoad && b.load()), b._iO.onconnect && b._iO.onconnect.apply(b, [a])
			};
			this._ondataerror = function () {
				0 < b.playState && b._iO.ondataerror && b._iO.ondataerror.apply(b)
			}
		};
		pa = function () {
			return l.body || l._docElement || l.getElementsByTagName("div")[0]
		};
		S = function (a) {
			return l.getElementById(a)
		};
		r = function (a, e) {
			var d = a || {},
			b,
			g;
			b = "undefined" === typeof e ? c.defaultOptions : e;
			for (g in b)
				b.hasOwnProperty(g) && "undefined" === typeof d[g] && (d[g] = "object" !== typeof b[g] || null === b[g] ? b[g] : r(d[g], b[g]));
			return d
		};
		T = {
			onready : 1,
			ontimeout : 1,
			defaultOptions : 1,
			flash9Options : 1,
			movieStarOptions : 1
		};
		ka = function (a, e) {
			var d,
			b = !0,
			g = "undefined" !== typeof e,
			f = c.setupOptions;
			for (d in a)
				if (a.hasOwnProperty(d))
					if ("object" !== typeof a[d] || null === a[d] || a[d]instanceof Array)
						g && "undefined" !== typeof T[e] ? c[e][d] = a[d] : "undefined" !== typeof f[d] ? (c.setupOptions[d] = a[d], c[d] = a[d]) : "undefined" === typeof T[d] ? (H(u("undefined" === typeof c[d] ? "setupUndef" : "setupError", d), 2), b = !1) : c[d]instanceof Function ? c[d].apply(c, a[d]instanceof Array ? a[d] : [a[d]]) : c[d] = a[d];
					else if ("undefined" === typeof T[d])
						H(u("undefined" === typeof c[d] ? "setupUndef" : "setupError", d), 2), b = !1;
					else
						return ka(a[d], d);
			return b
		};
		o = function () {
			function a(a) {
				var a = Wa.call(a),
				b = a.length;
				d ? (a[1] = "on" + a[1], 3 < b && a.pop()) : 3 === b && a.push(!1);
				return a
			}
			function c(a, e) {
				var h = a.shift(),
				i = [b[e]];
				if (d)
					h[i](a[0], a[1]);
				else
					h[i].apply(h, a)
			}
			var d = h.attachEvent,
			b = {
				add : d ? "attachEvent" : "addEventListener",
				remove : d ? "detachEvent" : "removeEventListener"
			};
			return {
				add : function () {
					c(a(arguments), "add")
				},
				remove : function () {
					c(a(arguments), "remove")
				}
			}
		}
		();
		v = {
			abort : m(function () {}),
			canplay : m(function () {
				var a = this._t,
				c;
				if (a._html5_canplay)
					return !0;
				a._html5_canplay = !0;
				a._onbufferchange(0);
				c = "undefined" !== typeof a._iO.position && !isNaN(a._iO.position) ? a._iO.position / 1E3 : null;
				if (a.position && this.currentTime !== c)
					try {
						this.currentTime = c
					} catch (d) {}

				a._iO._oncanplay && a._iO._oncanplay()
			}),
			canplaythrough : m(function () {
				var a = this._t;
				a.loaded || (a._onbufferchange(0), a._whileloading(a.bytesLoaded, a.bytesTotal, a._get_html5_duration()), a._onload(!0))
			}),
			ended : m(function () {
				this._t._onfinish()
			}),
			error : m(function () {
				this._t._onload(!1)
			}),
			loadeddata : m(function () {
				var a = this._t;
				if (!a._loaded && !ya)
					a.duration = a._get_html5_duration()
			}),
			loadedmetadata : m(function () {}),
			loadstart : m(function () {
				this._t._onbufferchange(1)
			}),
			play : m(function () {
				this._t._onbufferchange(0)
			}),
			playing : m(function () {
				this._t._onbufferchange(0)
			}),
			progress : m(function (a) {
				var c = this._t,
				d,
				b,
				g = 0,
				g = a.target.buffered;
				d = a.loaded || 0;
				var f = a.total || 1;
				c.buffered = [];
				if (g && g.length) {
					for (d = 0, b = g.length; d < b; d++)
						c.buffered.push({
							start : g.start(d),
							end : g.end(d)
						});
					g = g.end(0) - g.start(0);
					d = g / a.target.duration
				}
				isNaN(d) || (c._onbufferchange(0), c._whileloading(d, f, c._get_html5_duration()), d && f && d === f && v.canplaythrough.call(this, a))
			}),
			ratechange : m(function () {}),
			suspend : m(function (a) {
				var c = this._t;
				v.progress.call(this, a);
				c._onsuspend()
			}),
			stalled : m(function () {}),
			timeupdate : m(function () {
				this._t._onTimer()
			}),
			waiting : m(function () {
				this._t._onbufferchange(1)
			})
		};
		ba = function (a) {
			return a.serverURL || a.type && R(a.type) ? !1 : a.type ? P({
				type : a.type
			}) : P({
				url : a.url
			}) || c.html5Only
		};
		ua = function (a, c) {
			if (a)
				a.src = c
		};
		P = function (a) {
			if (!c.useHTML5Audio || !c.hasHTML5)
				return !1;
			var e = a.url || null,
			a = a.type || null,
			d = c.audioFormats,
			b;
			if (a && "undefined" !== typeof c.html5[a])
				return c.html5[a] && !R(a);
			if (!x) {
				x = [];
				for (b in d)
					d.hasOwnProperty(b) && (x.push(b), d[b].related && (x = x.concat(d[b].related)));
				x = RegExp("\\.(" + x.join("|") + ")(\\?.*)?$", "i")
			}
			b = e ? e.toLowerCase().match(x) : null;
			!b || !b.length ? a && (e = a.indexOf(";"), b = (-1 !== e ? a.substr(0, e) : a).substr(6)) : b = b[1];
			b && "undefined" !== typeof c.html5[b] ? e = c.html5[b] && !R(b) : (a = "audio/" + b, e = c.html5.canPlayType({
							type : a
						}), e = (c.html5[b] = e) && c.html5[a] && !R(a));
			return e
		};
		Ma = function () {
			function a(a) {
				var b,
				d,
				f = b = !1;
				if (!e || "function" !== typeof e.canPlayType)
					return b;
				if (a instanceof Array) {
					for (b = 0, d = a.length; b < d && !f; b++)
						if (c.html5[a[b]] || e.canPlayType(a[b]).match(c.html5Test))
							f = !0, c.html5[a[b]] = !0, c.flash[a[b]] = !!a[b].match(Sa);
					b = f
				} else
					a = e && "function" === typeof e.canPlayType ? e.canPlayType(a) : !1, b = !(!a || !a.match(c.html5Test));
				return b
			}
			if (!c.useHTML5Audio || "undefined" === typeof Audio)
				return !1;
			var e = "undefined" !== typeof Audio ? Pa ? new Audio(null) : new Audio : null,
			d,
			b,
			g = {},
			f;
			f = c.audioFormats;
			for (d in f)
				if (f.hasOwnProperty(d) && (b = "audio/" + d, g[d] = a(f[d].type), g[b] = g[d], d.match(Sa) ? (c.flash[d] = !0, c.flash[b] = !0) : (c.flash[d] = !1, c.flash[b] = !1), f[d] && f[d].related))
					for (b = f[d].related.length - 1; 0 <= b; b--)
						g["audio/" + f[d].related[b]] = g[d], c.html5[f[d].related[b]] = g[d], c.flash[f[d].related[b]] = g[d];
			g.canPlayType = e ? a : null;
			c.html5 = r(c.html5, g);
			return !0
		};
		u = function () {};
		Y = function (a) {
			if (8 === j && 1 < a.loops && a.stream)
				a.stream = !1;
			return a
		};
		Z = function (a) {
			if (a && !a.usePolicyFile && (a.onid3 || a.usePeakData || a.useWaveformData || a.useEQData))
				a.usePolicyFile = !0;
			return a
		};
		H = function () {};
		ha = function () {
			return !1
		};
		Ga = function (a) {
			for (var c in a)
				a.hasOwnProperty(c) && "function" === typeof a[c] && (a[c] = ha)
		};
		X = function (a) {
			"undefined" === typeof a && (a = !1);
			(s || a) && c.disable(a)
		};
		Ha = function (a) {
			var e = null;
			if (a)
				if (a.match(/\.swf(\?.*)?$/i)) {
					if (e = a.substr(a.toLowerCase().lastIndexOf(".swf?") + 4))
						return a
				} else
					a.lastIndexOf("/") !== a.length - 1 && (a += "/");
			a = (a && -1 !== a.lastIndexOf("/") ? a.substr(0, a.lastIndexOf("/") + 1) : "./") + c.movieURL;
			c.noSWFCache && (a += "?ts=" + (new Date).getTime());
			return a
		};
		ma = function () {
			j = parseInt(c.flashVersion, 10);
			if (8 !== j && 9 !== j)
				c.flashVersion = j = 8;
			var a = c.debugMode || c.debugFlash ? "_debug.swf" : ".swf";
			if (c.useHTML5Audio && !c.html5Only && c.audioFormats.mp4.required && 9 > j)
				c.flashVersion = j = 9;
			c.version = c.versionNumber + (c.html5Only ? " (HTML5-only mode)" : 9 === j ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
			8 < j ? (c.defaultOptions = r(c.defaultOptions, c.flash9Options), c.features.buffering = !0, c.defaultOptions = r(c.defaultOptions, c.movieStarOptions), c.filePatterns.flash9 = RegExp("\\.(mp3|" + Va.join("|") + ")(\\?.*)?$", "i"), c.features.movieStar = !0) : c.features.movieStar = !1;
			c.filePattern = c.filePatterns[8 !== j ? "flash9" : "flash8"];
			c.movieURL = (8 === j ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", a);
			c.features.peakData = c.features.waveformData = c.features.eqData = 8 < j
		};
		Fa = function (a, c) {
			if (!i)
				return !1;
			i._setPolling(a, c)
		};
		qa = function () {
			if (c.debugURLParam.test(ga))
				c.debugMode = !0
		};
		p = this.getSoundById;
		G = function () {
			var a = [];
			c.debugMode && a.push("sm2_debug");
			c.debugFlash && a.push("flash_debug");
			c.useHighPerformance && a.push("high_performance");
			return a.join(" ")
		};
		sa = function () {
			u("fbHandler");
			var a = c.getMoviePercent(),
			e = {
				type : "FLASHBLOCK"
			};
			if (c.html5Only)
				return !1;
			if (c.ok()) {
				if (c.oMC)
					c.oMC.className = [G(), "movieContainer", "swf_loaded" + (c.didFlashBlock ? " swf_unblocked" : "")].join(" ")
			} else {
				if (n)
					c.oMC.className = G() + " movieContainer " + (null === a ? "swf_timedout" : "swf_error");
				c.didFlashBlock = !0;
				B({
					type : "ontimeout",
					ignoreInit : !0,
					error : e
				});
				F(e)
			}
		};
		la = function (a, c, d) {
			"undefined" === typeof w[a] && (w[a] = []);
			w[a].push({
				method : c,
				scope : d || null,
				fired : !1
			})
		};
		B = function (a) {
			a || (a = {
					type : c.ok() ? "onready" : "ontimeout"
				});
			if (!k && a && !a.ignoreInit || "ontimeout" === a.type && (c.ok() || s && !a.ignoreInit))
				return !1;
			var e = {
				success : a && a.ignoreInit ? c.ok() : !s
			},
			d = a && a.type ? w[a.type] || [] : [],
			b = [],
			g,
			e = [e],
			f = n && c.useFlashBlock && !c.ok();
			if (a.error)
				e[0].error = a.error;
			for (a = 0, g = d.length; a < g; a++)
				!0 !== d[a].fired && b.push(d[a]);
			if (b.length)
				for (a = 0, g = b.length; a < g; a++)
					if (b[a].scope ? b[a].method.apply(b[a].scope, e) : b[a].method.apply(this, e), !f)
						b[a].fired = !0;
			return !0
		};
		C = function () {
			h.setTimeout(function () {
				c.useFlashBlock && sa();
				B();
				"function" === typeof c.onload && c.onload.apply(h);
				c.waitForWindowLoad && o.add(h, "load", C)
			}, 1)
		};
		wa = function () {
			if ("undefined" !== typeof t)
				return t;
			var a = !1,
			c = navigator,
			d = c.plugins,
			b,
			g = h.ActiveXObject;
			if (d && d.length)
				(c = c.mimeTypes) && c["application/x-shockwave-flash"] && c["application/x-shockwave-flash"].enabledPlugin && c["application/x-shockwave-flash"].enabledPlugin.description && (a = !0);
			else if ("undefined" !== typeof g) {
				try {
					b = new g("ShockwaveFlash.ShockwaveFlash")
				} catch (f) {}

				a = !!b
			}
			return t = a
		};
		La = function () {
			var a,
			e,
			d = c.audioFormats;
			if (xa && q.match(/os (1|2|3_0|3_1)/i)) {
				if (c.hasHTML5 = !1, c.html5Only = !0, c.oMC)
					c.oMC.style.display = "none"
			} else if (c.useHTML5Audio)
				c.hasHTML5 = !c.html5 || !c.html5.canPlayType ? !1 : !0;
			if (c.useHTML5Audio && c.hasHTML5)
				for (e in d)
					if (d.hasOwnProperty(e) && (d[e].required && !c.html5.canPlayType(d[e].type) || c.preferFlash && (c.flash[e] || c.flash[d[e].type])))
						a = !0;
			c.ignoreFlash && (a = !1);
			c.html5Only = c.hasHTML5 && c.useHTML5Audio && !a;
			return !c.html5Only
		};
		aa = function (a) {
			var e,
			d,
			b = 0;
			if (a instanceof Array) {
				for (e = 0, d = a.length; e < d; e++)
					if (a[e]instanceof Object) {
						if (c.canPlayMIME(a[e].type)) {
							b = e;
							break
						}
					} else if (c.canPlayURL(a[e])) {
						b = e;
						break
					}
				if (a[b].url)
					a[b] = a[b].url;
				a = a[b]
			}
			return a
		};
		Ia = function (a) {
			if (!a._hasTimer)
				a._hasTimer = !0, !za && c.html5PollingInterval && (null === O && 0 === $ && (O = h.setInterval(Ka, c.html5PollingInterval)), $++)
		};
		Ja = function (a) {
			if (a._hasTimer)
				a._hasTimer = !1, !za && c.html5PollingInterval && $--
		};
		Ka = function () {
			var a;
			if (null !== O && !$)
				return h.clearInterval(O), O = null, !1;
			for (a = c.soundIDs.length - 1; 0 <= a; a--)
				c.sounds[c.soundIDs[a]].isHTML5 && c.sounds[c.soundIDs[a]]._hasTimer && c.sounds[c.soundIDs[a]]._onTimer()
		};
		F = function (a) {
			a = "undefined" !== typeof a ? a : {};
			"function" === typeof c.onerror && c.onerror.apply(h, [{
						type : "undefined" !== typeof a.type ? a.type : null
					}
				]);
			"undefined" !== typeof a.fatal && a.fatal && c.disable()
		};
		Na = function () {
			if (!Qa || !wa())
				return !1;
			var a = c.audioFormats,
			e,
			d;
			for (d in a)
				if (a.hasOwnProperty(d) && ("mp3" === d || "mp4" === d))
					if (c.html5[d] = !1, a[d] && a[d].related)
						for (e = a[d].related.length - 1; 0 <= e; e--)
							c.html5[a[d].related[e]] = !1
		};
		this._setSandboxType = function () {};
		this._externalInterfaceOK = function () {
			if (c.swfLoaded)
				return !1;
			(new Date).getTime();
			c.swfLoaded = !0;
			ca = !1;
			Qa && Na();
			setTimeout(ia, y ? 100 : 1)
		};
		W = function (a, e) {
			function d(a, b) {
				return '<param name="' + a + '" value="' + b + '" />'
			}
			if (J && K)
				return !1;
			if (c.html5Only)
				return ma(), c.oMC = S(c.movieID), ia(), K = J = !0, !1;
			var b = e || c.url,
			g = c.altURL || b,
			f;
			f = pa();
			var h,
			i,
			j = G(),
			k,
			m = null,
			m = (m = l.getElementsByTagName("html")[0]) && m.dir && m.dir.match(/rtl/i),
			a = "undefined" === typeof a ? c.id : a;
			ma();
			c.url = Ha(Ba ? b : g);
			e = c.url;
			c.wmode = !c.wmode && c.useHighPerformance ? "transparent" : c.wmode;
			if (null !== c.wmode && (q.match(/msie 8/i) || !y && !c.useHighPerformance) && navigator.platform.match(/win32|win64/i))
				c.wmode = null;
			f = {
				name : a,
				id : a,
				src : e,
				quality : "high",
				allowScriptAccess : c.allowScriptAccess,
				bgcolor : c.bgColor,
				pluginspage : Ta + "www.macromedia.com/go/getflashplayer",
				title : "JS/Flash audio component (SoundManager 2)",
				type : "application/x-shockwave-flash",
				wmode : c.wmode,
				hasPriority : "true"
			};
			if (c.debugFlash)
				f.FlashVars = "debug=1";
			c.wmode || delete f.wmode;
			if (y)
				b = l.createElement("div"), i = ['<object id="' + a + '" data="' + e + '" type="' + f.type + '" title="' + f.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + Ta + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', d("movie", e), d("AllowScriptAccess", c.allowScriptAccess), d("quality", f.quality), c.wmode ? d("wmode", c.wmode) : "", d("bgcolor", c.bgColor), d("hasPriority", "true"), c.debugFlash ? d("FlashVars", f.FlashVars) : "", "</object>"].join("");
			else
				for (h in b = l.createElement("embed"), f)
					f.hasOwnProperty(h) && b.setAttribute(h, f[h]);
			qa();
			j = G();
			if (f = pa())
				if (c.oMC = S(c.movieID) || l.createElement("div"), c.oMC.id) {
					k = c.oMC.className;
					c.oMC.className = (k ? k + " " : "movieContainer") + (j ? " " + j : "");
					c.oMC.appendChild(b);
					if (y)
						h = c.oMC.appendChild(l.createElement("div")), h.className = "sm2-object-box", h.innerHTML = i;
					K = !0
				} else {
					c.oMC.id = c.movieID;
					c.oMC.className = "movieContainer " + j;
					h = j = null;
					if (!c.useFlashBlock)
						if (c.useHighPerformance)
							j = {
								position : "fixed",
								width : "8px",
								height : "8px",
								bottom : "0px",
								left : "0px",
								overflow : "hidden"
							};
						else if (j = {
								position : "absolute",
								width : "6px",
								height : "6px",
								top : "-9999px",
								left : "-9999px"
							}, m)
							j.left = Math.abs(parseInt(j.left, 10)) + "px";
					if (Xa)
						c.oMC.style.zIndex = 1E4;
					if (!c.debugFlash)
						for (k in j)
							j.hasOwnProperty(k) && (c.oMC.style[k] = j[k]);
					try {
						y || c.oMC.appendChild(b);
						f.appendChild(c.oMC);
						if (y)
							h = c.oMC.appendChild(l.createElement("div")), h.className = "sm2-object-box", h.innerHTML = i;
						K = !0
					} catch (n) {
						throw Error(u("domError") + " \n" + n.toString());
					}
				}
			return J = !0
		};
		V = function () {
			if (c.html5Only)
				return W(), !1;
			if (i)
				return !1;
			i = c.getMovie(c.id);
			if (!i)
				M ? (y ? c.oMC.innerHTML = ra : c.oMC.appendChild(M), M = null, J = !0) : W(c.id, c.url), i = c.getMovie(c.id);
			"function" === typeof c.oninitmovie && setTimeout(c.oninitmovie, 1);
			return !0
		};
		D = function () {
			setTimeout(Ea, 1E3)
		};
		Ea = function () {
			var a,
			e = !1;
			if (N)
				return !1;
			N = !0;
			o.remove(h, "load", D);
			if (ca && !Aa)
				return !1;
			k || (a = c.getMoviePercent(), 0 < a && 100 > a && (e = !0));
			setTimeout(function () {
				a = c.getMoviePercent();
				if (e)
					return N = !1, h.setTimeout(D, 1), !1;
				!k && Ra && (null === a ? c.useFlashBlock || 0 === c.flashLoadTimeout ? c.useFlashBlock && sa() : X(!0) : 0 !== c.flashLoadTimeout && X(!0))
			}, c.flashLoadTimeout)
		};
		U = function () {
			if (Aa || !ca)
				return o.remove(h, "focus", U), !0;
			Aa = Ra = !0;
			N = !1;
			D();
			o.remove(h, "focus", U);
			return !0
		};
		Oa = function () {
			var a,
			e = [];
			if (c.useHTML5Audio && c.hasHTML5)
				for (a in c.audioFormats)
					c.audioFormats.hasOwnProperty(a) && e.push(a + ": " + c.html5[a] + (!c.html5[a] && t && c.flash[a] ? " (using flash)" : c.preferFlash && c.flash[a] && t ? " (preferring flash)" : !c.html5[a] ? " (" + (c.audioFormats[a].required ? "required, " : "") + "and no flash support)" : ""))
		};
		L = function (a) {
			if (k)
				return !1;
			if (c.html5Only)
				return k = !0, C(), !0;
			var e = !0,
			d;
			if (!c.useFlashBlock || !c.flashLoadTimeout || c.getMoviePercent())
				k = !0, s && (d = {
						type : !t && n ? "NO_FLASH" : "INIT_TIMEOUT"
					});
			if (s || a) {
				if (c.useFlashBlock && c.oMC)
					c.oMC.className = G() + " " + (null === c.getMoviePercent() ? "swf_timedout" : "swf_error");
				B({
					type : "ontimeout",
					error : d,
					ignoreInit : !0
				});
				F(d);
				e = !1
			}
			s || (c.waitForWindowLoad && !ja ? o.add(h, "load", C) : C());
			return e
		};
		Da = function () {
			var a,
			e = c.setupOptions;
			for (a in e)
				e.hasOwnProperty(a) && ("undefined" === typeof c[a] ? c[a] = e[a] : c[a] !== e[a] && (c.setupOptions[a] = c[a]))
		};
		ia = function () {
			if (k)
				return !1;
			if (c.html5Only) {
				if (!k)
					o.remove(h, "load", c.beginDelayedInit), c.enabled = !0, L();
				return !0
			}
			V();
			try {
				i._externalInterfaceTest(!1),
				Fa(!0, c.flashPollingInterval || (c.useHighPerformance ? 10 : 50)),
				c.debugMode || i._disableDebug(),
				c.enabled = !0,
				c.html5Only || o.add(h, "unload", ha)
			} catch (a) {
				return F({
					type : "JS_TO_FLASH_EXCEPTION",
					fatal : !0
				}),
				X(!0),
				L(),
				!1
			}
			L();
			o.remove(h, "load", c.beginDelayedInit);
			return !0
		};
		E = function () {
			if (oa)
				return !1;
			oa = !0;
			Da();
			qa();
			!t && c.hasHTML5 && c.setup({
				useHTML5Audio : !0,
				preferFlash : !1
			});
			Ma();
			c.html5.usingFlash = La();
			n = c.html5.usingFlash;
			Oa();
			!t && n && c.setup({
				flashLoadTimeout : 1
			});
			l.removeEventListener && l.removeEventListener("DOMContentLoaded", E, !1);
			V();
			return !0
		};
		va = function () {
			"complete" === l.readyState && (E(), l.detachEvent("onreadystatechange", va));
			return !0
		};
		na = function () {
			ja = !0;
			o.remove(h, "load", na)
		};
		wa();
		o.add(h, "focus", U);
		o.add(h, "load", D);
		o.add(h, "load", na);
		l.addEventListener ? l.addEventListener("DOMContentLoaded", E, !1) : l.attachEvent ? l.attachEvent("onreadystatechange", va) : F({
			type : "NO_DOM2_EVENTS",
			fatal : !0
		});
		"complete" === l.readyState && setTimeout(E, 100)
	}
	var da = null;
	if ("undefined" === typeof SM2_DEFER || !SM2_DEFER)
		da = new Q;
	ea.SoundManager = Q;
	ea.soundManager = da
})(window);