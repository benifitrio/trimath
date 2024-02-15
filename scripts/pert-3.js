function pert3Page() {
    judul.innerHTML = `<span class="h6">Pemanfaatan Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution justifytext">
<img src="../images/mat3.png" class="img-fluid" alt="Responsive image">
<p style="text-indent:1em;">Perbandingan trigonometri dapat dimanfaatkan untuk menyelesaikan permasalahan sehari – hari pada pengukuran obyek yang tidak dapat secara fisik diukur ketinggianya. Seperti pada gambar diatas trigonometri dapat digunakan untuk mengukur jarak, tinggi dan lebar benda yang tidak bisa diukur secara langsung. 
</p>
<p style="text-indent:1em;">Tidak hanya pada gambar elang terbang diatas banyak sekali kita jumpai berbagai hal yang berkaitan dengan pemanfaatan trigonometri dikehidupan sehari hari. Seperti kaitanya dengan Piramida. 
</p>
<div class="d-flex justify-content-center">
<img src="../images/piramida.png" class="img-fluid" alt="Responsive image">
</div>
<p style="text-indent:1em;">Piramida adalah bangunan menakjubkan yang dibangun sekitar 4.500 tahun yang lalu. Bayangkan banyaknya pekerja dan persiapan yang diperlukan untuk membuat bangunan seperti ini, tanpa tersedianya alat canggih seperti zaman sekarang.
</p>
<p style="text-indent:1em;">Seperti halnya kalian melihat gedung atau bangunan bertingkat Dalam matematika Bangunan ataupun sesuatu yang tinggi berkaitan dengan sudut elevasi dan sudut depresi.
</p>
<p style="text-indent:1em;">Apakah kalian tahu apa sudut elevasi dan sudut depresi? “sudut elevasi” . adalah sudut yang dibentuk oleh arah horizontal dengan arah pandangan mata pengamat ke arah atas. 
</p>
<p style="text-indent:1em;">Selain sudut elevasi “Sudut depresi” adalah sudut yang dibentuk oleh arah horizontal dengan arah pandangan mata pengamat ke arah bawah. 
Seperti gambar di bawah ini!
</p>
<img src="../images/m3.png" class="img-fluid" alt="Responsive image">
<p style="text-indent:1em;">Pada sub bab ini kalian akan memahami pemanfaatan perbandingan trigonometri dikehidupan sehari – hari.
</p>

<button class="divco blue mb-2"><span>STIMULATION ( Pemberian Rangsangan)</span></button>
<p style="text-indent:1em;">
Pada gambar diatas seekor kelinci yang berada di lubang tanah tempat persembunyiannya melihat seekor elang yang sedang terbang dengan sudut 600
 Jika jarak antara kelinci dan elang adalah 18 meter, maka tinggi elang dari atas tanah adalah ... meter.
</p>

<button class="divco blue mb-2 mt-3"><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
<p style="text-indent:1em;">
Setelah melakukan identifikasi dari permasalahan di atas kalian dapat  menemukan masalah yaitu: 
</p>
<p class="mb-0" style="font-weight: bold">Diketahui:</p>
<p class="mb-0" style="font-weight: bold">Ditanya:</p>
<p class="mb-0" style="font-weight: bold">Jawab:</p>

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

<button class="divco blue mb-2" href=""><span>DATA COLLECTION ( Pengumpulan Data)</span></button>
<p style="text-indent:1em;">
Untuk membuktikan hipotesis diatas, Kalian dapat mengumpulkan beberapa data dan informasi sebagai berikut:
</p>
<button class="button-85 mb-2" role="button">Pemanfaatan Trgonometri</button>
<p style="text-indent:1em;">
Perbandingan trigonometri ini dapat diterapkan dalam kehidupan sehari – hari 
untuk mencari tinggi maupun jarak. Asalkan permasalahan dapat dipandang sebagai permasalahan segitiga siku – siku.
</p>
<img src="../images/a.png" class="img-fluid w-75" alt="Responsive image">
<p>Manfaat trigonometri sangatlah luas dan diterapkan dalam berbagai bidang seperti fisika, teknik, astronomi, matematika, dan banyak lagi. Beberapa manfaat trigonometri antara lain:</p>

<ol class="list-group list-group-numbered">
<li class="list-group-item">
<b>Perhitungan jarak dan ukuran: </b>
<p>Trigonometri dapat digunakan untuk mengukur jarak, tinggi dan lebar benda yang tidak bisa diukur secara langsung, contohnya dalam astronomi trigonometri digunakan untuk mengukur jarak bintang.</p>
</li>
<li class="list-group-item"><b>Pemetaan:</b>
<p>Trigonometri digunakan untuk membuat peta dan model permukaan bumi yang akurat. Contohnya dalam geologi trigonometri digunakan untuk membuat peta dan model topografi.</p></li>
<li class="list-group-item"><b>Fisika:</b>
<p>Trigonometri adalah dasar dari banyak konsep fisika seperti gerak melingkar, getaran, gelombang dan lain – lain.</p></li>
<li class="list-group-item"><b>Teknik:</b>
<p>Trigonometri digunakan dalam berbagai bidang teknik seperti, arsitektur, teknik mesin dan teknik sipil. Contohnya, dalam teknik sipil, trigonometri digunakan untuk menghitung sudut kemiringan atap dan ketinggian bangunan. </p></li>
<li class="list-group-item"><b>Matematika:</b>
<p>Trigonometri adalah bagian penting dari matematika dan digunakan dalam banyak bidang matematika seperti aljabar, kalkulus dan geometri.</p></li>
</ol>

<p style="text-indent:1em;">
Dalam keseluruhan, manfaat trigonometri sangatlah luas dan penting dalam banyak bidang.
</p>
<p style="text-indent:1em;">
Jika dilihat pada gambar diatas membentuk sebuat segitiga siku siku dengan sudut 600. jika diketahui sisi miring segitiga yaitu 18m. Maka rumus perbandingan yang dapat digunakan yaitu:
</p>

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

<div class="mt-4 w-100 d-flex justify-content-center mb-2">
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#pert2" tabindex="-1">Materi 2</a</li>
    <li class="page-item active"><a class="page-link" href="#pert3">1</a></li>
    <li class="page-item"><a class="page-link" href="#next7">2</a></li>
    <li class="page-item"><a class="page-link" href="#next7">Next</a>
    </li>
  </ul>
</nav>
</div>
</div>`
}