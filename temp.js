! function (e) {
	function t(t) {
		for (var n, s, i = t[0], c = t[1], l = t[2], m = 0, _ = []; m < i.length; m++) s = i[m], Object.prototype.hasOwnProperty.call(o, s) && o[s] && _.push(o[s][0]), o[s] = 0;
		for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
		for (d && d(t); _.length;) _.shift()();
		return r.push.apply(r, l || []), a()
	}

	function a() {
		for (var e, t = 0; t < r.length; t++) {
			for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
				var c = a[i];
				0 !== o[c] && (n = !1)
			}
			n && (r.splice(t--, 1), e = s(s.s = a[0]))
		}
		return e
	}
	var n = {},
		o = {
			0: 0
		},
		r = [];

	function s(t) {
		if (n[t]) return n[t].exports;
		var a = n[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports
	}
	s.m = e, s.c = n, s.d = function (e, t, a) {
		s.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, s.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, s.t = function (e, t) {
		if (1 & t && (e = s(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (s.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) s.d(a, n, function (t) {
				return e[t]
			}.bind(null, n));
		return a
	}, s.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return s.d(t, "a", t), t
	}, s.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, s.p = "";
	var i = window.webpackJsonp = window.webpackJsonp || [],
		c = i.push.bind(i);
	i.push = t, i = i.slice();
	for (var l = 0; l < i.length; l++) t(i[l]);
	var d = c;
	r.push([27, 1]), a()
}({
	27: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(0),
			o = a(29),
			r = a(33),
			s = a(76);

		function i() {
			o.render(n.createElement(r.default, null), document.getElementById("root")), o.render(n.createElement(s.default, null), document.getElementById("loader"))
		}
		t.initialize = i, i()
	},
	33: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(0),
			o = a(34);
		a(63), a(65);
		class r extends n.Component {
			render() {
				return n.createElement(n.Fragment, null, n.createElement(o.default, null))
			}
		}
		t.default = r
	},
	34: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(0),
			o = a(35),
			r = a(57),
			s = a(6);
		t.default = () => n.createElement(r.BrowserRouter, null, n.createElement(s.Switch, null, n.createElement(r.Route, {
			exact: !0,
			path: "/",
			component: o.default
		}), n.createElement(r.Route, {
			exact: !0,
			path: "/home",
			render: () => n.createElement("div", null, "Home")
		}), n.createElement(r.Route, {
			path: "/:FarmName",
			component: o.default
		})))
	},
	35: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(0),
			o = a(36),
			r = a(55);
		class s extends n.Component {
			constructor(e) {
				super(e), this.navigateToHome = () => {
					this.props.history.push("/home")
				}, console.log(e), this.state = {
					growerData: {
						grower_address: "",
						grower_sfdc_id: "",
						grower_phone: "",
						grower_latitude: "",
						grower_longitude: "",
						grower_name: "",
						grower_zip: "",
						grower_email: "",
						grower_reseller: "",
						grower_fsap_id: "",
						grower_state: "",
						grower_current_channel: "",
						__location: {
							grower_zip: "",
							grower_city: "",
							grower_state: ""
						},
						__ordersInfo: [],
						__acuraInfo: {
							target_next_year: "",
							actual_next_year: "",
							status_curr_year: "",
							prospect_next_year: ""
						},
						__contacts: []
					},
					farmId: r.default.load("farmId") ? r.default.load("farmId") : -1 != this.props.location.search.indexOf("farmId") ? this.props.location.search.split("=")[1] : "",
					prospectStatus: "Acquire",
					showPopup: !1,
					_curr_year: (new Date).getFullYear()
				}
			}
			componentDidMount() {
				let e = {
						endPoint: `grower/${this.state.farmId?this.state.farmId:-1!=this.props.location.search.indexOf("farmId")?this.props.location.search.split("=")[1]:""}?acessToken=jhuy78873bygie7ik98983jbjy`,
						showLoader: !!this.state.farmId
					},
					t = 0,
					a = 0,
					n = 0,
					r = 0,
					s = 0,
					i = 0,
					c = 0,
					l = 0,
					d = 0,
					m = 0,
					_ = 0,
					p = 0,
					u = (new Date).getFullYear();
				console.log(u), o.apiService.get(e).then(e => {
					if ("success" === e.data.message) {
						let o = {};
						e.data.data.acura && e.data.data.acura.map(e => {
							e.year == u && "actual" === e.flag_type ? o.status_curr_year = e.flag_value : e.year == u + 1 && "actual" === e.flag_type ? o.actual_next_year = e.flag_value : e.year == u + 1 && "target" === e.flag_type ? o.target_next_year = e.flag_value : e.year == u + 1 && "prospect" === e.flag_type ? o.prospect_next_year = e.flag_value : e.year == u + 2 && "prospect" === e.flag_type ? o.prospect_next_next_year = e.flag_value : e.year == u + 2 && "SecondarySegment" === e.flag_type && (o.sec_segment = e.flag_value)
						});
						let f = {
								type: "Corn",
								_prev_year: "",
								_curr_year: "",
								_next_year: ""
							},
							h = {
								type: "Soybeans",
								_prev_year: "",
								_curr_year: "",
								_next_year: ""
							},
							y = {
								type: "Enogen (fuel)",
								_prev_year: "",
								_curr_year: "",
								_next_year: ""
							},
							g = {
								type: "Enogen (feed)",
								_prev_year: "",
								_curr_year: "",
								_next_year: ""
							};
						e.data.data.orders && e.data.data.orders.map(o => {
							if (e.data.data.grower_fsap_id === o.grower_fsap_id.split("FNDG00")[1]) switch (!0) {
								case "COR" === o.crop_type:
									"2018" === o.year ? (t += Number(o.quantity), f._prev_year = `${new Intl.NumberFormat("en-IN").format(t)} ${o.uom}`) : "2019" === o.year ? (a += Number(o.quantity), f._curr_year = `${new Intl.NumberFormat("en-IN").format(a)} ${o.uom}`) : "2020" === o.year && (n += Number(o.quantity), f._next_year = `${new Intl.NumberFormat("en-IN").format(n)} ${o.uom}`);
									break;
								case "SYB" === o.crop_type:
									"2018" === o.year ? (r += Number(o.quantity), h._prev_year = `${new Intl.NumberFormat("en-IN").format(r)} ${o.uom}`) : "2019" === o.year ? (s += Number(o.quantity), h._curr_year = `${new Intl.NumberFormat("en-IN").format(s)} ${o.uom}`) : "2020" === o.year && (i += Number(o.quantity), h._next_year = `${new Intl.NumberFormat("en-IN").format(i)} ${o.uom}`);
									break;
								case "FUEL" === o.crop_type:
									"2018" === o.year ? (m += Number(o.quantity), y._prev_year = `${new Intl.NumberFormat("en-IN").format(m)} ${o.uom}`) : "2019" === o.year ? (_ += Number(o.quantity), y._curr_year = `${new Intl.NumberFormat("en-IN").format(_)} ${o.uom}`) : "2020" === o.year && (p += Number(o.quantity), y._next_year = `${new Intl.NumberFormat("en-IN").format(p)} ${o.uom}`);
									break;
								case "FEED" === o.crop_type:
									"2018" === o.year ? (c += Number(o.quantity), g._prev_year = `${new Intl.NumberFormat("en-IN").format(c)} ${o.uom}`) : "2019" === o.year ? (l += Number(o.quantity), g._curr_year = `${new Intl.NumberFormat("en-IN").format(l)} ${o.uom}`) : "2020" === o.year && (d += Number(o.quantity), g._next_year = `${new Intl.NumberFormat("en-IN").format(d)} ${o.uom}`)
							}
						});
						let x = {};
						e.data.data.location && e.data.data.location.map(e => {
							x.grower_zip = e.grower_zip, x.grower_city = e.grower_city, x.grower_state = e.grower_state
						});
						let b = this.state.growerData;
						b.__ordersInfo = [f, h, y, g], b.__location = x, b.__acuraInfo = o, b.__contacts = e.data.data.contact, console.log(o), this.setState({
							growerData: Object.assign({}, b, e.data.data)
						})
					}
				})
			}
			render() {
				const {
					growerData: e,
					farmId: t,
					_curr_year: a
				} = this.state;
				console.log(e);
				const o = a - 1,
					r = a + 1;
				return t ? n.createElement("div", {
					className: "main_section"
				}, n.createElement("div", {
					className: "head_section"
				}, n.createElement("div", null), n.createElement("p", {
					className: "arrow_icon_section"
				}, n.createElement("span", {
					className: "icon-keyboard_backspace keyboard_backspace ",
					onClick: this.navigateToHome
				}), "  All growers"), n.createElement("h1", {
					className: "head_title"
				}, e.grower_name), n.createElement("p", null, "#", e.grower_fsap_id)), n.createElement("div", {
					className: "cards_main_section"
				}, n.createElement("div", {
					className: "card_left_section"
				}, n.createElement("div", {
					className: "current_channel_card"
				}, n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, "Current Channel"), n.createElement("span", {
					className: "right_text current_cannel_name"
				}, e.grower_current_channel)), n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, "Reseller"), n.createElement("span", {
					className: "right_text"
				}, e.grower_reseller)), n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, " ", r, " ACURA Actual"), n.createElement("span", {
					className: "right_text"
				}, e.__acuraInfo.actual_next_year)), n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, r, " ACURA Target"), n.createElement("span", {
					className: "right_text"
				}, e.__acuraInfo.target_next_year)), n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, r + 1, " ACURA Target"), n.createElement("span", {
					className: "right_text atag"
				}, e.__acuraInfo.target_next_next_year)), n.createElement("div", {
					className: "text_content"
				}, n.createElement("span", {
					className: "left_text"
				}, r + 2, " Secondary Segment"), n.createElement("span", {
					className: "right_text"
				}, e.__acuraInfo.sec_segment))), n.createElement("div", {
					className: "location_card"
				}, n.createElement("h3", {
					className: "card_title"
				}, "Location"), n.createElement("div", {
					className: "location_content"
				}, n.createElement("span", {
					className: "left_text"
				}, "AgriCore zone"), n.createElement("span", {
					className: "right_text"
				})), n.createElement("div", {
					className: "location_content"
				}, n.createElement("span", {
					className: "left_text"
				}, "Sales group description"), n.createElement("span", {
					className: "right_text"
				}, "value")), n.createElement("div", {
					className: "location_content"
				}, n.createElement("span", {
					className: "left_text"
				}, "FIPS"), n.createElement("span", {
					className: "right_text"
				}, "value"))), n.createElement("div", {
					className: "sales_history_card"
				}, n.createElement("div", {
					className: "title_section"
				}, n.createElement("h3", {
					className: "card_title"
				}, "Sales History"), n.createElement("span", {
					className: "sale_card_right_title"
				}, "See orders")), n.createElement("div", {
					className: "sales_content head_sales_year"
				}, n.createElement("span", null, "Crop"), n.createElement("div", {
					className: "right_text_section head_sales_year"
				}, n.createElement("span", null, r), n.createElement("span", null, a), n.createElement("span", null, o))), e.__ordersInfo.map((e, t) => n.createElement("div", {
					key: t,
					className: "sales_content"
				}, n.createElement("span", {
					className: "sales_left_title"
				}, e.type), n.createElement("div", {
					className: "right_text_section responsive_sales_years"
				}, n.createElement("span", null, r), n.createElement("span", null, a), n.createElement("span", null, o)), n.createElement("div", {
					className: "right_text_section "
				}, n.createElement("span", null, " ", e._next_year), n.createElement("span", null, " ", e._curr_year), n.createElement("span", null, " ", e._prev_year)))))), n.createElement("div", {
					className: "card_right_section"
				}, n.createElement("div", {
					className: "account_info_card"
				}, n.createElement("h3", {
					className: "card_title"
				}, "Account Information"), (() => e.grower_phone ? n.createElement("p", {
					className: "account_info_text"
				}, e.grower_phone) : null)(), (() => e.grower_email ? n.createElement("p", {
					className: "account_info_text"
				}, e.grower_email) : null)(), n.createElement("div", {
					className: "account_info_sub_section"
				}, (() => e.grower_address ? n.createElement("p", null, e.grower_address, " ") : null)(), (() => (console.log(e), e.grower_city || e.grower_state || e.grower_zip ? n.createElement("p", null, e.grower_city, ", ", e.grower_state, " ", e.grower_zip) : null))())), (() => {
					console.log(e.__contacts.length);
					const t = e.__contacts.map(e => n.createElement("div", {
						key: e.contact_name,
						className: "contacts_info"
					}, n.createElement("span", {
						className: "contacts_info_title1"
					}, e.contact_name), n.createElement("div", {
						className: "contacts_info_adders"
					}, n.createElement("span", null, e.contact_phone)), n.createElement("div", {
						className: "contacts_info_adders"
					}, n.createElement("span", null, e.contact_address + ","), n.createElement("br", null), n.createElement("span", null, e.contact_city + ", "), n.createElement("span", null, e.contact_state + " - " + e.contact_zip))));
					return e.__contacts.length <= 0 ? null : (e.__contacts.length, n.createElement("div", {
						className: "contacts_card"
					}, n.createElement("h3", {
						className: "card_title"
					}, "Contacts"), n.createElement("div", {
						className: "contact_info_section"
					}, n.createElement("ul", null, t))))
				})()))) : n.createElement("div", {
					className: "main_section"
				}, n.createElement("div", {
					className: "cards_main_section errorMsg"
				}, n.createElement("div", null, n.createElement("strong", null, "Error!"), " Some thing went wrong please try again some time later.")))
			}
			changeValue(e) {
				"Cancel" != e && this.setState({
					prospectStatus: e
				}), this.togglePopup()
			}
			togglePopup() {
				this.setState({
					showPopup: !this.state.showPopup
				})
			}
		}
		t.default = s
	},
	36: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(37),
			o = a(54);
		t.apiService = new class {
			constructor() {
				this.axiosOptions = {
					timeout: 6e4
				}, this.contentHeaders = {
					Json: "application/json",
					FormData: "multipart/form-data",
					Plain: "text/plain"
				}, this.baseDomain = "https://grower360-api.syn-dpe.com", this.getHeadersByType = e => {
					const t = {};
					switch (e.headerType) {
						case this.contentHeaders.Json:
							t["Content-Type"] = "application/json";
							break;
						case this.contentHeaders.FormData:
							t["Content-Type"] = "multipart/form-data";
							break;
						case this.contentHeaders.Plain:
							t["Content-Type"] = "text/plain";
							break;
						default:
							t["Content-Type"] = "application/json"
					}
					return t
				}, this.get = e => {
					e.domain || (e.domain = this.baseDomain), e.headerType || (e.headerType = this.contentHeaders.Json), e.showLoader && this.loaderService.show();
					const t = e.endPoint + (e.id ? "/" + e.id : "");
					return n.default.get(t, {
						baseURL: e.domain,
						timeout: this.axiosOptions.timeout,
						params: e.payLoad,
						headers: this.getHeadersByType({
							requestMethod: "get",
							domain: e.domain,
							endPoint: e.endPoint,
							payload: e.payLoad,
							headerType: e.headerType,
							customHeaders: e.customHeaders
						})
					})
				}, this.post = e => {
					e.domain || (e.domain = this.baseDomain), e.headerType || (e.headerType = this.contentHeaders.Json), e.headerType !== this.contentHeaders.FormData && (e.payLoad = JSON.stringify(e.payLoad)), !1 !== e.showLoader && (e.showLoader = !0), e.showLoader && this.loaderService.show();
					const t = e.endPoint;
					return n.default.post(t, e.payLoad, {
						timeout: this.axiosOptions.timeout,
						baseURL: e.domain,
						headers: this.getHeadersByType({
							requestMethod: "post",
							domain: e.domain,
							endPoint: e.endPoint,
							payload: e.payLoad,
							headerType: e.headerType,
							customHeaders: e.customHeaders
						})
					})
				}, this.put = e => {
					e.domain || (e.domain = this.baseDomain), e.headerType || (e.headerType = this.contentHeaders.Json), e.headerType !== this.contentHeaders.FormData && (e.payLoad = JSON.stringify(e.payLoad)), !1 !== e.showLoader && (e.showLoader = !0), e.showLoader && this.loaderService.show();
					const t = e.endPoint + (e.id ? "/" + e.id : "");
					return n.default.put(t, e.payLoad, {
						timeout: this.axiosOptions.timeout,
						baseURL: e.domain,
						headers: this.getHeadersByType({
							requestMethod: "put",
							domain: e.domain,
							endPoint: e.endPoint,
							payload: e.payLoad,
							headerType: e.headerType,
							customHeaders: e.customHeaders
						})
					})
				}, this.delete = e => {
					e.domain || (e.domain = this.baseDomain), e.headerType || (e.headerType = this.contentHeaders.Json), !1 !== e.showLoader && (e.showLoader = !0), e.showLoader && this.loaderService.show();
					const t = e.endPoint + (e.id ? "/" + e.id : "");
					return n.default.delete(t, {
						baseURL: e.domain,
						headers: this.getHeadersByType({
							requestMethod: "delete",
							domain: e.domain,
							endPoint: e.endPoint,
							payload: e.payLoad,
							headerType: e.headerType,
							customHeaders: e.customHeaders
						})
					})
				}, this.loaderService = new o.LoaderService, n.default.interceptors.response.use(e => (this.loaderService.hide(), e.data && e.data.status > 300 && alert(e.data.message), e), e => {
					this.loaderService.hide(), e.response && e.response.status
				})
			}
		}
	},
	54: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.LoaderService = class {
			constructor() {
				this.activeRequests = 0, this.element = document.getElementById("loader")
			}
			show() {
				this.activeRequests++, 1 === this.activeRequests && (this.element.style.display = "block", document.body.style.overflow = "hidden")
			}
			hide() {
				1 === this.activeRequests && (this.element.style.display = "none", document.body.style.overflow = "auto"), this.activeRequests > 0 && this.activeRequests--
			}
		}
	},
	63: function (e, t, a) {
		var n = a(64);
		"string" == typeof n && (n = [
			[e.i, n, ""]
		]);
		var o = {
			insert: "head",
			singleton: !1
		};
		a(12)(n, o);
		n.locals && (e.exports = n.locals)
	},
	64: function (e, t, a) {
		var n = a(11);
		(e.exports = n(!1)).push([e.i, ".main_section .card_title{font-size:24px;font-family:'Inter-SemiBold', 'sans-serif'}.main_section p,.main_section span{font-size:15px}.main_section .nav_bar{padding:16px;font-size:17px;color:white;background-color:#AAB400;font-family:'Inter-SemiBold', 'sans-serif'}.main_section .head_section{padding:0px 32px;margin-bottom:15px}.main_section .head_section .arrow_icon_section{margin-top:16px;margin-bottom:10px;font-size:17px;color:#5C6575}.main_section .head_section .arrow_icon_section .keyboard_backspace{margin-right:11px;cursor:pointer;font-size:12px}.main_section .head_section .head_title{font-size:27px;font-family:'Inter-SemiBold', 'sans-serif'}.main_section .cards_main_section{display:flex;justify-content:space-between;padding:0px 32px;width:calc(100% - 64px)}.main_section .card_left_section{width:70%;margin-right:20px}.main_section .card_right_section{width:30%}.main_section .current_channel_card{border:1px solid #CCD0D7;margin-bottom:17px;border-radius:4px}.main_section .text_content,.main_section .location_content,.main_section .sales_content{display:flex;justify-content:space-between;border-bottom:1px solid #CCD0D7;padding:14px 16px}.main_section .location_card,.main_section .sales_history_card,.main_section .account_info_card,.main_section .contacts_card{box-shadow:0 0 4px 1px #cecece;padding:16px;margin-bottom:17px;border-radius:4px}.main_section .location_content:nth-last-child(1),.main_section .sales_content:nth-last-child(1),.main_section .text_content:nth-last-child(1),.main_section .contacts_info:nth-last-child(1){border-bottom:none}.main_section .sales_content{padding:14px 0px}.main_section .sales_content .right_text_section{width:50%;display:flex;justify-content:space-between}.main_section .sales_content .right_text_section span{color:#171B27}.main_section .sales_content .head_sales_year{color:#5C6575}.main_section .sales_content .head_sales_year span{color:#5C6575}.main_section .sales_content .sales_left_title{color:#171B27;font-weight:bold}.main_section .left_text{color:#5C6575}.main_section .right_text{color:#171B27}.main_section .location_content{padding:14px 0px}.main_section .sale_card_right_title,.main_section .current_cannel_name{color:#3666C4;cursor:pointer}.main_section .title_section{display:flex;justify-content:space-between}.main_section .account_info_text{padding:13px 0px;border-bottom:1px solid #CCD0D7;color:#3666C4;cursor:pointer}.main_section .account_info_sub_section{margin-top:13px;color:#171B27}.main_section .contacts_info_title1{color:#3666C4;cursor:pointer}.main_section .contacts_info_title2{color:#171B27}.main_section .contacts_info{padding:13px 0px;border-bottom:1px solid #CCD0D7}.main_section .contacts_info_adders p{font-size:13px;color:#5C6575;margin:2px 0px}.main_section .responsive_sales_years{display:none !important}.main_section .yearAlign{margin-left:-30px}.main_section .errorMsg{margin-top:15%;margin-left:30%;color:red}.main_section .popupTxt{color:#3666C4;width:50%}.main_section .modal{font-size:12px}.main_section .modal>.header{width:100%;font-size:18px;text-align:left;padding:5px}.main_section .subheader{width:100%;border-bottom:0.1px solid gray;font-size:12px;text-align:left;padding:5px}.main_section .modal>.content{width:100%;padding:10px 5px}.main_section .modal>.actions{margin:auto}.main_section .modal>.actions{width:100%;padding:10px 5px;text-align:center}.main_section .modal>.close{cursor:pointer;position:absolute;display:block;padding:2px 5px;line-height:20px;right:-10px;top:-10px;font-size:24px;background:#ffffff;border-radius:18px;border:1px solid #cfcece}.main_section .atag{color:#3666C4;margin-left:74%;text-align:right;float:right}.main_section .mainWrapper{width:100%}.main_section .myListContent{margin-top:30px}.main_section .myListModelHeaderTitle{font-size:16px !important}.main_section .myListModelContent ul{padding-left:0px !important}.main_section .myListModelContent li{cursor:pointer;list-style-type:none;padding:15px 10px;background-color:white;text-align:center;font-size:14px;margin-top:5px;margin-bottom:10px;border-radius:5px;color:black;font-weight:bold;background:#FFFFFF;border:1px solid #919294;box-sizing:border-box;border-radius:4px;font-family:SF Pro Text;font-style:normal;font-weight:400;font-size:15px;line-height:20px}.main_section .modelClose{border:1px solid #008661;box-sizing:border-box;border-radius:4px}.main_section .liCancel{border:1px solid #008661 !important}.main_section .popup{display:block;width:1200px;padding-left:0px}@media screen and (min-width: 320px) and (max-width: 767px){.main_section .cards_main_section{display:block;padding:0px;width:100%}.main_section .cards_main_section .current_channel_card{margin:17px 14px}.main_section .cards_main_section .card_left_section{width:100%}.main_section .cards_main_section .card_right_section{width:100%}.main_section .cards_main_section .card_title{font-size:17px}.main_section .cards_main_section .sales_content{display:block}.main_section .cards_main_section .sales_content .right_text_section{width:75%}.main_section .cards_main_section .sales_content .responsive_sales_years{margin-top:12px;display:flex !important;justify-content:space-between}.main_section .cards_main_section .sales_content .responsive_sales_years span{font-size:13px;color:#5C6575}.main_section .cards_main_section .head_sales_year{display:none}.main_section .cards_main_section .location_card,.main_section .cards_main_section .sales_history_card,.main_section .cards_main_section .account_info_card,.main_section .cards_main_section .contacts_card{border-radius:0px !important}}\n", ""])
	},
	65: function (e, t, a) {
		var n = a(66);
		"string" == typeof n && (n = [
			[e.i, n, ""]
		]);
		var o = {
			insert: "head",
			singleton: !1
		};
		a(12)(n, o);
		n.locals && (e.exports = n.locals)
	},
	66: function (e, t, a) {
		var n = a(11),
			o = a(67),
			r = a(68),
			s = a(69),
			i = a(70),
			c = a(71),
			l = a(72),
			d = a(73),
			m = a(74),
			_ = a(75);
		t = e.exports = n(!1);
		var p = o(r),
			u = o(s),
			f = o(i),
			h = o(c),
			y = o(l),
			g = o(l, {
				hash: "#iefix"
			}),
			x = o(d),
			b = o(m),
			w = o(_, {
				hash: "#Grower360"
			});
		t.push([e.i, "@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(" + p + ') format("woff2"),url(' + u + ") format(\"woff\")}@font-face{font-family:'Inter-SemiBold';font-style:normal;font-weight:600;font-display:swap;src:url(" + f + ') format("woff2"),url(' + h + ") format(\"woff\")}@font-face{font-family:'Grower360';src:url(" + y + ");src:url(" + g + ') format("embedded-opentype"),url(' + x + ') format("truetype"),url(' + b + ') format("woff"),url(' + w + ') format("svg");font-weight:normal;font-style:normal;font-display:block}[class^="icon-"],[class*=" icon-"]{font-family:\'Grower360\' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-keyboard_backspace:before{content:"\\e900";color:#5c6575}body,p,h1,h2,h3,ul,ol{padding:0px;margin:0px;font-family:\'Inter\',\'sans-serif\'}html,.root_section,body,#root{position:relative;height:100%;width:100%}\n', ""])
	},
	68: function (e, t, a) {
		e.exports = a.p + "fonts/77812e2fead777db0dc806b1eaabc7fd.woff2"
	},
	69: function (e, t, a) {
		e.exports = a.p + "fonts/41cd7069d7f578a69690178b818c0a2c.woff"
	},
	70: function (e, t, a) {
		e.exports = a.p + "fonts/3d011804596fb2ccde4af51830a9a7d5.woff2"
	},
	71: function (e, t, a) {
		e.exports = a.p + "fonts/8a12c702fa5c5e3ceed33f78e72b9bee.woff"
	},
	72: function (e, t, a) {
		e.exports = a.p + "fonts/40e832ade5eda9dc3787429f5fc62fcf.eot"
	},
	73: function (e, t, a) {
		e.exports = a.p + "fonts/611eccb957fea05ee15bc48a78168af6.ttf"
	},
	74: function (e, t, a) {
		e.exports = a.p + "fonts/e0347a4c03459eabc1d4c9bbae31171f.woff"
	},
	75: function (e, t, a) {
		e.exports = a.p + "assets/images/Grower360.svg"
	},
	76: function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = a(0);
		a(77);
		class o extends n.Component {
			render() {
				return n.createElement("div", {
					className: "loading-text"
				}, n.createElement("p", {
					className: "loading"
				}, "Loading"))
			}
		}
		t.default = o
	},
	77: function (e, t, a) {
		var n = a(78);
		"string" == typeof n && (n = [
			[e.i, n, ""]
		]);
		var o = {
			insert: "head",
			singleton: !1
		};
		a(12)(n, o);
		n.locals && (e.exports = n.locals)
	},
	78: function (e, t, a) {
		var n = a(11);
		(e.exports = n(!1)).push([e.i, "#loader{background:rgba(44,43,53,0.68);height:100%;width:100%;top:0;position:absolute;z-index:9999}#loader .loading-text{position:absolute;height:100%;width:100%;display:flex;align-items:center;justify-content:center}#loader .loading-text .loading{color:white;display:flex;font-size:17px}#loader .loading-text .loading:after{content:' .';animation:dots 1s steps(5, end) infinite;-webkit-animation:dots 1s steps(5, end) infinite;background-image:none}@keyframes dots{0%,20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}40%{color:white;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}60%{text-shadow:0.25em 0 0 white,0.5em 0 0 rgba(0,0,0,0)}80%,100%{text-shadow:.25em 0 0 white, .5em 0 0 white}}\n", ""])
	}
});
//# sourceMappingURL=main.js.map
