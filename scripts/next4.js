function next4Page() {
    judul.innerHTML = `<span class="h6">Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution">
<button class="divco blue mb-2" href=""><span>VERIVICATION (Pembuktian)</span></button>
<p style="text-indent:1em;" class="mb-0">Berdasarkan hasil pengolahan data atau informasi yang telah kalian peroleh maka, buktikan hasil yang telah kalian peroleh:</p>
<div class="form-group">
 
<iframe
id="JotFormIFrame-232154350994458"
title="Jawab"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/232154350994458"
frameborder="0"
style="min-width:100%;max-width:100%;height:539px;border:none;"
scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232154350994458");
if (ifr) {
var src = ifr.src;
var iframeParams = [];
if (window.location.href && window.location.href.indexOf("?") > -1) {
  iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
}
if (src && src.indexOf("?") > -1) {
  iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
  src = src.substr(0, src.indexOf("?"))
}
iframeParams.push("isIframeEmbed=1");
ifr.src = src + "?" + iframeParams.join('&');
}
window.handleIFrameMessage = function(e) {
if (typeof e.data === 'object') { return; }
var args = e.data.split(":");
if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
if (!iframe) { return; }
switch (args[0]) {
  case "scrollIntoView":
    iframe.scrollIntoView();
    break;
  case "setHeight":
    iframe.style.height = args[1] + "px";
    if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
      iframe.style.minHeight = args[1] + "px";
    }
    break;
  case "collapseErrorPage":
    if (iframe.clientHeight > window.innerHeight) {
      iframe.style.height = window.innerHeight + "px";
    }
    break;
  case "reloadPage":
    window.location.reload();
    break;
  case "loadScript":
    if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
    var src = args[1];
    if (args.length > 3) {
        src = args[1] + ':' + args[2];
    }
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    break;
  case "exitFullscreen":
    if      (window.document.exitFullscreen)        window.document.exitFullscreen();
    else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
    else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
    else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
    else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
    break;
}
var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
  var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
  iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
}
};
window.isPermitted = function(originUrl, whitelisted_domains) {
var url = document.createElement('a');
url.href = originUrl;
var hostname = url.hostname;
var result = false;
if( typeof hostname !== 'undefined' ) {
  whitelisted_domains.forEach(function(element) {
      if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
          result = true;
      }
  });
  return result;
}
};
if (window.addEventListener) {
window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
window.attachEvent("onmessage", handleIFrameMessage);
}
</script>
<button id="klik" class="mt-3 btn btn-outline-primary">Klik buktikan!</button>
</div>
<hr>
<div id="materi" class="materi">
<div class="d-flex justify-content-around">
<div>
Rumus Phytagoras: <br>
<p> AC<sup>2</sup> = BC<sup>2</sup> + AB<sup>2</sup></p>
<p>5<sup>2</sup> = BC<sup>2</sup> + 3<sup>2</sup></p>
<p>25 - 9 = BC<sup>2</sup></p>
<p>BC = 4m</p>
</div>
<div>
<p>Nilai perbandingan pada sudut θ</p>
<div class="h6">
<p>sin θ = <sup>de</sup>&frasl;<sub>mi</sub> = <sup>4</sup>&frasl;<sub>5</sub> </p>
<p>cos θ = <sup>sa</sup>&frasl;<sub>mi</sub> = <sup>3</sup>&frasl;<sub>5</sub> </p>
<p>tan θ = <sup>de</sup>&frasl;<sub>sa</sub> = <sup>4</sup>&frasl;<sub>3</sub> </p>
</div>
</div>
</div>
<img src="../images/siku-siku.png" class="img-fluid w-50" alt="Responsive image"> 
</div>
</div>
<button class="divco blue mb-2" href=""><span>GENERALIZATION (Menarik Kesimpulan)</span></button>
<p style="text-indent:1em;" class="mb-0">Dari permasalahan di atas, dapat disimpulkan bahwa:</p>

<iframe
id="JotFormIFrame-232154350994458"
title="Jawab"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/232154350994458"
frameborder="0"
style="min-width:100%;max-width:100%;height:539px;border:none;"
scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232154350994458");
if (ifr) {
var src = ifr.src;
var iframeParams = [];
if (window.location.href && window.location.href.indexOf("?") > -1) {
  iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
}
if (src && src.indexOf("?") > -1) {
  iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
  src = src.substr(0, src.indexOf("?"))
}
iframeParams.push("isIframeEmbed=1");
ifr.src = src + "?" + iframeParams.join('&');
}
window.handleIFrameMessage = function(e) {
if (typeof e.data === 'object') { return; }
var args = e.data.split(":");
if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
if (!iframe) { return; }
switch (args[0]) {
  case "scrollIntoView":
    iframe.scrollIntoView();
    break;
  case "setHeight":
    iframe.style.height = args[1] + "px";
    if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
      iframe.style.minHeight = args[1] + "px";
    }
    break;
  case "collapseErrorPage":
    if (iframe.clientHeight > window.innerHeight) {
      iframe.style.height = window.innerHeight + "px";
    }
    break;
  case "reloadPage":
    window.location.reload();
    break;
  case "loadScript":
    if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
    var src = args[1];
    if (args.length > 3) {
        src = args[1] + ':' + args[2];
    }
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    break;
  case "exitFullscreen":
    if      (window.document.exitFullscreen)        window.document.exitFullscreen();
    else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
    else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
    else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
    else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
    break;
}
var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
  var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
  iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
}
};
window.isPermitted = function(originUrl, whitelisted_domains) {
var url = document.createElement('a');
url.href = originUrl;
var hostname = url.hostname;
var result = false;
if( typeof hostname !== 'undefined' ) {
  whitelisted_domains.forEach(function(element) {
      if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
          result = true;
      }
  });
  return result;
}
};
if (window.addEventListener) {
window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
window.attachEvent("onmessage", handleIFrameMessage);
}
</script>
<div class="mt-4 w-100 d-flex justify-content-between mb-2">
<a href="#next3" type="button" class="btn btn-success ">Sebelumnya</a>
<a href="#next5" type="button" class="btn btn-success">Selanjutnya</a>
</div>
</div>
</div>`

    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}