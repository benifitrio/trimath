function pert2Page() {
    judul.innerHTML = `<span class="h6">Sudut Istimewa Perbandingan Trigonometri</span>`
    content.innerHTML = `
 <div class="section_our_solution">
 <img src="../images/trigonometri.png" class="img-fluid" alt="Responsive image">
 <p style="text-indent:1em;">Pada sub pertama, kalian telah menggunakan perbandingan trigonometri untuk mengukur tinggi objek yang besar tanpa harus mengukurnya secara langsung. pada bab kali ini kalian akan menentukan sudut istimewa dalam perbandingan trigonometri. Sudut istimewa dalam perbandingan trigonometri adalah sudut – sudut yang nilai perbandingannya dapat ditentukan secara eksak. Sudut istimewa adalah suatu sudut di mana nilai perbandingan trigonometrinya dapat ditentukan secara langsung tanpa menggunakan daftar trigonometri atau kalkulator.</p>
 <p style="text-indent:1em;">Pada saat mempelajari teori trigonometri, secara tidak langsung kamu harus menggunakan beberapa teori geometri. Dalam geometri, khususnya dalam kajian konstruksi sudah tidak asing dengan penggunaan besar sudut 30°, 45°, dan 60°. pada sub bab ini, kalian akan menyelidiki dan menghitung nilai perbandingan trigonometri untuk ukuran sudut (0°, 30°, 45°, 60° dan 90°,).	
 Coba pahami soal berikut!.</p>
 <button class="divco blue mb-2"><span>STIMULATION ( Pemberian Rangsangan)</span></button>
 <p style="text-indent:1em;">
 Kalian akan melengkapi tabel berikut dengan nilai perbandingan trigonometrinya.
 </p>
 <ul class="list-group list-group-numbered">
 <li class="list-group-item">Diketahui segitiga sama sisi  ABC, dengan besarnya masing-masing sudut adalah 60°. Pada ΔABC tersebut ditarik sebuah garis dari titik C menuju titik D yang tegak lurus dengan garis AB, sehingga membagi sudut ACB menjadi dua bagian yang besarnya sama yakni 30°. Misalkan panjang AD = BD = x, maka panjang AC = BC = 2x. Tentukanlah nilai perbandingan sinus, cosinus, tangen pada sudut 30°, dan 60°</li>
 <li class="list-group-item">Diketahui segitiga ABC dengan siku-siku berada di titik A. sudut B =  C = 45°. Jika panjang AB = AC = x. Tentukanlah nilai perbandingan sinus, cosinus, tangen pada sudut 45°</li>
 <li class="list-group-item">Diketahui segitiga ABC dengan siku-siku berada di titik A. sudut B = 0° dan sudut di C = 90°. dengan alas segitiga x, tinggi segitiga y dan sisi miring segitiga r. Untuk sudut sudut 0°, y = 0 dan x = r dan untuk sudut sudut 90°, y = r dan x = 0. Tentukanlah nilai perbandingan sinus, cosinus, tangen pada sudut 0° dan 90°</li>
</ul>

 <button class="divco blue mb-2 mt-3"><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
 <p style="text-indent:1em;">
 Setelah melakukan identifikasi, didapatkan jawaban sementara yaitu: 
 </p>
 <iframe
 id="JotFormIFrame-232170612128446"
 title="Jawab"
 onload="window.parent.scrollTo(0,0)"
 allowtransparency="true"
 allowfullscreen="true"
 allow="geolocation; microphone; camera"
 src="https://form.jotform.com/232170612128446"
 frameborder="0"
 style="min-width:100%;max-width:100%;height:539px;border:none;"
 scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232170612128446");
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
 <button class="button-85 mb-2" role="button">Kuadran</button>
 <p style="text-indent:1em;">
 Sebelum membahas mengenai sudut istimewa pada trigonometri dan nilainya, perhatikan pembagian daerah diagram kartesius. Pembagian diagram kartesius empat kuadran dapat mempermudah untuk menentukan nilai fungsi trigonometri.
  </p>
  <img src="../images/satc.png" class="img-fluid" alt="Responsive image">
 <ol class="list-group ">
  <li class="list-group-item"><b>Keterangan</b></li>
  <li class="list-group-item">Pada kuadran II yang bernilai positif hanya sin </li>
  <li class="list-group-item">Pada kuadran III, yang bernilai postif hanya tan </li>
  <li class="list-group-item">Sedangkan pada kuadran IV, fungsi trigonometri yang bernilai positif hanya cos</li>
</ol>

<button class="button-85 mb-2" role="button">Sudut Istimewa</button>
<p style="text-indent:1em;">Untuk lebih mudah memahami cara mencari nilai perbandingan trigonmetri pada sudut istimewa (0°, 30°, 45°, 60° dan 90°,) terlebih dahulu harus paham dengan perbandingan trigonometri pada segitiga siku-siku khususnya definisi sinus, cosinus dan tangen suatu sudut. Selain itu Anda juga harus paham dengan teorema pythagoras.</p>
<ol class="list-group list-group-numbered">
  <li class="list-group-item">
  <b>Mencari nilai perbandingan pada  sudut 30° dan 60</b>
  <p>Langkah 1. perhatikan gambar dibawah ini</p> 
  <img src="../images/s1.png" class="img-fluid" alt="Responsive image">
  <p style="text-indent:1em;">Gambar di atas merupakan gambar segitiga sama sisi dengan besarnya masing-masing sudut adalah 60°. Pada ΔABC tersebut ditarik sebuah garis dari titik C menuju titik D yang tegak lurus dengan garis AB, sehingga membagi sudut ACB menjadi dua bagian yang besarnya sama yakni 30°. Misalkan panjang AD = BD = x, maka panjang AC = BC = 2x.</p>
  <p style="text-indent:1em;">Pada gambar di atas panjang CD belum diketahui, berapakah panjang CD Dengan menggunakan rumus teorema pythagoras  </p>
  <iframe
id="JotFormIFrame-232170612128446"
title="Jawab"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/232170612128446"
frameborder="0"
style="min-width:100%;max-width:100%;height:539px;border:none;"
scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232170612128446");
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
<p style="text-indent:1em;">Langkah 2 setelah didapatkan hasil pada panjang CD kalian dapat mencari nilai pada sudut 30°, dan 60° dengan menggunakan rumus perbandingan trigonometri sinus cosinus dan tangen</p>
  </li>
  <li class="list-group-item">
  <b>Mencari nilai perbandingan pada sudut 45° </b>
  <p style="text-indent:1em;">Langkah 1. perhatikan gambar dibawah ini</p>
  <img src="../images/s2.png" class="img-fluid" alt="Responsive image">
  <p style="text-indent:1em;">Perhatikan segitiga ABC di atas dengan siku-siku berada di titik A. sudut B =  C = 45°. Jika panjang AB = AC = x </p>
  <p style="text-indent:1em;">Pada gambar di atas panjang BC belum diketahui, berapakah panjang BC Dengan menggunakan rumus teorema Pythagoras</p>
  <iframe
id="JotFormIFrame-232170612128446"
title="Jawab"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/232170612128446"
frameborder="0"
style="min-width:100%;max-width:100%;height:539px;border:none;"
scrolling="yes"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-232170612128446");
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
<p style="text-indent:1em;">Langkah 2 setelah didapatkan hasil pada panjang BC kalian dapat mencari nilai pada sudut 45° dengan menggunakan rumus perbandingan pada sinus cosinus dan tangen</p>
  </li>
  <li class="list-group-item">
  <b>Mencari nilai perbandingan pada sudut 0° dan 90°</b>
  <p style="text-indent:1em;">Langkah 1. perhatikan gambar dibawah ini</p>
  <img src="../images/s3.png" class="img-fluid" alt="Responsive image">
  <p style="text-indent:1em;">Perhatikan segitiga ABC di atas dengan siku-siku berada di titik A. sudut B = 0° dan sudut di C = 90°. dengan alas segitiga x, tinggi segitiga y dan sisi miring segitiga r.</p>
  <p style="text-indent:1em;">Langkah 2. kalian dapat mencari nilai sudut 0°, dan 90° dengan sudut 0° yaitu y = 0 dan x = r , Untuk sudut sudut 90°, y = r dan x = 0 dengan menggunakan rumus perbandingan pada sinus cosinus dan tangen.</p> 
  </li>
</ol>

 <div class="mt-4 w-100 d-flex justify-content-between mb-2">
 <a href="#pert1" type="button" class="btn btn-success">Kemateri 1</a>
 <a href="#next6" type="button" class="btn btn-success">Selanjutnya</a>
 </div>
 `
}