!function(e){"use strict";var n,t=0,i=function(){window.picturefill&&e(window.picturefill),(window.picturefill||t>9999)&&clearInterval(n),t++};n=setInterval(i,8),i()}(function(e,n){"use strict";var t=window.document,i=e._,r={},d=i.cfg,u="currentSrc",a=function(e,n,t){var i=t.curCan;e&&n.setAttribute("width",parseInt(e/i.res,10))},c=function(e,n,i){var d,c,o;e in r?a(r[e],n,i):(o=function(){i.pendingURLSize=null,d.onload=null,d.onerror=null,n=null,d=null},i.pendingURLSize=e,c=i.curCan,c.w&&a(c.w,n,i),d=t.createElement("img"),d.onload=function(){if(r[e]=d.naturalWidth||d.width,!r[e])try{t.body.appendChild(d),r[e]=d.offsetWidth||d.naturalWidth||d.width,t.body.removeChild(d)}catch(c){}e===n[u]&&a(r[e],n,i),o()},d.onerror=o,d.src=e,d&&d.complete&&d.onload())},o=function(){var e,n,r=function(){var r,d,u,a=t.getElementsByTagName("img"),c={elements:[]};for(i.setupRun(c),e=!1,clearTimeout(n),r=0,d=a.length;d>r;r++)u=a[r][i.ns],u&&u.curCan&&(i.setRes.res(u.curCan,u.curCan.set.sizes),i.setSize(a[r]));i.teardownRun(c)};return function(){!e&&d.addSize&&(e=!0,clearTimeout(n),n=setTimeout(r))}}();u in t.createElement("img")||(u="src"),i.setSize=function(e){var t,r=e[i.ns],a=r.curCan;r.dims===n&&(r.dims=e.getAttribute("height")&&e.getAttribute("width")),d.addSize&&a&&!r.dims&&(t=i.makeUrl(a.url),t===e[u]&&t!==r.pendingURLSize&&c(t,e,r))},window.addEventListener&&!i.supPicture&&addEventListener("resize",o,!1),"addSize"in d?d.addSize=!!d.addSize:d.addSize=!0,o()});