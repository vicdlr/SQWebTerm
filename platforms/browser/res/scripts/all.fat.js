/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssgradients-geolocation-input-inputtypes-prefixes-setclasses-teststyles !*/
!function(e,t,n){function a(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,l;for(var r in f)if(f.hasOwnProperty(r)){if(e=[],t=f[r],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],l=s.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),d.push((i?"":"no-")+l.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=s(m?"svg":"body"),e.fake=!0),e}function r(e,n,a,i){var o,r,d,f,c="modernizr",p=s("div"),m=l();if(parseInt(a,10))for(;a--;)d=s("div"),d.id=i?i[a]:c+(a+1),p.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+c,(m.fake?m:p).appendChild(o),m.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),r=n(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=f,u.offsetHeight):p.parentNode.removeChild(p),!!r}var d=[],f=[],c={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];c._prefixes=p;var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",a="",i=0,o=p.length-1;o>i;i++)e=0===i?"to ":"",a+=t+p[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(a+=t+"-webkit-"+n);var l=s("a"),r=l.style;return r.cssText=a,(""+r.backgroundImage).indexOf("gradient")>-1});var g=s("input"),h="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),v={};Modernizr.input=function(t){for(var n=0,a=t.length;a>n;n++)v[t[n]]=!!(t[n]in g);return v.list&&(v.list=!(!s("datalist")||!e.HTMLDataListElement)),v}(h);var y="search tel url email datetime date month week time datetime-local number range color".split(" "),w={};Modernizr.inputtypes=function(e){for(var a,i,o,s=e.length,l="1)",r=0;s>r;r++)g.setAttribute("type",a=e[r]),o="text"!==g.type&&"style"in g,o&&(g.value=l,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&g.style.WebkitAppearance!==n?(u.appendChild(g),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,u.removeChild(g)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?g.checkValidity&&g.checkValidity()===!1:g.value!=l)),w[e[r]]=!!o;return w}(y);c.testStyles=r;i(),o(d),delete c.addTest,delete c.addAsyncTest;for(var b=0;b<Modernizr._q.length;b++)Modernizr._q[b]();e.Modernizr=Modernizr}(window,document);/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+(++n))})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery),function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=e.pageX,l=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,h,l,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,v=m+p.helperProportions.width,_=i.offset.top,b=_+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,h=r+p.snapElements[u].width,l=p.snapElements[u].top,c=l+p.snapElements[u].height,r-g>v||m>h+g||l-g>b||_>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(l-b),n=g>=Math.abs(c-_),o=g>=Math.abs(r-v),a=g>=Math.abs(h-m),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(l-_),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,h=a+t.helperProportions.width,l=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return a>=c&&d>=h&&r>=u&&p>=l;case"intersect":return a+t.helperProportions.width/2>c&&d>h-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>l-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||l>=u&&p>=l||u>r&&l>p)&&(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}}(jQuery),function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=Math.abs(a.parentData.left)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(p-l>0?(e.size.height=p,e.position.top=o.top-u):(e.size.height=l,e.position.top=o.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=o.left-c):(e.size.width=h,e.position.left=o.left+n.width-h))}})}(jQuery),function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||o>i.right||i.top>h||a>i.bottom):"fit"===n.tolerance&&(l=i.left>o&&r>i.right&&i.top>a&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})}(jQuery),function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),o=function(){t.each(n,function(t,i){e[i]&&a[i+"Class"](e[i])})},o(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,o,a,r){return"boolean"==typeof n||n===e?o?t.effects.animateClass.call(this,n?{add:s}:{remove:s},o,a,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,o,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,o;for(o=0;s.length>o;o++)null!==s[o]&&(n=t.data(i+s[o]),n===e&&(n=""),t.css(s[o],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):a.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,o=i.queue,a=t.effects.effect[i.effect];return t.fx.off||!a?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,o=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),o=n.attr("id");s||(s=a+"-header-"+e,i.attr("id",s)),o||(o=a+"-panel-"+e,n.attr("id",o)),i.attr("aria-controls",o),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=o.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,n){var o,a,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(a=d),a=a||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(o=t.show().outerHeight(),e.animate(i,{duration:r,easing:a,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:a,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(o-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,a,p):t.animate(s,r,a,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})}(jQuery),function(t){t.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})}(jQuery),function(t){var e,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},o=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,a=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){a.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled)return!1;t(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var e=s.element[0];o(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(t(this).addClass("ui-state-active"),e=this,s.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",a.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.element.prop("disabled",!!e),e&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?o(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(s),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,o=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(o?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(o?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},x=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},k=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?D():y=!1;else switch(i.charAt(o)){case"d":_=x("d");break;case"D":k("D",d,p);break;case"o":b=x("o");break;case"m":v=x("m");break;case"M":v=k("M",f,g);break;case"y":m=x("y");break;case"@":h=new Date(x("@")),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((x("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(v=1,_=b;;){if(a=this._getDaysInMonth(m,v-1),a>=_)break;v++,_-=a}if(h=this._daylightSavingAdjust(new Date(m,v-1,_)),h.getFullYear()!==m||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,I,P,T,M,S,z,A,E,H,N,W,O,F,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),q=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==q[0]||1!==q[1],$=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-q[0]*q[1]+1,J.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+Q,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?$:j,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;q[0]>x;x++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",P="",X){if(P+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:P+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:P+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:P+=" ui-datepicker-group-middle",I=""}P+="'>"}for(P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?Y?o:s:"")+(/all|right/.test(I)&&0===x?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,G,J,x>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,T+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(P+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((z+S)/7),E=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=E,H=this._daylightSavingAdjust(new Date(te,Z,1-z)),N=0;E>N;N++){for(P+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=m?m.apply(t.input?t.input[0]:null,[H]):[!0,""],F=H.getMonth()!==Z,R=F&&!_||!O[0]||G&&G>H||J&&H>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(H.getTime()===$.getTime()?" "+this._currentClass:"")+(H.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===j.getTime()?" ui-state-highlight":"")+(H.getTime()===$.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);P+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),P+="</tbody></table>"+(X?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=P}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"}(jQuery),function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})}(jQuery),function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var o,a,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),o=t.effects.createWrapper(h).css({overflow:"hidden"}),a=o[p](),r=parseFloat(o.css(f))||0,m[p]=v?a:0,g||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:a+r),v&&(o.css(p,0),g||o.css(f,r+a)),o.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}}(jQuery),function(t){t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=a.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),c&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,g,m)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m).animate(o,g,m),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()}}(jQuery),function(t){t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?l*v:0),top:h+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:l*v),top:h+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}}(jQuery),function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),function(t){t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})}}(jQuery),function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})}}(jQuery),function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(_=_.concat(u),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(_=_.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,u,o.from.y,i.from),i.to=t.effects.setTransition(i,u,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,g[d]=(p?"+=":"-=")+2*h,m[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery),function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,o,a,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",o=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),o===n?a=!0:o=n+o,r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=a&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(o=String.fromCharCode(e.keyCode),r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})}(jQuery),function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),o=i(k.at,p,g),v.left+=o[0],v.top+=o[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,C=d+_+s(this,"marginBottom")+w.height,I=t.extend({},v),P=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:C,offset:[o[0]+P[0],o[1]+P[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,h={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>g&&g>r(n+o)&&(h.vertical="middle"),h.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(I,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})}(jQuery),function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,o,a,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(a=this.options.step,n=o=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:o=this._valueMin();break;case t.ui.keyCode.END:o=this._valueMax();break;case t.ui.keyCode.PAGE_UP:o=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;o=this._trimAlignValue(n+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;o=this._trimAlignValue(n-a)}this._slide(i,r,o)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})}(jQuery),function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;
return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})}(jQuery);/*!
 * jQuery Corners 0.3
 * Copyright (c) 2008 David Turnbull, Steven Wittens
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */

jQuery.fn.corners = function(options) {
  var doneClass = 'rounded_by_jQuery_corners'; /* To prevent double rounding */
  var settings = parseOptions(options);
  var webkitAvailable = false;
  try {
    webkitAvailable = (document.body.style.WebkitBorderRadius !== undefined);
    /* Google Chrome corners look awful */
    var versionIndex = navigator.userAgent.indexOf('Chrome');
    if (versionIndex >= 0) webkitAvailable = false;
  } catch(err) {}
  var mozillaAvailable = false;
  try {
    mozillaAvailable = (document.body.style.MozBorderRadius !== undefined);
    /* Firefox 2 corners look worse */
    var versionIndex = navigator.userAgent.indexOf('Firefox');
    if (versionIndex >= 0 && parseInt(navigator.userAgent.substring(versionIndex+8)) < 3) mozillaAvailable = false;
  } catch(err) {}
  return this.each(function(i,e){
    $e = jQuery(e);
    if ($e.hasClass(doneClass)) return;
    $e.addClass(doneClass);
    var classScan = /{(.*)}/.exec(e.className);
    var s = classScan ? parseOptions(classScan[1], settings) : settings;
    var nodeName = e.nodeName.toLowerCase();
    if (nodeName=='input') e = changeInput(e);
    if (webkitAvailable && s.webkit) roundWebkit(e, s);
    else if(mozillaAvailable && s.mozilla && (s.sizex == s.sizey)) roundMozilla(e, s);
    else {
      var bgColor = backgroundColor(e.parentNode);
      var fgColor = backgroundColor(e);
      switch (nodeName) {
        case 'a':
        case 'input':
          roundLink(e, s, bgColor, fgColor);
          break;
        default:
          roundDiv(e, s, bgColor, fgColor);
          break;
      }
    }
  });
  
  function roundWebkit(e, s) {
    var radius = '' + s.sizex + 'px ' + s.sizey + 'px';
    var $e = jQuery(e);
    if (s.tl) $e.css('WebkitBorderTopLeftRadius', radius);
    if (s.tr) $e.css('WebkitBorderTopRightRadius', radius);
    if (s.bl) $e.css('WebkitBorderBottomLeftRadius', radius);
    if (s.br) $e.css('WebkitBorderBottomRightRadius', radius);
  }
  
  function roundMozilla(e, s)
  {  
    var radius = '' + s.sizex + 'px';
    var $e = jQuery(e);
    if (s.tl) $e.css('-moz-border-radius-topleft', radius);
    if (s.tr) $e.css('-moz-border-radius-topright', radius);
    if (s.bl) $e.css('-moz-border-radius-bottomleft', radius);
    if (s.br) $e.css('-moz-border-radius-bottomright', radius);  
  }
  
  function roundLink(e, s, bgColor, fgColor) {
    var table = tableElement("table");
    var tbody = tableElement("tbody");
    table.appendChild(tbody);
    var tr1 = tableElement("tr");
    var td1 = tableElement("td", "top");
    tr1.appendChild(td1);
    var tr2 = tableElement("tr");
    var td2 = relocateContent(e, s, tableElement("td"));
    tr2.appendChild(td2);
    var tr3 = tableElement("tr");
    var td3 = tableElement("td", "bottom");
    tr3.appendChild(td3);
    if (s.tl||s.tr) {
      tbody.appendChild(tr1);
      addCorners(td1, s, bgColor, fgColor, true);
    }
    tbody.appendChild(tr2);
    if (s.bl||s.br) {
      tbody.appendChild(tr3);
      addCorners(td3, s, bgColor, fgColor, false);
    }
    e.appendChild(table);
    /* Clicking on $('a>table') in IE will trigger onclick but not the href  */
    if (jQuery.browser.msie) table.onclick = ieLinkBypass;
    /* Firefox 2 will render garbage unless we hide the overflow here */
    e.style.overflow = 'hidden';
  }
  
  function ieLinkBypass() {
    if (!this.parentNode.onclick) this.parentNode.click();
  }
  
  function changeInput(e) {
    var a1 = document.createElement("a");
    a1.id = e.id;
    a1.className = e.className;
    if (e.onclick) {
      a1.href = 'javascript:'
      a1.onclick = e.onclick;
    } else {
      jQuery(e).parent('form').each(function() {a1.href = this.action;});
      a1.onclick = submitForm;
    }
    var a2 = document.createTextNode(e.value);
    a1.appendChild(a2);
    e.parentNode.replaceChild(a1, e);
    return a1;
  }

  function submitForm() {
    jQuery(this).parent('form').each(function() {this.submit()});
    return false;
  }

  function roundDiv(e, s, bgColor, fgColor) {
    var div = relocateContent(e, s, document.createElement('div'));
    e.appendChild(div);
    if (s.tl||s.tr) addCorners(e, s, bgColor, fgColor, true);
    if (s.bl||s.br) addCorners(e, s, bgColor, fgColor, false);
  }
  
  function relocateContent(e, s, d) {
    var $e = jQuery(e);
    var c;
    while(c=e.firstChild) d.appendChild(c);
    if (e.style.height) {
      var h = parseInt($e.css('height'));
      d.style.height = h + 'px';
      h += parseInt($e.css('padding-top')) + parseInt($e.css('padding-bottom'));
      e.style.height = h + 'px';
    }
    if (e.style.width) {
      var w = parseInt($e.css('width'));
      d.style.width = w + 'px';
      w += parseInt($e.css('padding-left')) + parseInt($e.css('padding-right'));
      e.style.width = w + 'px';
    }
    d.style.paddingLeft = $e.css('padding-left');
    d.style.paddingRight = $e.css('padding-right');
    if (s.tl||s.tr) {
      d.style.paddingTop = adjustedPadding(e, s, $e.css('padding-top'), true);
    } else {
      d.style.paddingTop = $e.css('padding-top');
    }
    if (s.bl||s.br) {
      d.style.paddingBottom = adjustedPadding(e, s, $e.css('padding-bottom'), false);
    } else {
      d.style.paddingBottom = $e.css('padding-bottom');
    }
    e.style.padding = 0;
    return d;
  }
  
  function adjustedPadding(e, s, pad, top) {
    if (pad.indexOf("px") < 0) {
      try {
        //TODO Make this check work otherwise remove it
        console.error('%s padding not in pixels', (top ? 'top' : 'bottom'), e);
      }
      catch(err) {}
      pad = s.sizey + 'px';
    }
    pad = parseInt(pad);
    if (pad - s.sizey < 0) {
      try {
        console.error('%s padding is %ipx for %ipx corner:', (top ? 'top' : 'bottom'), pad, s.sizey, e);
      }
      catch(err) {}
      pad = s.sizey;
    }
    return pad - s.sizey + 'px';
  }

  function tableElement(kind, valign) {
    var e = document.createElement(kind)
    e.style.border = 'none';
    e.style.borderCollapse = 'collapse';
    e.style.borderSpacing = 0;
    e.style.padding = 0;
    e.style.margin = 0;
    if (valign) e.style.verticalAlign = valign;
    return e;
  }
  
  function backgroundColor(e) {
    try {
      var c = jQuery.css(e, "background-color");
      if ( c.match(/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/i) && e.parentNode )
         return backgroundColor(e.parentNode);
      if (c==null)
        return "#ffffff";
      if (c.indexOf("rgb") > -1)
    	  c = rgb2hex(c);
      if (c.length == 4)
  	    c = hexShort2hex(c);
      return c;
    } catch(err) {
      return "#ffffff";
    }
  }
  
  function hexShort2hex(c) {
    return '#' +
    c.substring(1,2) +
    c.substring(1,2) +
    c.substring(2,3) +
    c.substring(2,3) +
    c.substring(3,4) +
    c.substring(3,4);
  }

  function rgb2hex(c) {
  	var x = 255;
  	var hex = '';
  	var i;
  	var regexp=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;
  	var array=regexp.exec(c);
  	for(i=1;i<4;i++) hex += ('0'+parseInt(array[i]).toString(16)).slice(-2);
  	return '#'+hex;
  }
  
  function parseOptions(options, settings) {
    var options = options || '';
    var s = {sizex:5, sizey:5, tl: false, tr: false, bl: false, br: false, webkit:true, mozilla: true, transparent:false};
    if (settings) {
      s.sizex = settings.sizex;
      s.sizey = settings.sizey;
      s.webkit = settings.webkit;
      s.transparent = settings.transparent;
      s.mozilla = settings.mozilla;
    }
    var sizex_set = false;
    var corner_set = false;
    jQuery.each(options.split(' '), function(idx, option) {
      option = option.toLowerCase();
      var i = parseInt(option);
      if (i > 0 && option == i + 'px') {
        s.sizey = i;
        if (!sizex_set) s.sizex = i;
        sizex_set = true;
      } else switch (option) {
        case 'no-native': s.webkit = s.mozilla = false; break;
        case 'webkit': s.webkit = true; break;
        case 'no-webkit': s.webkit = false; break;
        case 'mozilla': s.mozilla = true; break;
        case 'no-mozilla': s.mozilla = false; break;
        case 'anti-alias': s.transparent = false; break;
        case 'transparent': s.transparent = true; break;
        case 'top': corner_set = s.tl = s.tr = true; break;
        case 'right': corner_set = s.tr = s.br = true; break;
        case 'bottom': corner_set = s.bl = s.br = true; break;
        case 'left': corner_set = s.tl = s.bl = true; break;
        case 'top-left': corner_set = s.tl = true; break;
        case 'top-right': corner_set = s.tr = true; break;
        case 'bottom-left': corner_set = s.bl = true; break;
        case 'bottom-right': corner_set = s.br = true; break;
      }
    });
    if (!corner_set) {
      if (!settings) {
        s.tl = s.tr = s.bl = s.br = true;
      } else {
        s.tl = settings.tl;
        s.tr = settings.tr;
        s.bl = settings.bl;
        s.br = settings.br;
      }
    }
    return s;
  }
  
  function alphaBlend(a, b, alpha) {
    var ca = Array(
      parseInt('0x' + a.substring(1, 3)),
      parseInt('0x' + a.substring(3, 5)),
      parseInt('0x' + a.substring(5, 7))
    );
    var cb = Array(
      parseInt('0x' + b.substring(1, 3)),
      parseInt('0x' + b.substring(3, 5)),
      parseInt('0x' + b.substring(5, 7))
    );
    r = '0' + Math.round(ca[0] + (cb[0] - ca[0])*alpha).toString(16);
    g = '0' + Math.round(ca[1] + (cb[1] - ca[1])*alpha).toString(16);
    b = '0' + Math.round(ca[2] + (cb[2] - ca[2])*alpha).toString(16);
    return '#'
      + r.substring(r.length - 2)
      + g.substring(g.length - 2)
      + b.substring(b.length - 2);
  }

  function addCorners(e, s, bgColor, fgColor, top) {
    if (s.transparent) addTransparentCorners(e, s, bgColor, top);
    else addAntiAliasedCorners(e, s, bgColor, fgColor, top);
  }
  
  function addAntiAliasedCorners(e, s, bgColor, fgColor, top) {
    var i, j;
    var d = document.createElement("div");
    d.style.fontSize = '1px';
    d.style.backgroundColor = bgColor;
    var lastarc = 0;
    for (i = 1; i <= s.sizey; i++) {
      var coverage, arc2, arc3;
      // Find intersection of arc with bottom of pixel row
      arc = Math.sqrt(1.0 - Math.pow(1.0 - i / s.sizey, 2)) * s.sizex;
      // Calculate how many pixels are bg, fg and blended.
      var n_bg = s.sizex - Math.ceil(arc);
      var n_fg = Math.floor(lastarc);
      var n_aa = s.sizex - n_bg - n_fg;
      // Create pixel row wrapper
      var x = document.createElement("div");
      var y = d;
      x.style.margin = "0px " + n_bg + "px";
      x.style.height = '1px';
      x.style.overflow = 'hidden';
      // Create the pixel divs for a row (at least one)
      for (j = 1; j <= n_aa; j++) {
        // Calculate coverage per pixel (approximates arc within the pixel)
        if (j == 1) {
          if (j == n_aa) {
            // Single pixel
            coverage = ((arc + lastarc) * .5) - n_fg;
          }
          else {
            // First in a run
            arc2 = Math.sqrt(1.0 - Math.pow(1.0 - (n_bg + 1) / s.sizex, 2)) * s.sizey;
            coverage = (arc2 - (s.sizey - i)) * (arc - n_fg - n_aa + 1) * .5;
          }
        }
        else if (j == n_aa) {
          // Last in a run
          arc2 = Math.sqrt(1.0 - Math.pow((s.sizex - n_bg - j + 1) / s.sizex, 2)) * s.sizey;
          coverage = 1.0 - (1.0 - (arc2 - (s.sizey - i))) * (1.0 - (lastarc - n_fg)) * .5;
        }
        else {
          // Middle of a run
          arc3 = Math.sqrt(1.0 - Math.pow((s.sizex - n_bg - j) / s.sizex, 2)) * s.sizey;
          arc2 = Math.sqrt(1.0 - Math.pow((s.sizex - n_bg - j + 1) / s.sizex, 2)) * s.sizey;
          coverage = ((arc2 + arc3) * .5) - (s.sizey - i);
        }
        
        addCornerDiv(s, x, y, top, alphaBlend(bgColor, fgColor, coverage));
        y = x;
        var x = y.cloneNode(false);
        x.style.margin = "0px 1px";
      }
      addCornerDiv(s, x, y, top, fgColor);
      lastarc = arc;
    }
    if (top)
      e.insertBefore(d, e.firstChild);
    else
      e.appendChild(d);
  }
  
  function addCornerDiv(s, x, y, top, color) {
    if (top && !s.tl) x.style.marginLeft = 0;
    if (top && !s.tr) x.style.marginRight = 0;
    if (!top && !s.bl) x.style.marginLeft = 0;
    if (!top && !s.br) x.style.marginRight = 0;
    x.style.backgroundColor = color;
    if (top)
      y.appendChild(x);
    else
      y.insertBefore(x, y.firstChild);
  }

  function addTransparentCorners(e, s, bgColor, top) {
    var d = document.createElement("div");
    d.style.fontSize = '1px';
    var strip = document.createElement('div');
    strip.style.overflow = 'hidden';
    strip.style.height = '1px';
    strip.style.borderColor = bgColor;
    strip.style.borderStyle = 'none solid';
    var sizex = s.sizex-1;
    var sizey = s.sizey-1;
    if (!sizey) sizey = 1; /* hint for 1x1 */
    for (var i=0; i < s.sizey; i++) {
      var w = sizex - Math.floor(Math.sqrt(1.0 - Math.pow(1.0 - i / sizey, 2)) * sizex);
      if (i==2 && s.sizex==6 && s.sizey==6) w = 2; /* hint for 6x6 */
      var x = strip.cloneNode(false);
      x.style.borderWidth = '0 '+ w +'px';
      if (top) x.style.borderWidth = '0 '+(s.tr?w:0)+'px 0 '+(s.tl?w:0)+'px';
      else x.style.borderWidth = '0 '+(s.br?w:0)+'px 0 '+(s.bl?w:0)+'px';
      top ? d.appendChild(x) : d.insertBefore(x, d.firstChild);
    } 
    if (top)
      e.insertBefore(d, e.firstChild);
    else
      e.appendChild(d);
  }
};

/*!
 * jQuery Form Plugin
 * version: 2.69 (06-APR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		success: $.ajaxSettings.success,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}
		
		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				log('aborting upload...');
				var e = 'aborted';
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
				s.complete && s.complete.call(s.context, xhr, 'error');
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 50;

		function cb() {
			if (xhr.aborted) {
				return;
			}
			
			var doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				if (!timedOut)
					return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				
				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}
			
			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
			
			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			
			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};
		
		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);
var ntLookupKey = 113;
var mobilemode = false;

(function( $, undefined ) {

// var equates and global variables here/

var tAccordion = 1;
var tTab       = 2;
var tPlain     = 3;
var tRound     = 4;
var tTabXP     = 5;
var tNone      = 6;
var tWizard    = 7;

$.widget("ui.ntform", {
   // default options
        options: {
			defaultButton: '',
			tabType: 0,
			popup:0,
			parent:'',
			procedure: '',
			action: '',
			actionCancel: '',
			actionTarget: '',
			addSec: '',
			confirmDelete:0,
			confirmDeleteMessage:'Are you sure you want to delete this record?',
			yesDeleteText:'Delete',
			noDeleteText:'No',
			confirmCancel: 0,
			confirmCancelMessage:'Are you sure you want to cancel?',
			yesCancelText:'Cancel',
			noCancelText:'No',
			confirmText:'Confirm',
			actionCancelTarget: '' ,
			urlExt:'',
			focus: 1,
			dirty:0,
			localStorage:0
		},
		status: {
			lastChangeValue:'',
			disableSave:{}
		},	
		//------------------------------------------------------
		_create: function() {
			if (this.options.urlExt==''){try{this.options.urlExt=ntdExt} catch(e){};}			
			this.ready();
			if (this.options.focus){
				this.firstFocus();
			}
		},
		//------------------------------------------------------
		ready: function() {
			var _this=this;
			if (this.options.popup==1){
				try{
					if ($("#popup_" + this.options.procedure + "_div").dialog("option","title")=''){
						$("#popup_" + this.options.procedure + "_div").dialog("option","title",this.options.title);
					}	
				} catch (e) {};	
			}	
			this._bindEvents(this);
		},
		//------------------------------------------------------
		_bindEvents: function(){
			var _this = this;
			$(this.element).find('input').not('.nt-locator')
				.off('keypress.ntform').on('keypress.ntform',function(e){return _this._onKeyPress(this,e);})
				.off('keydown.ntform').on('keydown.ntform',function(e){return _this._onKeyDown(this,e);})
				.off('focus.ntform').on('focus.ntform',function(e){return _this.focus(this);})
				.off('blur.ntform').on('blur.ntform',function(e){return _this.blur(this);})
				.off('valuechanged.ntform').on('valuechanged.ntform',function(e){return _this.valueChanged(this,false,e);});
				
			$(this.element).find('textarea').not('.nt-locator').off('blur.ntform').on('blur.ntform',function(e){return _this.blur(this);});
			
			$(this.element).find('[data-form="'+_this.options.procedure+'"]').each(function(i,elem){
					switch($(elem).attr('data-do')){
					case 'imm':
						$(elem).off('change.ntform').on('change.ntform',function(e){return _this.changeField(this,e);});
						$(elem).off('sendchange.ntform').on('sendchange.ntform',function(e){return _this.sendChange(this,true,e);});
						break;
					case 'ivs':	
						$(elem).off('input.ntform').on('input.ntform',function(e){return _this.changeField(this,e);})						
						break;
					case 'onclick':	
						$(elem).off('click.ntform').on('click.ntform',function(e){return _this.changeField(this,e);});
						break;
					case 'server':
						$(elem).off('click.ntform').on('click.ntform',function(e){return _this.pressButton(this);});
						break;
					}
			});
			$(this.element).find('[data-do="save"]').off('click.ntform').on('click.ntform',function(e){return _this.saveButton(this,e);});
			$(this.element).find('[data-do="deletef"]').off('click.ntform').on('click.ntform',function(e){return _this.deleteButton(this,e);});
			$(this.element).find('[data-do="cancel"]').off('click.ntform').on('click.ntform',function(e){return _this.cancelButton(this,e);});
			$(this.element).find('[data-do="swa"]')
					.addClass('nt-right ui-state-default ui-corner-all ui-button')
					.hover(function(){
						$(this).addClass('ui-state-hover');
					}, function(){
						$(this).removeClass('ui-state-hover');
					})
					.off('click.ntform').on('click.ntform',function(e){return _this.callSecwin(this,e);});
		},
		//------------------------------------------------------
		_onKeyPress: function(elem,e) {
			switch (e.which) {
				case 13:{ // enter
					if (e.isDefaultPrevented()){
						return false;
					}	
					return(this._onEnter(elem,e));
				}
				case 9:{ // tab
					if (e.isDefaultPrevented()){
						return false;
					}	
					return(this._onTab(elem,e));									
				}
			}
		},
//------------------------------------------------------
		_onKeyDown: function(elem,e) {
			if ((e.which == 191) && (e.shiftKey == true)){
				e.which = ntLookupKey;
			}
			switch (e.which) {
				case 8:{ // explicity handle backspace on readonly fields for benefit of IE.
					if ($(elem).attr('readonly') == 'readonly'){
						return false;
					}
					break;
				}
				//case 191:  // ?
				case ntLookupKey: {// F2 by default
					$("#"+elem.id+".hasDatepicker").each(
						function(i,v){
							e.preventDefault();
							$(elem).datepicker("show");
							return false;
						}
					);
					$("#"+elem.id).next(':button').each(
						function(i,v){
							$(this).click();
							return false;
						}
					)
				}
			}
			return true;
		},
		//------------------------------------------------------
		_onEnter: function(elem,e) {
			var _this = this;
			$(this.element).find('[data-nt-default="1"]').each(function(){
				$(this).click();
				e.preventDefault();
				return false;
			})
			this.nextFocus(elem);
			return true;
		},
		//------------------------------------------------------
		_onTab: function(elem,e) {
			this.nextFocus(elem);
			return true;
		},
		//------------------------------------------------------
		hideTab: function(index){
			var id='';
			switch (this.options.tabType){
			case tNone:
			case tPlain:
			case tRound:
				$('#tab_' + this.options.procedure + index + '_div').hide();
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("option","hideTab",index);
				break;
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).hide();
				break;
			case tTab:
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).hide();
				break;
			}
		},
		//------------------------------------------------------
		showTab: function(index){
			var id='';
			switch (this.options.tabType){
			case tNone:
			case tPlain:
			case tRound:
				$('#tab_' + this.options.procedure + index + '_div').show();
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("option","unhideTab",index);
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).show();
				break;
			case tTab:
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).show();
				break;
			}
		},
		//------------------------------------------------------
		firstFocus: function(){
			var e;
			var t = 4000000000;
			$(this.element).find(' :input').not('[readonly],[disabled],[type="hidden"]').each(function(){
				tx = $(this).offset().top;
				if (tx < t && tx != 0){
					e = this;
					t = tx;
				}
			})
			$(e).focus();
		},

		//------------------------------------------------------
		_calcURL : function(elem){
			var url = $(elem).attr('id');
			if (!url){
				url = $(elem).attr('name');
			} else {
				if ($(elem).attr('type') == 'radio'){
					url = url.slice(0,url.lastIndexOf('_'));
				}
			}
			var f = $(elem).attr('data-form');
			if (!f){
				f = this.options.procedure;
			}
			return f +'_' + url + '_value';
		},

		//------------------------------------------------------
		focus : function(elem,e,i){			
			switch (elem.type){
			case 'text':
			case 'number':
			case 'email':
			case 'url':
			case 'range':
				if ($(elem).attr("data-noFocus") == "true"){
					$(elem).attr("data-noFocus","false");
				} else {	
					try{ $('#osk').ntosk('getFocus',elem);} catch(e) {};	
				}	
				try{$('#osk').ntosk('show');} catch(e) {};	
			}
			try{$('#osk').ntosk('mdstatus',0)} catch(e){};	
		},
		//------------------------------------------------------
		blur: function(elem) {
			try{
				$('#osk').ntosk('startHide');	
				if ($('#osk').ntosk('mdstatus')==0){
					this.sendChange(elem,false);					
				}
				$('#osk').ntosk('mdstatus',0)
			} catch(e) {};	
			return this;
		},
		
		//------------------------------------------------------
		valueChanged : function(elem,focus){			
			var _this=this;
			if ($(elem).attr('data-do') == 'ivs'){
				_this.sendChange(elem,focus);
			}
			try {
				$(elem).autocomplete("search");
			} catch(e) {};
			return this;
		},
		//------------------------------------------------------
		sendChange : function(elem,focus){
			if ( this.getValue(elem) != this.status.lastChangeValue){
				this.changeField(elem);				
			}
			try{ $('#osk').ntosk('startHide'); } catch(e) {};	
			if (focus){
				this.nextFocus(elem);
			}	
		},
		//------------------------------------------------------
		changeField : function(elem){
			var _this=this;
			var formstate=$(elem).closest('form').find('#FormState').val();
			if ($(elem).attr("data-ac") == "open"){ // dont do anything if auto-complete is open
				return this;
			}
			if ($(elem).attr("data-wait") == "true"){ // dont do anything on-screen-keyboard was clicked.
				return this;
			}
					// in most cases want to send the id first, not the name. The id is unique to the field on
					// the form, hence has a unique validate:: routine. For radios we have to tweak the id to remove
					// the unique suffix.
			var url = this._calcURL(elem);
			this.status.lastChangeValue = this.getValue(elem);
			if (this.options.localStorage){ // got value
				$('#'+this.options.id).ntformls("onChangeField",elem);
			} else {
				$.get(url+this.options.urlExt,
					'_popup_='+this.options.popup+'&_event_=accepted&value='+this.status.lastChangeValue+'&_ajax_=1&_rnd_='+Math.random()+'&formstate=' + formstate+'&_parentProc_=' + this.options.parent,
					function(data){_this._onAjaxComplete(data);});
			}		
			this.options.dirty = true;
			return this;
		},

		//------------------------------------------------------
		getValue: function(elem){
			  // moved outside the widget so it can be used by ntformls
			var ans ='';
			ans = getFormFieldValue(elem);
			// if called as a post, do not encode & and %. If called from EIP then do.
			ans = encodeURI(ans);
			ans = ans.replace(/&/g,"%26");
			ans = ans.replace(/#/g,"%23");
			ans = ans.replace(/\+/g,"%2B");
			ans = ans.replace(/%0D%0A/g,"%0A");
			ans = ans.replace(/%0D/g,"%0A");
			ans = ans.replace(/%0A/g,"%0D%0A");			
			return ans;
		},
		//------------------------------------------------------
		hideMessage: function() {
			var fn = '#'+this.options.procedure;
			fn = fn.toLowerCase();
			$(fn + '_alert_div').addClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		showMessage: function(message) {
			var fn = '#'+this.options.procedure;
			fn = fn.toLowerCase();
			$(fn + '_alert_div').empty().append(message).removeClass('nt-hidden');
			return this;
		},		
		//------------------------------------------------------
		hideField: function(fieldname) {
			var fn = '#'+this.options.procedure + '_' + fieldname;
			fn = fn.toLowerCase();
			$(fn + '_prompt_div').addClass('nt-hidden');			
			$(fn + '_value_div').addClass('nt-hidden');
			$(fn + '_comment_div').addClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		showField: function(fieldname) {
			var fn = '#'+this.options.procedure + '_' + fieldname;
			fn = fn.toLowerCase();
			$(fn + '_prompt_div').removeClass('nt-hidden');
			$(fn + '_value_div').removeClass('nt-hidden');
			$(fn + '_comment_div').removeClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		disableSave: function(context) {
			if (context){
				this.status.disableSave[context] = 1;
			}
			id = $(this.element).find('[data-do="save"]').attr("id");
			try{$('#'+id).attr("disabled","disabled").button( "refresh" );} catch (e) {};
			return this;
		},
		//------------------------------------------------------
		enableSave: function(context) {
			var all=0;
			if (context){
				this.status.disableSave[context] = 0;			
				$.each(this.status.disableSave, function( key, value ){
					all += value;
				});
			}	
			if (all == 0){
				id = $(this.element).find('[data-do="save"]').attr("id");
				try{$('#'+id).removeAttr("disabled").button( "refresh" );} catch (e) {};
			}	
			return this;
		},
		//------------------------------------------------------
		show: function() {
			$('#' + this.options.procedure + '_div').show();
			return this;
		},
		//------------------------------------------------------
		hide: function() {
			$('#' + this.options.procedure + '_div').hide();
			return this;
		},
		//------------------------------------------------------
		onOpen: function() {
			this.hide();
		},
        //------------------------------------------------------
		_onAjaxComplete: function(data) {
			xmlProcess(data);
			this.ready();
			return this;
		},

		//------------------------------------------------------
		setTimer : function(fld,t) {
			if (this.options.localStorage){
			} else {
				setTimeout("$('#"+$(this.element).attr('id')+"').ntform('server','"+this.options.procedure + '_' + fld + '_value'+"','_event_=timer');",t);
			}	
			return this;
		},
        //------------------------------------------------------
		nextFocus : function(elem) {
			var nf = $(elem).attr('data-nextfocus');
			if (nf){
				$('#'+nf).focus();
			} else {
				var fields = $(elem).parents('form:eq(0),body').find('button,input,textarea,select').not(':hidden');
				var index = fields.index(elem);
				if ( index > -1 && ( index + 1 ) < fields.length ) {
					fields.eq(index + 1).focus();
				} else {
					fields.first().focus();
				}
			}
			return this;
		},

		//------------------------------------------------------
		// want to do an ajax call from the form, but with all the form fields included.
        pressButton : function(elem){
			var _this=this;
			var urlA= this.options.procedure+'_' + $(elem).attr('name') + '_value' + ntdExt;
			var options = {
				url: urlA,
				dataType: 'xml',
				success:    function(data) {
					_this._onAjaxComplete(data);
				},
				data: {_event_:'accepted',

				value: $(elem).attr("value"),
				_ajax_:1}
			};
			try{$(elem).attr("disabled","disabled").button( "refresh" );} catch (e) {};
			this.removePlaceHolder();
			try{
				tinyMCE.triggerSave(true,true);
			} catch(e){};
			if(this.options.localStorage){
			} else {
				$(elem).closest("form").ajaxSubmit(options);
			}	
			this.nextFocus(elem);
			return this;
        },
        //------------------------------------------------------
        clickSave : function(){
			$(this.element).find('[data-do="save"]').click();		
        },
        //------------------------------------------------------
        saveButton : function(elem,event){
			if (this.options.popup){
				ntd.save(event);
			} else {
				if (this.options.action && this.options.action != ''){
					$(elem).closest("form").attr("action",this.options.action).attr("target",this.options.actionTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />');
				$(elem).closest("form").append('<input type="hidden" name="_refresh_" value="saved" />');
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="save_btn" />');
				$("#_webkit_").val(Math.random());
				this.removePlaceHolder();
				$(elem).closest("form").submit();
			}
        },
        //------------------------------------------------------
        deleteButton : function(elem,event){
			if (this.options.confirmDelete) {
				ntConfirm(this.options.confirmDeleteMessage,this.options.confirmText,this.options.yesDeleteText,this.options.noDeleteText,this.deletenow,elem,event,this);
			} else {
				this.deletenow(elem,event,this);
			}
        },
        //------------------------------------------------------
        deletenow : function(elem,event,_this){
			if (_this.options.popup){
				ntd.deletef(event);
			} else {
				if (_this.options.action && _this.options.action != ''){
					$(elem).closest("form").attr("action",_this.options.action).attr("target",_this.options.actionTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />');
				$(elem).closest("form").append('<input type="hidden" name="_refresh_" value="saved" />');
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="deletef_btn" />');
				$("#_webkit_").val(Math.random());
				_this.removePlaceHolder();
				$(elem).closest("form").submit();
			}    
        },		
        //------------------------------------------------------
		cancelButton : function(elem,event){
			if (this.options.confirmCancel && this.options.dirty) {
				ntConfirm(this.options.confirmCancelMessage,this.options.confirmText,this.options.yesCancelText,this.options.noCancelText,this.cancelNow,elem,event,this);
			} else {
				this.cancelNow(elem,event,this);
			}
        },		
        //------------------------------------------------------
		cancelNow : function(elem,event,_this){
			if (_this.options.popup){
				ntd.cancel(event);
			} else {
				if (_this.options.actionCancel && _this.options.actionCancel != ''){
				  $(elem).closest("form").attr("action",_this.options.actionCancel).attr("target",_this.options.actionCancelTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />')
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="cancel_btn" />')
				$("#_webkit_").val(Math.random());
				_this.removePlaceHolder();
				$(elem).closest("form").submit();
			}
		},
        //------------------------------------------------------
        callSecwin : function(elem,event){
			ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + this.options.addsec);
			return this;
        },

        //------------------------------------------------------
		removePlaceHolder : function (){
			$('[placeholder]').each(function(i) {
				var e = $(this);
				if (e.val() === e.attr('placeholder')){
					e.val("");
				}
			});
		},
        //------------------------------------------------------
		server : function(url) {      // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 1; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}
			parms +=  '&_ajax_=1' + '&_parentProc_=' + this.options.parent + '&_rnd_=' + Math.random();
			if (this.options.localStorage){
			} else {
				$.get(url+this.options.urlExt,parms,function(data){_this._onAjaxComplete(data);});
			}	
			return this;
		},

		//------------------------------------------------------
		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments); // default destroy
			// now do other stuff particular to this widget
		}
 });

$.extend( $.ui.ntform, {
        version: "@VERSION"
});

})( jQuery );

// // ---------------------------------------------------------------------------------------
// // add functionality to "checkbox" button so it has an "on" and "off" text, and icon option.
// // ---------------------------------------------------------------------------------------
 $.widget("ui.checkboxbutton", $.extend({}, $.ui.button.prototype, {
	_init: function(){
		var _this=this;
		this.element.data('button', this.element.data('checkboxbutton'));
		$(this.element).bind('click',function(e){ _this._clicked()});
		var i = $.ui.button.prototype._init.apply(this, arguments);
		this._clicked(); // set initial state
		return i;
	},

	refresh: function(force){
		if (force ==0){
			$(this.element).removeAttr("checked");
		} else if (force ==1){
			$(this.element).attr("checked","checked");
		} else if (this.element.is( ":checked" )==false){
			$(this.element).removeAttr("checked");
		} else if (this.element.is( ":checked" )==true){
			$(this.element).attr("checked","checked");
		}
		this._clicked();
		var i = $.ui.button.prototype.refresh.apply(this, arguments);
		return i;
	 },

	_clicked: function(){
		if($(this.element).attr("checked")){
		  this.options.label = this.options.trueText;
		  this.options.icons.primary = this.options.trueIcon;
		} else {
		  this.options.label = this.options.falseText;
		  this.options.icons.primary = this.options.falseIcon;
		}
		this._resetButton();
	}
 }));
 $.ui.checkboxbutton.defaults = $.extend({}, $.ui.button.defaults);

 // Generic funtion to get the value of a form field. Can't be inside the widget because it's hard to get return values.
 
 
//------------------------------------------------------
function getFormFieldValue(elem,value){
	var ans ='';
	var typ = elem.type;
	var i = 0;
	if (typ == undefined){		
		if (elem.length){
			elem = elem[0]
			typ = elem.type;
		} else {
			return value;
		}	
		
	}
	switch (typ){
	case "radio":
		ans = $(elem).val();
		break;
	case "checkbox":
		if (elem.checked){
			ans = elem.value;
		}
		break;
	case "select-multiple":
		for(i = 0; i < elem.length; i++) {
			if(elem.options[i].selected) {
				ans = ans + ';|;' + elem.options[i].value;
			}
		}
		break;
	case "file":
		var files = elem.files;
		try {
			for (i=0;i<files.length;i++){
				ans = ans + ';|;' + files[i].name;
			}
		} catch (err){
			ans = elem.value;
		}
		break;
	case "text":
		var id = $(elem).attr('id')+'_slider';
		if ($('#'+id).attr('id')){
			var values = $('#'+id).slider("values");
			for(i=0;i < values.length;i++){
				ans = ans + values[i] + ';';
			}					
			break;
		} // deliberatley drop down to default if it's not a slider.				
	default:
		if ($(elem).data('luv')){
			ans = $(elem).data('luv');
		} else {
			ans = elem.value; // value not encoded automatically in IE when doing an Ajax Get.
		}
	}

	return ans;
}
 /*
 * Multi-level Drop Down Menu 3.0
 * April 17, 2010
 * Corey Hart @ http://www.codenothing.com
 * modifications to support themeroller by bruce - september 2011
 * modifications to support immediate execute of menus, with urls, on touch by bruce september 2011 //bj
 */ 
(function( $, window, undefined ){
    // Needed for IE Compatibility (Closing menus must be done backwards in IE)
    // Ensure that no complications arise from other libraries modifying the 
    // array functionality (and hope that they store the old reverse function into _reverse)
    var el, a = Array.prototype, Reverse = a._reverse || a.reverse;

    // bgiframe is needed to fix z-index problem for IE6 users.
    // For applications that don't have bgiframe plugin installed, create a useless 
    // function that doesn't break the chain
    function emptyfn(){
        return this;
    }

    // Cache common event functions so they aren't instantiated with each event
    function clearSiblings(){
        $( el = this ).children('a').removeClass( $.data( el.parentNode , 'multi-ddm-classname' ) );
    }
    function oldMenus(){
        $( el = this ).hide().siblings('a').removeClass( $.data( el.parentNode.parentNode , 'multi-ddm-classname' ) );
    }

    
    // Expose the drop down menu
    $.fn.dropDownMenu = function( options ) {
        return this.each(function(){
            // Defaults with metadata support
            var $main = $(this), i = 0, $menu, timeout,
                settings = $.extend({
                    timer: 100,
                    touch: Modernizr.touch, //bj
                    parentMO: 'ui-state-hover',  //bj
                    childMO: 'ui-state-hover',   //bj
                    bgiframe: undefined,
                    levels: [] 
                }, options || {}, $.metadata ? $main.metadata() : {}),

                // Check on every initiation, so bgiframe can be loaded after this plugin
                bgiframe = $.fn.bgiframe || $.fn.bgIframe || emptyfn;

            // Loop through each level, attach the bgiframe and store it's classname
            $menu = $main.data( 'multi-ddm-classname', settings.levels[ 0 ] || settings.parentMO || settings.childMO || '' );
            while ( $menu.length > 0 ) {
                $menu = bgiframe.call(
                    $menu.find('> li > ul').addClass('ui-corner-all ui-widget ui-widget-content')       //bj
                    .data( 'multi-ddm-classname', settings.levels[ ++i ] || settings.childMO || '' ), 
                    settings.bgiframe
                );
            }

						$main.addClass('ui-widget');
						$main.children('li').children('a').addClass('ui-widget ui-state-default');						


            // Use event delegation to track mouse movement across the menu
            $main.on('mouseenter.multi-ddm','li', function(){
                //bj On iPad if menu has no items, and has URL, then the "mouse enter" is really a "touch" and the URL should execute.
                //bj defaults to Modernizr to determine if user is on a "touch device", or lets the server specify
                // note that it can be problematic if the user has a mouse _and_ a touch deview - eg Windows 8.
                if (settings.touch){ 
                  if ($(this).children('a[href!="#"]').attr('href') != undefined){
                    window.location.href = $(this).children('a[href!="#"]').attr('href');
                  }
                  if ($(this).children('a').attr('onclick') != undefined){
                    $(this).children('a').click(); 
                  }
                }
                // end touch support
                var self = $( el = this );

                if ( timeout ) {
                    clearTimeout( timeout );
                }

                // Close old menus and remove hover of non-menus
                Reverse.call( self.siblings('li').find('ul:visible') ).each( oldMenus ).end().each( clearSiblings );

                // Open new menu and remove any lingering hover elements
                self.children('a').addClass( $.data( el.parentNode, 'multi-ddm-classname' ) ).siblings('ul').show()
                    .children('li').each( clearSiblings );
            })
            .on( 'mouseleave.multi-ddm', function(){
                timeout = setTimeout( closemenu, settings.timer );
            });
    
            // Closes all open menus
            function closemenu(){
                // Clear mouseovers
                $main.find('li').each( clearSiblings );

                // Close Menus backwards for IE Compatibility
                Reverse.call( $main.find('ul:visible') ).hide();

                if ( timeout ) {
                    clearTimeout( timeout );
                }
            }
            
            // Allows user option to close menus by clicking outside the menu on the body
            //$( window.document ).on( 'click.multi-ddm', closemenu );
            // this is turned off because ios 5 generates extra click events, and this appears not to be needed anyway.
        });
    };
})( jQuery, window || this );
///////////////////////////////////////////////////////
//   
//   jQuery Plugin to turn form into wizard.
//   Part of NetTalk by CapeSoft 
//   (c) 2010 
//
///////////////////////////////////////////////////////

// first a small plugin to get, or set, the maximum height of a collection of elements.
(function( $ ){
  $.fn.maxHeight = function(h) {
		if (arguments.length > 0){
			this.each(function() {
				$(this).height(h);
			});
			return this;
		} else {
			var max = 0;
			this.each(function() {
				max = Math.max( max, $(this).height() );
			});
			return max;
		}	
  };
})( jQuery );

///////////////////////////////////////////////////////
// now the main ntwiz plugin.
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntwiz", {
	options: {
		procedure: '',
		validateOnNext: 0,
		active: 0,
		maxTab: 0,
		wizTabs: [],
		minHeight: 0,    
		popup: 0,
		saveOk: 0,
		hidePreviousButton: 0,
		disablePreviousButton: 0,
		ntform: '',
		hidden: []
	},

//------------------------------------------------------
	_create: function() {           
	  var _this = this;
		this.element.addClass( "ui-widget ui-widget-content ui-corner-all" );
		if (this.options.validateOnNext == 0){	
			$('[name="wiznext_btn"]').unbind('click.wiz').bind('click.wiz',function(e){
					_this.next();
				});
		} else {
			$('[name="wiznext_btn"]').unbind('click.wiz').bind('click.wiz',function(e){
					_this.tryNext();
				});
		}		
		$('[name="wizprevious_btn"]').unbind('click.wiz').bind('click.wiz',function(e){
			_this.previous();
			});
		this.options.wizTabs = this.element.find('> div');
		this.options.maxTab=this.options.wizTabs.length-1;
		
		var wizHeight = this.element.find('> div').maxHeight();
		if (this.options.minHeight > wizHeight){
		  wizHeight = this.options.minHeight;
		}
		// set them all to be the same height.
		this.element.find('> div').maxHeight(wizHeight).hide();

	},

//------------------------------------------------------
	_init: function() {
		this.active(this.active());
	},	

//------------------------------------------------------
	destroy: function() {
		this.element.removeClass( "ui-widget ui-widget-content ui-corner-all" );
		$.Widget.prototype.destroy.apply( this, arguments );
	},

//------------------------------------------------------
// shortcut to // .option("active", //
	active: function( newValue ) { 
		if ( newValue === undefined ) {
			return this.options.active;
		}
		this._setOption( "active", newValue );
		return this;
	},

//------------------------------------------------------
	_setOption: function( key, value ) {
		switch (key){
		case "active":
			$(this.options.wizTabs[this.options.active]).hide();
			this.options.active = value;                        
			$(this.options.wizTabs[this.options.active]).show();
			this.setButtons();
			$(this.options.wizTabs[this.options.active]).find(':input:enabled:visible:first').focus();
			break;
		case "maxTab":	
			this.options.maxTab = value;
			break;
		case "hideTab":
			this.options.hidden[value] = 1;
			break;
		case "unhideTab":
			this.options.hidden[value] = 0;
			break;
		case "saveOk":		
		  this.options.saveOk = value;  
		  this.setButtons();
		  break;
		} 
		$.Widget.prototype._setOption.apply( this, arguments );
	},

//------------------------------------------------------
  setButtons: function(){
		if (this.options.hidePreviousButton){
			$('[name="wizprevious_btn"]').hide();
		} else {
			if (this.active() == 0 || this.options.disablePreviousButton){  
				$('[name="wizprevious_btn"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
			} else {
				$('[name="wizprevious_btn"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
			}
		}
		if (this.active() == this.options.maxTab) {
			$('[name="wiznext_btn"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
		} else {
			$('[name="wiznext_btn"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');		
		}
		if (this.options.saveOk != -1 && (this.active() == this.options.maxTab || this.options.saveOk == 1)){
			if (this.options.ntform){
				$(this.options.ntform).ntform('enableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		}  else {          			
			if (this.options.ntform){
				$(this.options.ntform).ntform('disableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		} 
		return this;
  },
//------------------------------------------------------  
	tryNext: function() {  
		var parms = '_ajax_=1&_popup_=' + this.options.popup;
		var _this=this;

		$.get(this.options.procedure + '_nexttab_' + this.options.active,parms,function(data){_this._onAjaxComplete(data);});
	},
//------------------------------------------------------  
	tabChanged: function (){
		var parms = '_ajax_=1&_popup_=' + this.options.popup + '&_tab_=' + this.options.active;
		var _this=this;
		$.get(this.options.procedure+'_tabchanged',parms,function(data){_this._onAjaxComplete(data);});
	},

//------------------------------------------------------  
	_onAjaxComplete: function(data) {
		xmlProcess(data);

		if (this.options.ntform){
			$(this.options.ntform).ntform('ready');
		}	
		return this;

	},
//------------------------------------------------------  
	next: function() {  
		for(var n = this.active()+1; n <= this.options.maxTab; n++){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				break;
			} 
		}
	},
//------------------------------------------------------   
	previous: function() {
		if (this.options.hidePreviousButton || this.options.disablePreviousButton){
			return this;
		}
		for(var n = this.active()-1; n >= 0; n--){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				break;
			} 
		}
		return this;
  },
//------------------------------------------------------   
	hideNext: function() {  
		$('[name="wiznext_btn"]').hide();	
	},
//------------------------------------------------------   
	showNext: function() {  
		$('[name="wiznext_btn"]').show();	
	},
//------------------------------------------------------   
	hidePrevious: function() {  
		$('[name="wizprevious_btn"]').hide();
	},
//------------------------------------------------------   
	showPrevious: function() {  
		$('[name="wizprevious_btn"]').show();
	}
//------------------------------------------------------
});

$.extend( $.ui.ntwiz, {
	version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntwiz
///////////////////////////////////////////////////////
/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jrn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
	metadata : {
		defaults : {
			type: 'class',
			name: 'metadata',
			cre: /({.*})/,
			single: 'metadata'
		},
		setType: function( type, name ){
			this.defaults.type = type;
			this.defaults.name = name;
		},
		get: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			if ( !settings.single.length ) settings.single = 'metadata';
			
			var data = $.data(elem, settings.single);
			// returned cached data if it already exists
			if ( data ) return data;
			
			data = "{}";
			
			if ( settings.type == "class" ) {
				var m = settings.cre.exec( elem.className );
				if ( m )
					data = m[1];
			} else if ( settings.type == "elem" ) {
				if( !elem.getElementsByTagName )
					return undefined;
				var e = elem.getElementsByTagName(settings.name);
				if ( e.length )
					data = $.trim(e[0].innerHTML);
			} else if ( elem.getAttribute != undefined ) {
				var attr = elem.getAttribute( settings.name );
				if ( attr )
					data = attr;
			}
			
			if ( data.indexOf( '{' ) <0 )
			data = "{" + data + "}";
			
			data = eval("(" + data + ")");
			
			$.data( elem, settings.single, data );
			return data;
		}
	}
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
	return $.metadata.get( this[0], opts );
};

})(jQuery);/**
 *
 * Color picker
 * Original Author: Stefan Petre www.eyecon.ro
 * Modified, and extended, for use with NetTalk
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
jQuery.extend(jQuery.expr[':'], {
    focus: function(element) { 
        return element == document.activeElement; 
    }
});
 
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="ui-widget ui-widget-content ui-corner-all colorpicker">' +
			          '<div class="ui-widget-header ui-corner-all colorpicker_header">Select Color</div>' +
			          '<div class="colorpicker_color">' +
			            '<div>' +
			              '<div>' +
			              '</div>' +
			            '</div>' +
			          '</div>' +
			          '<div class="colorpicker_hue">' +
			            '<div>' +
			            '</div>' +
			          '</div>' +
			          '<div class="colorpicker_new_color">' +
			          '</div>' +
			          '<div class="colorpicker_current_color">' +
			          '</div>' +
			          '<div>' +
			            '<div class="colorpicker_hex colorpicker_field">' +
			              '<div class="colorpicker_prompt colorpicker_hex_prompt">Hex #</div>' +
			              '<input type="text" maxlength="6" style="width:5em" />' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_rgb">' + 
			            '<div class="colorpicker_rgb_r colorpicker_field">' +
			              '<div class="colorpicker_prompt">Red</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_rgb_g colorpicker_field">' +
			              '<div class="colorpicker_prompt">Green</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_rgb_b colorpicker_field">' +
			              '<div class="colorpicker_prompt">Blue</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_hsb">' + 
			            '<div class="colorpicker_hsb_h colorpicker_field">' +
			              '<div class="colorpicker_prompt">Hue</div>' +
			              '<input type="number" maxlength="3" min="0" max="360" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_hsb_s colorpicker_field">' +
			              '<div class="colorpicker_prompt">Sat</div>' +
			              '<input type="number" maxlength="3" min="0" max="100" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_hsb_b colorpicker_field">' +
			              '<div class="colorpicker_prompt">Bright</div>' +
			              '<input type="number" maxlength="3" min="0" max="100" style="width:3em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_submit">' +
									'<button type="button" class="ui-button ui-widget ui-state-default ui-button-text-only ui-button-text ui-corner-all" role="button" aria-disabled="false">' +
										'<span class="ui-button-text">OK</span>' +
									'</button>' +
			          '</div>' +
			          '<div class="colorpicker_cancel">' +
									'<button id="cpcb" type="button" class="ui-button ui-widget ui-state-default ui-button-text-only ui-button-text ui-corner-all" role="button" aria-disabled="false">' +
										'<span class="ui-button-text">Cancel</span>' +
									'</button>' +
			          '</div>' +
			      '</div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				showIcon: true,
				showField: true,
				color: 'ff0000',
				livePreview: true,
				liveField: '',
				liveScope: 'color',
				liveGradients: true,
				dataField: '',
				closeOnSubmit: true,
				
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
        var v = parseInt($("input:focus").val());
        var min = parseInt($("input:focus").attr("min"));
        var max = parseInt($("input:focus").attr("max"));
        if (v == 'Nan'){
					v = 0;
        }
				switch(pressedKey){
					case 36: // home
						v = min;
						$("input:focus").val(v);
						break;

					case 107: // grey +
					case 38: // up arrow
						v = v + 1;
						if (v > max){v = max;}
						$("input:focus").val(v);
						break;
					case 33: // page up	
						v = v + 10;
						if (v > max){v = max;}
						$("input:focus").val(v);
						break;
					case 109: // grey -
					case 40: // down arrow
						v = v - 1;
						if (v < min){	v = min;}
						$("input:focus").val(v);
						break;
					case 34: // page down
						v = v - 10;
						if (v < min){	v = min;}
						$("input:focus").val(v);
						break;
					case 35: // end
						v = max;
						$("input:focus").val(v);
						break;
						
					default:
						if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
							return false;
						}
				}	
				var cal = $(this).parent().parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				if (this.parentNode==undefined){
					return;
				}			
				var cal = $(this).parent().parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				if (cal.data('colorpicker').liveField != ''){
					$(cal.data('colorpicker').liveField).css(cal.data('colorpicker').liveScope,'#' + HSBToHex(col));
					if (cal.data('colorpicker').liveScope == 'background-color'){
						applyGradients(cal);
					}	
				};
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent().parent();
				//cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				//$(this).parent().parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				//$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterButton = function (ev) {
				$(this).find('button').addClass('ui-state-focus');
			},
			leaveButton = function (ev) {
				$(this).find('button').removeClass('ui-state-focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				$(cal.data('colorpicker').dataField).val('#' + HSBToHex(col));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
				if (cal.data('colorpicker').closeOnSubmit == true){
					//$(cal.data('colorpicker').el).ColorPickerHide();
					hide(ev);
				}
				$(cal.data('colorpicker').dataField).change()
			},
			clickCancel = function (ev) {
				hide(ev);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				//if (cal.data('colorpicker').dataField != ''){
					$(this).ColorPickerSetColor($(cal.data('colorpicker').dataField).val());
				//}

				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, maybehide);
				return false;
			},
			maybehide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					hide(ev);
				}
			},
			hide = function(ev){
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
						if (ev.data.cal.data('colorpicker').liveField != ''){
							$(ev.data.cal.data('colorpicker').liveField).css(ev.data.cal.data('colorpicker').liveScope,'#' + HSBToHex(ev.data.cal.data('colorpicker').origColor) );
							if (ev.data.cal.data('colorpicker').liveScope == 'background-color'){
								applyGradients(ev.data.cal);
							}	
						};
					}
					$(document).unbind('mousedown', maybehide);			
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			// bj start bruce
			RGBStringToHex = function (rgbString){
				var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]
				delete (parts[0]);
				for (var i = 1; i <= 3; ++i) {
					parts[i] = parseInt(parts[i]).toString(16);
					if (parts[i].length == 1) parts[i] = '0' + parts[i];
				}
				return('#' + parts.join('')); // "0070ff"
			}, // bj end bruce
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			applyGradients = function(cal){
				if (cal.data('colorpicker').liveGradients == true){
					var col = $(cal.data('colorpicker').liveField).css('background-color');
					if (col != 'transparent'){
						if (Modernizr.cssgradients ==  false){
							if (window.ActiveXObject) {  //for IE
								$(cal.data('colorpicker').liveField).each(function(){
									this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
								});	
							}
						} else {
							$(cal.data('colorpicker').liveField).css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))'); 
							if ($(cal.data('colorpicker').liveField).css('background') == ''){
								$(cal.data('colorpicker').liveField).css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
							}	
						}	
					}	
				}	
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				if (cal.data('colorpicker').liveField != ''){
					$(cal.data('colorpicker').liveField).css(cal.data('colorpicker').liveScope,'#' + HSBToHex(col));
					if (cal.data('colorpicker').liveScope == 'background-color'){
						applyGradients(cal);
					}	
				};
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'colorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.dataField = '#' + $(this).attr("id");
						if (opt.showIcon == true){
							var _this = '#' + $(this).attr("id");
							$(this).after('<img  class="colorpicker_lookup" src="/styles/images/colorpicker_lookup.png"/>');
							$(this).next('img').bind('click', function(){ $(_this).trigger('click');});
//							$(this).after('<div class="colorpicker_lookup"></div>');
//							$(this).next('div').bind('click', function(){ $(_this).trigger('click');});
//							$(this).next('div').position({my: "right top", at: "right top", of: _this})
						} 
						if (opt.showField == false) {
							$(this).addClass('nt-hidden');
						}
						
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterButton)
							.bind('mouseleave', leaveButton)
							.bind('click', {cal: cal}, clickSubmit);
						cal.find('div.colorpicker_cancel')
							.bind('mouseenter', enterButton)
							.bind('mouseleave', leaveButton)
							.bind('click', {cal: cal}, clickCancel);							
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide(); // jQuery method, not local method.
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
				  // bj start bruce
				  if (col.substr(0,3) == 'rgb'){
						col = RGBStringToHex(col);
					}
					// bj end bruce 
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
/*
ntdialog object is a stack to manage popup dialogs
a single var called ntd is created for each page at the end of the declaration.
*/
function ntdialog(){
this.level=-1;
this.luf=new Array();
this.sf=new Array();
this.dlg=new Array();
this.pmt=new Array();
this.open=new Array();
this.action=new Array();
this.calledfrom=new Array();
this.grandparent=new Array();
this.row=new Array();
this.other=new Array();
this.autosave=new Array();
this.oncomplete=new Array();
this.viewstate=new Array();
this.equate=new Array();
this.saved=new Array();
this.parent=new Array();
this.browseid=new Array();
}
// ----
ntdialog.prototype.push = function (dlg,luf,pmt,run,action,sf,calledfrom,row,other,autosave,oncomplete,grandparent,viewstate,equate,par,browseid){

 this.level += 1;
 this.dlg[this.level] = dlg.toLowerCase();
 this.luf[this.level] = luf;//lookupfield
 this.sf[this.level] = sf;//sortfield
 this.pmt[this.level] = pmt;//title
 this.row[this.level] = row;//row id
 this.other[this.level] = other;//other parameters
 this.autosave[this.level] = autosave;
 this.saved[this.level] = 0;
 this.open[this.level] = 0;
 if (action == null){
   this.action[this.level] = 0;
 } else {
   this.action[this.level] = action;
 }
 if (oncomplete){
   this.oncomplete[this.level] = oncomplete;
 } else {
   this.oncomplete[this.level] = '';
 }

 if (viewstate){
   this.viewstate[this.level] = viewstate;
 } else {
   this.viewstate[this.level] = '';
 }

 if (equate){
   this.equate[this.level] = equate;
 } else {
   this.equate[this.level] = '';
 }

 this.calledfrom[this.level] = calledfrom;
 this.parent[this.level] = par;
 this.grandparent[this.level] = grandparent;
 this.browseid[this.level] = browseid;
 if (run == 1){
   this.run();
 }
}
// ----
ntdialog.prototype.current = function (){
  return this.dlg[this.level];
}
// ----
ntdialog.prototype.setRow = function (rowId){  
	this.row[this.level] = rowId;
}
// ----
ntdialog.prototype.run = function (){  
	var lvl = this.level;
	var _this = this;
	var _id = '#popup_'+this.dlg[this.level].toLowerCase()+'_div';
	var _lsid = '#'+this.dlg[this.level].toLowerCase()+'_div';
	//console.log('ntd Run id=' + _id + ' ntdLocalStorage=' + ntdLocalStorage + '  this.action[this.level]=' + this.action[this.level] + ' this.level=' + this.level + ' this.autosave=' + this.autosave[this.level])
	if (this.level>-1){
		if (this.autosave[this.level] != 1){
			if (!ntdLocalStorage){
				SetSessionValue('popup_'+this.dlg[this.level],1);                       
			}	
			//console.log('ntd confirmation dialog open')
			if (this.pmt[this.level]) {
				$(_id).dialog( "option", "title", this.pmt[this.level] );
			}	
			$(_id).dialog('open');
			try{
				$('#'+this.dlg[this.level] + '_frm').ntform('hide');
			} catch(e){}
		}
		switch (this.action[this.level]){
		case 1: //insert
			if (ntdLocalStorage){
				$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=insert_btn&_popup_=1&_bidv_='+this.row[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 2: //change
			if (ntdLocalStorage){
				$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level],this.row[this.level]);	
			} else {
				if (this.autosave[this.level] != 1){
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=change_btn&_popup_=1&_bidv_='+this.row[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
				} else {
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=change_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_auto_='+this.calledfrom[this.level]+'&_parentProc_=' + this.parent[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
				}
			}	

			break;
//   	case 3: //delete
//    	$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=delete_btn&_popup_=1&_bidv_='+this.row[this.level],function(data){xmlProcess(data);firstFocus(_id);});
//    	break;
		case 4: // copy
			if (ntdLocalStorage){
				$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);	
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=copy_btn&_popup_=1&_bidv_='+this.row[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 5: // view
			if (ntdLocalStorage){
				$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);	
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=view_btn&_popup_=1&_bidv_='+this.row[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 6: //lookup
			if (ntdLocalStorage){
				//trick 'cause we don't know if the lookup is a form, or a browse.
				$(_lsid).ntbrowsels("populate");	
				break;
				
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&Lookup_btn=1&_refresh_=sort&_popup_=1&LookupField='+this.luf[this.level]+'&_sort_='+this.sf[this.level] + '&_title_=' + this.pmt[this.level] + '&' + this.other[this.level] + '&'+this.luf[this.level]+'='+$('#'+ntd.getluf()).val(),function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
//		case 7: //zoom in
//			$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_zoom_=1&_popup_=1&_date_=' + this.row[this.level],function(data){xmlProcess(data);firstFocus(_id); _this.oncomplete[lvl]();});
//			break;
		case 100: // browse
			//console.log('ntd ls browse ntdLocalStorage=' + ntdLocalStorage + '  id=' + _lsid)
			if (ntdLocalStorage){
				$(_lsid).ntbrowsels("populate");	
				break;
			}	
		case 101: // form
			//console.log('ntd ls form ')
			if (ntdLocalStorage){
				if ($('#'+this.dlg[this.level] + '_frm').length){
					$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);
				} else if ($('#'+this.dlg[this.level] + '_div').length){  // forms with no <form> have no _frm.
					$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level]);
				}
				break;
			}				
		default:
			if (ntdLocalStorage){// forms with no action

				try {
					$('#'+this.dlg[this.level] + '_div').ntformls("populate");
				} catch(e) {}	
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_popup_=1&_bidv_='+this.row[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});	
			}	
		}
		if (this.autosave[this.level] != 1){
			this.open[this.level]=1;
		}
	}
}
// ----
ntdialog.prototype.pop = function (dlg){
	try{
		tinyMCE.triggerSave(true,true);
	} catch (e) { //alert('tinyMCE. Save failed. ' + e.message);
	}		
	var par='';
	var rid='';
	var prid='';
	if (this.level > -1){
		if(!ntdLocalStorage){
			SetSessionValue('popup_'+this.dlg[this.level],0)
		}	
		if (ntdFrontLoaded != 1){
			if (dlg != undefined){
				$(dlg).html('');
			} else {
				$('#'+ntd.getdlg().toLowerCase()+'_div').html('');
			}
		}	
		this.open[this.level]=0;
		var svd = (this.saved[this.level]) ? "&_refresh_=saved" : "&_refresh_=cancelled" ;
		if (this.browseid[this.level]){
			if (!ntdLocalStorage){
				$(this.browseid[this.level]).ntbrowse("disable");
			}	
			rid = $(this.browseid[this.level]).ntbrowse('option','randomid');
			prid = '&_parentrid_=' + $(this.browseid[this.level]).ntbrowse('option','parentrid');
		}	
		this.level -= 1;
		if (this.parent[this.level+1] && this.parent[this.level+1] != ''){
			par = '&_parentProc_='+this.parent[this.level+1]
		}		
		if (this.level > -1){
			if (this.open[this.level] == 0){
				this.run();
			} else {			  
				if(!ntdLocalStorage){
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_event_=gainfocus&_popup_=1&_bidv_=' + this.row[this.level+1]+'&viewstate='+this.viewstate[this.level+1]+'&_equate_='+this.equate[this.level+1]+'&_action_=' + this.action[this.level+1]+'&_from_='+ this.dlg[this.level+1]+'&_calledfrom_=' + this.calledfrom[this.level+1] + svd + '&' + this.other[this.level+1] + par + '&_rid_=' + rid + prid,function(data){xmlProcess(data);});
				}	
			} 
		} else if (this.calledfrom[0]){
				if(!ntdLocalStorage){
					$.get(this.calledfrom[0]+ntdExt,'_ajax_=1&_event_=gainfocus&_popup_=0&_bidv_=' + this.row[this.level+1]+'&viewstate='+this.viewstate[this.level+1]+'&_equate_='+this.equate[this.level+1]+'&_action_=' + this.action[this.level+1]+'&_from_='+ this.dlg[this.level+1]+'&_calledfrom_=' + this.calledfrom[this.level+1] + svd + '&' + this.other[this.level+1] + par + '&_rid_=' + rid + prid,function(data){xmlProcess(data);});
				}	
		}	
	}
}
// ----
ntdialog.prototype.getluf = function (){
  if (this.level > -1){
    return this.luf[this.level];
  } else {
    return '';
  }
}
// ----
ntdialog.prototype.getdlg = function (){
  if (this.level > -1){
    return this.dlg[this.level];
  } else {
    return '';
  }
}
// ----
ntdialog.prototype.close = function (){
	$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
}
// ----
ntdialog.prototype.cancel = function (){
	var id = this.dlg[this.level];
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];
	}
	if (ntdLocalStorage){
		this.close()
	} else {
		var options = { 
			url: id,
			dataType: 'xml',
			success:    function(data) { 
				xmlProcess(data); 
			},
			url: this.dlg[this.level] + '_xxx_cancelled' + ntdExt,
			data: {	pressedButton: 'cancel_btn', _popup_: 1,_ajax_: 1, _grandparent_: this.grandparent[this.level]}
		}; 
		$("#"+this.dlg[this.level]+"_frm").ajaxSubmit(options);
	}	
}
// ----
ntdialog.prototype.save = function (event){
	//console.log('ntd.save level=' + this.level + ' row=' + this.row[this.level])
	this.saved[this.level] = 1;
	try{
		tinyMCE.triggerSave(true,true);		      
		$('.nt-tinymce').each(function(index){      
				try{				  
					tinyMCE.execCommand('mceRemoveControl',true,$(this).attr('id'));
				} catch (e) { 
				}						
			});	
	} catch (e) { 
	}		
	var id = this.dlg[this.level];	
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];
	}
	if (ntdLocalStorage){
		if (this.action[this.level] == 1) {
			this.row[this.level] = '';
		} 
		$('#'+this.dlg[this.level] + '_frm').ntformls("save",this.action[this.level],this.browseid[this.level],this.row[this.level]);	
		this.close()
	} else {
		var options = { 
			url: id,
			dataType: 'xml',
			success:    function(data) { 
				xmlProcess(data); 
			},
			url: this.dlg[this.level] + '_xxx_validate' + ntdExt,
			data: {	pressedButton: 'save_btn', _popup_: 1,_ajax_: 1, _grandparent_: this.grandparent[this.level], _buttontext_: $(event.target).text()}
		}; 
		$("#"+this.dlg[this.level]+"_frm").ajaxSubmit(options);
		// use the line below instead when debugging, as it's visible in firebug.
		//$.post(id+ntdExt,'pressedButton=save_btn&_popup_=1&'+ $("#"+this.dlg[this.level]+"_frm").serialize(),function(data){xmlProcess(data);});
	}	
}
// ----
ntdialog.prototype.deleteb = function (id,br,ff,par){
	$.post(br+ntdExt,'pressedButton=deleteb_btn&_popup_=1&_fromForm_='+ ff + '&_bidv_=' + id + '&_ajax_=1&_parentProc_' + par,function(data){xmlProcess(data);});
}
// ----
ntdialog.prototype.deletef = function (){
	var id = this.dlg[this.level];
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];//.id;
	}
	$.post(this.dlg[this.level] + '_xxx_delete' + ntdExt,'pressedButton=deletef_btn&_popup_=1&_ajax_=1&'+ $("#"+this.dlg[this.level]+"_frm").serialize(),function(data){xmlProcess(data);});
	this.action[this.level] = 3; // delete
	//$.post(id+ntdExt,'pressedButton=deletef_btn&_popup_=1&'+ $("#"+this.dlg[this.level]+"_frm").serialize(),function(data){xmlProcess(data);});
	$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
}
// ----
// jQuery UI changed _title method to not allow HTML. This override reverts it so HTML in the Dialog title is allowed.
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function(title) {
        if (!this.options.title ) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));
// ----
var ntd = new ntdialog();
var ntdExt = '';
var ntdFrontLoaded=0;
var ntdLocalStorage=0;;var NetTalkVersion=10.35
// ---------------------------------------------

var cnt=0;
var tcnt=0;
var fcnt='';
var icnt='';
var ntMultiTab=false;

function initTabID(){
	ntMultiTab=true;
	var newId=false;
	var ce=false;
	if (!sessionStorage.id || localStorage.newIdRequired == 1){
		localStorage.newIdRequired = 0;
		sessionStorage.id = Math.random().toString(36).substr(5);		
		newId = true;
	} else {
		if (document.cookie.indexOf('x-TabID=') < 0){
			newId = true;
		}	
	}

	// for ajax calls no cookie is used - rather the x-TabID header is set to the current session storage ID.
	$.ajaxSetup({
		headers: { 'x-TabID': sessionStorage.id }
	});	
	
	if (newId){
		if (localStorage.fromTabId){
			$.get('NewTabID'+ntdExt,'_ajax_=1&x-FromTabID=' + localStorage.fromTabId,function(data){xmlProcess(data);});	
		} else {
			$.get('NewTabID'+ntdExt,'_ajax_=1',function(data){xmlProcess(data);});			
		}	
	}	
	
	// can't change headers for a non-ajax request. 
	// these cookies are "fleeting" so clear them away.
	document.cookie = 'x-TabID=; expires=Thu, 01-Jan-70 00:00:01 GMT;';	
	document.cookie = 'x-FromTabID=; expires=Thu, 01-Jan-70 00:00:01 GMT;';	
	localStorage.fromTabId = '';
	
	// mouse could be left, right or middle... so set FromTabId preemptivly.
	$('a').mousedown(function (event) { 
		localStorage.fromTabId = sessionStorage.id;
	}); 
	// a Ctrl-Click, or right-click/new tab or whatever does NOT go through this code. which is why FromTabID is set on MouseDown
	$('a').click(function (event) {		
		if (event.metaKey || event.ctrlKey || $(this).attr('target') == '_blank'){ 	// going to a new tab
		} else {  																	// normal click, so want TabID Cookie
			document.cookie = 'x-TabID=' + sessionStorage.id + ';';
		}		
	});  
	initTabIDButtons();
};

function initTabIDButtons(){	
	// setting on button click appears to be too late, so set on button down.
	$('button').mousedown(function (event) {initTabIDWorker();});  
	$('input[type="submit"]').mousedown(function (event) {initTabIDWorker();});  
	$('input[type="button"]').mousedown(function (event) {initTabIDWorker();});  
	$('input[type="image"]').mousedown(function (event) {initTabIDWorker();});  
	$('input[type="reset"]').mousedown(function (event) {initTabIDWorker();});  
	// pressing enter on button, when the button has the focus
	$('button').keydown(function(event){initTabIDWorker();});
	$('input[type="submit"]').keydown(function(event){initTabIDWorker();});
	$('input[type="button"]').keydown(function(event){initTabIDWorker();});
	$('input[type="image"]').keydown(function(event){initTabIDWorker();});
	$('input[type="reset"]').keydown(function(event){initTabIDWorker();});
};

function initTabIDWorker(){
	var t= $(this).attr('target');
	var oc = $(this).attr('onclick');
	if (oc){
		oc = oc.indexOf("'_blank'");
	} else {
		oc = -1;
	}
	if (t == '_blank' || oc >= 0){
		localStorage.fromTabId = sessionStorage.id;
		localStorage.newIdRequired = 1;
	} else {
		document.cookie = 'x-TabID=' + sessionStorage.id + ';';
	}		
}
function countDown(){
  hh = parseInt( cnt / 3600 );
  mm = parseInt( cnt / 60 ) % 60;
  ss = cnt % 60;
    var t = hh + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  jQuery('#' + icnt).html(t);
  cnt -= 1;
  if (cnt ==0){
    window.open(fcnt,'_top');
  } else {
        setTimeout("countDown();",1000);
  }
};

function resetCountDown(){
  cnt = tcnt;
}

function startCountDown(t,f,i){
  if (t){
        tcnt = t;
    }
    if (f){
        fcnt = f;
    }
    if (i){
        icnt = i;
    }
    cnt = tcnt;
  countDown();
};

function versionCheck(v){
  var s = v + '';
  s = s.replace('.','');
  v = Number(v);
  if (v != NetTalkVersion){
    $('#_ver' + s).html('UPDATE OF WEB FOLDER REQUIRED - Try pressing Ctrl-F5. Server is on version ' + v + ' but web folder is on version ' +  NetTalkVersion);
	//window.location.reload(true);  // what happens if the server folder has not been updated though?
  } else {
        $('#_ver' + s).hide();
    }
}

function showInfo(m,t,d){
  if (!d){
    d = 'alert_div';
  }
  $('#'+d).html(m).hide().fadeIn(1000);
  if (t){
    setTimeout("hideInfo('"+d+"');",t);
  }
}
    
function hideInfo(d){    
  if (!d){
    d = 'alert_div';
  }
  $('#'+d).show().fadeOut(1000,function(){$('#'+d).html('')});
}  

function getScreenSize(force){
	if (force==true || sessionStorage._ScreenWidth_ != $(window).width() || sessionStorage._ScreenHeight_ != $(window).height()){
		sessionStorage._ScreenWidth_ = $(window).width();
		sessionStorage._ScreenHeight_ = $(window).height();
		$.get('SetSessionValue'+ntdExt,'_ScreenWidth_=' + $(window).width() + '&_ScreenHeight_=' + $(window).height() + '&_ajax_=1',function(data){xmlProcess(data);});
	}	
}

// ---------------------------------------------
// functions to handle busy graphic
var busyCounter=0;
$(document).ready(function() {
	busyCounter = 0;
	$("#_busy").hide(); 
	$(document).on("ajaxSend",function(event){
		$("#_busy").css('left',event.pageX).css('right',event.pageY);
		$("#_busy").show();
		busyCounter += 1;
		if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
			$('input:radio, input:checkbox').unbind('click.iefix');
		};
	});
	$(document).on("ajaxComplete",function(){;
		if (busyCounter){busyCounter -= 1;}
		if (busyCounter ==0){ $("#_busy").hide(); };
		if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
			$('input:radio, input:checkbox').on('click.iefix',function () {
				this.blur();
				this.focus();
			});
		}
	});
});
// ---------------------------------------------
function ntConfirm(m,t,b1,b2,f,p1,p2,p3){
	if (mobilemode){
		f(p1,p2,p3);
		return;
	}
	setTimeout(function(){
        var a = jQuery(":focus").attr('id');
		$("#message_alert").remove();
        if (t){
			$('body').append('<div id="message_alert" title="' + t + '">' + m + '</div>');
		} else {	
			$('body').append('<div id="message_alert" title="Alert">' + m + '</div>');
		}	
		$("#message_alert").dialog({
			resizable: false,
			modal: true,
			buttons: [	{			
				text: b1,
				click: function() {
					$(this).dialog("close");
					$("#message_alert").remove();
					f(p1,p2,p3);
				} }, {
				text: b2,
				click: function() {
					$(this).dialog("close");
					$("#message_alert").remove();					
				} } 				
			],
			open: function() {
				 $(this).parent().find('button:nth-child(1)').focus(); 
			},
			close: function() {
				 $('#' + a).focus();  
			}
		});		
    }, 1);
};
// ---------------------------------------------
function ntAlert(m,t,timer){
  setTimeout(function() {
        var a = jQuery(":focus").attr('id');
		$("#message_alert").remove();
        if (t){
			$('body').append('<div id="message_alert" title="' + t + '">' + m + '</div>');
		} else {	
			$('body').append('<div id="message_alert" title="Alert">' + m + '</div>');
		}	
		$("#message_alert").dialog({
			resizable: false,
			modal: true,
			buttons: {
				Ok: function() {
					$(this).dialog("close");
					$("#message_alert").remove();
				}
			},
			open: function() {
				 $(this).parent().find('button:nth-child(1)').focus(); 
			},
			close: function() {
				 $('#' + a).focus();  
			}
		});
		if (timer){
			setTimeout(function() { $("#message_alert").dialog("close"); }, timer);
		}
    }, 1);
}
// ---------------------------------------------
var hadfocus='';
var setfocus='';
function afterSv(){
  GreenAll();
  applyHTML5();
}

var tables = [];
function GreenAll(){
  for(var e = 0; e < tables.length; e++){
     tables[e].table=document.getElementById(tables[e].tid); // necessary after ajax call
     if (tables[e].table != null){
       tables[e].parseCell();
       tables[e].applyGreenBar();
     }
     tables[e].makeResizable();
     tables[e].prepColumns();
     tables[e].bind();
     //tables[e].restoreFocus();
  }
}
// -----------------------------------------------------------------------------------
// AutoTab support
// If an entry field has data-nt-autotab=1", then when the maxlength is reached focus
// automatically moves to the next field.
// -----------------------------------------------------------------------------------
jQuery.fn.focusNextInputField = function() { // this function from http://jqueryminute.com/, thanks to jdSharp.
    return this.each(function() {
        var fields = $(this).parents('form:eq(0),body').find('button,input,textarea,select').not('[readonly]');
        var index = fields.index( this );
        if ( index > -1 && ( index + 1 ) < fields.length ) {
            fields.eq( index + 1 ).focus();
        }
        return false;
    });
};

jQuery(document).ready( function(){
    jQuery("body").on("[data-nt-autotab=1]","keyup",function(e) {
        if ($(this).val().length == $(this).attr("maxlength")){
            if((e.which >= 32) && (e.which <= 122)){
                jQuery(':focus').focusNextInputField();
            }
        }
    });
});


// recursive function to find the first checkbox which is "inside" c.
function getCheckbox(c){
 if (c.type == 'checkbox'){
  return c;
 }
 if (c.firstChild != null){
  a = getCheckbox(c.firstChild);
  if (a != null){
  return a;
  }
 }
 while (c.nextSibling != null){
  a = getCheckbox(c.nextSibling);
  if (a != null){
   return a;
  }
 }
 return null;
}

function dsb(event,f,b,n,prid,prv){
 var i=0;
 if (n=='deleteb_btn'){
  if(confirm('Are you sure you want to delete this record?')==false){
   return false;
  }
 }
 // dont send files if form is cancelled.
 if (n=='cancel_btn'){
                jQuery(':file').remove();
 }
 // set all buttons disabled, if target of button is same frame.
 if (f.target == "" || f.target == "_self"){
         jQuery(':button').attr('disabled', 'disabled');
 }
 for (var e=0 ; e < f.elements.length; e++) {
   if (f.elements[e].name == prid){
    f.elements[e].value = prv;
    i = 1;
   }
 }
 var bid = document.createElement('INPUT');
 bid.type = 'hidden';
 bid.name = '_buttontext_';
 bid.value = $(event.target).closest("button").val();
 f.appendChild(bid);

 jQuery("#_webkit_").val(Math.random());
 if ((i==0) && (prid != '')){
  var rid = document.createElement('INPUT');
  rid.type = 'hidden';
  rid.name = prid;
  rid.value = prv;
  f.appendChild(rid);
 }
 var pb = document.createElement('INPUT');
 pb.type = 'hidden';
 pb.name = 'pressedButton';
 pb.value = n;
 f.appendChild(pb);
 osf(f);
 removePlaceHolder();
 f.submit();
}

function osf(f){
    if(f.target=='' || f.target=='_self' || f.target=='_top') {
        for (var e=0 ; e < f.elements.length; e++) {
            if(f.elements[e].type=='button'){
                f.elements[e].disabled = true;
            }
        }
    }
}

function ml(ta,ml,e){
	var k;
	if(window.event){ // IE
		k = e.keyCode
	} else if(e.which){ // Netscape/Firefox/Opera/Safari
		k = e.which
	};
	switch(k){
	case 8: // backspace
	case null:
	case undefined:  // del
	case 120: // ctrl-x
		return true		
	case 118: // ctrl-v
		break;
	}	  
	if (k > 60000){
		return true;
	}
	return (ta.value.length <= ml);
}

function firstFocus(id){
  var e;
  var t = 4000000000;
    jQuery(id + ' :input').not('[readonly],[disabled],[type="hidden"]').each(function(){
      tx = $(this).offset().top
      if (tx+1 < t && tx != 0){  // +1 to handle lookup buttons that are 1 pixel higher than the textarea field.
        e = this;
        t = tx;
      }
    })
    $(e).focus();
}

function nextFocus(f,pname,skipone){
  var i = 0;
  var j = 0;
  if (skipone==2){ // pname is specified control to get focus
    for (var e=0 ; e < f.elements.length; e++) {
      if(f.elements[e].name==pname){
  try{
    f.elements[e].focus();
  } catch (e) {
  }
  break;
      }
    }
  } else {
    for (var e=0 ; e < f.elements.length; e++) {
      if (i==1){
  if ((f.elements[e].type == "text") || (f.elements[e].type == "textarea") || (f.elements[e].type == "checkbox") || (f.elements[e].type == "radio") || (f.elements[e].type == "select-one")){
    //|| (f.elements[e].type == "button")
    if(f.elements[e].readOnly != true){
      if((skipone==1) && (j==0)){
        j = 1;
      } else {
        try{
    f.elements[e].focus();
        } catch (e) {
        }
        break;
      }
    }
  }
      }
      else{
  if(pname==''){
    if(f.elements[e].readOnly != true){
      try{
        f.elements[e].focus();
      } catch (e) {
      }
      break;
    }
  } else {
    if(f.elements[e].name==pname){
      i = 1;
    }
  }
      }
    }
  }
}


function removeElement(fn,dn){
 var f=document.getElementById(fn);
 var dv=document.getElementById(dn);
 var a;
 var b;
 if (dv != null){
  var divs = dv.getElementsByTagName('DIV');
  for(var e = divs.length-1; e>=0 ; e--){
   if ((divs[e].id != dn) && (divs[e].id != '')){
    removeElement(fn,divs[e].id);
   }
  }
  if (f != null){
   for(var e = f.elements.length-1; e>=0 ; e--) {
    a = f.elements[e].parentNode.id;
    b = dv.id
    if (a==b){
     try{
      dv.removeChild(f.elements[e]);
     } catch (e) {
     }
    }
   }
  }
 }
}

function FieldValue(f,e){
  var ans ='';
  var typ = f.type;
  var i = 0;
  var j = 0;
  if (typ == undefined){
    typ = f[0].type;
  }
  switch (typ){
  case "radio":
    j = f.length;
    for(i = 0; i < j; i++) {
      if(f[i].checked) {
  ans = f[i].value;
  break;
      }
    }
    break;
  case "checkbox":
    if (f.checked){
      ans = f.value;
    }
    break;
  case "select-multiple":
    j = f.length;
    for(i = 0; i < j; i++) {
      if(f.options[i].selected) {
        ans = ans + ';|;' + f.options[i].value;
    }
    }
    break;
  default:
    if ($(f).data('luv')){
      ans = $(f).data('luv');
    } else {
      ans = f.value;
    }
  }
  // if called as a post, do not encode & and %. If called from EIP then do.
  if ((ans != undefined) && ((e == 0) || (e == undefined))){
                ans = ans.replace(/%/g,"%25");
                ans = ans.replace(/&/g,"%26");
                ans = ans.replace(/#/g,"%23");
				ans = ans.replace(/\+/g,"%2B");
        }
  return ans
}

function SetSessionValue(name,value){
	$.get('SetSessionValue'+ntdExt,name+'='+value+'&_ajax_=1',function(data){xmlProcess(data);});
}

function TabChanged(url,value){
	$.get(url+ntdExt,'_tab_='+value+'&_ajax_=1',function(data){xmlProcess(data);});
}

function aGet(url,parms){
	$.get(url+ntdExt,parms+'&_ajax_=1&_cb_='+url,function(data){xmlProcess(data);ntWidth();});
}

function GetTab(name){
	$.get(name+ntdExt,'_ajax_=1',function(data){xmlProcess(data);});
}

function xmlProcess(data,processString){
	if ((typeof(data) == 'string') && (processString != true)) {
		$('html').trigger("ajaxComplete");
		return;
	}
	$('response',data).each(function(i){
		var t = $("response",data).get(i); // returns Element object
		var e = $(t).attr("type");
		if (window.ActiveXObject) {  //for IE
			var s = t.xml;           // IE 9 doesn't get this
			if (s == undefined){
						var s = (new XMLSerializer()).serializeToString(t); // but IE9 can do this, which IE7/8 can't
			}
		} else { // code for Mozilla, Firefox, Opera, etc.
			var s = (new XMLSerializer()).serializeToString(t);
		}
		if (s){
			s = s.substring(s.indexOf('>')+1,s.lastIndexOf('<'));
			if (e=='element'){
				d = $(t).attr("id");
				$("#"+d).replaceWith(s);
				try{$("#"+d).page().removeClass("ui-page").css('border',0);} catch(e){};
			} else if (e=='script'){
				s = s.replace(/&quot;/g,'"');
				s = s.replace(/&amp;/g,"&");
				s = s.replace(/&lt;/g,"<");
				s = s.replace(/&gt;/g,">");
				try{
				eval(s);
				} catch (e){
					try{
					} catch (e){}
				}
			}
		}
	});
	afterSv();
	if (ntMultiTab){
		initTabIDButtons();
	}
    gradient();
    resetCountDown();
}

// SetServer
function sv(id,name,ev,val,par,sil){
	hadfocus = id;
	if(par==undefined){
		$.get(name+ntdExt,{_event_: ev,value: val,_ajax_:1, _rnd_: Math.random()},function(data){xmlProcess(data);});
	}else{
		var parms='';
		for(var d = 2; d < arguments.length; d++){
			parms += arguments[d] + '&';
		}
		parms += '_ajax_=1&_rnd_=' + Math.random();
		$.get(name+ntdExt,parms,function(data){xmlProcess(data);});
	}
}

//Set timer
function SetTimer(name,t,par,sil){
	if(par==undefined)  {par='fred=1'};
	if(sil==undefined)  {sil='fred=2'};
	setTimeout("sv('','"+name+"','','','"+par+"','"+sil+"');",t);
};

// SelectDate and ResetAfterDate called by Date Lookup button
var cr1;
var cs;
var ct;
var cb1;
var cb2;
// SelectDate
function sd(f,e,p,r,b1,b2){
 ct = document.forms[f].elements[e];
 switch (p){
 case "@D6":
 case "@D06":
  var c = new calendar6(ct);
  break;
 case "@D2":
 case "@D02":
  var c = new calendar2(ct);
  break;
 }
 c.popup();
 if (arguments.length == 4){
  cr1 = r;
  cs = 1;
 }
 if (arguments.length == 6){
  cr1 = r;
  cs = 2;
  cb1 = b1;
  cb2 = b2;
 }
}
// ResetAfterDate
// removed in 7.24 - I think it's no longer used here - it's moved into nt-browse
//function rad(){
//	if (cs==1){
//		sv('',cr1,1,ct.value);
//		cs = 0;
//	}
//	if (cs==2){
//		sv('',cr1,cb1,cb2,'Value='+ct.value);
//		cs = 0;
//	}
//}

// jQuery Default Settings
jQuery.datepicker.setDefaults({
   closeText: 'Cancel',
   dateFormat: 'm/dd/yy',
   showButtonPanel: true,
   showOn: 'nothing',
   buttonImageOnly: true,
   buttonImage: '/styles/images/calendar.gif',
   buttonText: 'Calendar',
   constrainInput: false
});

// html5 helper-functions for browsers that don't yet support html5.
// Modernizr is used as a detector so if browser has native support these functions do nothing.
// ---------------------------------------------
function applyPlaceHolderElement(e){
 var t = e.attr('placeholder');
 var f = e.parents('form:first');
 if (e.val() === ''){
  e.val(t);
  e.css('color', '#888');
 }
 e.bind('focus.placeholder', function(event) {
  if (e.val() === t){
   e.val('');
  }
  e.css('color', '');
 });
 e.bind('blur.placeholder', function(event) {
  if (e.val() === ''){
         e.val(t);
   e.css('color', '#888');
  }
 });
 f.bind("submit.placeholder", function(event) {
  if (e.val() === t){
   e.val("");
  }
 });
};

// ---------------------------------------------
// Jan 2010 - Webkit support placeholder on a <input> but none yet on <textarea>
function applyPlaceHolder(){
	$('[placeholder]').each(function(i) {
		var e = $(this);
		if (!Modernizr.input.placeholder && e.type === 'INPUT'){
			// do nothing
		} else {
			if ($(e).is(":focus")) {
				// do nothing
			} else {
				applyPlaceHolderElement(e);
			}
		};
	});
};
// ---------------------------------------------
function removePlaceHolder(){
	$('[placeholder]').each(function(i) {
		var e = $(this);
		if (e.val() === e.attr('placeholder')){
			e.val("");
		}
	});
};
// ---------------------------------------------
function applyHTML5(){
	applyPlaceHolder();
}
// ---------------------------------------------
function bubbleStyle(div,attr,col){
    if ((attr=='background-color') && (col != 'transparent')){
		$("#"+div).parent().css('background-color',col);
        $("#"+div).css('background-color','transparent');
        $("#"+div).parent('[class~="nt-grad"]').each(function(){
			if (Modernizr.cssgradients ==  false){
				if (window.ActiveXObject) {  //for IE
					var ua = navigator.userAgent;
					var re  = new RegExp("MSIE ([0-8]{1,}[\.0-8]{0,})");
					if (re.exec(ua) != null){
						$("#"+div).parent().each(function(){
							this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
						});
					}
				}
			} else {

				$(this).css('background','linear-gradient(to top, #FFFFFF 0%, '+col+' 75%)');
				//$("#"+div).parent().css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))');
				//if ($("#"+div).parent().css('background') == ''){
				//	$("#"+div).parent().css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
				//}


			}
		});
    }
}

function gradient(){
	$('.nt-grad').each(function(){
		var col = $(this).css('background-color');
		if ((col != 'transparent') && (col != 'rgba(0, 0, 0, 0)')){
			if (Modernizr.cssgradients ==  false){
				if (window.ActiveXObject) {  //for IE
					var ua = navigator.userAgent;
					var re  = new RegExp("MSIE ([0-8]{1,}[\.0-8]{0,})");
					if (re.exec(ua) != null){
						this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
					}
				}
			} else {
				$(this).css('background','linear-gradient(to top, #FFFFFF 0%, '+col+' 75%)');			
				//$(this).css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))');
				//if ($(this).css('background') == ''){
				//	$(this).css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
				//}
			}
        }
	});
}

// ---------------------------------------------
function browseCssSupport(){
// $('body').prepend('<div id="_ntbc_" class="nt-browse-colors"></div>');
}

// ---------------------------------------------
jQuery(document).ready( function(){jQuery('.rounded').corners();});

// ---------------------------------------------
// run html5 support scripts when page opens
jQuery(document).bind('ready', function(event) {
	applyHTML5();
	gradient();
    browseCssSupport();
});
// ---------------------------------------------
// IE checkbox / radio fix for IE <= 8
// http://norman.walsh.name/2009/03/24/jQueryIE
$(function () {
	if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
        $('input:radio, input:checkbox').bind('click.iefix',function () {
            this.blur();
            this.focus();
        });
    }
});


// ---------------------------------------------
//  Extension of jQueryUi dialog to add a call to SetAccess
// ---------------------------------------------
(function(jQuery){
    var _init = jQuery.ui.dialog.prototype._init;

    //Custom Dialog Init
    jQuery.ui.dialog.prototype._init = function() {
        _init.apply(this, arguments);
        var _this=this;
    if ((this.options.addsec != '') && (this.options.addsec != undefined)){
            tb = this.uiDialogTitlebar;
            tb.append('<a href="#" id="dialog-access" class="dialog-access ui-dialog-titlebar-access ui-corner-all"><span class="ui-icon ui-icon-key"></span></a>');
            //Secwin Button
            jQuery('.dialog-access', tb).hover(function(){
                jQuery(this).addClass('ui-state-hover');
            }, function(){
                jQuery(this).removeClass('ui-state-hover');
            }).click(function(){
                ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + _this.options.addsec);
                return false;
            });
        }
    };

})(jQuery);


function swpf(id,addsec){
	$('#form-access-'+id).prepend('<a href="#" id="a-form-access-'+id+'" class="nt-form-page-access ui-widget-header ui-corner-all"><span class="ui-icon ui-icon-key"></span></a>');
	$('#a-form-access-'+id).hover(function(){
		$(this).addClass('ui-state-hover');
	}, function(){
		$(this).removeClass('ui-state-hover');
	}).click(function(){
		ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + addsec);
		return false;
	});
}

function primeLocation(pLat,pLong,pAlt,pAcc,pAltAcc,pHeading,pSpeed,pDiv){
	if (pDiv){
		$(pDiv).html('Getting position')
	}

	var watchId = navigator.geolocation.watchPosition(
		function(pos){ // location found
			navigator.geolocation.clearWatch(watchId);
			$(pLat).val(pos.coords.latitude);
			$(pLong).val(pos.coords.longitude);
			$(pAlt).val(pos.coords.altitude);
			$(pAcc).val(pos.coords.accuracy);
			$(pAltAcc).val(pos.coords.altitudeAccuracy);
			$(pHeading).val(pos.coords.heading);
			$(pSpeed).val(pos.coords.speed);
			if (pDiv){
				$(pDiv).html('Position:' + pos.coords.latitude.toString().substring(0,7) +',' + pos.coords.longitude.toString().substring(0,7))
			}
			
		},
		function(err){ // location not found
			switch(err.code){
				case err.PERMISSION_DENIED: 
					//debug('Device Location: Permission Denied')
					$(pDiv).html('Location: Permission Denied')
					break;
				
				case err.POSITION_UNAVAILABLE: 
					//debug('Device Location: Position Unavailable')
					$(pDiv).html('Location: Permission Unavailable')
					break;
					
				case err.TIMEOUT: 
					//debug('Device Location: Timeout')
					$(pDiv).html('Location: Permission Timeout')
					break;
					
				default: 
					//debug('Device Location: Unknown Error: ' + err.code)
					$(pDiv).html('Location: Unknown Error: ' + err.code)
				break;
			}
		},
		{ enableHighAccuracy: false, timeout: 30000,maximumAge: 300000 }		
		);


	navigator.geolocation.getCurrentPosition(
		function(pos){ // location found
			//debug('location found ' + pos.coords.latitude +  ',' + pos.coords.longitude + ' pDiv=' + pDiv)
			$(pLat).val(pos.coords.latitude);
			$(pLong).val(pos.coords.longitude);
			$(pAlt).val(pos.coords.altitude);
			$(pAcc).val(pos.coords.accuracy);
			$(pAltAcc).val(pos.coords.altitudeAccuracy);
			$(pHeading).val(pos.coords.heading);
			$(pSpeed).val(pos.coords.speed);
			if (pDiv){
				$(pDiv).html('Position:' + pos.coords.latitude.toString().substring(0,7) +',' + pos.coords.longitude.toString().substring(0,7))
			}
		},
		function(err){ // location not found
			switch(err.code){
				case err.PERMISSION_DENIED: 
					//debug('Device Location: Permission Denied')
					$(pDiv).html('Location: Permission Denied')
					break;
				
				case err.POSITION_UNAVAILABLE: 
					//debug('Device Location: Position Unavailable')
					$(pDiv).html('Location: Position Unavailable')
					break;
					
				case err.TIMEOUT: 
					//debug('Device Location: Timeout')
					$(pDiv).html('Location: Timeout')
					break;
					
				default: 
					//debug('Device Location: Unknown Error: ' + err.code)
					$(pDiv).html('Location: Unknown Error: ' + err.code)
				break;
			}

		},
		{ enableHighAccuracy: false, timeout: 30000,maximumAge: 300000 }		
		);
}

function getLocation(){
	navigator.geolocation.getCurrentPosition(sendLocation,noSendLocation);
}

function sendLocation(pos){
	$.get('SetSessionValue'+ntdExt,'_Latitude_=' + pos.coords.latitude +
                               '&_Longitude_=' + pos.coords.longitude +
                               '&_Altitude_=' + pos.coords.altitude +
                               '&_Accuracy_=' + pos.coords.accuracy +
                               '&_AltitudeAccuracy_=' + pos.coords.altitudeAccuracy +
                               '&_Heading_=' + pos.coords.heading +
                               '&_Speed_=' + pos.coords.speed +
                               '&_LocationUnixTime_=' + parseInt(pos.timestamp/1000) +
                               '&_LocationDate_=' + parseInt(pos.timestamp / 86400000 + 61730) +
                               '&_LocationTime_=' + parseInt((pos.timestamp % 86400000) / 10) +
                               '&_LocationError_=' +
                               '&_ajax_=1'
         ,function(data){xmlProcess(data);});
}

function noSendLocation(err){
	switch(err.code){
		case err.PERMISSION_DENIED: 
			SetSessionValue('_LocationError_',err.code + '_permission_denied');
			debug('Location: Permission Denied')
			break;
		
		case err.POSITION_UNAVAILABLE: 
			SetSessionValue('_LocationError_',err.code + '_position_unavailable');
			debug('Location: Position Unavailable')
			break;
			
		case err.TIMEOUT: 
			SetSessionValue('_LocationError_',err.code + '_timeout');
			debug('Location: Timeout')
			break;
			
		default: 
			SetSessionValue('_LocationError_',err.code + '_unknown');
			debug('Location: Unknown Error: ' + err.code)
			break;
	}
};

function ntPlay(wav){
	var audio = new Audio(wav);
	audio.play();
};

function ntWidth(){
	$('#body_div').css('min-width',$('#contentbody_div').outerWidth(true) + $('.nt-menuleft:first').outerWidth(true) +20);
}

function consoleLog(s){
  //$('#consolelog').append(s + '<br/>')
}

function today(pic){
	var p=0;
	var td = new Date(); // primed with current date and time
	return formatDate(td,pic);
}
function formatDate(td,pic){
	var zero=false;

	var dd = td.getDate();
	var mm = td.getMonth()+1; //January is 0!
	var yyyy = td.getFullYear();
	if (!pic){
		p = 1;
	} else { // default to mm/dd/yyyy
		if (pic.charAt(0) == '@'){
			pic = pic.substring(1) // remove leading @
		}
		if (pic.charAt(0) == 'D' || pic.charAt(0) == 'd'){
			pic = pic.substring(1) // remove leading D or d
		}
		if (pic.charAt(0) == '0'){
			zero = true;
		}
		p = parseInt(pic);
		if ( p < 1){ p = 1};
	}	
	switch(p){
	case 1: // mm/dd/yyyy
	case 2: 
		if (zero){
			if(mm<10) { mm='0'+mm} 			
		}

		if(dd<10) {	dd='0'+dd} 
		td = mm+'/'+dd+'/'+yyyy;
		break;
	case 3: 
		break;
	case 4: 
		break;
	case 5: 
	case 6: 
		if (zero){
			if(dd<10) {	dd='0'+dd} 
		}
		if(mm<10) { mm='0'+mm} 			
		td = dd+'/'+mm+'/'+yyyy;
		break;
	case 7: 
		break;
	case 8: 
		break;
	case 9: 
	case 10: 
		if(dd<10) {	dd='0'+dd} 
		if(mm<10) { mm='0'+mm} 			
		td = yyyy+'/'+mm+'/'+dd;	
		break;
	case 11: 
		break;
	case 12: 
		break;
	case 13: 
		break;
	case 14: 
		break;
	case 15: 
		break;
	case 16: 
		break;
	default:
		if(dd<10) {	dd='0'+dd} 
		if(mm<10) { mm='0'+mm} 
		td = mm+'/'+dd+'/'+yyyy;	
		break;
	}	
	return td;
}
function clock(pic){
	var td = new Date();
	var hh = td.getHours(); // => 9
	var mm = td.getMinutes(); // =>  30
	var ss = td.getSeconds(); // => 51
	if(ss<10) {	ss='0'+ss} 
	if(mm<10) { mm='0'+mm} 
	td = hh+':'+mm+':'+ss;	
	return td;
	
}
function GetUserTimeOffset(){
	date = new Date();
	SetSessionValue('_UserTimeOffset_',date.getTimezoneOffset()) 
};

function debug(text){
	$("#debug").append(text + '<br/>') ;
	console.log(text);
}

function getUTCTime(){
 var t = new Date().getTime();
 return t;
}
function onlyDigits(text){
	if(text){
		text.replace(/[^0-9]/g, '');
	}
	return text;	
}
;
///////////////////////////////////////////////////////
//
//   jQuery Plugin for NetTalk Browse
//   Part of NetTalk by CapeSoft
//   (c) 2018
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntbrowse", {
        options: {
			id: '',               // contains div name (minus the _div part)
			tableId: '',			
			mobile:0,
			randomid: '',
			procedure: '',            // server procedure
			title: '',            // title for dialog
			parent: '',           // parent procedure which is including this browse
			parentrid: '',        // rid of parent procedure if it is a browse
			form: '',             // url of the form procedure
			formInsert: '',
			formCopy: '',
			formChange: '',
			formView: '',
			formDelete: '',
			formpopup: 1,         // is the form procedure opened as a popup?
			popup: 0,             // is the browse on a popup window
			bgOne:'nt-browse-gb1',                  // first color used in greeen-barring
			bgTwo:'nt-browse-gb2',                  // second color used in green-barring
			bgOver:'nt-browse-mouseover',                   // color for row currently under mouse
			bgSelect:'nt-browse-selected',                  // highlight color - shows selected record
			rowsHigh:1,
			column:0,
			highlightSelected:1,
			greenbar:1,
			mouseover:1,
			rowSelected:1,
			resizable:0,
			value: '',
			selectAction: '',
			cancelAction: '',
			closeAction: '',
			lookupField: '',
			confirmDelete:1,
			confirmDeleteMessage:'Are you sure you want to delete this record?',
			deleteText:'Delete',
			cancelText:'No',
			confirmText:'Confirm',				
			expand: 'circle-arrow-s',
			contract: 'circle-arrow-n',
			addsec:'',    				// secwin access rights procedure name
			urlExt:'',
			json:0,
			localStorage:0,
			timer:0,
			timerRefresh:'',
			rubberband:0,
			viewOnly:0
		},
		state: {
			exportProgress:'',
			exportButton:'',
			rubberband:0,
			rubberStartCell:0,
			rubberStartX:0,
			rubberStartY:0,
			rubberEndX:0,
			rubberEndY:0,
			blurring:0
		},
		locVal:'',

		//------------------------------------------------------
        _create: function() {
			var _this=this;
			this.options.divId = '#' + this.options.id + '_div';
			$(this.options.divId).addClass("exists");
			if (this.options.urlExt==''){try{this.options.urlExt=ntdExt} catch(e){};}
			this.ready();			
			if (this.options.timer >0){
				this.timerStart(this.options.timer);
			}
			if (this.options.rubberband){
				$(this.options.divId).append('<div id="' + this.options.id + '_rubberband" class="nt-browse-rubberband"></div>')
				$('#' + this.options.id + '_rubberband').hide();
			}	
        },

		//------------------------------------------------------
        _init: function() {
        },

		//------------------------------------------------------
		ready: function(selectedRowId) {
			this._prepColumns();
			this._makeResizable();
			this._bindEvents();
			this.refresh(selectedRowId);
			if (this.options.popup==1){
				try{
					$("#popup_" + this.options.procedure + "_div").dialog("option","title",this.options.title);
				} catch (e) {};	
			}					
        },

		//------------------------------------------------------
        destroy: function() {
			$.Widget.prototype.destroy.apply( this, arguments );
        },

		//------------------------------------------------------
		// called on window unload event
        destructor: function() {
			var parms = '_rid_=' + this.options.randomid + '&_event_=clearbrowse';
			return this;
        },

		//------------------------------------------------------
        _bindEvents : function() {
			var _this = this;
			$(this.element).off('focus.bt','[data-do="lo"]').on('focus.bt','[data-do="lo"]',function(e){_this.locateFocus(this);});
			$(this.element).off('blur.bt','[data-do="lo"]').on('blur.bt','[data-do="lo"]',function(e){_this.locateBlur(this);});
			$(this.element).off('asifBlur.bt','[data-do="lo"]').on('asifBlur.bt','[data-do="lo"]',function(e){_this.locateAsifBlur(this,e);});
			$(this.element).off('change.bt','[data-do="lo"]').on('change.bt','[data-do="lo"]',function(e){_this.locate(this,e);});
			$(this.element).off('input.bt','[data-do="lo"]').on('input.bt','[data-do="lo"]',function(e){_this.locate(this,e);});
			$(this.element).off('keyup.bt','[data-do="lo"]').on('keyup.bt','[data-do="lo"]',function(e){_this.KeyPressLoc(this,e);}); // only for IE8/IE9
			$(this.element).off('valuechanged.bt','[data-do="lo"]').on('valuechanged.bt','[data-do="lo"]',function(e){_this.locateChanged(this);});
			$(this.element).off('change.bt','[data-do="eip"]').on('change.bt','[data-do="eip"]',function(e){_this.eip(this);});
			$(this.element).off('click.bt','[data-do="cv"]').on('click.bt','[data-do="cv"]',function(e){_this.toggleRowStatus(this);});
			$(this.element).off('click.bt','[data-do="bserver"]').on('click.bt','[data-do="bserver"]',function(e){_this.bbutton(this);});
			$(this.element).off('click.bt','[data-do="sh"]').on('click.bt','[data-do="sh"]',function(ev){_this.sort(this,ev);});
			$(this.element).off('click.bt','[data-do="clo"]').on('click.bt','[data-do="clo"]',function(e){_this.clearLocator();});
			$(this.element).off('click.bt','[data-do="insert"]').on('click.bt','[data-do="insert"]',function(e){_this.edit(this,1,'insert');});
			$(this.element).off('click.bt','[data-do="copy"]').on('click.bt','[data-do="copy"]',function(e){_this.edit(this,4,'copy');});
			$(this.element).off('click.bt','[data-do="change"]').on('click.bt','[data-do="change"]',function(e){_this.edit(this,2,'change');});
			$(this.element).off('click.bt','[data-do="view"]').on('click.bt','[data-do="view"]',function(e){_this.edit(this,5,'view');});
			$(this.element).off('click.bt','[data-do="deleteb"]').on('click.bt','[data-do="deleteb"]',function(e){_this.deleteb(this);});
			$(this.element).off('click.bt','[data-do="browsecancel"]').on('click.bt','[data-do="browsecancel"]',function(e){_this.cancel();});
			$(this.element).off('click.bt','[data-do="close"]').on('click.bt','[data-do="close"]',function(e){_this.close();});
			$(this.element).off('click.bt','[data-do="select"]').on('click.bt','[data-do="select"]',function(e){_this.select(this);});
			$(this.element).off('click.bt','[data-do="first"]').on('click.bt','[data-do="first"]',function(e){_this.nav('','first');});
			$(this.element).off('click.bt','[data-do="previous"]').on('click.bt','[data-do="previous"]',function(e){_this.nav('','previous');});
			$(this.element).off('click.bt','[data-do="next"]').on('click.bt','[data-do="next"]',function(e){_this.nav('','next');});
			$(this.element).off('click.bt','[data-do="last"]').on('click.bt','[data-do="last"]',function(e){_this.nav('','last');});
			$(this.element).off('click.bt','[data-do="export"]').on('click.bt','[data-do="export"]',function(e){_this.exportTo('excel',this);});
			if (this.options.rubberband){
				$(this.element).off('mousedown.tbl','[data-elem="browse-table"]').on('mousedown.tbl','[data-elem="browse-table"]',function(e){_this.mouseDownTable(event);});
				$(this.element).off('mousemove.tbl','[data-elem="browse-table"]').on('mousemove.tbl','[data-elem="browse-table"]',function(e){_this.mouseMoveTable(event);});			
				$(this.element).off('mouseup.tbl','[data-elem="browse-table"]').on('mouseup.tbl','[data-elem="browse-table"]',function(e){_this.mouseUpTable(event);});
				$(this.element).off('mousedown.cll','[data-elem="browse-cell"]').on('mousedown.cll','[data-elem="browse-cell"]',function(e){_this.mouseDownCell(event,this);});
				$(this.element).off('mouseup.cll','[data-elem="browse-cell"]').on('mouseup.cll','[data-elem="browse-cell"]',function(e){_this.mouseUpCell(event,this);});
				$(this.element).off('mousemove.rbr','#' + this.options.id + '_rubberband').on('mousemove.rbr','#' + this.options.id + '_rubberband',function(e){_this.mouseMoveTable(event);});			
			}
			return this;
        },

		//------------------------------------------------------
        refresh : function(selectedRowId) {
			this.setvalue(selectedRowId);
			this.options.table=document.getElementById(this.options.tableId);
			if (this.options.value){
				this.options.rowSelected = $('[data-nt-id="' + this.options.value + '"]').closest('[data-elem="browse-row"]').prevAll().length;
				this.options.rowSelected = parseInt(this.options.rowSelected/this.options.rowsHigh) * this.options.rowsHigh;
			} else {
				this.options.rowSelected = -1
			}	
		
			this._applyGreenBar();
			this._preContractVertically();
			
			var _this = this;			
			if (this.options.table){
				$('#' + this.options.tableId).find('[data-elem="browse-row"]')
					.off('mouseover.bt mouseout.bt click.bt dblclick.bt')
					.on('mouseover.bt',function(ev){_this._onMouseIn(this,ev);})
					.on('mouseout.bt',function(ev){_this._onMouseOut(this,ev);})
					.on('dblclick.bt',function(ev){_this._onDoubleClick(this,ev);})
					.on('click.bt',function(ev){_this.clickRow(this,ev);});
				$('#' + this.options.tableId + ' input')
					.off('keydown.bt focus.bt')
					.on('keydown.bt',function(e){_this._keydown(this,e);})
					.on('focus.bt',function(e){_this._setColumn(this,e);});
				
				$('#locator1' + _this.options.id + ',' + '#locator2' + _this.options.id)
					.off('keypress.bt')
					.off('keydown.bt')
					.off('keyup.bt')
					//.on('keypress.bt',function(e){return _this._keyPressLoc(this,e);})
					//.on('keyup.bt',function(e){return _this._keyUpLoc(this,e);})
					.on('keydown.bt',function(e){return _this._keyDownPaging(this,e);});
			}	
			return this;
        },

		//------------------------------------------------------
        activeTab: function( newValue ) {
			if ( newValue === undefined ) {
					return this.options.activeTab;
			}
			this._setOption( "activeTab", newValue );
			return this;
        },

		//------------------------------------------------------
        _setOption: function( opt, value ) {
			switch (opt){
			case "bgOver":
					this.options.bgOver = value;
					break;
			case "bgSelect":
					this.options.bgSelect = value;
					break;
			case "bgOne":
					this.options.bgOne = value;
					break;
			case "bgTwo":
					this.options.bgTwo = value;
					break;
			}
			$.Widget.prototype._setOption.apply( this, arguments );
        },

		//------------------------------------------------------
		colorBlock : function(block,what) {  // sets the color of a multi-row block.
			if ((this.options.greenbar == 0) && (this.options.mouseover==0) && (this.options.highlightSelected==0)){
				return 0;
			}

			var _this=this;
			var col=this.options.bgOne;
			var i = parseInt(block*this.options.rowsHigh);
			if (i > $('#' + this.options.tableId).find('[data-elem="browse-body"]').children().length){
				return 1;
			}
			if (this.options.mouseover==1 && what==1){
					col=this.options.bgOver;
			} else if(this.options.highlightSelected==1 && this.options.rowSelected==i){
					col=this.options.bgSelect;
			} else if (this.options.greenbar==1){
					col=(block%2==0) ?  this.options.bgOne :  this.options.bgTwo;
			}
			$('#' + this.options.tableId).find('[data-elem="browse-row"]').
			slice(i,i+_this.options.rowsHigh).each(function(){
					$(this).removeClass(_this.options.bgOne + ' ' + _this.options.bgTwo + ' ' + _this.options.bgOver + ' ' + _this.options.bgSelect).
					addClass(col);
			});
			return 0;
		},

		//------------------------------------------------------
		_colorRow : function(row,what) {  // draws a whole block, based on a row index
			this.colorBlock(parseInt(row / this.options.rowsHigh),what);
		},

		//------------------------------------------------------
		_onMouseIn : function(row,ev) {
			if ($(ev.currentTarget).parent().is("tbody")) {
				this._colorRow(row.sectionRowIndex,1); // row selection index is base 0
			} else {
				var i =  $(row).index()
				this._colorRow(i,1); // 1 = mouse in
			}
			ev.stopPropagation()
			return this;
		},

		//------------------------------------------------------
		_onMouseOut : function(row,ev) {
			if ($(ev.currentTarget).parent().is("tbody")) {
				this._colorRow(row.sectionRowIndex);
			} else {
				var i =  $(row).index()
				this._colorRow(i,0); // 0 = natural state
			}
			ev.stopPropagation()
			return this;
		},

		//------------------------------------------------------
		_onDoubleClick : function(elem,ev) {
		var recordId = $(elem).closest('[data-nt-id]').attr('data-nt-id');
		var dataDo = $(elem).closest('[data-do]').attr('data-do');
		if ((recordId) && (dataDo)){
			switch (dataDo){
			case "ds":
				this.select(this);
				break
			case "dc":
				if (this.options.viewOnly){
					this.edit(this,5,'view');  
				} else {
					this.edit(this,2,'change');  
				}
				break
			case "dv":
				this.edit(this,5,'view');  
				break
			}
		}
		return this;
		},
		//------------------------------------------------------
		clickRow : function(row,ev) {
			var cell = $(ev.target).get(0); // This is the element clicked on
			var recordId = $(cell).closest('[data-nt-id]').attr('data-nt-id');
			
			if ($(cell).attr('data-elem') != 'browse-cell'){		// anything except something inside the cell.						
				cell = $(cell).closest('[data-elem="browse-cell"]')
			}
			var sri = $(row).index()
			var cn = $(cell).index() + 1; 			// column number // base 1					

			var i = this.options.rowSelected; // this.rowSelected holds the index of the first row in the selcted block.// row selected is base 0
			this.options.rowSelected = parseInt(sri/this.options.rowsHigh) * this.options.rowsHigh; 
			this._colorRow(i);
			this._colorRow(sri);
			this.setvalue(recordId);
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("clickRow",row,ev);
			} else {
				this.server('_event_=rowclicked','_bidv_='+recordId + '&_column_=' + cn);
			}	
			this.setvalue(recordId);
			if($(row).attr('data-do') == "ss"){
				this.select();
			} else if($(row).attr('data-do') == "sc"){
				this.edit(this,2,'change');
			}	
			return this;
		},

		//------------------------------------------------------
		_applyGreenBar : function() {
			if (this.options.table == null){
				return;
			}
			if (!$('#' + this.options.tableId).find('[data-elem="browse-body"]')){
				return;
			}	
			if ((this.options.greenbar == 0) && (this.options.highlightSelected == 0) && (this.options.mouseover == 0)){
				return;
			}
			var b = 0;
			while(this.colorBlock(b) == 0){
				b++;
			}	
			return this;
		},

		//------------------------------------------------------
		_makeResizable : function() {
			if(this.options.resizable == 1){
				var _this = this;
				$('#' + _this.options.id.toLowerCase() + '_table_resize_div')
					.resizable({minwidth: _this.options.minwidth,minheight: _this.options.minheight,stop: function(event,ui){_this.resized();}});
			}
			return this;
		},

		//------------------------------------------------------
		resized : function() {
			this.server('_event_=resized&_width_=' + $(id).width() + '&_height_=' + $('#'+this.options.id.toLowerCase()+'_table_div').height());
			return this;
		},

		//------------------------------------------------------
		_restoreFocus : function() {
			if (this.options.column != 0) {
				if (this.options.table.nodeName=='TABLE'){
					$('#' + this.options.tableId + ' tbody > tr:first').children('td:eq('+this.options.column+')').find(':input:first').focus();
				}	
			}
			return this;
		},

		//------------------------------------------------------
		_setColumn : function(inp,e) {
			this.options.column = $(inp).closest('[data-elem="browse-cell"]').prevAll().length;
			return this;
		},

		//------------------------------------------------------
		_keyDownPaging : function(inp,e) {    // handle paging keys in EIP and locator fields
			if ((e.which == 191) && (e.shiftKey == true)){ // 191=?
				e.which = ntLookupKey;
			}

			switch(e.which){
				case 13: {
					$(inp).change();
					e.preventDefault();
					return false;
				}

				case $.ui.keyCode.PAGE_UP: {
					this.nav(inp.id,'previous');
					return false;
				}

				case $.ui.keyCode.PAGE_DOWN: {
					this.nav(inp.id,'next');
					return false;
				}

				case $.ui.keyCode.HOME: {
					if (e.ctrlKey==true){
						this.nav(inp.id,'first');
						return false;
					}
				}

				case $.ui.keyCode.END: {
					if (e.ctrlKey==true){
						this.nav(inp.id,'last');
						return false;
					}
				}

				//case 191:  // ?
				case ntLookupKey: {// F2 by default
					$("#"+inp.id+".hasDatepicker").each(
						function(i,v){
							e.preventDefault();
							$(inp).datepicker("show");
							return false;
						}
					);


					$("#"+inp.id).next(':button').each(
						function(i,v){
							$(this).click();
							return false;
						}
					)
				}
				return true;
			}
			return this;
		},

		//------------------------------------------------------
		// IE 8 does not support INPUT event. IE 9 handles INPUT event in a buggy way. // http://help.dottoro.com/ljhxklln.php
		// This method handles some of those cases
		KeyPressLoc : function(elem,ev) {      // Handle enter key in locator fields
			if (navigator.userAgent.indexOf('MSIE 8') > -1){
				$(elem).trigger('input');
			} else if (navigator.userAgent.indexOf('MSIE 9') > -1){
				switch(ev.which){
					case 8: // backspace
					case 46: // del key
					case 86: // ctrl-v
					case 88: // ctrl-x
						$(elem).trigger('input');
				}
			}
		},
		//------------------------------------------------------
		_keydown : function(inp,e) {  // bind up and down arrow keys in EIP in browse
			switch(e.which){
				case $.ui.keyCode.DOWN: {
					this._setColumn(inp,e);
					$(inp).closest('[data-elem="browse-row"]').nextAll(':eq(0)').children('[data-elem="browse-cell"]:eq('+this.options.column+')').find(':input:first').focus();
					e.which = 0;
					return false;
				}
				case $.ui.keyCode.UP: {
					this._setColumn(inp,e);
					$(inp).closest('[data-elem="browse-row"]').prevAll(':eq(0)').children('[data-elem="browse-cell"]:eq('+this.options.column+')').find(':input:first').focus();
					e.which = 0;
					return false;
				}
			}
			return this._keyDownPaging(inp,e);
		},

		//------------------------------------------------------
		_preContractVertically : function() {
			var _this=this;
			$(this.options.divId).find('[data-nt-ctd="true"]').each(function(i,elem){
				_this.setRowStatus(elem,true);
			});
			$(this.options.divId).find('[data-nt-ctd="false"]').each(function(i,elem){
				_this.setRowStatus(elem,false);
			});
			return this;
        },
		//------------------------------------------------------
		toggleRowStatus : function(elem) {
			//var l = this.options.rowsHigh-1;
			var tr = $(elem).closest('[data-elem="browse-row"]');
			if ($(elem).attr('data-nt-ctd')=='true'){
				var state=false;
			} else {
				var state=true;
			}	
			this.setRowStatus(elem,state);
			this.server('_event_=expcon','_bidv_='+ $(tr).attr('data-nt-id') +'_status_=' + state);
			
        },
		//------------------------------------------------------
		setRowStatus : function(elem,state) { // if state is true then row much be contracted (ie minimised).

			var exp = 'ui-icon-' + this.options.expand;
			var con = 'ui-icon-' + this.options.contract;
			var l = this.options.rowsHigh-1;
			if (state){ 
				$(elem).removeClass(con).addClass(exp).attr('data-nt-ctd','true').closest('[data-elem="browse-row"]').children('[data-elem="browse-cell"]').each(function(){
					$(this).attr('rowspanwas',$(this).attr('rowspan'));
					$(this).attr('rowspan',1)
				});
				$(elem).closest('[data-elem="browse-row"]').nextAll(':lt('+l+')').hide();
			} else {
				$(elem).removeClass(exp).addClass(con).attr('data-nt-ctd','false').closest('[data-elem="browse-row"]').children('[data-elem="browse-cell"]').each(function(){
					$(this).attr('rowspan',$(this).attr('rowspanwas'));
				});
				$(elem).closest('[data-elem="browse-row"]').nextAll(':lt('+l+')').show();
			}
			return this;
		},
//------------------------------------------------------
		_prepColumns : function() {
			var _this=this;
			if ((this.options.addsec != '') && (this.options.addsec != undefined)){
				var k = $('#'+_this.options.id.toLowerCase()+'_table_div').find('th:last').find('[data-key]').attr('data-key');
				if (k == undefined){
					$('#'+_this.options.id.toLowerCase()+'_table_div').find('th:last').append('<div class="nt-right" data-key="true"><a href="#" id="' + _this.options.id.toLowerCase() + '-browse-access" class="nt-browse-titlebar-access"><span class="ui-icon ui-icon-key"></span></a></div>');
					//Secwin Button
					$('#' + _this.options.id.toLowerCase() + '-browse-access').hover(function(){
						$(this).addClass('ui-state-hover');
					}, function(){
						$(this).removeClass('ui-state-hover');
					}).click(function(){
						ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + _this.options.addsec);
						return false;
					});
				}
			}
			return this;
		},

        //------------------------------------------------------
        // needs refactor
		ec : function(hcb) {          // checkbox on top of column to set checkbox in whole column.
			for(var i=0;i<this.options.table.tHead.rows[0].cells.length;i++){
				if (this.options.table.tHead.rows[0].cells[i] == hcb.parentNode){
					var c = i;
				}
			}
			this.quiet = 1;
			for(i=0;i<this.options.table.tBodies[0].rows.length;i++){
				var o = this.options.table.tBodies[0].rows[i].cells[c].firstChild;
				cb = getCheckbox(o);
				if (cb != null){
					cb.checked = hcb.checked;
					cb.onclick();
				}
			}
			this.quiet = 0;
			return this;
		},

        //------------------------------------------------------
        disableButton : function(elem){
			try{$(elem).attr("disabled","disabled").removeClass('ui-state-focus').button( "refresh" );} catch (e) {};
        },
        //------------------------------------------------------
        enableButton : function(elem){
			try{$(elem).removeAttr("disabled").removeClass('ui-state-focus').button("refresh");} catch (e) {};
        },
		
        //------------------------------------------------------		
        bbutton : function(elem){
			this.disableButton(elem);
			this.eip(elem);
        },
        //------------------------------------------------------
		eip : function(elem) {
			var n = $(elem).attr("name");
			var vl= $(elem).data('luv')
			if (vl==undefined){
				vl=FieldValue(elem);
			}
			this.server('_event_=eipaccepted&_action_=2&_eipclm_='+ n.replace(/__/g,":"),'_bidv_=' + $(elem).closest('[data-nt-id]').attr('data-nt-id'),'value='+vl);
			return this;
		},

        //------------------------------------------------------
		setvalue : function(v) {
			if (v && (v != null) && (v != '')){
				this.options.value = v;
			}
			return this;
		},
		//------------------------------------------------------
		mouseDownCell : function(event,elem){			
			this.state.rubberStartCell = elem
			this.state.rubberStartX = event.pageX
			this.state.rubberStartY = event.pageY
		},
		//------------------------------------------------------
		mouseDownTable : function(event){			
			$('#' + this.options.id + '_rubberband').show()			
			var coords = {top:0,left:0};
			coords.top = -10//$(this.state.rubberStartCell).offset().top 
			coords.left = -10 //$(this.state.rubberStartCell).offset().left 
			$('#' + this.options.id + '_rubberband').offset(coords);
			$('#' + this.options.id + '_rubberband').width(0);
			$('#' + this.options.id + '_rubberband').height(0); 
			this.state.rubberband = 1

			event.stopPropagation();
			event.preventDefault();
			event.cancelBubble=true;
			event.returnValue=false;
			return false;
		},
		//------------------------------------------------------
		mouseUpCell : function(event,elem){			
			this.state.rubberEndCell = elem
			this.state.rubberEndX = event.pageX
			this.state.rubberEndY = event.pageY
		},
		//------------------------------------------------------
		mouseUpTable : function(event){			
			this.selectRange()
			this.state.rubberband = 0
			this.unSelect();
			$('#' + this.options.id + '_rubberband').hide()
		},
		//------------------------------------------------------
		selectRange : function() {
			if ($(this.state.rubberStartCell).closest('[data-nt-id]').index() <= $(this.state.rubberEndCell).closest('[data-nt-id]').index()){
				var firstId = $(this.state.rubberStartCell).closest('[data-nt-id]').attr('data-nt-id');			
				var lastId = $(this.state.rubberEndCell).closest('[data-nt-id]').attr('data-nt-id');	
			} else {
				var firstId = $(this.state.rubberEndCell).closest('[data-nt-id]').attr('data-nt-id');			
				var lastId = $(this.state.rubberStartCell).closest('[data-nt-id]').attr('data-nt-id');	
			}			
			var thisId = '';
			var between=0;
			var idList='';
			$(this.options.divId).find('[data-nt-id]').each(function(i,elem){
				thisId = $(elem).attr('data-nt-id')
				switch(between){
				case 0:
					if ( thisId == firstId){
						between = 1 // then drop to case 1
					} else {
						break
					}	
				case 1:
					idList = idList.concat(thisId + '|')
					if (thisId == lastId){
						between = 2
					}	
					break
				}
			})
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("selectRange");
			} else {
				var fromCol = $(this.state.rubberStartCell).index() + 1
				var toCol = $(this.state.rubberEndCell).index() + 1
				if (fromCol > toCol){
				  var temp = fromCol;
				  fromCol = toCol;
				  toCol = temp;
				}
				this.server('_event_=selectRange&_fromColumn_=' + fromCol +	'&_toColumn_=' + toCol + '&_bidvList_=' + idList)
			}			
		},
		
		//------------------------------------------------------
		mouseMoveTable : function(event){	
			if (this.state.rubberband == 1){
				this.calcRubberband(event);
			}
		},
		//------------------------------------------------------
		calcRubberband : function(event){			
			var coords = {top:0,left:0,width:0,height:0};
			if (event.pageX < this.state.rubberStartX){
				coords.left = event.pageX + 6
				coords.width = $(this.state.rubberStartCell).offset().left + $(this.state.rubberStartCell).width() - coords.left
			} else {
				coords.left = $(this.state.rubberStartCell).offset().left
				coords.width = event.pageX - coords.left - 6
			}
			if (event.pageY < this.state.rubberStartY){
				coords.top = event.pageY + 6
				coords.height = $(this.state.rubberStartCell).offset().top + $(this.state.rubberStartCell).height() - coords.top
			} else {
				coords.top = $(this.state.rubberStartCell).offset().top
				coords.height = event.pageY - coords.top - 6
			}
			$('#' + this.options.id + '_rubberband').offset(coords);
			$('#' + this.options.id + '_rubberband').width(coords.width);
			$('#' + this.options.id + '_rubberband').height(coords.height);
			
		},
		//------------------------------------------------------
		unSelect : function(){			
			if (document.selection) {
				document.selection.empty()
			} else {
				window.getSelection().removeAllRanges()
			}
		},
		//------------------------------------------------------
		exportTo : function(fmt,elem){			
			$(elem).prepend('<div id="ExportProgressLLKP" class="nt-export-progress"></div>');
			this.state.exportButton = elem;
			this.state.exportProgress = $('#ExportProgressLLKP');						
			this.disableButton(this.state.exportButton);
			$(this.state.exportButton).css('opacity','1');
			this.get('_event_=export&_exportto_=' + fmt)
			this.setTimer(2000);
			return this;
		},
		//------------------------------------------------------
		exportProgress : function(p){
			if (p<100){
				$(this.state.exportProgress).css('width',p+'%');
				this.setTimer(2000);
			} else {
				$(this.state.exportProgress).css('width','0%');
				this.enableButton(this.state.exportButton);
			}
		},

		//------------------------------------------------------
		setTimer : function(t) {
			setTimeout("$('"+this.options.divId+"').ntbrowse('server','"+this.options.procedure+"','_event_=timer');",t);
			return this;	
		},
		//------------------------------------------------------
		timerStart: function(t) {
			setTimeout("$('"+this.options.divId+"').ntbrowse('server','"+this.options.procedure+"','_refresh_="+this.options.timerRefresh+"');",t);
			return this;	
        },
		//------------------------------------------------------
		timerStop: function() {
		
        },
		//------------------------------------------------------
		nav : function(f,d){
			this.fadeTable();
			if (this.options.json){
				this.serverJSON('_event_=nav&_refresh_='+d+'&focus=' + f);
			} else {
				this.server('_event_=nav&_refresh_='+d+'&focus=' + f);
			}	
			return this;
		},

        //------------------------------------------------------
		clearLocator : function(){
			$('#' + this.options.id + '_locator_a_div').find('input').val('');
			$('#' + this.options.id + '_locator_b_div').find('input').val('');
			this.fadeTable();
			this.locVal = '';
			this.server('_event_=locatorchanged&_refresh_=clearlocate')
			return this;
		},
        //------------------------------------------------------
		locate : function(elem,ev){
			if (this.locVal != $(elem).val()){
				if (ev.type=='input' || ev.type=='keypress'){
					this.locateChanged(elem);
				} else if (ev.type=='change'){
					this.goLocate(elem);
				}
			}	
			return this;	
			if ((ev.type=='input') && (this.state.blurring != true)){
				// to handle X in search field, always trigger if the locator is now blank.
				if ($(elem).val() == ''){
					this.clearLocator();
				} else {
					this.locateChanged(elem);
				}
				return this;
			}	
			this.state.blurring=false;
			if ((this.locVal != $(elem).val()) || (($(elem).attr('data-imm')!='true'))){ // tweaked for 7.31, to avoid /index.php?option=com_smf&Itemid=36&topic=5056.msg20017
				this.goLocate(elem);
			}
			return this;
		},
        //------------------------------------------------------
		// can be called from outside if the locator value has been changed.
		locateChanged : function(elem,force){
			// sync the values in both locators
			if (elem.id == 'locator1' + this.options.id){
				$('#locator2' + this.options.id).val($('#locator1' + this.options.id).val())
			} else if (elem.id == 'locator2' + this.options.id){
				$('#locator1' + this.options.id).val($('#locator2' + this.options.id).val())
			}
			// if imm then send the locator to the server
			if (($(elem).attr('data-imm')=='true') || (force)){
				this.goLocate(elem);
			}
		},
        //------------------------------------------------------
		// send the locator to the server
		goLocate : function(elem){
			this.fadeTable();
			this.locVal = $(elem).val();
			this.server('_event_=locatorchanged&_refresh_=locate',$(elem).attr("id")+'='+encodeURIComponent(this.locVal));
		},
        //------------------------------------------------------
		locateFocus : function(elem){
			if ($(elem).attr("data-noFocus") == "true"){
				$(elem).attr("data-noFocus","false");
			} else {	
				try{
					$('#osk').ntosk('getFocus',elem);
				} catch(e) {};
			}	
			try{
				$('#osk').ntosk('show');						
			} catch(e) {};	
		},
        //------------------------------------------------------
		locateBlur : function(){
			try{
				$('#osk').ntosk('startHide');
			} catch(e) {};	
			this.state.blurring=true;
		},
        //------------------------------------------------------
		locateAsifBlur : function(elem,e,i){
			if ( $(elem).val != this.locVal){
				this.locate(elem,e,i);				
			}
			try{
				$('#osk').ntosk('startHide');		
			} catch(e) {};	
		},
        //------------------------------------------------------
		sort : function(elem,ev){
			var dv = $(elem).attr('data-value')
			var dve;
			if (dv){
				dve = elem;
			} else {				
				dv = $(elem).children('a').attr('data-value');
				if (dv){
					dve = $(elem).children('a');
				}	
			}
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("clientSideSort",elem,dv,ev,dve);				
			} else {
				this.server('_event_=sortchanged&_refresh_=sort',this.options.procedure+'_sort_' + this.options.randomid + '='+dv);
			} 	
			
			return this;
		},

        //------------------------------------------------------
        disable : function(){
			var _this=this;
			$(this.options.divId).find(':button').each(function(i,e){
				if($(e).attr('disabled') != 'disabled' ){
					$(e).attr("data-wait","wait").each(function(i,e){_this.disableButton(e)});;
				}
			})
			$('[data-elem="browse-row"]').off('mouseover.bt mouseout.bt click.bt') ;
		},
		
        //------------------------------------------------------
        enable : function(){
			var _this=this;
			$(this.options.divId).find('[data-wait="wait"]').removeAttr("data-wait").each(function(i,e){_this.enableButton(e)});
			this._bindEvents();
			this.refresh();
        },
		
        //------------------------------------------------------
        hide : function(){
			$(this.options.divId).hide();
        },
        //------------------------------------------------------
        show : function(){
			$(this.options.divId).show();
        },
        //------------------------------------------------------
        hideTable : function(){
			$('#' + this.options.tableId).fadeOut(200);
			$('#' + this.options.tableId).hide();
        },
        //------------------------------------------------------
        fadeTable : function(){
			$('#' + this.options.tableId).find('input, textarea, button, select').prop("disabled", true);
			$('#' + this.options.tableId).fadeTo(200,0.5)
        },
        //------------------------------------------------------
        unhideTable : function(){
			$('#' + this.options.tableId).css({opacity:1});
			$('#' + this.options.tableId).show();
        },
        //------------------------------------------------------
        serverClearLocator : function(){
			$('#' + this.options.id + '_locator_b_div').find('input').val('');
			$('#' + this.options.id + '_locator_a_div').find('input').val('');
        },
        //------------------------------------------------------
        locatorFocus : function(){
			$('#' + this.options.id + '_locator_b_div').find('input').focus();
			$('#' + this.options.id + '_locator_a_div').find('input').focus();
        },

		//------------------------------------------------------
        hideLocator : function(){
			$('#' + this.options.id + '_locator_b_div').hide();
			$('#' + this.options.id + '_locator_a_div').hide();
        },

        //------------------------------------------------------
        unhideLocator : function(i){
			if (i & 1){
				$('#' + this.options.id + '_locator_b_div').show();
			} else {
				$('#' + this.options.id + '_locator_b_div').hide();
			}
			
			if (i & 2){
				$('#' + this.options.id + '_locator_a_div').show();
			} else {
				$('#' + this.options.id + '_locator_a_div').hide();
			}
        },

        //------------------------------------------------------
        hideSelectButton : function(i){
			if(i){
				$('#'+ this.options.id +'_div').find('[data-do="select"]').hide();
			} else {
				$('#'+ this.options.id +'_div').find('[data-do="select"]').show();
			}	
		},
        //------------------------------------------------------
        hideButton : function(b){
			$('#'+ this.options.id +'_div').find('[data-do="'+b+'"]').hide();
		},
        //------------------------------------------------------
        showButton : function(b){
			$('#'+ this.options.id +'_div').find('[data-do="'+b+'"]').show();
		},
		//------------------------------------------------------
        hideFormButtons : function(i){
			if (i==true){
				$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').hide();
				$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').hide();			
			} else {
				$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').show();
				$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').show();
			}
			$('#' + this.options.id + '_update_b_div').find('[data-do="copy"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="copy"]').hide();
			$('#' + this.options.id + '_update_b_div').find('[data-do="change"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="change"]').hide();
			$('#' + this.options.id + '_update_b_div').find('[data-do="deleteb"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="deleteb"]').hide();		
			$('#' + this.options.id + '_update_b_div').find('[data-do="view"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="view"]').hide();		
			$('#' + this.options.id + '_update_b_div').find('[data-do="export"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="export"]').hide();		
        },

        //------------------------------------------------------
        unhideFormButtons : function(){
			$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="copy"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="copy"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="change"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="change"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="deleteb"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="deleteb"]').show();			
			$('#' + this.options.id + '_update_b_div').find('[data-do="view"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="view"]').show();			
			$('#' + this.options.id + '_update_b_div').find('[data-do="export"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="export"]').show();			
        },

        //------------------------------------------------------
        hideNav : function(){
			$('#' + this.options.id + '_nav_a').hide();
			$('#' + this.options.id + '_nav_b').hide();
        },
		
        //------------------------------------------------------
        unhideNav : function(disablePrev,disableNext){
			var _this=this;
			$('#' + this.options.id + '_nav_a').show();
			$('#' + this.options.id + '_nav_b').show();
			if (disablePrev==true){
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="previous"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="previous"]').each(function(i,e){_this.disableButton(e)});
			} else if (disablePrev==false) {
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="previous"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="first"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="previous"]').each(function(i,e){_this.enableButton(e)});
			}
			if (disableNext==true){
				$('#' + this.options.id + '_nav_b').find('[data-do="last"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="next"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="last"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="next"]').each(function(i,e){_this.disableButton(e)});
			} else if (disableNext==false){
				$('#' + this.options.id + '_nav_b').find('[data-do="last"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="next"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="last"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="next"]').each(function(i,e){_this.enableButton(e)});
			}
        },
		
        //------------------------------------------------------
		edit : function(elem,action,header){    
			var actionname='';
			var actionform='';
			var actionFormOverride='';
			this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			switch(action){
			case 1: //Insert
				actionname ='insert_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-insert');
				if (!actionform){
					actionform = this.options.formInsert;
				}
				break;
			case 2: //Change
				actionname ='change_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-change');
				if (!actionform){
					actionform = this.options.formChange;
				}
				break;
			case 3: //Delete
				actionname ='change_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-delete');
				if (!actionform){
					actionform = this.options.formDelete;
				}
				break;
			case 4: //Copy
				actionname ='copy_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-copy');
				if (!actionform){
					actionform = this.options.formCopy;
				}
				break;
			case 5: //View
				actionname ='view_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-view');
				if (!actionform){
					actionform = this.options.formView;
				}
				break;
			}
			if (actionform == ''){
				actionform = this.options.form;
			}
			if (this.options.formpopup){     
				header = ''; // don't default the header when called from a browse.
				ntd.push(actionform,'',header,1,action,null,this.options.procedure,this.options.value,'_parentProc_=' + this.options.parent,null,null,null,null,null,null,this.options.divId);
			} else {
				this.gotoPage(actionform,actionname,this.options.value);
			}
			return this;
		},

        //------------------------------------------------------
		deleteb : function(elem){
			var _this=this;
			if (this.options.confirmDelete){
				$('body').append('<div id="message_confirm" title="'+_this.options.confirmText+'">' + this.options.confirmDeleteMessage + '</div>');
				$( "#message_confirm" ).dialog({
					resizable: false,
					modal: true,
					buttons: [{
						text: _this.options.deleteText,
						click : function() {    
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							_this.deletenow(elem);
						}
					}, {


						text: _this.options.cancelText,
						click: function() {
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							return _this;
						}
					}]	
				});      
			} else {
				this.deletenow(elem);
			}
		},

		//------------------------------------------------------
		deletenow : function(elem){			
			this.options.form = this.options.form.replace("?","&");
			this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("deleteb",this.options.value);				
			} else {
				this.serverPost('pressedButton=deleteb_btn','_event_=deleteb&_action_=3&_fromForm_='+ this.options.form,'_bidv_=' + this.options.value + '&_ajax_=1&_parentProc_=' +  this.options.parent + '&_parentRid_=' + this.options.parentrid);
			}	
			return this;
		},
        //------------------------------------------------------
		select : function(elem){
			if (elem){
				this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			}
			if (this.options.popup){
				$('#'+ntd.getluf()).data('luv',this.options.value);
				if (this.options.localStorage){
					$(this.options.divId).ntbrowsels("selectb",this.options.value,ntd.getluf());				
				}	
				$('#'+ntd.getluf()).change();
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else{
				this.gotoPage(this.options.selectAction,'select_btn',this.options.value,this.options.lookupField);
				return this;
			};
		},

        //------------------------------------------------------
		cancel : function(){
			if (this.options.popup){
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else {
				this.gotoPage(this.options.cancelAction,'browsecancel_btn');
			}
			return this;
		},
        //------------------------------------------------------
		close : function(){
			if (this.options.popup){
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else {
				this.gotoPage(this.options.closeAction,'close_btn');
			}
			return this;
		},
        //------------------------------------------------------
		rad : function(){     // Reset After Date
			this.eip(this.ct,this.eipclm,this.vs);
			return this;
		},

        //------------------------------------------------------
        gotoPage : function(a,n,v,l){
			$(':button').attr('disabled', 'disabled');
			$('#xdecfr').remove();
			var ht = '<form method = "POST" action="'+a+'" id="xdecfr">';
			if (n) ht = ht + '<input type="hidden" name="pressedbutton" value = "'+n+'" />';
			if (v) ht = ht + '<input type="hidden" name="_bidv_" value = "'+v+'" />';
			if (l) ht = ht + '<input type="hidden" name="lookupfield" value = "'+this.options.lookupField+'" />';
			if ($('#FormState')) ht = ht + '<input type="hidden" name="FormState" value = "'+$('#FormState').val()+'" />';
			ht = ht + '</form>';
			$(this.options.divId).append(ht)
			$('#xdecfr').submit();
			// this page terminates here
			return this;
		},

        //------------------------------------------------------
		sv : function(p0) {   // send async request to server
			var parms='';
			var _this=this;
			for(var d = 1; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}
			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_popup_=' + this.options.popup  + '&_rid_=' & this.options.randomid + '&_ajax_=1&_rnd_=' + Math.random().toString(36).substr(5);
			$.get(p0+ this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		get : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=0&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			document.location = this.options.procedure + this.options.urlExt + '?' + parms;
			return this;
		},
        //------------------------------------------------------
		server : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=1&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			$.get(this.options.procedure + this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		serverJSON : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=1&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			$.getJSON(this.options.procedure + this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		serverPost : function() {     // send async request POST to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){ // supports multiple incoming arguments.
				parms += arguments[d] + '&';
			}
			parms += 'FormState=' + $('#FormState').val() + '&'
	
			parms += '_ajax_=1&_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			$.post(this.options.procedure+ this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		onAjaxComplete : function(data) {
			xmlProcess(data);
			//this.ready();  // no need to call ready, the xmlProcess will recreate the object if needed.
			return this;
		},
        //------------------------------------------------------
		onAjaxCompleteJSON : function(data) {

			xmlProcess(data);
			//this.ready();  // no need to call ready, the xmlProcess will recreate the object if needed.
			return this;
		},
        //------------------------------------------------------
		process : function(data) {
		}
		

//------------------------------------------------------
});

$.extend( $.ui.ntbrowse, {
        version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntbrowse
///////////////////////////////////////////////////////


$(window).unload(function() {
  $(':ui-ntbrowse').ntbrowse("destructor");
});
/**********************************************************************************************************
function idbOpen        (db,oncomplete)  

-- these functions write away table.record. 
function idbWrite       (db,table,record,fromSync,oncomplete,onerror)       		[idbPut -- idbAdd]
function idbAdd         (db,table,record,fromSync,oncomplete,onerror)              	[idbOpen -- idbSync]
function idbPut         (db,table,record,fromSync,oncomplete,onnotfound,onerror)    [idbOpen -- idbSync]
function idbDelete      (db,table,guid,oncomplete,onerror)                  		[idbOpen] 
function idbMarkDelete  (db,table,guid,oncomplete,onnotfound,onerror)       		[idbOpen -- idbSync]
function idbEmpty       (db,table,oncomplete,onerror)                       		[idbOpen]

function idbGet         (db,table,guid,oncomplete,onnotfound,onerror)       		[idbOpen]  

function idbSelect      (options)											    	[idbOpen -- idbSort]
  function idbSort       (resultset,orderBy)                                		[idbSortBy]
    function idbSortBy    (orderBy)

function idbFullSync    (db,table,oncomplete,onerror)                       		[idbEmpty -- idbSync]
  function idbSync        (db,table,oncomplete,onerror)                     		[idbSummary -- idbWrite] 
    function idbSummary     (db,table,resultset,oncomplete,onerror)
	
***********************************************************************************************************/	

const recordFiltered = 2;
const outOfRange = 1;
const recordOk = 0;

//======================================================================================================================================
// these functions are generic
//======================================================================================================================================
function login(db,user,password){
	var syncPost = {user:user,
					password:password
					}
	$.ajax({
	  url: db.synchost + '/login',
	  type:"POST",
	  username:db.user,
	  password:db.password,		  
	  data:JSON.stringify(syncPost),
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
	  success: function(data){handleReply(data)}
	})		
	function handleReply(data){
		var response =  'login_response'
		db.token = data[response].token;
		//console.log('db.token=' + db.token)
		db.status = data[response].status;		
	}
}
//======================================================================================================================================
// WARNING - this operation is destructive. But useful for development, and testing purposes
function idbNuke(db){
	//idbClose(db,doNuke);	
	//function doNuke(){
		console.log('Nuking ' + db.name)
		var req = indexedDB.deleteDatabase(db.name);
		req.onsuccess = function () {
			console.log("Deleted database pending - navigate away from this site to complete purge");
		};
		req.onerror = function (event) {
			console.log("Couldn't delete database");
		};
		req.onblocked = function () {
			console.log("Couldn't delete database due to the operation being blocked. Database will be nuked as soon as it becomes unblocked. Navigate away from this site to complete purge");
		};
		return false;
	//};	
}
//======================================================================================================================================
function idbOpen(db,oncomplete){
	//console.log('idbOpen ' + db.open);
	if(db.open){
		if (oncomplete)	{oncomplete()}
		return
	}
	db.error = 0;
	//console.log('opening database ' + db.name + ' version ' + db.version);
	var request = window.indexedDB.open(db.name, db.version);
	//-------------------------------
	request.onerror = function(event) {  									// Do something with request.errorCode!
		debug('database failed to open ' + event.target.error.message + ' .. ' + event.target.error.name);
		db.errorcode = event.target.error.name;
		db.error = event.target.error.message;
		return true; 														// returning true suppresses the error bubbling up
	};
	//-------------------------------
	request.onversionchange = function(event) { 						
		//console.log('Version change when opening db')
	}
	//-------------------------------
	request.onupgradeneeded = function(event) { 							// this gets called before onSuccess
		//console.log('Upgrading Database');
		db.handle = event.target.result;
		var i=0;
		var j=0;
		for (i in db.tables){
			// create the table with primary key
			try {
				db.tables[i].objectStore = db.handle.createObjectStore(db.tables[i].name, { keyPath: db.tables[i].primarykeyfield }); 
			} catch(err) {
				db.tables[i].objectStore = event.currentTarget.transaction.objectStore(db.tables[i].name);
			};
			// create additional indexes
			for (j in db.tables[i].indexes){
				try{
				db.tables[i].objectStore.createIndex(db.tables[i].indexes[j].name, db.tables[i].indexes[j].fields, { unique: db.tables[i].indexes[j].unique }); 
				//console.log('creating index: ' + db.tables[i].indexes[j].name + ' on ' + db.tables[i].name)
				} catch(err) {};
			}
		}		
	};
	//-------------------------------
	request.onsuccess = function(event) {	// Do something with request.result!
		//console.log('database opened');
		var i=0;
		db.handle = event.target.result;
		
		db.handle.onerror = function(event) {		// Generic error handler for all errors targeted at this database's requests!
			db.errorcode = event.target.error.name;
			db.error = event.target.error.message;
			debug('Database Error ' + db.errorcode + ' .. ' + db.error);
			return true;
		};		
		db.errorcode = 0;
		db.error = "";
		db.open = true;		
		if (oncomplete)	{oncomplete()}		
	};
	//-------------------------------
};
//======================================================================================================================================
function idbClose(db,oncomplete,onerror){
	if(db.open){
		var request = db.handle.close();
		//-------------------------------
		request.onerror = function(event) {  									// Do something with request.errorCode!
			db.errorcode = event.target.error.name;
			db.error = event.target.error.message;
			if (onerror)	{onerror(event)}
			return true; 														// returning true suppresses the error bubbling up
		};

		//-------------------------------
		request.onsuccess = function(event){
			//console.log('database closed')
			db.errorcode = 0;
			db.error = "";
			db.open = false;		
			if (oncomplete)	{oncomplete()}				  
		}
	}	
}
//======================================================================================================================================
// allows a table name to be passed as a table parameter. Converts from the name to an object.
function idbCheckTable(t){
	if (t){
		if (typeof(t) == 'object'){
			return t
		} else if (database[t]){
			return database[t].table;
		}	
	}
	return null;
}
//======================================================================================================================================
function idbWrite(db,table,record,fromSync,oncomplete,onerror){
	//console.log('idbWrite')
	table = idbCheckTable(table);
	idbPut(db,table,record,fromSync,function() { 
		// on complete
		if(oncomplete){  // on put complete pass the record guid to the oncomplete function
			oncomplete(record[table.primarykeyfield])
		}	
	}, function() { 					  
		//not found
		idbAdd(db,table,record,fromSync,function(){
				// on complete
				if(oncomplete){oncomplete(record[table.primarykeyfield])} // on add complete passes the new guid to the oncomplete function
			},onerror)
	}, function(event) { 					
		// on error
		if(onerror){onerror(event)}
	})
}
//======================================================================================================================================
// small utility function to prime the primary key field with a random string value. Preserves existing value if it exists.
function idbPrimeGuid(table,record){
	table = idbCheckTable(table);
	if (!record[table.primarykeyfield]){
		record[table.primarykeyfield] = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
	}	
}
//======================================================================================================================================
// 	prime record fields before calling this function. example;	database.customer.record.firstname = "Bruce";
function idbAdd(db,table,record,fromSync,oncomplete,onerror){
	//console.log('idbAdd ' + record)
	table = idbCheckTable(table);
	idbOpen(db,doAdd);	
	function doAdd(){
		idbPrimeGuid(table,record);
		if (!fromSync){
			if(table.timestampfield){
				record[table.timestampfield] = Date.now();
			}
			if(table.servertimestampfield){
				record[table.servertimestampfield] = 0;
			}	
		}	
		var request = db.handle.transaction([table.name],"readwrite").objectStore(table.name).add(record);
		//----	// callbacks for request 
		request.onsuccess = function(event) {
			db.errorcode = 0;
			db.error = "";
			if (oncomplete)	{oncomplete()};
			if (!fromSync){
				idbSync(db,table); // syncs are done asyncronously.
			}
		}
		//----
		request.onerror = function(event){
			//console.log('add failed ' + event.target.error.message + ' .. ' + event.target.error.name);
			db.errorcode = event.target.error.name;
			db.error = event.target.error.message;
			if (onerror){onerror(event)};
			return true; 														// returning true suppresses the error bubbling up		
		}
	}
}
//======================================================================================================================================
function idbPut(db,table,record,fromSync,oncomplete,onnotfound,onerror){
	//console.log('idbPut')
	table = idbCheckTable(table);
	idbOpen(db,doPut);
	function doPut(){
		//console.log('do put on ' + table.name + ' pk=' + record[table.primarykeyfield] + ' field=' + table.primarykeyfield + ' fromSync=' + fromSync) ;
		var savRecord = record;
		var objectstore = db.handle.transaction([table.name],"readwrite").objectStore(table.name);
		var request = objectstore.get(record[table.primarykeyfield]);

		// callbacks for get request 
		request.onsuccess = function(event) {
			//console.log('get success')
			if (event.target.result){			
				if (!fromSync && table.timestampfield){
					record[table.timestampfield] = Date.now();
				}				
				var requestUpdate = objectstore.put(savRecord);
				requestUpdate.onsuccess = function(event) {
					//console.log('put was a success. fromsync = ' + fromSync);
					db.errorcode = 0;
					db.error = "";	
					record = savRecord;	
					if (oncomplete)	{oncomplete()}
					if (!fromSync){
						idbSync(db,table); // syncs are done asyncronously.
					}	
				};				
				requestUpdate.onerror = function(event) {
					if (onerror){onerror(event)};
				}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.errorcode = "RecordNotFound";
					db.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.errorcode + ' .. ' + db.error);
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}
}
//======================================================================================================================================
// deletes a record from the database - probably should not be used for tables being sync'd. Use idbMarkDelete instead.
// this one is called from idbPurge
function idbDelete(db,table,guid,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doDelete);
	function doDelete(){
		if (!guid){
			guid = table.record[table.primarykeyfield]
		}	
		//console.log('do delete record with ' + table.primarykeyfield + ' = ' + guid );
		var request = db.handle.transaction([table.name],"readwrite").objectStore(table.name).delete(guid);

		// callbacks for request 
		request.onsuccess = function(event) {
			//console.log('delete was a success');
			db.errorcode = 0;
			db.error = "";
			if (oncomplete)	{oncomplete()}				
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}
}	
//======================================================================================================================================
function idbMarkDelete(db,table,guid,oncomplete,onnotfound,onerror){
	//console.log('idbMarkDelete')
	table = idbCheckTable(table);
	idbOpen(db,doMarkDelete);
	function doMarkDelete(){
		//console.log('do MarkDelete  -- getting guid ' + guid);
		var objectstore = db.handle.transaction([table.name],"readwrite").objectStore(table.name);
		var request = objectstore.get(guid);

		// callbacks for get request 
		request.onsuccess = function(event) {
			if (event.target.result){							
				table.record = request.result;
				if (table.deletedtimestampfield){
					table.record[table.deletedtimestampfield] = Date.now(); // mark record as deleted
				}	
				if (table.timestampfield){
					table.record[table.timestampfield] = Date.now();
				}	
				//console.log('deleting |' + table.record.guid + ' | ' + table.record.ts + ' | ' + table.record.sts + ' | ' + table.record.dts + ' | ' + table.record.firstname +  ' | ' + table.record.lastname);

				var requestUpdate = objectstore.put(table.record);
				
				requestUpdate.onsuccess = function(event) {
					//console.log('idbMarkDelete put was a success.');
					db.errorcode = 0;
					db.error = "";	
					if (oncomplete){oncomplete()};
					idbSync(db,table); // syncs are done asyncronously.
				};				
				requestUpdate.onerror = function(event) {
					if (onerror){onerror(event)};
				}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.errorcode = "RecordNotFound";
					db.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.errorcode + ' .. ' + db.error);
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}

}	
//======================================================================================================================================
function idbEmpty(db,table,oncomplete,onerror){
	//console.log('idbEmpty')
	table = idbCheckTable(table);
	idbOpen(db,doEmpty);
	function doEmpty(){
		var request = db.handle.transaction([table.name],"readwrite").objectStore(table.name).clear();		
		request.onsuccess = function(){
			//console.log('idbEmpty complete')
			if (oncomplete)	{oncomplete()}				
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}	

//======================================================================================================================================
// similar to an idbGet, but called from inside a transaction - ie from idbSelect
function idbJoin(db,trans,table,guid,oncomplete,onnotfound,onerror){ 
	//console.log('idbJoin on ' + table.name + ' guid=' + guid)
	table = idbCheckTable(table);
	var request = trans.objectStore(table.name).get(guid);

	request.onsuccess = function(event) {
		if (event.target.result){
			db.errorcode = 0;
			db.error = "";
			if (oncomplete)	{
				//console.log('idbJoin got record ' + guid);
				for(var k in event.target.result) table.record[k]=event.target.result[k];
				oncomplete(event.target.result)
				}
		} else {
			if (onnotfound)	{
				onnotfound()
			} else {
				db.errorcode = "RecordNotFound";
				db.error = "The requested record was not found in the database";
				//console.log('database Error ' + db.errorcode + ' .. ' + db.error);				
			}					
		}						
	}
	request.onerror = function(event){
		if (onerror){ onerror(event)};
	}		
}

//======================================================================================================================================
function idbGet(db,table,guid,oncomplete,onnotfound,onerror){ 
	table = idbCheckTable(table);
	switch(guid){
	case '_first_':
		idbSelect({	db:db,table:table,
					orderBy:table.primarykeyfield,limit:1,
					onrecord:function(record){
						guid = record[table.primarykeyfield];	
						idbGet(db,table,guid,oncomplete,onnotfound,onerror);
						return false; // terminate select loop
					},
					onerror:onerror});
		return;
	}
	idbOpen(db,doGet);
	function doGet(){
		var request = db.handle.transaction([table.name]).objectStore(table.name).get(guid);
		// callbacks for request
		request.onsuccess = function(event) {
			if (event.target.result){
				db.errorcode = 0;
				db.error = "";
				if (oncomplete)	{
					for(var k in event.target.result)table.record[k]=event.target.result[k];
					oncomplete(event.target.result)
					}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.errorcode = "RecordNotFound";
					db.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.errorcode + ' .. ' + db.error);				
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}	

//======================================================================================================================================
// Counts the number of rows in the table, and passes the value to oncomplete. 
function idbRecords(db,table,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doCount);
	function doCount(){
		var request = db.handle.transaction([table.name]).objectStore(table.name).count();
		request.onsuccess = function(event) {
			if (oncomplete)	{
				oncomplete(request.result);
			}	
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}

//======================================================================================================================================
// Makes sure the table contains a minimum of 1 record. Useful for settings tables, which contains the host value, so can't be primed with a sync.
// prime fields before calling this. for example; database.customer.record.firstname = "Bruce"; Guid field is primed here.
function idbOne(db,table,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doOne);
	function doOne(){
		idbRecords(db,table,doAdd,doError);
	}
	function doAdd(r){
		if (r==0){
			idbPrimeGuid(table,table.record);  // TODO remove reference to table.record
			idbAdd(db,table,table.record,false,oncomplete,onerror)
		} else {
			oncomplete()
		}
		return;
	}
	function doError(event){
		if (onerror){ onerror(event)};
	}
}
//======================================================================================================================================
// If onRecord is passed then that is called for each returned record. If not passed then the whole result sent to oncomplete
/* options:{db:database,
			table:null,	 	// required
			join:null,		// an array of table objects
			orderBy:"guid",	// a field name, or array of field names
			from:null,
			greaterThan:null,
			to:null,
			lessThan:null,
			equalTo:null,
			offset:0,
			limit:0,
			maxRecords: deprecated
			direction:"next",
			filter:function(){},
			includeDeleted:false,
			onrecord:function(){},
			oncomplete:function(){},
			onerror:function(){},
			}
function idbSelect(db,table,join,orderBy,from,to,offset,limit,direction,incDeleted,maxRecords,onRecord,i,oncomplete,onerror){
*/			
function idbSelect(options){
	if (!options.db){options.db=database};
	options.table = idbCheckTable(options.table);	
	if (!options.table){return};
	if (!options.orderBy){options.orderBy='guid'};
	if (options.direction != "next" && options.direction != "prev"  && options.direction != "nextunique" && options.direction != "prevunique"){options.direction = "next"};
	
	//console.log('IDB SELECT ' + options.table.name + ' orderby: ' + options.orderBy)
	idbOpen(options.db,doList);
	function doList(){
		var resultset=[];
		var tableList=[];
		tableList.push(options.table.name);
		if (options.join){
			for (var jx = 0; jx < options.join.length; ++jx) {
				tableList = tableList.concat(options.join[jx].table.name);
			}	
		}			
		var trans = options.db.handle.transaction(tableList)
		var store = trans.objectStore(options.table.name)
		if (options.orderBy=='guid'){
			if (options.equalTo && Array.isArray(options.equalTo)){
				options.equalTo = options.equalTo[0]
			}
			var request = store.openCursor(options.equalTo,options.direction);		
		} else {
			// get index to use based on options.orderBy parameter						
			var found=-1;
			for(var ix = 0; ix < options.table.indexes.length; ++ix) {	
				found=ix;
				if (Array.isArray(options.orderBy)){
					for(var fx = 0; fx < options.orderBy.length; ++fx) {	
						if(options.table.indexes[ix].fields.length-1 < fx || options.orderBy[fx] != options.table.indexes[ix].fields[fx]){
							found=-1;
							break;
						}
					}
				} else { // not an array
					if(options.orderBy != options.table.indexes[ix].fields[0]){
						found=-1;
					}
				}				
				if (found>=0) break;
			}			
			if (found>=0){
				var keyRange = idbMakeRange()
				var index = store.index(options.table.indexes[ix].name)
				// open the cursor			
				var request = index.openCursor(keyRange,options.direction);		
			} else {
				console.log('Index not found for ' + options.orderBy);
				var request = store.openCursor(options.equalTo,options.direction);
			}			
		}
		
		var recs = 0;
		var offs = 0;
		var complete=false;
		var takerecord=true;
		//---
		request.onsuccess = function(event){
			var cursor = event.target.result;
			takerecord=true;
			
			if (!cursor){
				takerecord=false;
				complete=true;
			}
			if (takerecord && recs >= options.limit && options.limit > 0 ){
				takerecord=false;
				complete=true;
			}
			if( options.table.deletedtimestampfield && options.includeDeleted==false && cursor.value[options.table.deletedtimestampfield]){
				takerecord=false;
			}
			if (complete){
				withResult();
			} else if (takerecord){
				for(var k in cursor.value){
					options.table.record[k] = cursor.value[k]; // load the record buffer
				}	
				if (options.join){ // try and do an idbGet here on the joined table?
					getJoins(options.join,0,function(){withRecord(cursor)})
				} else {
					withRecord(cursor)
				}	
			} else {
				cursor.continue(); // triggers another success event
			}			
		}
		//---
		request.onerror = function(event){
			if (options.onerror){ options.onerror(event)};
		}
		//----
		function withRecord(cursor){
			if (takerecord && options.filter){ 			// join, before filter, before offset
				switch(options.filter(cursor.value)){   // filter must be syncronous.
				case 1: // out of range
					complete=true;
				case 2: // record filtered and out of range
					takerecord=false;
				}
			}
			if (takerecord && offs < options.offset && options.offset > 0){	
				offs += 1;
				takerecord=false;
			}
			if (takerecord){
				if (options.onrecord){
					if( options.onrecord(cursor.value,options) == false){ // return false to terminate loop
						complete=true;
					}
				} else {
					resultset.push(cursor.value);
				}	
				recs += 1;
			}	
			if (complete){
				withResult();
			} else {
				cursor.continue(); // triggers another success event
			}				
		}
		//----
		function withResult(){
			if(options.orderBy){
				idbSort(resultset,options.orderBy)
			};
			if (options.oncomplete)	{
				options.oncomplete(resultset,options)
			}
		}		
		//----
		function getJoins(joinList,idx,whenGotAll){
			if (idx > options.join.length-1){
				whenGotAll()			
			} else {
				for (var rx = 0; rx < options.table.relations.length; ++rx) {
					if (options.table.relations[rx].tableName == options.join[idx].table.name){
						var fields = Object.keys(options.table.relations[rx].links);
						for (var fx = 0; fx < fields.length; ++fx) {
							var linkValue =  options.table.record[fields[fx]];
						}
						break;
					}					
				}	
				idbJoin(options.db,trans,options.join[idx].table,linkValue,function(){getJoins(joinList,idx+1,whenGotAll);},
					function(){getJoins(joinList,idx+1,whenGotAll);},options.onerror);
			}
		}
		//----
		function idbMakeRange(){
			var keyRangeValue = null
			if (options.equalTo){  // equalsTo wins over other ranges
				keyRangeValue = IDBKeyRange.only(idbMakeArray(options.equalTo));
			} else {
				var incFrom=false;
				var rangeFrom=[];
				if (options.from){ // if from and greaterThan both exist then from wins.
					incFrom=false;
					rangeFrom = idbMakeArray(options.from)
				} else if (options.greaterThan){
					incFrom=true;
					rangeFrom = idbMakeArray(options.greaterThan)
				} else {
					rangeFrom = null
				}
				var incTo=false;
				var rangeTo=[];
				if (options.to){ // if to and lessThan both exist then to wins
					incTo=false;
					rangeTo = idbMakeArray(options.to)
				} else if (options.lessThan){
					incTo=true;
					rangeTo = idbMakeArray(options.lessThan)
				} else {
					rangeTo = null
				}
				if (rangeFrom && rangeTo){
					keyRangeValue = IDBKeyRange.bound(rangeFrom,rangeTo,incFrom,incTo)
				} else if(rangeFrom){
					keyRangeValue = IDBKeyRange.lowerBound(rangeFrom,incFrom)
				} else if (rangeTo){
					keyRangeValue = IDBKeyRange.upperBound(rangeTo,incTo)
				}				
			}
			return keyRangeValue
		}
	}	
}
//======================================================================================================================================
function idbMakeArray(parm){
	 if (Array.isArray(parm)){
		return parm;
	} else {
		var parmArray=[]
		parmArray[0] = parm
		return parmArray;
	}								
}				

//======================================================================================================================================
// orderby = ['fieldname','fieldname',...]
function idbSort(resultset,orderBy){
	var order=[];
	if (Array.isArray(orderBy)){
		order = orderBy;
	} else {
		order.push(orderBy);
	}
	resultset.sort(idbSortBy(order));
}
//======================================================================================================================================
function idbSortBy(orderBy){
	return function(a, b) {
		//console.log('idbSortBy orderBy=' + orderBy + ' ' + orderBy.length)
		var field='';
		var left='';
		var right='';
		for (var i=0; i < orderBy.length ; i++){
			field = orderBy[i];
			if (field.substring(0,1)=='-'){ // reverse sort order 
				field = field.substring(1)
				left = b[field]
				right = a[field]				
			} else {
				left = a[field]
				right = b[field]
			}	
			if (left===undefined) return -1;
			if (right===undefined) return 1;			
			if ($.isNumeric(left) && $.isNumeric(right)){
				if (left-right != 0) {
					return left-right;
				} // else they are equal so cycle to next field in sort order.
			} else { // one of them is a string, so compare as strings
				if (left != right) {				
					return left.localeCompare(right,'de', { sensitivity: 'base' })
				} // else they are equal so cycle to next field in sort order.
			} 
		} 
		return 0;			
	}
}
//======================================================================================================================================
// sync all the tables in the database one at a time
function idbSyncAll(db,startTable,oncomplete,onerror){
	if (startTable < db.tables.length){
		idbSync(db,db.tables[startTable],doNext,onerror,startTable+1)
	} else {
		if (oncomplete){
			oncomplete()
		}
	}
	function doNext(i){
		idbSyncAll(db,i,oncomplete,onerror)
	}
}
//======================================================================================================================================
// deletes all local data and then syncs from there
// calls same onerror if empty fails or sync fails
function idbFullSync(db,table,oncomplete,onerror){
	//console.log('idbFullSync')
	idbEmpty(db,table,function(){
		//console.log('calling idbSync')
		idbSync(db,table,oncomplete,onerror);
	},onerror)
}
//======================================================================================================================================
// sync one table in the database
function idbSync(db,table,oncomplete,onerror,oncompleteparm){ 
	table = idbCheckTable(table);
	var resultset=[];
	//console.log('idbsync ' + table.name)
	idbSummary(db,table,resultset,doSend,onerror);
	function doSend(){
		var i=0;
		var recs='';
		var act = 'action';
		var date = new Date();
		var syncPost = {token:db.token,
						table:table.name,
						deviceid:db.deviceid,
						[act]:'sync',
						everythingafter:table.everythingafter,
						localTimeZone:date.getTimezoneOffset()
						}
		if (resultset.length){
			syncPost[table.name]=resultset
		}	
		$.ajax({
		  url: db.synchost + '/' + table.syncproc,
		  type:"POST",
		  data:JSON.stringify(syncPost),
		  headers: { "Authorization": "Basic " + btoa(db.user + ":" + db.password) },		  
		  contentType:"application/json; charset=utf-8",
		  dataType:"json",
		  success: function(data){
				database.onSyncCommsSuccess(data);
				handleReply(data)
			},
		  error: function(XMLHttpRequest, textStatus, errorThrown){
				database.onSyncCommsError(XMLHttpRequest, textStatus, errorThrown);
				if (onerror) { onerror(XMLHttpRequest, textStatus, errorThrown) }
			}
		})		
		function handleReply(data){
			var response = table.syncproc + '_response'
			if (data[response]){
				recs = data[response][table.name];
				if (recs){ // may be nothing to receive.
					putNext()
				} else {
					table.afterSync();
					if (oncomplete)	{oncomplete(oncompleteparm)}
				}
			} else {
				console.log('Response: "' + response + '" was missing from the Sync Reply. Check the case.')
				console.log(data)
			}
		}
		function putNext(){
			//console.log('putnext i = ' + i + 'recs.length=' + recs.length);
			if (i > recs.length-1){
				table.afterSync();
				if (oncomplete)	{oncomplete(oncompleteparm)}
				return
			}	
			var record = recs[i];
			i++;
			idbWrite(db,table,record,true,function(){
				putNext()
			});				
		}
	}
}
//======================================================================================================================================
function idbSummary(db,table,resultset,oncomplete,onerror){
    //console.log('IDBSUMMARY')
	table = idbCheckTable(table);
	idbOpen(db,doList);	
	function doList(){		
		//console.log('idbSummary do list');
		resultset.length = 0;		
		table.everythingafter = 0;
		var drecord ={}
		var request = db.handle.transaction([table.name]).objectStore(table.name).openCursor();		
		request.onsuccess = function(event){
			var cursor = event.target.result;
			if (cursor){
				if (table.timestampfield && table.servertimestampfield){
					if (cursor.value[table.timestampfield] != cursor.value[table.servertimestampfield]){  // only interested in records that have been altered here
						if (cursor.value[table.deletedtimestampfield] > 0){											// if record was deleted, just send minimal info
							drecord={}
							drecord[table.primarykeyfield] = cursor.value[table.primarykeyfield];
							drecord[table.deletedtimestampfield] = cursor.value[table.deletedtimestampfield];
							drecord[table.servertimestampfield] = cursor.value[table.servertimestampfield];
							resultset.push(drecord);
						} else {
							resultset.push(cursor.value);													// otherwise send whole record
						}	
					} else {
						if (table.everythingafter < cursor.value[table.servertimestampfield]){					// looking for the youngest unchanged record
							table.everythingafter = cursor.value[table.servertimestampfield]
						}
					}				
				}	
				cursor.continue();
			} else {
				//console.log('completed, recs= ' + resultset.length)
				if (oncomplete)	{oncomplete()}				
			}
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}			
	}
}
//======================================================================================================================================
// sends the contents of the result set to the console view. Used mostly for debugging.
function idbShowResult(table,resultset){
	table = idbCheckTable(table);
	var value='';
	console.log('Database: database  ; Table: ' + table.name + ' ; Records: ' + resultset.length);
	console.log(Object.keys(table.record))
	if(resultset.length){
		for (var rowNum in resultset){
			value = ''
			for(var i in resultset[rowNum]) {
				value = value + ' | ' + resultset[rowNum][i];
			}	
			console.log(value);
		}
	}	
}
//======================================================================================================================================
function testView(){
	idbSelect({table:database.tables[5],

				orderBy:"description",
				//from: "Paid",
				//to:"Sick",
				//offset:2,
				limit:1,
				//to:"Sick",

				//orderBy:["ts"],
				//equalTo:["1533123922534"], 
				//equalTo:"1533123922534", 
				
				//orderBy:null,
				//equalTo:["0P1R48G2TGBKD53S"], 
				
				//filter: function(record){return record.quicksick==1 ? recordOk : recordFiltered};
				
				oncomplete:function(resultset){idbShowResult(database.tables[5],resultset)}})
	}
(function( $, undefined ) {
$.widget( "ui.ntbrowsels", {
        options: {
			//columns:[ {itemNumber: 0, field:"",orderBy:"", method:0, firstInCell:0, lastInCell: 0, cellClass:"", columnClass:"" }],
			database:null,
			divId:"",
			table:{},
			tableId:"",
			tableName:"",
			orderBy:[],
			rowClass:"",
			calcClass:function(){}			
		},
//------------------------------------------------------
	_init: function() {		
		this.options.database = database; // workaround for now, setting in options does not seem to be working.
		for (j in this.options.database.tables){
			if(this.options.database.tables[j].name == this.options.tableName){
				this.options.table = this.options.database.tables[j];
			}
		}	
	},	
//------------------------------------------------------
	start: function() {	
	},	
//------------------------------------------------------
	stop: function() {
	},	
//------------------------------------------------------
	refresh: function() {		
		this.populate();
	},	
//------------------------------------------------------
// orderBy might be a fieldname, array of field names, or column index. If not passed use options.orderby instead.
	populate: function(orderBy,selectedRowId) {
		if (orderBy === undefined){
			orderBy = this.options.orderBy
		} else {
			this.options.orderBy = orderBy
		}	
		if ($.isNumeric(orderBy)){
			var colIndex = this.getItemProperties(orderBy);
			orderBy = this.options.columns[colIndex].orderBy;
		}	
		var _this = this;
		var id = this.options.divId;
		var rows = 0;
		var s = '';
		if (!this.options.table || !this.options.table.name){
			this.options.table = idbCheckTable(this.options.tablename);
		}	
		doBrowseStart();
		idbSelect({	db:this.options.database,
					table:this.options.table,
					join:this.options.join,
					filter: this.options.filter,
					orderBy:orderBy,
					onrecord:doPopulateRecord,
					oncomplete:doBrowseEnd
				})
		function doBrowseStart(){
			$(_this.options.tableId).empty() // removes all the existing rows
			// add header
			s = s + '<div class="nt-browse-grid-row nt-browse-row-header browseinvoices-row-header" data-elem="browse-header-row">'
			for (var col=0; col < _this.options.columns.length ; col++){
				if (_this.options.columns[col].firstInCell){
					if (_this.options.columns[col].showHeader){
						if (_this.options.columns[col].prompt){
							s = s + '<div id="head_' + parseInt(col+1) + '" class="nt-browse-header-not-selected ui-corner-top nt-browse-grid-cell" data-elem="browse-header-cell">' +
							'<div class="' + _this.options.columns[col].headerContentClass + '">' + _this.options.columns[col].prompt + '</div></div>'
						} else {
							s = s + '<div id="head_' + parseInt(col+1) + '" class="nt-browse-header-not-selected ui-corner-top nt-browse-grid-cell" data-elem="browse-header-cell"></div>'					
						}	
					}					
				}
			}	
			s = s + '</div>'
			// add body
			s = s + '<div class="'+ _this.options.bodyClass+'" data-elem="browse-body">'
		}
		
		function doPopulateRecord(idx,record){ 											//on record
			s = s + _this.addRow()
			rows += 1
			return true			
		}
		function doBrowseEnd(){	//on complete
			if (rows==0){
				s = s + '<div class="'+_this.options.messageIfEmptyClass+'">' + _this.options.messageIfEmpty + '</div>' 
			}
			s = s + '</div>' // end of body
			if (rows==0){
				// footer
			}	
			$(_this.options.tableId).append(s);		
			$(_this.options.divId).ntbrowse("ready",selectedRowId);			
		}
		
	},	
//------------------------------------------------------
	selectb: function(guid,lookupField) {	
		idbGet(this.options.database,this.options.table,guid, 
			function(record){ //oncomplete
				var desc=$('#'+lookupField).data('nt-desc');
				if(desc){
					$('#'+lookupField).val(record[desc])
				} else {
					$('#'+lookupField).val(guid)
				}				
			},
			function(){ //not found
				console.log('After Lookup: but returned guid not found in local database')
			},
			function(event){  //on error
				console.log('Error: ' + event.target.error.name + ' ' + event.target.error.message);
			});
	},	
//------------------------------------------------------
	deleteb: function(guid) {	
		var _this=this;
		idbMarkDelete(this.options.database,this.options.table,guid,doRemove)
		
		function doRemove(){ // remove the row from the table.
			$(_this.options.tableId).find('[data-nt-id="'+guid+'"]').remove()
		}
	},
//------------------------------------------------------
	repopulateRow: function(guid) {	
		var _this=this;		
		idbGet(this.options.database,this.options.table,guid,doReplace,doAdd)
		
		function doReplace(record){ // replace the existing row with the new data
			var resultset =[]
			resultset.push(record); // TOTEST XXXX
			$(_this.options.tableId).find('[data-nt-id="'+guid+'"]').empty().append(_this.buildRow(0,resultset));
		}
		function doAdd(){ // repopulate the whole table to include the new data.
			_this.populate(_this.options.orderBy,guid);
		}	
	},
//------------------------------------------------------
	addRow: function() {	
		return '<div class="' + this.options.rowClass + '" data-elem="browse-row" data-nt-id="'+
				this.options.table.record[this.options.table.primarykeyfield]+'" data-do="ds">'	+ 	
				this.buildRow() + 
				'</div>'				
	},
//------------------------------------------------------
	buildRow: function() {		    
		var s = '';
		for (var col=0; col < this.options.columns.length ; col++){
			s = s + this.addCell(col);
		}
		return s;
	},	
//------------------------------------------------------
	addCell: function(col) {	
		var s = '';
		var value='';
		var field = this.options.columns[col].field;
		if (this.options.columns[col].firstInCell){
			s = '<div class="' + this.options.columns[col].cellClass +'" data-elem="browse-cell"><!-- start of cell -->'
		}
		if (this.options.columns[col].showPrompt){
			if (this.options.columns[col].prompt){
				s = s + '<div class="' +this.options.columns[col].promptClass + '">' + this.options.columns[col].prompt + '</div>'
			}
		}	
		if (this.options.columns[col].field){			
			if (this.options.columns[col].table){
				value = this.options.database[this.options.columns[col].table].record[this.options.columns[col].field]
			} else {
				value = this.options.table.record[this.options.columns[col].field]
			}
			if(this.options.columns[col].calcClass){
				s = s + '<div class="' + this.options.columns[col].columnClass + ' ' + this.options.columns[col].calcClass(value) + '">' + value + '</div>'
			} else {
				s = s + '<div class="' + this.options.columns[col].columnClass + ' ' + '">' + value + '</div>'			
			}	
		} else {						
			var button = this.options.columns[col].button;
			if (button){				
				var buttonIcon = this.options.columns[col].buttonIcon;
				id = 'btn_' + Math.random().toString(36).substr(3,4);
				s = s + '<div class="' + this.options.columns[col].columnClass +'">' + 
						'<button type="button" name="' + button + '_btn" id="' + id + '"' + ' value="" class="nt-' + button + '-button nt-small-button"  title="Click here to ' + button + ' this record"' + ' data-do="' + button + '">&#160;</button>' +
					  '</div>'+
					'<script>$("#'+ id + '").button({icons:{primary:"ui-icon-'+ buttonIcon +'"},text:false});</script>'
			} else {
				s = s + '<div></div>'
			}
		}
		if (this.options.columns[col].lastInCell){
			s = s + '</div><!-- end of cell-->'
		}
		return s;
	},	
//------------------------------------------------------
	getItemProperties: function(i) {
	  for (var colIndex in this.options.columns){
		if (this.options.columns[colIndex].itemNumber == i){
			return colIndex;
		}
	  }
	  return;
	},
//------------------------------------------------------
// tempting just to call Populate, but manually sorting here allows sorting on joined fields.
	clientSideSort: function(elem,dataValue,event,dataValueElement) {	
		var cell = $(event.target).get(0); // This is the thing clicked
		if ($(cell).attr('data-elem') != 'browse-header-cell'){
			cell = $(cell).closest('[data-elem="browseheadercell"]').get(0); // cell is the cell clicked on
		}
		var sameColumn =  $(cell).hasClass('nt-browse-header-selected');
	
		var descending = 0;
		if (dataValue < 0){
			dataValue = -dataValue;
			descending=1;
		}
	
		var rows = $(this.options.tableId).find('[data-elem="browse-row"]').toArray().sort(this.sortComparer(dataValue-1));
		if (descending){
			rows = rows.reverse()
		}
		for (var i = 0; i < rows.length; i++){$(this.options.tableId).append(rows[i])} // data part
		// now for the header part
		if (sameColumn){
			if (descending){
				$(dataValueElement).attr('data-value',dataValue)
				$(cell).find('.ui-icon-triangle-1-n').removeClass('ui-icon-triangle-1-n').addClass('ui-icon-triangle-1-s')
			} else {
				$(dataValueElement).attr('data-value',0 - dataValue)
				$(cell).find('.ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-n')
			}	
		} else {
			var oldCell = $(this.options.tableId).find('.nt-browse-header-selected');			
			$(oldCell).removeClass('nt-browse-header-selected')
				.addClass('nt-browse-header-not-selected')
				.find('.ui-icon-triangle-1-s,.ui-icon-triangle-1-n').eq(0).remove()
			$(oldCell).find('[data-value]').each(function(){
				$(this).attr('data-value',Math.abs($(this).attr('data-value')));	
			})	
				
			$(cell).removeClass('nt-browse-header-not-selected')
				.addClass('nt-browse-header-selected')
				.prepend('<span class="nt-icon-left ui-icon ui-icon-triangle-1-n"></span>')
				.find('[data-value]').attr('data-value',0-Math.abs(dataValue));
		}		
	},
//------------------------------------------------------	
	sortComparer: function (index) {
		var _this=this;
		return function(a, b) {			
			var field='';
			var left='';
			var right='';
			//for (var i=0; i <= orderBy.length ; i++){
			//	field = orderBy[i];
				left = _this.getCellValue(a, index);
				right = _this.getCellValue(b, index);
				if (left===undefined) return -1;
				if (right===undefined) return 1;			
				if ($.isNumeric(left) && $.isNumeric(right)){
					if (left-right != 0) {
						return left-right;
					} // else they are equal so cycle to next field in sort order.
				} else { // one of them is a string, so compare as strings
					if (left != right) {				
						return left.localeCompare(right,'de', { sensitivity: 'base' })
					} // else they are equal so cycle to next field in sort order.
				} 
			//} 
			return 0;			
		}	
	},
//------------------------------------------------------		
	getCellValue: function (row, index){ 
		return $(row).children('td').eq(index).find('*:not(:has("*"))').html()
	}	,
//------------------------------------------------------
	clickRow : function(row,ev){ 
	
	}
//------------------------------------------------------		
});

$.extend( $.ui.ntbrowsels, {
	version: "@VERSION"
});

})( jQuery );

(function( $, undefined ) {
$.widget( "ui.ntformls", {
	options: {
		tablename: '',    
		table: {},
		divId: '',
		database: null,
		columns:[],
		record: {},
		primeField: function(field,table,fieldname,value,onlyIfBlank) {
			if (onlyIfBlank){
				if ($("#" + field).val() == false){
					$("#" + field).val(value);
				}
				if (this.record[fieldname] == false){
					this.record[fieldname] = value;
					this.database[table].record[fieldname] = value;
				}
			} else {
				$("#" + field).val(value);
				this.database[table].record[fieldname] = value; // not needed, but good to do
				this.record[fieldname] = value; // this is this.options here
			}	
		},	
		assignField: function(fieldname,value,onlyIfBlank) {			
			if (this.record[fieldname] == false || onlyIfBlank == false){
				this.record[fieldname] = value; // this is this.options here
			}	
		},			
		primeOnInsert: function(){},
		primeOnCopy: function(){},	 // after record loaded  
		primeOnChange: function(){}, // after record loaded
		assignOnSave: function(){},
		gotFocusBack:function(){},
		onFormOpen: function(action){}
	},	
	//------------------------------------------------------
	_init: function() {		
		this.options.database = database; // workaround for now, setting in options does not seem to be working.
		for (j in this.options.database.tables){
			if(this.options.database.tables[j].name == this.options.tablename){
				this.options.table = this.options.database.tables[j];
				$.extend(this.options.record,this.options.table.record);
				break;
			}
		}
	},	
//------------------------------------------------------
	start: function() {
	},	
//------------------------------------------------------
	stop: function() {
	},	
//------------------------------------------------------
	clearForm: function(elem) {
		$(elem).find('input').not('button, submit, reset, hidden, checkbox, radio').val('');
		$(elem).find('[type=checkbox]').attr('checked', false);	
		$(elem).find('[type=radio]').attr('checked', false);	
	},	
//------------------------------------------------------
	onFormOpen: function(action) {
		//console.log('on formopen ' + this.options.table.name)
		this.options.onFormOpen(action)
	},	
//------------------------------------------------------
	refresh: function() {	
		//console.log('on refresh ' + this.options.table.name)
		this.options.onFormOpen(0)
	},	
//------------------------------------------------------
	primeLookups: function() {	
	var _this = this;
	$('[data-nt-desc]').each(function(){
			var tbl = $(this).attr('data-nt-lut')
			var guid = $(this).val()
			var desc = $(this).attr('data-nt-desc')
			var elem = this;
			idbGet(_this.options.database,tbl,guid,function(record){ //oncomplete						
				$(elem).val(record[desc])
			})
		})
	},	
//------------------------------------------------------
	populate: function(action,guid) {
		var _this = this;
		var id = this.options.divId;		
		switch (action){
		case 1: //insert		
			this.clearForm(id);
			this.options.primeOnInsert();
			this.onFormOpen(action);
			$(id).ntform('show');	
			break
		case 2: //change
		case 4: //copy
			if (!guid){
				console.log('populating form, but no guid set')
			} else {
				idbGet(this.options.database,this.options.table,guid,function(record){ //oncomplete
						_this.options.record = record;
						ntd.setRow(record.guid); // guid might be changed by the idbGet from _first_ etc.
						$(id).ntformls( "populateRecord",_this.options.record)
						if (action==4){
							_this.options.record[_this.options.table.primarykeyfield] = ''; // clear guid, so Write does an Insert
						}
						if (action == 2){
							_this.primeLookups()
							_this.options.primeOnChange();
						} else if (action==4){
							_this.primeLookups()
							_this.options.primeOnCopy();
						}	
						_this.onFormOpen(action);
						$(id).ntform('show');	
					}, function(){ //not found
						console.log('populating form, but guid not found in local database')
						
					}, function(event){  //on error
						console.log('Error: ' + event.target.error.name + ' ' + event.target.error.message);
					});
			}
			break
		default:
			this.onFormOpen(action)
		}	
	},	
//------------------------------------------------------
	populateRecord: function(record) { // move fields from record to form fields
		var typ='';
		for (var i in this.options.columns){
			for (var j in record){
				if (j == this.options.columns[i].field){
					//
					typ = $(this.options.columns[i].id).attr('type');
					switch(typ){
						case 'checkbox':
							if(record[j]==$(this.options.columns[i].id).attr('value')){
								$(this.options.columns[i].id).attr('checked','checked')
							}	
							break
						default:
							$(this.options.columns[i].id).val(record[j])
					}	
					break;
				}
			}
		}
	},
//------------------------------------------------------
	onChangeField: function(elem){
		var id = '#' + $(elem).attr('id')
		for (var i in this.options.columns){
			if(this.options.columns[i].id==id){
				if (typeof this.options.columns[i].onChangeField == "function"){
					this.options.columns[i].onChangeField();
				}	
			}
		}	
	},
//------------------------------------------------------
	save: function(action,browseid,guid) { // move fields from form fields to options.record, and then write to table.
		this.options.record.guid = guid;
		var elem;
		for (var i in this.options.columns){
			for (var j in this.options.record){
				if (j == this.options.columns[i].field){
					elem = $(this.options.columns[i].id);
					this.options.record[j] = getFormFieldValue(elem,this.options.record[j]) // might return same value if field not found.
					break;
				}
			}
		}	
		this.options.assignOnSave();
		idbWrite(this.options.database,this.options.table,this.options.record,false,function(uid){ // oncomplete gets the guid of the saved record
			switch (action){
			case 1: //insert		
			case 4: //copy			
				$(browseid).ntbrowsels("populate",undefined,uid)
				break;
			case 3: //delete
				$(browseid).ntbrowsels("populate")
				break;
			case 2: //change
				$(browseid).ntbrowsels("repopulateRow",uid)
				break;
			}
		})	
	}
//------------------------------------------------------
});

$.extend( $.ui.ntformls, {
	version: "@VERSION"
});

})( jQuery );

/***
NetTalk Mobile Database
***/
var database={
  name: "invoice",
  version:3,
  handle:{},
  open:0,
  error:"",
  errorcode:0,
  synchost: "http://127.0.0.1:88",
  synctimer: 600,   // seconds
  deviceid: "",
  user:"",
  password:"",
  token:"",
  status:0,
  syncDate:"",
  onSyncCommsSuccess:function(data){
  },
  onSyncCommsError:function(XMLHttpRequest, textStatus, errorThrown){
  },
  tables:[
    { name: "countries",
      syncproc: "synccountries",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'cou_timestampkey',unique: false, fields:["ts"]},
        {name:'cou_servertimestampkey',unique: false, fields:["sts"]},
        {name:'cou_countrycodekey',unique: true, fields:["countrycode"]},
        {name:'cou_countrykey',unique: false, fields:["country"]}
      ],
      relations: [
        {type:"onetomany",tableName:"linkcountriesshippers",links:{countrycode:"countryguid"}}
        ,{type:"onetomany",tableName:"customer",links:{guid:"countrycode"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        countrycode:"",
        country:""
      },
      afterSync: function(){
      }
    },
    { name: "customer",
      syncproc: "synccustomer",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'cus_timestampkey',unique: false, fields:["ts"]},
        {name:'cus_servertimestampkey',unique: false, fields:["sts"]},
        {name:'cus_namekey',unique: false, fields:["lastname"]},
        {name:'cus_countrykey',unique: false, fields:["countrycode"]},
        {name:'cus_shipperkey',unique: false, fields:["shipperguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"shippers",links:{shipperguid:"guid"}}
        ,{type:"manytoone",tableName:"countries",links:{countrycode:"guid"}}
        ,{type:"onetomany",tableName:"invoice",links:{guid:"customerguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        firstname:"",
        lastname:"",
        company:"",
        phone:"",
        email:"",
        countrycode:"",
        shipperguid:""
      },
      afterSync: function(){
      }
    },
    { name: "invoice",
      syncproc: "syncinvoice",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'inv_servertimestampkey',unique: false, fields:["sts"]},
        {name:'inv_timestampkey',unique: false, fields:["ts"]},
        {name:'inv_numberkey',unique: false, fields:["invoicenumber"]},
        {name:'inv_customerkey',unique: false, fields:["customerguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"customer",links:{customerguid:"guid"}}
        ,{type:"onetomany",tableName:"lineitems",links:{guid:"invoiceguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        invoicenumber:0,
        customerguid:"",
        date:"",
        paid:0,
        terms:0
      },
      afterSync: function(){
      }
    },
    { name: "lineitems",
      syncproc: "synclineitems",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'lin_timestampkey',unique: false, fields:["ts"]},
        {name:'lin_servertimestampkey',unique: false, fields:["sts"]},
        {name:'lin_productkey',unique: false, fields:["productguid"]},
        {name:'lin_invoicekey',unique: false, fields:["invoiceguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"invoice",links:{invoiceguid:"guid"}}
        ,{type:"manytoone",tableName:"product",links:{productguid:"guid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        invoiceguid:"",
        productguid:"",
        price:0,
        quantity:0
      },
      afterSync: function(){
      }
    },
    { name: "linkcountriesshippers",
      syncproc: "synclinkcountriesshippers",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'lcs_timestampkey',unique: false, fields:["ts"]},
        {name:'lsc_servertimestampkey',unique: false, fields:["sts"]},
        {name:'lsc_countrykey',unique: true, fields:["countryguid","shipperguid"]},
        {name:'lcs_shipperkey',unique: false, fields:["shipperguid","countryguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"countries",links:{countryguid:"countrycode",shipperguid:""}}
        ,{type:"manytoone",tableName:"shippers",links:{shipperguid:"guid",countryguid:""}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        countryguid:"",
        shipperguid:""
      },
      afterSync: function(){
      }
    },
    { name: "product",
      syncproc: "syncproduct",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'pro_timestampkey',unique: false, fields:["ts"]},
        {name:'pro_servertimestampkey',unique: false, fields:["sts"]},
        {name:'pro_namekey',unique: false, fields:["name"]}
      ],
      relations: [
        {type:"onetomany",tableName:"lineitems",links:{guid:"productguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        name:"",
        rrp:0
      },
      afterSync: function(){
      }
    },
    { name: "shippers",
      syncproc: "syncshippers",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'shi_shipperkey',unique: true, fields:["shipper"]},
        {name:'shi_servertimestampkey',unique: false, fields:["tst"]},
        {name:'shi_timestampkey',unique: false, fields:["ts"]}
      ],
      relations: [
        {type:"onetomany",tableName:"linkcountriesshippers",links:{guid:"shipperguid"}}
        ,{type:"onetomany",tableName:"customer",links:{guid:"shipperguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        tst:0,
        dts:0,
        shipper:"",
        email:"",
        phone:""
      },
      afterSync: function(){
      }
    },
    { name: "thisdevice",
      syncproc: "syncthisdevice",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'tdh_timestampkey',unique: false, fields:["ts"]},
        {name:'thd_servertimestampkey',unique: false, fields:["sts"]}
      ],
      relations: [
      ],
      record: {
        guid:"",
        sts:0,
        ts:0,
        dts:0,
        clientdeviceid:"",
        phonenumber:"",
        password:"",
        salt:"",
        synchost:"",
        lastsyncdate:0
      },
      afterSync: function(){
          dbGet_thisdevice();
      }
    }
  ],
  countries:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[0],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[0],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[0]);}
  },
  customer:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[1],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[1],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[1]);}
  },
  invoice:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[2],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[2],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[2]);}
  },
  lineitems:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[3],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[3],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[3]);}
  },
  linkcountriesshippers:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[4],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[4],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[4]);}
  },
  product:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[5],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[5],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[5]);}
  },
  shippers:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[6],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[6],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[6]);}
  },
  thisdevice:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[7],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[7],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[7]);}
  },
  last:0
};
database.countries.table = database.tables[0];
database.countries.record = database.tables[0].record;
database.customer.table = database.tables[1];
database.customer.record = database.tables[1].record;
database.invoice.table = database.tables[2];
database.invoice.record = database.tables[2].record;
database.lineitems.table = database.tables[3];
database.lineitems.record = database.tables[3].record;
database.linkcountriesshippers.table = database.tables[4];
database.linkcountriesshippers.record = database.tables[4].record;
database.product.table = database.tables[5];
database.product.record = database.tables[5].record;
database.shippers.table = database.tables[6];
database.shippers.record = database.tables[6].record;
database.thisdevice.table = database.tables[7];
database.thisdevice.record = database.tables[7].record;
//------------------------
var syncTimer;
//------------------------
function syncDatabase(){
  idbSyncAll(database,0,function(){ // oncomplete - all tables have been sync'd
  }, function(XMLHttpRequest, textStatus, errorThrown){ // on error
  }
  )
}
//------------------------
function syncTimerOn(){
  if(database.synctimer){
    syncTimer = setInterval(syncDatabase,database.synctimer*1000); // sync database on a timer
  }
}
//------------------------
function syncTimerOff(){
  clearInterval(syncTimer);
}

//------------------------
function dbGet_thisdevice(){
  idbGet(database,database.thisdevice.table,'_first_',function(){
    // set database properties from settings.
    database.synchost = database.thisdevice.record.synchost;
    database.user = database.thisdevice.record.phonenumber;
    database.password = database.thisdevice.record.password;
    database.deviceid = database.thisdevice.record.clientdeviceid;
  })
}

//------------------------
$(document).ready(function() {
  setTimeout(syncDatabase,3*1000+100); // sync database soon after program starts
  syncTimerOn()
  // prime the first record in the settings table if it does not exist.
  database.thisdevice.record.guid = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
  database.thisdevice.record.sts=0; // 
  database.thisdevice.record.ts=0; // 
  database.thisdevice.record.dts=0; // 
  database.thisdevice.record.clientdeviceid = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
  database.thisdevice.record.phonenumber=""; // 
  database.thisdevice.record.password=""; // 
  database.thisdevice.record.salt=""; // 
  database.thisdevice.record.synchost = database.synchost;
  database.thisdevice.record.lastsyncdate=0; // 
  idbOne(database,database.thisdevice.table,function(){ // adds the above record, but only if the table is empty.
    dbGet_thisdevice();
  })
});
//------------------------

