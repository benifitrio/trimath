function next1Page() {
    judul.innerHTML = `<span class="h6">Perbandingan Trigonometri</span>`
    content.innerHTML = `
 <div class="section_our_solution justifytext">
 <button class="divco blue mb-2 mt-3" href=""><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
 <p class="mb-0">Setelah melakukan identifikasi dari permasalahan di atas kalian dapat  menemukan masalah yaitu: </p>
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
 <p style="text-indent:1em;">Untuk membuktikan hipotesis di atas. Kalian dapat mengumpulkan beberapa data dan informasi sebagai berikut:</p>
 <button class="button-85 mb-2" role="button">Perbandingan Trigonometri</button>
 <p style="text-indent:1em; text-align: justify">Pada tahap Stimulation (pemberian rangsangan) soal yang ditanyakan menggambarkan konsep kesebangunan pada segitiga. Kita gambarkan perumpamaan kesebangunan pada segitiga seperti gambar dibawah ini.</p>
 <img src="../images/se1.png" class="img-fluid" alt="Responsive image">
 <p style="text-indent:1em;">Pada gambar diatas diketahui:</p>
 <ul class="list-group ">
   <li class="list-group-item">AB yaitu perumpaamaan tinggi tiang bendera  = ............................</li>
   <li class="list-group-item">BC yaitu perumpaamaan panjang bayangan tiang =  .....................</li>
   <li class="list-group-item">DE yaitu perumpaamaan tinggi pak yahya  = ..................................</li>
   <li class="list-group-item">EC yaitu perumpaamaan panjang bayangan pak yahya = ............</li>
   <li class="list-group-item">FG yaitu perumpaamaan tinggi dani = 
    ..........................................</li>
 </ul>
 <p style="text-indent:1em; text-align:justify">Berdasarkan gambar segitiga diatas terdapat tiga segitiga yaitu ∆ABC,∆DEC,dan ∆FGC. sebaga berikut</p>
 <img src="../images/se2.png" class="img-fluid" alt="Responsive image">
 <p style="text-indent:1em;">Pada segitiga ∆ABC gambarkan dan tentukan semua sisinya! gunakan rumus phytagoras untuk sisi yang belum diketahui.</p>
 <p style="text-indent:1em;">Pada segitiga ∆DEC, gambarkan dan tentukan semua sisinya! gunakan rumus phytagoras untuk sisi yang belum diketahui.</p>
 <p style="text-align:justify;text-indent:1em;">Pada segitiga ∆FGC gambarkan dan tentukan semua sisinya!. Gunakan rumus kesebangunan antara ∆FGC dengan ∆DEC serta rumus phytagoras untuk sisi yang belum diketahui!</p>
 <img src="../images/seg.png" class="img-fluid" alt="Responsive image">
 
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

 <p style="text-indent:1em; text-align:justify">Setelah kalian mengerjakan konsep kesebangunan dari perumpamaan segitiga di atas, untuk lebih memaami bacalah materi singkat di bawah ini!</p>

<button class="button-85 mb-2" role="button">Konsep Dasar Trigonometri</button>
<p style="text-indent:1em; text-align:justify">Trigonometri adalah studi pola bermakna mengenai hubungan antara sudut dan sisi segitiga. Trigonometri berasal dari Bahasa Yunani trigono, tiga sudut, dan metro artinya mengukur</p>
<img src="../images/animasi.png" class="img-fluid" alt="Responsive image"> 
<p style="text-indent:1em;">Perhatikan segitiga siku–siku dibawah ini!</p>
<div class="d-flex flex-row flex-wrap">
<img src="../images/se.png" class="img-fluid" alt="Responsive image">
<ul class="list-group mb-2">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Keterangan
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="badge bg-primary rounded-pill">1</span> Mempunyai panjang b pada sisi alasnya
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="badge bg-primary rounded-pill">2</span> 
  &nbsp; &nbsp;Mempunyai panjang a pada sisi tingginya
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="badge bg-primary rounded-pill">3</span> 
  &nbsp; &nbsp;Mempunyai panjang c pada sisi miringnya
  </li>
</ul>
</div>

<p style="text-indent:1em;">Ketiga sisi segitiga memiliki nama tersendiri:</p>
<ul class="list-group ">
  <li class="list-group-item"><i>Adjacent</i>  <b>:</b> Alas segitiga</li>
  <li class="list-group-item"><i>Opposite</i> <b>:</b> Tinggi segitiga</li>
  <li class="list-group-item"><i>Hypotenuse</i> <b>:</b> Sisi miring segitiga</li>
</ul>
<p style="text-indent:1em; text-align:justify">Sehingga hubungan sisi dan sudut pada segitiga yaitu jika digunakan sisi a serta c, kedua sisi tersebut memiliki relasi terhadap sudut – sudut yang dibentuk oleh keduanya yaitu sudut  β dan α pada segitiga siku siku berlaku rumus phytagoras yaitu: <br> <img src="../images/phyta.png" class="img-fluid w-25" alt="Responsive image">


 <div class="mt-4 w-100 d-flex justify-content-center mb-2">
 <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#pert1" tabindex="-1">Previous</a</li>
    <li class="page-item"><a class="page-link" href="#pert1">1</a></li>
    <li class="page-item active"><a class="page-link" href="#next1">2</a></li>
    <li class="page-item"><a class="page-link" href="#next2">3</a></li>
    <li class="page-item"><a class="page-link" href="#next3">4</a></li>
    <li class="page-item"><a class="page-link" href="#next4">5</a></li>
    <li class="page-item"><a class="page-link" href="#next2">Next</a>
    </li>
  </ul>
</nav>
 </div>
 </div>`

}