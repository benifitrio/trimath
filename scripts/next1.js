function next1Page() {
    judul.innerHTML = `<span class="h6">Perbandingan Trigonometri</span>`
    content.innerHTML = `
 <div class="section_our_solution">
 <button class="divco blue mb-2 mt-3" href=""><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
 <p>Setelah melakukan identifikasi, didapatkan jawaban sementara yaitu : </p>

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
 <p>Untuk membuktikan hipotesis diatas, Kalian dapat mengumpulkan beberapa data dan informasi sebagai berikut :  </p>
 <ul>
  <li>	untuk menentukan tinggi pohon kalian dapat menggunakan <b>teorema phytagoras</b> yang berlaku pada segitiga siku – siku yaitu: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>  <img src="../images/segitiga.png" class="img-fluid w-25" alt="Responsive image">  </li>
  <li>Setelah kalian mendapatkan hasil data dalam mengukur ketinggian pohon dengan menggunakan teorema phytagoras, untuk membantu kalian dalam menentukan nilai perbandingan sinus, cosinus, dan tangen pada sudut θ, kalian dapat menggunakan rumus perbandingan trigonometri sebagai berikut:</li>
</ul>
 <div class="mt-4 w-100 d-flex justify-content-between mb-2">
 <a href="#pert1" type="button" class="btn btn-success ">Sebelumnya</a>
 <a href="#next2" type="button" class="btn btn-success">Selanjutnya</a>
 </div>
 </div>`
}