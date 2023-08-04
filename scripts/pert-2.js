function pert2Page() {
    judul.innerHTML = `<span class="h6">Sudut Istimewa Perbandingan Trigonometri</span>`
    content.innerHTML = `
 <div class="section_our_solution">
 <img src="../images/trigonometri.png" class="img-fluid" alt="Responsive image">
 <p style="text-indent:1em;">Pada sub pertama, kalian telah menggunakan perbandingan trigonometri untuk mengukur tinggi objek yang besar tanpa harus mengukurnya secara langsung. pada bab kali ini kalian akan menentukan sudut istimewa dalam perbandingan trigonometri. Sudut istimewa dalam perbandingan trigonometri adalah sudut – sudut yang nilai perbandingannya dapat ditentukan secara eksak. Sudut istimewa akan sangat berguna dan banyak digunakan pada pembelajaran fisika. Sudut istimewa terhubung dengan beberapa kuadran.</p>
 <button class="divco blue mb-2"><span>STIMULATION ( Pemberian Rangsangan)</span></button>
 <p style="text-indent:1em;">
 Kalian akan melengkapi tabel berikut dengan nilai perbandingan trigonometrinya.
 </p>
 <div class="table-responsive">
 <table class="table table-success table-striped">
 <caption>Ket: ∞ tak terdefinisi</caption>
 <thead>
    <tr>
      <th scope="col" rowspan="2" style="text-align: center; vertical-align :middle">Fungsi Trigonometri</th>
      <th scope="col" colspan="5" style="text-align: center ">Sudut</th>
    </tr>
    <tr>
      <th scope="col">0</th>
      <th scope="col">30</th>
      <th scope="col">45</th>
      <th scope="col">60</th>
      <th scope="col">90</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sinus</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">Cosinus</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">Tangen</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
 </div>
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
 <p>
 Untuk mencari nilai perbandingan pada  sudut 0<sup>O</sup>  dan 90<sup>O</sup>. 
 </p>
 <ol class="list-group list-group-numbered">
  <li class="list-group-item">Gambar lingkaran dengan segitiga siku – siku. Beri variabel A,O,P pada setiap titik dengan masing – masing sisi yaitu x, y dan r. Seperti gambar di bawah ini. <br>
  <div class="w-100 d-flex justify-content-center ">
  <img src="../images/lingkaran.png" class="img-fluid" alt="Responsive image">
  </div>
  </li>
  <li class="list-group-item">	Untuk sudut θ = 0<sup>O</sup> maka : y = 0 dan x = r </li>
  <li class="list-group-item">Untuk sudut θ = 90<sup>O</sup> maka : y = r dan x = 0  </li>
  <li class="list-group-item">Untuk mencari hasil dari sudutnya gunakan nilai perbandingan pada sinus, cosinus, dan tangen </li>
</ol>
<p>
 Untuk mencari nilai perbandingan pada  sudut 45<sup>O</sup>. 
 </p>
 <ol class="list-group list-group-numbered">
 <li class="list-group-item">	Gambar segitiga ABC siku – siku sama kaki, ∠A = ∠A = 45<sup>O</sup> dengan masing – masing sisi yaitu AC = AB = 1 dan AB = √2.  Seperti gambar di bawah ini.<br>
 <div class="w-100 d-flex justify-content-center ">
  <img src="../images/segitiga3.png" class="img-fluid" alt="Responsive image">
  </div>
 </li>
 <li class="list-group-item">Untuk mencari hasil dari sudutnya gunakan nilai perbandingan pada sinus, cosinus, dan tangen. </li>
</ol>
<p>
 Untuk mencari nilai perbandingan pada  sudut 30<sup>O</sup> dan 60<sup>O</sup>. 
 </p>
 <ol class="list-group list-group-numbered">
 <li class="list-group-item">	Gambar segitiga ABC siku – siku di C, ∠B =  60<sup>O</sup>, ∠A = 30<sup>O</sup>. Dengan masing – masing sisi yaitu AB = 2, BC = 1, dan AC = √3.   Seperti gambar di bawah ini.<br>
 <div class="w-100 d-flex justify-content-center ">
 <img src="../images/segitiga4.png" class="img-fluid" alt="Responsive image">
 </div>
 </li>
 <li class="list-group-item">Untuk mencari hasil dari sudutnya gunakan nilai perbandingan pada sinus, cosinus, dan tangen. </li>
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
 <a href="#pert1" type="button" class="btn btn-success">Kemateri 1</a>
 <a href="#next6" type="button" class="btn btn-success">Selanjutnya</a>
 </div>`
}