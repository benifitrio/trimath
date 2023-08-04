function pert3Page() {
    judul.innerHTML = `<span class="h6">Pemanfaatan Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution">
<img src="../images/piramida.png" class="img-fluid" alt="Responsive image">
<p style="text-indent:1em;">Piramida adalah bangunan menakjubkan yang dibangun sekitar 4.500 tahun yang lalu. Bayangkan banyaknya pekerja dan persiapan yang diperlukan untuk membuat bangunan seperti ini, tanpa tersedianya alat canggih seperti zaman sekarang.
</p>

<button class="divco blue mb-2"><span>STIMULATION ( Pemberian Rangsangan)</span></button>
<p style="text-indent:1em;">
Jika andre seorang pengagum piramida ingin membuat replica piramida.  Jika besarnya sudut yang di gunakan oleh Andre yaitu θ = 30° dan panjang rusuk piramida adalah 600 m. Untuk membangun replika, Andre juga perlu mengetahui tingginya, berapakah tinggi dari replica piramida tersebut?.
</p>

<button class="divco blue mb-2 mt-3"><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
<p style="text-indent:1em;">
Setelah melakukan identifikasi, didapatkan jawaban sementara yaitu: 
</p>

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

<button class="divco blue mb-2" href=""><span>DATA COLLECTION ( Pengumpulan Data)</span></button>
<p style="text-indent:1em;">
Untuk membuktikan hipotesis diatas, Kalian dapat mengumpulkan beberapa data dan informasi sebagai berikut:
</p>
<ol class="list-group list-group-numbered">
<li class="list-group-item">
Gambar perumpamaan piramida dengan sudut nya yaitu  θ = 30° dan panjang rusuk piramida adalah 600 m, seperti gambar di bawah ini.<br>
<div class="w-100 d-flex justify-content-center ">
<img src="../images/PIR2.png" class="img-fluid" alt="Responsive image">
</div>
</li>
<li class="list-group-item">Dari gambar diatas perbandingan yang digunakan apakah sinus, cosinus atau tangen?</li>
<li class="list-group-item">Untuk mencari tinggi pada piramida gunakan perbandingan trigonometri.</li>
</ol>

<p style="text-indent:1em;">
Setelah kalian mendapatkan beberapa data dan informasi apakah hipotesis kalian benar atau salah:
</p>

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
<a href="#pert2" type="button" class="btn btn-success">Kemateri 2</a>
<a href="#next8" type="button" class="btn btn-success">Selanjutnya</a>
</div>`
}