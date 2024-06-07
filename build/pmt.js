window.pmt=function(){var t={version:"v2.0.22",log:function(e){t.output=t.output||[],t.output.push(e)},set:function(e,o){t[e]=o},getPubId:function(){return(document.cookie.match("(^|;) ?_PUB_ID=([^;]*)(;|$)")||[])[2]},drivePubId:function(e){const o=window.location.href,n="pub_id=";let a,i;if(o.match(n)){if(i=o.split(n).pop().split("&").shift(),a="_PUB_ID="+i+"; path=/",document.cookie=a,e){let t=o.replace(n+i,"");t=t.replace("?&","?"),t=t.replace("&&","&");t.split("?").pop()||(t=t.split("?").shift());const e=t.length-1;"&"===t.charAt(e)&&(t=t.substring(0,e)),window.location.replace(t)}return a}return t.getPubId()},driveCampaignId:function(t){let e;const o="dcid=",n=t&&t.dcid||window.location.search&&window.location.search.match(o)&&window.location.search.split(o).pop().split("&").shift()||(document.cookie.match("(^|;) ?dcid=([^;]*)(;|$)")||[])[2];let a,i;const c=t&&t.form,r=t&&t.url||window.location.href;return function(t){const e=t;let a;const i=n&&n.replace(o,"");t&&(e.tagName?n&&!e.driver_campaign_id&&(a=document.createElement("input"),a.type="hidden",a.name="driver_campaign_id",a.value=i,e.appendChild(a)):n&&(e.driver_campaign_id=i))}(c),r.match(o)?(a=r.split(o).pop().split("&").shift(),i=new Date,i.setDate(i.getDate()+30),e="dcid="+a+"; expires="+i.toUTCString()+"; path=/",document.cookie=e,e):t}};return t.enablePostmanAnalytics=function(e,o,n){if("function"!=typeof e||e.postmanAnalyticsEnabled||navigator.doNotTrack&&!o._disableDoNotTrack)return e;function a(t){return t.replace(/"/gi,'"')}function i(t){return"string"==typeof t&&t.split(window.location.host).pop()}return o||(o={}),e.postmanAnalyticsEnabled=!0,function(c,r,d,s){const l="load"!==r||window.location.href!==t.currentURL;if(!l)return!1;e.apply(this,arguments);const p="gtm.uniqueEventId";let u,m,f,g;const h=r||n;t.initCategory||(t.initCategory=c);const w={category:c,action:h,indexType:"client-events",property:o._property||document.location.host,propertyId:document.location.host,traceId:t.traceId||o._traceId||"anonymous",timestamp:(new Date).toISOString()},y=i(t.currentURL)||document.referrer||t.externalURL||"",b=navigator.language||window.navigator.userLanguage||"?";function k(t,e){const o=t&&t.split(",")||[],n=o.length;let a,i;for(a=0;a<n;a+=1){const t=o[a];if(i=-1!==e.indexOf(t),i)break}return i}w.meta={url:i(y),language:b},d&&(w.entityId=d),"load"===w.action&&w.entityId&&document.body&&document.body.id&&(w.entityId=w.entityId+"#"+document.body.id),s&&(u=parseInt(s,10),m=u&&!u.isNaN&&u||null,g="string"==typeof s,f=g&&s.match(":")&&s.split(":").pop()||g&&s||"object"==typeof s&&a(JSON.stringify(s))||"",m&&(w.value=m),f&&(d?w.entityId+=":"+f:w.entityId=f)),(Object.keys(o)||[]).forEach((function(t){"_"!==t.charAt(0)&&(w[t]=o[t])})),r||"object"!=typeof c||(w.action=c.action||c.event||c[Object.keys(c)[0]],c[p]&&(w.category=p+"-"+c[p])),"local"===w.env&&(w.env="beta"),"object"==typeof w.category&&w.category&&"string"==typeof w.category.category&&(w.category=w.category.category),["category","event","label"].forEach((function(t){"object"==typeof w[t]&&(w[t]=w[t]&&a(JSON.stringify(w[t])))})),w.userId=t.getPubId()||(document.cookie.match("(^|;) ?_pm=([^;]*)(;|$)")||[])[2]||w.userId,t.userId=w.userId;const I=t.traceId.split("|").pop();return t.traceId=t.traceId.split(I).shift()+t.userId,-1===window.name.indexOf("PM.")&&(window.name=t.traceId),t.api().store(),setTimeout((function(){t.api()}),1e3),w.category&&w.action&&"function"==typeof o.fetch&&o.fetch(o._url,w)||w.entityId&&"object"==typeof document&&(()=>{const e=o._allow&&k(o._allow,document.location.pathname)||!o._allow&&!0,n=o._disallow&&k(o._disallow,document.location.pathname),a=btoa(JSON.stringify(w));if(e&&!n){if(fetch){if("load"===w.action){if(w.action&&!l)return t.trackIt(),!1;w.entityId=w.entityId.split("#").shift()}t.traceId&&(w.traceId=t.traceId),fetch(o._url,{method:"POST",headers:{Accept:"text/html","Content-Type":"text/html"},body:a,mode:"no-cors",keepalive:!0}).catch((function(e){t.log(e)})),t.event=w}else!function(t){const e=new XMLHttpRequest;e.open("POST",o._url),e.setRequestHeader("Accept","application/json"),e.setRequestHeader("Content-type","text/plain"),e.send(t)}(a);t.currentURL=window.location.href,-1===w.meta.url.indexOf(document.location.host)&&(t.externalURL=w.meta.url)}})(),!0}},t.ga=function(){"function"==typeof window.ga&&window.ga.apply(this,arguments)},t.getEnv=function(t){let e;e="production";const o=t||document.location.hostname;return["beta","local","stag"].forEach((function(t){o.match(t)&&(e=t)})),e},t.setScalp=function(e){if("object"==typeof window){const o=(document.location.search&&document.location.search.match("dcid=([^;]*)(;|$)")||[])[1],n=o&&o.split("&").shift()||(document.cookie.match("(^|;) ?dcid=([^;]*)(;|$)")||[])[2],a=document.location.search.substr(1).split("&"),i=window.localStorage.getItem("utms"),c=i&&i.split(",")||[];a.forEach((t=>{const e=t.match("([UTM|utm].*)=([^;]*)(;|$)");e&&(-1!==e[0].indexOf("utm")||-1!==e[0].indexOf("UTM"))&&c.push(e[0])}));const r=document.location.host.split("."),d=r.pop(),s=r.pop(),l=c.length&&c.join(".")||"",p="PM.",u=p+btoa((new Date).toISOString()),m=window.name&&window.name.match("|PM.")&&window.name.split("|").pop()||(document.cookie.match("(^|;) ?_pm=([^;]*)(;|$)")||[])[2],f=function(t){const e=new Date;return e.setDate(e.getDate()+1080),"_pm="+t+"; expires="+e.toUTCString()+"; domain=."+s+"."+d+"; path=/"};(function(t){const e=-1!==document.cookie.indexOf("_pm"),o=-1===t.indexOf(p),n=-1!==document.cookie.indexOf(p);(!e||o||!window.location.hostname.match(/\.postman.com/)&&n)&&(document.cookie=f(t))})(m||u);const g="pm"+btoa((new Date).getTime());"string"==typeof window.name&&"pm"===window.name.substring(0,2)||(n&&-1===window.name.indexOf("DCID.")?window.name=g+"|DCID."+n+(l&&"|"+l||"")+"|"+(m||u):window.name=g+(l&&"|"+l||"")+"|"+(m||u));const h=window.parent&&window.parent.name||window.name,w=function(){t.scalpCount||(t.scalpCount=0),t.scalpCount+=1},y=t.getPubId()||m||window.name.split("|").pop(),b={env:"function"==typeof t.getEnv&&t.getEnv()||"production",type:"events-website",userId:y,_allow:!e.disallow&&e.allow,_disableDoNotTrack:void 0===e.disableDoNotTrack||e.disableDoNotTrack,_disallow:!e.allow&&e.disallow,_property:e.property||document.location.host,_traceId:h},k=b.env.match("prod")?"https://bi.pst.tech/events":"https://bi-beta.pst.tech/events";b._url=e.url||k,document.cookie="_pm.traceId="+h+"; domain=."+s+"."+d+"; path=/",t.scalp=t.enablePostmanAnalytics(w,b),t.traceId=h,t.userId=y}},t.getTraceUrl=function(e){const o=-1!==e.indexOf("?")?"&":"?";return e+o+"trace="+t.traceId},t.trace=function(e){document.location.href=t.getTraceUrl(e)},t.getUtmUrl=function(e){const o=-1!==e.indexOf("?")?"&":"?",n=t.traceId.split(".").pop(),a=t.traceId.split("."+n).shift().substr(1).split("."),i=[];return a.forEach((t=>{const e=t.match("([UTM|utm].*)=([^;]*)(;|$)");e&&(-1!==e[0].indexOf("utm")||-1!==e[0].indexOf("UTM"))&&i.push(e[0])})),e+o+(i.length&&i.join("&")||"utm="+document.location.host)},t.utm=function(e){let o=t.getUtmUrl(e);o.match("trace=")||(o=o+"&trace="+t.traceId),document.location.href=o},t.trackClicks=function(e,o){const n=function(n){const a=document.body&&document.body.id&&"#"+document.body.id||"";if(e){const i=n.target.getAttribute(e);i&&t.scalp(o||t.initCategory,"click","target",a+i)}else if(!e&&("string"==typeof n.target.className||"string"==typeof n.target.id)){const e=n.target.className||n.target.id||n.target.parentNode.className||-1;if("string"==typeof e){const i=document.location.pathname+a+":"+n.target.tagName+"."+e.split(" ").join("_");try{t.scalp(o||t.initCategory,"click",i)}catch(e){t.log(e.message)}}}};document.body.getAttribute("data-trackClicks")||document.body.addEventListener("mousedown",n,!0),document.body.setAttribute("data-trackClicks",e||"default")},t.driveTrack=function(e){let o;const n="_track=",a=e&&e._track||window.location.search&&window.location.search.match(n)&&window.location.search.split(n).pop().split("&").shift()||(document.cookie.match("(^|;) ?"+n+"([^;]*)(;|$)")||[])[2],i=e&&e.url||window.location.href,c=t.getEnv(),r=c.match("stag")?"stage":c;return t.tracking=!0,t.trackIt(),i.match(n)?(o="postman-"+r+".track="+a+"; path=/",document.cookie=o,o):e},t.trackIt=function(){const e=(document.cookie.match("(^|;) ?postman-[a-z]+.track=([^;]*)(;|$)")||[])[2];if(e&&t.tracking){let t=document.location.href;const o=-1===t.indexOf("?")?"?":"&";-1===t.indexOf("_track")&&"default"!==e&&(t=`${t}${o}_track=${e}`,document.location.replace(t))}},t.xhr=function(t,e){const o=new XMLHttpRequest,n="t="+(new Date).getTime(),a=-1===t.indexOf("?")?"?":"&",i=t+a+n;o.withCredentials=!0,o.addEventListener("readystatechange",(function(){4===this.readyState&&e(this.responseText)})),o.open("GET",i),o.send()},t.bff=function(e,o,n){const a=(n?"/mkapi/":"https://www.postman.com/mkapi/")+e+".json";t.xhr(a,o)},t.store=function(e,o){const n=(document.cookie.match("(^|;) ?_pm.store=([^;]*)(;|$)")||[])[2],a=n&&JSON.parse(n)||{};t.stored={...a},e&&o&&(t.stored[e]=o);const i=document.location.host.split("."),c=i.pop(),r=i.pop(),d=new Date;d.setDate(d.getDate()+1080);let s="_pm.store="+JSON.stringify(t.stored)+"; expires="+d.toUTCString()+"; domain=."+r+"."+c+"; path=/";if(!r){const t=s.split("domain=").pop().split(";").shift();s=s.replace(t,"localhost")}document.cookie=s},t.api=function(e){"object"==typeof e&&Object.keys(e).forEach((function(t){window[t]=e[t]}));const o=window.pm,n=o&&o.billing,a=n&&n.plan,i=a&&a.features;if(i){const e=i&&i.is_paid_plan_growth,o=e&&e.value,n=i&&i.is_enterprise_plan_growth,a=(n&&n.value?"enterprise":o&&"paid")||"free";t.store("plan",a)}return t},setTimeout((function(){const t=document.getElementById("pmtSDK"),e=t&&t.getAttribute("data-track-category")||"pm-analytics",o=t&&t.getAttribute("data-track-property"),n=t&&t.getAttribute("data-track-url"),a=t&&"false"!==t.getAttribute("data-track-disable-do-not-track"),i=t&&"true"===t.getAttribute("data-drive-track"),c=t&&"false"!==t.getAttribute("data-drive-campaign-id"),r=t&&"false"!==t.getAttribute("data-drive-pub-id"),d=t&&"false"!==t.getAttribute("data-track-load"),s=t&&"false"!==t.getAttribute("data-track-clicks"),l=s&&t.getAttribute("data-track-clicks-attribute")||null;if(o){const t={property:o};n&&(t.url=n),a&&(t.disableDoNotTrack=a),window.pmt("setScalp",[t]),d&&window.pmt("scalp",[e,"load",document.location.pathname]),s&&window.pmt("trackClicks",[l,e]),c&&window.pmt("driveCampaignId"),r&&window.pmt("drivePubId",[!0]),i&&window.pmt("driveTrack")}}),1e3),function(e,o){return t[e]?"function"==typeof t[e]?t[e].apply(t,o):t[e]:null}}();