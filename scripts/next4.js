function next4Page() {
    judul.innerHTML = `<span class="h6">Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution">
<button class="divco blue mb-2" href=""><span>VERIVICATION (Pembuktian)</span></button>
<p style="text-indent:1em;" class="mb-0">Berdasarkan hasil pengolahan data atau informasi yang telah kalian peroleh maka, buktikan hasil yang telah kalian peroleh:</p>
<div class="form-group">
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

<button id="klik" class="mt-3 btn btn-outline-primary">Klik buktikan!</button>
</div>
<hr>
<div id="materi" class="materi">
<img src="../images/buktikan1.png" class="img-fluid" alt="Responsive image"> 
</div>

<button class="divco blue mb-2" href=""><span>GENERALIZATION (Menarik Kesimpulan)</span></button>
<p style="text-indent:1em;" class="mb-0">Dari permasalahan di atas, dapat disimpulkan bahwa:</p>

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

<p style="text-indent:1em;" class="my-2">
<b>Simaklah contoh soal pada video di bawah ini.</b> 
</p>
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/2iTbfPEMCeo" title="YouTube video" allowfullscreen></iframe>
</div>


<div class="mt-4 w-100 d-flex justify-content-center mb-2">
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#next3" tabindex="-1">Previous</a</li>
    <li class="page-item"><a class="page-link" href="#pert1">1</a></li>
    <li class="page-item"><a class="page-link" href="#next1">2</a></li>
    <li class="page-item"><a class="page-link" href="#next2">3</a></li>
    <li class="page-item"><a class="page-link" href="#next3">4</a></li>
    <li class="page-item active"><a class="page-link" href="#next4">5</a></li>
    <li class="page-item"><a class="page-link" href="#pert2">Materi 2</a>
    </li>
  </ul>
</nav>
</div>
</div>`

    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}