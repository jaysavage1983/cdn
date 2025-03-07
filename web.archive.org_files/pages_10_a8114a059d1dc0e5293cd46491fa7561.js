
/*
 * Modernizr JavaScript library 1.1
 * http://modernizr.com/
 *
 * Copyright (c) 2009 Faruk Ates - http://farukat.es/
 * Licensed under the MIT license.
 * http://modernizr.com/license/
 *
 * Featuring major contributions by
 * Paul Irish  - http://paulirish.com
 * Ben Alman   - http://benalman.com/
 */
 window.Modernizr=(function(P,l){var _='1.1', J={},T=true,ab=true,M=100,ad=l.documentElement,U=l.createElement("modernizr"),k=U.style,Z=l.createElement("input"),o="canvas",Y="canvastext",V="rgba",g="hsla",Q="multiplebgs",x="borderimage",D="borderradius",v="boxshadow",X="opacity",B="cssanimations",R="csscolumns",a="cssgradients",p="cssreflections",h="csstransforms",w="csstransforms3d",aa="csstransitions",F="fontface",K="geolocation",e="video",A="audio",d="input",u=d+"types",N="background",b=N+"Color",G="canPlayType",H="localstorage",j="sessionstorage",C="webworkers",O="applicationcache",c=" -o- -moz- -ms- -webkit- ".split(" "),s={},z={},r={},q,S,W,L,n=[];function y(f){k.cssText=f}function E(i,f){return y(c.join(i+";")+(f||""))}function I(i,f){return i.indexOf(f)!==-1}function ac(m,ae){for(var f in m){if(k[m[f]]!==undefined&&(!ae||ae(m[f]))){return true}}}function t(ae,m){var i=ae.charAt(0).toUpperCase()+ae.substr(1),f=[ae,"webkit"+i,"Moz"+i,"moz"+i,"o"+i,"ms"+i];return !!ac(f,m)}s[o]=function(){return !!l.createElement(o).getContext};s[Y]=function(){return !!(s[o]()&&typeof l.createElement(o).getContext("2d").fillText=="function")};s[K]=function(){return !!navigator.geolocation};s[V]=function(){y(N+"-color:rgba(150,255,150,.5)");return I(k[b],V)};s[g]=function(){y(N+"-color:hsla(120,40%,100%,.5)");return I(k[b],V)};s[Q]=function(){y(N+":url(m.png),url(a.png),#f99 url(m.png)");return/(url\s*\(.*?){3}/.test(k[N])};s[x]=function(){return t("borderImage")};s[D]=function(){return t("borderRadius","",function(f){return I(f,"orderRadius")})};s[v]=function(){return t("boxShadow")};s[X]=function(){y("opacity:.5");return I(k[X],"0.5")};s[B]=function(){return t("animationName")};s[R]=function(){return t("columnCount")};s[a]=function(){var m=N+"-image:",i="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";y(m+i+m+"-webkit-"+i+m+"-moz-"+i+m+"-o-"+i+m+"-ms-"+i+m+f+m+"-webkit-"+f+m+"-moz-"+f+m+"-o-"+f+m+"-ms-"+f);return I(k.backgroundImage,"gradient")};s[p]=function(){return t("boxReflect")};s[h]=function(){return !!ac(["transformProperty","webkitTransform","MozTransform","mozTransform","oTransform","msTransform"])};s[w]=function(){return !!ac(["perspectiveProperty","webkitPerspective","MozPerspective","mozPerspective","oPerspective","msPerspective"])};s[aa]=function(){return t("transitionProperty")};s[F]=(function(){var i;if(!(!/*@cc_on@if(@_jscript_version>=5)!@end@*/0)){i=true}else{var aj=l.createElement("style"),ae=l.createElement("span"),ak,af,ah=false,ag=l.body,ai,m;aj.textContent="@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}";l.getElementsByTagName("head")[0].appendChild(aj);ae.setAttribute("style","font:99px _,serif;position:absolute;visibility:hidden");if(!ag){ag=ad.appendChild(l.createElement(F));ah=true}ae.innerHTML="........";ae.id="fonttest";ag.appendChild(ae);ak=ae.offsetWidth;ae.style.font="99px testfont,_,serif";i=ak!==ae.offsetWidth;var f=function(){i=J[F]=ak!==ae.offsetWidth;ad.className=ad.className.replace(/(no-)?font.*?\b/,"")+(i?" ":" no-")+F;ai&&(m=true)&&ai(i);ah&&setTimeout(function(){ag.parentNode.removeChild(ag)},50)};setTimeout(f,M)}J._fontfaceready=function(al){(m||i)?al(i):(ai=al)};return function(){return i||ak!==ae.offsetWidth}})();s[e]=function(){var i=l.createElement(e),f=!!i[G];if(f){f=new Boolean(f);f.ogg=i[G]('video/ogg; codecs="theora, vorbis"');f.h264=i[G]('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')}return f};s[A]=function(){var i=l.createElement(A),f=!!i[G];if(f){f=new Boolean(f);f.ogg=i[G]('audio/ogg; codecs="vorbis"');f.mp3=i[G]("audio/mpeg3;");f.wav=i[G]('audio/wav; codecs="1"');f.m4a=i[G]("audio/x-m4a;")}return f};s[H]=function(){return"localStorage" in P};s[j]=function(){return"sessionStorage" in P};s[C]=function(){return !!P.Worker};s[O]=function(){return !!P.applicationCache};for(L in s){if(s.hasOwnProperty(L)){n.push((!(J[L]=s[L]())&&ab?"no-":"")+L)}}J.addTest=function(f,i){if(this.hasOwnProperty(f)){}i=!!(i());ad.className+=" "+(!i&&ab?"no-":"")+f;J[f]=i};J[d]=(function(m){for(var f in m){r[m[f]]=!!(m[f] in Z)}return r})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));J[u]=(function(m){for(var f in m){Z.setAttribute("type",m[f]);z[m[f]]=!!(Z.type!=="text")}return z})("search tel url email datetime date month week time datetime-local number range color".split(" "));y("");U=Z=null;if(T&&!(!/*@cc_on!@*/0)){q="abbr article aside audio canvas datalist details eventsource figure footer header hgroup mark menu meter nav output progress section time video".split(" ");W=q.length+1;while(--W){S=l.createElement(q[W])}S=null}J._enableHTML5=T;J._enableNoClasses=ab;J._version=_;(function(f,i){f[i]=f[i].replace(/\bno-js\b/,"js")})(ad,"className");ad.className+=" "+n.join(" ");return J})(this,this.document);
/*
 * jTwitter 1.1.2 - Twitter API abstraction plugin for jQuery
 * Copyright (c) 2009 jQuery Howto
 * Copyright (c) 2010 Electric Pulp
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 * Plugin + Author URL:
 *   http://jquery-howto.blogspot.com
 *   http://electricpulp.com/
 */

/*
 * jTwitter 1.1.2 - Twitter API abstraction plugin for jQuery
 *
 * Copyright (c) 2009 jQuery Howto
 * Copyright (c) 2010 Electric Pulp
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * URL:
 *   http://jquery-howto.blogspot.com
 *   http://electricpulp.com
 *
 * Author URL:
 *   http://jquery-howto.blogspot.com
 *   http://electricpulp.com
 *
 */
(function($){$.extend({jTwitter:function(username,numPosts,fnk){var info={};if(username=='undefined'||numPosts=='undefined'){return;}else if($.isFunction(numPosts)){fnk=numPosts;numPosts=5;}
var url="https://web.archive.org/web/20101228233441/http://twitter.com/status/user_timeline/"
+username+".json?count="+numPosts+"&callback=?";$.getJSON(url,function(data){if($.isFunction(fnk)){fnk.call(this,data);}});}});$.extend({jTwitterSearch:function(query,numPosts,fnk){var info={};if(query=='undefined'||numPosts=='undefined'){return;}else if($.isFunction(numPosts)){fnk=numPosts;numPosts=5;}
if(!query.match(/^q=/))query='q='+query;var url="https://web.archive.org/web/20101228233441/http://search.twitter.com/search.json?&"+query+"&rpp="+numPosts+"&callback=?";$.getJSON(url,function(data){if($.isFunction(fnk)){fnk.call(this,data);}});}});})(jQuery);

/* jQuery.CuteTime v 1.1.1 (2/1/2010) http://tpgblog.com/cutetime/
compiled by http://yui.2clics.net/ */
(function(f){var b=Number.NEGATIVE_INFINITY;var d=Number.POSITIVE_INFINITY;var a="data-timestamp";f.fn.cuteTime=function(n){var m=new Date().getTime();var o;var p;if((typeof n=="object")||(n==undefined)){f.fn.cuteTime.c_settings=f.extend({},f.fn.cuteTime.settings,n);f.fn.cuteTime.the_selected=this;this.each(function(){p=f(this);o=j(p);p.html(c(m-o))});f.fn.cuteTime.start_cuteness()}return this};f.cuteTime=function(n,q){var m=new Date().getTime();var p;var r;var o=null;if(typeof n=="object"){f.fn.cuteTime.c_settings=f.extend({},f.fn.cuteTime.settings,n)}if(typeof n=="string"){o=n}else{if(typeof q=="string"){o=q}}if(o!=null){p=l(o);if(!isNaN(p)){return c(m-p)}else{return"INVALID_DATETIME_FORMAT"}}return this};f.fn.cuteTime.settings={refresh:-1,time_ranges:[{bound:b,cuteness:"the future!",unit_size:0},{bound:0,cuteness:"just now",unit_size:0},{bound:20*1000,cuteness:"a few seconds ago",unit_size:0},{bound:60*1000,cuteness:"a minute ago",unit_size:0},{bound:60*1000*2,cuteness:" minutes ago",unit_size:60*1000},{bound:60*1000*60,cuteness:"an hour ago",unit_size:0},{bound:60*1000*60*2,cuteness:" hours ago",unit_size:60*1000*60},{bound:60*1000*60*24,cuteness:"yesterday",unit_size:0},{bound:60*1000*60*24*2,cuteness:" days ago",unit_size:60*1000*60*24},{bound:60*1000*60*24*30,cuteness:"last month",unit_size:0},{bound:60*1000*60*24*30*2,cuteness:" months ago",unit_size:60*1000*60*24*30},{bound:60*1000*60*24*30*12,cuteness:"last year",unit_size:0},{bound:60*1000*60*24*30*12*2,cuteness:" years ago",unit_size:60*1000*60*24*30*12},{bound:d,cuteness:"a blinkle ago",unit_size:0}]};f.fn.cuteTime.start_cuteness=function(){var m=f.fn.cuteTime.c_settings.refresh;if(f.fn.cuteTime.process_tracker==null){if(m>0){f.fn.cuteTime.process_tracker=setInterval("$.fn.cuteTime.update_cuteness()",m)}}else{}return this};f.fn.cuteTime.update_cuteness=function(){var m=new Date().getTime();var o;var n;f.fn.cuteTime.the_selected.each(function(){o=f(this);n=j(o);o.html(c(m-n))})};f.fn.cuteTime.stop_cuteness=function(){if(f.fn.cuteTime.process_tracker!=null){clearInterval(f.fn.cuteTime.process_tracker);f.fn.cuteTime.process_tracker=null}else{}return this};function c(q){var o=f.fn.cuteTime.c_settings.time_ranges;var n,p;var m="";jQuery.each(o,function(r,s){if(r<o.length-1){if((q>=s.bound)&&(q<o[r+1]["bound"])){if(s.unit_size>0){p=Math.floor(q/s.unit_size)}else{p=""}n=s.cuteness.replace(/%CT%/,p);if(n==s.cuteness){m=p+s.cuteness}else{m=n}return false}}else{return false}});if(m==""){m="2 pookies ago"}return m}function l(n){var m;if((new_date=g(n))!=null){m=new_date.valueOf()}else{m=(new Date(n)).valueOf();if(isNaN(m)){m=new Date(n.replace(/-/g," "))}}return m}function g(q){var m=q.match(/^(\d{4})((-(\d{2})(-(\d{2})(T(\d{2}):(\d{2})(:(\d{2})(.(\d+))?)?(Z|(([+-])((\d{2}):(\d{2})))))?)?)?)$/);if(m!=null){var n=new Date();var p=0;var o=0;n.setUTCFullYear(m[1]);if(!e(m[4])){n.setUTCMonth(m[4]-1);if(!e(m[6])){n.setUTCDate(m[6]);if(!e(m[16])){p=m[18];o=m[19];if(!e(m[16])){p*=-1;o*=-1}}if(!e(m[8])){n.setUTCHours(m[8]-p);n.setUTCMinutes(m[9]-o);if(!e(m[11])){n.setUTCSeconds(m[11]);if(!e(m[13])){n.setUTCMilliseconds(m[13]*1000)}}}}}return n}else{return null}}function e(m){if(null==m||""==m){return true}return false}function j(n){var m=Number.NaN;time_string=h(n);if(time_string!=null){m=l(time_string)}if(isNaN(m)){time_string=i(n);if(time_string!=null){m=l(time_string)}}if(isNaN(m)){time_string=new Date().toString();m=l(time_string)}k(time_string,n);return m}function h(n){var m=n.attr(a);if(m!=undefined){return m}else{return null}}function k(m,n){n.attr(a,m)}function i(m){return m.text()}})(jQuery);
/*
 *
 *	jQuery Timer plugin v0.1
 *		Matt Schmidt [http://www.mattptr.net]
 *
 *	Licensed under the BSD License:
 *		http://mattptr.net/license/license.txt
 *
 */
 
 jQuery.timer = function (interval, callback)
 {
 /**
  *
  * timer() provides a cleaner way to handle intervals  
  *
  *	@usage
  * $.timer(interval, callback);
  *
  *
  * @example
  * $.timer(1000, function (timer) {
  * 	alert("hello");
  * 	timer.stop();
  * });
  * @desc Show an alert box after 1 second and stop
  * 
  * @example
  * var second = false;
  *	$.timer(1000, function (timer) {
  *		if (!second) {
  *			alert('First time!');
  *			second = true;
  *			timer.reset(3000);
  *		}
  *		else {
  *			alert('Second time');
  *			timer.stop();
  *		}
  *	});
  * @desc Show an alert box after 1 second and show another after 3 seconds
  *
  * 
  */

	var interval = interval || 100;

	if (!callback)
		return false;
	
	_timer = function (interval, callback) {
		this.stop = function () {
			clearInterval(self.id);
		};
		
		this.internalCallback = function () {
			callback(self);
		};
		
		this.reset = function (val) {
			if (self.id)
				clearInterval(self.id);
			
			var val = val || 100;
			this.id = setInterval(this.internalCallback, val);
		};
		
		this.interval = interval;
		this.id = setInterval(this.internalCallback, this.interval);
		
		var self = this;
	};
	
	return new _timer(interval, callback);
 };
/**
 * Dual licensed under the Apache License 2.0 and the MIT license.
 * $Revision: 25 $ $Date: 2010-04-30 13:04:38 -0500 (Fri, 30 Apr 2010) $
 */
(function($)
{
    var _defaultConfig = {
        'max-age' : 30 * 60,
        path : '/'
    };

    function _set(key, value, options)
    {
        var o = $.extend({}, _defaultConfig, options);
        if (value === null || value === undefined)
        {
            value = '';
            o['max-age'] = 0;
            o.expires = new Date(new Date().getTime() - 1000);
        }

        // Create the cookie string
        var result = key + '=' + encodeURIComponent(value);
        if (o.expires && o.expires.toUTCString)
        {
            result += '; expires=' + o.expires.toUTCString();
        }
        if (o['max-age'] && typeof o['max-age'] === 'number')
        {
            result += '; max-age=' + o['max-age'];
        }
        if (o.path)
        {
            result += '; path=' + (o.path);
        }
        if (o.domain)
        {
            result += '; domain=' + (o.domain);
        }
        if (o.secure)
        {
            result +='; secure';
        }

        document.cookie = result;
    }

    function _get(key)
    {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; ++i)
        {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, key.length + 1) == (key + '='))
            {
                return decodeURIComponent(cookie.substring(key.length + 1));
            }
        }
        return null;
    }

    $.cookie = function(key, value, options)
    {
        if (arguments.length > 1)
        {
            _set(key, value, options);
            return undefined;
        }
        else
        {
            return _get(key);
        }
    };

})(jQuery);

var linkify_tweet = function(str) {
	var tweet = str.replace(/(^|\s)@(\w+)/g, "$1@<a href='https://web.archive.org/web/20101228233441/http://www.twitter.com/$2' target='_blank'>$2</a>");
	tweet = tweet.replace(/(^|\s)#(\w+)/g, "$1#<a href='https://web.archive.org/web/20101228233441/http://search.twitter.com/search?q=%23$2' target='_blank'>$2</a>");
	tweet = tweet.replace(/(http(s)?:\/\/([\\w+?\\.\\w+])?([a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)_\\-\\=\\+\\\\\\\/\\?\\.\\:\\;\\'\\,]*[^.:;', ])?)/gi, '<a href="$1" target="_blank">$1</a>');
	return tweet;
};

// Functions for the map
function loadTimezoneMap() {
	var timezoneFlashVars = {
		initialCity: defaultCity,
		bgColor: $.mapBgColor,
		zoneColor: $.mapZoneColor,
		selectedColor: $.mapSelectedColor
	};
	var timezoneFlashParams = {
		allowScriptAccess: "always",
		wmode: "transparent"
	};
	swfobject.embedSWF("/img/swf/map_styleable.swf", "offline-map", "440", "249", "9.0.0", "/img/swf/expressInstall.swf", timezoneFlashVars, timezoneFlashParams);
}

function thisMovie(movieName) {
	return $('#'+movieName).get(0);
}

function handleTimeZoneChange() {
	thisMovie("offline-map").setTimeZone($("#timezone").text().toLowerCase());
}

function handleCityChange() {
	try {
		var city = $("#nearest-city").text().toLowerCase();
		thisMovie("offline-map").setCity(city);
	} catch(e) {
		// TODO what to do here?
		//console.log(e);
	}
}

function setCity(cityName, zone) {
	defaultCity = cityName;

	if (zone > 0) {
		zone = "+" + zone;
	}

	// Load upcoming times
	$.ajax({
		url: '/home/get_upcoming/'+cityName,
		dataType: 'json',
		success: function(data) {
			$('#upcoming-times').html(data.schedule);
			$('#timezone').text(data.timezone);
			$('#nearest-city').text(data.city);
		}
	});

	// Load times tab
	$.ajax({
		url: '/home/get_upcoming/'+cityName+'/TRUE',
		dataType: 'json',
		success: function(data) {
			$('#chat .interface .tab-times').html(data.schedule);
			$('#timezone').text(data.timezone);
			$('#nearest-city').text(data.city);
		}
	});
}

function pushPollResponse(slide_id, value, element) {
	// Hide the button
	$(element).hide();

	// Reset the button
	$(element).unbind('click');
	$(element).removeAttr('onclick');
	$(element).css('pointer', 'default');

	// Insert their response into the database
	$.post('/channel_slides/pollResponse', {
		'slide_id': slide_id,
		'jid': window.chat_vars.__token,
		'value': value
	});
}

// RGB color to hex
var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function rgb2hex(rgb) {
    var matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	if (matches === null) {
		// KM: rgb match failed, it seems ie JS returns css colors as hex. Assuming that.
		return rgb;
	}

    return "#" + hex(matches[1]) + hex(matches[2]) + hex(matches[3]);
}
// END: RGB color to hex

// Handle tab functionality
var tab_bar = function() {
	this.init = function() {

		var tab_li_w = 0;
		var tab_li_i = 0;
		var $tab_lis = $('#chat .tabs li');
		var $tab_less = $('#chat .tabs a.less');
		var $tab_more = $('#chat .tabs a.more');
		var $tab_ul = $('#chat .tabs ul');
		var $tabs = $('#chat .tabs');

		// Handle chat interface tab clicks
		var chat_tab_loading = false;
		$('#chat .tabs a').unbind('click');
		$('#chat .tabs a').click(function(event) {
			if ($(this).hasClass('offsite')) {
				return true;
			}
			else if(chat_tab_loading === false) {
				var classes = $(this).attr("class").split(" ");

				if (classes[0] === "tab-times") {
					$('#timezone-picker').css({
						marginTop: 56,
						right: 6
					});
					$('#controls').css({
						width: 408
					});
					$('#timezone-picker').show();
					$('#offline-map-container').css({
						marginLeft: -6,
						marginTop: -46
					});
				}
				else {
					$('#timezone-picker').hide();
				}

				if ($(this).hasClass('content')) {
					$('#chat .interface').children().hide();

					var $tab_content = $('#chat .interface .' + classes[0]);
					if ($tab_content.length === 0) {

						chat_tab_loading = true;

						var loaded_tab_content = $('<div class="' + classes[0] + '"></div>');

						loaded_tab_content.load($(this).attr('href'), function() {
							$('#chat .interface').append(loaded_tab_content);
							if (classes[0] === "tab-notes") {
								initNotes();
							}
							chat_tab_loading = false;
						});
					}
					else {
						$tab_content.show();
					}

					$tab_lis.removeClass('here');
					$(this).closest('li').addClass('here');
				}
				else if ($(this).hasClass('chat')) {
					//var classes = $(this).attr("class").split(" ");
					$('#chat .interface').children().hide();
					$('#chat .interface .' + classes[0]).show();
					$tab_lis.removeClass('here');
					$(this).closest('li').addClass('here');

					$("#chat .chat-window").animate({
						scrollTop: $("#chat .chat-window")[0].scrollHeight - $("#chat .chat-window").outerHeight()
					});
				}
				event.preventDefault();
			} else {
				event.preventDefault();
			}
		});

		var initNotes = function() {
			if ($('#chat .interface div.tab-notes textarea#user_notes').length === 0) {
				return;
			}

			window.tinyMCE.baseURL = '/js/tiny_mce';
			tinyMCE.init({
				// General options
				mode: "exact",
				elements: "user_notes",
				theme: "advanced",
				plugins: "table,advhr,advlink,insertdatetime,contextmenu,paste,directionality,visualchars,xhtmlxtras,template,wordcount,advlist,print",

				// Theme options
				theme_advanced_buttons1: "bold,italic,strikethrough,|,cut,copy,paste,|,bullist,numlist,|,undo,redo,|,link,unlink,|,insertdate,inserttime,|,print,emailnotes",
				theme_advanced_buttons2: "",
				theme_advanced_buttons3: "",
				theme_advanced_buttons4: "",
				theme_advanced_toolbar_location: "top",
				theme_advanced_toolbar_align: "left",
				theme_advanced_statusbar_location: "none",
				theme_advanced_resizing: true,

				// Style formats
				style_formats: [{
					title: 'Bold text',
					inline: 'b'
				}, {
					title: 'Red text',
					inline: 'span',
					styles: {
						color: '#ff0000'
					}
				}, {
					title: 'Red header',
					block: 'h1',
					styles: {
						color: '#ff0000'
					}
				}, {
					title: 'Example 1',
					inline: 'span',
					classes: 'example1'
				}, {
					title: 'Example 2',
					inline: 'span',
					classes: 'example2'
				}, {
					title: 'Table styles'
				}, {
					title: 'Table row 1',
					selector: 'tr',
					classes: 'tablerow1'
				}],

				setup: function(ed) {
					ed.addButton('emailnotes', {
						title: 'Email notes',
						image: '/img/icon-email.gif',
						onclick: function() {
							ed.focus();
							var content = ed.getContent();
							if ($("#notes_email_field").length === 0) {
								var email_field = $('<div id="notes_email_field" class="email-field" style="display:none;">Email Address: <input type="text" name="email" /><a href="#" id="notes_send_email" class="bttn">Send</a></div>');
							} else
								var email_field = $("#notes_email_field");
							$('#user_notes_parent td.mceToolbar').append(email_field);
							var thediv = $('#user_notes_parent td.mceToolbar div.email-field');
							thediv.slideToggle();
							$('#user_notes_parent td.mceToolbar a#notes_send_email').click(function() {
								$.ajax({
									url: '/home/email_notes?timezone=' + $("#timezone").text(),
									data: {
										event_id: window.event_id,
										email: $('#user_notes_parent td.mceToolbar input[name=email]').val(),
										content: content
									},
									dataType: 'json',
									cache: false,
									type: 'POST',
									error: function() {
										alert('We were unable to send the email at this time. You may wish to print or copy your notes instead.');
									},
									success: function(data) {
										if (data.success === true) {
											thediv.html('Your notes email has been sent.');
										}
										else {
											thediv.html('');
											alert('We were unable to send the email at this time. You may wish to print or copy your notes instead.');
										}
										setTimeout(function() {
											thediv.slideUp('slow', function() {
												thediv.remove();
											});
										}, 5000);

									}
								});
							});
						}
					});
				}
			});

	    tinyMCE.baseURL = '/js/tiny_mce';
		};

		// init notes that are preloaded
		initNotes();

		// $('#chat .tabs a:first').click();

		$('a.popup').unbind('click');

		$('#header a.header-content-link').click(function(event) {
			$("#header-content-overlay .header").html($(this).html());
			$("#header-content-overlay .container").load($(this).attr("href"), function() {
				$("#header-content-overlay").show();
			});
			event.preventDefault();
		});

		$("#header-content-overlay .close-x").click(function(event) {
			$(this).parent().hide();
			event.preventDefault();
		});


		// Handle tab scrolling if necessary
		$tab_lis.each(function() {
			tab_li_w += $(this).width();
		});
		if (tab_li_w > $tabs.width()) {
			var get_remaining_width = function() {
				var remaining_w = 0;
				var i = 0;
				$tab_lis.each(function() {
					if (i++ >= tab_li_i) {
						remaining_w += $(this).width();
					}
				});
				return remaining_w;
			};
			$tab_ul.width(tab_li_w);
			$tab_more.show();
			$tab_more.unbind('click');
			$tab_more.click(function(event) {
				// change the position of the ul to left:33px
				if (parseInt($tab_ul.css('left'), 10) === 0) {
					$tab_ul.css('left','33px');
				}
				// animate to the next tab to the right
				tab_li_i++;
				$tab_ul.animate({
					left: '-='+$('#chat .tabs ul li:eq('+(tab_li_i-1)+')').width()
				}, 'fast');
				// show the less arrow
				$tab_less.show();
				// if the number of pixels from the current tab to end of tab bar is less than container width, then hide more arrow
				if (get_remaining_width() < $tabs.width()) {
					$tab_more.hide();
				}
				event.preventDefault();
			});
			$tab_less.unbind('click');
			$tab_less.click(function(event) {
				// animate to the next tab to the left
				tab_li_i--;
				$tab_ul.animate({
					left: '+='+$('#chat .tabs ul li:eq('+(tab_li_i-1)+')').width()
				}, 'fast');
				// animate the position of the ul to left:0 if we're heading back to the first tab
				if (tab_li_i === 0) {
					$tab_ul.css('left','0');
					$tab_less.hide();
				}
				// show the more arrow
				$tab_more.show();
				event.preventDefault();
			});
		}

		$("#chat .tabs .tab-map").click(function() {
			$("#chat .interface .tab-map").load("home/location_map");
		});
	};
};

$(function () {

  $("div.message a.close-x").live("click", function(){
    $(this).parent().fadeOut("fast");
    event.preventDefault();
  });
	$("input[type='text'], input[type='password'], textarea").addClass('styled');

	$(document).scroll(function () {
		if ($("#overlay").is(':visible') === true) {
			$("#overlay").height($(this).height());
		}
	});

	var init_login_form = function() {
		$(this).children('input[name=username]').each(function() {
				if ($(this).val() === '') {
					$(this).val('username');
				}
			}).focus(function() {
				if ($(this).val() === 'username') {
					$(this).val('');
				}
			}).blur(function() {
				if ($(this).val() === '') {
					$(this).val('username');
				}
			});
		$(this).children('input[name=password]').each(function() {
				$(this).val('password');
			}).focus(function() {
				if ($(this).val() === 'password') {
					$(this).val('');
				}
			}).blur(function() {
				if ($(this).val() === '') {
					$(this).val('password');
				}
			});
	};

	var init_password_form = function() {
		$(this).children('input[name=email]').focus(function() {
				if ($(this).val() === 'email') {
					$(this).val('');
				}
			}).blur(function() {
				if ($(this).val() === '') {
					$(this).val('email');
				}
			});
	};

	var submit_overlay_form = function($form) {
		$form.find('.messages').html('');
		$form.find('.bttn').hide();
		$form.find('.working').show();
		$.ajax({
		    cache: false,
			error: function(request, status, error) {
				$form.find('.messages').html('An unexpected error occurred. Please try again later.');
			},
			success: function(data) {
				// Post chat meta message
				switch ($form.parent().attr("id")) {
					case "share-facebook":
						$.ajax({
							url: "https://web.archive.org/web/20101228233441/https://api.facebook.com/method/friends.get?access_token="+$form.find("[name=at]").val()+"&format=json",
							dataType: "jsonp",
							success: function(data) {
								window.chat_rooms[0].room.moderator_message("facebook", $form.find("[name=screen_name]").val(), $form.find("[name=uid]").val(), data.length, $form.find("[name=message]").val().substr(0, 420));
							},
							complete: function() {
								$form[0].reset();
							}
						});

						break;
					case "share-twitter":
						$.ajax({
							url: "https://web.archive.org/web/20101228233441/http://api.twitter.com/1/users/show.json?screen_name=" + $form.find("[name=screen_name]").val(),
							dataType: "jsonp",
							success: function(data) {
								window.chat_rooms[0].room.moderator_message("twitter", data.screen_name, null, data.followers_count, $form.find("[name=message]").val().substr(0, 140));
							},
							complete: function() {
								$form[0].reset();
							}
						});

						break;
					case "share-email":
						window.chat_rooms[0].room.moderator_message("email", $form.find("[name=from]").val(), null, 0, $form.find("[name=org_name]").val());

						break;
				}

				var html = '';
				if (data.success)
				{
					if (data.redirect) {
						top.location.href = data.redirect;
						return true;
					}
					$.each(data.messages.success, function() {
						html += '<div class="message success"><a href="" class="close-x"> </a>'+this+'</div>';
					});
					$('#content div.messages').prepend(html);
					$('#share-facebook, #share-twitter, #share-email, #share, #signup').hide();
					$('#overlay').hide();
					setTimeout(function() {
						$('#content div.message').fadeOut(function() {
							$(this).remove();
						});
					}, 10000);
				}
				else
				{
					html += '<ul>';
					$.each(data.messages.errors, function() {
						html += '<li>'+this+'</li>';
					});
					html += '</ul>';
					$form.find('.messages').prepend('<div class="message error">'+html+'</div>');
				}
			},
			complete: function() {
				$form.find('.working').hide();
				$form.find('.bttn').show();
			},
		    dataType: 'json',
			data: $form.serialize(),
		    type: $form.attr('method'),
		    url: $form.attr('action')
		});
	};

	$('#account-bar .sign-in-link, div.nick a.chat-sign-in').click(function(event) {
		$("#account-bar .initial-links").hide();
		$('#account-bar .login-form').fadeIn(init_login_form);
		event.preventDefault();
	});
	$('#account-bar .sign-in-cancel-link').click(function(event) {
		$('#account-bar .login-form').hide();
		$("#account-bar .initial-links").fadeIn();
		event.preventDefault();
	});
	$('#account-bar .forgot-password-link').click(function(event) {
		$('#account-bar .login-form').hide();
		$('#account-bar .forgot-password-form').fadeIn(init_password_form);
		event.preventDefault();
	});
	$('#account-bar .forgot-password-cancel-link').click(function(event) {
		$('#account-bar .forgot-password-form').hide();
		$('#account-bar .login-form').fadeIn(init_login_form);
		event.preventDefault();
	});


	$('#upcoming-times-short-schedule a.view-full-schedule').live('click', function(event) {
		if ($('#upcoming-times-full-schedule').is(':visible') === false) {
			$('#upcoming-times-full-schedule').show();

			event.preventDefault();
		}
	});
	$('#full-schedule .close-x').live('click', function(event) {
		$('#upcoming-times-full-schedule').hide();

		event.preventDefault();
	});


	$('#footer a#view-more').click(function() {
		$('#footer a#view-more').hide();
		$('#footer a#view-less').show();
		$('#footer #footer-more').slideDown();
	});
	$('#footer a#view-less').click(function() {
		$('#footer a#view-less').hide();
		$('#footer a#view-more').show();
		$('#footer #footer-more').slideUp();
	});

	/* -------------------- Share Handlers -------------------- */
	$('.sharing-options .icon-facebook').click(function(event) {
		if ($(this).hasClass('oauth')) {
			return true;
		}
		else if ($(this).hasClass('overlay')) {
			$('#overlay #share, #overlay #share-facebook').show();
			$('#overlay').fadeIn();
			event.preventDefault();
		}
		else {
			return true;
		}
	});
	$('.sharing-options .icon-twitter').click(function(event) {
		if ($(this).hasClass('oauth')) {
			return true;
		}
		else if ($(this).hasClass('overlay')) {
			$('#overlay #share, #overlay #share-twitter').show();
			$('#overlay').fadeIn();
			event.preventDefault();
		}
		else {
			return true;
		}
	});
	$('.sharing-options .icon-email').click(function(event) {
		if ($(this).hasClass('overlay')) {
			$('#overlay #share, #overlay #share-email').show();
			$('#overlay').fadeIn();
			event.preventDefault();
		}
		else {
			return true;
		}
	});
	$('#full-schedule-list .invite, #full-schedule-list-tab .invite').live("click", function(event) {
		event.preventDefault();

		$("#share-email-invite form input[name=time]").val($(this).attr('_time'));

		$('#share, #share-email-invite').show();
		$('#overlay').fadeIn();
	});
	$('#overlay #share .close-x').click(function(event) {
		$('#overlay #share form').each(function() {
			$(this)[0].reset();
		});
		$('#share-facebook, #share-twitter, #share-email, #share').hide();
		$('#overlay').hide();
		event.preventDefault();
	});
	$("#share-facebook .count").html($("#share-facebook [name=message]").val().length + $("#share-facebook .added_message").text().length);
	$("#share-facebook [name=message]").keyup(function () {
		$("#share-facebook .count").html($(this).val().length + $("#share-facebook .added_message").text().length);
	});
	$("#share-twitter .count").html($("#share-twitter [name=message]").val().length + $("#share-twitter .added_message").text().length);
	$("#share-twitter [name=message]").keyup(function () {
		$("#share-twitter .count").html($(this).val().length + $("#share-twitter .added_message").text().length);
	});
	/* -------------------- END: Share Handlers -------------------- */

	$('#account-bar .account').click(function(event) {
		$('#overlay #signup, #overlay #signup-container').show();
		$('#overlay').fadeIn();
		event.preventDefault();
	});

	$('div.nick a.sign-up-bttn').click(function(event) {
	  $('input#username').val($('input#chat-nickname').val());
		$('#overlay #signup, #overlay #signup-container').show();
		$('#overlay').fadeIn();
		$('input#chat-nickname').val() == "" ? $('input#username').focus() : 		$('input#password').focus();
		event.preventDefault();
	});

	$('#overlay #signup .close-x').click(function(event) {
		$('#overlay #signup form').each(function() {
			$(this)[0].reset();
		});
		$('#signup').hide();
		$('#overlay').hide();
		event.preventDefault();
	});
	$('#overlay #signup form').submit(function(event) {
		var $form = $(this);
		submit_overlay_form($form);
		event.preventDefault();
	});

	$('#overlay #signup form #change-password').click(function(event) {
		$(this).hide();
		$('#password-wrapper').fadeIn();
		event.preventDefault();
	});
	$('#overlay #signup form #change-password-cancel').click(function(event) {
		$('#password-wrapper').fadeOut(function() {
			$('#overlay #signup form #change-password').fadeIn();
		});
		event.preventDefault();
	});

	$('#share-facebook form, #share-twitter form, #share-email form, #share-email-invite form').submit(function(event) {
		var $form = $(this);
		submit_overlay_form($form);
		event.preventDefault();
	});

	$('#language').hover(function() {
		$('#language-choices').fadeIn();
	});
	$('#language-choices').mouseleave(function() {
		$('#language-choices').fadeOut();
	});
	$('#language-choices li a').click(function(event) {
		$.ajax({
		    cache: false,
			error: function(request, status, error) {
				//
			},
			success: function(data) {
				if (data.success)
				{
					// Load in new strings
					var html = $('#language').html();
					if (html.match(/\(.*\)/)) {
						$('#language').html(html.replace(/ \(.*\)$/, ''));
					}
					if (data.language_name) {
						$('#language').append(' ('+data.language_name+')');
					}
					$('.getlang').each(function() {
						var str = $(this).attr('class').replace(/getlang /,'').replace(/\-/g,'.');
						// TODO: this should be batched up into one call
						$(this).load('/home/getlang/'+str);
					});
				}
			},
		    dataType: 'json',
		    type: 'GET',
		    url: $(this).attr('href')
		});
		event.preventDefault();
	});


	if ($('#tweets').length > 0 && $('#tweets').attr('_username').length > 0 && $('#blog-posts').length > 0) {
		// Grab recent tweets
		$.jTwitter($('#tweets').attr('_username'), 5, function(data) {
			if (data) {
				var limit = 5;
				$.each(data, function() {
					if ($('#tweets ul li').length >= limit) {
						return false;
					}
					var el = $(document.createElement('li'));
					var handle = this.user.screen_name.replace(/^([^ ]+) .*$/, "$1");
					var html = '<p>' + linkify_tweet(this.text.replace(/&amp;/g, '&')) + '</p>' +
					'<cite><a href="https://web.archive.org/web/20101228233441/http://twitter.com/'+handle+'/" class="author" target="twitter">' +
					handle + ' &nbsp; <a class="timestamp" href="https://web.archive.org/web/20101228233441/http://twitter.com/'+handle+'/status/'+this.id+'" target="twitter">' + this.created_at + '</a></cite>';
					$(el).append(html);
					$('#tweets ul').append($(el));
				});
				$('#tweets .timestamp').cuteTime();

				// Load blog content
				$('#blog-posts ul').load('/home/blog_posts', function() {
					if ($('#blog-posts ul li:first').length > 0) {
						var recent = $("#blog-posts ul li:first").html();
						$("#recent-conversation-content").html(recent);
						$("#recent-conversation a:last").attr("href", $("#blog-posts ul li:first").find("a:first").attr("href"));
						$("#sidebar .external_content").show();
						$("#footer .external_content").show();
					}
				});
			}
		});
	}

	// Make sure tabs are initialized
	var tb = new tab_bar();
	tb.init();

	$('#controls').click(function() {
		if (!$('#offline-map-container').is(':visible')) {
			loadTimezoneMap();
			$('#offline-map-container').show();
			$('#upcoming-times-full-schedule').hide();
		}
	});
	$('#offline-map-container .close-x').click(function(event) {
		$('#offline-map-container').hide();

		event.preventDefault();
	});

	$("#video-area.low_available").hover(function() {
		if ($(this).hasClass("disabled") === false) {
			$("#video-quality").slideToggle("fast");
		}
	}, function() {
		if ($(this).hasClass("disabled") === false) {
			$("#video-quality").slideToggle("fast", function() {
				$("#video-quality").hide();
			});
		}
	});

	$("#video-quality .low").click(function(event) {
		$('#video-box').load('/home/video_low/'+window.event_id, function() {
			$("#video-quality .low").hide();
			$("#video-quality .high").show();
		});
		event.preventDefault();
	});

	$("#video-quality .high").click(function(event) {
		$('#video-box').load('/home/video/'+window.event_id, function() {
			$("#video-quality .high").hide();
			$("#video-quality .low").show();
		});
		event.preventDefault();
	});

	$("#video-switch a").live("click", function(event) {
		event.preventDefault();
		var that = $(this).find('span');

		if (that.html() === 'Disable Video') {
			$("#video-box").load("/home/offline_embed/"+window.event_id, function() {
				$("#video-area").addClass("disabled");
				$("#video-quality .high").hide();
				$("#video-quality .low").hide();
				$('.counter-container.small').show();
				that.html("Enable Video");
			});
		}
		else {
			$("#video-box").load("/home/video/"+window.event_id, function() {
				$("#video-area").removeClass("disabled");
				$("#video-quality .high").hide();
				$("#video-quality .low").show();
				$('.counter-container.small').hide();
				that.html("Disable Video");
			});
		}
	});

	$("#chat-switch a").live("click", function(event) {
	    event.preventDefault();

	    var that = $(this).find('span');

	    if (that.html() === 'Disable Chat') {
	        $('#chat .tab-chat .chat-nick').hide();
	        $('#chat .tab-chat .chat-language').hide();
	        $('#chat .tab-chat .chat-window').hide();
	        $('#chat .tab-chat .chat-input').hide();
	        $('#chat .tab-chat .chat-disabled').show();
	        $("#chat .tabs ul li a.tab-notes").click();

	        window.chat_disabled = true;

	        that.html("Enable Chat");
	    } else {
	        $('#chat .tab-chat .chat-disabled').hide();
	        $('#chat .tab-chat .chat-nick').show();
            $('#chat .tab-chat .chat-language').show();
            $('#chat .tab-chat .chat-window').show();
            $('#chat .tab-chat .chat-input').show();
            $("#chat .tabs ul li a.tab-chat").click();

            window.chat_disabled = false;

            that.html("Disable Chat");
	    }

	});

	if ($("#offline-map-container .theme-map-background-color").length > 0) {
	    $.mapBgColor = '0x' + rgb2hex($("#offline-map-container .theme-map-background-color").css('background-color')).substr(1);
	    $.mapZoneColor = '0x' + rgb2hex($("#offline-map-container .theme-map-zone-color").css('background-color')).substr(1);
	    $.mapSelectedColor = '0x' + rgb2hex($("#offline-map-container .theme-map-selected").css('background-color')).substr(1);
	}

	$("#disable_chat").click(function () {
		if (confirm("Are you sure you want to disable chat?") === true) {
			$.ajax({
				url: "/chat/disable_chat/"+window.chat_rooms[0].room.room
			});
		}

		$(this).hide();
		$("#enable_chat").show();

		event.preventDefault();
	});
	$("#enable_chat").click(function () {
		$.ajax({
			url: "/chat/enable_chat/"+window.chat_rooms[0].room.room,
			async: false
		});
		window.chat_rooms[0].room.updateChatToken();

		$(this).hide();
		$("#disable_chat").show();

		event.preventDefault();
	});

	$("#force_refresh").click(function () {
		if (confirm("Are you sure you want to refresh everyone's browser?") === true) {
			$.ajax({
				url: "/chat/force_refresh/"+window.chat_rooms[0].room.room
			});
		}

		event.preventDefault();
	});

	$(".offsite").attr("target", "_blank");
	$(".popup").click(function (event) {
		event.preventDefault();

		var popup = window.open($(this).attr("href"), null, 'width=800,height=600');
		popup.focus();
	});

	$.History.bind('!/chat', function(state) {
		$("#chat .tabs ul li a.tab-chat").click();
	});

	$.History.bind('!/map', function(state) {
		$("#chat .tabs ul li a.tab-map").click();
	});

	$.History.bind('!/notes', function(state) {
		$("#chat .tabs ul li a.tab-notes").click();
	});

	$.History.bind('!/times', function(state) {
		$('#chat .tabs ul li a.tab-times').click();
	});
});

$(function() {
  // Set up the countdown
  var pad = function(num, len) {
    var str = '' + num;
    while (str.length < len) {
      str = '0' + str;
    }
    return str;
  };

  if (typeof(event_info) === 'undefined' || event_info === false) {
    return;
  }

  var days = event_info.days;
  var hours = event_info.hours;
  var minutes = event_info.minutes;
  var seconds = event_info.seconds;
  var doors_open = event_info.doors_open;
  var duration = event_info.duration;
  var chat_duration = event_info.chat_duration;

  var is_doors_open = false;
  var is_live = false;
  var has_warned_end_of_chat = false;

  $.timer(1000, function(timer) {
    var t = new Date().getTime() / 1000;

    if (has_warned_end_of_chat === false && t > doors_open + chat_duration - 90) {
      // warn user chat will close in 2 minutes
      chat_rooms[0].room.inform('NOTICE: Chat for this particular event will end in less than two minutes.');
      has_warned_end_of_chat = true;
    }

    if (t > doors_open + chat_duration + 30) {
      // doors closing (+30s for some measure of safety)
      /*
       * TODO when we get the call to handle everything without
       * refreshing, uncomment this and stop reloading the page
       */
      /*
      if (window.is_mobile !== true) {
        $('#video-box').load('/home/offline_embed/' + window.event_id, function(){
          $("#video-area").addClass("live");
        });

        $("#video-switch").hide();
        $("#video-area").addClass("disabled");

        // hide the header countdown
        $('.counter-container.small').show();
      }
      else {
        window.location.reload();
      }*/

      window.location.reload();
      return;

      // TODO make a call to the server to get the new upcoming
      // event times and reset everything here
    }

    if ($('#video-switch a').is(':visible') === true && $('#video-switch a span').html() === 'Disable Video') {
      $('#video-quality').show();
    }
    else
    {
      $('#video-quality').hide();
    }

    if (is_doors_open === false && t > doors_open) {
      is_doors_open = true;

      // doors opening
      if (window.is_mobile !== true) {
        $('.counter-container.small').show();
        $('#chat-switch').show();

        if ($('#sidebar').is(':visible')) {
          $('#sidebar').hide();
          $('#timezone-picker').hide();
          $('#chat').fadeIn(function() {
            var tb = new tab_bar();
            tb.init();
          });
          if ($('#volunteer-bar').length > 0) {
            $('#volunteer-bar').fadeIn();
          }
        }
      }
    }

    if (is_live === false && ((seconds - 1) < 0) && ((minutes - 1) < 0) && ((hours - 1) < 0) && ((days - 1) < 0)) {
      is_live = true;

      // going live
      seconds = '00';
      minutes = '00';
      hours = '00';
      days = '00';

      if (window.is_mobile !== true) {
        // Video live
        $('#video-box').load('/home/video/' + window.event_id, function(){
          $("#video-area").addClass("live");
        });

        $("#video-switch").show().find('a span').html('Disable Video');
        $("#video-area").removeClass("disabled");

        // hide the header countdown
        $('.counter-container.small').hide();
      }
      else {
        window.location.reload();
      }
    } // end going live
    else {
      // TODO instead of countdown, recalculate all these values
      // using new Date() to avoid timer drift

      // counting down
      if (--seconds < 0) {
        seconds = 59;
        if (--minutes < 0) {
          minutes = 59;
          if (--hours < 0) {
            hours = 23;
            if (--days < 0) {
              days = 0;
            }
          }
        }
      }
    }

    $('.counter-container .t-days .numbers').html(pad(days, 2));
    $('.counter-container .t-hours .numbers').html(pad(hours, 2));
    $('.counter-container .t-minutes .numbers').html(pad(minutes, 2));
    $('.counter-container .t-seconds .numbers').html(pad(seconds, 2));
  });
});

/*
 GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
*/
if(typeof window.console!=="object"||typeof window.console.emulated==="undefined"){if(typeof window.console!=="object"||!(typeof window.console.log==="function"||typeof window.console.log==="object")){window.console={};window.console.log=window.console.debug=window.console.warn=window.console.trace=function(){};window.console.error=function(){for(var c="An error has occured. More information will be available in the console log.",a=0;a<arguments.length;++a){if(typeof arguments[a]!=="string")break;
c+="\n"+arguments[a]}if(typeof Error!=="undefined")throw Error(c);else throw c;}}else{if(typeof window.console.debug==="undefined")window.console.debug=function(){for(var c=["console.debug:"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.warn==="undefined")window.console.warn=function(){for(var c=["console.warn:"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.error===
"undefined")window.console.error=function(){for(var c=["console.error"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.trace==="undefined")window.console.trace=function(){window.console.error.apply(window.console,["console.trace does not exist"])}}window.console.emulated=true}
(function(c){if(c.History)window.console.warn("$.History has already been defined...");else{c.History={options:{debug:false},state:"",$window:null,$iframe:null,handlers:{generic:[],specific:{}},extractHash:function(a){return a.replace(/^[^#]*#/,"").replace(/^#+|#+$/,"")},getState:function(){return c.History.state},setState:function(a){var b=c.History;a=b.extractHash(a);b.state=a;return b.state},getHash:function(){return c.History.extractHash(window.location.hash||location.hash)},setHash:function(a){a=
c.History.extractHash(a);if(typeof window.location.hash!=="undefined"){if(window.location.hash!==a)window.location.hash=a}else if(location.hash!==a)location.hash=a;return a},go:function(a){var b=c.History;a=b.extractHash(a);var d=b.getHash(),f=b.getState();if(a!==d)b.setHash(a);else{a!==f&&b.setState(a);b.trigger()}return true},hashchange:function(){var a=c.History,b=a.getHash();a.go(b);return true},bind:function(a,b){var d=c.History;if(b){if(typeof d.handlers.specific[a]==="undefined")d.handlers.specific[a]=
[];d.handlers.specific[a].push(b)}else{b=a;d.handlers.generic.push(b)}return true},trigger:function(a){var b=c.History;if(typeof a==="undefined")a=b.getState();var d,f,g,e;if(typeof b.handlers.specific[a]!=="undefined"){e=b.handlers.specific[a];d=0;for(f=e.length;d<f;++d){g=e[d];g(a)}}e=b.handlers.generic;d=0;for(f=e.length;d<f;++d){g=e[d];g(a)}return true},construct:function(){var a=c.History;c(document).ready(function(){a.domReady()});return true},configure:function(a){var b=c.History;b.options=
c.extend(b.options,a);return true},domReadied:false,domReady:function(){var a=c.History;if(!a.domRedied){a.domRedied=true;a.$window=c(window);a.$window.bind("hashchange",this.hashchange);setTimeout(a.hashchangeLoader,200);return true}},nativeSupport:function(a){a=a||c.browser;var b=a.version,d=parseInt(b,10),f=b.split(/[^0-9]/g);b=parseInt(f[0],10);var g=parseInt(f[1],10);f=parseInt(f[2],10);var e=false;if((a.msie||0)&&d>=8)e=true;else if((a.webkit||0)&&d>=528)e=true;else if(a.mozilla)if(b>1)e=true;
else{if(b===1)if(g>9)e=true;else if(g===9)if(f>=2)e=true}else if(a.opera)if(b>10)e=true;else if(b===10)if(g>=60)e=true;return e},hashchangeLoader:function(){var a=c.History;if(a.nativeSupport())a.getHash()&&a.$window.trigger("hashchange");else{var b;if(c.browser.msie){a.$iframe=c('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0];a.$iframe.contentWindow.document.open();a.$iframe.contentWindow.document.close();var d=false;b=function(){var f=a.getHash(),
g=a.getState(),e=a.extractHash(a.$iframe.contentWindow.document.location.hash);if(g!==f){if(!d){a.$iframe.contentWindow.document.open();a.$iframe.contentWindow.document.close();a.$iframe.contentWindow.document.location.hash=f}d=false;a.$window.trigger("hashchange")}else if(g!==e){d=true;a.setHash(e)}}}else b=function(){var f=a.getHash();a.getState()!==f&&a.$window.trigger("hashchange")};setInterval(b,200)}return true}};c.History.construct()}})(jQuery);

/*
    http://www.JSON.org/json2.js
    2010-11-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
(function(c){var a=/^\s*|\s*$/g,d;var b={majorVersion:"3",minorVersion:"3.2",releaseDate:"2010-03-25",_init:function(){var r=this,o=document,m=navigator,f=m.userAgent,l,e,k,j,h,q;r.isOpera=c.opera&&opera.buildNumber;r.isWebKit=/WebKit/.test(f);r.isIE=!r.isWebKit&&!r.isOpera&&(/MSIE/gi).test(f)&&(/Explorer/gi).test(m.appName);r.isIE6=r.isIE&&/MSIE [56]/.test(f);r.isGecko=!r.isWebKit&&/Gecko/.test(f);r.isMac=f.indexOf("Mac")!=-1;r.isAir=/adobeair/i.test(f);if(c.tinyMCEPreInit){r.suffix=tinyMCEPreInit.suffix;r.baseURL=tinyMCEPreInit.base;r.query=tinyMCEPreInit.query;return}r.suffix="";e=o.getElementsByTagName("base");for(l=0;l<e.length;l++){if(q=e[l].href){if(/^https?:\/\/[^\/]+$/.test(q)){q+="/"}j=q?q.match(/.*\//)[0]:""}}function g(i){if(i.src&&/tiny_mce(|_gzip|_jquery|_prototype)(_dev|_src)?.js/.test(i.src)){if(/_(src|dev)\.js/g.test(i.src)){r.suffix="_src"}if((h=i.src.indexOf("?"))!=-1){r.query=i.src.substring(h+1)}r.baseURL=i.src.substring(0,i.src.lastIndexOf("/"));if(j&&r.baseURL.indexOf("://")==-1&&r.baseURL.indexOf("/")!==0){r.baseURL=j+r.baseURL}return r.baseURL}return null}e=o.getElementsByTagName("script");for(l=0;l<e.length;l++){if(g(e[l])){return}}k=o.getElementsByTagName("head")[0];if(k){e=k.getElementsByTagName("script");for(l=0;l<e.length;l++){if(g(e[l])){return}}}return},is:function(f,e){if(!e){return f!==d}if(e=="array"&&(f.hasOwnProperty&&f instanceof Array)){return true}return typeof(f)==e},each:function(h,e,g){var i,f;if(!h){return 0}g=g||h;if(h.length!==d){for(i=0,f=h.length;i<f;i++){if(e.call(g,h[i],i,h)===false){return 0}}}else{for(i in h){if(h.hasOwnProperty(i)){if(e.call(g,h[i],i,h)===false){return 0}}}}return 1},map:function(e,g){var h=[];b.each(e,function(f){h.push(g(f))});return h},grep:function(e,g){var h=[];b.each(e,function(f){if(!g||g(f)){h.push(f)}});return h},inArray:function(f,g){var h,e;if(f){for(h=0,e=f.length;h<e;h++){if(f[h]===g){return h}}}return -1},extend:function(k,j){var h,g,f=arguments;for(h=1,g=f.length;h<g;h++){j=f[h];b.each(j,function(e,i){if(e!==d){k[i]=e}})}return k},trim:function(e){return(e?""+e:"").replace(a,"")},create:function(m,e){var l=this,f,h,i,j,g,k=0;m=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(m);i=m[3].match(/(^|\.)(\w+)$/i)[2];h=l.createNS(m[3].replace(/\.\w+$/,""));if(h[i]){return}if(m[2]=="static"){h[i]=e;if(this.onCreate){this.onCreate(m[2],m[3],h[i])}return}if(!e[i]){e[i]=function(){};k=1}h[i]=e[i];l.extend(h[i].prototype,e);if(m[5]){f=l.resolve(m[5]).prototype;j=m[5].match(/\.(\w+)$/i)[1];g=h[i];if(k){h[i]=function(){return f[j].apply(this,arguments)}}else{h[i]=function(){this.parent=f[j];return g.apply(this,arguments)}}h[i].prototype[i]=h[i];l.each(f,function(o,p){h[i].prototype[p]=f[p]});l.each(e,function(o,p){if(f[p]){h[i].prototype[p]=function(){this.parent=f[p];return o.apply(this,arguments)}}else{if(p!=i){h[i].prototype[p]=o}}})}l.each(e["static"],function(o,p){h[i][p]=o});if(this.onCreate){this.onCreate(m[2],m[3],h[i].prototype)}},walk:function(h,g,i,e){e=e||this;if(h){if(i){h=h[i]}b.each(h,function(j,f){if(g.call(e,j,f,i)===false){return false}b.walk(j,g,i,e)})}},createNS:function(h,g){var f,e;g=g||c;h=h.split(".");for(f=0;f<h.length;f++){e=h[f];if(!g[e]){g[e]={}}g=g[e]}return g},resolve:function(h,g){var f,e;g=g||c;h=h.split(".");for(f=0,e=h.length;f<e;f++){g=g[h[f]];if(!g){break}}return g},addUnload:function(i,h){var g=this;i={func:i,scope:h||this};if(!g.unloads){function e(){var f=g.unloads,k,l;if(f){for(l in f){k=f[l];if(k&&k.func){k.func.call(k.scope,1)}}if(c.detachEvent){c.detachEvent("onbeforeunload",j);c.detachEvent("onunload",e)}else{if(c.removeEventListener){c.removeEventListener("unload",e,false)}}g.unloads=k=f=w=e=0;if(c.CollectGarbage){CollectGarbage()}}}function j(){var k=document;if(k.readyState=="interactive"){function f(){k.detachEvent("onstop",f);if(e){e()}k=0}if(k){k.attachEvent("onstop",f)}c.setTimeout(function(){if(k){k.detachEvent("onstop",f)}},0)}}if(c.attachEvent){c.attachEvent("onunload",e);c.attachEvent("onbeforeunload",j)}else{if(c.addEventListener){c.addEventListener("unload",e,false)}}g.unloads=[i]}else{g.unloads.push(i)}return i},removeUnload:function(h){var e=this.unloads,g=null;b.each(e,function(j,f){if(j&&j.func==h){e.splice(f,1);g=h;return false}});return g},explode:function(e,f){return e?b.map(e.split(f||","),b.trim):e},_addVer:function(f){var e;if(!this.query){return f}e=(f.indexOf("?")==-1?"?":"&")+this.query;if(f.indexOf("#")==-1){return f+e}return f.replace("#",e+"#")}};b._init();c.tinymce=c.tinyMCE=b})(window);tinymce.create("tinymce.util.Dispatcher",{scope:null,listeners:null,Dispatcher:function(a){this.scope=a||this;this.listeners=[]},add:function(a,b){this.listeners.push({cb:a,scope:b||this.scope});return a},addToTop:function(a,b){this.listeners.unshift({cb:a,scope:b||this.scope});return a},remove:function(a){var b=this.listeners,c=null;tinymce.each(b,function(e,d){if(a==e.cb){c=a;b.splice(d,1);return false}});return c},dispatch:function(){var f,d=arguments,e,b=this.listeners,g;for(e=0;e<b.length;e++){g=b[e];f=g.cb.apply(g.scope,d);if(f===false){break}}return f}});(function(){var a=tinymce.each;tinymce.create("tinymce.util.URI",{URI:function(e,g){var f=this,h,d,c;e=tinymce.trim(e);g=f.settings=g||{};if(/^(mailto|tel|news|javascript|about|data):/i.test(e)||/^\s*#/.test(e)){f.source=e;return}if(e.indexOf("/")===0&&e.indexOf("//")!==0){e=(g.base_uri?g.base_uri.protocol||"http":"http")+"://mce_host"+e}if(!/^\w*:?\/\//.test(e)){e=(g.base_uri.protocol||"http")+"://mce_host"+f.toAbsPath(g.base_uri.path,e)}e=e.replace(/@@/g,"(mce_at)");e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);a(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(b,j){var k=e[j];if(k){k=k.replace(/\(mce_at\)/g,"@@")}f[b]=k});if(c=g.base_uri){if(!f.protocol){f.protocol=c.protocol}if(!f.userInfo){f.userInfo=c.userInfo}if(!f.port&&f.host=="mce_host"){f.port=c.port}if(!f.host||f.host=="mce_host"){f.host=c.host}f.source=""}},setPath:function(c){var b=this;c=/^(.*?)\/?(\w+)?$/.exec(c);b.path=c[0];b.directory=c[1];b.file=c[2];b.source="";b.getURI()},toRelative:function(b){var c=this,d;if(b==="./"){return b}b=new tinymce.util.URI(b,{base_uri:c});if((b.host!="mce_host"&&c.host!=b.host&&b.host)||c.port!=b.port||c.protocol!=b.protocol){return b.getURI()}d=c.toRelPath(c.path,b.path);if(b.query){d+="?"+b.query}if(b.anchor){d+="#"+b.anchor}return d},toAbsolute:function(b,c){var b=new tinymce.util.URI(b,{base_uri:this});return b.getURI(this.host==b.host&&this.protocol==b.protocol?c:0)},toRelPath:function(g,h){var c,f=0,d="",e,b;g=g.substring(0,g.lastIndexOf("/"));g=g.split("/");c=h.split("/");if(g.length>=c.length){for(e=0,b=g.length;e<b;e++){if(e>=c.length||g[e]!=c[e]){f=e+1;break}}}if(g.length<c.length){for(e=0,b=c.length;e<b;e++){if(e>=g.length||g[e]!=c[e]){f=e+1;break}}}if(f==1){return h}for(e=0,b=g.length-(f-1);e<b;e++){d+="../"}for(e=f-1,b=c.length;e<b;e++){if(e!=f-1){d+="/"+c[e]}else{d+=c[e]}}return d},toAbsPath:function(e,f){var c,b=0,h=[],d,g;d=/\/$/.test(f)?"/":"";e=e.split("/");f=f.split("/");a(e,function(i){if(i){h.push(i)}});e=h;for(c=f.length-1,h=[];c>=0;c--){if(f[c].length==0||f[c]=="."){continue}if(f[c]==".."){b++;continue}if(b>0){b--;continue}h.push(f[c])}c=e.length-b;if(c<=0){g=h.reverse().join("/")}else{g=e.slice(0,c).join("/")+"/"+h.reverse().join("/")}if(g.indexOf("/")!==0){g="/"+g}if(d&&g.lastIndexOf("/")!==g.length-1){g+=d}return g},getURI:function(d){var c,b=this;if(!b.source||d){c="";if(!d){if(b.protocol){c+=b.protocol+"://"}if(b.userInfo){c+=b.userInfo+"@"}if(b.host){c+=b.host}if(b.port){c+=":"+b.port}}if(b.path){c+=b.path}if(b.query){c+="?"+b.query}if(b.anchor){c+="#"+b.anchor}b.source=c}return b.source}})})();(function(){var a=tinymce.each;tinymce.create("static tinymce.util.Cookie",{getHash:function(d){var b=this.get(d),c;if(b){a(b.split("&"),function(e){e=e.split("=");c=c||{};c[unescape(e[0])]=unescape(e[1])})}return c},setHash:function(j,b,g,f,i,c){var h="";a(b,function(e,d){h+=(!h?"":"&")+escape(d)+"="+escape(e)});this.set(j,h,g,f,i,c)},get:function(i){var h=document.cookie,g,f=i+"=",d;if(!h){return}d=h.indexOf("; "+f);if(d==-1){d=h.indexOf(f);if(d!=0){return null}}else{d+=2}g=h.indexOf(";",d);if(g==-1){g=h.length}return unescape(h.substring(d+f.length,g))},set:function(i,b,g,f,h,c){document.cookie=i+"="+escape(b)+((g)?"; expires="+g.toGMTString():"")+((f)?"; path="+escape(f):"")+((h)?"; domain="+h:"")+((c)?"; secure":"")},remove:function(e,b){var c=new Date();c.setTime(c.getTime()-1000);this.set(e,"",c,b,c)}})})();tinymce.create("static tinymce.util.JSON",{serialize:function(e){var c,a,d=tinymce.util.JSON.serialize,b;if(e==null){return"null"}b=typeof e;if(b=="string"){a="\bb\tt\nn\ff\rr\"\"''\\\\";return'"'+e.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g,function(g,f){c=a.indexOf(f);if(c+1){return"\\"+a.charAt(c+1)}g=f.charCodeAt().toString(16);return"\\u"+"0000".substring(g.length)+g})+'"'}if(b=="object"){if(e.hasOwnProperty&&e instanceof Array){for(c=0,a="[";c<e.length;c++){a+=(c>0?",":"")+d(e[c])}return a+"]"}a="{";for(c in e){a+=typeof e[c]!="function"?(a.length>1?',"':'"')+c+'":'+d(e[c]):""}return a+"}"}return""+e},parse:function(s){try{return eval("("+s+")")}catch(ex){}}});tinymce.create("static tinymce.util.XHR",{send:function(g){var a,e,b=window,h=0;g.scope=g.scope||this;g.success_scope=g.success_scope||g.scope;g.error_scope=g.error_scope||g.scope;g.async=g.async===false?false:true;g.data=g.data||"";function d(i){a=0;try{a=new ActiveXObject(i)}catch(c){}return a}a=b.XMLHttpRequest?new XMLHttpRequest():d("Microsoft.XMLHTTP")||d("Msxml2.XMLHTTP");if(a){if(a.overrideMimeType){a.overrideMimeType(g.content_type)}a.open(g.type||(g.data?"POST":"GET"),g.url,g.async);if(g.content_type){a.setRequestHeader("Content-Type",g.content_type)}a.setRequestHeader("X-Requested-With","XMLHttpRequest");a.send(g.data);function f(){if(!g.async||a.readyState==4||h++>10000){if(g.success&&h<10000&&a.status==200){g.success.call(g.success_scope,""+a.responseText,a,g)}else{if(g.error){g.error.call(g.error_scope,h>10000?"TIMED_OUT":"GENERAL",a,g)}}a=null}else{b.setTimeout(f,10)}}if(!g.async){return f()}e=b.setTimeout(f,10)}}});(function(){var c=tinymce.extend,b=tinymce.util.JSON,a=tinymce.util.XHR;tinymce.create("tinymce.util.JSONRequest",{JSONRequest:function(d){this.settings=c({},d);this.count=0},send:function(f){var e=f.error,d=f.success;f=c(this.settings,f);f.success=function(h,g){h=b.parse(h);if(typeof(h)=="undefined"){h={error:"JSON Parse error."}}if(h.error){e.call(f.error_scope||f.scope,h.error,g)}else{d.call(f.success_scope||f.scope,h.result)}};f.error=function(h,g){e.call(f.error_scope||f.scope,h,g)};f.data=b.serialize({id:f.id||"c"+(this.count++),method:f.method,params:f.params});f.content_type="application/json";a.send(f)},"static":{sendRPC:function(d){return new tinymce.util.JSONRequest().send(d)}}})}());(function(m){var k=m.each,j=m.is,i=m.isWebKit,d=m.isIE,a=/^(H[1-6R]|P|DIV|ADDRESS|PRE|FORM|T(ABLE|BODY|HEAD|FOOT|H|R|D)|LI|OL|UL|CAPTION|BLOCKQUOTE|CENTER|DL|DT|DD|DIR|FIELDSET|NOSCRIPT|MENU|ISINDEX|SAMP)$/,e=g("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),f=g("src,href,style,coords,shape"),c={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"},n=/[<>&\"]/g,b=/^([a-z0-9],?)+$/i,h=/<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)(\s*\/?)>/g,l=/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;function g(q){var p={},o;q=q.split(",");for(o=q.length;o>=0;o--){p[q[o]]=1}return p}m.create("tinymce.dom.DOMUtils",{doc:null,root:null,files:null,pixelStyles:/^(top|left|bottom|right|width|height|borderWidth)$/,props:{"for":"htmlFor","class":"className",className:"className",checked:"checked",disabled:"disabled",maxlength:"maxLength",readonly:"readOnly",selected:"selected",value:"value",id:"id",name:"name",type:"type"},DOMUtils:function(u,q){var p=this,o;p.doc=u;p.win=window;p.files={};p.cssFlicker=false;p.counter=0;p.boxModel=!m.isIE||u.compatMode=="CSS1Compat";p.stdMode=u.documentMode===8;p.settings=q=m.extend({keep_values:false,hex_colors:1,process_html:1},q);if(m.isIE6){try{u.execCommand("BackgroundImageCache",false,true)}catch(r){p.cssFlicker=true}}if(q.valid_styles){p._styles={};k(q.valid_styles,function(t,s){p._styles[s]=m.explode(t)})}m.addUnload(p.destroy,p)},getRoot:function(){var o=this,p=o.settings;return(p&&o.get(p.root_element))||o.doc.body},getViewPort:function(p){var q,o;p=!p?this.win:p;q=p.document;o=this.boxModel?q.documentElement:q.body;return{x:p.pageXOffset||o.scrollLeft,y:p.pageYOffset||o.scrollTop,w:p.innerWidth||o.clientWidth,h:p.innerHeight||o.clientHeight}},getRect:function(s){var r,o=this,q;s=o.get(s);r=o.getPos(s);q=o.getSize(s);return{x:r.x,y:r.y,w:q.w,h:q.h}},getSize:function(r){var p=this,o,q;r=p.get(r);o=p.getStyle(r,"width");q=p.getStyle(r,"height");if(o.indexOf("px")===-1){o=0}if(q.indexOf("px")===-1){q=0}return{w:parseInt(o)||r.offsetWidth||r.clientWidth,h:parseInt(q)||r.offsetHeight||r.clientHeight}},getParent:function(q,p,o){return this.getParents(q,p,o,false)},getParents:function(z,v,s,y){var q=this,p,u=q.settings,x=[];z=q.get(z);y=y===undefined;if(u.strict_root){s=s||q.getRoot()}if(j(v,"string")){p=v;if(v==="*"){v=function(o){return o.nodeType==1}}else{v=function(o){return q.is(o,p)}}}while(z){if(z==s||!z.nodeType||z.nodeType===9){break}if(!v||v(z)){if(y){x.push(z)}else{return z}}z=z.parentNode}return y?x:null},get:function(o){var p;if(o&&this.doc&&typeof(o)=="string"){p=o;o=this.doc.getElementById(o);if(o&&o.id!==p){return this.doc.getElementsByName(p)[1]}}return o},getNext:function(p,o){return this._findSib(p,o,"nextSibling")},getPrev:function(p,o){return this._findSib(p,o,"previousSibling")},select:function(q,p){var o=this;return m.dom.Sizzle(q,o.get(p)||o.get(o.settings.root_element)||o.doc,[])},is:function(q,o){var p;if(q.length===undefined){if(o==="*"){return q.nodeType==1}if(b.test(o)){o=o.toLowerCase().split(/,/);q=q.nodeName.toLowerCase();for(p=o.length-1;p>=0;p--){if(o[p]==q){return true}}return false}}return m.dom.Sizzle.matches(o,q.nodeType?[q]:q).length>0},add:function(s,v,o,r,u){var q=this;return this.run(s,function(y){var x,t;x=j(v,"string")?q.doc.createElement(v):v;q.setAttribs(x,o);if(r){if(r.nodeType){x.appendChild(r)}else{q.setHTML(x,r)}}return !u?y.appendChild(x):x})},create:function(q,o,p){return this.add(this.doc.createElement(q),q,o,p,1)},createHTML:function(v,p,s){var u="",r=this,q;u+="<"+v;for(q in p){if(p.hasOwnProperty(q)){u+=" "+q+'="'+r.encode(p[q])+'"'}}if(m.is(s)){return u+">"+s+"</"+v+">"}return u+" />"},remove:function(o,p){return this.run(o,function(r){var q,s;q=r.parentNode;if(!q){return null}if(p){while(s=r.firstChild){if(s.nodeType!==3||s.nodeValue){q.insertBefore(s,r)}else{r.removeChild(s)}}}return q.removeChild(r)})},setStyle:function(r,o,p){var q=this;return q.run(r,function(v){var u,t;u=v.style;o=o.replace(/-(\D)/g,function(x,s){return s.toUpperCase()});if(q.pixelStyles.test(o)&&(m.is(p,"number")||/^[\-0-9\.]+$/.test(p))){p+="px"}switch(o){case"opacity":if(d){u.filter=p===""?"":"alpha(opacity="+(p*100)+")";if(!r.currentStyle||!r.currentStyle.hasLayout){u.display="inline-block"}}u[o]=u["-moz-opacity"]=u["-khtml-opacity"]=p||"";break;case"float":d?u.styleFloat=p:u.cssFloat=p;break;default:u[o]=p||""}if(q.settings.update_styles){q.setAttrib(v,"_mce_style")}})},getStyle:function(r,o,q){r=this.get(r);if(!r){return false}if(this.doc.defaultView&&q){o=o.replace(/[A-Z]/g,function(s){return"-"+s});try{return this.doc.defaultView.getComputedStyle(r,null).getPropertyValue(o)}catch(p){return null}}o=o.replace(/-(\D)/g,function(t,s){return s.toUpperCase()});if(o=="float"){o=d?"styleFloat":"cssFloat"}if(r.currentStyle&&q){return r.currentStyle[o]}return r.style[o]},setStyles:function(u,v){var q=this,r=q.settings,p;p=r.update_styles;r.update_styles=0;k(v,function(o,s){q.setStyle(u,s,o)});r.update_styles=p;if(r.update_styles){q.setAttrib(u,r.cssText)}},setAttrib:function(q,r,o){var p=this;if(!q||!r){return}if(p.settings.strict){r=r.toLowerCase()}return this.run(q,function(u){var t=p.settings;switch(r){case"style":if(!j(o,"string")){k(o,function(s,x){p.setStyle(u,x,s)});return}if(t.keep_values){if(o&&!p._isRes(o)){u.setAttribute("_mce_style",o,2)}else{u.removeAttribute("_mce_style",2)}}u.style.cssText=o;break;case"class":u.className=o||"";break;case"src":case"href":if(t.keep_values){if(t.url_converter){o=t.url_converter.call(t.url_converter_scope||p,o,r,u)}p.setAttrib(u,"_mce_"+r,o,2)}break;case"shape":u.setAttribute("_mce_style",o);break}if(j(o)&&o!==null&&o.length!==0){u.setAttribute(r,""+o,2)}else{u.removeAttribute(r,2)}})},setAttribs:function(q,r){var p=this;return this.run(q,function(o){k(r,function(s,t){p.setAttrib(o,t,s)})})},getAttrib:function(r,s,q){var o,p=this;r=p.get(r);if(!r||r.nodeType!==1){return false}if(!j(q)){q=""}if(/^(src|href|style|coords|shape)$/.test(s)){o=r.getAttribute("_mce_"+s);if(o){return o}}if(d&&p.props[s]){o=r[p.props[s]];o=o&&o.nodeValue?o.nodeValue:o}if(!o){o=r.getAttribute(s,2)}if(/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(s)){if(r[p.props[s]]===true&&o===""){return s}return o?s:""}if(r.nodeName==="FORM"&&r.getAttributeNode(s)){return r.getAttributeNode(s).nodeValue}if(s==="style"){o=o||r.style.cssText;if(o){o=p.serializeStyle(p.parseStyle(o),r.nodeName);if(p.settings.keep_values&&!p._isRes(o)){r.setAttribute("_mce_style",o)}}}if(i&&s==="class"&&o){o=o.replace(/(apple|webkit)\-[a-z\-]+/gi,"")}if(d){switch(s){case"rowspan":case"colspan":if(o===1){o=""}break;case"size":if(o==="+0"||o===20||o===0){o=""}break;case"width":case"height":case"vspace":case"checked":case"disabled":case"readonly":if(o===0){o=""}break;case"hspace":if(o===-1){o=""}break;case"maxlength":case"tabindex":if(o===32768||o===2147483647||o==="32768"){o=""}break;case"multiple":case"compact":case"noshade":case"nowrap":if(o===65535){return s}return q;case"shape":o=o.toLowerCase();break;default:if(s.indexOf("on")===0&&o){o=(""+o).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/,"$1")}}}return(o!==undefined&&o!==null&&o!=="")?""+o:q},getPos:function(A,s){var p=this,o=0,z=0,u,v=p.doc,q;A=p.get(A);s=s||v.body;if(A){if(d&&!p.stdMode){A=A.getBoundingClientRect();u=p.boxModel?v.documentElement:v.body;o=p.getStyle(p.select("html")[0],"borderWidth");o=(o=="medium"||p.boxModel&&!p.isIE6)&&2||o;A.top+=p.win.self!=p.win.top?2:0;return{x:A.left+u.scrollLeft-o,y:A.top+u.scrollTop-o}}q=A;while(q&&q!=s&&q.nodeType){o+=q.offsetLeft||0;z+=q.offsetTop||0;q=q.offsetParent}q=A.parentNode;while(q&&q!=s&&q.nodeType){o-=q.scrollLeft||0;z-=q.scrollTop||0;q=q.parentNode}}return{x:o,y:z}},parseStyle:function(r){var u=this,v=u.settings,x={};if(!r){return x}function p(D,A,C){var z,B,o,y;z=x[D+"-top"+A];if(!z){return}B=x[D+"-right"+A];if(z!=B){return}o=x[D+"-bottom"+A];if(B!=o){return}y=x[D+"-left"+A];if(o!=y){return}x[C]=y;delete x[D+"-top"+A];delete x[D+"-right"+A];delete x[D+"-bottom"+A];delete x[D+"-left"+A]}function q(y,s,o,A){var z;z=x[s];if(!z){return}z=x[o];if(!z){return}z=x[A];if(!z){return}x[y]=x[s]+" "+x[o]+" "+x[A];delete x[s];delete x[o];delete x[A]}r=r.replace(/&(#?[a-z0-9]+);/g,"&$1_MCE_SEMI_");k(r.split(";"),function(s){var o,t=[];if(s){s=s.replace(/_MCE_SEMI_/g,";");s=s.replace(/url\([^\)]+\)/g,function(y){t.push(y);return"url("+t.length+")"});s=s.split(":");o=m.trim(s[1]);o=o.replace(/url\(([^\)]+)\)/g,function(z,y){return t[parseInt(y)-1]});o=o.replace(/rgb\([^\)]+\)/g,function(y){return u.toHex(y)});if(v.url_converter){o=o.replace(/url\([\'\"]?([^\)\'\"]+)[\'\"]?\)/g,function(y,z){return"url("+v.url_converter.call(v.url_converter_scope||u,u.decode(z),"style",null)+")"})}x[m.trim(s[0]).toLowerCase()]=o}});p("border","","border");p("border","-width","border-width");p("border","-color","border-color");p("border","-style","border-style");p("padding","","padding");p("margin","","margin");q("border","border-width","border-style","border-color");if(d){if(x.border=="medium none"){x.border=""}}return x},serializeStyle:function(v,p){var q=this,r="";function u(s,o){if(o&&s){if(o.indexOf("-")===0){return}switch(o){case"font-weight":if(s==700){s="bold"}break;case"color":case"background-color":s=s.toLowerCase();break}r+=(r?" ":"")+o+": "+s+";"}}if(p&&q._styles){k(q._styles["*"],function(o){u(v[o],o)});k(q._styles[p.toLowerCase()],function(o){u(v[o],o)})}else{k(v,u)}return r},loadCSS:function(o){var q=this,r=q.doc,p;if(!o){o=""}p=q.select("head")[0];k(o.split(","),function(s){var t;if(q.files[s]){return}q.files[s]=true;t=q.create("link",{rel:"stylesheet",href:m._addVer(s)});if(d&&r.documentMode){t.onload=function(){r.recalc();t.onload=null}}p.appendChild(t)})},addClass:function(o,p){return this.run(o,function(q){var r;if(!p){return 0}if(this.hasClass(q,p)){return q.className}r=this.removeClass(q,p);return q.className=(r!=""?(r+" "):"")+p})},removeClass:function(q,r){var o=this,p;return o.run(q,function(t){var s;if(o.hasClass(t,r)){if(!p){p=new RegExp("(^|\\s+)"+r+"(\\s+|$)","g")}s=t.className.replace(p," ");s=m.trim(s!=" "?s:"");t.className=s;if(!s){t.removeAttribute("class");t.removeAttribute("className")}return s}return t.className})},hasClass:function(p,o){p=this.get(p);if(!p||!o){return false}return(" "+p.className+" ").indexOf(" "+o+" ")!==-1},show:function(o){return this.setStyle(o,"display","block")},hide:function(o){return this.setStyle(o,"display","none")},isHidden:function(o){o=this.get(o);return !o||o.style.display=="none"||this.getStyle(o,"display")=="none"},uniqueId:function(o){return(!o?"mce_":o)+(this.counter++)},setHTML:function(q,p){var o=this;return this.run(q,function(v){var r,t,s,z,u,r;p=o.processHTML(p);if(d){function y(){while(v.firstChild){v.firstChild.removeNode()}try{v.innerHTML="<br />"+p;v.removeChild(v.firstChild)}catch(x){r=o.create("div");r.innerHTML="<br />"+p;k(r.childNodes,function(B,A){if(A){v.appendChild(B)}})}}if(o.settings.fix_ie_paragraphs){p=p.replace(/<p><\/p>|<p([^>]+)><\/p>|<p[^\/+]\/>/gi,'<p$1 _mce_keep="true">&nbsp;</p>')}y();if(o.settings.fix_ie_paragraphs){s=v.getElementsByTagName("p");for(t=s.length-1,r=0;t>=0;t--){z=s[t];if(!z.hasChildNodes()){if(!z._mce_keep){r=1;break}z.removeAttribute("_mce_keep")}}}if(r){p=p.replace(/<p ([^>]+)>|<p>/ig,'<div $1 _mce_tmp="1">');p=p.replace(/<\/p>/g,"</div>");y();if(o.settings.fix_ie_paragraphs){s=v.getElementsByTagName("DIV");for(t=s.length-1;t>=0;t--){z=s[t];if(z._mce_tmp){u=o.doc.createElement("p");z.cloneNode(false).outerHTML.replace(/([a-z0-9\-_]+)=/gi,function(A,x){var B;if(x!=="_mce_tmp"){B=z.getAttribute(x);if(!B&&x==="class"){B=z.className}u.setAttribute(x,B)}});for(r=0;r<z.childNodes.length;r++){u.appendChild(z.childNodes[r].cloneNode(true))}z.swapNode(u)}}}}}else{v.innerHTML=p}return p})},processHTML:function(r){var p=this,q=p.settings,v=[];if(!q.process_html){return r}if(d){r=r.replace(/&apos;/g,"&#39;");r=r.replace(/\s+(disabled|checked|readonly|selected)\s*=\s*[\"\']?(false|0)[\"\']?/gi,"")}r=r.replace(/<a( )([^>]+)\/>|<a\/>/gi,"<a$1$2></a>");if(q.keep_values){if(/<script|noscript|style/i.test(r)){function o(t){t=t.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n");t=t.replace(/^[\r\n]*|[\r\n]*$/g,"");t=t.replace(/^\s*(\/\/\s*<!--|\/\/\s*<!\[CDATA\[|<!--|<!\[CDATA\[)[\r\n]*/g,"");t=t.replace(/\s*(\/\/\s*\]\]>|\/\/\s*-->|\]\]>|-->|\]\]-->)\s*$/g,"");return t}r=r.replace(/<script([^>]+|)>([\s\S]*?)<\/script>/gi,function(s,x,t){if(!x){x=' type="text/javascript"'}x=x.replace(/src=\"([^\"]+)\"?/i,function(y,z){if(q.url_converter){z=p.encode(q.url_converter.call(q.url_converter_scope||p,p.decode(z),"src","script"))}return'_mce_src="'+z+'"'});if(m.trim(t)){v.push(o(t));t="<!--\nMCE_SCRIPT:"+(v.length-1)+"\n// -->"}return"<mce:script"+x+">"+t+"</mce:script>"});r=r.replace(/<style([^>]+|)>([\s\S]*?)<\/style>/gi,function(s,x,t){if(t){v.push(o(t));t="<!--\nMCE_SCRIPT:"+(v.length-1)+"\n-->"}return"<mce:style"+x+">"+t+"</mce:style><style "+x+' _mce_bogus="1">'+t+"</style>"});r=r.replace(/<noscript([^>]+|)>([\s\S]*?)<\/noscript>/g,function(s,x,t){return"<mce:noscript"+x+"><!--"+p.encode(t).replace(/--/g,"&#45;&#45;")+"--></mce:noscript>"})}r=r.replace(/<!\[CDATA\[([\s\S]+)\]\]>/g,"<!--[CDATA[$1]]-->");function u(s){return s.replace(h,function(y,z,x,t){return"<"+z+x.replace(l,function(B,A,E,D,C){var F;A=A.toLowerCase();E=E||D||C||"";if(e[A]){if(E==="false"||E==="0"){return}return A+'="'+A+'"'}if(f[A]&&x.indexOf("_mce_"+A)==-1){F=p.decode(E);if(q.url_converter&&(A=="src"||A=="href")){F=q.url_converter.call(q.url_converter_scope||p,F,A,z)}if(A=="style"){F=p.serializeStyle(p.parseStyle(F),A)}return A+'="'+E+'" _mce_'+A+'="'+p.encode(F)+'"'}return B})+t+">"})}r=u(r);r=r.replace(/MCE_SCRIPT:([0-9]+)/g,function(t,s){return v[s]})}return r},getOuterHTML:function(o){var p;o=this.get(o);if(!o){return null}if(o.outerHTML!==undefined){return o.outerHTML}p=(o.ownerDocument||this.doc).createElement("body");p.appendChild(o.cloneNode(true));return p.innerHTML},setOuterHTML:function(r,p,s){var o=this;function q(u,t,x){var y,v;v=x.createElement("body");v.innerHTML=t;y=v.lastChild;while(y){o.insertAfter(y.cloneNode(true),u);y=y.previousSibling}o.remove(u)}return this.run(r,function(u){u=o.get(u);if(u.nodeType==1){s=s||u.ownerDocument||o.doc;if(d){try{if(d&&u.nodeType==1){u.outerHTML=p}else{q(u,p,s)}}catch(t){q(u,p,s)}}else{q(u,p,s)}}})},decode:function(p){var q,r,o;if(/&[\w#]+;/.test(p)){q=this.doc.createElement("div");q.innerHTML=p;r=q.firstChild;o="";if(r){do{o+=r.nodeValue}while(r=r.nextSibling)}return o||p}return p},encode:function(o){return(""+o).replace(n,function(p){return c[p]})},insertAfter:function(o,p){p=this.get(p);return this.run(o,function(r){var q,s;q=p.parentNode;s=p.nextSibling;if(s){q.insertBefore(r,s)}else{q.appendChild(r)}return r})},isBlock:function(o){if(o.nodeType&&o.nodeType!==1){return false}o=o.nodeName||o;return a.test(o)},replace:function(s,r,p){var q=this;if(j(r,"array")){s=s.cloneNode(true)}return q.run(r,function(t){if(p){k(m.grep(t.childNodes),function(o){s.appendChild(o)})}return t.parentNode.replaceChild(s,t)})},rename:function(r,o){var q=this,p;if(r.nodeName!=o.toUpperCase()){p=q.create(o);k(q.getAttribs(r),function(s){q.setAttrib(p,s.nodeName,q.getAttrib(r,s.nodeName))});q.replace(p,r,1)}return p||r},findCommonAncestor:function(q,o){var r=q,p;while(r){p=o;while(p&&r!=p){p=p.parentNode}if(r==p){break}r=r.parentNode}if(!r&&q.ownerDocument){return q.ownerDocument.documentElement}return r},toHex:function(o){var q=/^\s*rgb\s*?\(\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?\)\s*$/i.exec(o);function p(r){r=parseInt(r).toString(16);return r.length>1?r:"0"+r}if(q){o="#"+p(q[1])+p(q[2])+p(q[3]);return o}return o},getClasses:function(){var s=this,o=[],r,u={},v=s.settings.class_filter,q;if(s.classes){return s.classes}function x(t){k(t.imports,function(y){x(y)});k(t.cssRules||t.rules,function(y){switch(y.type||1){case 1:if(y.selectorText){k(y.selectorText.split(","),function(z){z=z.replace(/^\s*|\s*$|^\s\./g,"");if(/\.mce/.test(z)||!/\.[\w\-]+$/.test(z)){return}q=z;z=z.replace(/.*\.([a-z0-9_\-]+).*/i,"$1");if(v&&!(z=v(z,q))){return}if(!u[z]){o.push({"class":z});u[z]=1}})}break;case 3:x(y.styleSheet);break}})}try{k(s.doc.styleSheets,x)}catch(p){}if(o.length>0){s.classes=o}return o},run:function(u,r,q){var p=this,v;if(p.doc&&typeof(u)==="string"){u=p.get(u)}if(!u){return false}q=q||this;if(!u.nodeType&&(u.length||u.length===0)){v=[];k(u,function(s,o){if(s){if(typeof(s)=="string"){s=p.doc.getElementById(s)}v.push(r.call(q,s,o))}});return v}return r.call(q,u)},getAttribs:function(q){var p;q=this.get(q);if(!q){return[]}if(d){p=[];if(q.nodeName=="OBJECT"){return q.attributes}if(q.nodeName==="OPTION"&&this.getAttrib(q,"selected")){p.push({specified:1,nodeName:"selected"})}q.cloneNode(false).outerHTML.replace(/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi,"").replace(/[\w:\-]+/gi,function(o){p.push({specified:1,nodeName:o})});return p}return q.attributes},destroy:function(p){var o=this;if(o.events){o.events.destroy()}o.win=o.doc=o.root=o.events=null;if(!p){m.removeUnload(o.destroy)}},createRng:function(){var o=this.doc;return o.createRange?o.createRange():new m.dom.Range(this)},nodeIndex:function(s,t){var o=0,q,r,p;if(s){for(q=s.nodeType,s=s.previousSibling,r=s;s;s=s.previousSibling){p=s.nodeType;if(!t||p!=3||(q!=p&&s.nodeValue.length)){o++}q=p}}return o},split:function(u,s,y){var z=this,o=z.createRng(),v,q,x;function p(A){var t,r=A.childNodes;if(A.nodeType==1&&A.getAttribute("_mce_type")=="bookmark"){return}for(t=r.length-1;t>=0;t--){p(r[t])}if(A.nodeType!=9){if(A.nodeType==3&&A.nodeValue.length>0){return}if(A.nodeType==1){r=A.childNodes;if(r.length==1&&r[0]&&r[0].nodeType==1&&r[0].getAttribute("_mce_type")=="bookmark"){A.parentNode.insertBefore(r[0],A)}if(r.length||/^(br|hr|input|img)$/i.test(A.nodeName)){return}}z.remove(A)}return A}if(u&&s){o.setStart(u.parentNode,z.nodeIndex(u));o.setEnd(s.parentNode,z.nodeIndex(s));v=o.extractContents();o=z.createRng();o.setStart(s.parentNode,z.nodeIndex(s)+1);o.setEnd(u.parentNode,z.nodeIndex(u)+1);q=o.extractContents();x=u.parentNode;x.insertBefore(p(v),u);if(y){x.replaceChild(y,s)}else{x.insertBefore(s,u)}x.insertBefore(p(q),u);z.remove(u);return y||s}},bind:function(s,o,r,q){var p=this;if(!p.events){p.events=new m.dom.EventUtils()}return p.events.add(s,o,r,q||this)},unbind:function(r,o,q){var p=this;if(!p.events){p.events=new m.dom.EventUtils()}return p.events.remove(r,o,q)},_findSib:function(r,o,p){var q=this,s=o;if(r){if(j(s,"string")){s=function(t){return q.is(t,o)}}for(r=r[p];r;r=r[p]){if(s(r)){return r}}}return null},_isRes:function(o){return/^(top|left|bottom|right|width|height)/i.test(o)||/;\s*(top|left|bottom|right|width|height)/i.test(o)}});m.DOM=new m.dom.DOMUtils(document,{process_html:0})})(tinymce);(function(a){function b(c){var N=this,e=c.doc,S=0,E=1,j=2,D=true,R=false,U="startOffset",h="startContainer",P="endContainer",z="endOffset",k=tinymce.extend,n=c.nodeIndex;k(N,{startContainer:e,startOffset:0,endContainer:e,endOffset:0,collapsed:D,commonAncestorContainer:e,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:q,setEnd:s,setStartBefore:g,setStartAfter:I,setEndBefore:J,setEndAfter:u,collapse:A,selectNode:x,selectNodeContents:F,compareBoundaryPoints:v,deleteContents:p,extractContents:H,cloneContents:d,insertNode:C,surroundContents:M,cloneRange:K});function q(V,t){B(D,V,t)}function s(V,t){B(R,V,t)}function g(t){q(t.parentNode,n(t))}function I(t){q(t.parentNode,n(t)+1)}function J(t){s(t.parentNode,n(t))}function u(t){s(t.parentNode,n(t)+1)}function A(t){if(t){N[P]=N[h];N[z]=N[U]}else{N[h]=N[P];N[U]=N[z]}N.collapsed=D}function x(t){g(t);u(t)}function F(t){q(t,0);s(t,t.nodeType===1?t.childNodes.length:t.nodeValue.length)}function v(W,X){var Z=N[h],Y=N[U],V=N[P],t=N[z];if(W===0){return G(Z,Y,Z,Y)}if(W===1){return G(Z,Y,V,t)}if(W===2){return G(V,t,V,t)}if(W===3){return G(V,t,Z,Y)}}function p(){m(j)}function H(){return m(S)}function d(){return m(E)}function C(Y){var V=this[h],t=this[U],X,W;if((V.nodeType===3||V.nodeType===4)&&V.nodeValue){if(!t){V.parentNode.insertBefore(Y,V)}else{if(t>=V.nodeValue.length){c.insertAfter(Y,V)}else{X=V.splitText(t);V.parentNode.insertBefore(Y,X)}}}else{if(V.childNodes.length>0){W=V.childNodes[t]}if(W){V.insertBefore(Y,W)}else{V.appendChild(Y)}}}function M(V){var t=N.extractContents();N.insertNode(V);V.appendChild(t);N.selectNode(V)}function K(){return k(new b(c),{startContainer:N[h],startOffset:N[U],endContainer:N[P],endOffset:N[z],collapsed:N.collapsed,commonAncestorContainer:N.commonAncestorContainer})}function O(t,V){var W;if(t.nodeType==3){return t}if(V<0){return t}W=t.firstChild;while(W&&V>0){--V;W=W.nextSibling}if(W){return W}return t}function l(){return(N[h]==N[P]&&N[U]==N[z])}function G(X,Z,V,Y){var aa,W,t,ab,ad,ac;if(X==V){if(Z==Y){return 0}if(Z<Y){return -1}return 1}aa=V;while(aa&&aa.parentNode!=X){aa=aa.parentNode}if(aa){W=0;t=X.firstChild;while(t!=aa&&W<Z){W++;t=t.nextSibling}if(Z<=W){return -1}return 1}aa=X;while(aa&&aa.parentNode!=V){aa=aa.parentNode}if(aa){W=0;t=V.firstChild;while(t!=aa&&W<Y){W++;t=t.nextSibling}if(W<Y){return -1}return 1}ab=c.findCommonAncestor(X,V);ad=X;while(ad&&ad.parentNode!=ab){ad=ad.parentNode}if(!ad){ad=ab}ac=V;while(ac&&ac.parentNode!=ab){ac=ac.parentNode}if(!ac){ac=ab}if(ad==ac){return 0}t=ab.firstChild;while(t){if(t==ad){return -1}if(t==ac){return 1}t=t.nextSibling}}function B(V,Y,X){var t,W;if(V){N[h]=Y;N[U]=X}else{N[P]=Y;N[z]=X}t=N[P];while(t.parentNode){t=t.parentNode}W=N[h];while(W.parentNode){W=W.parentNode}if(W==t){if(G(N[h],N[U],N[P],N[z])>0){N.collapse(V)}}else{N.collapse(V)}N.collapsed=l();N.commonAncestorContainer=c.findCommonAncestor(N[h],N[P])}function m(ab){var aa,X=0,ad=0,V,Z,W,Y,t,ac;if(N[h]==N[P]){return f(ab)}for(aa=N[P],V=aa.parentNode;V;aa=V,V=V.parentNode){if(V==N[h]){return r(aa,ab)}++X}for(aa=N[h],V=aa.parentNode;V;aa=V,V=V.parentNode){if(V==N[P]){return T(aa,ab)}++ad}Z=ad-X;W=N[h];while(Z>0){W=W.parentNode;Z--}Y=N[P];while(Z<0){Y=Y.parentNode;Z++}for(t=W.parentNode,ac=Y.parentNode;t!=ac;t=t.parentNode,ac=ac.parentNode){W=t;Y=ac}return o(W,Y,ab)}function f(Z){var ab,Y,X,aa,t,W,V;if(Z!=j){ab=e.createDocumentFragment()}if(N[U]==N[z]){return ab}if(N[h].nodeType==3){Y=N[h].nodeValue;X=Y.substring(N[U],N[z]);if(Z!=E){N[h].deleteData(N[U],N[z]-N[U]);N.collapse(D)}if(Z==j){return}ab.appendChild(e.createTextNode(X));return ab}aa=O(N[h],N[U]);t=N[z]-N[U];while(t>0){W=aa.nextSibling;V=y(aa,Z);if(ab){ab.appendChild(V)}--t;aa=W}if(Z!=E){N.collapse(D)}return ab}function r(ab,Y){var aa,Z,V,t,X,W;if(Y!=j){aa=e.createDocumentFragment()}Z=i(ab,Y);if(aa){aa.appendChild(Z)}V=n(ab);t=V-N[U];if(t<=0){if(Y!=E){N.setEndBefore(ab);N.collapse(R)}return aa}Z=ab.previousSibling;while(t>0){X=Z.previousSibling;W=y(Z,Y);if(aa){aa.insertBefore(W,aa.firstChild)}--t;Z=X}if(Y!=E){N.setEndBefore(ab);N.collapse(R)}return aa}function T(Z,Y){var ab,V,aa,t,X,W;if(Y!=j){ab=e.createDocumentFragment()}aa=Q(Z,Y);if(ab){ab.appendChild(aa)}V=n(Z);++V;t=N[z]-V;aa=Z.nextSibling;while(t>0){X=aa.nextSibling;W=y(aa,Y);if(ab){ab.appendChild(W)}--t;aa=X}if(Y!=E){N.setStartAfter(Z);N.collapse(D)}return ab}function o(Z,t,ac){var W,ae,Y,aa,ab,V,ad,X;if(ac!=j){ae=e.createDocumentFragment()}W=Q(Z,ac);if(ae){ae.appendChild(W)}Y=Z.parentNode;aa=n(Z);ab=n(t);++aa;V=ab-aa;ad=Z.nextSibling;while(V>0){X=ad.nextSibling;W=y(ad,ac);if(ae){ae.appendChild(W)}ad=X;--V}W=i(t,ac);if(ae){ae.appendChild(W)}if(ac!=E){N.setStartAfter(Z);N.collapse(D)}return ae}function i(aa,ab){var W=O(N[P],N[z]-1),ac,Z,Y,t,V,X=W!=N[P];if(W==aa){return L(W,X,R,ab)}ac=W.parentNode;Z=L(ac,R,R,ab);while(ac){while(W){Y=W.previousSibling;t=L(W,X,R,ab);if(ab!=j){Z.insertBefore(t,Z.firstChild)}X=D;W=Y}if(ac==aa){return Z}W=ac.previousSibling;ac=ac.parentNode;V=L(ac,R,R,ab);if(ab!=j){V.appendChild(Z)}Z=V}}function Q(aa,ab){var X=O(N[h],N[U]),Y=X!=N[h],ac,Z,W,t,V;if(X==aa){return L(X,Y,D,ab)}ac=X.parentNode;Z=L(ac,R,D,ab);while(ac){while(X){W=X.nextSibling;t=L(X,Y,D,ab);if(ab!=j){Z.appendChild(t)}Y=D;X=W}if(ac==aa){return Z}X=ac.nextSibling;ac=ac.parentNode;V=L(ac,R,D,ab);if(ab!=j){V.appendChild(Z)}Z=V}}function L(t,Y,ab,ac){var X,W,Z,V,aa;if(Y){return y(t,ac)}if(t.nodeType==3){X=t.nodeValue;if(ab){V=N[U];W=X.substring(V);Z=X.substring(0,V)}else{V=N[z];W=X.substring(0,V);Z=X.substring(V)}if(ac!=E){t.nodeValue=Z}if(ac==j){return}aa=t.cloneNode(R);aa.nodeValue=W;return aa}if(ac==j){return}return t.cloneNode(R)}function y(V,t){if(t!=j){return t==E?V.cloneNode(D):V}V.parentNode.removeChild(V)}}a.Range=b})(tinymce.dom);(function(){function a(h){var j=this,k="\uFEFF",f,i,e=h.dom,d=true,g=false;function c(m,l){if(m&&l){if(m.item&&l.item&&m.item(0)===l.item(0)){return d}if(m.isEqual&&l.isEqual&&l.isEqual(m)){try{f.startContainer.nextSibling;return d}catch(n){}}}return g}function b(){var p=h.getRng(),l=e.createRng(),m,n,r,q;n=p.item?p.item(0):p.parentElement();if(n.ownerDocument!=e.doc){return l}if(p.item||!n.hasChildNodes()){l.setStart(n.parentNode,e.nodeIndex(n));l.setEnd(l.startContainer,l.startOffset+1);return l}m=p.duplicate();r=h.isCollapsed();p.collapse();p.pasteHTML('<span id="_mce_start" style="display:none;line-height:0">'+k+"</span>");if(!r){m.collapse(g);m.pasteHTML('<span id="_mce_end" style="display:none;line-height:0">'+k+"</span>")}function o(x){var t,v,s,u;s=e.get("_mce_"+(x?"start":"end"));u=s.previousSibling;if(u&&u.nodeType==3){t=u;v=t.nodeValue.length;e.remove(s);u=t.nextSibling;if(u&&u.nodeType==3){q=d;t.appendData(u.nodeValue);e.remove(u)}}else{u=s.nextSibling;if(u&&u.nodeType==3){t=u;v=0}else{if(u){v=e.nodeIndex(u)-1}else{v=e.nodeIndex(s)}t=s.parentNode}e.remove(s)}if(x){l.setStart(t,v)}if(!x||r){l.setEnd(t,v)}}o(d);if(!r){o(g)}if(q){j.addRange(l)}return l}this.addRange=function(m){var u,A,z=h.dom.doc,s=z.body,v,o,y,p,t,l,q,r,x,n;this.destroy();y=m.startContainer;p=m.startOffset;t=m.endContainer;l=m.endOffset;u=s.createTextRange();if(y==z||t==z){u=s.createTextRange();u.collapse();u.select();return}if(y.nodeType==1&&y.hasChildNodes()){r=y.childNodes.length-1;if(p>r){x=1;y=y.childNodes[r]}else{y=y.childNodes[p]}if(y.nodeType==3){p=0}}if(t.nodeType==1&&t.hasChildNodes()){r=t.childNodes.length-1;if(l==0){n=1;t=t.childNodes[0]}else{t=t.childNodes[Math.min(r,l-1)];if(t.nodeType==3){l=t.nodeValue.length}}}if(y==t&&y.nodeType==1){if(/^(IMG|TABLE)$/.test(y.nodeName)&&p!=l){u=s.createControlRange();u.addElement(y)}else{u=s.createTextRange();if(!y.hasChildNodes()&&y.canHaveHTML){y.innerHTML=k}u.moveToElementText(y);if(y.innerHTML==k){u.collapse(d);y.removeChild(y.firstChild)}}if(p==l){u.collapse(l<=m.endContainer.childNodes.length-1)}u.select();u.scrollIntoView();return}u=s.createTextRange();q=z.createElement("span");q.innerHTML=" ";if(y.nodeType==3){if(x){e.insertAfter(q,y)}else{y.parentNode.insertBefore(q,y)}u.moveToElementText(q);q.parentNode.removeChild(q);u.move("character",p)}else{u.moveToElementText(y);if(x){u.collapse(g)}}if(y==t&&y.nodeType==3){u.moveEnd("character",l-p);u.select();u.scrollIntoView();return}A=s.createTextRange();if(t.nodeType==3){t.parentNode.insertBefore(q,t);A.moveToElementText(q);q.parentNode.removeChild(q);A.move("character",l);u.setEndPoint("EndToStart",A)}else{A.moveToElementText(t);A.collapse(!!n);u.setEndPoint("EndToEnd",A)}u.select();u.scrollIntoView()};this.getRangeAt=function(){if(!f||!c(i,h.getRng())){f=b();i=h.getRng()}return f};this.destroy=function(){i=f=null};if(h.dom.boxModel){(function(){var r=e.doc,m=r.body,o,p;r.documentElement.unselectable=d;function q(s,v){var t=m.createTextRange();try{t.moveToPoint(s,v)}catch(u){t=null}return t}function n(t){var s;if(t.button){s=q(t.x,t.y);if(s){if(s.compareEndPoints("StartToStart",p)>0){s.setEndPoint("StartToStart",p)}else{s.setEndPoint("EndToEnd",p)}s.select()}}else{l()}}function l(){e.unbind(r,"mouseup",l);e.unbind(r,"mousemove",n);o=0}e.bind(r,"mousedown",function(s){if(s.target.nodeName==="HTML"){if(o){l()}o=1;p=q(s.x,s.y);if(p){e.bind(r,"mouseup",l);e.bind(r,"mousemove",n);p.select()}}})})()}}tinymce.dom.TridentSelection=a})();(function(){var p=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,i=0,d=Object.prototype.toString,n=false;var b=function(E,t,B,v){B=B||[];var e=t=t||document;if(t.nodeType!==1&&t.nodeType!==9){return[]}if(!E||typeof E!=="string"){return B}var C=[],D,z,H,G,A,s,r=true,x=o(t);p.lastIndex=0;while((D=p.exec(E))!==null){C.push(D[1]);if(D[2]){s=RegExp.rightContext;break}}if(C.length>1&&j.exec(E)){if(C.length===2&&f.relative[C[0]]){z=g(C[0]+C[1],t)}else{z=f.relative[C[0]]?[t]:b(C.shift(),t);while(C.length){E=C.shift();if(f.relative[E]){E+=C.shift()}z=g(E,z)}}}else{if(!v&&C.length>1&&t.nodeType===9&&!x&&f.match.ID.test(C[0])&&!f.match.ID.test(C[C.length-1])){var I=b.find(C.shift(),t,x);t=I.expr?b.filter(I.expr,I.set)[0]:I.set[0]}if(t){var I=v?{expr:C.pop(),set:a(v)}:b.find(C.pop(),C.length===1&&(C[0]==="~"||C[0]==="+")&&t.parentNode?t.parentNode:t,x);z=I.expr?b.filter(I.expr,I.set):I.set;if(C.length>0){H=a(z)}else{r=false}while(C.length){var u=C.pop(),y=u;if(!f.relative[u]){u=""}else{y=C.pop()}if(y==null){y=t}f.relative[u](H,y,x)}}else{H=C=[]}}if(!H){H=z}if(!H){throw"Syntax error, unrecognized expression: "+(u||E)}if(d.call(H)==="[object Array]"){if(!r){B.push.apply(B,H)}else{if(t&&t.nodeType===1){for(var F=0;H[F]!=null;F++){if(H[F]&&(H[F]===true||H[F].nodeType===1&&h(t,H[F]))){B.push(z[F])}}}else{for(var F=0;H[F]!=null;F++){if(H[F]&&H[F].nodeType===1){B.push(z[F])}}}}}else{a(H,B)}if(s){b(s,e,B,v);b.uniqueSort(B)}return B};b.uniqueSort=function(r){if(c){n=false;r.sort(c);if(n){for(var e=1;e<r.length;e++){if(r[e]===r[e-1]){r.splice(e--,1)}}}}};b.matches=function(e,r){return b(e,null,null,r)};b.find=function(y,e,z){var x,u;if(!y){return[]}for(var t=0,s=f.order.length;t<s;t++){var v=f.order[t],u;if((u=f.match[v].exec(y))){var r=RegExp.leftContext;if(r.substr(r.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");x=f.find[v](u,e,z);if(x!=null){y=y.replace(f.match[v],"");break}}}}if(!x){x=e.getElementsByTagName("*")}return{set:x,expr:y}};b.filter=function(B,A,E,t){var s=B,G=[],y=A,v,e,x=A&&A[0]&&o(A[0]);while(B&&A.length){for(var z in f.filter){if((v=f.match[z].exec(B))!=null){var r=f.filter[z],F,D;e=false;if(y==G){G=[]}if(f.preFilter[z]){v=f.preFilter[z](v,y,E,G,t,x);if(!v){e=F=true}else{if(v===true){continue}}}if(v){for(var u=0;(D=y[u])!=null;u++){if(D){F=r(D,v,u,y);var C=t^!!F;if(E&&F!=null){if(C){e=true}else{y[u]=false}}else{if(C){G.push(D);e=true}}}}}if(F!==undefined){if(!E){y=G}B=B.replace(f.match[z],"");if(!e){return[]}break}}}if(B==s){if(e==null){throw"Syntax error, unrecognized expression: "+B}else{break}}s=B}return y};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(y,e,x){var u=typeof e==="string",z=u&&!/\W/.test(e),v=u&&!z;if(z&&!x){e=e.toUpperCase()}for(var t=0,s=y.length,r;t<s;t++){if((r=y[t])){while((r=r.previousSibling)&&r.nodeType!==1){}y[t]=v||r&&r.nodeName===e?r||false:r===e}}if(v){b.filter(e,y,true)}},">":function(x,r,y){var u=typeof r==="string";if(u&&!/\W/.test(r)){r=y?r:r.toUpperCase();for(var s=0,e=x.length;s<e;s++){var v=x[s];if(v){var t=v.parentNode;x[s]=t.nodeName===r?t:false}}}else{for(var s=0,e=x.length;s<e;s++){var v=x[s];if(v){x[s]=u?v.parentNode:v.parentNode===r}}if(u){b.filter(r,x,true)}}},"":function(t,r,v){var s=i++,e=q;if(!r.match(/\W/)){var u=r=v?r:r.toUpperCase();e=m}e("parentNode",r,s,t,u,v)},"~":function(t,r,v){var s=i++,e=q;if(typeof r==="string"&&!r.match(/\W/)){var u=r=v?r:r.toUpperCase();e=m}e("previousSibling",r,s,t,u,v)}},find:{ID:function(r,s,t){if(typeof s.getElementById!=="undefined"&&!t){var e=s.getElementById(r[1]);return e?[e]:[]}},NAME:function(s,v,x){if(typeof v.getElementsByName!=="undefined"){var r=[],u=v.getElementsByName(s[1]);for(var t=0,e=u.length;t<e;t++){if(u[t].getAttribute("name")===s[1]){r.push(u[t])}}return r.length===0?null:r}},TAG:function(e,r){return r.getElementsByTagName(e[1])}},preFilter:{CLASS:function(t,r,s,e,x,y){t=" "+t[1].replace(/\\/g,"")+" ";if(y){return t}for(var u=0,v;(v=r[u])!=null;u++){if(v){if(x^(v.className&&(" "+v.className+" ").indexOf(t)>=0)){if(!s){e.push(v)}}else{if(s){r[u]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(r,e){for(var s=0;e[s]===false;s++){}return e[s]&&o(e[s])?r[1]:r[1].toUpperCase()},CHILD:function(e){if(e[1]=="nth"){var r=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(e[2]=="even"&&"2n"||e[2]=="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(r[1]+(r[2]||1))-0;e[3]=r[3]-0}e[0]=i++;return e},ATTR:function(u,r,s,e,v,x){var t=u[1].replace(/\\/g,"");if(!x&&f.attrMap[t]){u[1]=f.attrMap[t]}if(u[2]==="~="){u[4]=" "+u[4]+" "}return u},PSEUDO:function(u,r,s,e,v){if(u[1]==="not"){if(u[3].match(p).length>1||/^\w/.test(u[3])){u[3]=b(u[3],null,null,r)}else{var t=b.filter(u[3],r,s,true^v);if(!s){e.push.apply(e,t)}return false}}else{if(f.match.POS.test(u[0])||f.match.CHILD.test(u[0])){return true}}return u},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(s,r,e){return !!b(e[3],s).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toUpperCase()==="BUTTON"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)}},setFilters:{first:function(r,e){return e===0},last:function(s,r,e,t){return r===t.length-1},even:function(r,e){return e%2===0},odd:function(r,e){return e%2===1},lt:function(s,r,e){return r<e[3]-0},gt:function(s,r,e){return r>e[3]-0},nth:function(s,r,e){return e[3]-0==r},eq:function(s,r,e){return e[3]-0==r}},filter:{PSEUDO:function(x,s,t,y){var r=s[1],u=f.filters[r];if(u){return u(x,t,s,y)}else{if(r==="contains"){return(x.textContent||x.innerText||"").indexOf(s[3])>=0}else{if(r==="not"){var v=s[3];for(var t=0,e=v.length;t<e;t++){if(v[t]===x){return false}}return true}}}},CHILD:function(e,t){var x=t[1],r=e;switch(x){case"only":case"first":while(r=r.previousSibling){if(r.nodeType===1){return false}}if(x=="first"){return true}r=e;case"last":while(r=r.nextSibling){if(r.nodeType===1){return false}}return true;case"nth":var s=t[2],A=t[3];if(s==1&&A==0){return true}var v=t[0],z=e.parentNode;if(z&&(z.sizcache!==v||!e.nodeIndex)){var u=0;for(r=z.firstChild;r;r=r.nextSibling){if(r.nodeType===1){r.nodeIndex=++u}}z.sizcache=v}var y=e.nodeIndex-A;if(s==0){return y==0}else{return(y%s==0&&y/s>=0)}}},ID:function(r,e){return r.nodeType===1&&r.getAttribute("id")===e},TAG:function(r,e){return(e==="*"&&r.nodeType===1)||r.nodeName===e},CLASS:function(r,e){return(" "+(r.className||r.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(v,t){var s=t[1],e=f.attrHandle[s]?f.attrHandle[s](v):v[s]!=null?v[s]:v.getAttribute(s),x=e+"",u=t[2],r=t[4];return e==null?u==="!=":u==="="?x===r:u==="*="?x.indexOf(r)>=0:u==="~="?(" "+x+" ").indexOf(r)>=0:!r?x&&e!==false:u==="!="?x!=r:u==="^="?x.indexOf(r)===0:u==="$="?x.substr(x.length-r.length)===r:u==="|="?x===r||x.substr(0,r.length+1)===r+"-":false},POS:function(u,r,s,v){var e=r[2],t=f.setFilters[e];if(t){return t(u,s,r,v)}}}};var j=f.match.POS;for(var l in f.match){f.match[l]=new RegExp(f.match[l].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var a=function(r,e){r=Array.prototype.slice.call(r);if(e){e.push.apply(e,r);return e}return r};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(k){a=function(u,t){var r=t||[];if(d.call(u)==="[object Array]"){Array.prototype.push.apply(r,u)}else{if(typeof u.length==="number"){for(var s=0,e=u.length;s<e;s++){r.push(u[s])}}else{for(var s=0;u[s];s++){r.push(u[s])}}}return r}}var c;if(document.documentElement.compareDocumentPosition){c=function(r,e){var s=r.compareDocumentPosition(e)&4?-1:r===e?0:1;if(s===0){n=true}return s}}else{if("sourceIndex" in document.documentElement){c=function(r,e){var s=r.sourceIndex-e.sourceIndex;if(s===0){n=true}return s}}else{if(document.createRange){c=function(t,r){var s=t.ownerDocument.createRange(),e=r.ownerDocument.createRange();s.setStart(t,0);s.setEnd(t,0);e.setStart(r,0);e.setEnd(r,0);var u=s.compareBoundaryPoints(Range.START_TO_END,e);if(u===0){n=true}return u}}}}(function(){var r=document.createElement("div"),s="script"+(new Date).getTime();r.innerHTML="<a name='"+s+"'/>";var e=document.documentElement;e.insertBefore(r,e.firstChild);if(!!document.getElementById(s)){f.find.ID=function(u,v,x){if(typeof v.getElementById!=="undefined"&&!x){var t=v.getElementById(u[1]);return t?t.id===u[1]||typeof t.getAttributeNode!=="undefined"&&t.getAttributeNode("id").nodeValue===u[1]?[t]:undefined:[]}};f.filter.ID=function(v,t){var u=typeof v.getAttributeNode!=="undefined"&&v.getAttributeNode("id");return v.nodeType===1&&u&&u.nodeValue===t}}e.removeChild(r)})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(r,v){var u=v.getElementsByTagName(r[1]);if(r[1]==="*"){var t=[];for(var s=0;u[s];s++){if(u[s].nodeType===1){t.push(u[s])}}u=t}return u}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(r){return r.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var e=b,s=document.createElement("div");s.innerHTML="<p class='TEST'></p>";if(s.querySelectorAll&&s.querySelectorAll(".TEST").length===0){return}b=function(x,v,t,u){v=v||document;if(!u&&v.nodeType===9&&!o(v)){try{return a(v.querySelectorAll(x),t)}catch(y){}}return e(x,v,t,u)};for(var r in e){b[r]=e[r]}})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(r,s,t){if(typeof s.getElementsByClassName!=="undefined"&&!t){return s.getElementsByClassName(r[1])}}})()}function m(r,x,v,B,y,A){var z=r=="previousSibling"&&!A;for(var t=0,s=B.length;t<s;t++){var e=B[t];if(e){if(z&&e.nodeType===1){e.sizcache=v;e.sizset=t}e=e[r];var u=false;while(e){if(e.sizcache===v){u=B[e.sizset];break}if(e.nodeType===1&&!A){e.sizcache=v;e.sizset=t}if(e.nodeName===x){u=e;break}e=e[r]}B[t]=u}}}function q(r,x,v,B,y,A){var z=r=="previousSibling"&&!A;for(var t=0,s=B.length;t<s;t++){var e=B[t];if(e){if(z&&e.nodeType===1){e.sizcache=v;e.sizset=t}e=e[r];var u=false;while(e){if(e.sizcache===v){u=B[e.sizset];break}if(e.nodeType===1){if(!A){e.sizcache=v;e.sizset=t}if(typeof x!=="string"){if(e===x){u=true;break}}else{if(b.filter(x,[e]).length>0){u=e;break}}}e=e[r]}B[t]=u}}}var h=document.compareDocumentPosition?function(r,e){return r.compareDocumentPosition(e)&16}:function(r,e){return r!==e&&(r.contains?r.contains(e):true)};var o=function(e){return e.nodeType===9&&e.documentElement.nodeName!=="HTML"||!!e.ownerDocument&&e.ownerDocument.documentElement.nodeName!=="HTML"};var g=function(e,y){var t=[],u="",v,s=y.nodeType?[y]:y;while((v=f.match.PSEUDO.exec(e))){u+=v[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var x=0,r=s.length;x<r;x++){b(e,s[x],t)}return b.filter(u,t)};window.tinymce.dom.Sizzle=b})();(function(d){var f=d.each,c=d.DOM,b=d.isIE,e=d.isWebKit,a;d.create("tinymce.dom.EventUtils",{EventUtils:function(){this.inits=[];this.events=[]},add:function(m,p,l,j){var g,h=this,i=h.events,k;if(p instanceof Array){k=[];f(p,function(o){k.push(h.add(m,o,l,j))});return k}if(m&&m.hasOwnProperty&&m instanceof Array){k=[];f(m,function(n){n=c.get(n);k.push(h.add(n,p,l,j))});return k}m=c.get(m);if(!m){return}g=function(n){if(h.disabled){return}n=n||window.event;if(n&&b){if(!n.target){n.target=n.srcElement}d.extend(n,h._stoppers)}if(!j){return l(n)}return l.call(j,n)};if(p=="unload"){d.unloads.unshift({func:g});return g}if(p=="init"){if(h.domLoaded){g()}else{h.inits.push(g)}return g}i.push({obj:m,name:p,func:l,cfunc:g,scope:j});h._add(m,p,g);return l},remove:function(l,m,k){var h=this,g=h.events,i=false,j;if(l&&l.hasOwnProperty&&l instanceof Array){j=[];f(l,function(n){n=c.get(n);j.push(h.remove(n,m,k))});return j}l=c.get(l);f(g,function(o,n){if(o.obj==l&&o.name==m&&(!k||(o.func==k||o.cfunc==k))){g.splice(n,1);h._remove(l,m,o.cfunc);i=true;return false}});return i},clear:function(l){var j=this,g=j.events,h,k;if(l){l=c.get(l);for(h=g.length-1;h>=0;h--){k=g[h];if(k.obj===l){j._remove(k.obj,k.name,k.cfunc);k.obj=k.cfunc=null;g.splice(h,1)}}}},cancel:function(g){if(!g){return false}this.stop(g);return this.prevent(g)},stop:function(g){if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}return false},prevent:function(g){if(g.preventDefault){g.preventDefault()}else{g.returnValue=false}return false},destroy:function(){var g=this;f(g.events,function(j,h){g._remove(j.obj,j.name,j.cfunc);j.obj=j.cfunc=null});g.events=[];g=null},_add:function(h,i,g){if(h.attachEvent){h.attachEvent("on"+i,g)}else{if(h.addEventListener){h.addEventListener(i,g,false)}else{h["on"+i]=g}}},_remove:function(i,j,h){if(i){try{if(i.detachEvent){i.detachEvent("on"+j,h)}else{if(i.removeEventListener){i.removeEventListener(j,h,false)}else{i["on"+j]=null}}}catch(g){}}},_pageInit:function(h){var g=this;if(g.domLoaded){return}g.domLoaded=true;f(g.inits,function(i){i()});g.inits=[]},_wait:function(i){var g=this,h=i.document;if(i.tinyMCE_GZ&&tinyMCE_GZ.loaded){g.domLoaded=1;return}if(h.attachEvent){h.attachEvent("onreadystatechange",function(){if(h.readyState==="complete"){h.detachEvent("onreadystatechange",arguments.callee);g._pageInit(i)}});if(h.documentElement.doScroll&&i==i.top){(function(){if(g.domLoaded){return}try{h.documentElement.doScroll("left")}catch(j){setTimeout(arguments.callee,0);return}g._pageInit(i)})()}}else{if(h.addEventListener){g._add(i,"DOMContentLoaded",function(){g._pageInit(i)})}}g._add(i,"load",function(){g._pageInit(i)})},_stoppers:{preventDefault:function(){this.returnValue=false},stopPropagation:function(){this.cancelBubble=true}}});a=d.dom.Event=new d.dom.EventUtils();a._wait(window);d.addUnload(function(){a.destroy()})})(tinymce);(function(a){a.dom.Element=function(f,d){var b=this,e,c;b.settings=d=d||{};b.id=f;b.dom=e=d.dom||a.DOM;if(!a.isIE){c=e.get(b.id)}a.each(("getPos,getRect,getParent,add,setStyle,getStyle,setStyles,setAttrib,setAttribs,getAttrib,addClass,removeClass,hasClass,getOuterHTML,setOuterHTML,remove,show,hide,isHidden,setHTML,get").split(/,/),function(g){b[g]=function(){var h=[f],j;for(j=0;j<arguments.length;j++){h.push(arguments[j])}h=e[g].apply(e,h);b.update(g);return h}});a.extend(b,{on:function(i,h,g){return a.dom.Event.add(b.id,i,h,g)},getXY:function(){return{x:parseInt(b.getStyle("left")),y:parseInt(b.getStyle("top"))}},getSize:function(){var g=e.get(b.id);return{w:parseInt(b.getStyle("width")||g.clientWidth),h:parseInt(b.getStyle("height")||g.clientHeight)}},moveTo:function(g,h){b.setStyles({left:g,top:h})},moveBy:function(g,i){var h=b.getXY();b.moveTo(h.x+g,h.y+i)},resizeTo:function(g,i){b.setStyles({width:g,height:i})},resizeBy:function(g,j){var i=b.getSize();b.resizeTo(i.w+g,i.h+j)},update:function(h){var g;if(a.isIE6&&d.blocker){h=h||"";if(h.indexOf("get")===0||h.indexOf("has")===0||h.indexOf("is")===0){return}if(h=="remove"){e.remove(b.blocker);return}if(!b.blocker){b.blocker=e.uniqueId();g=e.add(d.container||e.getRoot(),"iframe",{id:b.blocker,style:"position:absolute;",frameBorder:0,src:'javascript:""'});e.setStyle(g,"opacity",0)}else{g=e.get(b.blocker)}e.setStyles(g,{left:b.getStyle("left",1),top:b.getStyle("top",1),width:b.getStyle("width",1),height:b.getStyle("height",1),display:b.getStyle("display",1),zIndex:parseInt(b.getStyle("zIndex",1)||0)-1})}}})}})(tinymce);(function(c){function e(f){return f.replace(/[\n\r]+/g,"")}var b=c.is,a=c.isIE,d=c.each;c.create("tinymce.dom.Selection",{Selection:function(i,h,g){var f=this;f.dom=i;f.win=h;f.serializer=g;d(["onBeforeSetContent","onBeforeGetContent","onSetContent","onGetContent"],function(j){f[j]=new c.util.Dispatcher(f)});if(!f.win.getSelection){f.tridentSel=new c.dom.TridentSelection(f)}c.addUnload(f.destroy,f)},getContent:function(g){var f=this,h=f.getRng(),l=f.dom.create("body"),j=f.getSel(),i,k,m;g=g||{};i=k="";g.get=true;g.format=g.format||"html";f.onBeforeGetContent.dispatch(f,g);if(g.format=="text"){return f.isCollapsed()?"":(h.text||(j.toString?j.toString():""))}if(h.cloneContents){m=h.cloneContents();if(m){l.appendChild(m)}}else{if(b(h.item)||b(h.htmlText)){l.innerHTML=h.item?h.item(0).outerHTML:h.htmlText}else{l.innerHTML=h.toString()}}if(/^\s/.test(l.innerHTML)){i=" "}if(/\s+$/.test(l.innerHTML)){k=" "}g.getInner=true;g.content=f.isCollapsed()?"":i+f.serializer.serialize(l,g)+k;f.onGetContent.dispatch(f,g);return g.content},setContent:function(i,g){var f=this,j=f.getRng(),l,k=f.win.document;g=g||{format:"html"};g.set=true;i=g.content=f.dom.processHTML(i);f.onBeforeSetContent.dispatch(f,g);i=g.content;if(j.insertNode){i+='<span id="__caret">_</span>';if(j.startContainer==k&&j.endContainer==k){k.body.innerHTML=i}else{j.deleteContents();j.insertNode(f.getRng().createContextualFragment(i))}l=f.dom.get("__caret");j=k.createRange();j.setStartBefore(l);j.setEndBefore(l);f.setRng(j);f.dom.remove("__caret")}else{if(j.item){k.execCommand("Delete",false,null);j=f.getRng()}j.pasteHTML(i)}f.onSetContent.dispatch(f,g)},getStart:function(){var f=this,g=f.getRng(),h;if(g.duplicate||g.item){if(g.item){return g.item(0)}g=g.duplicate();g.collapse(1);h=g.parentElement();if(h&&h.nodeName=="BODY"){return h.firstChild||h}return h}else{h=g.startContainer;if(h.nodeType==1&&h.hasChildNodes()){h=h.childNodes[Math.min(h.childNodes.length-1,g.startOffset)]}if(h&&h.nodeType==3){return h.parentNode}return h}},getEnd:function(){var g=this,h=g.getRng(),i,f;if(h.duplicate||h.item){if(h.item){return h.item(0)}h=h.duplicate();h.collapse(0);i=h.parentElement();if(i&&i.nodeName=="BODY"){return i.lastChild||i}return i}else{i=h.endContainer;f=h.endOffset;if(i.nodeType==1&&i.hasChildNodes()){i=i.childNodes[f>0?f-1:f]}if(i&&i.nodeType==3){return i.parentNode}return i}},getBookmark:function(q,r){var u=this,m=u.dom,g,j,i,n,h,o,p,l="\uFEFF",s;function f(v,x){var t=0;d(m.select(v),function(z,y){if(z==x){t=y}});return t}if(q==2){function k(){var v=u.getRng(true),t=m.getRoot(),x={};function y(B,G){var A=B[G?"startContainer":"endContainer"],F=B[G?"startOffset":"endOffset"],z=[],C,E,D=0;if(A.nodeType==3){if(r){for(C=A.previousSibling;C&&C.nodeType==3;C=C.previousSibling){F+=C.nodeValue.length}}z.push(F)}else{E=A.childNodes;if(F>=E.length){D=1;F=E.length-1}z.push(u.dom.nodeIndex(E[F],r)+D)}for(;A&&A!=t;A=A.parentNode){z.push(u.dom.nodeIndex(A,r))}return z}x.start=y(v,true);if(!u.isCollapsed()){x.end=y(v)}return x}return k()}if(q){return{rng:u.getRng()}}g=u.getRng();i=m.uniqueId();n=tinyMCE.activeEditor.selection.isCollapsed();s="overflow:hidden;line-height:0px";if(g.duplicate||g.item){if(!g.item){j=g.duplicate();g.collapse();g.pasteHTML('<span _mce_type="bookmark" id="'+i+'_start" style="'+s+'">'+l+"</span>");if(!n){j.collapse(false);j.pasteHTML('<span _mce_type="bookmark" id="'+i+'_end" style="'+s+'">'+l+"</span>")}}else{o=g.item(0);h=o.nodeName;return{name:h,index:f(h,o)}}}else{o=u.getNode();h=o.nodeName;if(h=="IMG"){return{name:h,index:f(h,o)}}j=g.cloneRange();if(!n){j.collapse(false);j.insertNode(m.create("span",{_mce_type:"bookmark",id:i+"_end",style:s},l))}g.collapse(true);g.insertNode(m.create("span",{_mce_type:"bookmark",id:i+"_start",style:s},l))}u.moveToBookmark({id:i,keep:1});return{id:i}},moveToBookmark:function(l){var n=this,k=n.dom,i,h,f,m;if(n.tridentSel){n.tridentSel.destroy()}if(l){if(l.start){f=k.createRng();m=k.getRoot();function g(s){var o=l[s?"start":"end"],p,q,r;if(o){for(q=m,p=o.length-1;p>=1;p--){q=q.childNodes[o[p]]}if(s){f.setStart(q,o[0])}else{f.setEnd(q,o[0])}}}g(true);g();n.setRng(f)}else{if(l.id){f=k.createRng();function j(u){var p=k.get(l.id+"_"+u),t,o,r,s,q=l.keep;if(p){t=p.parentNode;if(u=="start"){if(!q){o=k.nodeIndex(p)}else{t=p;o=1}f.setStart(t,o);f.setEnd(t,o)}else{if(!q){o=k.nodeIndex(p)}else{t=p;o=1}f.setEnd(t,o)}if(!q){s=p.previousSibling;r=p.nextSibling;d(c.grep(p.childNodes),function(v){if(v.nodeType==3){v.nodeValue=v.nodeValue.replace(/\uFEFF/g,"")}});while(p=k.get(l.id+"_"+u)){k.remove(p,1)}if(s&&r&&s.nodeType==r.nodeType&&s.nodeType==3){o=s.nodeValue.length;s.appendData(r.nodeValue);k.remove(r);if(u=="start"){f.setStart(s,o);f.setEnd(s,o)}else{f.setEnd(s,o)}}}}}j("start");j("end");n.setRng(f)}else{if(l.name){n.select(k.select(l.name)[l.index])}else{if(l.rng){n.setRng(l.rng)}}}}}},select:function(k,j){var i=this,l=i.dom,g=l.createRng(),f;f=l.nodeIndex(k);g.setStart(k.parentNode,f);g.setEnd(k.parentNode,f+1);if(j){function h(m,o){var n=new c.dom.TreeWalker(m,m);do{if(m.nodeType==3&&c.trim(m.nodeValue).length!=0){if(o){g.setStart(m,0)}else{g.setEnd(m,m.nodeValue.length)}return}if(m.nodeName=="BR"){if(o){g.setStartBefore(m)}else{g.setEndBefore(m)}return}}while(m=(o?n.next():n.prev()))}h(k,1);h(k)}i.setRng(g);return k},isCollapsed:function(){var f=this,h=f.getRng(),g=f.getSel();if(!h||h.item){return false}if(h.compareEndPoints){return h.compareEndPoints("StartToEnd",h)===0}return !g||h.collapsed},collapse:function(f){var g=this,h=g.getRng(),i;if(h.item){i=h.item(0);h=this.win.document.body.createTextRange();h.moveToElementText(i)}h.collapse(!!f);g.setRng(h)},getSel:function(){var g=this,f=this.win;return f.getSelection?f.getSelection():f.document.selection},getRng:function(j){var g=this,h,i;if(j&&g.tridentSel){return g.tridentSel.getRangeAt(0)}try{if(h=g.getSel()){i=h.rangeCount>0?h.getRangeAt(0):(h.createRange?h.createRange():g.win.document.createRange())}}catch(f){}if(!i){i=g.win.document.createRange?g.win.document.createRange():g.win.document.body.createTextRange()}return i},setRng:function(i){var h,g=this;if(!g.tridentSel){h=g.getSel();if(h){h.removeAllRanges();h.addRange(i)}}else{if(i.cloneRange){g.tridentSel.addRange(i);return}try{i.select()}catch(f){}}},setNode:function(g){var f=this;f.setContent(f.dom.getOuterHTML(g));return g},getNode:function(){var g=this,f=g.getRng(),h=g.getSel(),i;if(f.setStart){if(!f){return g.dom.getRoot()}i=f.commonAncestorContainer;if(!f.collapsed){if(f.startContainer==f.endContainer){if(f.startOffset-f.endOffset<2){if(f.startContainer.hasChildNodes()){i=f.startContainer.childNodes[f.startOffset]}}}if(c.isWebKit&&h.anchorNode&&h.anchorNode.nodeType==1){return h.anchorNode.childNodes[h.anchorOffset]}}if(i&&i.nodeType==3){return i.parentNode}return i}return f.item?f.item(0):f.parentElement()},getSelectedBlocks:function(g,f){var i=this,j=i.dom,m,h,l,k=[];m=j.getParent(g||i.getStart(),j.isBlock);h=j.getParent(f||i.getEnd(),j.isBlock);if(m){k.push(m)}if(m&&h&&m!=h){l=m;while((l=l.nextSibling)&&l!=h){if(j.isBlock(l)){k.push(l)}}}if(h&&m!=h){k.push(h)}return k},destroy:function(g){var f=this;f.win=null;if(f.tridentSel){f.tridentSel.destroy()}if(!g){c.removeUnload(f.destroy)}}})})(tinymce);(function(a){a.create("tinymce.dom.XMLWriter",{node:null,XMLWriter:function(c){function b(){var e=document.implementation;if(!e||!e.createDocument){try{return new ActiveXObject("MSXML2.DOMDocument")}catch(d){}try{return new ActiveXObject("Microsoft.XmlDom")}catch(d){}}else{return e.createDocument("","",null)}}this.doc=b();this.valid=a.isOpera||a.isWebKit;this.reset()},reset:function(){var b=this,c=b.doc;if(c.firstChild){c.removeChild(c.firstChild)}b.node=c.appendChild(c.createElement("html"))},writeStartElement:function(c){var b=this;b.node=b.node.appendChild(b.doc.createElement(c))},writeAttribute:function(c,b){if(this.valid){b=b.replace(/>/g,"%MCGT%")}this.node.setAttribute(c,b)},writeEndElement:function(){this.node=this.node.parentNode},writeFullEndElement:function(){var b=this,c=b.node;c.appendChild(b.doc.createTextNode(""));b.node=c.parentNode},writeText:function(b){if(this.valid){b=b.replace(/>/g,"%MCGT%")}this.node.appendChild(this.doc.createTextNode(b))},writeCDATA:function(b){this.node.appendChild(this.doc.createCDATASection(b))},writeComment:function(b){if(a.isIE){b=b.replace(/^\-|\-$/g," ")}this.node.appendChild(this.doc.createComment(b.replace(/\-\-/g," ")))},getContent:function(){var b;b=this.doc.xml||new XMLSerializer().serializeToString(this.doc);b=b.replace(/<\?[^?]+\?>|<html>|<\/html>|<html\/>|<!DOCTYPE[^>]+>/g,"");b=b.replace(/ ?\/>/g," />");if(this.valid){b=b.replace(/\%MCGT%/g,"&gt;")}return b}})})(tinymce);(function(a){a.create("tinymce.dom.StringWriter",{str:null,tags:null,count:0,settings:null,indent:null,StringWriter:function(b){this.settings=a.extend({indent_char:" ",indentation:0},b);this.reset()},reset:function(){this.indent="";this.str="";this.tags=[];this.count=0},writeStartElement:function(b){this._writeAttributesEnd();this.writeRaw("<"+b);this.tags.push(b);this.inAttr=true;this.count++;this.elementCount=this.count},writeAttribute:function(d,b){var c=this;c.writeRaw(" "+c.encode(d)+'="'+c.encode(b)+'"')},writeEndElement:function(){var b;if(this.tags.length>0){b=this.tags.pop();if(this._writeAttributesEnd(1)){this.writeRaw("</"+b+">")}if(this.settings.indentation>0){this.writeRaw("\n")}}},writeFullEndElement:function(){if(this.tags.length>0){this._writeAttributesEnd();this.writeRaw("</"+this.tags.pop()+">");if(this.settings.indentation>0){this.writeRaw("\n")}}},writeText:function(b){this._writeAttributesEnd();this.writeRaw(this.encode(b));this.count++},writeCDATA:function(b){this._writeAttributesEnd();this.writeRaw("<![CDATA["+b+"]]>");this.count++},writeComment:function(b){this._writeAttributesEnd();this.writeRaw("<!-- "+b+"-->");this.count++},writeRaw:function(b){this.str+=b},encode:function(b){return b.replace(/[<>&"]/g,function(c){switch(c){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case'"':return"&quot;"}return c})},getContent:function(){return this.str},_writeAttributesEnd:function(b){if(!this.inAttr){return}this.inAttr=false;if(b&&this.elementCount==this.count){this.writeRaw(" />");return false}this.writeRaw(">");return true}})})(tinymce);(function(e){var g=e.extend,f=e.each,b=e.util.Dispatcher,d=e.isIE,a=e.isGecko;function c(h){return h.replace(/([?+*])/g,".$1")}e.create("tinymce.dom.Serializer",{Serializer:function(j){var i=this;i.key=0;i.onPreProcess=new b(i);i.onPostProcess=new b(i);try{i.writer=new e.dom.XMLWriter()}catch(h){i.writer=new e.dom.StringWriter()}i.settings=j=g({dom:e.DOM,valid_nodes:0,node_filter:0,attr_filter:0,invalid_attrs:/^(_mce_|_moz_|sizset|sizcache)/,closed:/^(br|hr|input|meta|img|link|param|area)$/,entity_encoding:"named",entities:"160,nbsp,161,iexcl,162,cent,163,pound,164,curren,165,yen,166,brvbar,167,sect,168,uml,169,copy,170,ordf,171,laquo,172,not,173,shy,174,reg,175,macr,176,deg,177,plusmn,178,sup2,179,sup3,180,acute,181,micro,182,para,183,middot,184,cedil,185,sup1,186,ordm,187,raquo,188,frac14,189,frac12,190,frac34,191,iquest,192,Agrave,193,Aacute,194,Acirc,195,Atilde,196,Auml,197,Aring,198,AElig,199,Ccedil,200,Egrave,201,Eacute,202,Ecirc,203,Euml,204,Igrave,205,Iacute,206,Icirc,207,Iuml,208,ETH,209,Ntilde,210,Ograve,211,Oacute,212,Ocirc,213,Otilde,214,Ouml,215,times,216,Oslash,217,Ugrave,218,Uacute,219,Ucirc,220,Uuml,221,Yacute,222,THORN,223,szlig,224,agrave,225,aacute,226,acirc,227,atilde,228,auml,229,aring,230,aelig,231,ccedil,232,egrave,233,eacute,234,ecirc,235,euml,236,igrave,237,iacute,238,icirc,239,iuml,240,eth,241,ntilde,242,ograve,243,oacute,244,ocirc,245,otilde,246,ouml,247,divide,248,oslash,249,ugrave,250,uacute,251,ucirc,252,uuml,253,yacute,254,thorn,255,yuml,402,fnof,913,Alpha,914,Beta,915,Gamma,916,Delta,917,Epsilon,918,Zeta,919,Eta,920,Theta,921,Iota,922,Kappa,923,Lambda,924,Mu,925,Nu,926,Xi,927,Omicron,928,Pi,929,Rho,931,Sigma,932,Tau,933,Upsilon,934,Phi,935,Chi,936,Psi,937,Omega,945,alpha,946,beta,947,gamma,948,delta,949,epsilon,950,zeta,951,eta,952,theta,953,iota,954,kappa,955,lambda,956,mu,957,nu,958,xi,959,omicron,960,pi,961,rho,962,sigmaf,963,sigma,964,tau,965,upsilon,966,phi,967,chi,968,psi,969,omega,977,thetasym,978,upsih,982,piv,8226,bull,8230,hellip,8242,prime,8243,Prime,8254,oline,8260,frasl,8472,weierp,8465,image,8476,real,8482,trade,8501,alefsym,8592,larr,8593,uarr,8594,rarr,8595,darr,8596,harr,8629,crarr,8656,lArr,8657,uArr,8658,rArr,8659,dArr,8660,hArr,8704,forall,8706,part,8707,exist,8709,empty,8711,nabla,8712,isin,8713,notin,8715,ni,8719,prod,8721,sum,8722,minus,8727,lowast,8730,radic,8733,prop,8734,infin,8736,ang,8743,and,8744,or,8745,cap,8746,cup,8747,int,8756,there4,8764,sim,8773,cong,8776,asymp,8800,ne,8801,equiv,8804,le,8805,ge,8834,sub,8835,sup,8836,nsub,8838,sube,8839,supe,8853,oplus,8855,otimes,8869,perp,8901,sdot,8968,lceil,8969,rceil,8970,lfloor,8971,rfloor,9001,lang,9002,rang,9674,loz,9824,spades,9827,clubs,9829,hearts,9830,diams,338,OElig,339,oelig,352,Scaron,353,scaron,376,Yuml,710,circ,732,tilde,8194,ensp,8195,emsp,8201,thinsp,8204,zwnj,8205,zwj,8206,lrm,8207,rlm,8211,ndash,8212,mdash,8216,lsquo,8217,rsquo,8218,sbquo,8220,ldquo,8221,rdquo,8222,bdquo,8224,dagger,8225,Dagger,8240,permil,8249,lsaquo,8250,rsaquo,8364,euro",valid_elements:"*[*]",extended_valid_elements:0,invalid_elements:0,fix_table_elements:1,fix_list_elements:true,fix_content_duplication:true,convert_fonts_to_spans:false,font_size_classes:0,apply_source_formatting:0,indent_mode:"simple",indent_char:"\t",indent_levels:1,remove_linebreaks:1,remove_redundant_brs:1,element_format:"xhtml"},j);i.dom=j.dom;i.schema=j.schema;if(j.entity_encoding=="named"&&!j.entities){j.entity_encoding="raw"}if(j.remove_redundant_brs){i.onPostProcess.add(function(k,l){l.content=l.content.replace(/(<br \/>\s*)+<\/(p|h[1-6]|div|li)>/gi,function(n,m,o){if(/^<br \/>\s*<\//.test(n)){return"</"+o+">"}return n})})}if(j.element_format=="html"){i.onPostProcess.add(function(k,l){l.content=l.content.replace(/<([^>]+) \/>/g,"<$1>")})}if(j.fix_list_elements){i.onPreProcess.add(function(v,s){var l,z,y=["ol","ul"],u,t,q,k=/^(OL|UL)$/,A;function m(r,x){var o=x.split(","),p;while((r=r.previousSibling)!=null){for(p=0;p<o.length;p++){if(r.nodeName==o[p]){return r}}}return null}for(z=0;z<y.length;z++){l=i.dom.select(y[z],s.node);for(u=0;u<l.length;u++){t=l[u];q=t.parentNode;if(k.test(q.nodeName)){A=m(t,"LI");if(!A){A=i.dom.create("li");A.innerHTML="&nbsp;";A.appendChild(t);q.insertBefore(A,q.firstChild)}else{A.appendChild(t)}}}}})}if(j.fix_table_elements){i.onPreProcess.add(function(k,l){if(!e.isOpera||opera.buildNumber()>=1767){f(i.dom.select("p table",l.node).reverse(),function(p){var o=i.dom.getParent(p.parentNode,"table,p");if(o.nodeName!="TABLE"){try{i.dom.split(o,p)}catch(m){}}})}})}},setEntities:function(o){var n=this,j,m,h={},k;if(n.entityLookup){return}j=o.split(",");for(m=0;m<j.length;m+=2){k=j[m];if(k==34||k==38||k==60||k==62){continue}h[String.fromCharCode(j[m])]=j[m+1];k=parseInt(j[m]).toString(16)}n.entityLookup=h},setRules:function(i){var h=this;h._setup();h.rules={};h.wildRules=[];h.validElements={};return h.addRules(i)},addRules:function(i){var h=this,j;if(!i){return}h._setup();f(i.split(","),function(m){var q=m.split(/\[|\]/),l=q[0].split("/"),r,k,o,n=[];if(j){k=e.extend([],j.attribs)}if(q.length>1){f(q[1].split("|"),function(u){var p={},t;k=k||[];u=u.replace(/::/g,"~");u=/^([!\-])?([\w*.?~_\-]+|)([=:<])?(.+)?$/.exec(u);u[2]=u[2].replace(/~/g,":");if(u[1]=="!"){r=r||[];r.push(u[2])}if(u[1]=="-"){for(t=0;t<k.length;t++){if(k[t].name==u[2]){k.splice(t,1);return}}}switch(u[3]){case"=":p.defaultVal=u[4]||"";break;case":":p.forcedVal=u[4];break;case"<":p.validVals=u[4].split("?");break}if(/[*.?]/.test(u[2])){o=o||[];p.nameRE=new RegExp("^"+c(u[2])+"$");o.push(p)}else{p.name=u[2];k.push(p)}n.push(u[2])})}f(l,function(v,u){var y=v.charAt(0),t=1,p={};if(j){if(j.noEmpty){p.noEmpty=j.noEmpty}if(j.fullEnd){p.fullEnd=j.fullEnd}if(j.padd){p.padd=j.padd}}switch(y){case"-":p.noEmpty=true;break;case"+":p.fullEnd=true;break;case"#":p.padd=true;break;default:t=0}l[u]=v=v.substring(t);h.validElements[v]=1;if(/[*.?]/.test(l[0])){p.nameRE=new RegExp("^"+c(l[0])+"$");h.wildRules=h.wildRules||{};h.wildRules.push(p)}else{p.name=l[0];if(l[0]=="@"){j=p}h.rules[v]=p}p.attribs=k;if(r){p.requiredAttribs=r}if(o){v="";f(n,function(s){if(v){v+="|"}v+="("+c(s)+")"});p.validAttribsRE=new RegExp("^"+v.toLowerCase()+"$");p.wildAttribs=o}})});i="";f(h.validElements,function(m,l){if(i){i+="|"}if(l!="@"){i+=l}});h.validElementsRE=new RegExp("^("+c(i.toLowerCase())+")$")},findRule:function(m){var j=this,l=j.rules,h,k;j._setup();k=l[m];if(k){return k}l=j.wildRules;for(h=0;h<l.length;h++){if(l[h].nameRE.test(m)){return l[h]}}return null},findAttribRule:function(h,l){var j,k=h.wildAttribs;for(j=0;j<k.length;j++){if(k[j].nameRE.test(l)){return k[j]}}return null},serialize:function(r,q){var m,k=this,p,i,j,l;k._setup();q=q||{};q.format=q.format||"html";k.processObj=q;if(d){l=[];f(r.getElementsByTagName("option"),function(o){var h=k.dom.getAttrib(o,"selected");l.push(h?h:null)})}r=r.cloneNode(true);if(d){f(r.getElementsByTagName("option"),function(o,h){k.dom.setAttrib(o,"selected",l[h])})}j=r.ownerDocument.implementation;if(j.createHTMLDocument&&(e.isOpera&&opera.buildNumber()>=1767)){p=j.createHTMLDocument("");f(r.nodeName=="BODY"?r.childNodes:[r],function(h){p.body.appendChild(p.importNode(h,true))});if(r.nodeName!="BODY"){r=p.body.firstChild}else{r=p.body}i=k.dom.doc;k.dom.doc=p}k.key=""+(parseInt(k.key)+1);if(!q.no_events){q.node=r;k.onPreProcess.dispatch(k,q)}k.writer.reset();k._info=q;k._serializeNode(r,q.getInner);q.content=k.writer.getContent();if(i){k.dom.doc=i}if(!q.no_events){k.onPostProcess.dispatch(k,q)}k._postProcess(q);q.node=null;return e.trim(q.content)},_postProcess:function(n){var i=this,k=i.settings,j=n.content,m=[],l;if(n.format=="html"){l=i._protect({content:j,patterns:[{pattern:/(<script[^>]*>)(.*?)(<\/script>)/g},{pattern:/(<noscript[^>]*>)(.*?)(<\/noscript>)/g},{pattern:/(<style[^>]*>)(.*?)(<\/style>)/g},{pattern:/(<pre[^>]*>)(.*?)(<\/pre>)/g,encode:1},{pattern:/(<!--\[CDATA\[)(.*?)(\]\]-->)/g}]});j=l.content;if(k.entity_encoding!=="raw"){j=i._encode(j)}if(!n.set){j=j.replace(/<p>\s+<\/p>|<p([^>]+)>\s+<\/p>/g,k.entity_encoding=="numeric"?"<p$1>&#160;</p>":"<p$1>&nbsp;</p>");if(k.remove_linebreaks){j=j.replace(/\r?\n|\r/g," ");j=j.replace(/(<[^>]+>)\s+/g,"$1 ");j=j.replace(/\s+(<\/[^>]+>)/g," $1");j=j.replace(/<(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object) ([^>]+)>\s+/g,"<$1 $2>");j=j.replace(/<(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object)>\s+/g,"<$1>");j=j.replace(/\s+<\/(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object)>/g,"</$1>")}if(k.apply_source_formatting&&k.indent_mode=="simple"){j=j.replace(/<(\/?)(ul|hr|table|meta|link|tbody|tr|object|body|head|html|map)(|[^>]+)>\s*/g,"\n<$1$2$3>\n");j=j.replace(/\s*<(p|h[1-6]|blockquote|div|title|style|pre|script|td|li|area)(|[^>]+)>/g,"\n<$1$2>");j=j.replace(/<\/(p|h[1-6]|blockquote|div|title|style|pre|script|td|li)>\s*/g,"</$1>\n");j=j.replace(/\n\n/g,"\n")}}j=i._unprotect(j,l);j=j.replace(/<!--\[CDATA\[([\s\S]+)\]\]-->/g,"<![CDATA[$1]]>");if(k.entity_encoding=="raw"){j=j.replace(/<p>&nbsp;<\/p>|<p([^>]+)>&nbsp;<\/p>/g,"<p$1>\u00a0</p>")}j=j.replace(/<noscript([^>]+|)>([\s\S]*?)<\/noscript>/g,function(h,p,o){return"<noscript"+p+">"+i.dom.decode(o.replace(/<!--|-->/g,""))+"</noscript>"})}n.content=j},_serializeNode:function(D,I){var z=this,A=z.settings,x=z.writer,q,j,u,F,E,H,B,h,y,k,r,C,p,m,G,o;if(!A.node_filter||A.node_filter(D)){switch(D.nodeType){case 1:if(D.hasAttribute?D.hasAttribute("_mce_bogus"):D.getAttribute("_mce_bogus")){return}p=G=false;q=D.hasChildNodes();k=D.getAttribute("_mce_name")||D.nodeName.toLowerCase();o=D.getAttribute("_mce_type");if(o){if(!z._info.cleanup){p=true;return}else{G=1}}if(d){if(D.scopeName!=="HTML"&&D.scopeName!=="html"){k=D.scopeName+":"+k}}if(k.indexOf("mce:")===0){k=k.substring(4)}if(!G){if(!z.validElementsRE||!z.validElementsRE.test(k)||(z.invalidElementsRE&&z.invalidElementsRE.test(k))||I){p=true;break}}if(d){if(A.fix_content_duplication){if(D._mce_serialized==z.key){return}D._mce_serialized=z.key}if(k.charAt(0)=="/"){k=k.substring(1)}}else{if(a){if(D.nodeName==="BR"&&D.getAttribute("type")=="_moz"){return}}}if(A.validate_children){if(z.elementName&&!z.schema.isValid(z.elementName,k)){p=true;break}z.elementName=k}r=z.findRule(k);if(!r){p=true;break}k=r.name||k;m=A.closed.test(k);if((!q&&r.noEmpty)||(d&&!k)){p=true;break}if(r.requiredAttribs){H=r.requiredAttribs;for(F=H.length-1;F>=0;F--){if(this.dom.getAttrib(D,H[F])!==""){break}}if(F==-1){p=true;break}}x.writeStartElement(k);if(r.attribs){for(F=0,B=r.attribs,E=B.length;F<E;F++){H=B[F];y=z._getAttrib(D,H);if(y!==null){x.writeAttribute(H.name,y)}}}if(r.validAttribsRE){B=z.dom.getAttribs(D);for(F=B.length-1;F>-1;F--){h=B[F];if(h.specified){H=h.nodeName.toLowerCase();if(A.invalid_attrs.test(H)||!r.validAttribsRE.test(H)){continue}C=z.findAttribRule(r,H);y=z._getAttrib(D,C,H);if(y!==null){x.writeAttribute(H,y)}}}}if(o&&G){x.writeAttribute("_mce_type",o)}if(k==="script"&&e.trim(D.innerHTML)){x.writeText("// ");x.writeCDATA(D.innerHTML.replace(/<!--|-->|<\[CDATA\[|\]\]>/g,""));q=false;break}if(r.padd){if(q&&(u=D.firstChild)&&u.nodeType===1&&D.childNodes.length===1){if(u.hasAttribute?u.hasAttribute("_mce_bogus"):u.getAttribute("_mce_bogus")){x.writeText("\u00a0")}}else{if(!q){x.writeText("\u00a0")}}}break;case 3:if(A.validate_children&&z.elementName&&!z.schema.isValid(z.elementName,"#text")){return}return x.writeText(D.nodeValue);case 4:return x.writeCDATA(D.nodeValue);case 8:return x.writeComment(D.nodeValue)}}else{if(D.nodeType==1){q=D.hasChildNodes()}}if(q&&!m){u=D.firstChild;while(u){z._serializeNode(u);z.elementName=k;u=u.nextSibling}}if(!p){if(!m){x.writeFullEndElement()}else{x.writeEndElement()}}},_protect:function(j){var i=this;j.items=j.items||[];function h(l){return l.replace(/[\r\n\\]/g,function(m){if(m==="\n"){return"\\n"}else{if(m==="\\"){return"\\\\"}}return"\\r"})}function k(l){return l.replace(/\\[\\rn]/g,function(m){if(m==="\\n"){return"\n"}else{if(m==="\\\\"){return"\\"}}return"\r"})}f(j.patterns,function(l){j.content=k(h(j.content).replace(l.pattern,function(n,o,m,p){m=k(m);if(l.encode){m=i._encode(m)}j.items.push(m);return o+"<!--mce:"+(j.items.length-1)+"-->"+p}))});return j},_unprotect:function(i,j){i=i.replace(/\<!--mce:([0-9]+)--\>/g,function(k,h){return j.items[parseInt(h)]});j.items=[];return i},_encode:function(m){var j=this,k=j.settings,i;if(k.entity_encoding!=="raw"){if(k.entity_encoding.indexOf("named")!=-1){j.setEntities(k.entities);i=j.entityLookup;m=m.replace(/[\u007E-\uFFFF]/g,function(h){var l;if(l=i[h]){h="&"+l+";"}return h})}if(k.entity_encoding.indexOf("numeric")!=-1){m=m.replace(/[\u007E-\uFFFF]/g,function(h){return"&#"+h.charCodeAt(0)+";"})}}return m},_setup:function(){var h=this,i=this.settings;if(h.done){return}h.done=1;h.setRules(i.valid_elements);h.addRules(i.extended_valid_elements);if(i.invalid_elements){h.invalidElementsRE=new RegExp("^("+c(i.invalid_elements.replace(/,/g,"|").toLowerCase())+")$")}if(i.attrib_value_filter){h.attribValueFilter=i.attribValueFilter}},_getAttrib:function(m,j,h){var l,k;h=h||j.name;if(j.forcedVal&&(k=j.forcedVal)){if(k==="{$uid}"){return this.dom.uniqueId()}return k}k=this.dom.getAttrib(m,h);switch(h){case"rowspan":case"colspan":if(k=="1"){k=""}break}if(this.attribValueFilter){k=this.attribValueFilter(h,k,m)}if(j.validVals){for(l=j.validVals.length-1;l>=0;l--){if(k==j.validVals[l]){break}}if(l==-1){return null}}if(k===""&&typeof(j.defaultVal)!="undefined"){k=j.defaultVal;if(k==="{$uid}"){return this.dom.uniqueId()}return k}else{if(h=="class"&&this.processObj.get){k=k.replace(/\s?mceItem\w+\s?/g,"")}}if(k===""){return null}return k}})})(tinymce);(function(a){a.dom.ScriptLoader=function(h){var c=0,k=1,i=2,l={},j=[],f={},d=[],g=0,e;function b(m,u){var v=this,q=a.DOM,s,o,r,n;function p(){q.remove(n);if(s){s.onreadystatechange=s.onload=s=null}u()}n=q.uniqueId();if(a.isIE6){o=new a.util.URI(m);r=location;if(o.host==r.hostname&&o.port==r.port&&(o.protocol+":")==r.protocol){a.util.XHR.send({url:a._addVer(o.getURI()),success:function(x){var t=q.create("script",{type:"text/javascript"});t.text=x;document.getElementsByTagName("head")[0].appendChild(t);q.remove(t);p()}});return}}s=q.create("script",{id:n,type:"text/javascript",src:a._addVer(m)});s.onload=p;s.onreadystatechange=function(){var t=s.readyState;if(t=="complete"||t=="loaded"){p()}};(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}this.isDone=function(m){return l[m]==i};this.markDone=function(m){l[m]=i};this.add=this.load=function(m,q,n){var o,p=l[m];if(p==e){j.push(m);l[m]=c}if(q){if(!f[m]){f[m]=[]}f[m].push({func:q,scope:n||this})}};this.loadQueue=function(n,m){this.loadScripts(j,n,m)};this.loadScripts=function(m,q,p){var o;function n(r){a.each(f[r],function(s){s.func.call(s.scope)});f[r]=e}d.push({func:q,scope:p||this});o=function(){var r=a.grep(m);m.length=0;a.each(r,function(s){if(l[s]==i){n(s);return}if(l[s]!=k){l[s]=k;g++;b(s,function(){l[s]=i;g--;n(s);o()})}});if(!g){a.each(d,function(s){s.func.call(s.scope)});d.length=0}};o()}};a.ScriptLoader=new a.dom.ScriptLoader()})(tinymce);tinymce.dom.TreeWalker=function(a,c){var b=a;function d(i,f,e,j){var h,g;if(i){if(!j&&i[f]){return i[f]}if(i!=c){h=i[e];if(h){return h}for(g=i.parentNode;g&&g!=c;g=g.parentNode){h=g[e];if(h){return h}}}}}this.current=function(){return b};this.next=function(e){return(b=d(b,"firstChild","nextSibling",e))};this.prev=function(e){return(b=d(b,"lastChild","lastSibling",e))}};(function(){var a={};function b(f,e){var d;function c(g){return g.replace(/[A-Z]+/g,function(h){return c(f[h])})}for(d in f){if(f.hasOwnProperty(d)){f[d]=c(f[d])}}c(e).replace(/#/g,"#text").replace(/(\w+)\[([^\]]+)\]/g,function(l,g,j){var h,k={};j=j.split(/\|/);for(h=j.length-1;h>=0;h--){k[j[h]]=1}a[g]=k})}b({Z:"#|H|K|N|O|P",Y:"#|X|form|R|Q",X:"p|T|div|U|W|isindex|fieldset|table",W:"pre|hr|blockquote|address|center|noframes",U:"ul|ol|dl|menu|dir",ZC:"#|p|Y|div|U|W|table|br|span|bdo|object|applet|img|map|K|N|Q",T:"h1|h2|h3|h4|h5|h6",ZB:"#|X|S|Q",S:"R|P",ZA:"#|a|G|J|M|O|P",R:"#|a|H|K|N|O",Q:"noscript|P",P:"ins|del|script",O:"input|select|textarea|label|button",N:"M|L",M:"em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym",L:"sub|sup",K:"J|I",J:"tt|i|b|u|s|strike",I:"big|small|font|basefont",H:"G|F",G:"br|span|bdo",F:"object|applet|img|map|iframe"},"script[]style[]object[#|param|X|form|a|H|K|N|O|Q]param[]p[S]a[Z]br[]span[S]bdo[S]applet[#|param|X|form|a|H|K|N|O|Q]h1[S]img[]map[X|form|Q|area]h2[S]iframe[#|X|form|a|H|K|N|O|Q]h3[S]tt[S]i[S]b[S]u[S]s[S]strike[S]big[S]small[S]font[S]basefont[]em[S]strong[S]dfn[S]code[S]q[S]samp[S]kbd[S]var[S]cite[S]abbr[S]acronym[S]sub[S]sup[S]input[]select[optgroup|option]optgroup[option]option[]textarea[]label[S]button[#|p|T|div|U|W|table|G|object|applet|img|map|K|N|Q]h4[S]ins[#|X|form|a|H|K|N|O|Q]h5[S]del[#|X|form|a|H|K|N|O|Q]h6[S]div[#|X|form|a|H|K|N|O|Q]ul[li]li[#|X|form|a|H|K|N|O|Q]ol[li]dl[dt|dd]dt[S]dd[#|X|form|a|H|K|N|O|Q]menu[li]dir[li]pre[ZA]hr[]blockquote[#|X|form|a|H|K|N|O|Q]address[S|p]center[#|X|form|a|H|K|N|O|Q]noframes[#|X|form|a|H|K|N|O|Q]isindex[]fieldset[#|legend|X|form|a|H|K|N|O|Q]legend[S]table[caption|col|colgroup|thead|tfoot|tbody|tr]caption[S]col[]colgroup[col]thead[tr]tr[th|td]th[#|X|form|a|H|K|N|O|Q]form[#|X|a|H|K|N|O|Q]noscript[#|X|form|a|H|K|N|O|Q]td[#|X|form|a|H|K|N|O|Q]tfoot[tr]tbody[tr]area[]base[]body[#|X|form|a|H|K|N|O|Q]");tinymce.dom.Schema=function(){var c=this,d=a;c.isValid=function(f,e){var g=d[f];return !!(g&&(!e||g[e]))}}})();(function(a){a.dom.RangeUtils=function(c){var b="\uFEFF";this.walk=function(d,r){var h=d.startContainer,k=d.startOffset,s=d.endContainer,l=d.endOffset,i,f,n,g,q,p,e;e=c.select("td.mceSelected,th.mceSelected");if(e.length>0){a.each(e,function(t){r([t])});return}function o(v,u,t){var x=[];for(;v&&v!=t;v=v[u]){x.push(v)}return x}function m(u,t){do{if(u.parentNode==t){return u}u=u.parentNode}while(u)}function j(v,u,x){var t=x?"nextSibling":"previousSibling";for(g=v,q=g.parentNode;g&&g!=u;g=q){q=g.parentNode;p=o(g==v?g:g[t],t);if(p.length){if(!x){p.reverse()}r(p)}}}if(h.nodeType==1&&h.hasChildNodes()){h=h.childNodes[k]}if(s.nodeType==1&&s.hasChildNodes()){s=s.childNodes[Math.min(k==l?l:l-1,s.childNodes.length-1)]}i=c.findCommonAncestor(h,s);if(h==s){return r([h])}for(g=h;g;g=g.parentNode){if(g==s){return j(h,i,true)}if(g==i){break}}for(g=s;g;g=g.parentNode){if(g==h){return j(s,i)}if(g==i){break}}f=m(h,i)||h;n=m(s,i)||s;j(h,f,true);p=o(f==h?f:f.nextSibling,"nextSibling",n==s?n.nextSibling:n);if(p.length){r(p)}j(s,n)}}})(tinymce);(function(c){var b=c.DOM,a=c.is;c.create("tinymce.ui.Control",{Control:function(e,d){this.id=e;this.settings=d=d||{};this.rendered=false;this.onRender=new c.util.Dispatcher(this);this.classPrefix="";this.scope=d.scope||this;this.disabled=0;this.active=0},setDisabled:function(d){var f;if(d!=this.disabled){f=b.get(this.id);if(f&&this.settings.unavailable_prefix){if(d){this.prevTitle=f.title;f.title=this.settings.unavailable_prefix+": "+f.title}else{f.title=this.prevTitle}}this.setState("Disabled",d);this.setState("Enabled",!d);this.disabled=d}},isDisabled:function(){return this.disabled},setActive:function(d){if(d!=this.active){this.setState("Active",d);this.active=d}},isActive:function(){return this.active},setState:function(f,d){var e=b.get(this.id);f=this.classPrefix+f;if(d){b.addClass(e,f)}else{b.removeClass(e,f)}},isRendered:function(){return this.rendered},renderHTML:function(){},renderTo:function(d){b.setHTML(d,this.renderHTML())},postRender:function(){var e=this,d;if(a(e.disabled)){d=e.disabled;e.disabled=-1;e.setDisabled(d)}if(a(e.active)){d=e.active;e.active=-1;e.setActive(d)}},remove:function(){b.remove(this.id);this.destroy()},destroy:function(){c.dom.Event.clear(this.id)}})})(tinymce);tinymce.create("tinymce.ui.Container:tinymce.ui.Control",{Container:function(b,a){this.parent(b,a);this.controls=[];this.lookup={}},add:function(a){this.lookup[a.id]=a;this.controls.push(a);return a},get:function(a){return this.lookup[a]}});tinymce.create("tinymce.ui.Separator:tinymce.ui.Control",{Separator:function(b,a){this.parent(b,a);this.classPrefix="mceSeparator"},renderHTML:function(){return tinymce.DOM.createHTML("span",{"class":this.classPrefix})}});(function(d){var c=d.is,b=d.DOM,e=d.each,a=d.walk;d.create("tinymce.ui.MenuItem:tinymce.ui.Control",{MenuItem:function(g,f){this.parent(g,f);this.classPrefix="mceMenuItem"},setSelected:function(f){this.setState("Selected",f);this.selected=f},isSelected:function(){return this.selected},postRender:function(){var f=this;f.parent();if(c(f.selected)){f.setSelected(f.selected)}}})})(tinymce);(function(d){var c=d.is,b=d.DOM,e=d.each,a=d.walk;d.create("tinymce.ui.Menu:tinymce.ui.MenuItem",{Menu:function(h,g){var f=this;f.parent(h,g);f.items={};f.collapsed=false;f.menuCount=0;f.onAddItem=new d.util.Dispatcher(this)},expand:function(g){var f=this;if(g){a(f,function(h){if(h.expand){h.expand()}},"items",f)}f.collapsed=false},collapse:function(g){var f=this;if(g){a(f,function(h){if(h.collapse){h.collapse()}},"items",f)}f.collapsed=true},isCollapsed:function(){return this.collapsed},add:function(f){if(!f.settings){f=new d.ui.MenuItem(f.id||b.uniqueId(),f)}this.onAddItem.dispatch(this,f);return this.items[f.id]=f},addSeparator:function(){return this.add({separator:true})},addMenu:function(f){if(!f.collapse){f=this.createMenu(f)}this.menuCount++;return this.add(f)},hasMenus:function(){return this.menuCount!==0},remove:function(f){delete this.items[f.id]},removeAll:function(){var f=this;a(f,function(g){if(g.removeAll){g.removeAll()}else{g.remove()}g.destroy()},"items",f);f.items={}},createMenu:function(g){var f=new d.ui.Menu(g.id||b.uniqueId(),g);f.onAddItem.add(this.onAddItem.dispatch,this.onAddItem);return f}})})(tinymce);(function(e){var d=e.is,c=e.DOM,f=e.each,a=e.dom.Event,b=e.dom.Element;e.create("tinymce.ui.DropMenu:tinymce.ui.Menu",{DropMenu:function(h,g){g=g||{};g.container=g.container||c.doc.body;g.offset_x=g.offset_x||0;g.offset_y=g.offset_y||0;g.vp_offset_x=g.vp_offset_x||0;g.vp_offset_y=g.vp_offset_y||0;if(d(g.icons)&&!g.icons){g["class"]+=" mceNoIcons"}this.parent(h,g);this.onShowMenu=new e.util.Dispatcher(this);this.onHideMenu=new e.util.Dispatcher(this);this.classPrefix="mceMenu"},createMenu:function(j){var h=this,i=h.settings,g;j.container=j.container||i.container;j.parent=h;j.constrain=j.constrain||i.constrain;j["class"]=j["class"]||i["class"];j.vp_offset_x=j.vp_offset_x||i.vp_offset_x;j.vp_offset_y=j.vp_offset_y||i.vp_offset_y;g=new e.ui.DropMenu(j.id||c.uniqueId(),j);g.onAddItem.add(h.onAddItem.dispatch,h.onAddItem);return g},update:function(){var i=this,j=i.settings,g=c.get("menu_"+i.id+"_tbl"),l=c.get("menu_"+i.id+"_co"),h,k;h=j.max_width?Math.min(g.clientWidth,j.max_width):g.clientWidth;k=j.max_height?Math.min(g.clientHeight,j.max_height):g.clientHeight;if(!c.boxModel){i.element.setStyles({width:h+2,height:k+2})}else{i.element.setStyles({width:h,height:k})}if(j.max_width){c.setStyle(l,"width",h)}if(j.max_height){c.setStyle(l,"height",k);if(g.clientHeight<j.max_height){c.setStyle(l,"overflow","hidden")}}},showMenu:function(p,n,r){var z=this,A=z.settings,o,g=c.getViewPort(),u,l,v,q,i=2,k,j,m=z.classPrefix;z.collapse(1);if(z.isMenuVisible){return}if(!z.rendered){o=c.add(z.settings.container,z.renderNode());f(z.items,function(h){h.postRender()});z.element=new b("menu_"+z.id,{blocker:1,container:A.container})}else{o=c.get("menu_"+z.id)}if(!e.isOpera){c.setStyles(o,{left:-65535,top:-65535})}c.show(o);z.update();p+=A.offset_x||0;n+=A.offset_y||0;g.w-=4;g.h-=4;if(A.constrain){u=o.clientWidth-i;l=o.clientHeight-i;v=g.x+g.w;q=g.y+g.h;if((p+A.vp_offset_x+u)>v){p=r?r-u:Math.max(0,(v-A.vp_offset_x)-u)}if((n+A.vp_offset_y+l)>q){n=Math.max(0,(q-A.vp_offset_y)-l)}}c.setStyles(o,{left:p,top:n});z.element.update();z.isMenuVisible=1;z.mouseClickFunc=a.add(o,"click",function(s){var h;s=s.target;if(s&&(s=c.getParent(s,"tr"))&&!c.hasClass(s,m+"ItemSub")){h=z.items[s.id];if(h.isDisabled()){return}k=z;while(k){if(k.hideMenu){k.hideMenu()}k=k.settings.parent}if(h.settings.onclick){h.settings.onclick(s)}return a.cancel(s)}});if(z.hasMenus()){z.mouseOverFunc=a.add(o,"mouseover",function(x){var h,t,s;x=x.target;if(x&&(x=c.getParent(x,"tr"))){h=z.items[x.id];if(z.lastMenu){z.lastMenu.collapse(1)}if(h.isDisabled()){return}if(x&&c.hasClass(x,m+"ItemSub")){t=c.getRect(x);h.showMenu((t.x+t.w-i),t.y-i,t.x);z.lastMenu=h;c.addClass(c.get(h.id).firstChild,m+"ItemActive")}}})}z.onShowMenu.dispatch(z);if(A.keyboard_focus){a.add(o,"keydown",z._keyHandler,z);c.select("a","menu_"+z.id)[0].focus();z._focusIdx=0}},hideMenu:function(j){var g=this,i=c.get("menu_"+g.id),h;if(!g.isMenuVisible){return}a.remove(i,"mouseover",g.mouseOverFunc);a.remove(i,"click",g.mouseClickFunc);a.remove(i,"keydown",g._keyHandler);c.hide(i);g.isMenuVisible=0;if(!j){g.collapse(1)}if(g.element){g.element.hide()}if(h=c.get(g.id)){c.removeClass(h.firstChild,g.classPrefix+"ItemActive")}g.onHideMenu.dispatch(g)},add:function(i){var g=this,h;i=g.parent(i);if(g.isRendered&&(h=c.get("menu_"+g.id))){g._add(c.select("tbody",h)[0],i)}return i},collapse:function(g){this.parent(g);this.hideMenu(1)},remove:function(g){c.remove(g.id);this.destroy();return this.parent(g)},destroy:function(){var g=this,h=c.get("menu_"+g.id);a.remove(h,"mouseover",g.mouseOverFunc);a.remove(h,"click",g.mouseClickFunc);if(g.element){g.element.remove()}c.remove(h)},renderNode:function(){var i=this,j=i.settings,l,h,k,g;g=c.create("div",{id:"menu_"+i.id,"class":j["class"],style:"position:absolute;left:0;top:0;z-index:200000"});k=c.add(g,"div",{id:"menu_"+i.id+"_co","class":i.classPrefix+(j["class"]?" "+j["class"]:"")});i.element=new b("menu_"+i.id,{blocker:1,container:j.container});if(j.menu_line){c.add(k,"span",{"class":i.classPrefix+"Line"})}l=c.add(k,"table",{id:"menu_"+i.id+"_tbl",border:0,cellPadding:0,cellSpacing:0});h=c.add(l,"tbody");f(i.items,function(m){i._add(h,m)});i.rendered=true;return g},_keyHandler:function(j){var i=this,h=j.keyCode;function g(m){var k=i._focusIdx+m,l=c.select("a","menu_"+i.id)[k];if(l){i._focusIdx=k;l.focus()}}switch(h){case 38:g(-1);return;case 40:g(1);return;case 13:return;case 27:return this.hideMenu()}},_add:function(j,h){var i,q=h.settings,p,l,k,m=this.classPrefix,g;if(q.separator){l=c.add(j,"tr",{id:h.id,"class":m+"ItemSeparator"});c.add(l,"td",{"class":m+"ItemSeparator"});if(i=l.previousSibling){c.addClass(i,"mceLast")}return}i=l=c.add(j,"tr",{id:h.id,"class":m+"Item "+m+"ItemEnabled"});i=k=c.add(i,"td");i=p=c.add(i,"a",{href:"javascript:;",onclick:"return false;",onmousedown:"return false;"});c.addClass(k,q["class"]);g=c.add(i,"span",{"class":"mceIcon"+(q.icon?" mce_"+q.icon:"")});if(q.icon_src){c.add(g,"img",{src:q.icon_src})}i=c.add(i,q.element||"span",{"class":"mceText",title:h.settings.title},h.settings.title);if(h.settings.style){c.setAttrib(i,"style",h.settings.style)}if(j.childNodes.length==1){c.addClass(l,"mceFirst")}if((i=l.previousSibling)&&c.hasClass(i,m+"ItemSeparator")){c.addClass(l,"mceFirst")}if(h.collapse){c.addClass(l,m+"ItemSub")}if(i=l.previousSibling){c.removeClass(i,"mceLast")}c.addClass(l,"mceLast")}})})(tinymce);(function(b){var a=b.DOM;b.create("tinymce.ui.Button:tinymce.ui.Control",{Button:function(d,c){this.parent(d,c);this.classPrefix="mceButton"},renderHTML:function(){var f=this.classPrefix,e=this.settings,d,c;c=a.encode(e.label||"");d='<a id="'+this.id+'" href="javascript:;" class="'+f+" "+f+"Enabled "+e["class"]+(c?" "+f+"Labeled":"")+'" onmousedown="return false;" onclick="return false;" title="'+a.encode(e.title)+'">';if(e.image){d+='<img class="mceIcon" src="'+e.image+'" />'+c+"</a>"}else{d+='<span class="mceIcon '+e["class"]+'"></span>'+(c?'<span class="'+f+'Label">'+c+"</span>":"")+"</a>"}return d},postRender:function(){var c=this,d=c.settings;b.dom.Event.add(c.id,"click",function(f){if(!c.isDisabled()){return d.onclick.call(d.scope,f)}})}})})(tinymce);(function(d){var c=d.DOM,b=d.dom.Event,e=d.each,a=d.util.Dispatcher;d.create("tinymce.ui.ListBox:tinymce.ui.Control",{ListBox:function(h,g){var f=this;f.parent(h,g);f.items=[];f.onChange=new a(f);f.onPostRender=new a(f);f.onAdd=new a(f);f.onRenderMenu=new d.util.Dispatcher(this);f.classPrefix="mceListBox"},select:function(h){var g=this,j,i;if(h==undefined){return g.selectByIndex(-1)}if(h&&h.call){i=h}else{i=function(f){return f==h}}if(h!=g.selectedValue){e(g.items,function(k,f){if(i(k.value)){j=1;g.selectByIndex(f);return false}});if(!j){g.selectByIndex(-1)}}},selectByIndex:function(f){var g=this,h,i;if(f!=g.selectedIndex){h=c.get(g.id+"_text");i=g.items[f];if(i){g.selectedValue=i.value;g.selectedIndex=f;c.setHTML(h,c.encode(i.title));c.removeClass(h,"mceTitle")}else{c.setHTML(h,c.encode(g.settings.title));c.addClass(h,"mceTitle");g.selectedValue=g.selectedIndex=null}h=0}},add:function(i,f,h){var g=this;h=h||{};h=d.extend(h,{title:i,value:f});g.items.push(h);g.onAdd.dispatch(g,h)},getLength:function(){return this.items.length},renderHTML:function(){var i="",f=this,g=f.settings,j=f.classPrefix;i='<table id="'+f.id+'" cellpadding="0" cellspacing="0" class="'+j+" "+j+"Enabled"+(g["class"]?(" "+g["class"]):"")+'"><tbody><tr>';i+="<td>"+c.createHTML("a",{id:f.id+"_text",href:"javascript:;","class":"mceText",onclick:"return false;",onmousedown:"return false;"},c.encode(f.settings.title))+"</td>";i+="<td>"+c.createHTML("a",{id:f.id+"_open",tabindex:-1,href:"javascript:;","class":"mceOpen",onclick:"return false;",onmousedown:"return false;"},"<span></span>")+"</td>";i+="</tr></tbody></table>";return i},showMenu:function(){var g=this,j,i,h=c.get(this.id),f;if(g.isDisabled()||g.items.length==0){return}if(g.menu&&g.menu.isMenuVisible){return g.hideMenu()}if(!g.isMenuRendered){g.renderMenu();g.isMenuRendered=true}j=c.getPos(this.settings.menu_container);i=c.getPos(h);f=g.menu;f.settings.offset_x=i.x;f.settings.offset_y=i.y;f.settings.keyboard_focus=!d.isOpera;if(g.oldID){f.items[g.oldID].setSelected(0)}e(g.items,function(k){if(k.value===g.selectedValue){f.items[k.id].setSelected(1);g.oldID=k.id}});f.showMenu(0,h.clientHeight);b.add(c.doc,"mousedown",g.hideMenu,g);c.addClass(g.id,g.classPrefix+"Selected")},hideMenu:function(g){var f=this;if(f.menu&&f.menu.isMenuVisible){if(g&&g.type=="mousedown"&&(g.target.id==f.id+"_text"||g.target.id==f.id+"_open")){return}if(!g||!c.getParent(g.target,".mceMenu")){c.removeClass(f.id,f.classPrefix+"Selected");b.remove(c.doc,"mousedown",f.hideMenu,f);f.menu.hideMenu()}}},renderMenu:function(){var g=this,f;f=g.settings.control_manager.createDropMenu(g.id+"_menu",{menu_line:1,"class":g.classPrefix+"Menu mceNoIcons",max_width:150,max_height:150});f.onHideMenu.add(g.hideMenu,g);f.add({title:g.settings.title,"class":"mceMenuItemTitle",onclick:function(){if(g.settings.onselect("")!==false){g.select("")}}});e(g.items,function(h){if(h.value===undefined){f.add({title:h.title,"class":"mceMenuItemTitle",onclick:function(){if(g.settings.onselect("")!==false){g.select("")}}})}else{h.id=c.uniqueId();h.onclick=function(){if(g.settings.onselect(h.value)!==false){g.select(h.value)}};f.add(h)}});g.onRenderMenu.dispatch(g,f);g.menu=f},postRender:function(){var f=this,g=f.classPrefix;b.add(f.id,"click",f.showMenu,f);b.add(f.id+"_text","focus",function(h){if(!f._focused){f.keyDownHandler=b.add(f.id+"_text","keydown",function(l){var i=-1,j,k=l.keyCode;e(f.items,function(m,n){if(f.selectedValue==m.value){i=n}});if(k==38){j=f.items[i-1]}else{if(k==40){j=f.items[i+1]}else{if(k==13){j=f.selectedValue;f.selectedValue=null;f.settings.onselect(j);return b.cancel(l)}}}if(j){f.hideMenu();f.select(j.value)}})}f._focused=1});b.add(f.id+"_text","blur",function(){b.remove(f.id+"_text","keydown",f.keyDownHandler);f._focused=0});if(d.isIE6||!c.boxModel){b.add(f.id,"mouseover",function(){if(!c.hasClass(f.id,g+"Disabled")){c.addClass(f.id,g+"Hover")}});b.add(f.id,"mouseout",function(){if(!c.hasClass(f.id,g+"Disabled")){c.removeClass(f.id,g+"Hover")}})}f.onPostRender.dispatch(f,c.get(f.id))},destroy:function(){this.parent();b.clear(this.id+"_text");b.clear(this.id+"_open")}})})(tinymce);(function(d){var c=d.DOM,b=d.dom.Event,e=d.each,a=d.util.Dispatcher;d.create("tinymce.ui.NativeListBox:tinymce.ui.ListBox",{NativeListBox:function(g,f){this.parent(g,f);this.classPrefix="mceNativeListBox"},setDisabled:function(f){c.get(this.id).disabled=f},isDisabled:function(){return c.get(this.id).disabled},select:function(h){var g=this,j,i;if(h==undefined){return g.selectByIndex(-1)}if(h&&h.call){i=h}else{i=function(f){return f==h}}if(h!=g.selectedValue){e(g.items,function(k,f){if(i(k.value)){j=1;g.selectByIndex(f);return false}});if(!j){g.selectByIndex(-1)}}},selectByIndex:function(f){c.get(this.id).selectedIndex=f+1;this.selectedValue=this.items[f]?this.items[f].value:null},add:function(j,g,f){var i,h=this;f=f||{};f.value=g;if(h.isRendered()){c.add(c.get(this.id),"option",f,j)}i={title:j,value:g,attribs:f};h.items.push(i);h.onAdd.dispatch(h,i)},getLength:function(){return this.items.length},renderHTML:function(){var g,f=this;g=c.createHTML("option",{value:""},"-- "+f.settings.title+" --");e(f.items,function(h){g+=c.createHTML("option",{value:h.value},h.title)});g=c.createHTML("select",{id:f.id,"class":"mceNativeListBox"},g);return g},postRender:function(){var g=this,h;g.rendered=true;function f(j){var i=g.items[j.target.selectedIndex-1];if(i&&(i=i.value)){g.onChange.dispatch(g,i);if(g.settings.onselect){g.settings.onselect(i)}}}b.add(g.id,"change",f);b.add(g.id,"keydown",function(j){var i;b.remove(g.id,"change",h);i=b.add(g.id,"blur",function(){b.add(g.id,"change",f);b.remove(g.id,"blur",i)});if(j.keyCode==13||j.keyCode==32){f(j);return b.cancel(j)}});g.onPostRender.dispatch(g,c.get(g.id))}})})(tinymce);(function(c){var b=c.DOM,a=c.dom.Event,d=c.each;c.create("tinymce.ui.MenuButton:tinymce.ui.Button",{MenuButton:function(f,e){this.parent(f,e);this.onRenderMenu=new c.util.Dispatcher(this);e.menu_container=e.menu_container||b.doc.body},showMenu:function(){var g=this,j,i,h=b.get(g.id),f;if(g.isDisabled()){return}if(!g.isMenuRendered){g.renderMenu();g.isMenuRendered=true}if(g.isMenuVisible){return g.hideMenu()}j=b.getPos(g.settings.menu_container);i=b.getPos(h);f=g.menu;f.settings.offset_x=i.x;f.settings.offset_y=i.y;f.settings.vp_offset_x=i.x;f.settings.vp_offset_y=i.y;f.settings.keyboard_focus=g._focused;f.showMenu(0,h.clientHeight);a.add(b.doc,"mousedown",g.hideMenu,g);g.setState("Selected",1);g.isMenuVisible=1},renderMenu:function(){var f=this,e;e=f.settings.control_manager.createDropMenu(f.id+"_menu",{menu_line:1,"class":this.classPrefix+"Menu",icons:f.settings.icons});e.onHideMenu.add(f.hideMenu,f);f.onRenderMenu.dispatch(f,e);f.menu=e},hideMenu:function(g){var f=this;if(g&&g.type=="mousedown"&&b.getParent(g.target,function(h){return h.id===f.id||h.id===f.id+"_open"})){return}if(!g||!b.getParent(g.target,".mceMenu")){f.setState("Selected",0);a.remove(b.doc,"mousedown",f.hideMenu,f);if(f.menu){f.menu.hideMenu()}}f.isMenuVisible=0},postRender:function(){var e=this,f=e.settings;a.add(e.id,"click",function(){if(!e.isDisabled()){if(f.onclick){f.onclick(e.value)}e.showMenu()}})}})})(tinymce);(function(c){var b=c.DOM,a=c.dom.Event,d=c.each;c.create("tinymce.ui.SplitButton:tinymce.ui.MenuButton",{SplitButton:function(f,e){this.parent(f,e);this.classPrefix="mceSplitButton"},renderHTML:function(){var i,f=this,g=f.settings,e;i="<tbody><tr>";if(g.image){e=b.createHTML("img ",{src:g.image,"class":"mceAction "+g["class"]})}else{e=b.createHTML("span",{"class":"mceAction "+g["class"]},"")}i+="<td>"+b.createHTML("a",{id:f.id+"_action",href:"javascript:;","class":"mceAction "+g["class"],onclick:"return false;",onmousedown:"return false;",title:g.title},e)+"</td>";e=b.createHTML("span",{"class":"mceOpen "+g["class"]});i+="<td>"+b.createHTML("a",{id:f.id+"_open",href:"javascript:;","class":"mceOpen "+g["class"],onclick:"return false;",onmousedown:"return false;",title:g.title},e)+"</td>";i+="</tr></tbody>";return b.createHTML("table",{id:f.id,"class":"mceSplitButton mceSplitButtonEnabled "+g["class"],cellpadding:"0",cellspacing:"0",onmousedown:"return false;",title:g.title},i)},postRender:function(){var e=this,f=e.settings;if(f.onclick){a.add(e.id+"_action","click",function(){if(!e.isDisabled()){f.onclick(e.value)}})}a.add(e.id+"_open","click",e.showMenu,e);a.add(e.id+"_open","focus",function(){e._focused=1});a.add(e.id+"_open","blur",function(){e._focused=0});if(c.isIE6||!b.boxModel){a.add(e.id,"mouseover",function(){if(!b.hasClass(e.id,"mceSplitButtonDisabled")){b.addClass(e.id,"mceSplitButtonHover")}});a.add(e.id,"mouseout",function(){if(!b.hasClass(e.id,"mceSplitButtonDisabled")){b.removeClass(e.id,"mceSplitButtonHover")}})}},destroy:function(){this.parent();a.clear(this.id+"_action");a.clear(this.id+"_open")}})})(tinymce);(function(d){var c=d.DOM,a=d.dom.Event,b=d.is,e=d.each;d.create("tinymce.ui.ColorSplitButton:tinymce.ui.SplitButton",{ColorSplitButton:function(h,g){var f=this;f.parent(h,g);f.settings=g=d.extend({colors:"000000,993300,333300,003300,003366,000080,333399,333333,800000,FF6600,808000,008000,008080,0000FF,666699,808080,FF0000,FF9900,99CC00,339966,33CCCC,3366FF,800080,999999,FF00FF,FFCC00,FFFF00,00FF00,00FFFF,00CCFF,993366,C0C0C0,FF99CC,FFCC99,FFFF99,CCFFCC,CCFFFF,99CCFF,CC99FF,FFFFFF",grid_width:8,default_color:"#888888"},f.settings);f.onShowMenu=new d.util.Dispatcher(f);f.onHideMenu=new d.util.Dispatcher(f);f.value=g.default_color},showMenu:function(){var f=this,g,j,i,h;if(f.isDisabled()){return}if(!f.isMenuRendered){f.renderMenu();f.isMenuRendered=true}if(f.isMenuVisible){return f.hideMenu()}i=c.get(f.id);c.show(f.id+"_menu");c.addClass(i,"mceSplitButtonSelected");h=c.getPos(i);c.setStyles(f.id+"_menu",{left:h.x,top:h.y+i.clientHeight,zIndex:200000});i=0;a.add(c.doc,"mousedown",f.hideMenu,f);f.onShowMenu.dispatch(f);if(f._focused){f._keyHandler=a.add(f.id+"_menu","keydown",function(k){if(k.keyCode==27){f.hideMenu()}});c.select("a",f.id+"_menu")[0].focus()}f.isMenuVisible=1},hideMenu:function(g){var f=this;if(g&&g.type=="mousedown"&&c.getParent(g.target,function(h){return h.id===f.id+"_open"})){return}if(!g||!c.getParent(g.target,".mceSplitButtonMenu")){c.removeClass(f.id,"mceSplitButtonSelected");a.remove(c.doc,"mousedown",f.hideMenu,f);a.remove(f.id+"_menu","keydown",f._keyHandler);c.hide(f.id+"_menu")}f.onHideMenu.dispatch(f);f.isMenuVisible=0},renderMenu:function(){var k=this,f,j=0,l=k.settings,p,h,o,g;g=c.add(l.menu_container,"div",{id:k.id+"_menu","class":l.menu_class+" "+l["class"],style:"position:absolute;left:0;top:-1000px;"});f=c.add(g,"div",{"class":l["class"]+" mceSplitButtonMenu"});c.add(f,"span",{"class":"mceMenuLine"});p=c.add(f,"table",{"class":"mceColorSplitMenu"});h=c.add(p,"tbody");j=0;e(b(l.colors,"array")?l.colors:l.colors.split(","),function(i){i=i.replace(/^#/,"");if(!j--){o=c.add(h,"tr");j=l.grid_width-1}p=c.add(o,"td");p=c.add(p,"a",{href:"javascript:;",style:{backgroundColor:"#"+i},_mce_color:"#"+i})});if(l.more_colors_func){p=c.add(h,"tr");p=c.add(p,"td",{colspan:l.grid_width,"class":"mceMoreColors"});p=c.add(p,"a",{id:k.id+"_more",href:"javascript:;",onclick:"return false;","class":"mceMoreColors"},l.more_colors_title);a.add(p,"click",function(i){l.more_colors_func.call(l.more_colors_scope||this);return a.cancel(i)})}c.addClass(f,"mceColorSplitMenu");a.add(k.id+"_menu","click",function(i){var m;i=i.target;if(i.nodeName=="A"&&(m=i.getAttribute("_mce_color"))){k.setColor(m)}return a.cancel(i)});return g},setColor:function(g){var f=this;c.setStyle(f.id+"_preview","backgroundColor",g);f.value=g;f.hideMenu();f.settings.onselect(g)},postRender:function(){var f=this,g=f.id;f.parent();c.add(g+"_action","div",{id:g+"_preview","class":"mceColorPreview"});c.setStyle(f.id+"_preview","backgroundColor",f.value)},destroy:function(){this.parent();a.clear(this.id+"_menu");a.clear(this.id+"_more");c.remove(this.id+"_menu")}})})(tinymce);tinymce.create("tinymce.ui.Toolbar:tinymce.ui.Container",{renderHTML:function(){var l=this,e="",g,j,b=tinymce.DOM,m=l.settings,d,a,f,k;k=l.controls;for(d=0;d<k.length;d++){j=k[d];a=k[d-1];f=k[d+1];if(d===0){g="mceToolbarStart";if(j.Button){g+=" mceToolbarStartButton"}else{if(j.SplitButton){g+=" mceToolbarStartSplitButton"}else{if(j.ListBox){g+=" mceToolbarStartListBox"}}}e+=b.createHTML("td",{"class":g},b.createHTML("span",null,"<!-- IE -->"))}if(a&&j.ListBox){if(a.Button||a.SplitButton){e+=b.createHTML("td",{"class":"mceToolbarEnd"},b.createHTML("span",null,"<!-- IE -->"))}}if(b.stdMode){e+='<td style="position: relative">'+j.renderHTML()+"</td>"}else{e+="<td>"+j.renderHTML()+"</td>"}if(f&&j.ListBox){if(f.Button||f.SplitButton){e+=b.createHTML("td",{"class":"mceToolbarStart"},b.createHTML("span",null,"<!-- IE -->"))}}}g="mceToolbarEnd";if(j.Button){g+=" mceToolbarEndButton"}else{if(j.SplitButton){g+=" mceToolbarEndSplitButton"}else{if(j.ListBox){g+=" mceToolbarEndListBox"}}}e+=b.createHTML("td",{"class":g},b.createHTML("span",null,"<!-- IE -->"));return b.createHTML("table",{id:l.id,"class":"mceToolbar"+(m["class"]?" "+m["class"]:""),cellpadding:"0",cellspacing:"0",align:l.settings.align||""},"<tbody><tr>"+e+"</tr></tbody>")}});(function(b){var a=b.util.Dispatcher,c=b.each;b.create("tinymce.AddOnManager",{items:[],urls:{},lookup:{},onAdd:new a(this),get:function(d){return this.lookup[d]},requireLangPack:function(e){var d=b.settings;if(d&&d.language){b.ScriptLoader.add(this.urls[e]+"/langs/"+d.language+".js")}},add:function(e,d){this.items.push(d);this.lookup[e]=d;this.onAdd.dispatch(this,e,d);return d},load:function(h,e,d,g){var f=this;if(f.urls[h]){return}if(e.indexOf("/")!=0&&e.indexOf("://")==-1){e=b.baseURL+"/"+e}f.urls[h]=e.substring(0,e.lastIndexOf("/"));b.ScriptLoader.add(e,d,g)}});b.PluginManager=new b.AddOnManager();b.ThemeManager=new b.AddOnManager()}(tinymce));(function(j){var g=j.each,d=j.extend,k=j.DOM,i=j.dom.Event,f=j.ThemeManager,b=j.PluginManager,e=j.explode,h=j.util.Dispatcher,a,c=0;j.documentBaseURL=window.location.href.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,"");if(!/[\/\\]$/.test(j.documentBaseURL)){j.documentBaseURL+="/"}j.baseURL=new j.util.URI(j.documentBaseURL).toAbsolute(j.baseURL);j.baseURI=new j.util.URI(j.baseURL);j.onBeforeUnload=new h(j);i.add(window,"beforeunload",function(l){j.onBeforeUnload.dispatch(j,l)});j.onAddEditor=new h(j);j.onRemoveEditor=new h(j);j.EditorManager=d(j,{editors:[],i18n:{},activeEditor:null,init:function(q){var n=this,p,l=j.ScriptLoader,u,o=[],m;function r(x,y,t){var v=x[y];if(!v){return}if(j.is(v,"string")){t=v.replace(/\.\w+$/,"");t=t?j.resolve(t):0;v=j.resolve(v)}return v.apply(t||this,Array.prototype.slice.call(arguments,2))}q=d({theme:"simple",language:"en"},q);n.settings=q;i.add(document,"init",function(){var s,v;r(q,"onpageload");switch(q.mode){case"exact":s=q.elements||"";if(s.length>0){g(e(s),function(x){if(k.get(x)){m=new j.Editor(x,q);o.push(m);m.render(1)}else{g(document.forms,function(y){g(y.elements,function(z){if(z.name===x){x="mce_editor_"+c++;k.setAttrib(z,"id",x);m=new j.Editor(x,q);o.push(m);m.render(1)}})})}})}break;case"textareas":case"specific_textareas":function t(y,x){return x.constructor===RegExp?x.test(y.className):k.hasClass(y,x)}g(k.select("textarea"),function(x){if(q.editor_deselector&&t(x,q.editor_deselector)){return}if(!q.editor_selector||t(x,q.editor_selector)){u=k.get(x.name);if(!x.id&&!u){x.id=x.name}if(!x.id||n.get(x.id)){x.id=k.uniqueId()}m=new j.Editor(x.id,q);o.push(m);m.render(1)}});break}if(q.oninit){s=v=0;g(o,function(x){v++;if(!x.initialized){x.onInit.add(function(){s++;if(s==v){r(q,"oninit")}})}else{s++}if(s==v){r(q,"oninit")}})}})},get:function(l){if(l===a){return this.editors}return this.editors[l]},getInstanceById:function(l){return this.get(l)},add:function(m){var l=this,n=l.editors;n[m.id]=m;n.push(m);l._setActive(m);l.onAddEditor.dispatch(l,m);return m},remove:function(n){var m=this,l,o=m.editors;if(!o[n.id]){return null}delete o[n.id];for(l=0;l<o.length;l++){if(o[l]==n){o.splice(l,1);break}}if(m.activeEditor==n){m._setActive(o[0])}n.destroy();m.onRemoveEditor.dispatch(m,n);return n},execCommand:function(r,p,o){var q=this,n=q.get(o),l;switch(r){case"mceFocus":n.focus();return true;case"mceAddEditor":case"mceAddControl":if(!q.get(o)){new j.Editor(o,q.settings).render()}return true;case"mceAddFrameControl":l=o.window;l.tinyMCE=tinyMCE;l.tinymce=j;j.DOM.doc=l.document;j.DOM.win=l;n=new j.Editor(o.element_id,o);n.render();if(j.isIE){function m(){n.destroy();l.detachEvent("onunload",m);l=l.tinyMCE=l.tinymce=null}l.attachEvent("onunload",m)}o.page_window=null;return true;case"mceRemoveEditor":case"mceRemoveControl":if(n){n.remove()}return true;case"mceToggleEditor":if(!n){q.execCommand("mceAddControl",0,o);return true}if(n.isHidden()){n.show()}else{n.hide()}return true}if(q.activeEditor){return q.activeEditor.execCommand(r,p,o)}return false},execInstanceCommand:function(p,o,n,m){var l=this.get(p);if(l){return l.execCommand(o,n,m)}return false},triggerSave:function(){g(this.editors,function(l){l.save()})},addI18n:function(n,q){var l,m=this.i18n;if(!j.is(n,"string")){g(n,function(r,p){g(r,function(t,s){g(t,function(v,u){if(s==="common"){m[p+"."+u]=v}else{m[p+"."+s+"."+u]=v}})})})}else{g(q,function(r,p){m[n+"."+p]=r})}},_setActive:function(l){this.selectedInstance=this.activeEditor=l}})})(tinymce);(function(m){var n=m.DOM,j=m.dom.Event,f=m.extend,k=m.util.Dispatcher,i=m.each,a=m.isGecko,b=m.isIE,e=m.isWebKit,d=m.is,h=m.ThemeManager,c=m.PluginManager,o=m.inArray,l=m.grep,g=m.explode;m.create("tinymce.Editor",{Editor:function(r,q){var p=this;p.id=p.editorId=r;p.execCommands={};p.queryStateCommands={};p.queryValueCommands={};p.isNotDirty=false;p.plugins={};i(["onPreInit","onBeforeRenderUI","onPostRender","onInit","onRemove","onActivate","onDeactivate","onClick","onEvent","onMouseUp","onMouseDown","onDblClick","onKeyDown","onKeyUp","onKeyPress","onContextMenu","onSubmit","onReset","onPaste","onPreProcess","onPostProcess","onBeforeSetContent","onBeforeGetContent","onSetContent","onGetContent","onLoadContent","onSaveContent","onNodeChange","onChange","onBeforeExecCommand","onExecCommand","onUndo","onRedo","onVisualAid","onSetProgressState"],function(s){p[s]=new k(p)});p.settings=q=f({id:r,language:"en",docs_language:"en",theme:"simple",skin:"default",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:m.documentBaseURL,add_form_submit_trigger:1,submit_patch:1,add_unload_trigger:1,convert_urls:1,relative_urls:1,remove_script_host:1,table_inline_editing:0,object_resizing:1,cleanup:1,accessibility_focus:1,custom_shortcuts:1,custom_undo_redo_keyboard_shortcuts:1,custom_undo_redo_restore_selection:1,custom_undo_redo:1,doctype:m.isIE6?'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">':"<!DOCTYPE>",visual_table_class:"mceItemTable",visual:1,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",apply_source_formatting:1,directionality:"ltr",forced_root_block:"p",valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote[cite],-table[border|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value],embed[type|width|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value|tabindex|accesskey],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big",hidden_input:1,padd_empty_editor:1,render_ui:1,init_theme:1,force_p_newlines:1,indentation:"30px",keep_styles:1,fix_table_elements:1,inline_styles:1,convert_fonts_to_spans:true},q);p.documentBaseURI=new m.util.URI(q.document_base_url||m.documentBaseURL,{base_uri:tinyMCE.baseURI});p.baseURI=m.baseURI;p.execCallback("setup",p)},render:function(r){var u=this,v=u.settings,x=u.id,p=m.ScriptLoader;if(!j.domLoaded){j.add(document,"init",function(){u.render()});return}tinyMCE.settings=v;if(!u.getElement()){return}if(!/TEXTAREA|INPUT/i.test(u.getElement().nodeName)&&v.hidden_input&&n.getParent(x,"form")){n.insertAfter(n.create("input",{type:"hidden",name:x}),x)}if(m.WindowManager){u.windowManager=new m.WindowManager(u)}if(v.encoding=="xml"){u.onGetContent.add(function(s,t){if(t.save){t.content=n.encode(t.content)}})}if(v.add_form_submit_trigger){u.onSubmit.addToTop(function(){if(u.initialized){u.save();u.isNotDirty=1}})}if(v.add_unload_trigger){u._beforeUnload=tinyMCE.onBeforeUnload.add(function(){if(u.initialized&&!u.destroyed&&!u.isHidden()){u.save({format:"raw",no_events:true})}})}m.addUnload(u.destroy,u);if(v.submit_patch){u.onBeforeRenderUI.add(function(){var s=u.getElement().form;if(!s){return}if(s._mceOldSubmit){return}if(!s.submit.nodeType&&!s.submit.length){u.formElement=s;s._mceOldSubmit=s.submit;s.submit=function(){m.triggerSave();u.isNotDirty=1;return u.formElement._mceOldSubmit(u.formElement)}}s=null})}function q(){if(v.language){p.add(m.baseURL+"/langs/"+v.language+".js")}if(v.theme&&v.theme.charAt(0)!="-"&&!h.urls[v.theme]){h.load(v.theme,"themes/"+v.theme+"/editor_template"+m.suffix+".js")}i(g(v.plugins),function(s){if(s&&s.charAt(0)!="-"&&!c.urls[s]){if(s=="safari"){return}c.load(s,"plugins/"+s+"/editor_plugin"+m.suffix+".js")}});p.loadQueue(function(){if(!u.removed){u.init()}})}q()},init:function(){var r,E=this,F=E.settings,B,y,A=E.getElement(),q,p,C,x,z,D;m.add(E);if(F.theme){F.theme=F.theme.replace(/-/,"");q=h.get(F.theme);E.theme=new q();if(E.theme.init&&F.init_theme){E.theme.init(E,h.urls[F.theme]||m.documentBaseURL.replace(/\/$/,""))}}i(g(F.plugins.replace(/\-/g,"")),function(G){var H=c.get(G),t=c.urls[G]||m.documentBaseURL.replace(/\/$/,""),s;if(H){s=new H(E,t);E.plugins[G]=s;if(s.init){s.init(E,t)}}});if(F.popup_css!==false){if(F.popup_css){F.popup_css=E.documentBaseURI.toAbsolute(F.popup_css)}else{F.popup_css=E.baseURI.toAbsolute("themes/"+F.theme+"/skins/"+F.skin+"/dialog.css")}}if(F.popup_css_add){F.popup_css+=","+E.documentBaseURI.toAbsolute(F.popup_css_add)}E.controlManager=new m.ControlManager(E);if(F.custom_undo_redo){E.onBeforeExecCommand.add(function(t,G,u,H,s){if(G!="Undo"&&G!="Redo"&&G!="mceRepaint"&&(!s||!s.skip_undo)){if(!E.undoManager.hasUndo()){E.undoManager.add()}}});E.onExecCommand.add(function(t,G,u,H,s){if(G!="Undo"&&G!="Redo"&&G!="mceRepaint"&&(!s||!s.skip_undo)){E.undoManager.add()}})}E.onExecCommand.add(function(s,t){if(!/^(FontName|FontSize)$/.test(t)){E.nodeChanged()}});if(a){function v(s,t){if(!t||!t.initial){E.execCommand("mceRepaint")}}E.onUndo.add(v);E.onRedo.add(v);E.onSetContent.add(v)}E.onBeforeRenderUI.dispatch(E,E.controlManager);if(F.render_ui){B=F.width||A.style.width||A.offsetWidth;y=F.height||A.style.height||A.offsetHeight;E.orgDisplay=A.style.display;D=/^[0-9\.]+(|px)$/i;if(D.test(""+B)){B=Math.max(parseInt(B)+(q.deltaWidth||0),100)}if(D.test(""+y)){y=Math.max(parseInt(y)+(q.deltaHeight||0),100)}q=E.theme.renderUI({targetNode:A,width:B,height:y,deltaWidth:F.delta_width,deltaHeight:F.delta_height});E.editorContainer=q.editorContainer}if(document.domain&&location.hostname!=document.domain){m.relaxedDomain=document.domain}n.setStyles(q.sizeContainer||q.editorContainer,{width:B,height:y});y=(q.iframeHeight||y)+(typeof(y)=="number"?(q.deltaHeight||0):"");if(y<100){y=100}E.iframeHTML=F.doctype+'<html><head xmlns="http://www.w3.org/1999/xhtml">';if(F.document_base_url!=m.documentBaseURL){E.iframeHTML+='<base href="'+E.documentBaseURI.getURI()+'" />'}E.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';if(m.relaxedDomain){E.iframeHTML+='<script type="text/javascript">document.domain = "'+m.relaxedDomain+'";<\/script>'}x=F.body_id||"tinymce";if(x.indexOf("=")!=-1){x=E.getParam("body_id","","hash");x=x[E.id]||x}z=F.body_class||"";if(z.indexOf("=")!=-1){z=E.getParam("body_class","","hash");z=z[E.id]||""}E.iframeHTML+='</head><body id="'+x+'" class="mceContentBody '+z+'"></body></html>';if(m.relaxedDomain){if(b||(m.isOpera&&parseFloat(opera.version())>=9.5)){C='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinyMCE.get("'+E.id+'");document.write(ed.iframeHTML);document.close();ed.setupIframe();})()'}else{if(m.isOpera){C='javascript:(function(){document.open();document.domain="'+document.domain+'";document.close();ed.setupIframe();})()'}}}r=n.add(q.iframeContainer,"iframe",{id:E.id+"_ifr",src:C||'javascript:""',frameBorder:"0",style:{width:"100%",height:y}});E.contentAreaContainer=q.iframeContainer;n.get(q.editorContainer).style.display=E.orgDisplay;n.get(E.id).style.display="none";if(!b||!m.relaxedDomain){E.setupIframe()}A=r=q=null},setupIframe:function(){var z=this,A=z.settings,r=n.get(z.id),u=z.getDoc(),q,x;if(!b||!m.relaxedDomain){u.open();u.write(z.iframeHTML);u.close()}if(!b){try{if(!A.readonly){u.designMode="On"}}catch(v){}}if(b){x=z.getBody();n.hide(x);if(!A.readonly){x.contentEditable=true}n.show(x)}z.dom=new m.dom.DOMUtils(z.getDoc(),{keep_values:true,url_converter:z.convertURL,url_converter_scope:z,hex_colors:A.force_hex_style_colors,class_filter:A.class_filter,update_styles:1,fix_ie_paragraphs:1,valid_styles:A.valid_styles});z.schema=new m.dom.Schema();z.serializer=new m.dom.Serializer(f(A,{valid_elements:A.verify_html===false?"*[*]":A.valid_elements,dom:z.dom,schema:z.schema}));z.selection=new m.dom.Selection(z.dom,z.getWin(),z.serializer);z.formatter=new m.Formatter(this);z.formatter.register({alignleft:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"left"}},{selector:"img,table",styles:{"float":"left"}}],aligncenter:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"center"}},{selector:"img",styles:{display:"block",marginLeft:"auto",marginRight:"auto"}},{selector:"table",styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"right"}},{selector:"img,table",styles:{"float":"right"}}],alignfull:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"justify"}}],bold:[{inline:"strong"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b"}],italic:[{inline:"em"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:true},{inline:"u"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:true},{inline:"u"}],forecolor:{inline:"span",styles:{color:"%value"}},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"}},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},removeformat:[{selector:"b,strong,em,i,font,u,strike",remove:"all",split:true,expand:false,block_expand:true,deep:true},{selector:"span",attributes:["style","class"],remove:"empty",split:true,expand:false,deep:true},{selector:"*",attributes:["style","class"],split:false,expand:false,deep:true}]});i("p h1 h2 h3 h4 h5 h6 div address pre div code dt dd samp".split(/\s/),function(s){z.formatter.register(s,{block:s,remove:"all"})});z.formatter.register(z.settings.formats);z.undoManager=new m.UndoManager(z);z.undoManager.onAdd.add(function(t,s){if(!s.initial){return z.onChange.dispatch(z,s,t)}});z.undoManager.onUndo.add(function(t,s){return z.onUndo.dispatch(z,s,t)});z.undoManager.onRedo.add(function(t,s){return z.onRedo.dispatch(z,s,t)});z.forceBlocks=new m.ForceBlocks(z,{forced_root_block:A.forced_root_block});z.editorCommands=new m.EditorCommands(z);z.serializer.onPreProcess.add(function(s,t){return z.onPreProcess.dispatch(z,t,s)});z.serializer.onPostProcess.add(function(s,t){return z.onPostProcess.dispatch(z,t,s)});z.onPreInit.dispatch(z);if(!A.gecko_spellcheck){z.getBody().spellcheck=0}if(!A.readonly){z._addEvents()}z.controlManager.onPostRender.dispatch(z,z.controlManager);z.onPostRender.dispatch(z);if(A.directionality){z.getBody().dir=A.directionality}if(A.nowrap){z.getBody().style.whiteSpace="nowrap"}if(A.custom_elements){function y(s,t){i(g(A.custom_elements),function(B){var C;if(B.indexOf("~")===0){B=B.substring(1);C="span"}else{C="div"}t.content=t.content.replace(new RegExp("<("+B+")([^>]*)>","g"),"<"+C+' _mce_name="$1"$2>');t.content=t.content.replace(new RegExp("</("+B+")>","g"),"</"+C+">")})}z.onBeforeSetContent.add(y);z.onPostProcess.add(function(s,t){if(t.set){y(s,t)}})}if(A.handle_node_change_callback){z.onNodeChange.add(function(t,s,B){z.execCallback("handle_node_change_callback",z.id,B,-1,-1,true,z.selection.isCollapsed())})}if(A.save_callback){z.onSaveContent.add(function(s,B){var t=z.execCallback("save_callback",z.id,B.content,z.getBody());if(t){B.content=t}})}if(A.onchange_callback){z.onChange.add(function(t,s){z.execCallback("onchange_callback",z,s)})}if(A.convert_newlines_to_brs){z.onBeforeSetContent.add(function(s,t){if(t.initial){t.content=t.content.replace(/\r?\n/g,"<br />")}})}if(A.fix_nesting&&b){z.onBeforeSetContent.add(function(s,t){t.content=z._fixNesting(t.content)})}if(A.preformatted){z.onPostProcess.add(function(s,t){t.content=t.content.replace(/^\s*<pre.*?>/,"");t.content=t.content.replace(/<\/pre>\s*$/,"");if(t.set){t.content='<pre class="mceItemHidden">'+t.content+"</pre>"}})}if(A.verify_css_classes){z.serializer.attribValueFilter=function(D,B){var C,t;if(D=="class"){if(!z.classesRE){t=z.dom.getClasses();if(t.length>0){C="";i(t,function(s){C+=(C?"|":"")+s["class"]});z.classesRE=new RegExp("("+C+")","gi")}}return !z.classesRE||/(\bmceItem\w+\b|\bmceTemp\w+\b)/g.test(B)||z.classesRE.test(B)?B:""}return B}}if(A.cleanup_callback){z.onBeforeSetContent.add(function(s,t){t.content=z.execCallback("cleanup_callback","insert_to_editor",t.content,t)});z.onPreProcess.add(function(s,t){if(t.set){z.execCallback("cleanup_callback","insert_to_editor_dom",t.node,t)}if(t.get){z.execCallback("cleanup_callback","get_from_editor_dom",t.node,t)}});z.onPostProcess.add(function(s,t){if(t.set){t.content=z.execCallback("cleanup_callback","insert_to_editor",t.content,t)}if(t.get){t.content=z.execCallback("cleanup_callback","get_from_editor",t.content,t)}})}if(A.save_callback){z.onGetContent.add(function(s,t){if(t.save){t.content=z.execCallback("save_callback",z.id,t.content,z.getBody())}})}if(A.handle_event_callback){z.onEvent.add(function(s,t,B){if(z.execCallback("handle_event_callback",t,s,B)===false){j.cancel(t)}})}z.onSetContent.add(function(){z.addVisual(z.getBody())});if(A.padd_empty_editor){z.onPostProcess.add(function(s,t){t.content=t.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")})}if(a){function p(s,t){i(s.dom.select("a"),function(C){var B=C.parentNode;if(s.dom.isBlock(B)&&B.lastChild===C){s.dom.add(B,"br",{_mce_bogus:1})}})}z.onExecCommand.add(function(s,t){if(t==="CreateLink"){p(s)}});z.onSetContent.add(z.selection.onSetContent.add(p));if(!A.readonly){try{u.designMode="Off";u.designMode="On"}catch(v){}}}setTimeout(function(){if(z.removed){return}z.load({initial:true,format:(A.cleanup_on_startup?"html":"raw")});z.startContent=z.getContent({format:"raw"});z.initialized=true;z.onInit.dispatch(z);z.execCallback("setupcontent_callback",z.id,z.getBody(),z.getDoc());z.execCallback("init_instance_callback",z);z.focus(true);z.nodeChanged({initial:1});if(A.content_css){m.each(g(A.content_css),function(s){z.dom.loadCSS(z.documentBaseURI.toAbsolute(s))})}if(A.auto_focus){setTimeout(function(){var s=m.get(A.auto_focus);s.selection.select(s.getBody(),1);s.selection.collapse(1);s.getWin().focus()},100)}},1);r=null},focus:function(q){var s,p=this,r=p.settings.content_editable;if(!q){if(!r){p.getWin().focus()}}if(m.activeEditor!=p){if((s=m.activeEditor)!=null){s.onDeactivate.dispatch(s,p)}p.onActivate.dispatch(p,s)}m._setActive(p)},execCallback:function(u){var p=this,r=p.settings[u],q;if(!r){return}if(p.callbackLookup&&(q=p.callbackLookup[u])){r=q.func;q=q.scope}if(d(r,"string")){q=r.replace(/\.\w+$/,"");q=q?m.resolve(q):0;r=m.resolve(r);p.callbackLookup=p.callbackLookup||{};p.callbackLookup[u]={func:r,scope:q}}return r.apply(q||p,Array.prototype.slice.call(arguments,1))},translate:function(p){var r=this.settings.language||"en",q=m.i18n;if(!p){return""}return q[r+"."+p]||p.replace(/{\#([^}]+)\}/g,function(t,s){return q[r+"."+s]||"{#"+s+"}"})},getLang:function(q,p){return m.i18n[(this.settings.language||"en")+"."+q]||(d(p)?p:"{#"+q+"}")},getParam:function(u,r,p){var s=m.trim,q=d(this.settings[u])?this.settings[u]:r,t;if(p==="hash"){t={};if(d(q,"string")){i(q.indexOf("=")>0?q.split(/[;,](?![^=;,]*(?:[;,]|$))/):q.split(","),function(x){x=x.split("=");if(x.length>1){t[s(x[0])]=s(x[1])}else{t[s(x[0])]=s(x)}})}else{t=q}return t}return q},nodeChanged:function(r){var p=this,q=p.selection,u=(b?q.getNode():q.getStart())||p.getBody();if(p.initialized){r=r||{};u=b&&u.ownerDocument!=p.getDoc()?p.getBody():u;r.parents=[];p.dom.getParent(u,function(s){if(s.nodeName=="BODY"){return true}r.parents.push(s)});p.onNodeChange.dispatch(p,r?r.controlManager||p.controlManager:p.controlManager,u,q.isCollapsed(),r)}},addButton:function(r,q){var p=this;p.buttons=p.buttons||{};p.buttons[r]=q},addCommand:function(r,q,p){this.execCommands[r]={func:q,scope:p||this}},addQueryStateHandler:function(r,q,p){this.queryStateCommands[r]={func:q,scope:p||this}},addQueryValueHandler:function(r,q,p){this.queryValueCommands[r]={func:q,scope:p||this}},addShortcut:function(r,u,p,s){var q=this,v;if(!q.settings.custom_shortcuts){return false}q.shortcuts=q.shortcuts||{};if(d(p,"string")){v=p;p=function(){q.execCommand(v,false,null)}}if(d(p,"object")){v=p;p=function(){q.execCommand(v[0],v[1],v[2])}}i(g(r),function(t){var x={func:p,scope:s||this,desc:u,alt:false,ctrl:false,shift:false};i(g(t,"+"),function(y){switch(y){case"alt":case"ctrl":case"shift":x[y]=true;break;default:x.charCode=y.charCodeAt(0);x.keyCode=y.toUpperCase().charCodeAt(0)}});q.shortcuts[(x.ctrl?"ctrl":"")+","+(x.alt?"alt":"")+","+(x.shift?"shift":"")+","+x.keyCode]=x});return true},execCommand:function(x,v,z,p){var r=this,u=0,y,q;if(!/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint|SelectAll)$/.test(x)&&(!p||!p.skip_focus)){r.focus()}y={};r.onBeforeExecCommand.dispatch(r,x,v,z,y);if(y.terminate){return false}if(r.execCallback("execcommand_callback",r.id,r.selection.getNode(),x,v,z)){r.onExecCommand.dispatch(r,x,v,z,p);return true}if(y=r.execCommands[x]){q=y.func.call(y.scope,v,z);if(q!==true){r.onExecCommand.dispatch(r,x,v,z,p);return q}}i(r.plugins,function(s){if(s.execCommand&&s.execCommand(x,v,z)){r.onExecCommand.dispatch(r,x,v,z,p);u=1;return false}});if(u){return true}if(r.theme&&r.theme.execCommand&&r.theme.execCommand(x,v,z)){r.onExecCommand.dispatch(r,x,v,z,p);return true}if(m.GlobalCommands.execCommand(r,x,v,z)){r.onExecCommand.dispatch(r,x,v,z,p);return true}if(r.editorCommands.execCommand(x,v,z)){r.onExecCommand.dispatch(r,x,v,z,p);return true}r.getDoc().execCommand(x,v,z);r.onExecCommand.dispatch(r,x,v,z,p)},queryCommandState:function(u){var q=this,v,r;if(q._isHidden()){return}if(v=q.queryStateCommands[u]){r=v.func.call(v.scope);if(r!==true){return r}}v=q.editorCommands.queryCommandState(u);if(v!==-1){return v}try{return this.getDoc().queryCommandState(u)}catch(p){}},queryCommandValue:function(v){var q=this,u,r;if(q._isHidden()){return}if(u=q.queryValueCommands[v]){r=u.func.call(u.scope);if(r!==true){return r}}u=q.editorCommands.queryCommandValue(v);if(d(u)){return u}try{return this.getDoc().queryCommandValue(v)}catch(p){}},show:function(){var p=this;n.show(p.getContainer());n.hide(p.id);p.load()},hide:function(){var p=this,q=p.getDoc();if(b&&q){q.execCommand("SelectAll")}p.save();n.hide(p.getContainer());n.setStyle(p.id,"display",p.orgDisplay)},isHidden:function(){return !n.isHidden(this.id)},setProgressState:function(p,q,r){this.onSetProgressState.dispatch(this,p,q,r);return p},load:function(s){var p=this,r=p.getElement(),q;if(r){s=s||{};s.load=true;q=p.setContent(d(r.value)?r.value:r.innerHTML,s);s.element=r;if(!s.no_events){p.onLoadContent.dispatch(p,s)}s.element=r=null;return q}},save:function(u){var p=this,s=p.getElement(),q,r;if(!s||!p.initialized){return}u=u||{};u.save=true;if(!u.no_events){p.undoManager.typing=0;p.undoManager.add()}u.element=s;q=u.content=p.getContent(u);if(!u.no_events){p.onSaveContent.dispatch(p,u)}q=u.content;if(!/TEXTAREA|INPUT/i.test(s.nodeName)){s.innerHTML=q;if(r=n.getParent(p.id,"form")){i(r.elements,function(t){if(t.name==p.id){t.value=q;return false}})}}else{s.value=q}u.element=s=null;return q},setContent:function(q,r){var p=this;r=r||{};r.format=r.format||"html";r.set=true;r.content=q;if(!r.no_events){p.onBeforeSetContent.dispatch(p,r)}if(!m.isIE&&(q.length===0||/^\s+$/.test(q))){r.content=p.dom.setHTML(p.getBody(),'<br _mce_bogus="1" />');r.format="raw"}r.content=p.dom.setHTML(p.getBody(),m.trim(r.content));if(r.format!="raw"&&p.settings.cleanup){r.getInner=true;r.content=p.dom.setHTML(p.getBody(),p.serializer.serialize(p.getBody(),r))}if(!r.no_events){p.onSetContent.dispatch(p,r)}return r.content},getContent:function(r){var p=this,q;r=r||{};r.format=r.format||"html";r.get=true;if(!r.no_events){p.onBeforeGetContent.dispatch(p,r)}if(r.format!="raw"&&p.settings.cleanup){r.getInner=true;q=p.serializer.serialize(p.getBody(),r)}else{q=p.getBody().innerHTML}q=q.replace(/^\s*|\s*$/g,"");r.content=q;if(!r.no_events){p.onGetContent.dispatch(p,r)}return r.content},isDirty:function(){var p=this;return m.trim(p.startContent)!=m.trim(p.getContent({format:"raw",no_events:1}))&&!p.isNotDirty},getContainer:function(){var p=this;if(!p.container){p.container=n.get(p.editorContainer||p.id+"_parent")}return p.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return n.get(this.settings.content_element||this.id)},getWin:function(){var p=this,q;if(!p.contentWindow){q=n.get(p.id+"_ifr");if(q){p.contentWindow=q.contentWindow}}return p.contentWindow},getDoc:function(){var q=this,p;if(!q.contentDocument){p=q.getWin();if(p){q.contentDocument=p.document}}return q.contentDocument},getBody:function(){return this.bodyElement||this.getDoc().body},convertURL:function(p,x,v){var q=this,r=q.settings;if(r.urlconverter_callback){return q.execCallback("urlconverter_callback",p,v,true,x)}if(!r.convert_urls||(v&&v.nodeName=="LINK")||p.indexOf("file:")===0){return p}if(r.relative_urls){return q.documentBaseURI.toRelative(p)}p=q.documentBaseURI.toAbsolute(p,r.remove_script_host);return p},addVisual:function(r){var p=this,q=p.settings;r=r||p.getBody();if(!d(p.hasVisual)){p.hasVisual=q.visual}i(p.dom.select("table,a",r),function(t){var s;switch(t.nodeName){case"TABLE":s=p.dom.getAttrib(t,"border");if(!s||s=="0"){if(p.hasVisual){p.dom.addClass(t,q.visual_table_class)}else{p.dom.removeClass(t,q.visual_table_class)}}return;case"A":s=p.dom.getAttrib(t,"name");if(s){if(p.hasVisual){p.dom.addClass(t,"mceItemAnchor")}else{p.dom.removeClass(t,"mceItemAnchor")}}return}});p.onVisualAid.dispatch(p,r,p.hasVisual)},remove:function(){var p=this,q=p.getContainer();p.removed=1;p.hide();p.execCallback("remove_instance_callback",p);p.onRemove.dispatch(p);p.onExecCommand.listeners=[];m.remove(p);n.remove(q)},destroy:function(q){var p=this;if(p.destroyed){return}if(!q){m.removeUnload(p.destroy);tinyMCE.onBeforeUnload.remove(p._beforeUnload);if(p.theme&&p.theme.destroy){p.theme.destroy()}p.controlManager.destroy();p.selection.destroy();p.dom.destroy();if(!p.settings.content_editable){j.clear(p.getWin());j.clear(p.getDoc())}j.clear(p.getBody());j.clear(p.formElement)}if(p.formElement){p.formElement.submit=p.formElement._mceOldSubmit;p.formElement._mceOldSubmit=null}p.contentAreaContainer=p.formElement=p.container=p.settings.content_element=p.bodyElement=p.contentDocument=p.contentWindow=null;if(p.selection){p.selection=p.selection.win=p.selection.dom=p.selection.dom.doc=null}p.destroyed=1},_addEvents:function(){var v=this,u,y=v.settings,x={mouseup:"onMouseUp",mousedown:"onMouseDown",click:"onClick",keyup:"onKeyUp",keydown:"onKeyDown",keypress:"onKeyPress",submit:"onSubmit",reset:"onReset",contextmenu:"onContextMenu",dblclick:"onDblClick",paste:"onPaste"};function r(t,A){var s=t.type;if(v.removed){return}if(v.onEvent.dispatch(v,t,A)!==false){v[x[t.fakeType||t.type]].dispatch(v,t,A)}}i(x,function(t,s){switch(s){case"contextmenu":if(m.isOpera){v.dom.bind(v.getBody(),"mousedown",function(A){if(A.ctrlKey){A.fakeType="contextmenu";r(A)}})}else{v.dom.bind(v.getBody(),s,r)}break;case"paste":v.dom.bind(v.getBody(),s,function(A){r(A)});break;case"submit":case"reset":v.dom.bind(v.getElement().form||n.getParent(v.id,"form"),s,r);break;default:v.dom.bind(y.content_editable?v.getBody():v.getDoc(),s,r)}});v.dom.bind(y.content_editable?v.getBody():(a?v.getDoc():v.getWin()),"focus",function(s){v.focus(true)});if(m.isGecko){v.dom.bind(v.getDoc(),"DOMNodeInserted",function(t){var s;t=t.target;if(t.nodeType===1&&t.nodeName==="IMG"&&(s=t.getAttribute("_mce_src"))){t.src=v.documentBaseURI.toAbsolute(s)}})}if(a){function p(){var B=this,D=B.getDoc(),C=B.settings;if(a&&!C.readonly){if(B._isHidden()){try{if(!C.content_editable){D.designMode="On"}}catch(A){}}try{D.execCommand("styleWithCSS",0,false)}catch(A){if(!B._isHidden()){try{D.execCommand("useCSS",0,true)}catch(A){}}}if(!C.table_inline_editing){try{D.execCommand("enableInlineTableEditing",false,false)}catch(A){}}if(!C.object_resizing){try{D.execCommand("enableObjectResizing",false,false)}catch(A){}}}}v.onBeforeExecCommand.add(p);v.onMouseDown.add(p)}if(m.isWebKit){v.onClick.add(function(s,t){t=t.target;if(t.nodeName=="IMG"||(t.nodeName=="A"&&v.dom.hasClass(t,"mceItemAnchor"))){v.selection.getSel().setBaseAndExtent(t,0,t,1)}})}v.onMouseUp.add(v.nodeChanged);v.onClick.add(v.nodeChanged);v.onKeyUp.add(function(s,t){var A=t.keyCode;if((A>=33&&A<=36)||(A>=37&&A<=40)||A==13||A==45||A==46||A==8||(m.isMac&&(A==91||A==93))||t.ctrlKey){v.nodeChanged()}});v.onReset.add(function(){v.setContent(v.startContent,{format:"raw"})});if(y.custom_shortcuts){if(y.custom_undo_redo_keyboard_shortcuts){v.addShortcut("ctrl+z",v.getLang("undo_desc"),"Undo");v.addShortcut("ctrl+y",v.getLang("redo_desc"),"Redo")}if(a){v.addShortcut("ctrl+b",v.getLang("bold_desc"),"Bold");v.addShortcut("ctrl+i",v.getLang("italic_desc"),"Italic");v.addShortcut("ctrl+u",v.getLang("underline_desc"),"Underline")}for(u=1;u<=6;u++){v.addShortcut("ctrl+"+u,"",["FormatBlock",false,"h"+u])}v.addShortcut("ctrl+7","",["FormatBlock",false,"<p>"]);v.addShortcut("ctrl+8","",["FormatBlock",false,"<div>"]);v.addShortcut("ctrl+9","",["FormatBlock",false,"<address>"]);function z(t){var s=null;if(!t.altKey&&!t.ctrlKey&&!t.metaKey){return s}i(v.shortcuts,function(A){if(m.isMac&&A.ctrl!=t.metaKey){return}else{if(!m.isMac&&A.ctrl!=t.ctrlKey){return}}if(A.alt!=t.altKey){return}if(A.shift!=t.shiftKey){return}if(t.keyCode==A.keyCode||(t.charCode&&t.charCode==A.charCode)){s=A;return false}});return s}v.onKeyUp.add(function(s,t){var A=z(t);if(A){return j.cancel(t)}});v.onKeyPress.add(function(s,t){var A=z(t);if(A){return j.cancel(t)}});v.onKeyDown.add(function(s,t){var A=z(t);if(A){A.func.call(A.scope);return j.cancel(t)}})}if(m.isIE){v.dom.bind(v.getDoc(),"controlselect",function(A){var t=v.resizeInfo,s;A=A.target;if(A.nodeName!=="IMG"){return}if(t){v.dom.unbind(t.node,t.ev,t.cb)}if(!v.dom.hasClass(A,"mceItemNoResize")){ev="resizeend";s=v.dom.bind(A,ev,function(C){var B;C=C.target;if(B=v.dom.getStyle(C,"width")){v.dom.setAttrib(C,"width",B.replace(/[^0-9%]+/g,""));v.dom.setStyle(C,"width","")}if(B=v.dom.getStyle(C,"height")){v.dom.setAttrib(C,"height",B.replace(/[^0-9%]+/g,""));v.dom.setStyle(C,"height","")}})}else{ev="resizestart";s=v.dom.bind(A,"resizestart",j.cancel,j)}t=v.resizeInfo={node:A,ev:ev,cb:s}});v.onKeyDown.add(function(s,t){switch(t.keyCode){case 8:if(v.selection.getRng().item){s.dom.remove(v.selection.getRng().item(0));return j.cancel(t)}}})}if(m.isOpera){v.onClick.add(function(s,t){j.prevent(t)})}if(y.custom_undo_redo){function q(){v.undoManager.typing=0;v.undoManager.add()}v.dom.bind(v.getDoc(),"focusout",function(s){if(!v.removed&&v.undoManager.typing){q()}});v.onKeyUp.add(function(s,t){if((t.keyCode>=33&&t.keyCode<=36)||(t.keyCode>=37&&t.keyCode<=40)||t.keyCode==13||t.keyCode==45||t.ctrlKey){q()}});v.onKeyDown.add(function(s,t){if((t.keyCode>=33&&t.keyCode<=36)||(t.keyCode>=37&&t.keyCode<=40)||t.keyCode==13||t.keyCode==45){if(v.undoManager.typing){q()}return}if(!v.undoManager.typing){v.undoManager.add();v.undoManager.typing=1}});v.onMouseDown.add(function(){if(v.undoManager.typing){q()}})}},_isHidden:function(){var p;if(!a){return 0}p=this.selection.getSel();return(!p||!p.rangeCount||p.rangeCount==0)},_fixNesting:function(q){var r=[],p;q=q.replace(/<(\/)?([^\s>]+)[^>]*?>/g,function(t,s,v){var u;if(s==="/"){if(!r.length){return""}if(v!==r[r.length-1].tag){for(p=r.length-1;p>=0;p--){if(r[p].tag===v){r[p].close=1;break}}return""}else{r.pop();if(r.length&&r[r.length-1].close){t=t+"</"+r[r.length-1].tag+">";r.pop()}}}else{if(/^(br|hr|input|meta|img|link|param)$/i.test(v)){return t}if(/\/>$/.test(t)){return t}r.push({tag:v})}return t});for(p=r.length-1;p>=0;p--){q+="</"+r[p].tag+">"}return q}})})(tinymce);(function(c){var d=c.each,e,a=true,b=false;c.EditorCommands=function(n){var l=n.dom,p=n.selection,j={state:{},exec:{},value:{}},k=n.settings,o;function q(y,x,v){var u;y=y.toLowerCase();if(u=j.exec[y]){u(y,x,v);return a}return b}function m(v){var u;v=v.toLowerCase();if(u=j.state[v]){return u(v)}return -1}function h(v){var u;v=v.toLowerCase();if(u=j.value[v]){return u(v)}return b}function t(u,v){v=v||"exec";d(u,function(y,x){d(x.toLowerCase().split(","),function(z){j[v][z]=y})})}c.extend(this,{execCommand:q,queryCommandState:m,queryCommandValue:h,addCommands:t});function f(x,v,u){if(v===e){v=b}if(u===e){u=null}return n.getDoc().execCommand(x,v,u)}function s(u){return n.formatter.match(u)}function r(u,v){n.formatter.toggle(u,v?{value:v}:e)}function i(u){o=p.getBookmark(u)}function g(){p.moveToBookmark(o)}t({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){n.undoManager.add()},"Cut,Copy,Paste":function(y){var x=n.getDoc(),u;try{f(y)}catch(v){u=a}if(u||!x.queryCommandEnabled(y)){if(c.isGecko){n.windowManager.confirm(n.getLang("clipboard_msg"),function(z){if(z){open("https://web.archive.org/web/20101228233441/http://www.mozilla.org/editor/midasdemo/securityprefs.html","_blank")}})}else{n.windowManager.alert(n.getLang("clipboard_no_support"))}}},unlink:function(u){if(p.isCollapsed()){p.select(p.getNode())}f(u);p.collapse(b)},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(u){var v=u.substring(7);d("left,center,right,full".split(","),function(x){if(v!=x){n.formatter.remove("align"+x)}});r("align"+v)},"InsertUnorderedList,InsertOrderedList":function(x){var u,v;f(x);u=l.getParent(p.getNode(),"ol,ul");if(u){v=u.parentNode;if(/^(H[1-6]|P|ADDRESS|PRE)$/.test(v.nodeName)){i();l.split(v,u);g()}}},"Bold,Italic,Underline,Strikethrough":function(u){r(u)},"ForeColor,HiliteColor,FontName":function(x,v,u){r(x,u)},FontSize:function(y,x,v){var u,z;if(v>=1&&v<=7){z=c.explode(k.font_size_style_values);u=c.explode(k.font_size_classes);if(u){v=u[v-1]||v}else{v=z[v-1]||v}}r(y,v)},RemoveFormat:function(u){n.formatter.remove(u)},mceBlockQuote:function(u){r("blockquote")},FormatBlock:function(x,v,u){return r(u)},mceCleanup:function(){i();n.setContent(n.getContent({cleanup:a}),{cleanup:a});g()},mceRemoveNode:function(y,x,v){var u=v||p.getNode();if(u!=ed.getBody()){i();n.dom.remove(u,a);g()}},mceSelectNodeDepth:function(y,x,v){var u=0;l.getParent(p.getNode(),function(z){if(z.nodeType==1&&u++==v){p.select(z);return b}},n.getBody())},mceSelectNode:function(x,v,u){p.select(u)},mceInsertContent:function(x,v,u){p.setContent(u)},mceInsertRawHTML:function(x,v,u){p.setContent("tiny_mce_marker");n.setContent(n.getContent().replace(/tiny_mce_marker/g,u))},mceSetContent:function(x,v,u){n.setContent(u)},"Indent,Outdent":function(y){var v,u,x;v=k.indentation;u=/[a-z%]+$/i.exec(v);v=parseInt(v);if(!m("InsertUnorderedList")&&!m("InsertOrderedList")){d(p.getSelectedBlocks(),function(z){if(y=="outdent"){x=Math.max(0,parseInt(z.style.paddingLeft||0)-v);l.setStyle(z,"paddingLeft",x?x+u:"")}else{l.setStyle(z,"paddingLeft",(parseInt(z.style.paddingLeft||0)+v)+u)}})}else{f(y)}},mceRepaint:function(){var v;if(c.isGecko){try{i(a);if(p.getSel()){p.getSel().selectAllChildren(n.getBody())}p.collapse(a);g()}catch(u){}}},mceToggleFormat:function(x,v,u){n.formatter.toggle(u)},InsertHorizontalRule:function(){p.setContent("<hr />")},mceToggleVisualAid:function(){n.hasVisual=!n.hasVisual;n.addVisual()},mceReplaceContent:function(x,v,u){p.setContent(u.replace(/\{\$selection\}/g,p.getContent({format:"text"})))},mceInsertLink:function(y,x,v){var u=l.getParent(p.getNode(),"a");if(c.is(v,"string")){v={href:v}}if(!u){f("CreateLink",b,"javascript:mctmp(0);");d(l.select("a[href=javascript:mctmp(0);]"),function(z){l.setAttribs(z,v)})}else{if(v.href){l.setAttribs(u,v)}else{ed.dom.remove(u,a)}}}});t({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(u){return s("align"+u.substring(7))},"Bold,Italic,Underline,Strikethrough":function(u){return s(u)},mceBlockQuote:function(){return s("blockquote")},Outdent:function(){var u;if(k.inline_styles){if((u=l.getParent(p.getStart(),l.isBlock))&&parseInt(u.style.paddingLeft)>0){return a}if((u=l.getParent(p.getEnd(),l.isBlock))&&parseInt(u.style.paddingLeft)>0){return a}}return m("InsertUnorderedList")||m("InsertOrderedList")||(!k.inline_styles&&!!l.getParent(p.getNode(),"BLOCKQUOTE"))},"InsertUnorderedList,InsertOrderedList":function(u){return l.getParent(p.getNode(),u=="insertunorderedlist"?"UL":"OL")}},"state");t({"FontSize,FontName":function(x){var v=0,u;if(u=l.getParent(p.getNode(),"span")){if(x=="fontsize"){v=u.style.fontSize}else{v=u.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()}}return v}},"value");if(k.custom_undo_redo){t({Undo:function(){n.undoManager.undo()},Redo:function(){n.undoManager.redo()}})}}})(tinymce);(function(b){var a=b.util.Dispatcher;b.UndoManager=function(e){var c,d=0,g=[];function f(){return b.trim(e.getContent({format:"raw",no_events:1}))}return c={typing:0,onAdd:new a(c),onUndo:new a(c),onRedo:new a(c),add:function(l){var h,j=e.settings,k;l=l||{};l.content=f();k=g[d];if(k&&k.content==l.content){if(d>0||g.length==1){return null}}if(j.custom_undo_redo_levels){if(g.length>j.custom_undo_redo_levels){for(h=0;h<g.length-1;h++){g[h]=g[h+1]}g.length--;d=g.length}}l.bookmark=e.selection.getBookmark(2,true);if(d<g.length-1){if(d==0){g=[]}else{g.length=d+1}}g.push(l);d=g.length-1;c.onAdd.dispatch(c,l);e.isNotDirty=0;return l},undo:function(){var j,h;if(c.typing){c.add();c.typing=0}if(d>0){j=g[--d];e.setContent(j.content,{format:"raw"});e.selection.moveToBookmark(j.bookmark);c.onUndo.dispatch(c,j)}return j},redo:function(){var h;if(d<g.length-1){h=g[++d];e.setContent(h.content,{format:"raw"});e.selection.moveToBookmark(h.bookmark);c.onRedo.dispatch(c,h)}return h},clear:function(){g=[];d=c.typing=0},hasUndo:function(){return d>0||c.typing},hasRedo:function(){return d<g.length-1}}}})(tinymce);(function(l){var k=l.dom.Event,c=l.isIE,a=l.isGecko,b=l.isOpera,j=l.each,i=l.extend,d=true,h=false;function g(n,o){var m=o.ownerDocument.createRange();m.setStart(n.endContainer,n.endOffset);m.setEndAfter(o);return m.cloneContents().textContent.length==0}function f(m){m=m.innerHTML;m=m.replace(/<(img|hr|table|input|select|textarea)[ \>]/gi,"-");m=m.replace(/<[^>]+>/g,"");return m.replace(/[ \u00a0\t\r\n]+/g,"")==""}function e(o,q,m){var n,p;if(f(m)){n=q.getParent(m,"ul,ol");if(!q.getParent(n.parentNode,"ul,ol")){q.split(n,m);p=q.create("p",0,'<br _mce_bogus="1" />');q.replace(p,m);o.select(p,1)}return h}return d}l.create("tinymce.ForceBlocks",{ForceBlocks:function(n){var o=this,p=n.settings,q;o.editor=n;o.dom=n.dom;q=(p.forced_root_block||"p").toLowerCase();p.element=q.toUpperCase();n.onPreInit.add(o.setup,o);o.reOpera=new RegExp("(\\u00a0|&#160;|&nbsp;)</"+q+">","gi");o.rePadd=new RegExp("<p( )([^>]+)><\\/p>|<p( )([^>]+)\\/>|<p( )([^>]+)>\\s+<\\/p>|<p><\\/p>|<p\\/>|<p>\\s+<\\/p>".replace(/p/g,q),"gi");o.reNbsp2BR1=new RegExp("<p( )([^>]+)>[\\s\\u00a0]+<\\/p>|<p>[\\s\\u00a0]+<\\/p>".replace(/p/g,q),"gi");o.reNbsp2BR2=new RegExp("<%p()([^>]+)>(&nbsp;|&#160;)<\\/%p>|<%p>(&nbsp;|&#160;)<\\/%p>".replace(/%p/g,q),"gi");o.reBR2Nbsp=new RegExp("<p( )([^>]+)>\\s*<br \\/>\\s*<\\/p>|<p>\\s*<br \\/>\\s*<\\/p>".replace(/p/g,q),"gi");function m(r,s){if(b){s.content=s.content.replace(o.reOpera,"</"+q+">")}s.content=s.content.replace(o.rePadd,"<"+q+"$1$2$3$4$5$6>\u00a0</"+q+">");if(!c&&!b&&s.set){s.content=s.content.replace(o.reNbsp2BR1,"<"+q+"$1$2><br /></"+q+">");s.content=s.content.replace(o.reNbsp2BR2,"<"+q+"$1$2><br /></"+q+">")}else{s.content=s.content.replace(o.reBR2Nbsp,"<"+q+"$1$2>\u00a0</"+q+">")}}n.onBeforeSetContent.add(m);n.onPostProcess.add(m);if(p.forced_root_block){n.onInit.add(o.forceRoots,o);n.onSetContent.add(o.forceRoots,o);n.onBeforeGetContent.add(o.forceRoots,o)}},setup:function(){var n=this,m=n.editor,p=m.settings,r=m.dom,o=m.selection;if(p.forced_root_block){m.onBeforeExecCommand.add(n.forceRoots,n);m.onKeyUp.add(n.forceRoots,n);m.onPreProcess.add(n.forceRoots,n)}if(p.force_br_newlines){if(c){m.onKeyPress.add(function(s,t){var u;if(t.keyCode==13&&o.getNode().nodeName!="LI"){o.setContent('<br id="__" /> ',{format:"raw"});u=r.get("__");u.removeAttribute("id");o.select(u);o.collapse();return k.cancel(t)}})}}if(!c&&p.force_p_newlines){m.onKeyPress.add(function(s,t){if(t.keyCode==13&&!t.shiftKey&&!n.insertPara(t)){k.cancel(t)}});if(a){m.onKeyDown.add(function(s,t){if((t.keyCode==8||t.keyCode==46)&&!t.shiftKey){n.backspaceDelete(t,t.keyCode==8)}})}}if(l.isWebKit){function q(t){var s=o.getRng(),u,y=r.create("div",null," "),x,v=r.getViewPort(t.getWin()).h;s.insertNode(u=r.create("br"));s.setStartAfter(u);s.setEndAfter(u);o.setRng(s);if(o.getSel().focusNode==u.previousSibling){o.select(r.insertAfter(r.doc.createTextNode("\u00a0"),u));o.collapse(d)}r.insertAfter(y,u);x=r.getPos(y).y;r.remove(y);if(x>v){t.getWin().scrollTo(0,x)}}m.onKeyPress.add(function(s,t){if(t.keyCode==13&&(t.shiftKey||p.force_br_newlines)){q(s);k.cancel(t)}})}m.onPreProcess.add(function(s,t){j(r.select("p,h1,h2,h3,h4,h5,h6,div",t.node),function(u){if(f(u)){j(r.select("span,em,strong,b,i",t.node),function(v){if(!v.hasChildNodes()){v.appendChild(s.getDoc().createTextNode("\u00a0"));return h}})}})});if(c){if(p.element!="P"){m.onKeyPress.add(function(s,t){n.lastElm=o.getNode().nodeName});m.onKeyUp.add(function(t,u){var x,v=o.getNode(),s=t.getBody();if(s.childNodes.length===1&&v.nodeName=="P"){v=r.rename(v,p.element);o.select(v);o.collapse();t.nodeChanged()}else{if(u.keyCode==13&&!u.shiftKey&&n.lastElm!="P"){x=r.getParent(v,"p");if(x){r.rename(x,p.element);t.nodeChanged()}}}})}}},find:function(u,p,q){var o=this.editor,m=o.getDoc().createTreeWalker(u,4,null,h),r=-1;while(u=m.nextNode()){r++;if(p==0&&u==q){return r}if(p==1&&r==q){return u}}return -1},forceRoots:function(v,H){var y=this,v=y.editor,L=v.getBody(),I=v.getDoc(),O=v.selection,z=O.getSel(),A=O.getRng(),M=-2,u,F,m,o,J=-16777215;var K,p,N,E,B,q=L.childNodes,D,C,x;for(D=q.length-1;D>=0;D--){K=q[D];if(K.nodeType===1&&K.getAttribute("_mce_type")){p=null;continue}if(K.nodeType===3||(!y.dom.isBlock(K)&&K.nodeType!==8&&!/^(script|mce:script|style|mce:style)$/i.test(K.nodeName))){if(!p){if(K.nodeType!=3||/[^\s]/g.test(K.nodeValue)){if(M==-2&&A){if(!c){if(A.startContainer.nodeType==1&&(C=A.startContainer.childNodes[A.startOffset])&&C.nodeType==1){x=C.getAttribute("id");C.setAttribute("id","__mce")}else{if(v.dom.getParent(A.startContainer,function(n){return n===L})){F=A.startOffset;m=A.endOffset;M=y.find(L,0,A.startContainer);u=y.find(L,0,A.endContainer)}}}else{o=I.body.createTextRange();o.moveToElementText(L);o.collapse(1);N=o.move("character",J)*-1;o=A.duplicate();o.collapse(1);E=o.move("character",J)*-1;o=A.duplicate();o.collapse(0);B=(o.move("character",J)*-1)-E;M=E-N;u=B}}p=v.dom.create(v.settings.forced_root_block);K.parentNode.replaceChild(p,K);p.appendChild(K)}}else{if(p.hasChildNodes()){p.insertBefore(K,p.firstChild)}else{p.appendChild(K)}}}else{p=null}}if(M!=-2){if(!c){p=L.getElementsByTagName(v.settings.element)[0];A=I.createRange();if(M!=-1){A.setStart(y.find(L,1,M),F)}else{A.setStart(p,0)}if(u!=-1){A.setEnd(y.find(L,1,u),m)}else{A.setEnd(p,0)}if(z){z.removeAllRanges();z.addRange(A)}}else{try{A=z.createRange();A.moveToElementText(L);A.collapse(1);A.moveStart("character",M);A.moveEnd("character",u);A.select()}catch(G){}}}else{if(!c&&(C=v.dom.get("__mce"))){if(x){C.setAttribute("id",x)}else{C.removeAttribute("id")}A=I.createRange();A.setStartBefore(C);A.setEndBefore(C);O.setRng(A)}}},getParentBlock:function(o){var m=this.dom;return m.getParent(o,m.isBlock)},insertPara:function(R){var F=this,v=F.editor,N=v.dom,S=v.getDoc(),W=v.settings,G=v.selection.getSel(),H=G.getRangeAt(0),V=S.body;var K,L,I,P,O,q,o,u,z,m,D,U,p,x,J,M=N.getViewPort(v.getWin()),C,E,B;K=S.createRange();K.setStart(G.anchorNode,G.anchorOffset);K.collapse(d);L=S.createRange();L.setStart(G.focusNode,G.focusOffset);L.collapse(d);I=K.compareBoundaryPoints(K.START_TO_END,L)<0;P=I?G.anchorNode:G.focusNode;O=I?G.anchorOffset:G.focusOffset;q=I?G.focusNode:G.anchorNode;o=I?G.focusOffset:G.anchorOffset;if(P===q&&/^(TD|TH)$/.test(P.nodeName)){if(P.firstChild.nodeName=="BR"){N.remove(P.firstChild)}if(P.childNodes.length==0){v.dom.add(P,W.element,null,"<br />");U=v.dom.add(P,W.element,null,"<br />")}else{J=P.innerHTML;P.innerHTML="";v.dom.add(P,W.element,null,J);U=v.dom.add(P,W.element,null,"<br />")}H=S.createRange();H.selectNodeContents(U);H.collapse(1);v.selection.setRng(H);return h}if(P==V&&q==V&&V.firstChild&&v.dom.isBlock(V.firstChild)){P=q=P.firstChild;O=o=0;K=S.createRange();K.setStart(P,0);L=S.createRange();L.setStart(q,0)}P=P.nodeName=="HTML"?S.body:P;P=P.nodeName=="BODY"?P.firstChild:P;q=q.nodeName=="HTML"?S.body:q;q=q.nodeName=="BODY"?q.firstChild:q;u=F.getParentBlock(P);z=F.getParentBlock(q);m=u?u.nodeName:W.element;if(J=F.dom.getParent(u,"li,pre")){if(J.nodeName=="LI"){return e(v.selection,F.dom,J)}return d}if(u&&(u.nodeName=="CAPTION"||/absolute|relative|fixed/gi.test(N.getStyle(u,"position",1)))){m=W.element;u=null}if(z&&(z.nodeName=="CAPTION"||/absolute|relative|fixed/gi.test(N.getStyle(u,"position",1)))){m=W.element;z=null}if(/(TD|TABLE|TH|CAPTION)/.test(m)||(u&&m=="DIV"&&/left|right/gi.test(N.getStyle(u,"float",1)))){m=W.element;u=z=null}D=(u&&u.nodeName==m)?u.cloneNode(0):v.dom.create(m);U=(z&&z.nodeName==m)?z.cloneNode(0):v.dom.create(m);U.removeAttribute("id");if(/^(H[1-6])$/.test(m)&&g(H,u)){U=v.dom.create(W.element)}J=p=P;do{if(J==V||J.nodeType==9||F.dom.isBlock(J)||/(TD|TABLE|TH|CAPTION)/.test(J.nodeName)){break}p=J}while((J=J.previousSibling?J.previousSibling:J.parentNode));J=x=q;do{if(J==V||J.nodeType==9||F.dom.isBlock(J)||/(TD|TABLE|TH|CAPTION)/.test(J.nodeName)){break}x=J}while((J=J.nextSibling?J.nextSibling:J.parentNode));if(p.nodeName==m){K.setStart(p,0)}else{K.setStartBefore(p)}K.setEnd(P,O);D.appendChild(K.cloneContents()||S.createTextNode(""));try{L.setEndAfter(x)}catch(Q){}L.setStart(q,o);U.appendChild(L.cloneContents()||S.createTextNode(""));H=S.createRange();if(!p.previousSibling&&p.parentNode.nodeName==m){H.setStartBefore(p.parentNode)}else{if(K.startContainer.nodeName==m&&K.startOffset==0){H.setStartBefore(K.startContainer)}else{H.setStart(K.startContainer,K.startOffset)}}if(!x.nextSibling&&x.parentNode.nodeName==m){H.setEndAfter(x.parentNode)}else{H.setEnd(L.endContainer,L.endOffset)}H.deleteContents();if(b){v.getWin().scrollTo(0,M.y)}if(D.firstChild&&D.firstChild.nodeName==m){D.innerHTML=D.firstChild.innerHTML}if(U.firstChild&&U.firstChild.nodeName==m){U.innerHTML=U.firstChild.innerHTML}if(f(D)){D.innerHTML="<br />"}function T(y,s){var r=[],Y,X,t;y.innerHTML="";if(W.keep_styles){X=s;do{if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(X.nodeName)){Y=X.cloneNode(h);N.setAttrib(Y,"id","");r.push(Y)}}while(X=X.parentNode)}if(r.length>0){for(t=r.length-1,Y=y;t>=0;t--){Y=Y.appendChild(r[t])}r[0].innerHTML=b?"&nbsp;":"<br />";return r[0]}else{y.innerHTML=b?"&nbsp;":"<br />"}}if(f(U)){B=T(U,q)}if(b&&parseFloat(opera.version())<9.5){H.insertNode(D);H.insertNode(U)}else{H.insertNode(U);H.insertNode(D)}U.normalize();D.normalize();function A(r){return S.createTreeWalker(r,NodeFilter.SHOW_TEXT,null,h).nextNode()||r}H=S.createRange();H.selectNodeContents(a?A(B||U):B||U);H.collapse(1);G.removeAllRanges();G.addRange(H);C=v.dom.getPos(U).y;E=U.clientHeight;if(C<M.y||C+E>M.y+M.h){v.getWin().scrollTo(0,C<M.y?C:C-M.h+25)}return h},backspaceDelete:function(s,A){var C=this,q=C.editor,x=q.getBody(),p=q.dom,o,u=q.selection,m=u.getRng(),v=m.startContainer,o,y,z;if(v&&q.dom.isBlock(v)&&!/^(TD|TH)$/.test(v.nodeName)&&A){if(v.childNodes.length==0||(v.childNodes.length==1&&v.firstChild.nodeName=="BR")){o=v;while((o=o.previousSibling)&&!q.dom.isBlock(o)){}if(o){if(v!=x.firstChild){y=q.dom.doc.createTreeWalker(o,NodeFilter.SHOW_TEXT,null,h);while(z=y.nextNode()){o=z}m=q.getDoc().createRange();m.setStart(o,o.nodeValue?o.nodeValue.length:0);m.setEnd(o,o.nodeValue?o.nodeValue.length:0);u.setRng(m);q.dom.remove(v)}return k.cancel(s)}}}function B(n){var r;n=n.target;if(n&&n.parentNode&&n.nodeName=="BR"&&(o=C.getParentBlock(n))){r=n.previousSibling;k.remove(x,"DOMNodeInserted",B);if(r&&r.nodeType==3&&/\s+$/.test(r.nodeValue)){return}if(n.previousSibling||n.nextSibling){q.dom.remove(n)}}}k._add(x,"DOMNodeInserted",B);window.setTimeout(function(){k._remove(x,"DOMNodeInserted",B)},1)}})})(tinymce);(function(c){var b=c.DOM,a=c.dom.Event,d=c.each,e=c.extend;c.create("tinymce.ControlManager",{ControlManager:function(f,j){var h=this,g;j=j||{};h.editor=f;h.controls={};h.onAdd=new c.util.Dispatcher(h);h.onPostRender=new c.util.Dispatcher(h);h.prefix=j.prefix||f.id+"_";h._cls={};h.onPostRender.add(function(){d(h.controls,function(i){i.postRender()})})},get:function(f){return this.controls[this.prefix+f]||this.controls[f]},setActive:function(h,f){var g=null;if(g=this.get(h)){g.setActive(f)}return g},setDisabled:function(h,f){var g=null;if(g=this.get(h)){g.setDisabled(f)}return g},add:function(g){var f=this;if(g){f.controls[g.id]=g;f.onAdd.dispatch(g,f)}return g},createControl:function(i){var h,g=this,f=g.editor;d(f.plugins,function(j){if(j.createControl){h=j.createControl(i,g);if(h){return false}}});switch(i){case"|":case"separator":return g.createSeparator()}if(!h&&f.buttons&&(h=f.buttons[i])){return g.createButton(i,h)}return g.add(h)},createDropMenu:function(f,n,h){var m=this,i=m.editor,j,g,k,l;n=e({"class":"mceDropDown",constrain:i.settings.constrain_menus},n);n["class"]=n["class"]+" "+i.getParam("skin")+"Skin";if(k=i.getParam("skin_variant")){n["class"]+=" "+i.getParam("skin")+"Skin"+k.substring(0,1).toUpperCase()+k.substring(1)}f=m.prefix+f;l=h||m._cls.dropmenu||c.ui.DropMenu;j=m.controls[f]=new l(f,n);j.onAddItem.add(function(r,q){var p=q.settings;p.title=i.getLang(p.title,p.title);if(!p.onclick){p.onclick=function(o){if(p.cmd){i.execCommand(p.cmd,p.ui||false,p.value)}}}});i.onRemove.add(function(){j.destroy()});if(c.isIE){j.onShowMenu.add(function(){i.focus();g=i.selection.getBookmark(1)});j.onHideMenu.add(function(){if(g){i.selection.moveToBookmark(g);g=0}})}return m.add(j)},createListBox:function(m,i,l){var h=this,g=h.editor,j,k,f;if(h.get(m)){return null}i.title=g.translate(i.title);i.scope=i.scope||g;if(!i.onselect){i.onselect=function(n){g.execCommand(i.cmd,i.ui||false,n||i.value)}}i=e({title:i.title,"class":"mce_"+m,scope:i.scope,control_manager:h},i);m=h.prefix+m;if(g.settings.use_native_selects){k=new c.ui.NativeListBox(m,i)}else{f=l||h._cls.listbox||c.ui.ListBox;k=new f(m,i)}h.controls[m]=k;if(c.isWebKit){k.onPostRender.add(function(p,o){a.add(o,"mousedown",function(){g.bookmark=g.selection.getBookmark(1)});a.add(o,"focus",function(){g.selection.moveToBookmark(g.bookmark);g.bookmark=null})})}if(k.hideMenu){g.onMouseDown.add(k.hideMenu,k)}return h.add(k)},createButton:function(m,i,l){var h=this,g=h.editor,j,k,f;if(h.get(m)){return null}i.title=g.translate(i.title);i.label=g.translate(i.label);i.scope=i.scope||g;if(!i.onclick&&!i.menu_button){i.onclick=function(){g.execCommand(i.cmd,i.ui||false,i.value)}}i=e({title:i.title,"class":"mce_"+m,unavailable_prefix:g.getLang("unavailable",""),scope:i.scope,control_manager:h},i);m=h.prefix+m;if(i.menu_button){f=l||h._cls.menubutton||c.ui.MenuButton;k=new f(m,i);g.onMouseDown.add(k.hideMenu,k)}else{f=h._cls.button||c.ui.Button;k=new f(m,i)}return h.add(k)},createMenuButton:function(h,f,g){f=f||{};f.menu_button=1;return this.createButton(h,f,g)},createSplitButton:function(m,i,l){var h=this,g=h.editor,j,k,f;if(h.get(m)){return null}i.title=g.translate(i.title);i.scope=i.scope||g;if(!i.onclick){i.onclick=function(n){g.execCommand(i.cmd,i.ui||false,n||i.value)}}if(!i.onselect){i.onselect=function(n){g.execCommand(i.cmd,i.ui||false,n||i.value)}}i=e({title:i.title,"class":"mce_"+m,scope:i.scope,control_manager:h},i);m=h.prefix+m;f=l||h._cls.splitbutton||c.ui.SplitButton;k=h.add(new f(m,i));g.onMouseDown.add(k.hideMenu,k);return k},createColorSplitButton:function(f,n,h){var l=this,j=l.editor,i,k,m,g;if(l.get(f)){return null}n.title=j.translate(n.title);n.scope=n.scope||j;if(!n.onclick){n.onclick=function(o){if(c.isIE){g=j.selection.getBookmark(1)}j.execCommand(n.cmd,n.ui||false,o||n.value)}}if(!n.onselect){n.onselect=function(o){j.execCommand(n.cmd,n.ui||false,o||n.value)}}n=e({title:n.title,"class":"mce_"+f,menu_class:j.getParam("skin")+"Skin",scope:n.scope,more_colors_title:j.getLang("more_colors")},n);f=l.prefix+f;m=h||l._cls.colorsplitbutton||c.ui.ColorSplitButton;k=new m(f,n);j.onMouseDown.add(k.hideMenu,k);j.onRemove.add(function(){k.destroy()});if(c.isIE){k.onShowMenu.add(function(){j.focus();g=j.selection.getBookmark(1)});k.onHideMenu.add(function(){if(g){j.selection.moveToBookmark(g);g=0}})}return l.add(k)},createToolbar:function(k,h,j){var i,g=this,f;k=g.prefix+k;f=j||g._cls.toolbar||c.ui.Toolbar;i=new f(k,h);if(g.get(k)){return null}return g.add(i)},createSeparator:function(g){var f=g||this._cls.separator||c.ui.Separator;return new f()},setControlType:function(g,f){return this._cls[g.toLowerCase()]=f},destroy:function(){d(this.controls,function(f){f.destroy()});this.controls=null}})})(tinymce);(function(d){var a=d.util.Dispatcher,e=d.each,c=d.isIE,b=d.isOpera;d.create("tinymce.WindowManager",{WindowManager:function(f){var g=this;g.editor=f;g.onOpen=new a(g);g.onClose=new a(g);g.params={};g.features={}},open:function(z,h){var v=this,k="",n,m,i=v.editor.settings.dialog_type=="modal",q,o,j,g=d.DOM.getViewPort(),r;z=z||{};h=h||{};o=b?g.w:screen.width;j=b?g.h:screen.height;z.name=z.name||"mc_"+new Date().getTime();z.width=parseInt(z.width||320);z.height=parseInt(z.height||240);z.resizable=true;z.left=z.left||parseInt(o/2)-(z.width/2);z.top=z.top||parseInt(j/2)-(z.height/2);h.inline=false;h.mce_width=z.width;h.mce_height=z.height;h.mce_auto_focus=z.auto_focus;if(i){if(c){z.center=true;z.help=false;z.dialogWidth=z.width+"px";z.dialogHeight=z.height+"px";z.scroll=z.scrollbars||false}}e(z,function(p,f){if(d.is(p,"boolean")){p=p?"yes":"no"}if(!/^(name|url)$/.test(f)){if(c&&i){k+=(k?";":"")+f+":"+p}else{k+=(k?",":"")+f+"="+p}}});v.features=z;v.params=h;v.onOpen.dispatch(v,z,h);r=z.url||z.file;r=d._addVer(r);try{if(c&&i){q=1;window.showModalDialog(r,window,k)}else{q=window.open(r,z.name,k)}}catch(l){}if(!q){alert(v.editor.getLang("popup_blocked"))}},close:function(f){f.close();this.onClose.dispatch(this)},createInstance:function(i,h,g,m,l,k){var j=d.resolve(i);return new j(h,g,m,l,k)},confirm:function(h,f,i,g){g=g||window;f.call(i||this,g.confirm(this._decode(this.editor.getLang(h,h))))},alert:function(h,f,j,g){var i=this;g=g||window;g.alert(i._decode(i.editor.getLang(h,h)));if(f){f.call(j||i)}},resizeBy:function(f,g,h){h.resizeBy(f,g)},_decode:function(f){return d.DOM.decode(f).replace(/\\n/g,"\n")}})}(tinymce));(function(a){function b(){var d={},c={},e={};function f(j,i,h,g){if(typeof(i)=="string"){i=[i]}a.each(i,function(k){j[k.toLowerCase()]={func:h,scope:g}})}a.extend(this,{add:function(i,h,g){f(d,i,h,g)},addQueryStateHandler:function(i,h,g){f(c,i,h,g)},addQueryValueHandler:function(i,h,g){f(e,i,h,g)},execCommand:function(h,k,j,i,g){if(k=d[k.toLowerCase()]){if(k.func.call(h||k.scope,j,i,g)!==false){return true}}},queryCommandValue:function(){if(cmd=e[cmd.toLowerCase()]){return cmd.func.call(scope||cmd.scope,ui,value,args)}},queryCommandState:function(){if(cmd=c[cmd.toLowerCase()]){return cmd.func.call(scope||cmd.scope,ui,value,args)}}})}a.GlobalCommands=new b()})(tinymce);(function(a){a.Formatter=function(T){var K={},M=a.each,c=T.dom,p=T.selection,s=a.dom.TreeWalker,I=new a.dom.RangeUtils(c),d=T.schema.isValid,E=c.isBlock,k=T.settings.forced_root_block,r=c.nodeIndex,D="\uFEFF",e=/^(src|href|style)$/,Q=false,A=true,o,N={apply:[],remove:[]};function y(U){return U instanceof Array}function l(V,U){return c.getParents(V,U,c.getRoot())}function b(U){return U.nodeType===1&&(U.face==="mceinline"||U.style.fontFamily==="mceinline")}function P(U){return U?K[U]:K}function j(U,V){if(U){if(typeof(U)!=="string"){M(U,function(X,W){j(W,X)})}else{V=V.length?V:[V];M(V,function(W){if(W.deep===o){W.deep=!W.selector}if(W.split===o){W.split=!W.selector||W.inline}if(W.remove===o&&W.selector&&!W.inline){W.remove="none"}if(W.selector&&W.inline){W.mixed=true;W.block_expand=true}if(typeof(W.classes)==="string"){W.classes=W.classes.split(/\s+/)}});K[U]=V}}}function R(W,ac,Y){var Z=P(W),ad=Z[0],ab,V,aa;function X(ag){var af=ag.startContainer,aj=ag.startOffset,ai,ah;if(af.nodeType==1||af.nodeValue===""){ai=new s(af.childNodes[aj]);for(ah=ai.current();ah;ah=ai.next()){if(ah.nodeType==3&&!E(ah.parentNode)&&!f(ah)){ag.setStart(ah,0);break}}}return ag}function U(ag,af){af=af||ad;if(ag){M(af.styles,function(ai,ah){c.setStyle(ag,ah,q(ai,ac))});M(af.attributes,function(ai,ah){c.setAttrib(ag,ah,q(ai,ac))});M(af.classes,function(ah){ah=q(ah,ac);if(!c.hasClass(ag,ah)){c.addClass(ag,ah)}})}}function ae(ag){var af=[],ai,ah;ai=ad.inline||ad.block;ah=c.create(ai);U(ah);I.walk(ag,function(aj){var ak;function al(am){var ap=am.nodeName.toLowerCase(),ao=am.parentNode.nodeName.toLowerCase(),an;if(g(ap,"br")){ak=0;if(ad.block){c.remove(am)}return}if(ad.wrapper&&v(am,W,ac)){ak=0;return}if(ad.block&&!ad.wrapper&&F(ap)){am=c.rename(am,ai);U(am);af.push(am);ak=0;return}if(ad.selector){M(Z,function(aq){if(c.is(am,aq.selector)&&!b(am)){U(am,aq);an=true}});if(!ad.inline||an){ak=0;return}}if(d(ai,ap)&&d(ao,ai)){if(!ak){ak=ah.cloneNode(Q);am.parentNode.insertBefore(ak,am);af.push(ak)}ak.appendChild(am)}else{ak=0;M(a.grep(am.childNodes),al);ak=0}}M(aj,al)});M(af,function(al){var aj;function am(ao){var an=0;M(ao.childNodes,function(ap){if(!f(ap)&&!G(ap)){an++}});return an}function ak(an){var ap,ao;M(an.childNodes,function(aq){if(aq.nodeType==1&&!G(aq)&&!b(aq)){ap=aq;return Q}});if(ap&&h(ap,ad)){ao=ap.cloneNode(Q);U(ao);c.replace(ao,an,A);c.remove(ap,1)}return ao||an}aj=am(al);if(aj===0){c.remove(al,1);return}if(ad.inline||ad.wrapper){if(!ad.exact&&aj===1){al=ak(al)}M(Z,function(an){M(c.select(an.inline,al),function(ao){S(an,ac,ao,an.exact?ao:null)})});c.getParent(al.parentNode,function(an){if(v(an,W,ac)){c.remove(al,1);al=0;return A}});if(al){al=t(B(al),al);al=t(al,B(al,A))}}})}if(ad){if(Y){V=c.createRng();V.setStartBefore(Y);V.setEndAfter(Y);ae(V)}else{if(!p.isCollapsed()||!ad.inline){ab=p.getBookmark();ae(n(p.getRng(A),Z));p.moveToBookmark(ab);p.setRng(X(p.getRng(A)));T.nodeChanged()}else{O("apply",W,ac)}}}}function z(W,ae,Y){var Z=P(W),ag=Z[0],ad,ac,V;function X(al){var ak,aj,ai;ak=a.grep(al.childNodes);for(aj=0,ai=Z.length;aj<ai;aj++){if(S(Z[aj],ae,al,al)){break}}if(ag.deep){for(aj=0,ai=ak.length;aj<ai;aj++){X(ak[aj])}}}function aa(ai){var aj;M(l(ai.parentNode).reverse(),function(ak){var al;if(!aj&&ak.id!="_start"&&ak.id!="_end"){al=v(ak,W,ae);if(al&&al.split!==false){aj=ak}}});return aj}function U(al,ai,an,aq){var ar,ap,ao,ak,am,aj;if(al){aj=al.parentNode;for(ar=ai.parentNode;ar&&ar!=aj;ar=ar.parentNode){ap=ar.cloneNode(Q);for(am=0;am<Z.length;am++){if(S(Z[am],ae,ap,ap)){ap=0;break}}if(ap){if(ao){ap.appendChild(ao)}if(!ak){ak=ap}ao=ap}}if(aq&&(!ag.mixed||!E(al))){ai=c.split(al,ai)}if(ao){an.parentNode.insertBefore(ao,an);ak.appendChild(an)}}return ai}function af(ai){return U(aa(ai),ai,ai,true)}function ab(ak){var aj=c.get(ak?"_start":"_end"),ai=aj[ak?"firstChild":"lastChild"];c.remove(aj,1);return ai}function ah(ai){var aj,ak;ai=n(ai,Z,A);if(ag.split){aj=H(ai,A);ak=H(ai);if(aj!=ak){aj=L(aj,"span",{id:"_start",_mce_type:"bookmark"});ak=L(ak,"span",{id:"_end",_mce_type:"bookmark"});af(aj);af(ak);aj=ab(A);ak=ab()}else{aj=ak=af(aj)}ai.startContainer=aj.parentNode;ai.startOffset=r(aj);ai.endContainer=ak.parentNode;ai.endOffset=r(ak)+1}I.walk(ai,function(al){M(al,function(am){X(am)})})}if(Y){V=c.createRng();V.setStartBefore(Y);V.setEndAfter(Y);ah(V);return}if(!p.isCollapsed()||!ag.inline){ad=p.getBookmark();ah(p.getRng(A));p.moveToBookmark(ad);T.nodeChanged()}else{O("remove",W,ae)}}function C(U,W,V){if(i(U,W,V)){z(U,W,V)}else{R(U,W,V)}}function v(X,U,Z){var aa=P(U),Y,W,V;function ab(af,ah,ai){var ae,ag,ac=ah[ai],ad;if(ac){if(ac.length===o){for(ae in ac){if(ac.hasOwnProperty(ae)){if(ai==="attributes"){ag=c.getAttrib(af,ae)}else{ag=J(af,ae)}if(!g(ag,q(ac[ae],Z))){return}}}}else{for(ad=0;ad<ac.length;ad++){if(ai==="attributes"?c.getAttrib(af,ac[ad]):J(af,ac[ad])){return ah}}}}return ah}if(aa&&X){for(W=0;W<aa.length;W++){Y=aa[W];if(h(X,Y)&&ab(X,Y,"attributes")&&ab(X,Y,"styles")){if(V=Y.classes){for(W=0;W<V.length;W++){if(!c.hasClass(X,V[W])){return}}}return Y}}}}function i(W,Z,Y){var V,X;function U(aa){aa=c.getParent(aa,function(ab){return !!v(ab,W,Z)});return v(aa,W,Z)}if(Y){return U(Y)}if(p.isCollapsed()){for(X=N.apply.length-1;X>=0;X--){if(N.apply[X].name==W){return true}}for(X=N.remove.length-1;X>=0;X--){if(N.remove[X].name==W){return false}}return U(p.getNode())}Y=p.getNode();if(U(Y)){return A}V=p.getStart();if(V!=Y){if(U(V)){return A}}return Q}function u(ab,aa){var Y,Z=[],X={},W,V,U;if(p.isCollapsed()){for(V=0;V<ab.length;V++){for(W=N.remove.length-1;W>=0;W--){U=ab[V];if(N.remove[W].name==U){X[U]=true;break}}}for(W=N.apply.length-1;W>=0;W--){for(V=0;V<ab.length;V++){U=ab[V];if(!X[U]&&N.apply[W].name==U){X[U]=true;Z.push(U)}}}}Y=p.getStart();c.getParent(Y,function(ae){var ad,ac;for(ad=0;ad<ab.length;ad++){ac=ab[ad];if(!X[ac]&&v(ae,ac,aa)){X[ac]=true;Z.push(ac)}}});return Z}function x(Y){var aa=P(Y),X,W,Z,V,U;if(aa){X=p.getStart();W=l(X);for(V=aa.length-1;V>=0;V--){U=aa[V].selector;if(!U){return A}for(Z=W.length-1;Z>=0;Z--){if(c.is(W[Z],U)){return A}}}}return Q}a.extend(this,{get:P,register:j,apply:R,remove:z,toggle:C,match:i,matchAll:u,matchNode:v,canApply:x});function h(U,V){if(g(U,V.inline)){return A}if(g(U,V.block)){return A}if(V.selector){return c.is(U,V.selector)}}function g(V,U){V=V||"";U=U||"";V=""+(V.nodeName||V);U=""+(U.nodeName||U);return V.toLowerCase()==U.toLowerCase()}function J(V,U){var W=c.getStyle(V,U);if(U=="color"||U=="backgroundColor"){W=c.toHex(W)}if(U=="fontWeight"&&W==700){W="bold"}return""+W}function q(U,V){if(typeof(U)!="string"){U=U(V)}else{if(V){U=U.replace(/%(\w+)/g,function(X,W){return V[W]||X})}}return U}function f(U){return U&&U.nodeType===3&&/^\s*$/.test(U.nodeValue)}function L(W,V,U){var X=c.create(V,U);W.parentNode.insertBefore(X,W);X.appendChild(W);return X}function n(U,ac,X){var W=U.startContainer,Z=U.startOffset,af=U.endContainer,aa=U.endOffset,ae,ab;function ad(ai,aj,ag,ah){var ak,al;ah=ah||c.getRoot();for(;;){ak=ai.parentNode;if(ak==ah||(!ac[0].block_expand&&E(ak))){return ai}for(ae=ak[aj];ae&&ae!=ai;ae=ae[ag]){if(ae.nodeType==1&&!G(ae)){return ai}if(ae.nodeType==3&&!f(ae)){return ai}}ai=ai.parentNode}return ai}if(W.nodeType==1&&W.hasChildNodes()){ab=W.childNodes.length-1;W=W.childNodes[Z>ab?ab:Z];if(W.nodeType==3){Z=0}}if(af.nodeType==1&&af.hasChildNodes()){ab=af.childNodes.length-1;af=af.childNodes[aa>ab?ab:aa-1];if(af.nodeType==3){aa=af.nodeValue.length}}if(G(W.parentNode)){W=W.parentNode}if(G(W)){W=W.nextSibling||W}if(G(af.parentNode)){af=af.parentNode}if(G(af)){af=af.previousSibling||af}if(ac[0].inline||ac[0].block_expand){W=ad(W,"firstChild","nextSibling");af=ad(af,"lastChild","previousSibling")}if(ac[0].selector&&ac[0].expand!==Q&&!ac[0].inline){function Y(ah,ag){var ai,aj,ak;if(ah.nodeType==3&&ah.nodeValue.length==0&&ah[ag]){ah=ah[ag]}ai=l(ah);for(aj=0;aj<ai.length;aj++){for(ak=0;ak<ac.length;ak++){if(c.is(ai[aj],ac[ak].selector)){return ai[aj]}}}return ah}W=Y(W,"previousSibling");af=Y(af,"nextSibling")}if(ac[0].block||ac[0].selector){function V(ah,ag,aj){var ai;if(!ac[0].wrapper){ai=c.getParent(ah,ac[0].block)}if(!ai){ai=c.getParent(ah.nodeType==3?ah.parentNode:ah,E)}if(ai&&ac[0].wrapper){ai=l(ai,"ul,ol").reverse()[0]||ai}if(!ai){ai=ah;while(ai[ag]&&!E(ai[ag])){ai=ai[ag];if(g(ai,"br")){break}}}return ai||ah}W=V(W,"previousSibling");af=V(af,"nextSibling");if(ac[0].block){if(!E(W)){W=ad(W,"firstChild","nextSibling")}if(!E(af)){af=ad(af,"lastChild","previousSibling")}}}if(W.nodeType==1){Z=r(W);W=W.parentNode}if(af.nodeType==1){aa=r(af)+1;af=af.parentNode}return{startContainer:W,startOffset:Z,endContainer:af,endOffset:aa}}function S(aa,Z,X,U){var W,V,Y;if(!h(X,aa)){return Q}if(aa.remove!="all"){M(aa.styles,function(ac,ab){ac=q(ac,Z);if(typeof(ab)==="number"){ab=ac;U=0}if(!U||g(J(U,ab),ac)){c.setStyle(X,ab,"")}Y=1});if(Y&&c.getAttrib(X,"style")==""){X.removeAttribute("style");X.removeAttribute("_mce_style")}M(aa.attributes,function(ad,ab){var ac;ad=q(ad,Z);if(typeof(ab)==="number"){ab=ad;U=0}if(!U||g(c.getAttrib(U,ab),ad)){if(ab=="class"){ad=c.getAttrib(X,ab);if(ad){ac="";M(ad.split(/\s+/),function(ae){if(/mce\w+/.test(ae)){ac+=(ac?" ":"")+ae}});if(ac){c.setAttrib(X,ab,ac);return}}}if(ab=="class"){X.removeAttribute("className")}if(e.test(ab)){X.removeAttribute("_mce_"+ab)}X.removeAttribute(ab)}});M(aa.classes,function(ab){ab=q(ab,Z);if(!U||c.hasClass(U,ab)){c.removeClass(X,ab)}});V=c.getAttribs(X);for(W=0;W<V.length;W++){if(V[W].nodeName.indexOf("_")!==0){return Q}}}if(aa.remove!="none"){m(X,aa);return A}}function m(W,X){var U=W.parentNode,V;if(X.block){if(!k){function Y(aa,Z,ab){aa=B(aa,Z,ab);return !aa||(aa.nodeName=="BR"||E(aa))}if(E(W)&&!E(U)){if(!Y(W,Q)&&!Y(W.firstChild,A,1)){W.insertBefore(c.create("br"),W.firstChild)}if(!Y(W,A)&&!Y(W.lastChild,Q,1)){W.appendChild(c.create("br"))}}}else{if(U==c.getRoot()){if(!X.list_block||!g(W,X.list_block)){M(a.grep(W.childNodes),function(Z){if(d(k,Z.nodeName.toLowerCase())){if(!V){V=L(Z,k)}else{V.appendChild(Z)}}else{V=0}})}}}}if(X.selector&&X.inline&&!g(X.inline,W)){return}c.remove(W,1)}function B(V,U,W){if(V){U=U?"nextSibling":"previousSibling";for(V=W?V:V[U];V;V=V[U]){if(V.nodeType==1||!f(V)){return V}}}}function G(U){return U&&U.nodeType==1&&U.getAttribute("_mce_type")=="bookmark"}function t(Y,X){var U,W,V;function aa(ad,ac){if(ad.nodeName!=ac.nodeName){return Q}function ab(af){var ag={};M(c.getAttribs(af),function(ah){var ai=ah.nodeName.toLowerCase();if(ai.indexOf("_")!==0&&ai!=="style"){ag[ai]=c.getAttrib(af,ai)}});return ag}function ae(ai,ah){var ag,af;for(af in ai){if(ai.hasOwnProperty(af)){ag=ah[af];if(ag===o){return Q}if(ai[af]!=ag){return Q}delete ah[af]}}for(af in ah){if(ah.hasOwnProperty(af)){return Q}}return A}if(!ae(ab(ad),ab(ac))){return Q}if(!ae(c.parseStyle(c.getAttrib(ad,"style")),c.parseStyle(c.getAttrib(ac,"style")))){return Q}return A}if(Y&&X){function Z(ac,ab){for(W=ac;W;W=W[ab]){if(W.nodeType==3&&!f(W)){return ac}if(W.nodeType==1&&!G(W)){return W}}return ac}Y=Z(Y,"previousSibling");X=Z(X,"nextSibling");if(aa(Y,X)){for(W=Y.nextSibling;W&&W!=X;){V=W;W=W.nextSibling;Y.appendChild(V)}c.remove(X);M(a.grep(X.childNodes),function(ab){Y.appendChild(ab)});return Y}}return X}function F(U){return/^(h[1-6]|p|div|pre|address)$/.test(U)}function H(V,Y){var U,X,W;U=V[Y?"startContainer":"endContainer"];X=V[Y?"startOffset":"endOffset"];if(U.nodeType==1){W=U.childNodes.length-1;if(!Y&&X){X--}U=U.childNodes[X>W?W:X]}return U}function O(Z,V,Y){var W,U=N[Z],aa=N[Z=="apply"?"remove":"apply"];function ab(){return N.apply.length||N.remove.length}function X(){N.apply=[];N.remove=[]}function ac(ad){M(N.apply.reverse(),function(ae){R(ae.name,ae.vars,ad)});M(N.remove.reverse(),function(ae){z(ae.name,ae.vars,ad)});c.remove(ad,1);X()}for(W=U.length-1;W>=0;W--){if(U[W].name==V){return}}U.push({name:V,vars:Y});for(W=aa.length-1;W>=0;W--){if(aa[W].name==V){aa.splice(W,1)}}if(ab()){T.getDoc().execCommand("FontName",false,"mceinline");M(c.select("font,span"),function(ae){var ad;if(b(ae)){ad=p.getBookmark();ac(ae);p.moveToBookmark(ad);T.nodeChanged()}});if(!N.isListening&&ab()){N.isListening=true;M("onKeyDown,onKeyUp,onKeyPress,onMouseUp".split(","),function(ad){T[ad].addToTop(function(ae,af){if(ab()){M(c.select("font,span"),function(ai){var ah,aj,ag;if(b(ai)){aj=ai.firstChild;ac(ai);ag=c.createRng();ag.setStart(aj,aj.nodeValue.length);ag.setEnd(aj,aj.nodeValue.length);p.setRng(ag);ae.nodeChanged()}});if(af.type=="keyup"||af.type=="mouseup"){X()}}})})}}}}})(tinymce);tinymce.onAddEditor.add(function(e,a){var d,h,g,c=a.settings;if(c.inline_styles){h=e.explode(c.font_size_style_values);function b(j,i){g.replace(g.create("span",{style:i}),j,1)}d={font:function(j,i){b(i,{backgroundColor:i.style.backgroundColor,color:i.color,fontFamily:i.face,fontSize:h[parseInt(i.size)-1]})},u:function(j,i){b(i,{textDecoration:"underline"})},strike:function(j,i){b(i,{textDecoration:"line-through"})}};function f(i,j){g=i.dom;if(c.convert_fonts_to_spans){e.each(g.select("font,u,strike",j.node),function(k){d[k.nodeName.toLowerCase()](a.dom,k)})}}a.onPreProcess.add(f);a.onInit.add(function(){a.selection.onSetContent.add(f)})}});
/**
 * Dual licensed under the Apache License 2.0 and the MIT license.
 * $Revision$ $Date: 2010-06-01 11:02:29 +0200 (Tue, 01 Jun 2010) $
 */

// Dojo loader support
if (typeof dojo !== 'undefined')
{
    dojo.provide('org.cometd');
}
else
{
    // Namespaces for the cometd implementation
    this.org = this.org || {};
    org.cometd = {};
}

// Abstract APIs
org.cometd.JSON = {};
org.cometd.JSON.toJSON = org.cometd.JSON.fromJSON = function(object)
{
    throw 'Abstract';
};


/**
 * A registry for transports used by the Cometd object.
 */
org.cometd.TransportRegistry = function()
{
    var _types = [];
    var _transports = {};

    this.getTransportTypes = function()
    {
        return _types.slice(0);
    };

    this.findTransportTypes = function(version, crossDomain)
    {
        var result = [];
        for (var i = 0; i < _types.length; ++i)
        {
            var type = _types[i];
            if (_transports[type].accept(version, crossDomain))
            {
                result.push(type);
            }
        }
        return result;
    };

    this.negotiateTransport = function(types, version, crossDomain)
    {
        for (var i = 0; i < _types.length; ++i)
        {
            var type = _types[i];
            for (var j = 0; j < types.length; ++j)
            {
                if (type == types[j])
                {
                    var transport = _transports[type];
                    if (transport.accept(version, crossDomain) === true)
                    {
                        return transport;
                    }
                }
            }
        }
        return null;
    };

    this.add = function(type, transport, index)
    {
        var existing = false;
        for (var i = 0; i < _types.length; ++i)
        {
            if (_types[i] == type)
            {
                existing = true;
                break;
            }
        }

        if (!existing)
        {
            if (typeof index !== 'number')
            {
                _types.push(type);
            }
            else
            {
                _types.splice(index, 0, type);
            }
            _transports[type] = transport;
        }

        return !existing;
    };

    this.remove = function(type)
    {
        for (var i = 0; i < _types.length; ++i)
        {
            if (_types[i] == type)
            {
                _types.splice(i, 1);
                var transport = _transports[type];
                delete _transports[type];
                return transport;
            }
        }
        return null;
    };

    this.reset = function()
    {
        for (var i = 0; i < _types.length; ++i)
        {
            _transports[_types[i]].reset();
        }
    };
};


/**
 * The constructor for a Cometd object, identified by an optional name.
 * The default name is the string 'default'.
 * In the rare case a page needs more than one Bayeux conversation,
 * a new instance can be created via:
 * <pre>
 * var bayeuxUrl2 = ...;
 * var cometd2 = new $.Cometd();
 * cometd2.init({url: bayeuxUrl2});
 * </pre>
 * @param name the optional name of this cometd object
 */
// IMPLEMENTATION NOTES:
// Be very careful in not changing the function order and pass this file every time through JSLint (http://jslint.com)
// The only implied globals must be "dojo", "org" and "window", and check that there are no "unused" warnings
// Failing to pass JSLint may result in shrinkers/minifiers to create an unusable file.
org.cometd.Cometd = function(name)
{
    var _cometd = this;
    var _name = name || 'default';
    var _logLevel; // 'warn','info','debug'
    var _url;
    var _maxConnections;
    var _backoffIncrement;
    var _maxBackoff;
    var _reverseIncomingExtensions;
    var _maxNetworkDelay;
    var _requestHeaders;
    var _appendMessageTypeToURL;
    var _crossDomain = false;
    var _transports = new org.cometd.TransportRegistry();
    var _transport;
    var _status = 'disconnected';
    var _messageId = 0;
    var _clientId = null;
    var _batch = 0;
    var _messageQueue = [];
    var _internalBatch = false;
    var _listeners = {};
    var _backoff = 0;
    var _scheduledSend = null;
    var _extensions = [];
    var _defaultAdvice = {};
    var _advice = {};
    var _handshakeProps;
    var _reestablish = false;
    var _connected = false;

    /**
     * Mixes in the given objects into the target object by copying the properties.
     * @param deep if the copy must be deep
     * @param target the target object
     * @param objects the objects whose properties are copied into the target
     */
    function _mixin(deep, target, objects)
    {
        var result = target || {};

        // Skip first 2 parameters (deep and target), and loop over the others
        for (var i = 2; i < arguments.length; ++i)
        {
            var object = arguments[i];

            if (object === undefined || object === null)
            {
                continue;
            }

            for (var propName in object)
            {
                var prop = object[propName];

                // Avoid infinite loops
                if (prop === target)
                {
                    continue;
                }
                // Do not mixin undefined values
                if (prop === undefined)
                {
                    continue;
                }

                if (deep && typeof prop === 'object' && prop !== null)
                {
                    if (prop instanceof Array)
                    {
                        result[propName] = _mixin(deep, [], prop);
                    }
                    else
                    {
                        result[propName] = _mixin(deep, {}, prop);
                    }
                }
                else
                {
                    result[propName] = prop;
                }
            }
        }

        return result;
    }

    /**
     * This method is exposed as facility for extensions that may need to clone messages.
     */
    this._mixin = _mixin;

    /**
     * Returns whether the given element is contained into the given array.
     * @param element the element to check presence for
     * @param array the array to check for the element presence
     * @return the index of the element, if present, or a negative index if the element is not present
     */
    function _inArray(element, array)
    {
        for (var i = 0; i < array.length; ++i)
        {
            if (element == array[i])
            {
                return i;
            }
        }
        return -1;
    }

    function _isString(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return typeof value === 'string' ||  value instanceof String;
    }

    function _isArray(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return value instanceof Array;
    }

    function _isFunction(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return typeof value === 'function';
    }

    function _log(level, args)
    {
        if (window.console)
        {
            var logger = window.console[level];
            if (_isFunction(logger))
            {
                logger.apply(window.console, args);
            }
        }
    }

    function _warn()
    {
        _log('warn', arguments);
    }
    this._warn = _warn;

    function _info()
    {
        if (_logLevel != 'warn')
        {
            _log('info', arguments);
        }
    }
    this._info = _info;

    function _debug()
    {
        if (_logLevel == 'debug')
        {
            _log('debug', arguments);
        }
    }
    this._debug = _debug;

    function _configure(configuration)
    {
        _debug('Configuring cometd object with', configuration);
        // Support old style param, where only the Bayeux server URL was passed
        if (_isString(configuration))
        {
            configuration = { url: configuration };
        }
        if (!configuration)
        {
            configuration = {};
        }

        _url = configuration.url;
        if (!_url)
        {
            throw 'Missing required configuration parameter \'url\' specifying the Bayeux server URL';
        }
        _maxConnections = configuration.maxConnections || 2;
        _backoffIncrement = configuration.backoffIncrement || 1000;
        _maxBackoff = configuration.maxBackoff || 60000;
        _logLevel = configuration.logLevel || 'info';
        _reverseIncomingExtensions = configuration.reverseIncomingExtensions !== false;
        _maxNetworkDelay = configuration.maxNetworkDelay || 10000;
        _requestHeaders = configuration.requestHeaders || {};
        _appendMessageTypeToURL = configuration.appendMessageTypeToURL !== false;
        _defaultAdvice.timeout = configuration.timeout || 60000;
        _defaultAdvice.interval = configuration.interval || 0;
        _defaultAdvice.reconnect = configuration.reconnect || 'retry';

        // Check if we're cross domain
        // [1] = protocol:, [2] = //host:port, [3] = host:port, [4] = host, [5] = :port, [6] = port, [7] = uri, [8] = rest
        var urlParts = /(^https?:)?(\/\/(([^:\/\?#]+)(:(\d+))?))?([^\?#]*)(.*)?/.exec(_url);
        _crossDomain = urlParts[3] && urlParts[3] != window.location.host;

        // Check if appending extra path is supported
        if (_appendMessageTypeToURL)
        {
            if (urlParts[8] !== undefined)
            {
                _info('Appending message type to URI ' + urlParts[7] + urlParts[8] + ' is not supported, disabling \'appendMessageTypeToURL\' configuration');
                _appendMessageTypeToURL = false;
            }
            else
            {
                var uriSegments = urlParts[7].split('/');
                var lastSegmentIndex = uriSegments.length - 1;
                if (urlParts[7].match(/\/$/))
                {
                    lastSegmentIndex -= 1;
                }
                if (uriSegments[lastSegmentIndex].indexOf('.') >= 0)
                {
                    // Very likely the CometD servlet's URL pattern is mapped to an extension, such as *.cometd
                    // It will be difficult to add the extra path in this case
                    _info('Appending message type to URI ' + urlParts[7] + ' is not supported, disabling \'appendMessageTypeToURL\' configuration');
                    _appendMessageTypeToURL = false;
                }
            }
        }
    }

    function _clearSubscriptions()
    {
        for (var channel in _listeners)
        {
            var subscriptions = _listeners[channel];
            for (var i = 0; i < subscriptions.length; ++i)
            {
                var subscription = subscriptions[i];
                if (subscription && !subscription.listener)
                {
                    delete subscriptions[i];
                    _debug('Removed subscription', subscription, 'for channel', channel);
                }
            }
        }
    }

    function _setStatus(newStatus)
    {
        if (_status != newStatus)
        {
            _debug('Status', _status, '->', newStatus);
            _status = newStatus;
        }
    }

    function _isDisconnected()
    {
        return _status == 'disconnecting' || _status == 'disconnected';
    }

    function _nextMessageId()
    {
        return ++_messageId;
    }

    function _applyExtension(scope, callback, name, message, outgoing)
    {
        try
        {
            return callback.call(scope, message);
        }
        catch (x)
        {
            _debug('Exception during execution of extension', name, x);
            var exceptionCallback = _cometd.onExtensionException;
            if (_isFunction(exceptionCallback))
            {
                _debug('Invoking extension exception callback', name, x);
                try
                {
                    exceptionCallback.call(_cometd, x, name, outgoing, message);
                }
                catch(xx)
                {
                    _info('Exception during execution of exception callback in extension', name, xx);
                }
            }
            return message;
        }
    }

    function _applyIncomingExtensions(message)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            if (message === undefined || message === null)
            {
                break;
            }

            var index = _reverseIncomingExtensions ? _extensions.length - 1 - i : i;
            var extension = _extensions[index];
            var callback = extension.extension.incoming;
            if (_isFunction(callback))
            {
                var result = _applyExtension(extension.extension, callback, extension.name, message, false);
                message = result === undefined ? message : result;
            }
        }
        return message;
    }

    function _applyOutgoingExtensions(message)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            if (message === undefined || message === null)
            {
                break;
            }

            var extension = _extensions[i];
            var callback = extension.extension.outgoing;
            if (_isFunction(callback))
            {
                var result = _applyExtension(extension.extension, callback, extension.name, message, true);
                message = result === undefined ? message : result;
            }
        }
        return message;
    }

    function _notify(channel, message)
    {
        var subscriptions = _listeners[channel];
        if (subscriptions && subscriptions.length > 0)
        {
            for (var i = 0; i < subscriptions.length; ++i)
            {
                var subscription = subscriptions[i];
                // Subscriptions may come and go, so the array may have 'holes'
                if (subscription)
                {
                    try
                    {
                        subscription.callback.call(subscription.scope, message);
                    }
                    catch (x)
                    {
                        _debug('Exception during notification', subscription, message, x);
                        var listenerCallback = _cometd.onListenerException;
                        if (_isFunction(listenerCallback))
                        {
                            _debug('Invoking listener exception callback', subscription, x);
                            try
                            {
                                listenerCallback.call(_cometd, x, subscription.handle, subscription.listener, message);
                            }
                            catch (xx)
                            {
                                _info('Exception during execution of listener callback', subscription, xx);
                            }
                        }
                    }
                }
            }
        }
    }

    function _notifyListeners(channel, message)
    {
        // Notify direct listeners
        _notify(channel, message);

        // Notify the globbing listeners
        var channelParts = channel.split('/');
        var last = channelParts.length - 1;
        for (var i = last; i > 0; --i)
        {
            var channelPart = channelParts.slice(0, i).join('/') + '/*';
            // We don't want to notify /foo/* if the channel is /foo/bar/baz,
            // so we stop at the first non recursive globbing
            if (i == last)
            {
                _notify(channelPart, message);
            }
            // Add the recursive globber and notify
            channelPart += '*';
            _notify(channelPart, message);
        }
    }

    function _setTimeout(funktion, delay)
    {
        return setTimeout(function()
        {
            try
            {
                funktion();
            }
            catch (x)
            {
                _debug('Exception invoking timed function', funktion, x);
            }
        }, delay);
    }

    function _cancelDelayedSend()
    {
        if (_scheduledSend !== null)
        {
            clearTimeout(_scheduledSend);
        }
        _scheduledSend = null;
    }

    function _delayedSend(operation)
    {
        _cancelDelayedSend();
        var delay = _advice.interval + _backoff;
        _debug('Function scheduled in', delay, 'ms, interval =', _advice.interval, 'backoff =', _backoff, operation);
        _scheduledSend = _setTimeout(operation, delay);
    }

    // Needed to break cyclic dependencies between function definitions
    var _handleMessages;
    var _handleFailure;

    /**
     * Delivers the messages to the CometD server
     * @param messages the array of messages to send
     * @param longpoll true if this send is a long poll
     */
    function _send(sync, messages, longpoll, extraPath)
    {
        // We must be sure that the messages have a clientId.
        // This is not guaranteed since the handshake may take time to return
        // (and hence the clientId is not known yet) and the application
        // may create other messages.
        for (var i = 0; i < messages.length; ++i)
        {
            var message = messages[i];
            message.id = '' + _nextMessageId();
            if (_clientId)
            {
                message.clientId = _clientId;
            }
            message = _applyOutgoingExtensions(message);
            if (message !== undefined && message !== null)
            {
                messages[i] = message;
            }
            else
            {
                messages.splice(i--, 1);
            }
        }
        if (messages.length === 0)
        {
            return;
        }

        var url = _url;
        if (_appendMessageTypeToURL)
        {
            // If url does not end with '/', then append it
            if (!url.match(/\/$/))
            {
                url = url + '/';
            }
            if (extraPath)
            {
                url = url + extraPath;
            }
        }

        var envelope = {
            url: url,
            sync: sync,
            messages: messages,
            onSuccess: function(rcvdMessages)
            {
                try
                {
                    _handleMessages.call(_cometd, rcvdMessages);
                }
                catch (x)
                {
                    _debug('Exception during handling of messages', x);
                }
            },
            onFailure: function(conduit, reason, exception)
            {
                try
                {
                    _handleFailure.call(_cometd, conduit, messages, reason, exception);
                }
                catch (x)
                {
                    _debug('Exception during handling of failure', x);
                }
            }
        };
        _debug('Send, sync =', sync, envelope, org.cometd.JSON.toJSON(envelope));
        _transport.send(envelope, longpoll);
    }

    function _queueSend(message)
    {
        if (_batch > 0 || _internalBatch === true)
        {
            _messageQueue.push(message);
        }
        else
        {
            _send(false, [message], false);
        }
    }

    /**
     * Sends a complete bayeux message.
     * This method is exposed as a public so that extensions may use it
     * to send bayeux message directly, for example in case of re-sending
     * messages that have already been sent but that for some reason must
     * be resent.
     */
    this.send = _queueSend;

    function _resetBackoff()
    {
        _backoff = 0;
    }

    function _increaseBackoff()
    {
        if (_backoff < _maxBackoff)
        {
            _backoff += _backoffIncrement;
        }
    }

    /**
     * Starts a the batch of messages to be sent in a single request.
     * @see #_endBatch(sendMessages)
     */
    function _startBatch()
    {
        ++_batch;
    }

    function _flushBatch()
    {
        var messages = _messageQueue;
        _messageQueue = [];
        if (messages.length > 0)
        {
            _send(false, messages, false);
        }
    }

    /**
     * Ends the batch of messages to be sent in a single request,
     * optionally sending messages present in the message queue depending
     * on the given argument.
     * @see #_startBatch()
     */
    function _endBatch()
    {
        --_batch;
        if (_batch < 0)
        {
            throw 'Calls to startBatch() and endBatch() are not paired';
        }

        if (_batch === 0 && !_isDisconnected() && !_internalBatch)
        {
            _flushBatch();
        }
    }

    /**
     * Sends the connect message
     */
    function _connect()
    {
        if (!_isDisconnected())
        {
            var message = {
                channel: '/meta/connect',
                connectionType: _transport.getType()
            };

            // In case of reload or temporary loss of connection
            // we want the next successful connect to return immediately
            // instead of being held by the server, so that connect listeners
            // can be notified that the connection has been re-established
            if (!_connected)
            {
                message.advice = { timeout: 0 };
            }

            _setStatus('connecting');
            _debug('Connect sent', message);
            _send(false, [message], true, 'connect');
            _setStatus('connected');
        }
    }

    function _delayedConnect()
    {
        _setStatus('connecting');
        _delayedSend(function()
        {
            _connect();
        });
    }

    function _updateAdvice(newAdvice)
    {
        if (newAdvice)
        {
            _advice = _mixin(false, {}, _defaultAdvice, newAdvice);
            _debug('New advice', _advice, org.cometd.JSON.toJSON(_advice));
        }
    }

    /**
     * Sends the initial handshake message
     */
    function _handshake(handshakeProps)
    {
        _clientId = null;

        _clearSubscriptions();

        // Reset the transports if we're not retrying the handshake
        if (_isDisconnected())
        {
            _transports.reset();
        }

        if (_isDisconnected())
        {
            _updateAdvice(_defaultAdvice);
        }
        else
        {
            // We are retrying the handshake, either because another handshake failed
            // and we're backing off, or because the server timed us out and asks us to
            // re-handshake: in both cases, make sure that if the handshake succeeds
            // the next action is a connect.
            _updateAdvice(_mixin(false, _advice, {reconnect: 'retry'}));
        }

        _batch = 0;

        // Mark the start of an internal batch.
        // This is needed because handshake and connect are async.
        // It may happen that the application calls init() then subscribe()
        // and the subscribe message is sent before the connect message, if
        // the subscribe message is not held until the connect message is sent.
        // So here we start a batch to hold temporarily any message until
        // the connection is fully established.
        _internalBatch = true;

        // Save the properties provided by the user, so that
        // we can reuse them during automatic re-handshake
        _handshakeProps = handshakeProps;

        var version = '1.0';

        // Figure out the transports to send to the server
        var transportTypes = _transports.findTransportTypes(version, _crossDomain);

        var bayeuxMessage = {
            version: version,
            minimumVersion: '0.9',
            channel: '/meta/handshake',
            supportedConnectionTypes: transportTypes,
            advice: {
                timeout: _advice.timeout,
                interval: _advice.interval
            }
        };
        // Do not allow the user to mess with the required properties,
        // so merge first the user properties and *then* the bayeux message
        var message = _mixin(false, {}, _handshakeProps, bayeuxMessage);

        // Pick up the first available transport as initial transport
        // since we don't know if the server supports it
        _transport = _transports.negotiateTransport(transportTypes, version, _crossDomain);
        _debug('Initial transport is', _transport);

        // We started a batch to hold the application messages,
        // so here we must bypass it and send immediately.
        _setStatus('handshaking');
        _debug('Handshake sent', message);
        _send(false, [message], false, 'handshake');
    }

    function _delayedHandshake()
    {
        _setStatus('handshaking');

        // We will call _handshake() which will reset _clientId, but we want to avoid
        // that between the end of this method and the call to _handshake() someone may
        // call publish() (or other methods that call _queueSend()).
        _internalBatch = true;

        _delayedSend(function()
        {
            _handshake(_handshakeProps);
        });
    }

    function _handshakeResponse(message)
    {
        if (message.successful)
        {
            // Save clientId, figure out transport, then follow the advice to connect
            _clientId = message.clientId;

            var newTransport = _transports.negotiateTransport(message.supportedConnectionTypes, message.version, _crossDomain);
            if (newTransport === null)
            {
                throw 'Could not negotiate transport with server; client ' +
                      _transports.findTransportTypes(message.version, _crossDomain) +
                      ', server ' + message.supportedConnectionTypes;
            }
            else if (_transport != newTransport)
            {
                _debug('Transport', _transport, '->', newTransport);
                _transport = newTransport;
            }

            // End the internal batch and allow held messages from the application
            // to go to the server (see _handshake() where we start the internal batch).
            _internalBatch = false;
            _flushBatch();

            // Here the new transport is in place, as well as the clientId, so
            // the listeners can perform a publish() if they want.
            // Notify the listeners before the connect below.
            message.reestablish = _reestablish;
            _reestablish = true;
            _notifyListeners('/meta/handshake', message);

            var action = _isDisconnected() ? 'none' : _advice.reconnect;
            switch (action)
            {
                case 'retry':
                    _resetBackoff();
                    _delayedConnect();
                    break;
                case 'none':
                    _resetBackoff();
                    _setStatus('disconnected');
                    break;
                default:
                    throw 'Unrecognized advice action ' + action;
            }
        }
        else
        {
            _notifyListeners('/meta/handshake', message);
            _notifyListeners('/meta/unsuccessful', message);

            // Only try again if we haven't been disconnected and
            // the advice permits us to retry the handshake
            var retry = !_isDisconnected() && _advice.reconnect != 'none';
            if (retry)
            {
                _increaseBackoff();
                _delayedHandshake();
            }
            else
            {
                _resetBackoff();
                _setStatus('disconnected');
            }
        }
    }

    function _handshakeFailure(xhr, message)
    {
        // Notify listeners
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/handshake',
            request: message,
            xhr: xhr,
            advice: {
                action: 'retry',
                interval: _backoff
            }
        };

        _notifyListeners('/meta/handshake', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);

        // Only try again if we haven't been disconnected and
        // the advice permits us to retry the handshake
        var retry = !_isDisconnected() && _advice.reconnect != 'none';
        if (retry)
        {
            _increaseBackoff();
            _delayedHandshake();
        }
        else
        {
            _resetBackoff();
            _setStatus('disconnected');
        }
    }

    function _connectResponse(message)
    {
        _connected = message.successful;

        if (_connected)
        {
            _notifyListeners('/meta/connect', message);

            // Normally, the advice will say "reconnect: 'retry', interval: 0"
            // and the server will hold the request, so when a response returns
            // we immediately call the server again (long polling)
            // Listeners can call disconnect(), so check the state after they run
            var action1 = _isDisconnected() ? 'none' : _advice.reconnect;
            switch (action1)
            {
                case 'retry':
                    _resetBackoff();
                    _delayedConnect();
                    break;
                case 'none':
                    _resetBackoff();
                    _setStatus('disconnected');
                    break;
                default:
                    throw 'Unrecognized advice action ' + action1;
            }
        }
        else
        {
            // Notify the listeners after the status change but before the next action
            _notifyListeners('/meta/connect', message);
            _notifyListeners('/meta/unsuccessful', message);

            // This may happen when the server crashed, the current clientId
            // will be invalid, and the server will ask to handshake again
            // Listeners can call disconnect(), so check the state after they run
            var action2 = _isDisconnected() ? 'none' : _advice.reconnect;
            switch (action2)
            {
                case 'retry':
                    _increaseBackoff();
                    _delayedConnect();
                    break;
                case 'handshake':
                    _resetBackoff();
                    _delayedHandshake();
                    break;
                case 'none':
                    _resetBackoff();
                    _setStatus('disconnected');
                    break;
                default:
                    throw 'Unrecognized advice action' + action2;
            }
        }
    }

    function _connectFailure(xhr, message)
    {
        _connected = false;

        // Notify listeners
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/connect',
            request: message,
            xhr: xhr,
            advice: {
                action: 'retry',
                interval: _backoff
            }
        };
        _notifyListeners('/meta/connect', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);

        var action = _isDisconnected() ? 'none' : _advice.reconnect;
        switch (action)
        {
            case 'retry':
                _increaseBackoff();
                _delayedConnect();
                break;
            case 'handshake':
                _resetBackoff();
                _delayedHandshake();
                break;
            case 'none':
                _resetBackoff();
                _setStatus('disconnected');
                break;
            default:
                throw 'Unrecognized advice action' + action;
        }
    }

    function _disconnect(abort)
    {
        _cancelDelayedSend();
        if (abort)
        {
            _transport.abort();
        }
        _clientId = null;
        _setStatus('disconnected');
        _batch = 0;
        _messageQueue = [];
        _resetBackoff();
    }

    function _disconnectResponse(message)
    {
        if (message.successful)
        {
            _disconnect(false);
            _notifyListeners('/meta/disconnect', message);
        }
        else
        {
            _disconnect(true);
            _notifyListeners('/meta/disconnect', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _disconnectFailure(xhr, message)
    {
        _disconnect(true);

        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/disconnect',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/disconnect', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _subscribeResponse(message)
    {
        if (message.successful)
        {
            _notifyListeners('/meta/subscribe', message);
        }
        else
        {
            _notifyListeners('/meta/subscribe', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _subscribeFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/subscribe',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/subscribe', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _unsubscribeResponse(message)
    {
        if (message.successful)
        {
            _notifyListeners('/meta/unsubscribe', message);
        }
        else
        {
            _notifyListeners('/meta/unsubscribe', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _unsubscribeFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/unsubscribe',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/unsubscribe', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _messageResponse(message)
    {
        if (message.successful === undefined)
        {
            if (message.data)
            {
                // It is a plain message, and not a bayeux meta message
                _notifyListeners(message.channel, message);
            }
            else
            {
                _debug('Unknown message', message);
            }
        }
        else
        {
            if (message.successful)
            {
                _notifyListeners('/meta/publish', message);
            }
            else
            {
                _notifyListeners('/meta/publish', message);
                _notifyListeners('/meta/unsuccessful', message);
            }
        }
    }

    function _messageFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: message.channel,
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/publish', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _receive(message)
    {
        message = _applyIncomingExtensions(message);
        if (message === undefined || message === null)
        {
            return;
        }

        _updateAdvice(message.advice);

        var channel = message.channel;
        switch (channel)
        {
            case '/meta/handshake':
                _handshakeResponse(message);
                break;
            case '/meta/connect':
                _connectResponse(message);
                break;
            case '/meta/disconnect':
                _disconnectResponse(message);
                break;
            case '/meta/subscribe':
                _subscribeResponse(message);
                break;
            case '/meta/unsubscribe':
                _unsubscribeResponse(message);
                break;
            default:
                _messageResponse(message);
                break;
        }
    }

    /**
     * Receives a message.
     * This method is exposed as a public so that extensions may inject
     * messages simulating that they had been received.
     */
    this.receive = _receive;

    _handleMessages = function _handleMessages(rcvdMessages)
    {
        _debug('Received', rcvdMessages, org.cometd.JSON.toJSON(rcvdMessages));

        for (var i = 0; i < rcvdMessages.length; ++i)
        {
            var message = rcvdMessages[i];
            _receive(message);
        }
    };

    _handleFailure = function _handleFailure(conduit, messages, reason, exception)
    {
        _debug('handleFailure', conduit, messages, reason, exception);

        for (var i = 0; i < messages.length; ++i)
        {
            var message = messages[i];
            var channel = message.channel;
            switch (channel)
            {
                case '/meta/handshake':
                    _handshakeFailure(conduit, message);
                    break;
                case '/meta/connect':
                    _connectFailure(conduit, message);
                    break;
                case '/meta/disconnect':
                    _disconnectFailure(conduit, message);
                    break;
                case '/meta/subscribe':
                    _subscribeFailure(conduit, message);
                    break;
                case '/meta/unsubscribe':
                    _unsubscribeFailure(conduit, message);
                    break;
                default:
                    _messageFailure(conduit, message);
                    break;
            }
        }
    };

    function _hasSubscriptions(channel)
    {
        var subscriptions = _listeners[channel];
        if (subscriptions)
        {
            for (var i = 0; i < subscriptions.length; ++i)
            {
                if (subscriptions[i])
                {
                    return true;
                }
            }
        }
        return false;
    }

    function _resolveScopedCallback(scope, callback)
    {
        var delegate = {
            scope: scope,
            method: callback
        };
        if (_isFunction(scope))
        {
            delegate.scope = undefined;
            delegate.method = scope;
        }
        else
        {
            if (_isString(callback))
            {
                if (!scope)
                {
                    throw 'Invalid scope ' + scope;
                }
                delegate.method = scope[callback];
                if (!_isFunction(delegate.method))
                {
                    throw 'Invalid callback ' + callback + ' for scope ' + scope;
                }
            }
            else if (!_isFunction(callback))
            {
                throw 'Invalid callback ' + callback;
            }
        }
        return delegate;
    }

    function _addListener(channel, scope, callback, isListener)
    {
        // The data structure is a map<channel, subscription[]>, where each subscription
        // holds the callback to be called and its scope.

        var delegate = _resolveScopedCallback(scope, callback);
        _debug('Adding listener on', channel, 'with scope', delegate.scope, 'and callback', delegate.method);

        var subscription = {
            channel: channel,
            scope: delegate.scope,
            callback: delegate.method,
            listener: isListener
        };

        var subscriptions = _listeners[channel];
        if (!subscriptions)
        {
            subscriptions = [];
            _listeners[channel] = subscriptions;
        }

        // Pushing onto an array appends at the end and returns the id associated with the element increased by 1.
        // Note that if:
        // a.push('a'); var hb=a.push('b'); delete a[hb-1]; var hc=a.push('c');
        // then:
        // hc==3, a.join()=='a',,'c', a.length==3
        var subscriptionID = subscriptions.push(subscription) - 1;
        subscription.id = subscriptionID;
        subscription.handle = [channel, subscriptionID];

        _debug('Added listener', subscription, 'for channel', channel, 'having id =', subscriptionID);

        // The subscription to allow removal of the listener is made of the channel and the index
        return subscription.handle;
    }

    function _removeListener(subscription)
    {
        var subscriptions = _listeners[subscription[0]];
        if (subscriptions)
        {
            delete subscriptions[subscription[1]];
            _debug('Removed listener', subscription);
        }
    }

    //
    // PUBLIC API
    //

    /**
     * Registers the given transport under the given transport type.
     * The optional index parameter specifies the "priority" at which the
     * transport is registered (where 0 is the max priority).
     * If a transport with the same type is already registered, this function
     * does nothing and returns false.
     * @param type the transport type
     * @param transport the transport object
     * @param index the index at which this transport is to be registered
     * @return true if the transport has been registered, false otherwise
     * @see #unregisterTransport(type)
     */
    this.registerTransport = function(type, transport, index)
    {
        var result = _transports.add(type, transport, index);
        if (result)
        {
            _debug('Registered transport', type);

            if (_isFunction(transport.registered))
            {
                transport.registered(type, this);
            }
        }
        return result;
    };

    /**
     * @return an array of all registered transport types
     */
    this.getTransportTypes = function()
    {
        return _transports.getTransportTypes();
    };

    /**
     * Unregisters the transport with the given transport type.
     * @param type the transport type to unregister
     * @return the transport that has been unregistered,
     * or null if no transport was previously registered under the given transport type
     */
    this.unregisterTransport = function(type)
    {
        var transport = _transports.remove(type);
        if (transport !== null)
        {
            _debug('Unregistered transport', type);

            if (_isFunction(transport.unregistered))
            {
                transport.unregistered();
            }
        }
        return transport;
    };

    /**
     * Configures the initial Bayeux communication with the Bayeux server.
     * Configuration is passed via an object that must contain a mandatory field <code>url</code>
     * of type string containing the URL of the Bayeux server.
     * @param configuration the configuration object
     */
    this.configure = function(configuration)
    {
        _configure.call(this, configuration);
    };

    /**
     * Configures and establishes the Bayeux communication with the Bayeux server
     * via a handshake and a subsequent connect.
     * @param configuration the configuration object
     * @param handshakeProps an object to be merged with the handshake message
     * @see #configure(configuration)
     * @see #handshake(handshakeProps)
     */
    this.init = function(configuration, handshakeProps)
    {
        this.configure(configuration);
        this.handshake(handshakeProps);
    };

    /**
     * Establishes the Bayeux communication with the Bayeux server
     * via a handshake and a subsequent connect.
     * @param handshakeProps an object to be merged with the handshake message
     */
    this.handshake = function(handshakeProps)
    {
        _setStatus('disconnected');
        _reestablish = false;
        _handshake(handshakeProps);
    };

    /**
     * Disconnects from the Bayeux server.
     * It is possible to suggest to attempt a synchronous disconnect, but this feature
     * may only be available in certain transports (for example, long-polling may support
     * it, callback-polling certainly does not).
     * @param sync whether attempt to perform a synchronous disconnect
     * @param disconnectProps an object to be merged with the disconnect message
     */
    this.disconnect = function(sync, disconnectProps)
    {
        if (_isDisconnected())
        {
            return;
        }

        if (disconnectProps === undefined)
        {
            if (typeof sync !== 'boolean')
            {
                disconnectProps = sync;
                sync = false;
            }
        }

        var bayeuxMessage = {
            channel: '/meta/disconnect'
        };
        var message = _mixin(false, {}, disconnectProps, bayeuxMessage);
        _setStatus('disconnecting');
        _send(sync === true, [message], false, 'disconnect');
    };

    /**
     * Marks the start of a batch of application messages to be sent to the server
     * in a single request, obtaining a single response containing (possibly) many
     * application reply messages.
     * Messages are held in a queue and not sent until {@link #endBatch()} is called.
     * If startBatch() is called multiple times, then an equal number of endBatch()
     * calls must be made to close and send the batch of messages.
     * @see #endBatch()
     */
    this.startBatch = function()
    {
        _startBatch();
    };

    /**
     * Marks the end of a batch of application messages to be sent to the server
     * in a single request.
     * @see #startBatch()
     */
    this.endBatch = function()
    {
        _endBatch();
    };

    /**
     * Executes the given callback in the given scope, surrounded by a {@link #startBatch()}
     * and {@link #endBatch()} calls.
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to be executed within {@link #startBatch()} and {@link #endBatch()} calls
     */
    this.batch = function(scope, callback)
    {
        var delegate = _resolveScopedCallback(scope, callback);
        this.startBatch();
        try
        {
            delegate.method.call(delegate.scope);
            this.endBatch();
        }
        catch (x)
        {
            _debug('Exception during execution of batch', x);
            this.endBatch();
            throw x;
        }
    };

    /**
     * Adds a listener for bayeux messages, performing the given callback in the given scope
     * when a message for the given channel arrives.
     * @param channel the channel the listener is interested to
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to call when a message is sent to the channel
     * @returns the subscription handle to be passed to {@link #removeListener(object)}
     * @see #removeListener(subscription)
     */
    this.addListener = function(channel, scope, callback)
    {
        if (arguments.length < 2)
        {
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        }
        if (!_isString(channel))
        {
            throw 'Illegal argument type: channel must be a string';
        }

        return _addListener(channel, scope, callback, true);
    };

    /**
     * Removes the subscription obtained with a call to {@link #addListener(string, object, function)}.
     * @param subscription the subscription to unsubscribe.
     * @see #addListener(channel, scope, callback)
     */
    this.removeListener = function(subscription)
    {
        if (!_isArray(subscription))
        {
            throw 'Invalid argument: expected subscription, not ' + subscription;
        }

        _removeListener(subscription);
    };

    /**
     * Removes all listeners registered with {@link #addListener(channel, scope, callback)} or
     * {@link #subscribe(channel, scope, callback)}.
     */
    this.clearListeners = function()
    {
        _listeners = {};
    };

    /**
     * Subscribes to the given channel, performing the given callback in the given scope
     * when a message for the channel arrives.
     * @param channel the channel to subscribe to
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to call when a message is sent to the channel
     * @param subscribeProps an object to be merged with the subscribe message
     * @return the subscription handle to be passed to {@link #unsubscribe(object)}
     */
    this.subscribe = function(channel, scope, callback, subscribeProps)
    {
        if (arguments.length < 2)
        {
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        }
        if (!_isString(channel))
        {
            throw 'Illegal argument type: channel must be a string';
        }
        if (_isDisconnected())
        {
            throw 'Illegal state: already disconnected';
        }

        // Normalize arguments
        if (_isFunction(scope))
        {
            subscribeProps = callback;
            callback = scope;
            scope = undefined;
        }

        // Only send the message to the server if this clientId has not yet subscribed to the channel
        var send = !_hasSubscriptions(channel);

        var subscription = _addListener(channel, scope, callback, false);

        if (send)
        {
            // Send the subscription message after the subscription registration to avoid
            // races where the server would send a message to the subscribers, but here
            // on the client the subscription has not been added yet to the data structures
            var bayeuxMessage = {
                channel: '/meta/subscribe',
                subscription: channel
            };
            var message = _mixin(false, {}, subscribeProps, bayeuxMessage);
            _queueSend(message);
        }

        return subscription;
    };

    /**
     * Unsubscribes the subscription obtained with a call to {@link #subscribe(string, object, function)}.
     * @param subscription the subscription to unsubscribe.
     */
    this.unsubscribe = function(subscription, unsubscribeProps)
    {
        if (arguments.length < 1)
        {
            throw 'Illegal arguments number: required 1, got ' + arguments.length;
        }
        if (_isDisconnected())
        {
            throw 'Illegal state: already disconnected';
        }

        // Remove the local listener before sending the message
        // This ensures that if the server fails, this client does not get notifications
        this.removeListener(subscription);

        var channel = subscription[0];
        // Only send the message to the server if this clientId unsubscribes the last subscription
        if (!_hasSubscriptions(channel))
        {
            var bayeuxMessage = {
                channel: '/meta/unsubscribe',
                subscription: channel
            };
            var message = _mixin(false, {}, unsubscribeProps, bayeuxMessage);
            _queueSend(message);
        }
    };

    /**
     * Removes all subscriptions added via {@link #subscribe(channel, scope, callback, subscribeProps)},
     * but does not remove the listeners added via {@link addListener(channel, scope, callback)}.
     */
    this.clearSubscriptions = function()
    {
        _clearSubscriptions();
    };

    /**
     * Publishes a message on the given channel, containing the given content.
     * @param channel the channel to publish the message to
     * @param content the content of the message
     * @param publishProps an object to be merged with the publish message
     */
    this.publish = function(channel, content, publishProps)
    {
        if (arguments.length < 1)
        {
            throw 'Illegal arguments number: required 1, got ' + arguments.length;
        }
        if (!_isString(channel))
        {
            throw 'Illegal argument type: channel must be a string';
        }
        if (_isDisconnected())
        {
            throw 'Illegal state: already disconnected';
        }

        var bayeuxMessage = {
            channel: channel,
            data: content
        };
        var message = _mixin(false, {}, publishProps, bayeuxMessage);
        _queueSend(message);
    };

    /**
     * Returns a string representing the status of the bayeux communication with the Bayeux server.
     */
    this.getStatus = function()
    {
        return _status;
    };

    this.isDisconnected = _isDisconnected;

    /**
     * Sets the backoff period used to increase the backoff time when retrying an unsuccessful or failed message.
     * Default value is 1 second, which means if there is a persistent failure the retries will happen
     * after 1 second, then after 2 seconds, then after 3 seconds, etc. So for example with 15 seconds of
     * elapsed time, there will be 5 retries (at 1, 3, 6, 10 and 15 seconds elapsed).
     * @param period the backoff period to set
     * @see #getBackoffIncrement()
     */
    this.setBackoffIncrement = function(period)
    {
        _backoffIncrement = period;
    };

    /**
     * Returns the backoff period used to increase the backoff time when retrying an unsuccessful or failed message.
     * @see #setBackoffIncrement(period)
     */
    this.getBackoffIncrement = function()
    {
        return _backoffIncrement;
    };

    /**
     * Returns the backoff period to wait before retrying an unsuccessful or failed message.
     */
    this.getBackoffPeriod = function()
    {
        return _backoff;
    };

    /**
     * Sets the log level for console logging.
     * Valid values are the strings 'error', 'warn', 'info' and 'debug', from
     * less verbose to more verbose.
     * @param level the log level string
     */
    this.setLogLevel = function(level)
    {
        _logLevel = level;
    };

    /**
     * Registers an extension whose callbacks are called for every incoming message
     * (that comes from the server to this client implementation) and for every
     * outgoing message (that originates from this client implementation for the
     * server).
     * The format of the extension object is the following:
     * <pre>
     * {
     *     incoming: function(message) { ... },
     *     outgoing: function(message) { ... }
     * }
     * </pre>
     * Both properties are optional, but if they are present they will be called
     * respectively for each incoming message and for each outgoing message.
     * @param name the name of the extension
     * @param extension the extension to register
     * @return true if the extension was registered, false otherwise
     * @see #unregisterExtension(name)
     */
    this.registerExtension = function(name, extension)
    {
        if (arguments.length < 2)
        {
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        }
        if (!_isString(name))
        {
            throw 'Illegal argument type: extension name must be a string';
        }

        var existing = false;
        for (var i = 0; i < _extensions.length; ++i)
        {
            var existingExtension = _extensions[i];
            if (existingExtension.name == name)
            {
                existing = true;
                break;
            }
        }
        if (!existing)
        {
            _extensions.push({
                name: name,
                extension: extension
            });
            _debug('Registered extension', name);

            // Callback for extensions
            if (_isFunction(extension.registered))
            {
                extension.registered(name, this);
            }

            return true;
        }
        else
        {
            _info('Could not register extension with name', name, 'since another extension with the same name already exists');
            return false;
        }
    };

    /**
     * Unregister an extension previously registered with
     * {@link #registerExtension(name, extension)}.
     * @param name the name of the extension to unregister.
     * @return true if the extension was unregistered, false otherwise
     */
    this.unregisterExtension = function(name)
    {
        if (!_isString(name))
        {
            throw 'Illegal argument type: extension name must be a string';
        }

        var unregistered = false;
        for (var i = 0; i < _extensions.length; ++i)
        {
            var extension = _extensions[i];
            if (extension.name == name)
            {
                _extensions.splice(i, 1);
                unregistered = true;
                _debug('Unregistered extension', name);

                // Callback for extensions
                var ext = extension.extension;
                if (_isFunction(ext.unregistered))
                {
                    ext.unregistered();
                }

                break;
            }
        }
        return unregistered;
    };

    /**
     * Find the extension registered with the given name.
     * @param name the name of the extension to find
     * @return the extension found or null if no extension with the given name has been registered
     */
    this.getExtension = function(name)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            var extension = _extensions[i];
            if (extension.name == name)
            {
                return extension.extension;
            }
        }
        return null;
    };

    /**
     * Returns the name assigned to this Cometd object, or the string 'default'
     * if no name has been explicitly passed as parameter to the constructor.
     */
    this.getName = function()
    {
        return _name;
    };

    /**
     * Returns the clientId assigned by the Bayeux server during handshake.
     */
    this.getClientId = function()
    {
        return _clientId;
    };

    /**
     * Returns the URL of the Bayeux server.
     */
    this.getURL = function()
    {
        return _url;
    };

    this.getTransport = function()
    {
        return _transport;
    };

    /**
     * Base object with the common functionality for transports.
     */
    org.cometd.Transport = function()
    {
        var _type;

        /**
         * Function invoked just after a transport has been successfully registered.
         * @param type the type of transport (for example 'long-polling')
         * @param cometd the cometd object this transport has been registered to
         * @see #unregistered()
         */
        this.registered = function(type, cometd)
        {
            _type = type;
        };

        /**
         * Function invoked just after a transport has been successfully unregistered.
         * @see #registered(type, cometd)
         */
        this.unregistered = function()
        {
            _type = null;
        };


        /**
         * Converts the given response into an array of bayeux messages
         * @param response the response to convert
         * @return an array of bayeux messages obtained by converting the response
         */
        this.convertToMessages = function (response)
        {
            if (_isString(response))
            {
                try
                {
                    return org.cometd.JSON.fromJSON(response);
                }
                catch(x)
                {
                    _debug('Could not convert to JSON the following string', '"' + response + '"');
                    throw x;
                }
            }
            if (_isArray(response))
            {
                return response;
            }
            if (response === undefined || response === null)
            {
                return [];
            }
            if (response instanceof Object)
            {
                return [response];
            }
            throw 'Conversion Error ' + response + ', typeof ' + (typeof response);
        };

        /**
         * Returns whether this transport can work for the given version and cross domain communication case.
         * @param version a string indicating the transport version
         * @param crossDomain a boolean indicating whether the communication is cross domain
         * @return true if this transport can work for the given version and cross domain communication case,
         * false otherwise
         */
        this.accept = function(version, crossDomain)
        {
            throw 'Abstract';
        };

        /**
         * Returns the type of this transport.
         * @see #registered(type, cometd)
         */
        this.getType = function()
        {
            return _type;
        };

        this.send = function(envelope, metaConnect)
        {
            throw 'Abstract';
        };

        this.reset = function()
        {
        };
    };

    org.cometd.Transport.derive = function(baseObject)
    {
        function F() {}
        F.prototype = baseObject;
        return new F();
    };

    /**
     * Base object with the common functionality for transports based on requests.
     * The key responsibility is to allow at most 2 outstanding requests to the server,
     * to avoid that requests are sent behind a long poll.
     * To achieve this, we have one reserved request for the long poll, and all other
     * requests are serialized one after the other.
     */
    org.cometd.RequestTransport = function()
    {
        var _super = new org.cometd.Transport();
        var that = org.cometd.Transport.derive(_super);
        var _requestIds = 0;
        var _metaConnectRequest = null;
        var _requests = [];
        var _envelopes = [];

        function _metaConnectComplete(request)
        {
            var requestId = request.id;
            _debug('metaConnect complete', this.getType(), requestId);
            if (_metaConnectRequest !== null && _metaConnectRequest.id !== requestId)
            {
                throw 'Longpoll request mismatch, completing request ' + requestId;
            }

            // Reset metaConnect request
            _metaConnectRequest = null;
        }

        function _complete(request, success)
        {
            var self = this;

            var index = _inArray(request, _requests);
            // The index can be negative the request has been aborted
            if (index >= 0)
            {
                _requests.splice(index, 1);
            }

            if (_envelopes.length > 0)
            {
                var envelopeAndRequest = _envelopes.shift();
                var nextEnvelope = envelopeAndRequest[0];
                var nextRequest = envelopeAndRequest[1];
                _debug('Transport dequeued request', nextRequest.id);
                if (success)
                {
                    _queueSend.call(this, nextEnvelope);
                }
                else
                {
                    // Keep the semantic of calling response callbacks asynchronously after the request
                    setTimeout(function()
                    {
                        self.complete(nextRequest, false, nextRequest.metaConnect);
                        nextEnvelope.onFailure(nextRequest.xhr, 'error', 'Previous request failed');
                    }, 0);
                }
            }
        }

        that.complete = function(request, success, metaConnect)
        {
            if (metaConnect)
            {
                _metaConnectComplete.call(this, request);
            }
            else
            {
                _complete.call(this, request, success);
            }
        };

        /**
         * Performs the actual send depending on the transport type details.
         * @param envelope the envelope to send
         * @param request the request information
         */
        that.transportSend = function(envelope, request)
        {
            throw 'Abstract';
        };

        that.transportSuccess = function(envelope, request, responses)
        {
            if (!request.expired)
            {
                clearTimeout(request.timeout);
                this.complete(request, true, request.metaConnect);
                if (responses && responses.length > 0)
                {
                    envelope.onSuccess(responses);
                }
                else
                {
                    envelope.onFailure(request, 'Empty HTTP response');
                }
            }
        };

        that.transportFailure = function(envelope, request, reason, exception)
        {
            if (!request.expired)
            {
                clearTimeout(request.timeout);
                this.complete(request, false, request.metaConnect);
                envelope.onFailure(request.xhr, reason, exception);
            }
        };

        function _transportSend(envelope, request)
        {
            var self = this;

            this.transportSend(envelope, request);
            request.expired = false;

            if (!envelope.sync)
            {
                var delay = _maxNetworkDelay;
                if (request.metaConnect === true)
                {
                    delay += _advice.timeout;
                }

                _debug('Will wait at most', delay, 'ms for the response, maxNetworkDelay =', _maxNetworkDelay);

                request.timeout = _setTimeout(function()
                {
                    request.expired = true;
                    if (request.xhr)
                    {
                        request.xhr.abort();
                    }
                    var errorMessage = 'Request ' + request.id + ' of transport ' + self.getType() + ' exceeded ' + delay + ' ms max network delay';
                    _debug(errorMessage);
                    self.complete(request, false, request.metaConnect);
                    envelope.onFailure(request.xhr, 'timeout', errorMessage);
                }, delay);
            }
        }

        function _metaConnectSend(envelope)
        {
            if (_metaConnectRequest !== null)
            {
                throw 'Concurrent metaConnect requests not allowed, request id=' + _metaConnectRequest.id + ' not yet completed';
            }

            var requestId = ++_requestIds;
            _debug('metaConnect send ', this.getType() , requestId, envelope);
            var request = {
                id: requestId,
                metaConnect: true
            };
            _transportSend.call(this, envelope, request);
            _metaConnectRequest = request;
        }

        function _queueSend(envelope)
        {
            var requestId = ++_requestIds;
            var request = {
                id: requestId,
                metaConnect: false
            };

            // Consider the metaConnect requests which should always be present
            if (_requests.length < _maxConnections - 1)
            {
                _debug('Transport sending request', requestId, envelope);
                _transportSend.call(this, envelope, request);
                _requests.push(request);
            }
            else
            {
                _debug('Transport queueing request', requestId, envelope);
                _envelopes.push([envelope, request]);
            }
        }

        that.send = function(envelope, metaConnect)
        {
            if (metaConnect)
            {
                _metaConnectSend.call(this, envelope);
            }
            else
            {
                _queueSend.call(this, envelope);
            }
        };

        that.abort = function()
        {
            for (var i = 0; i < _requests.length; ++i)
            {
                var request = _requests[i];
                _debug('Aborting request', request);
                if (request.xhr)
                {
                    request.xhr.abort();
                }
            }
            if (_metaConnectRequest)
            {
                _debug('Aborting metaConnect request', _metaConnectRequest);
                if (_metaConnectRequest.xhr)
                {
                    _metaConnectRequest.xhr.abort();
                }
            }
            this.reset();
        };

        that.reset = function()
        {
            _metaConnectRequest = null;
            _requests = [];
            _envelopes = [];
        };

        that.toString = function()
        {
            return this.getType();
        };

        return that;
    };


    org.cometd.LongPollingTransport = function()
    {
        var _super = new org.cometd.RequestTransport();
        var that = org.cometd.Transport.derive(_super);
        // By default, support cross domain
        var _supportsCrossDomain = true;

        that.accept = function(version, crossDomain)
        {
            return _supportsCrossDomain || !crossDomain;
        };

        that.xhrSend = function(packet)
        {
            throw 'Abstract';
        };

        that.transportSend = function(envelope, request)
        {
            var self = this;

            try
            {
                var sameStack = true;
                request.xhr = this.xhrSend({
                    transport: this,
                    url: envelope.url,
                    sync: envelope.sync,
                    headers: _requestHeaders,
                    body: org.cometd.JSON.toJSON(envelope.messages),
                    onSuccess: function(response)
                    {
                        _debug('Transport', self, 'received response', response);
                        var success = false;
                        try
                        {
                            var received = self.convertToMessages(response);
                            if (received.length === 0)
                            {
                                _supportsCrossDomain = false;
                                self.transportFailure(envelope, request, 'no response', null);
                            }
                            else
                            {
                                success = true;
                                self.transportSuccess(envelope, request, received);
                            }
                        }
                        catch(x)
                        {
                            _debug(x);
                            if (!success)
                            {
                                _supportsCrossDomain = false;
                                self.transportFailure(envelope, request, 'bad response', x);
                            }
                        }
                    },
                    onError: function(reason, exception)
                    {
                        _supportsCrossDomain = false;
                        if (sameStack)
                        {
                            // Keep the semantic of calling response callbacks asynchronously after the request
                            _setTimeout(function()
                            {
                                self.transportFailure(envelope, request, reason, exception);
                            }, 0);
                        }
                        else
                        {
                            self.transportFailure(envelope, request, reason, exception);
                        }
                    }
                });
                sameStack = false;
            }
            catch (x)
            {
                _supportsCrossDomain = false;
                // Keep the semantic of calling response callbacks asynchronously after the request
                _setTimeout(function()
                {
                    self.transportFailure(envelope, request, 'error', x);
                }, 0);
            }
        };

        that.reset = function()
        {
            _super.reset();
            _supportsCrossDomain = true;
        };

        return that;
    };

    org.cometd.CallbackPollingTransport = function()
    {
        var _super = new org.cometd.RequestTransport();
        var that = org.cometd.Transport.derive(_super);
        var _maxLength = 2000;

        that.accept = function(version, crossDomain)
        {
            return true;
        };

        that.jsonpSend = function(packet)
        {
            throw 'Abstract';
        };

        that.transportSend = function(envelope, request)
        {
            var self = this;

            // Microsoft Internet Explorer has a 2083 URL max length
            // We must ensure that we stay within that length
            var messages = org.cometd.JSON.toJSON(envelope.messages);
            // Encode the messages because all brackets, quotes, commas, colons, etc
            // present in the JSON will be URL encoded, taking many more characters
            var urlLength = envelope.url.length + encodeURI(messages).length;

            // Let's stay on the safe side and use 2000 instead of 2083
            // also because we did not count few characters among which
            // the parameter name 'message' and the parameter 'jsonp',
            // which sum up to about 50 chars
            if (urlLength > _maxLength)
            {
                var x = envelope.messages.length > 1 ?
                        'Too many bayeux messages in the same batch resulting in message too big ' +
                        '(' + urlLength + ' bytes, max is ' + _maxLength + ') for transport ' + this.getType() :
                        'Bayeux message too big (' + urlLength + ' bytes, max is ' + _maxLength + ') ' +
                        'for transport ' + this.getType();
                // Keep the semantic of calling response callbacks asynchronously after the request
                _setTimeout(function()
                {
                    self.transportFailure(envelope, request, 'error', x);
                }, 0);
            }
            else
            {
                try
                {
                    var sameStack = true;
                    this.jsonpSend({
                        transport: this,
                        url: envelope.url,
                        sync: envelope.sync,
                        headers: _requestHeaders,
                        body: messages,
                        onSuccess: function(responses)
                        {
                            var success = false;
                            try
                            {
                                var received = self.convertToMessages(responses);
                                if (received.length === 0)
                                {
                                    self.transportFailure(envelope, request, 'no response', null);
                                }
                                else
                                {
                                    success=true;
                                    self.transportSuccess(envelope, request, received);
                                }
                            }
                            catch (x)
                            {
                                _debug(x);
                                if (!success)
                                {
                                    self.transportFailure(envelope, request, 'bad response', x);
                                }
                            }
                        },
                        onError: function(reason, exception)
                        {
                            if (sameStack)
                            {
                                // Keep the semantic of calling response callbacks asynchronously after the request
                                _setTimeout(function()
                                {
                                    self.transportFailure(envelope, request, reason, exception);
                                }, 0);
                            }
                            else
                            {
                                self.transportFailure(envelope, request, reason, exception);
                            }
                        }
                    });
                    sameStack = false;
                }
                catch (xx)
                {
                    // Keep the semantic of calling response callbacks asynchronously after the request
                    _setTimeout(function()
                    {
                        self.transportFailure(envelope, request, 'error', xx);
                    }, 0);
                }
            }
        };

        return that;
    };

    org.cometd.WebSocketTransport = function()
    {
        var _super = new org.cometd.Transport();
        var that = org.cometd.Transport.derive(_super);
        var _webSocket;
        // By default, support WebSocket
        var _supportsWebSocket = true;
        var _envelope;
        var _state;
        var _metaConnectEnvelope;
        var _timeouts = {};
        var _WebSocket;

        if (window.WebSocket)
        {
            _WebSocket=window.WebSocket;
            _state = _WebSocket.CLOSED;
        }

        function _doSend(envelope,metaConnect)
        {
            if (_webSocket.send(org.cometd.JSON.toJSON(envelope.messages)))
            {
                var delay = _maxNetworkDelay;
                if (metaConnect)
                {
                    delay += _advice.timeout;
                }

                for (var i = 0; i < envelope.messages.length; ++i)
                {
                    var message=envelope.messages[i];
                    if (message.id)
                    {
                        _timeouts[message.id] = _setTimeout(function()
                        {
                            delete _timeouts[message.id];
                            var errorMessage = 'TIMEOUT message '+message.id +' exceeded '+ delay+ 'ms';
                            _debug(errorMessage);
                            envelope.onFailure(_webSocket, 'timeout', errorMessage);
                        }, delay);
                        _debug('waiting',delay,' for  ',message.id, org.cometd.JSON.toJSON(_timeouts));
                    }
                }
            }
            else
            {
                // Keep the semantic of calling response callbacks asynchronously after the request
                _setTimeout(function()
                {
                    envelope.onFailure(_webSocket, 'failed', null);
                },0);
            }
        }

        that.accept = function(version, crossDomain)
        {
            return _supportsWebSocket && _WebSocket!==null && typeof _WebSocket === 'function';
        };

        that.send = function(envelope, metaConnect)
        {
            _debug('Transport', this, 'sending', envelope, 'metaConnect', metaConnect);

            // Remember the envelope
            if (metaConnect)
            {
                _metaConnectEnvelope = envelope;
            }
            else
            {
                _envelope = envelope;
            }

            // Do we have an open websocket?
            if (_state === _WebSocket.OPEN)
            {
                _doSend(envelope, metaConnect);
            }
            else
            {
                // No, so create new websocket

                // Mangle the URL, changing the scheme from 'http' to 'ws'
                var url = envelope.url.replace(/^http/, 'ws');
                _debug('Transport', this, 'URL', url);

                var self = this;
                var webSocket = new _WebSocket(url);

                webSocket.onopen = function()
                {
                    _debug('Opened', webSocket);
                    // once the websocket is open, send the envelope.
                    _state = _WebSocket.OPEN;
                    _webSocket = webSocket;
                    _doSend(envelope,metaConnect);
                };

                webSocket.onclose = function()
                {
                    _debug('Closed', webSocket);
                    if (_state !== _WebSocket.OPEN)
                    {
                        _supportsWebSocket = false;
                        envelope.onFailure(webSocket, 'cannot open', null);
                    }
                    else
                    {
                        _state = _WebSocket.CLOSED;
                        // clear all timeouts
                        for (var i in _timeouts)
                        {
                            clearTimeout(_timeouts[i]);
                            delete _timeouts[i];
                        }
                    }
                };

                webSocket.onmessage = function(message)
                {
                    _debug('Message', message);
                    if (_state === _WebSocket.OPEN)
                    {
                        var rcvdMessages = self.convertToMessages(message.data);
                        var mc = false;

                        // scan messages
                        for (var i = 0; i < rcvdMessages.length; ++i)
                        {
                            var msg = rcvdMessages[i];

                            // is this coming with a meta connect response?
                            if ('/meta/connect' == msg.channelId) // TODO: msg.channel ?
                            {
                                mc = true;
                            }

                            // cancel and delete any pending timeouts for meta messages and publish responses
                            _debug('timeouts', _timeouts, org.cometd.JSON.toJSON(_timeouts));

                            if (!msg.data && msg.id && _timeouts[msg.id])
                            {
                                _debug('timeout', _timeouts[msg.id]);
                                clearTimeout(_timeouts[msg.id]);
                                delete _timeouts[msg.id];
                            }

                            // check for disconnect
                            if ('/meta/disconnect' == msg.channel && msg.successful)
                            {
                                webSocket.close();
                            }
                        }

                        if (mc)
                        {
                            _metaConnectEnvelope.onSuccess(rcvdMessages);
                        }
                        else
                        {
                            _envelope.onSuccess(rcvdMessages);
                        }
                    }
                    else
                    {
                        envelope.onFailure(webSocket, 'closed', null);
                    }
                };
            }
        };

        that.reset = function()
        {
            _debug('reset', _webSocket);
            _super.reset();
            if (_webSocket)
            {
                _webSocket.close();
            }
            _supportsWebSocket = true;
            _state = _WebSocket.CLOSED;
            _envelope=null;
            _metaConnectEnvelope=null;
        };

        return that;
    };
};

/*
 * jQuery JSON Plugin
 * version: 2.1 (2009-08-14)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org 
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is 
 * copyrighted 2005 by Bob Ippolito.
 */
 
(function($) {
    /** jQuery.toJSON( json-serializble )
        Converts the given argument into a JSON respresentation.

        If an object has a "toJSON" function, that will be used to get the representation.
        Non-integer/string keys are skipped in the object, as are keys that point to a function.

        json-serializble:
            The *thing* to be converted.
     **/
    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
        var type = typeof(o);
    
        if (o === null)
            return "null";
    
        if (type == "undefined")
            return undefined;
        
        if (type == "number" || type == "boolean")
            return o + "";
    
        if (type == "string")
            return $.quoteString(o);
    
        if (type == 'object')
        {
            if (typeof o.toJSON == "function") 
                return $.toJSON( o.toJSON() );
            
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();
                
                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;
                
                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;
                
                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;
                
                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                             hours + ':' + minutes + ':' + seconds + 
                             '.' + milli + 'Z"'; 
            }

            if (o.constructor === Array) 
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }
        
            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $.quoteString(k);
                else
                    continue;  //skip non-string or number keys
            
                if (typeof o[k] == "function") 
                    continue;  //skip pairs where the value is a function.
            
                var val = $.toJSON(o[k]);
            
                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    };

    /** jQuery.evalJSON(src)
        Evaluates a given piece of json source.
     **/
    $.evalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        return eval("(" + src + ")");
    };
    
    /** jQuery.secureEvalJSON(src)
        Evals JSON in a way that is *more* secure.
    **/
    $.secureEvalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        
        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        
        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };

    /** jQuery.quoteString(string)
        Returns a string-repr of a string, escaping quotes intelligently.  
        Mostly a support function for toJSON.
    
        Examples:
            >>> jQuery.quoteString("apple")
            "apple"
        
            >>> jQuery.quoteString('"Where are we going?", she asked.')
            "\"Where are we going?\", she asked."
     **/
    $.quoteString = function(string)
    {
        if (string.match(_escapeable))
        {
            return '"' + string.replace(_escapeable, function (a) 
            {
                var c = _meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
    
    var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
    
    var _meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
})(jQuery);

/**
 * Dual licensed under the Apache License 2.0 and the MIT license.
 * $Revision$ $Date: 2010-05-27 15:51:02 +0200 (Thu, 27 May 2010) $
 */
(function($)
{
    // Remap cometd JSON functions to jquery JSON functions
    org.cometd.JSON.toJSON = $.toJSON;
    org.cometd.JSON.fromJSON = $.secureEvalJSON;

    function _setHeaders(xhr, headers)
    {
        if (headers)
        {
            for (var headerName in headers)
            {
                if (headerName.toLowerCase() === 'content-type')
                {
                    continue;
                }
                xhr.setRequestHeader(headerName, headers[headerName]);
            }
        }
    }

    // The default cometd instance
    $.cometd = new org.cometd.Cometd();

    // Remap toolkit-specific transport calls
    $.cometd.LongPollingTransport = function()
    {
        var _super = new org.cometd.LongPollingTransport();
        var that = org.cometd.Transport.derive(_super);

        that.xhrSend = function(packet)
        {
            return $.ajax({
                url: packet.url,
                async: packet.sync !== true,
                type: 'POST',
                contentType: 'application/json;charset=UTF-8',
                data: packet.body,
                beforeSend: function(xhr)
                {
                    _setHeaders(xhr, packet.headers);
                    // Returning false will abort the XHR send
                    return true;
                },
                success: packet.onSuccess,
                error: function(xhr, reason, exception)
                {
                    packet.onError(reason, exception);
                }
            });
        };

        return that;
    };

    $.cometd.CallbackPollingTransport = function()
    {
        var _super = new org.cometd.CallbackPollingTransport();
        var that = org.cometd.Transport.derive(_super);

        that.jsonpSend = function(packet)
        {
            $.ajax({
                url: packet.url,
                async: packet.sync !== true,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'jsonp',
                data: {
                    // In callback-polling, the content must be sent via the 'message' parameter
                    message: packet.body
                },
                beforeSend: function(xhr)
                {
                    _setHeaders(xhr, packet.headers);
                    // Returning false will abort the XHR send
                    return true;
                },
                success: packet.onSuccess,
                error: function(xhr, reason, exception)
                {
                    packet.onError(reason, exception);
                }
            });
        };

        return that;
    };

    if (window.WebSocket)
    {
        $.cometd.registerTransport('websocket', new org.cometd.WebSocketTransport());
    }
    $.cometd.registerTransport('long-polling', new $.cometd.LongPollingTransport());
    $.cometd.registerTransport('callback-polling', new $.cometd.CallbackPollingTransport());

})(jQuery);

(function($)
{
   //namespace setup
   this.tv = this.tv || {};
   tv.lifechurch = tv.lifechurch || {};


    var _isFunction = function (name)
    {
            if (name === undefined || name === null)
            {
                return false;
            }
            return typeof name === 'function';
    };

    tv.lifechurch.Log = function ()
    {
        var _level = 'info';

        this.setLevel = function (level)
        {
            _level = level;
        }

        this.info = function ()
        {
            if (_level == 'debug' || _level == 'info')
                _log('info',arguments);
        };


        this.warn = function ()
        {
            if (_level == 'warn')
                _log('warn',arguments);
        }

        this.debug = function ()
        {
            if (_level == 'debug')
                _log('debug',arguments);
        }

        function _log(level,args)
        {
            if (window.console)
            {
                var logger = window.console[level];
                if (logger)
                {
                   logger.apply(window.console, args);
                }
            }
        }
    };


    /**
     * singleton log instance
     */
    tv.lifechurch._log = new tv.lifechurch.Log();

    /**
     * Room with a church chat facility.
     */
    tv.lifechurch.Room = function (chat, church, room, presence)
    {
        var _parent = chat;
        var _self = this;
        var _church = church;
        var _room = room;
        var _presence = presence;
        var _messageCallbacks = {};
        var _expectedSubscriptions = 0;
        var _actualSubscriptions = 0;
        var _enterCallback;
        var _chatSubscription;
        var _serviceSubscription;
        var _presenceSubscription;
        var _chatChannelName;
        var _serviceChannelName;
        var _presenceChannelName;
        var _active = false;
        var _log = tv.lifechurch._log;


        this.getName = function()
        {
            return _room;
        };

        this.registerMessageCallback = function(name, callback)
        {
            if (!_isFunction(callback))
                throw "Not a function callback";

            _messageCallbacks[name] = callback;
        };

        this.unregisterMessageCallback = function(name)
        {
            delete _messageCallbacks[name];
        };

        this.enter = function(enterCallback)
        {
            _log.debug("Entering room "+_room);
            _enterCallback = enterCallback;
            _serviceChannelName = _parent._makeServiceChannelName(_church, _room);
            _presenceChannelName = _parent._makePresenceChannelName(_church,_room);
            _chatChannelName = _parent._makeChatChannelName(_church,_room);
            _subscribe();
        };

        this.leave = function(callback)
        {
            if (!_active)
            {
              if (_isFunction(callback))
                  callback(false, "Not active");
              return;
            }

            _log.debug("Leaving room "+_room);
            _active = false;
            _parent.deleteRoom(_self);
            $.cometd.batch(function()
            {
                _unsubscribe();
            });
            if (_isFunction(callback))
            callback(true);
        };

        this.getStats = function()
        {
            if (!_active) return;

            _self.send({type: "GetStats"});
        };


        this.send = function(data)
        {
            if (!data) return;
            if (!_active) return;

            $.cometd.publish(_serviceChannelName, data);
        };

        this._metaSubscribe = function(message)
        {
            if (message.subscription == _chatChannelName)
            {
                 _actualSubscriptions++;
                 if (message.successful == false)
                 {
                      _log.debug("Subscribe to chat channel failed");
                      if (_isFunction(_enterCallback))
                      {
                          _enterCallback(false, "Chat channel subscription failed");
                          return;
                      }
                 }
            }
            else if (message.subscription == _serviceChannelName)
            {
                 _actualSubscriptions++;
                 if (message.successful == false)
                 {
                      _log.debug("Subscribe to service channel failed");
                     if (_isFunction(_enterCallback))
                     {
                         _enterCallback(false, "Service channel subscription failure");
                         return;
                     }
                 }
            }
            else if (message.subscription == _presenceChannelName)
            {
                 _actualSubscriptions++;
                 if (_presence && message.successful == false)
                 {
                      _log.debug("Subscribe to presence channel failed");
                   //Wanted to see presence messages, but subscription failed.
                   if (_isFunction(_enterCallback))
                   {
                     _enterCallback(false, "Presence channel subscription failure");
                     return;
                   }
                 }
             }

            if (_actualSubscriptions == _expectedSubscriptions)
            {
                 _active = true;
                 _log.debug("All subscriptions done");
                 if (_isFunction(_enterCallback))
                     _enterCallback(true);
            }
        }


        function _getMessageCallback (name)
        {
            return _messageCallbacks[name];
        }

        function _doMessageCallback (name, data, extra)
        {
            var callback = _getMessageCallback(name);
            if (_isFunction(callback))
                callback(data,extra);
        }

        function _receiveService(message)
        {
            switch (message.data.type)
            {
                case 'AdminMsg':
                {
                  _doMessageCallback('AdminMsg', message.data, {isPrivate:true});
                  break;
                }
            }
        }

        function _receivePresence(message)
        {
            if (message.data.type == 'Presence')
            {
                _doMessageCallback('Presence', message.data);
            }
        }

        function _receiveChat(message)
        {
            switch (message.data.type)
            {
                case 'Close':
                {
                    _self.leave();
                    _doMessageCallback('Close', message.data);
                    break;
                }
                case 'Ban':
                {
                  //is it me?
                  if (message.data.nick == _nick)
                    _self.leave();

                  _doMessageCallback('Ban', message.data);
                  break;
                }
                case 'AdminMsg':
                {
                    _doMessageCallback('AdminMsg', message.data, {isPrivate: false});
                    break;
                }
                default:
                {
                    _doMessageCallback(message.data.type, message.data);
                    break;
                }
            }
        }

        function _unsubscribe()
        {
            _active = false;
            _log.debug("Unsubscribing");
            $.cometd.batch(function()
            {
                if (_chatSubscription)
                    $.cometd.unsubscribe(_chatSubscription);
                _chatSubscription = null;
                if (_serviceSubscription)
                    $.cometd.unsubscribe(_serviceSubscription);
                _serviceSubscription = null;
                if (_presenceSubscription)
                    $.cometd.unsubscribe(_presenceSubscription);
                _presenceSubscription = null;
            });
        }

        function _subscribe()
        {
            _log.debug("Subscribing");
            $.cometd.batch(function()
            {
                _serviceSubscription = $.cometd.subscribe(_serviceChannelName, _receiveService);
                _expectedSubscriptions++;
                if (_presence)
                {
                  _presenceSubscription = $.cometd.subscribe(_presenceChannelName, _receivePresence);
                  _expectedSubscriptions++;
                }
                _chatSubscription = $.cometd.subscribe(_chatChannelName, _receiveChat);
                _expectedSubscriptions++;
            });
        }

    };



    /**
     * Chat facility for a church
     */
    tv.lifechurch.Chat = function()
    {
        var _self = this;
        var _wasConnected = false;
        var _connected = false;
        var _connecting = false;
        var _disconnecting;
        var _nick;
        var _state;
        var _cometdUrl;
        var _token;
        var _roles = [];
        var _church;
        var _logLevel;
        var _rooms = {};
        var _connectionCallback;
        var _startCallback;
        var _log = tv.lifechurch._log;


        this.configure = function(configuration)
        {
            if (!configuration)
            {
                configuration = {};
            }

            _church = configuration.church;
            _roles = configuration.roles;
            _token = configuration.token;
            _cometdUrl = configuration.cometdUrl;
            _logLevel = configuration.logLevel || 'debug';

            if (!_church)
                throw 'Missing required configuration parameter \'church\' specifying the name of the church';
            if (!_token)
                throw 'Missing required configuration parameter \'token\' specifying the token of the user';
            if (!_cometdUrl)
                throw 'Missing required configuration parameter \'cometdUrl\' specifying the url of the Cometd Server';


            $.cometd.addListener('/meta/handshake', _metaHandshake);
            $.cometd.addListener('/meta/connect', _metaConnect);
            $.cometd.addListener('/meta/subscribe', _metaSubscribe);
            $.cometd.configure({url: _cometdUrl, logLevel: _logLevel});

            var stateCookie = org.cometd.COOKIE?org.cometd.COOKIE.get('tv.lifechurch.chat.state'):null;
            _state = stateCookie ? org.cometd.JSON.fromJSON(stateCookie) : null;
        };


        this.isInRole = function (role)
        {
            if (!role)
                 return false;
            if (!_roles)
                 return false;
            var result = false;
            for (var i = 0; i < _roles.length; ++i)
            {
                if (_roles[i] == role)
                    result = true;
            }
            return result;
        };


        this.start = function (startCallback, connectionCallback)
        {
            if (_connecting || _connected)
                return;

            _rooms = {};
            _connecting = true;
            _startCallback = startCallback;
            _connectionCallback = connectionCallback;
            _disconnecting = false;
            _log.debug("Handshaking");
            $.cometd.handshake({token:_token});
        };

        this.stop = function ()
        {
            if (_disconnecting)
                return;

             _log.debug("Stopping cometd");
             _disconnecting = true;
             _connecting = false;
             _connected = false;
             for (x in _rooms)
             {
                 _rooms[x].leave();
             }

             _rooms = {};
             $.cometd.disconnect();
        };


        this.newRoom = function (name, presence)
        {
            if (_connected == false)
                throw 'Not Connected';

            if (_rooms[name])
                throw 'Already in room '+name;

             _rooms[name] = new tv.lifechurch.Room (_self, _church, name, presence);
             _log.debug("Created room "+name);
             return _rooms[name];
        };


        this.deleteRoom = function (room)
        {
            if (!room) return;

            if (_rooms[room.getName()])
            {
                _rooms[room.getName()].leave();
               delete _rooms[room.getName()];
               _log.debug("Deleted room "+room.getName());
            }
        };


        this._makeServiceChannelName = function (church,room)
        {
            if (!church)
                throw 'No church in channel name';
            if (!room)
                throw 'No room in channel name';

            return '/service/chat/'+church+'/'+room;
        };


        this._makeChatChannelName = function (church,room)
        {
            if (!church)
                return undefined;
            if (!room)
                return undefined;
            return '/chat/'+church+'/'+room;
        };

        this._makePresenceChannelName = function (church,room)
        {
            if (!church)
                return undefined;
            if (!room)
                return undefined;
            return '/chat/'+church+'/'+room+'/presence';
        };

        function _getRoomName (channel)
        {
            if (!channel)
                throw 'No channel';
            var tmp = channel;
            if (tmp.charAt(tmp.length-1) == '/')
              tmp = tmp.slice(0, length-1);
            if (tmp.slice(-9) == '/presence')
              tmp = tmp.slice(0, tmp.length-9);

             var i = tmp.lastIndexOf('/');
             if (i < 0)
                 return '';
             return tmp.slice(i+1);
        }

        function _connectionEstablished()
        {
            if (_isFunction(_startCallback))
                _startCallback(true);
        }

        function _connectionBroken()
        {
            //This can happen at any time. In that case, we
            //have to start all over again with our rooms
            if (_isFunction(_connectionCallback))
                _connectionCallback(false);
        }

        function _connectionClosed()
        {
            //TODO call callback
        }

        function _metaHandshake(message)
        {
            //Transport failures during handshaking are reported
            //here. Don't call the callbacks because other types
            //of transport can be tried.
            //The server-side will insert an "auth:" field into
            //the "ext:" field with the results of authentication.
            //If the handshake failed due to security policy then
            // "auth:false" is sent.
            if (!message.successful)
            {
               if (message.ext && (message.ext.auth == false))
               {
                   _log.debug("Not authenticated");
                   $.cometd.disconnect();
                   _disconnecting = true;
                   _connecting = false;
                   if (_startCallback)
                       _startCallback(false, "Not authenticated");
               }
            }
        }


        function _metaConnect(message)
        {
            if (_disconnecting)
            {
                _connected = false;
                _connecting = false;
                _connectionClosed();
            }
            else
            {
                _connecting = false;
                _wasConnected = _connected;
                _connected = message.successful === true;
                if (!_wasConnected && _connected)
                {
                    _connectionEstablished();
                }
                else if (_wasConnected && !_connected)
                {
                    _connectionBroken();
                }
            }
        }

        function _metaSubscribe(message)
        {
            var name = _getRoomName(message.subscription);
            if (!name)
            {
                _log.info("No room in subscription event for channel "+message.subscription);
               return;
            }

            var room = _rooms[name];
            if (!room)
            {
               return;
            }
            room._metaSubscribe(message);
         }


    };



    /**
     * A helper object for sending XHR messages to a server to perform
     * administrative functions like register tokens, register nicks etc.
     * Callbacks take 2 arguments: callback([true|false],msg) where:
     *  true indicates success and msg is data from the response
     *  false indicates failure and msg is a failure text message
     */
    tv.lifechurch.Admin = function()
    {
        var _self = this;
        var _url;

        this.configure = function (config)
        {
            _url = config.url;
            if (!_url)
                throw new 'Missing required configuration parameter \'url\' specifying the server for XHR requests';
        };

        this.registerNick = function(theToken, theNick, callback)
        {
            if (!theNick)
            {
                callback(false, "No nick");
            }

            // send an XHR message to a server (PHP Server) we loaded from to register the nick.
            $.ajax(
            {
                 type: "POST",
                 url: _url,
                 data: {action: "nick", token: theToken, nick: theNick},
                 dataType: "text",
                 success: function(data, textStatus, xhr)
                 {
                   callback(true, data);
                 },
                 error: function(xhr, textStatus, e)
                 {
                   callback(false, textStatus);
                 }
            });
        };

        this.registerToken = function (theToken, theChurch, theRoom, callback)
        {
             $.ajax(
             {
               type: "POST",
               url:  _url,
               data: {action: "register", token: theToken, church: theChurch, room: theRoom},
               dataType: "text",
               success: function(data, textStatus, xhr)
               {
                 if (callback)
                   callback(true, data);
               },
               error: function(xhr, textStatus, e)
               {
                 if (callback)
                   callback(false, textStatus);
               }
            });
        };

        this.revokeToken = function (theToken, callback)
        {
             $.ajax(
             {
               type: "POST",
               url:  _url,
               data: {action: "revoke", token: theToken},
               dataType: "text",
               success: function(data, textStatus, xhr)
               {
                 if (callback)
                   callback(true, data);
               },
               error: function(xhr, textStatus, e)
               {
                 if (callback)
                   callback(false, textStatus);
               }
            });
         };
    };
})(jQuery);

(function($)
{
    //namespace setup
    this.tv = this.tv || {};
    tv.lifechurch = tv.lifechurch || {};


    /**
     * A helper object for sending XHR messages to a server to perform
     * administrative functions like register tokens, register nicks etc.
     * Callbacks take 2 arguments: callback([true|false],msg) where:
     *  true indicates success and msg is data from the response
     *  false indicates failure and msg is a failure text message
     */
    tv.lifechurch.Admin = function()
    {
        var _self = this;
        var _url;

        this.configure = function (config)
        {
            _url = config.url;
            if (!_url)
                throw new 'Missing required configuration parameter \'url\' specifying the server for XHR requests';
        };

        this.registerNick = function(theToken, theNick, callback)
        {
            if (!theNick)
            {
                callback(false, "No nick");
            }

            // send an XHR message to a server (PHP Server) we loaded from to register the nick.
            $.ajax(
            {
                 type: "POST",
                 url: _url,
                 data: {action: "nick", token: theToken, nick: theNick},
                 dataType: "text",
                 success: function(data, textStatus, xhr)
                 {
                   callback(true, data);
                 },
                 error: function(xhr, textStatus, e)
                 {
                   callback(false, textStatus);
                 }
            });
        };

        this.getOccupants = function(chat_vars, room, callback)
        {
            // send an XHR message to a server (PHP Server) we loaded from to get occupants
            $.ajax(
            {
                 type: "POST",
                 url: _url,
                 data: {
				 	action: "getoccupants",
					server: chat_vars.__server,
					church: chat_vars.__church,
					token: chat_vars.__token,
					room: room
				 },
                 dataType: "text",
                 success: function(data, textStatus, xhr)
                 {
                   callback(true, data);
                 },
                 error: function(xhr, textStatus, e)
                 {
                   callback(false, textStatus);
                 }
            });
        };

        this.registerToken = function (theToken, theChurch, theRoom, callback)
        {
             $.ajax(
             {
               type: "POST",
               url:  _url,
               data: {action: "register", token: theToken, church: theChurch, room: theRoom},
               dataType: "text",
               success: function(data, textStatus, xhr)
               {
                 if (callback)
                   callback(true, data);
               },
               error: function(xhr, textStatus, e)
               {
                 if (callback)
                   callback(false, textStatus);
               }
            });
        };

        this.revokeToken = function (theToken, callback)
        {
             $.ajax(
             {
               type: "POST",
               url:  _url,
               data: {action: "revoke", token: theToken},
               dataType: "text",
               success: function(data, textStatus, xhr)
               {
                 if (callback)
                   callback(true, data);
               },
               error: function(xhr, textStatus, e)
               {
                 if (callback)
                   callback(false, textStatus);
               }
            });
         };
    };
})(jQuery);

(function($)
{

    //make a default instance
    $.chat = new tv.lifechurch.Chat();
    //make a default instance
    $.chat.admin = new tv.lifechurch.Admin();
    //expose the log instance
    $.chat.log = tv.lifechurch._log;
    
})(jQuery);

(function($)
{
    //make a default instance
    $.admin = new tv.lifechurch.Admin();
})(jQuery);

function ChatRoom(room, room_type, muted, all_muted) {
	this.muted = (muted === true) ? true : false;
	this.all_muted = (typeof(all_muted) === "object") ? all_muted : [];
	this.nick = false;
	this.presence = false;
	this.roomInstance = false;
	this.ui = false;
	this.chat_vars = false;
	this.lang = false;
	this.room = room;
	this.room_type = room_type;

	this.inform = function(txt, itemClass) {
		this.doChat({
			nick: 'system',
			lang: 'en',
			msg: txt,
			itemClass: itemClass
		}, this.ui);
	};

	this.start = function() {
		var that = this;

		try {
			this.presence = true;

			this.roomInstance = $.chat.newRoom(this.room, this.presence);

			this.roomInstance.registerMessageCallback('AdminMsg', function(data, extra) {
				that.doAdminMsg(data, extra);
			});
			this.roomInstance.registerMessageCallback('ShowSlide', function(data) {
				that.doShowSlide(data);
			});
			this.roomInstance.registerMessageCallback('UpdatePoll', function(data) {
				that.doUpdatePoll(data);
			});
			this.roomInstance.registerMessageCallback('Ban', function(data) {
				that.doBan(data);
			});
			this.roomInstance.registerMessageCallback('Close', function(data) {
				that.doClose(data);
			});
			this.roomInstance.registerMessageCallback('Presence', function(data) {
				that.doPresence(data);
			});
			this.roomInstance.registerMessageCallback('StatsSnapshot', function(data) {
				that.doStatsSnapshot(data);
			});
			this.roomInstance.registerMessageCallback('History', function(data){
				that.doHistory(data);
			});
			this.roomInstance.registerMessageCallback('Chat', function(data){
				that.doChat(data);
			});
			this.roomInstance.enter(function(state, msg) {
				that.onEnter(state, msg);
			});

      var that = this;
      $(function() {
        if (typeof(that.bindEvents) === 'function') {
          that.bindEvents(that);
        }
      });
		}
		catch (x) {
			this.inform('Problem entering room: ' + x, this.ui);
			if (this.roomInstance) {
				$.chat.deleteRoom(this.roomInstance);
			}
			this.roomInstance = false;
		}

		$(".chat-language-select").change(function() {
			// Sync other language drop downs.
			$(".chat-language-select").val($(this).val());
			if ($(".chat-language-select").val() !== "auto") {
				that.lang = $(".chat-language-select").val();
				window.loadLanguageJSON(that.lang);
				that.doTranslateHistory();
			}
		});

    if (this.room_type === "public") {
      $('.bttn.live-prayer').live('click', function(){
        // if the user has a nickname or they're logged in...
        if (window._nick !== false && typeof(window._nick) !== "undefined" && window._nick !== null) {
          if ($.cookie('hide-live-prayer-message') === "true") {
            // then they've already seen the live prayer dialog
            that.doLiveChat('live_prayer');
          } else {
            $('#launch-live-prayer').show();
            $("#live-prayer-user").show();
            $("div#live-prayer-setting-nickname").hide();
            $("#live-prayer-no-user").hide();
            $('#overlay').fadeIn('fast');
          }
        } else {
          $('#launch-live-prayer').show();
          $("#live-prayer-no-user").show();
          $("div#live-prayer-setting-nickname").hide();
          $("#live-prayer-user").hide();
          $('#overlay').fadeIn('fast');
        }
        // that.doLiveChat('live_prayer');
        return false;
      });

      $('.home-live_help-live_help').live('click', function(){
        // if the user has a nickname or they're logged in...
        if (window._nick !== false && typeof(window._nick) !== "undefined" && window._nick !== null) {
          if ($.cookie('hide-live-help-message') === "true") {
            // then they've already seen the live help dialog
            that.doLiveChat('live_help');
          } else {
            $('#launch-live-help').show();
            $("#live-help-user").show();
            $("div#live-help-setting-nickname").hide();
            $("#live-help-no-user").hide();
            $('#overlay').fadeIn('fast');
          }
        } else {
          $('#launch-live-help').show();
          $("#live-help-no-user").show();
          $("div#live-help-setting-nickname").hide();
          $("#live-help-user").hide();
          $('#overlay').fadeIn('fast');
        }
        // that.doLiveChat('live_help');
        return false;
      });

			function launchLivePrayer() {
			  $("#live-prayer-setting-nickname").hide();
			  that.doLiveChat('live_prayer');
        date = new Date();
        date.setTime(date.getTime() + (600* 24 * 60 * 60 * 1000));
        $.cookie("hide-live-prayer-message", "true", { expires: date, path: '/'})
        $('#overlay').fadeOut('fast');
        $('#launch-live-prayer').hide();
			};

			function cancelLivePrayer() {
			  $("#live-prayer-setting-nickname").hide();
			}

			function launchLiveHelp() {
			  $("#live-help-setting-nickname").hide();
			  that.doLiveChat('live_help');
        date = new Date();
        date.setTime(date.getTime() + (600* 24 * 60 * 60 * 1000));
        $.cookie("hide-live-help-message", "true", { expires: date, path: '/'})
        $('#overlay').fadeOut('fast');
        $('#launch-live-help').hide();
			};

			function cancelLiveHelp() {
			  $("#live-help-setting-nickname").hide();
			}

			// Add handlers for live prayer/help dialogs
      $('.live-prayer-ok').click(function(){
        if($('#live-prayer-no-user:visible').length > 0 ) {
          $("#live-prayer-setting-nickname").show();
            nicked = that.delurk($("input#lp-chat-nickname").val(), false, launchLivePrayer, cancelLivePrayer);
        } else {
          launchLivePrayer();
        }
        event.preventDefault();
      });

      $('.live-prayer-cancel').click(function(){
        $('#overlay').fadeOut('fast');
        $('#launch-live-prayer').hide();
        event.preventDefault();
      });

      $(".live-prayer-sign-in").click(function(){
        $('#overlay').fadeOut('fast');
        $('#launch-live-prayer').hide();
        $("#account-bar .initial-links").hide();
        // can't seem to init form from this context, fake it
    		// $('#account-bar .login-form').fadeIn(init_login_form);
    		$("a.sign-in-link").triggerHandler('click');
    		event.preventDefault();
      });

      $('.live-help-ok').click(function(){
        if($('#live-help-no-user:visible').length > 0 ) {
          $("#live-help-setting-nickname").show();
            nicked = that.delurk($("input#lh-chat-nickname").val(), false, launchLiveHelp, cancelLiveHelp);
        } else {
          launchLiveHelp();
        }
        event.preventDefault();
      });

      $('.live-help-cancel').click(function(){
        $('#overlay').fadeOut('fast');
        $('#launch-live-help').hide();
        event.preventDefault();
      });

      $(".live-help-sign-in").click(function(){
        $('#overlay').fadeOut('fast');
        $('#launch-live-help').hide();
        $("#account-bar .initial-links").hide();
        // can't seem to init form from this context, fake it
    		// $('#account-bar .login-form').fadeIn(init_login_form);
    		$("a.sign-in-link").triggerHandler('click');
    		event.preventDefault();
      });

			/* shared nickname */
			window.live_chats = {};
			window.delurkChildren = function(nick, registered){
				for (var name in live_chats) {
					var otherWin = live_chats[name];

					if (otherWin._nick !== nick) {
						that.delurk(nick, registered);
					}
				}
			};

			if (window.chat_disabled === true) {
				// If on the chat tab now, move to next tab before turning it off
				if ($("#chat .tabs ul li").index($("#chat .tabs ul li .here").get(0)) === 0) {
					$("#chat .tabs ul li:eq(1) a").click();
				}
				$("#chat .tabs ul li a.tab-chat").hide();
				$("#disable_chat").hide();
				$("#enable_chat").show();
			}
		}
	};

	this.onEnter = function(state, msg) {
		var that = this;

		$(window).unload(function() {
			that.signOut();
		});

		$("#account-bar .sign-out-link").click(function() {
			that.signOut();
		});

		if (state === false) {
			this.inform('Failed to enter room: ' + msg, this.ui);
			$.chat.deleteRoom(this.roomInstance);
			this.roomInstance = false;
		}
		else {
			// send request for room history
			this.roomInstance.send({
				type: "History"
			});

			if (this.room_type === 'public') {
				setInterval(this.updateChatToken, 120000);
			}
		}
	};

	this.updateChatToken = function() {
    var postData = $('div.settings-inner :input').serialize();

		if (postData !== '') {
			postData += '&';
		}
    postData += "token="+chat_vars.__token;

		$.ajax({
			url: '/home/update_chat_token',
			type: 'POST',
			dataType: "json",
			data: postData,
			error: function(e) {
				// TODO what to do here?
			}
		});
	};

	this.signOut = function() {
    //KM (2010-10-27): is calling update_chat_token the right thing here? or should we remove it?
		$.ajax({
			url: '/home/update_chat_token',
			type: 'POST',
			data: {token: chat_vars.__token},
			async: false,
			error: function(e){
				// TODO what to do here?
			},
			complete: function(){
				$.chat.stop();
			}
		});
	};

	this.delurk = function(chatuser, registered, customCallback, failureCallback) {
		var that = this;
		this.nick = chatuser;
		customCallback = (customCallback === undefined) ?  function() {} : customCallback;
		failureCallback = (failureCallback === undefined) ?  function() {} : failureCallback;
		if (this.nick === false || this.nick === 'Enter your nickname to start chatting' || this.nick.match(/^\s+$/) !== null || this.nick == "") {
		  failureCallback();
		  alert("Invalid nickname. Please try again.");
			return false;
		}
		var ui = this.ui;
		function callback(that) {
			$.admin.registerNick(window.chat_vars.__token, chatuser, function(state, msg) {
				if (state) {
					ui.nickdiv.hide();
					ui.chatdiv.show();
					window._nick = that.nick;
					customCallback();
					var opener = getWindowOpener();
					if (opener !== null) {
						// we are live chat, set it in the main and all other live chats
						opener.chat_rooms[0].room.delurk(that.nick, registered);
					}
					else {
						// we are main, so set it in live chats
						window.delurkChildren(that.nick, registered);
					}
				}
				// TODO: might need to handle the case when a Nick fails to register.
				result = true;
			});

			if (that.room_type === "public" && registered !== true) {
				$(".chat-nick .nick").html(that.nick);
				$(".chat-nick .nick").unbind();
				$(".chat-nick .nick").click(function(e){
					e.preventDefault();

					$(".chat-input .chat").hide();
					$(".chat-input .nick").show();
					$(".chat-nick").hide();
				});
				$(".chat-nick").show();
			}
			result = true;
		}

		if (registered !== true) {
		  var result;
			$.ajax({
				url: '/users/username_exists',
        type: 'post',
				dataType: 'json',
        data: {
          username: this.nick,
          room: this.room,
          token: chat_vars.__token
        },
				success: function(response) {
					if (response.exists) {
					  failureCallback();
						alert('That username is taken, please choose another.');
						return false;
					}
					callback(that);
					return result;
				},
				error: function(response) {
				  failureCallback();
					alert('An error occurred setting your username, please try again.');
					return false;
				}
			});
			return result;
		}
		else {
			callback(that);
			return result;
		}
	};

	this.send = function() {
		var that = this;

		var phrase = this.ui.phrase;
		var text = phrase.val();
		phrase.val('');

		if (text === undefined || text.length === 0) {
			return;
		}

		// Add sent message to chat pane
		var ui = this.ui;
		var $chat = $(ui.selector + ' .chat-window');
		var $chatpane = $chat.find('ul.pane');
		var $lastmsg = $chatpane.find('li').last();
		var chatClass = ($lastmsg.hasClass('odd')) ? 'even' : 'odd';

		function sendToChat() {
			var data = {
				chatclass: chatClass,
				nick: window._nick,
				lang: that.lang,
				msg: text,
				origMsg: text
			};
			var chatStr = that.formatChat(data);
			$chatpane.append(chatStr);

			$chat.scrollTop($chat[0].scrollHeight - $chat.outerHeight());

			// Send message to chat server if not muted
			if (that.muted !== true) {
				that.roomInstance.send({
					type: "Chat",
					nick: window._nick,
					lang: that.lang,
					msg: text
				});
			}
		}

		// Detect language
		if ((this.lang === false || $(".chat-language-select").val() === "auto") && text.length > 3) {
			$.getJSON('https://web.archive.org/web/20101228233441/http://ajax.googleapis.com/ajax/services/language/detect?v=1.0&q=' + text + '&callback=?', function(data){
				// 2010-10-20 (km) Google returns us a confidence so let's use that to improve our detection
				if (data.responseData.confidence > 0.2) {
					that.lang = data.responseData.language;
					window.loadLanguageJSON(that.lang);

					sendToChat();

					that.doTranslateHistory();
					$(".chat-language-select").val(that.lang);
				}
				else {
					sendToChat();
				}
			});
		}
		else {
			sendToChat();
		}
	};

	this.closeRoom = function() {
		this.ui.nickdiv.hide();
		this.ui.chatdiv.hide();
		this.ui.nick.hide();
		$(this.ui.selector + ' .chat-window .pane').empty();
		this.nick = null;
		if (this.roomInstance) {
			$.chat.deleteRoom(this.roomInstance);
		}
		this.roomInstance = false;
	};

	this.leave = function() {
		this.closeRoom();
		$.chat.stop();
	};

	if (this.room_type === "public") {
		this.doAdminMsg = function(data, extra){
			ui = this.ui;
			if (data.msg.match(/^\{/) !== false) {
				var obj = JSON.parse(data.msg);

				switch (obj.action) {
					case 'live_chat_availability':
						var live_prayer = (obj.live_prayer > 0);
						var live_help = (obj.live_help > 0);

						if (live_help === true) {
							$('#live_help_bttn').parent().show();
							$('#offline_help_bttn').parent().hide();
						}
						else {
							$('#live_help_bttn').parent().hide();
							$('#offline_help_bttn').parent().show();
						}

						if (live_prayer === true) {
							$('.bttn.live-prayer').show();
							$("#video-sub .more .prayer").show();
							$('.bttn.request-prayer').hide();
						}
						else {
							$('.bttn.live-prayer').hide();
							if ($('.bttn.request-prayer').length > 0) {
								$('.bttn.request-prayer').show();
							}
							else {
								$("#video-sub .more .prayer").hide();
							}
						}
						break;
					case 'mute_nick':
						if (window._nick === obj.nick) {
							this.muted = true;
						}
						else {
							$('#chat .chat-window ul.pane li[nick="' + obj.nick + '"]').remove();
						}
						break;
					case 'force_refresh':
						window.location.reload();
						break;
					case 'disable_chat':
						window.chat_disabled = true;
						// If on the chat tab now, move to next tab before turning it off
						if ($("#chat .tabs ul li").index($("#chat .tabs ul li .here").get(0)) === 0) {
							$("#chat .tabs ul li:eq(1) a").click();
						}
						$("#chat .tabs ul li a.tab-chat").hide();

						// Disable users abbility to re-enable chat locally
						$('#chat-switch').hide();

						$('#live_help_bttn').parent().hide();
						$('#offline_help_bttn').parent().show();

						$('.bttn.live-prayer').hide();
						if ($('.bttn.request-prayer').length() > 0) {
						  $('.bttn.request-prayer').show();
						}
						else {
							$("#video-sub .more .prayer").hide();
						}
						break;
					case 'enable_chat':
						window.chat_disabled = false;
						$("#chat .tabs ul li a.tab-chat").show();

						// Enable users abbility to disable chat locally
						$("#chat-switch").show();

						break;
					case 'set_stats':
						this.getStats();
						break;
					case 'pause_slides':
						window.slides_paused = true;
						break;
					case 'unpause_slides':
						window.slides_paused = false;
						break;
					case 'update_slides':
					  for (s in obj.slides) {
					    slide = obj.slides[s];
					    window.slides[slide.id].offset = obj.slides[s].offset;
					  }
					  break;
				}
			}
		};
	}

	this.doClose = function(data) {
		this.inform('This room has been closed', this.ui);
		this.closeRoom();
		$.chat.stop();
	};

	if (this.room_type === "public") {
		this.doStatsSnapshot = function(data){
			$('#volunteer-overlay .live_count-tab span.chat.current, #volunteer-overlay .live_count-inner .current_count').html(data["occupants.current"]);
			$('#volunteer-overlay .live_count-tab span.chat.max, #volunteer-overlay .live_count-inner .total_count').html(data["occupants.max"]);
		};

		this.doUpdatePoll = function(data){
			$("#poll-result-" + data.id + " .value").html(data.count);
		};

		this.doShowSlide = function(data){
			if (typeof(window.slides) !== "undefined" && typeof(window.slides[data.slide]) !== "undefined") {
				$('#video-sub #slides-container').html(window.slides[data.slide]['content']).fadeIn();
			}
			else {
				$('#video-sub #slides-container').load('/channel_slides/show/' + data.slide, function(){
					$(this).fadeIn();
					// store it in the event the same slide is pushed again
					window.slides[data.slide]['content'] = $(this).html();
				});
			}

			$('#video-sub .more').css('height', '120px');

			$('tr.slide_item').removeClass('current');
			$('tr.slide_item#cs_' + data.slide).addClass('current');

			window.current_slide = data.slide;
		};

		this.startAutoSlides = function(newVideoTime){
			var that = this;
      var videoTimeElapsed = parseInt(newVideoTime, 10);
      var startTime = new Date().getTime() / 1000;

			setInterval(function(){
        var currTime = new Date().getTime() / 1000;
        videoTimeElapsed = parseInt(newVideoTime + (currTime - startTime), 10);

				// If slides are paused and this is not the first time through this function, return
				if (typeof(window.slides_paused) !== "undefined" && window.slides_paused === true && this.first_time === false) {
					return;
				}

				// If slides are paused, last slide is set, and this is the first time through this function
				if (this.first_time !== false && typeof(window.slides_paused) !== "undefined" && window.slides_paused === true && typeof(window.last_slide_pushed) !== "undefined") {
					that.doShowSlide({
						"slide": window.last_slide_pushed
					});
					this.first_time = false;
					return;
				}

				// If this is the first time through this function, look for last offset slide and fire it
				if (this.first_time !== false) {
					var highest_past_offset = false;
					var last_slide_pushed = 0;
					for (var i in window.slides) {
						if (typeof(window.slides[i]['offset']) === "undefined" || window.slides[i]['offset'] === "0") {
							continue;
						}
						var offset = parseInt(window.slides[i]['offset'], 10);
						if (offset < videoTimeElapsed && (highest_past_offset === false || offset > highest_past_offset)) {
							highest_past_offset = offset;
							last_slide_pushed = i;
						}
					}
					if (last_slide_pushed !== 0) {
						that.doShowSlide({
							"slide": last_slide_pushed
						});
					}
					this.first_time = false;
					return;
				}

				// Look for slides ready to fire
				for (var i in window.slides) {
					if (typeof(window.slides[i]['offset']) === "undefined") {
						continue;
					}
					var offset = parseInt(window.slides[i]['offset'], 10);
					if (offset === videoTimeElapsed) {
						that.doShowSlide({
							"slide": i
						});
					}
				}
				this.first_time = false;
				return;
			}, 1000);
		};
		this.startAutoSlides(window.countdown);
	}

	this.doHistory = function(data) {
		var ui = this.ui;
		var $chat = $(ui.selector + ' .chat-window');
		var $chatpane = $chat.find('ul.pane');

		var msgs = data.msgs;
		if (typeof(msgs) === "object" && msgs.length > 0) {

			for (var i = msgs.length - 1; i >= 0; --i) {
				row = msgs[i];

				if ($.inArray(row.nick, this.all_muted) > -1) {
					continue;
				}

				row.chatclass = (i % 2 === 0) ? 'even' : 'odd';

				row.origMsg = row.msg;

				var chatStr = this.formatChat(row);
				$chatpane.prepend(chatStr);
			}

			var scroll = function() {
				if ($chat.children().first().height() > 0) {
					$chat.scrollTop($chat[0].scrollHeight - $chat.outerHeight());
				}
				else {
					setTimeout(scroll, 200);
				}
			};
			scroll();
		}
	};

	this.doTranslateHistory = function() {
		var that = this;

		var ui = this.ui;
		var $chat = $(ui.selector + ' .chat-window');
		var $chatpane = $chat.find('ul.pane');
		$chatpane.children().each(function() {
			var $index = $(this);

			var data = {
				nick: $index.attr("nick"),
				lang: $index.attr('lang'),
				origMsg: unescape($index.attr("_orig")),
				chatclass: $index.attr("class")
			};

			if (data.lang !== "false" && that.lang !== false && data.lang !== that.lang) {
				var translate_data = {
					lang: data.lang
				};

				// Handle moderator message
				var parsed_msg = null;
				try {
					parsed_msg = jQuery.parseJSON(data.origMsg);
				} catch(e) {}

				if (parsed_msg !== null) {
					switch (parsed_msg.type) {
						case "facebook":
							translate_data.msg = 'just updated their Facebook status'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' friends' : '')+': "'+parsed_msg.msg+'"';
							break;
						case "twitter":
							translate_data.msg = 'just tweeted'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' people' : '')+': "'+parsed_msg.msg+'"';
							break;
						case "email":
							translate_data.msg = 'just emailed a friend about '+parsed_msg.msg;
							break;
					}
				}
				else {
					translate_data.msg = data.origMsg;
				}

				that.translateChat(translate_data, function(msg) {
					data.msg = msg;
					$index.replaceWith(that.formatChat(data));
				});
			}
			else {
				data.msg = data.origMsg;
				$index.replaceWith(that.formatChat(data));
			}
		});

		$chat.scrollTop($chat[0].scrollHeight - $chat.outerHeight());
	};

	// When new message comes in from chat server
	this.doChat = function(data) {
		var that = this;

		if (data.nick === window._nick) {
			return;
		}

		var ui = this.ui;
		var $chat = $(ui.selector + ' .chat-window');
		var $chatpane = $chat.find('ul.pane');
		var $lastmsg = $chatpane.find('li').last();
		data.chatclass = ($lastmsg.hasClass('odd')) ? 'even' : 'odd';

		// Handle moderator message
		var parsed_msg = null;
		try {
			parsed_msg = jQuery.parseJSON(data.msg);
		} catch(e) {}

		if (parsed_msg !== null) {
			switch (parsed_msg.type) {
				case "typing":
					if (typeof(that.typingOn) === 'function') {
						that.typingOn(parsed_msg.nick);
					}
					return;
				case "done_typing":
					if (typeof(that.typingOff) === 'function') {
						that.typingOff(parsed_msg.nick);
					}
					return;
			}
		}

		var chatStr;
		if (data.lang !== "false" && this.lang !== false && data.lang !== this.lang) {
			data.origMsg = data.msg;

			var translate_data = {
				lang: data.lang
			};

			if (parsed_msg !== null) {
				switch (parsed_msg.type) {
					case "facebook":
						translate_data.msg = 'just updated their Facebook status'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' friends' : '')+': "'+parsed_msg.msg+'"';
						break;
					case "twitter":
						translate_data.msg = 'just tweeted: "'+parsed_msg.msg+'"'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' people' : '');
						break;
					case "email":
						translate_data.msg = 'just emailed a friend about '+parsed_msg.msg;
						break;
				}
			}
			else {
				translate_data.msg = data.origMsg;
			}

			this.translateChat(translate_data, function(msg) {
				data.msg = msg;
				chatStr = that.formatChat(data);
				var current_height = $chat[0].scrollHeight - $chat.outerHeight();
				var scroll = ($chat[0].scrollTop >= current_height) ? true : false;
				$chatpane.append(chatStr);
				if (scroll === true) {
					$chat.scrollTop($chat[0].scrollHeight - $chat.outerHeight());
				}
			});
		}
		else {
			data.origMsg = data.msg;
			chatStr = this.formatChat(data);
			var current_height = $chat[0].scrollHeight - $chat.outerHeight();
			var scroll = ($chat[0].scrollTop >= current_height) ? true : false;
			$chatpane.append(chatStr);
			if (scroll === true) {
				$chat.scrollTop($chat[0].scrollHeight - $chat.outerHeight());
			}
		}

		if (typeof(playSound) === "function") {
			playSound();
		}
	};

	this.translateChat = function(data, callback) {
		$.ajax({
			url: 'https://web.archive.org/web/20101228233441/http://ajax.googleapis.com/ajax/services/language/translate?v=1.0&q=' + encodeURIComponent(data.msg) + '&langpair=' + data.lang + '%7C' + this.lang + '&callback=?',
			dataType: 'jsonp',
			success: function(response) {
				if (response.responseStatus === 200) {
					callback(response.responseData.translatedText);
				}
				else {
					callback(data.msg);
				}
			}
		});
	};

	this.doPresence = function(data) {
		window._nicks = data.nicks;

		this.getStats();
	};

	this.getStats = function () {
		if (this.roomInstance !== false) {
			this.roomInstance.send({
				type: 'GetStats'
			});
		}
	};

	this.formatChat = function(data){
		var parsed_msg = null;
		try {
			parsed_msg = jQuery.parseJSON(data.msg);
		}
		catch (e) {
		}
		try {
			parsed_msg = jQuery.parseJSON(data.origMsg);
		}
		catch (e1) {
		}

		// 2010-10-20 (km) handle quotes
    data.origMsg = data.origMsg.replace(/"/g, '&quot;');
    data.origMsg = data.origMsg.replace(/>/g, '&gt;');
    data.origMsg = data.origMsg.replace(/</g, '&lt;');

    data.msg = data.msg.replace(/"/g, '&quot;');
    data.msg = data.msg.replace(/>/g, '&gt;');
    data.msg = data.msg.replace(/</g, '&lt;');

		data.nick = data.nick.replace(/"/g, '&quot;');


		if (typeof(data.chatclass) === 'undefined') {
			data.chatclass = 'odd';
		}

		// Break out hashed nick type from nick name
		var open_hash = 'ZXCV';
		var close_hash = 'VCXZ';
		var user_type = false;
		if (data.nick.indexOf(open_hash) > 0 && data.nick.indexOf(close_hash) > 0) {
			var original_nick = data.nick;
			var nick = data.nick.split(open_hash);
			data.nick = nick[0];
			user_type = nick[1].slice(0, nick[1].indexOf(close_hash));
		}

		// Remove hashed nick type from system messages
		if (data.msg.indexOf(open_hash) > 0 && data.msg.indexOf(close_hash) > 0) {
			data.msg = this.stripIdentifier(data.msg);
		}
		if (data.origMsg.indexOf(open_hash) > 0 && data.origMsg.indexOf(close_hash) > 0) {
			data.origMsg = this.stripIdentifier(data.origMsg);
		}

		// Look for links
		var message_array = data.msg.split(" ");
		for (var i in message_array) {
			var prepend = "";
			if (message_array[i].search(/.*:\/\/.*/) < 0) {
				prepend = "http://";
			}
			message_array[i] = message_array[i].replace(/((.*:\/\/)?[A-Za-z0-9]*\.?[A-Za-z0-9]{2,}\.[A-Za-z]{2,}.*)/, "<a href=\""+prepend+"$1\" target=\"_blank\">$1<\/a>");
		}
		data.msg = message_array.join(" ");

    if (typeof(data.itemClass) === 'undefined') {
      data.itemClass = '';
    }

		if (this.lang === false || data.lang === this.lang || typeof(data.lang) === "undefined" || data.lang === "false" || data.lang === false) {
			// If message has NOT been translated because lang is not set, or lang matches users lang
			switch (data.nick) {
				case 'system':
					return '<li nick="' + data.nick +
						   '" lang="' + data.lang +
						   '" class="system ' + data.itemClass + '" _orig="'+data.origMsg+
						   '"> ' + data.msg +
						   '</li>';
				case 'moderator':
					switch (parsed_msg.type) {
						case 'facebook':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"> <a href="https://web.archive.org/web/20101228233441/http://www.facebook.com/people/@/'+parsed_msg.uid+
							   '" target="_blank">'+parsed_msg.screen_name+
							   '</a> just updated their Facebook status'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' friends' : '')+
							   ': "'+parsed_msg.msg+
							   '</li>';
						case 'twitter':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"> <a href="https://web.archive.org/web/20101228233441/http://www.twitter.com/'+parsed_msg.screen_name+
							   '" target="_blank">@'+parsed_msg.screen_name+
							   '</a> just tweeted'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' people' : '')+
							   ': "'+parsed_msg.msg+
							   '"</li>';
						case 'email':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"><b>'+parsed_msg.screen_name+
							   '</b> just emailed a friend about '+parsed_msg.msg+
							   '</li>';
					}

					break;
				default:
					return '<li nick="' + ((user_type !== false) ? original_nick : data.nick) +
						   '" lang="' + data.lang +
						   '" class="' + data.chatclass +
						   '" _orig="'+data.origMsg+
						   '"><span class="author">' + data.nick +
						   ((user_type !== false) ? '<span class="chat_'+user_type+'">'+user_type+'</span>' : '')+
						   '</span> ' + data.msg +
						   '</li>';
			}
		}
		else {
			// If message has been translated
			var langHuman = 'Original';
			if (typeof(window.lang_trans[this.lang]) !== "undefined") {
				langHuman = window.lang_trans[this.lang][data.lang];
			}

			switch (data.nick) {
				case 'system':
					return '<li nick="' + data.nick +
						   '" lang="' + data.lang +
						   '" class="system ' + data.itemClass + '" _orig="' + data.origMsg +
						   '">&nbsp;' + data.msg +
						   '&nbsp;(' + langHuman +
						   ':&nbsp;' + data.origMsg +
						   ')</li>';
				case 'moderator':
					switch (parsed_msg.type) {
						case 'facebook':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"> <a href="https://web.archive.org/web/20101228233441/http://www.facebook.com/people/@/'+parsed_msg.uid+
							   '" target="_blank">'+parsed_msg.screen_name+
							   '</a> '+data.msg+
							   ' ('+langHuman+
							   ': <a href="https://web.archive.org/web/20101228233441/http://www.facebook.com/people/@/'+parsed_msg.uid+
							   '" target="_blank">'+parsed_msg.screen_name+
							   '</a> just updated their Facebook status'+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' friends' : '')+
							   ': "'+parsed_msg.msg+
							   ')</li>';
						case 'twitter':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"> <a href="https://web.archive.org/web/20101228233441/http://www.twitter.com/'+parsed_msg.screen_name+
							   '" target="_blank">@'+parsed_msg.screen_name+
							   '</a> '+data.msg+
							   ' ('+langHuman+
							   ': <a href="https://web.archive.org/web/20101228233441/http://www.twitter.com/'+parsed_msg.screen_name+
							   '" target="_blank">@'+parsed_msg.screen_name+
							   '</a> just tweeted '+((parsed_msg.followers_count > 9) ? ' to '+parsed_msg.followers_count+' people' : '')+
							   ': "'+parsed_msg.msg+
							   '")</li>';
						case 'email':
							return '<li nick="'+data.nick+
							   '" lang="'+data.lang+
							   '" class="system" _orig="'+escape(data.origMsg)+
							   '"><b>'+parsed_msg.screen_name+
							   '</b> '+data.msg+
							   ' ('+langHuman+
							   ': '+parsed_msg.screen_name+
							   ' just emailed a friend about '+parsed_msg.msg+
							   ')</li>';
					}
					break;
				default:
					return '<li nick="' + ((user_type !== false) ? original_nick : data.nick) +
						   '" lang="' + data.lang +
						   '" class="' + data.chatclass +
						   '" _orig="' + data.origMsg +
						   '"><span class="author">' + data.nick +
						   ((user_type !== false) ? '<span class="chat_'+user_type+'">'+user_type+'</span>' : '')+
						   '</span>&nbsp;' + data.msg +
						   '&nbsp;(' + langHuman +
						   ':&nbsp;' + data.origMsg +
						   ')</li>';
			}
		}
	};

	if (this.room_type === "public") {
		this.doLiveChat = function(type){
			if (typeof(type) === 'undefined') {
				type = 'live_prayer';
			}

			var url = '/home/' + type;

			var popup = window.open(url, type, 'width=480,height=675,resizable=no,scrollbars=yes,menubar=no,toolbar=no,status=no,location=no');
			popup.focus();

			// add new window to the stored list so we can set nick on everything when delurking
			window.live_chats[popup.name] = popup;
		};
	}

	this.moderator_message = function(type, screen_name, uid, followers_count, msg) {
		if (typeof(screen_name) === 'undefined' || screen_name === '') {
			screen_name = this.nick;
		}

		this.roomInstance.send({
			type: "Chat",
			nick: "moderator",
			lang: "en",
			msg: '{"type":"'+type+'", "screen_name":"'+screen_name+'", "uid":"'+uid+'", "followers_count":"'+followers_count+'", "msg":"'+msg+'"}'
		});
	};

	this.stripIdentifier = function(str) {
	   return str.replace(new RegExp("(.*) ZXCV(.*)VCXZ(.*)"), "$1$3");
	};
}

(function($){
    window.lang_trans = {};
    window.loadLanguageJSON = function(lang) {
		if (typeof window.lang_trans[lang] !== "undefined") { return; }

        $.ajax({
            async: false,
            url: '/js/langs/' + lang + '.json',
            success: function(data){
                window.lang_trans[lang] = eval(data);
            },
            error: function(data){
                delete window.lang_trans[lang];
            },
            dataType: 'json'
        });
    };

	var opener = getWindowOpener();

    // chat windows need to pull nick and event_id from main window
    if (opener !== null) {
		window._nick = opener._nick;
		window.event_id = opener.event_id;
    }

    var start = function(chat_rooms) {
//        if (opener === null) {
//            // if we are the main window, ajax call to get chat vars,
//			// then finish startup
//            var chat_vars_url = "/home/chat_vars/";
//            if (window.chat_room) {
//				chat_vars_url += window.chat_room;
//			}
//
//            $.ajax({
//                url: chat_vars_url,
//                type: "GET",
//                cache: false,
//                dataType: 'json',
//                success: function(data) {
//                    chatStartup(data, chat_rooms);
//                },
//                error: function() {
//                    alert('ERROR: Could not start chat');
//                }
//            });
//        }
//        else {
			// if we are a live chat window, use the chat_vars of the
			// parent window
			chatStartup(chat_rooms);
//        }
    };

    function chatStartup(chat_rooms) {
        var adminUrl = location.protocol + "//" + location.host + "/reg";
        $.admin.configure({
            url: adminUrl
        });

        $.chat.log.setLevel(window.logLevel);
        $.chat.configure({
            church: window.chat_vars.__church,
            token: window.chat_vars.__token,
            roles: window.chat_vars.__roles ? window.chat_vars.__roles.split(/,/) : [],
            cometdUrl: window.chat_vars.__cometdUrl,
			logLevel: window.logLevel
        });

        $.chat.start(function(success, msg){
			if (window.chat_started === true) {
				return;
			}
			window.chat_started = true;

            if (success === true) {
                startupRooms(chat_rooms);
            }
            else {
                $.ajax({
                    cache: false,
                    dataType: 'json',
                    complete: function(data){
                        top.location.reload(true);
                    },
                    url: "/home/refresh_chat_token",
                    type: "POST",
                    data: {
                        token: window.chat_vars.__token
                    }
                });
            }
        }, function(success, msg){
			if (window.chat_started === true) {
				return;
			}

			if (success === false) {
				// TODO what to do here?
			}
		});
    }

    window.initializeRooms = function(chat_rooms) {
        $.each(chat_rooms, function(index, chatui){
            if (chatui && chatui.selector && $(chatui.selector)[0]) {
                startUp(chatui, true);
            }
        });

		start(chat_rooms);
    };

    function startupRooms(chat_rooms){
        $.each(chat_rooms, function(index, chatui) {
            if (chatui && chatui.selector && $(chatui.selector)[0]) {
                startUp(chatui);
            }
        });
    }

    function startUp(chatui, init){
        // Setup public UI
        var ui = {
            'selector': chatui.selector,
            'chatdiv': $(chatui.selector + ' .chat-input .chat'),
            'nick': $(chatui.selector + ' .nick input[name=nickname]'),
            'nickbttn': $(chatui.selector + ' .nick .nick-bttn'),
            'nickdiv': $(chatui.selector + ' .nick'),
            'phrase': $(chatui.selector + ' .chat-input .chat input[name=phrase]'),
            'sendbttn': $(chatui.selector + ' .chat-input .chat .send-bttn')
        };
        ui.nick.attr('autocomplete', 'off');
        ui.phrase.attr('autocomplete', 'off');
        $(ui.selector + ' .chat-window .pane').hide();
        $('div#enter-nickname').hide();

        // handle close of nickname dialog
        $('div#nick-input a.close-x').click(function(){
          $('div#chat-overlay').fadeOut("fast");
          $('div#enter-nickname').show();
          event.preventDefault();
        });

        // handle reopen of nickname dialog
        $('div#enter-nickname').click(function(){
          $(this).hide();
          $('div#chat-overlay').fadeIn("fast");
          $('div#nick-input').fadeIn("fast");
        });



        if (init === true) {
			return;
		}

        finishStartup(ui, chatui.room);
    }

    function finishStartup(ui, room) {
        room.ui = ui;
        room.chat_vars = window.chat_vars;
        room.start();

        if (window._nick !== false && typeof(window._nick) !== "undefined" && window._nick !== null) {
            $(ui.selector + ' .instructions').hide();
            $(ui.selector + ' .chat-window .pane').slideDown();
            room.delurk(window._nick, true);
            ui.nickdiv.hide();
            ui.chatdiv.show();
            ui.phrase.focus();
        }
        else {
            ui.nickdiv.show();
            $(ui.selector + ' .chat-window .pane').slideDown();
            ui.nickbttn.live('click', function(){
                $("#setting-nickname").show();
                room.delurk(ui.nick.val());
                $("#setting-nickname").hide();
                $(ui.selector + ' .instructions').slideUp();
                return false;
            });

			// store the default text for later checks
			ui.nick.data('default-text', ui.nick.val());

            ui.nick.focus(function() {
                if (ui.nick.val() === ui.nick.data('default-text')) {
					ui.nick.val('');
				}
            });
            ui.nick.blur(function() {
				if (ui.nick.val() === '') {
					ui.nick.val(ui.nick.data('default-text'));
				}
            });
            ui.nick.keyup(function(e){
                if (e.keyCode === 13) {
                    room.delurk(ui.nick.val());
                }
            });
        }

        ui.sendbttn.click(function(){
            room.send();
            return false;
        });
        ui.phrase.keyup(function(e){
            if (e.keyCode === 13) {
                room.send();
            }
        });
    }
})(jQuery);

function getWindowOpener() {
    // attempt to step around security exceptions
    if (window.name.indexOf('live_') !== 0 && window.name.indexOf('answer_') !== 0) {
        return null;
    }

    // KM: fix for IE
    if (typeof window.opener === 'undefined') {
        return null;
    }

    return window.opener;
}
