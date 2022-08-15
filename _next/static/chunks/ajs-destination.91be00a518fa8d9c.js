(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9464,5826],{41323:function(c,a,b){"use strict";function d(d,a){var b,c;return"boolean"==typeof(null==a?void 0:a.enabled)?a.enabled:null===(c=null===(b=null==d?void 0:d.__default)|| void 0===b?void 0:b.enabled)|| void 0===c||c}b.d(a,{n:function(){return d}})},62795:function(c,b,a){"use strict";a.r(b),a.d(b,{LegacyDestination:function(){return v},ajsDestinations:function(){return w}});var d=a(5163),e=a(64122),f=a(91946),g=a(61668),h=a(79677),i=a(37759),j=a(37624),k=a(41323),l=a(53826),m=a(42578),n=a(98552),o=a(46804),p=a(18767),q=a(22870),r=a(91329),s=a(63822);function t(a){return a.toLowerCase().replace(".","").replace(/\s+/g,"-")}function u(b,a){return void 0===a&&(a=!1),a?btoa(b).replace(/=/g,""):void 0}var v=function(){function b(b,e,a,c){void 0===a&&(a={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=b,this.version=e,this.settings=(0,d.pi)({},a),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=c,this.buffer=c.disableClientPersistence?new n.Z(4,[]):new o.$(4,"dest-".concat(b)),this.scheduleFlush()}return b.prototype.isLoaded=function(){return this._ready},b.prototype.ready=function(){var a;return null!==(a=this.onReady)&& void 0!==a?a:Promise.resolve()},b.prototype.load=function(b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,f=this;return(0,d.Jh)(this,function(g){switch(g.label){case 0:if(this._ready|| void 0!==this.onReady)return[2];return e=this,[4,function(b,c,e,f,g,h){return(0,d.mG)(this,void 0,void 0,function(){var i,j,k,l,m,n,o,p,q;return(0,d.Jh)(this,function(v){switch(v.label){case 0:j=u(i=t(e),h),k=(0,r.Kg)(),l="".concat(k,"/integrations/").concat(null!=j?j:i,"/").concat(f,"/").concat(null!=j?j:i,".dynamic.js.gz"),v.label=1;case 1:return v.trys.push([1,3,,4]),[4,(0,s.v)(l)];case 2:return v.sent(),function(g,h,i){var b,c,e;try{var f=(null!==(e=null===(c=null===(b=a.g.window)|| void 0===b?void 0:b.performance)|| void 0===c?void 0:c.getEntriesByName(g,"resource"))&& void 0!==e?e:[])[0];f&&h.stats.gauge("legacy_destination_time",Math.round(f.duration),(0,d.ev)([i],f.duration<100?["cached"]:[],!0))}catch(j){}}(l,b,e),[3,4];case 3:throw m=v.sent(),b.stats.gauge("legacy_destination_time",-1,["plugin:".concat(e),"failed"]),m;case 4:return[4,Promise.all((n=window["".concat(i,"Deps")]).map(function(a){return(0,s.v)(k+a+".gz")}))];case 5:return v.sent(),window["".concat(i,"Loader")](),(o=window["".concat(i,"Integration")]).Integration&&(o(p={user:function(){return c.user()},addIntegration:function(){}}),o=o.Integration),(q=new o(g)).analytics=c,[2,q]}})})}(b,c,this.name,this.version,this.settings,this.options.obfuscate)];case 1:e.integration=g.sent(),this.onReady=new Promise(function(b){var a=function(){f._ready=!0,b(!0)};f.integration.once("ready",a)}),this.onInitialize=new Promise(function(b){var a=function(){f._initialized=!0,b(!0)};f.integration.on("initialize",a)});try{b.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name),]),this.integration.initialize()}catch(h){throw b.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name),]),h}return[2]}})})},b.prototype.unload=function(a,b){return function(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,f,g,h;return(0,d.Jh)(this,function(d){return e=(0,r.Kg)(),f=t(a),g=u(a,c),h="".concat(e,"/integrations/").concat(null!=g?g:f,"/").concat(b,"/").concat(null!=g?g:f,".dynamic.js.gz"),[2,(0,s.t)(h)]})})}(this.name,this.version,this.options.obfuscate)},b.prototype.addMiddleware=function(){for(var b,c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];this.middleware=(b=this.middleware).concat.apply(b,c)},b.prototype.shouldBuffer=function(a){return"page"!==a.event.type&&((0,f.s)()|| !1===this._ready|| !1===this._initialized)},b.prototype.send=function(a,b,c){var e,f;return(0,d.mG)(this,void 0,void 0,function(){var h,i,l,m,n,o;return(0,d.Jh)(this,function(q){switch(q.label){case 0:var r;if(this.shouldBuffer(a))return this.buffer.push(a),this.scheduleFlush(),[2,a];if(h=null===(f=null===(e=this.options)|| void 0===e?void 0:e.plan)|| void 0===f?void 0:f.track,i=a.event.event,h&&i&&"Segment.io"!==this.name){if(l=h[i],!(0,k.n)(h,l))return a.updateEvent("integrations",(0,d.pi)((0,d.pi)({},a.event.integrations),{All:!1,"Segment.io":!0})),a.cancel(new g.Y({retry:!1,reason:"Event ".concat(i," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,a];if(a.updateEvent("integrations",(0,d.pi)((0,d.pi)({},a.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&(null==l?void 0:l.integrations[this.name])=== !1)return a.cancel(new g.Y({retry:!1,reason:"Event ".concat(i," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,a]}return[4,(0,p.applyDestinationMiddleware)(this.name,JSON.parse(JSON.stringify(r=a.event)),this.middleware)];case 1:if(null===(m=q.sent()))return[2,a];n=new b(m,{}),a.stats.increment("analytics_js.integration.invoke",1,["method:".concat(c),"integration_name:".concat(this.name),]),q.label=2;case 2:if(q.trys.push([2,5,,6]),!this.integration)return[3,4];return[4,(0,j.O)(this.integration.invoke.call(this.integration,c,n))];case 3:q.sent(),q.label=4;case 4:return[3,6];case 5:throw o=q.sent(),a.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(c),"integration_name:".concat(this.name),]),o;case 6:return[2,a]}})})},b.prototype.track=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Track,"track")]})})},b.prototype.page=function(a){var b;return(0,d.mG)(this,void 0,void 0,function(){var c=this;return(0,d.Jh)(this,function(d){return(null===(b=this.integration)|| void 0===b?void 0:b._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then(function(){return c.send(a,e.Page,"page")})]})})},b.prototype.identify=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Identify,"identify")]})})},b.prototype.alias=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Alias,"alias")]})})},b.prototype.group=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Group,"group")]})})},b.prototype.scheduleFlush=function(){var a=this;!this.flushing&&setTimeout(function(){return(0,d.mG)(a,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:return this.flushing=!0,a=this,[4,function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c,e=this;return(0,d.Jh)(this,function(h){switch(h.label){case 0:if(c=[],(0,f.s)())return[2,b];return[4,(0,m.x)(function(){return b.length>0&&(0,f.G)()},function(){return(0,d.mG)(e,void 0,void 0,function(){var e,f,h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(!(e=b.pop()))return[2];return[4,(0,i.a)(e,a)];case 1:return(h=(f=d.sent())instanceof g._)||c.push(e),[2]}})})})];case 1:return h.sent(),c.map(function(a){return b.pushWithBackoff(a)}),[2,b]}})})}(this,this.buffer)];case 1:return a.buffer=b.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},5e3*Math.random())},b}();function w(b,e,a){if(void 0===e&&(e={}),void 0===a&&(a={}),(0,h.s)())return[];b.plan&&((a=null!=a?a:{}).plan=b.plan);var c,d,f,g=null!==(d=null===(c=b.middlewareSettings)|| void 0===c?void 0:c.routingRules)&& void 0!==d?d:[],i=(f=g,function(a){var b=a.payload,c=a.integration,d=a.next,e=new q.Store(f),g=e.getRulesByDestinationName(c);g.forEach(function(c){for(var e=c.matchers,f=c.transformers,a=0;a<e.length;a++)if(q.matches(b.obj,e[a])&&(b.obj=q.transform(b.obj,f[a]),null===b.obj))return d(null)}),d(b)}),j=(0,l.o)(b,null!=a?a:{});return Object.entries(b.integrations).map(function(m){var d,b=m[0],c=m[1];if(!b.startsWith("Segment")){var q=!1===e.All&& void 0===e[b];if(!1!==e[b]&&!q){var r=c.type,s=c.bundlingStatus,n=c.versionSettings,t="unbundled"!==s&&("browser"===r||(null===(d=null==n?void 0:n.componentTypes)|| void 0===d?void 0:d.includes("browser")));if((t||"Segment.io"===b)&&"Iterable"!==b){var o,f,h,k,l,u=null!==(l=null!==(h=null===(f=(o=c).versionSettings)|| void 0===f?void 0:f.override)&& void 0!==h?h:null===(k=o.versionSettings)|| void 0===k?void 0:k.version)&& void 0!==l?l:"latest",p=new v(b,u,j[b],a);return g.filter(function(a){return a.destinationName===b}).length>0&&p.addMiddleware(i),p}}}}).filter(function(a){return void 0!==a})}},18767:function(c,b,a){"use strict";a.r(b),a.d(b,{applyDestinationMiddleware:function(){return h},sourceMiddlewarePlugin:function(){return i}});var d=a(5163),e=a(61668),f=a(37624),g=a(25030);function h(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,h,i,j;return(0,d.Jh)(this,function(k){switch(k.label){case 0:e=0,h=c,k.label=1;case 1:if(!(e<h.length))return[3,4];return[4,function(b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,h,i;return(0,d.Jh)(this,function(j){switch(j.label){case 0:return e=!1,h=null,[4,(0,f.O)(c({payload:(0,g.D)(b,{clone:!0,traverse:!1}),integration:a,next:function(a){e=!0,null===a&&(h=null),a&&(h=a.obj)}}))];case 1:return j.sent(),e||null===h||(h.integrations=(0,d.pi)((0,d.pi)({},b.integrations),((i={})[a]=!1,i))),[2,h]}})})}(b,i=h[e])];case 2:if(null===(j=k.sent()))return[2,null];b=j,k.label=3;case 3:return e++,[3,1];case 4:return[2,b]}})})}function i(b,c){function a(a){return(0,d.mG)(this,void 0,void 0,function(){var h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return h=!1,[4,(0,f.O)(b({payload:(0,g.D)(a.event,{clone:!0,traverse:!1}),integrations:null!=c?c:{},next:function(b){h=!0,b&&(a.event=b.obj)}}))];case 1:if(d.sent(),!h)throw new e.Y({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,a]}})})}return{name:"Source Middleware ".concat(b.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(a){return Promise.resolve(a)},track:a,page:a,identify:a,alias:a,group:a}}},22870:function(c,a,b){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(a,"__esModule",{value:!0}),a.Store=a.matches=a.transform=void 0;var e=b(64303);Object.defineProperty(a,"transform",{enumerable:!0,get:function(){return d(e).default}});var f=b(2370);Object.defineProperty(a,"matches",{enumerable:!0,get:function(){return d(f).default}});var g=b(41444);Object.defineProperty(a,"Store",{enumerable:!0,get:function(){return d(g).default}})},2370:function(d,a,b){"use strict";var c=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(a,"__esModule",{value:!0});var e=c(b(27843));function f(a,b){if(!Array.isArray(a))return!0===g(a,b);var d=a[0];switch(d){case"!":return!f(a[1],b);case"or":for(var c=1;c<a.length;c++)if(f(a[c],b))return!0;return!1;case"and":for(var c=1;c<a.length;c++)if(!f(a[c],b))return!1;return!0;case"=":case"!=":return i(g(a[1],b),g(a[2],b),d,b);case"<=":case"<":case">":case">=":return h(g(a[1],b),g(a[2],b),d,b);case"contains":return j(g(a[1],b),g(a[2],b));case"match":return k(g(a[1],b),g(a[2],b));case"lowercase":var e=g(a[1],b);if("string"!=typeof e)return null;return e.toLowerCase();case"typeof":return typeof g(a[1],b);case"length":return l(g(a[1],b));default:throw Error("FQL IR could not evaluate for token: ".concat(d))}}function g(a,b){return Array.isArray(a)?a:"object"==typeof a?a.value:(0,e.default)(b,a)}function h(a,b,c,d){if(m(a)&&(a=f(a,d)),m(b)&&(b=f(b,d)),"number"!=typeof a||"number"!=typeof b)return!1;switch(c){case"<=":return a<=b;case">=":return a>=b;case"<":return a<b;case">":return a>b;default:throw Error("Invalid operator in compareNumbers: ".concat(c))}}function i(a,b,c,d){switch(m(a)&&(a=f(a,d)),m(b)&&(b=f(b,d)),"object"==typeof a&&"object"==typeof b&&(a=JSON.stringify(a),b=JSON.stringify(b)),c){case"=":return a===b;case"!=":return a!==b;default:throw Error("Invalid operator in compareItems: ".concat(c))}}function j(a,b){return"string"==typeof a&&"string"==typeof b&& -1!==a.indexOf(b)}function k(a,b){return"string"==typeof a&&"string"==typeof b&&n(b,a)}function l(a){return null===a?0:Array.isArray(a)||"string"==typeof a?a.length:NaN}function m(a){return!!Array.isArray(a)&&(("lowercase"===a[0]||"length"===a[0]||"typeof"===a[0])&&2===a.length||("contains"===a[0]||"match"===a[0])&&3===a.length)}function n(b,a){var e,f;Pattern:for(;b.length>0;){var g=void 0,d=void 0;if(g=(e=o(b)).star,d=e.chunk,b=e.pattern,g&&""===d)return!0;var h=p(d,a),c=h.t,i=h.ok,j=h.err;if(j)return!1;if(i&&(0===c.length||b.length>0)){a=c;continue}if(g)for(var k=0;k<a.length;k++){if(c=(f=p(d,a.slice(k+1))).t,i=f.ok,j=f.err,i){if(0===b.length&&c.length>0)continue;a=c;continue Pattern}if(j)break}return!1}return 0===a.length}function o(a){for(var b,c={star:!1,chunk:"",pattern:""};a.length>0&&"*"===a[0];)a=a.slice(1),c.star=!0;var d=!1;Scan:for(b=0;b<a.length;b++)switch(a[b]){case"\\":b+1<a.length&&b++;break;case"[":d=!0;break;case"]":d=!1;break;case"*":if(!d)break Scan}return c.chunk=a.slice(0,b),c.pattern=a.slice(b),c}function p(a,b){for(var d,e,c={t:"",ok:!1,err:!1};a.length>0;){if(0===b.length)return c;switch(a[0]){case"[":var h=b[0];b=b.slice(1);var i=!0;(a=a.slice(1)).length>0&&"^"===a[0]&&(i=!1,a=a.slice(1));for(var j=!1,k=0;;){if(a.length>0&&"]"===a[0]&&k>0){a=a.slice(1);break}var f="",g="",l=void 0;if(f=(d=q(a)).char,a=d.newChunk,d.err||(g=f,"-"===a[0]&&(g=(e=q(a.slice(1))).char,a=e.newChunk,e.err)))return c;f<=h&&h<=g&&(j=!0),k++}if(j!==i)return c;break;case"?":b=b.slice(1),a=a.slice(1);break;case"\\":if(0===(a=a.slice(1)).length)return c.err=!0,c;default:if(a[0]!==b[0])return c;b=b.slice(1),a=a.slice(1)}}return c.t=b,c.ok=!0,c.err=!1,c}function q(a){var b={char:"",newChunk:"",err:!1};return 0===a.length||"-"===a[0]||"]"===a[0]||"\\"===a[0]&&0===(a=a.slice(1)).length?(b.err=!0,b):(b.char=a[0],b.newChunk=a.slice(1),0===b.newChunk.length&&(b.err=!0),b)}a.default=function(b,a){if(!a)throw Error("No matcher supplied!");switch(a.type){case"all":return!0;case"fql":return function e(a,c){if(!a)return!1;try{a=JSON.parse(a)}catch(d){throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(a,'": ').concat(d))}var b=f(a,c);return"boolean"==typeof b&&b}(a.ir,b);default:throw Error("Matcher of type ".concat(a.type," unsupported."))}}},41444:function(c,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=function(){function a(a){this.rules=[],this.rules=a||[]}return a.prototype.getRulesByDestinationName=function(e){for(var c=[],a=0,d=this.rules;a<d.length;a++){var b=d[a];(b.destinationName===e|| void 0===b.destinationName)&&c.push(b)}return c},a}();a.default=b},64303:function(d,c,a){"use strict";var b=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});var e=b(a(80374)),f=b(a(27843)),g=b(a(75500)),h=a(22341),i=a(94966);function j(e,b){for(var a in b.drop){if(b.drop.hasOwnProperty(a)){var c=""===a?e:(0,f.default)(e,a);if("object"==typeof c&&null!==c)for(var d=0,g=b.drop[a];d<g.length;d++)delete c[g[d]]}}}function k(e,c){for(var b in c.allow){if(c.allow.hasOwnProperty(b)){var a=""===b?e:(0,f.default)(e,b);if("object"==typeof a&&null!==a)for(var d in a)a.hasOwnProperty(d)&& -1===c.allow[b].indexOf(d)&&delete a[d]}}}function l(a,e){var g=JSON.parse(JSON.stringify(a));for(var b in e.map){if(e.map.hasOwnProperty(b)){var c=e.map[b],j=b.split("."),k=void 0;if(j.length>1?(j.pop(),k=(0,f.default)(g,j.join("."))):k=a,"object"==typeof k){if(c.copy){var l=(0,f.default)(g,c.copy);void 0!==l&&(0,h.dset)(a,b,l)}else if(c.move){var m=(0,f.default)(g,c.move);void 0!==m&&(0,h.dset)(a,b,m),(0,i.unset)(a,c.move)}else c.hasOwnProperty("set")&&(0,h.dset)(a,b,c.set);if(c.to_string){var d=(0,f.default)(a,b);if("string"==typeof d||"object"==typeof d&&null!==d)continue;void 0!==d?(0,h.dset)(a,b,JSON.stringify(d)):(0,h.dset)(a,b,"undefined")}}}}}function m(b,a){return!(a.sample.percent<=0)&&(a.sample.percent>=1||(a.sample.path?o(b,a):n(a.sample.percent)))}function n(a){return Math.random()<=a}function o(k,h){var l=(0,f.default)(k,h.sample.path),i=(0,e.default)(JSON.stringify(l)),j=-64,a=[];p(i.slice(0,8),a);for(var b=0,c=0;c<64&&1!==a[c];c++)b++;if(0!==b){var d=[];p(i.slice(9,16),d),j-=b,a.splice(0,b),d.splice(64-b),a=a.concat(d)}return a[63]=0===a[63]?1:0,(0,g.default)(parseInt(a.join(""),2),j)<h.sample.percent}function p(e,c){for(var b=0;b<8;b++)for(var d=e[b],a=128;a>=1;a/=2)d-a>=0?(d-=a,c.push(1)):c.push(0)}c.default=function(e,f){for(var b=e,c=0,d=f;c<d.length;c++){var a=d[c];switch(a.type){case"drop":return null;case"drop_properties":j(b,a.config);break;case"allow_properties":k(b,a.config);break;case"sample_event":if(m(b,a.config))break;return null;case"map_properties":l(b,a.config);break;case"hash_properties":break;default:throw Error('Transformer of type "'.concat(a.type,'" is unsupported.'))}}return b}},94966:function(d,a,b){"use strict";var c=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(a,"__esModule",{value:!0}),a.unset=void 0;var e=c(b(27843));a.unset=function(b,c){if((0,e.default)(b,c)){for(var a=c.split("."),d=a.pop();a.length&&"\\"===a[a.length-1].slice(-1);)d=a.pop().slice(0,-1)+"."+d;for(;a.length;)b=b[c=a.shift()];return delete b[d]}return!0}},3304:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Float64Array?Float64Array:void 0;a.exports=b},57382:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
*
* @module @stdlib/array-float64
*
* @example
* var ctor = require( '@stdlib/array-float64' );
*
* var arr = new ctor( 10 );
* // returns <Float64Array>
*/ // MODULES //
var b,d=a(35569),e=a(3304),f=a(28482);b=d()?e:f,c.exports=b},28482:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},26322:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint16
*
* @example
* var ctor = require( '@stdlib/array-uint16' );
*
* var arr = new ctor( 10 );
* // returns <Uint16Array>
*/ // MODULES //
var b,d=a(72508),e=a(85679),f=a(882);b=d()?e:f,c.exports=b},882:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},85679:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint16Array?Uint16Array:void 0;a.exports=b},4773:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint32
*
* @example
* var ctor = require( '@stdlib/array-uint32' );
*
* var arr = new ctor( 10 );
* // returns <Uint32Array>
*/ // MODULES //
var b,d=a(99773),e=a(33004),f=a(23078);b=d()?e:f,c.exports=b},23078:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},33004:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint32Array?Uint32Array:void 0;a.exports=b},47980:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint8
*
* @example
* var ctor = require( '@stdlib/array-uint8' );
*
* var arr = new ctor( 10 );
* // returns <Uint8Array>
*/ // MODULES //
var b,d=a(58114),e=a(56737),f=a(33357);b=d()?e:f,c.exports=b},33357:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},56737:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint8Array?Uint8Array:void 0;a.exports=b},12684:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Float64Array?Float64Array:null;a.exports=b},35569:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `Float64Array` support.
*
* @module @stdlib/assert-has-float64array-support
*
* @example
* var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
*
* var bool = hasFloat64ArraySupport();
* // returns <boolean>
*/ // MODULES //
var c=b(13876);a.exports=c},13876:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(21448),e=a(12684);b.exports=function(){var b,a;if("function"!=typeof e)return!1;try{a=new e([1,3.14,-3.14,NaN]),b=d(a)&&1===a[0]&&3.14===a[1]&& -3.14===a[2]&&a[3]!=a[3]}catch(c){b=!1}return b}},9048:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test whether an object has a specified property.
*
* @module @stdlib/assert-has-own-property
*
* @example
* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
*
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* bool = hasOwnProp( beep, 'bop' );
* // returns false
*/ // MODULES //
var c=b(13763);a.exports=c},13763:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // FUNCTIONS //
var b=Object.prototype.hasOwnProperty;a.exports=function(a,c){return null!=a&&b.call(a,c)}},57009:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `Symbol` support.
*
* @module @stdlib/assert-has-symbol-support
*
* @example
* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
*
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ // MODULES //
var c=b(46784);a.exports=c},46784:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},53123:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `toStringTag` support.
*
* @module @stdlib/assert-has-tostringtag-support
*
* @example
* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
*
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/ // MODULES //
var c=b(98481);a.exports=c},98481:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(57009)();a.exports=function(){return d&&"symbol"==typeof Symbol.toStringTag}},72508:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `Uint16Array` support.
*
* @module @stdlib/assert-has-uint16array-support
*
* @example
* var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
*
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/ // MODULES //
var c=b(43403);a.exports=c},43403:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(40768),e=a(49668),f=a(10187);b.exports=function(){var b,a;if("function"!=typeof f)return!1;try{a=[1,3.14,-3.14,e+1,e+2],a=new f(a),b=d(a)&&1===a[0]&&3===a[1]&&a[2]===e-2&&0===a[3]&&1===a[4]}catch(c){b=!1}return b}},10187:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint16Array?Uint16Array:null;a.exports=b},99773:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `Uint32Array` support.
*
* @module @stdlib/assert-has-uint32array-support
*
* @example
* var hasUint32ArraySupport = require( '@stdlib/assert-has-uint32array-support' );
*
* var bool = hasUint32ArraySupport();
* // returns <boolean>
*/ // MODULES //
var c=b(32822);a.exports=c},32822:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(72744),e=a(63899),f=a(40746);b.exports=function(){var b,a;if("function"!=typeof f)return!1;try{a=[1,3.14,-3.14,e+1,e+2],a=new f(a),b=d(a)&&1===a[0]&&3===a[1]&&a[2]===e-2&&0===a[3]&&1===a[4]}catch(c){b=!1}return b}},40746:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint32Array?Uint32Array:null;a.exports=b},58114:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test for native `Uint8Array` support.
*
* @module @stdlib/assert-has-uint8array-support
*
* @example
* var hasUint8ArraySupport = require( '@stdlib/assert-has-uint8array-support' );
*
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/ // MODULES //
var c=b(58066);a.exports=c},58066:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(48279),e=a(63443),f=a(72731);b.exports=function(){var b,a;if("function"!=typeof f)return!1;try{a=[1,3.14,-3.14,e+1,e+2],a=new f(a),b=d(a)&&1===a[0]&&3===a[1]&&a[2]===e-2&&0===a[3]&&1===a[4]}catch(c){b=!1}return b}},72731:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Uint8Array?Uint8Array:null;a.exports=b},21448:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a value is a Float64Array.
*
* @module @stdlib/assert-is-float64array
*
* @example
* var isFloat64Array = require( '@stdlib/assert-is-float64array' );
*
* var bool = isFloat64Array( new Float64Array( 10 ) );
* // returns true
*
* bool = isFloat64Array( [] );
* // returns false
*/ // MODULES //
var c=b(21453);a.exports=c},21453:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(36208),e="function"==typeof Float64Array;a.exports=function(a){return e&&a instanceof Float64Array||"[object Float64Array]"===d(a)}},69331:function(b,e,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var c=a(47980),d=a(26322);b.exports={uint16:d,uint8:c}},65902:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return a boolean indicating if an environment is little endian.
*
* @module @stdlib/assert-is-little-endian
*
* @example
* var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
*
* var bool = IS_LITTLE_ENDIAN;
* // returns <boolean>
*/ // MODULES //
var c=b(24106);a.exports=c},24106:function(d,f,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var a,b,g,c=e(69331);a=((b=new c.uint16(1))[0]=4660,52===new c.uint8(b.buffer)[0]),d.exports=a},40768:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a value is a Uint16Array.
*
* @module @stdlib/assert-is-uint16array
*
* @example
* var isUint16Array = require( '@stdlib/assert-is-uint16array' );
*
* var bool = isUint16Array( new Uint16Array( 10 ) );
* // returns true
*
* bool = isUint16Array( [] );
* // returns false
*/ // MODULES //
var c=b(3823);a.exports=c},3823:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(36208),e="function"==typeof Uint16Array;a.exports=function(a){return e&&a instanceof Uint16Array||"[object Uint16Array]"===d(a)}},72744:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a value is a Uint32Array.
*
* @module @stdlib/assert-is-uint32array
*
* @example
* var isUint32Array = require( '@stdlib/assert-is-uint32array' );
*
* var bool = isUint32Array( new Uint32Array( 10 ) );
* // returns true
*
* bool = isUint32Array( [] );
* // returns false
*/ // MODULES //
var c=b(72326);a.exports=c},72326:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(36208),e="function"==typeof Uint32Array;a.exports=function(a){return e&&a instanceof Uint32Array||"[object Uint32Array]"===d(a)}},48279:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a value is a Uint8Array.
*
* @module @stdlib/assert-is-uint8array
*
* @example
* var isUint8Array = require( '@stdlib/assert-is-uint8array' );
*
* var bool = isUint8Array( new Uint8Array( 10 ) );
* // returns true
*
* bool = isUint8Array( [] );
* // returns false
*/ // MODULES //
var c=b(20208);a.exports=c},20208:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(36208),e="function"==typeof Uint8Array;a.exports=function(a){return e&&a instanceof Uint8Array||"[object Uint8Array]"===d(a)}},66315:function(a){"use strict";a.exports=1023},93105:function(a){"use strict";a.exports=2146435072},66988:function(a){"use strict";a.exports=-1023},89777:function(a){"use strict";a.exports=1023},53690:function(a){"use strict";a.exports=-1074},42918:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Double-precision floating-point negative infinity.
*
* @module @stdlib/constants-float64-ninf
* @type {number}
*
* @example
* var FLOAT64_NINF = require( '@stdlib/constants-float64-ninf' );
* // returns -Infinity
*/ // MODULES //
var c=b(44772).NEGATIVE_INFINITY;a.exports=c},24165:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Double-precision floating-point positive infinity.
*
* @module @stdlib/constants-float64-pinf
* @type {number}
*
* @example
* var FLOAT64_PINF = require( '@stdlib/constants-float64-pinf' );
* // returns Infinity
*/ // MAIN //
/**
* Double-precision floating-point positive infinity.
*
* ## Notes
*
* Double-precision floating-point positive infinity has the bit sequence
*
* ```binarystring
* 0 11111111111 00000000000000000000 00000000000000000000000000000000
* ```
*
* @constant
* @type {number}
* @default Number.POSITIVE_INFINITY
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var b=Number.POSITIVE_INFINITY;a.exports=b},96488:function(a){"use strict";a.exports=22250738585072014e-324},49668:function(a){"use strict";a.exports=65535},63899:function(a){"use strict";a.exports=4294967295},63443:function(a){"use strict";a.exports=255},57011:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a double-precision floating-point numeric value is infinite.
*
* @module @stdlib/math-base-assert-is-infinite
*
* @example
* var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
*
* var bool = isInfinite( Infinity );
* // returns true
*
* bool = isInfinite( -Infinity );
* // returns true
*
* bool = isInfinite( 5.0 );
* // returns false
*
* bool = isInfinite( NaN );
* // returns false
*/ // MODULES //
var c=b(812);a.exports=c},812:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(24165),e=a(42918);b.exports=function(a){return a===d||a===e}},21883:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Test if a double-precision floating-point numeric value is `NaN`.
*
* @module @stdlib/math-base-assert-is-nan
*
* @example
* var isnan = require( '@stdlib/math-base-assert-is-nan' );
*
* var bool = isnan( NaN );
* // returns true
*
* bool = isnan( 7.0 );
* // returns false
*/ // MODULES //
var c=b(61797);a.exports=c},61797:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
/**
* Tests if a double-precision floating-point numeric value is `NaN`.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is `NaN`
*
* @example
* var bool = isnan( NaN );
* // returns true
*
* @example
* var bool = isnan( 7.0 );
* // returns false
*/ function b(a){return a!=a}a.exports=b},513:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Compute an absolute value of a double-precision floating-point number.
*
* @module @stdlib/math-base-special-abs
*
* @example
* var abs = require( '@stdlib/math-base-special-abs' );
*
* var v = abs( -1.0 );
* // returns 1.0
*
* v = abs( 2.0 );
* // returns 2.0
*
* v = abs( 0.0 );
* // returns 0.0
*
* v = abs( -0.0 );
* // returns 0.0
*
* v = abs( NaN );
* // returns NaN
*/ // MODULES //
var c=b(35760);a.exports=c},35760:function(a){"use strict";a.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
/**
* Computes the absolute value of a double-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} absolute value
*
* @example
* var v = abs( -1.0 );
* // returns 1.0
*
* @example
* var v = abs( 2.0 );
* // returns 2.0
*
* @example
* var v = abs( 0.0 );
* // returns 0.0
*
* @example
* var v = abs( -0.0 );
* // returns 0.0
*
* @example
* var v = abs( NaN );
* // returns NaN
*/ function(a){return Math.abs(a)}},55848:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @module @stdlib/math-base-special-copysign
*
* @example
* var copysign = require( '@stdlib/math-base-special-copysign' );
*
* var z = copysign( -3.14, 10.0 );
* // returns 3.14
*
* z = copysign( 3.14, -1.0 );
* // returns -3.14
*
* z = copysign( 1.0, -0.0 );
* // returns -1.0
*
* z = copysign( -3.14, -0.0 );
* // returns -3.14
*
* z = copysign( -0.0, 1.0 );
* // returns 0.0
*/ // MODULES //
var c=b(10677);a.exports=c},10677:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(77838),e=a(41921),f=a(72490),g=[0,0];b.exports=function(c,h){var a,b;return d(g,c),a=g[0],a&=2147483647,b=e(h),b&=2147483648,f(a|=b,g[1])}},75500:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Multiply a double-precision floating-point number by an integer power of two.
*
* @module @stdlib/math-base-special-ldexp
*
* @example
* var ldexp = require( '@stdlib/math-base-special-ldexp' );
*
* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* x = ldexp( 0.0, 20 );
* // returns 0.0
*
* x = ldexp( -0.0, 39 );
* // returns -0.0
*
* x = ldexp( NaN, -101 );
* // returns NaN
*
* x = ldexp( Infinity, 11 );
* // returns Infinity
*
* x = ldexp( -Infinity, -118 );
* // returns -Infinity
*/ // MODULES //
var c=b(8397);a.exports=c},8397:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // NOTES //
/*
* => ldexp: load exponent (see [The Open Group]{@link http://pubs.opengroup.org/onlinepubs/9699919799/functions/ldexp.html} and [cppreference]{@link http://en.cppreference.com/w/c/numeric/math/ldexp}).
*/ // MODULES //
var d=a(24165),e=a(42918),f=a(66315),g=a(89777),h=a(66988),i=a(53690),j=a(21883),k=a(57011),l=a(55848),m=a(4948),n=a(18478),o=a(77838),p=a(72490),q=[0,0],r=[0,0];b.exports=function(a,b){var c,s;return 0===a||j(a)||k(a)?a:(m(q,a),a=q[0],b+=q[1],b+=n(a),b<i)?l(0,a):b>g?a<0?e:d:(b<=h?(b+=52,s=2220446049250313e-31):s=1,o(r,a),c=r[0],c&=2148532223,s*p(c|=b+f<<20,r[1]))}},44772:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Constructor which returns a `Number` object.
*
* @module @stdlib/number-ctor
*
* @example
* var Number = require( '@stdlib/number-ctor' );
*
* var v = new Number( 10.0 );
* // returns <Number>
*/ // MODULES //
var c=b(7548);a.exports=c},7548:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // EXPORTS //
a.exports=Number},18478:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return an integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-exponent
*
* @example
* var exponent = require( '@stdlib/number-float64-base-exponent' );
*
* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
* // returns -1019
*
* exp = exponent( -3.14 );
* // returns 1
*
* exp = exponent( 0.0 );
* // returns -1023
*
* exp = exponent( NaN );
* // returns 1024
*/ // MODULES //
var c=b(44500);a.exports=c},44500:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(41921),e=a(93105),f=a(66315);b.exports=function(b){var a=d(b);return(a=(a&e)>>>20)-f|0}},72490:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Create a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-from-words
*
* @example
* var fromWords = require( '@stdlib/number-float64-base-from-words' );
*
* var v = fromWords( 1774486211, 2479577218 );
* // returns 3.14e201
*
* v = fromWords( 3221823995, 1413754136 );
* // returns -3.141592653589793
*
* v = fromWords( 0, 0 );
* // returns 0.0
*
* v = fromWords( 2147483648, 0 );
* // returns -0.0
*
* v = fromWords( 2146959360, 0 );
* // returns NaN
*
* v = fromWords( 2146435072, 0 );
* // returns Infinity
*
* v = fromWords( 4293918720, 0 );
* // returns -Infinity
*/ // MODULES //
var c=b(79639);a.exports=c},64445:function(d,f,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var c,a,b;!0===e(65902)?(a=1,b=0):(a=0,b=1),c={HIGH:a,LOW:b},d.exports=c},79639:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(4773),e=a(57382),b=a(64445),f=new e(1),h=new d(f.buffer),i=b.HIGH,j=b.LOW;c.exports=function(a,b){return h[i]=a,h[j]=b,f[0]}},83348:function(b,d,c){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var a;a=!0===c(65902)?1:0,b.exports=a},41921:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-get-high-word
*
* @example
* var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
*
* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
* // returns 1774486211
*/ // MODULES //
var c=b(96285);a.exports=c},96285:function(b,f,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var c=a(4773),d=a(57382),g=a(83348),e=new d(1),h=new c(e.buffer);b.exports=function(a){return e[0]=a,h[g]}},4948:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @module @stdlib/number-float64-base-normalize
*
* @example
* var normalize = require( '@stdlib/number-float64-base-normalize' );
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var normalize = require( '@stdlib/number-float64-base-normalize' );
*
* var out = new Float64Array( 2 );
*
* var v = normalize( out, 3.14e-319 );
* // returns <Float64Array>[ 1.4141234400356668e-303, -52 ]
*
* var bool = ( v === out );
* // returns true
*/ // MODULES //
var c=b(59422);a.exports=c},59422:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(78857);a.exports=function(a,b){return 1===arguments.length?d([0,0],a):d(a,b)}},78857:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(96488),e=a(57011),f=a(21883),g=a(513);b.exports=function(a,b){return f(b)||e(b)?(a[0]=b,a[1]=0,a):0!==b&&g(b)<d?(a[0]=4503599627370496*b,a[1]=-52,a):(a[0]=b,a[1]=0,a)}},77838:function(a,d,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Split a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-to-words
*
* @example
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var w = toWords( 3.14e201 );
* // returns [ 1774486211, 2479577218 ]
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var out = new Uint32Array( 2 );
*
* var w = toWords( out, 3.14e201 );
* // returns <Uint32Array>[ 1774486211, 2479577218 ]
*
* var bool = ( w === out );
* // returns true
*/ // MODULES //
var c=b(74010);a.exports=c},5782:function(d,f,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var c,a,b;!0===e(65902)?(a=1,b=0):(a=0,b=1),c={HIGH:a,LOW:b},d.exports=c},74010:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(54903);a.exports=function(a,b){return 1===arguments.length?d([0,0],a):d(a,b)}},54903:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(4773),e=a(57382),b=a(5782),f=new e(1),h=new d(f.buffer),i=b.HIGH,j=b.LOW;c.exports=function(a,b){return f[0]=b,a[0]=h[i],a[1]=h[j],a}},36208:function(c,g,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /**
* Return a string value indicating a specification defined classification of an object.
*
* @module @stdlib/utils-native-class
*
* @example
* var nativeClass = require( '@stdlib/utils-native-class' );
*
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* str = nativeClass( 5 );
* // returns '[object Number]'
*
* function Beep() {
*     return this;
* }
* str = nativeClass( new Beep() );
* // returns '[object Object]'
*/ // MODULES //
var b,d=a(53123),e=a(7407),f=a(74210);b=d()?f:e,c.exports=b},7407:function(a,c,b){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=b(70173);a.exports=function(a){return d.call(a)}},74210:function(b,c,a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MODULES //
var d=a(9048),e=a(1403),f=a(70173);b.exports=function(a){var b,c,g;if(null==a)return f.call(a);c=a[e],b=d(a,e);try{a[e]=void 0}catch(h){return f.call(a)}return g=f.call(a),b?a[e]=c:delete a[e],g}},70173:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b=Object.prototype.toString;a.exports=b},1403:function(a){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ // MAIN //
var b="function"==typeof Symbol?Symbol.toStringTag:"";a.exports=b},27843:function(a){var b;a.exports=function(b,a,e,c,d){for(a=a.split?a.split("."):a,c=0;c<a.length;c++)b=b?b[a[c]]:d;return b===d?e:b}},22341:function(b,a){a.dset=function(g,a,h){a.split&&(a=a.split("."));for(var e,b,c=0,f=a.length,d=g;c<f&&"__proto__"!==(b=a[c++])&&"constructor"!==b&&"prototype"!==b;)d=d[b]=c===f?h:typeof(e=d[b])==typeof a?e:0*a[c]!=0|| ~(""+a[c]).indexOf(".")?{}:[]}},80374:function(e,b,c){"use strict";c.r(b),c.d(b,{default:function(){return f}});for(var d=[],a=0;a<64;)d[a]=0|4294967296*Math.sin(++a%Math.PI);function f(h){var e,f,g,i=[e=1732584193,f=4023233417,~e,~f],j=[],b=unescape(encodeURI(h))+"\x80",c=b.length;for(h=--c/4+2|15,j[--h]=8*c;~c;)j[c>>2]|=b.charCodeAt(c)<<8*c--;for(a=b=0;a<h;a+=16){for(c=i;b<64;c=[g=c[3],e+((g=c[0]+[e&f| ~e&g,g&e| ~g&f,e^f^g,f^(e| ~g)][c=b>>4]+d[b]+ ~~j[a|15&[b,5*b+1,3*b+5,7*b][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+(b++)%4])|g>>> -c),e,f])e=0|c[1],f=c[2];for(b=4;b;)i[--b]+=c[b]}for(h="";b<32;)h+=(i[b>>3]>>4*(1^b++)&15).toString(16);return h}}}])