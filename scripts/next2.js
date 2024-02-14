function next2Page() {
    judul.innerHTML = `<span class="h6">Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution ">
<p style="text-indent:1em; text-align:justify">Berdasarkan ∆ABC,∆DEC,dan ∆FGC dalam perbandingan trigonometri rumus perbandingan trigonometri ada 3 yaitu <b>sinus, cosinus dan tangen</b> .</p>
<ul style="padding-left: .3em">
<ol>
<li>
<b>Sinus</b><br>
<p style="text-align: justify; margin-bottom: 0;">Nilai Perbandingan ini mempunyai nama khusus yaitu Sinus (disingkat sin). Sin suatu sudut yang dapat ditentukan dengan membagi panjang <b class="text-danger">sisi depan</b> dan <b class="text-danger">sisi miring segitiga</b>.</p>
<img src="../images/sinus.png" class="img-fluid w-100" alt="sinus"> </br>pada gambar di atas tentukan sisi depan dan sisi miring serta rumus dari sin⁡θ!
</li>

<li>
<b>Cosinus</b><br>
<p style="text-align: justify;margin-bottom: 0;">Nilai Perbandingan ini mempunyai nama khusus yaitu Cosinus (disingkat Cos). Cos suatu sudut yang dapat ditentukan dengan membagi panjang <b class="text-danger">sisi samping</b> dan <b class="text-danger">sisi miring segitiga</b>.</p>
<br>
<img src="../images/cosinus.png" class="img-fluid w-100" alt="Responsive image"> </br>pada gambar di atas tentukan sisi samping dan sisi miring serta rumus dari cos⁡θ !   
</li>

<li>
<b>Tangen</b><br>
<p style="text-align: justify;margin-bottom: 0;">Nilai Perbandingan ini mempunyai nama khusus yaitu Tangen 
(disingkat tan). Tan suatu sudut yang dapat ditentukan dengan membagi panjang <b class="text-danger">sisi depan</b>  dan <b class="text-danger">sisi samping segitiga</b>. </p>
<img src="../images/tangen.png" class="img-fluid w-100" alt="Responsive image"> </br> pada gambar di atas tentukan sisi depan dan sisi samping serta rumus dari tan⁡θ! 

<iframe
 id="JotFormIFrame-232450973377463"
 title="Video Submit Form"
 onload="window.parent.scrollTo(0,0)"
 allowtransparency="true"
 allowfullscreen="true"
 allow="geolocation; microphone; camera"
 src="https://form.jotform.com/232450973377463"
 frameborder="0"
 style="min-width:100%;max-width:100%;height:539px;border:none;"
 scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232450973377463");
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
</li>
</ol>
</ul>
<div class="mt-4 w-100 d-flex justify-content-between mb-2">
<a href="#next1" type="button" class="btn btn-success ">Sebelumnya</a>
<a href="#next3" type="button" class="btn btn-success">Selanjutnya</a>
</div>
</div>`
}