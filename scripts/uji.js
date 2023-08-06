function ujiPage() {
    judul.innerHTML = `<span class="h6">Uji Kompetensi</span>`
    content.innerHTML =
        `<div class="section_our_solution">
            
    <iframe
    id="JotFormIFrame-232169082282456"
    title="Uji Kompetensi"
    onload="window.parent.scrollTo(0,0)"
    allowtransparency="true"
    allowfullscreen="true"
    allow="geolocation; microphone; camera"
    src="https://form.jotform.com/232169082282456"
    frameborder="0"
    style="min-width:100%;max-width:100%;height:100vh;border:none;"
    scrolling="yes"
  >
  </iframe>
  <script type="text/javascript">
  var ifr = document.getElementById("JotFormIFrame-232169082282456");
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
</div>`

}
// function ujiPage() {
//     judul.innerHTML = `<span class="h6">Uji Kompetensi</span>`
//     content.innerHTML =
//         `<div class="section_our_solution">
//             <div id="quiz">
//                 <div class="question">
//                     <div class="soal">
//                         <p>Soal untuk no 1-3</p>
//                         <p>Perhatikan gambar di bawah ini!</p>
//                         <img src="../images/soal1.png" class="img-fluid w-50" alt="Responsive image"> 
//                         <p>1. Sisi berwarna merah adalah sisi?</p>
//                     </div>
//                 <div class="options list-group">
//                     <label class="list-group-item"><input type="radio" name="q1" value="a" >  Depan</label>
//                     <label class="list-group-item"><input type="radio" name="q1" value="b" > Samping</label>
//                     <label class="list-group-item"><input type="radio" name="q1" value="c" "> Miring</label>
//                     <label class="list-group-item"><input type="radio" name="q1" value="d" > Atas</label>
//                 </div>
//             </div>
//         <div class="question">
//             <p>2. Sisi berwarna Hijau adalah sisi?</p>
//             <div class="options list-group">
//                 <label class="list-group-item"><input type="radio" name="q2" value="a" > Miring</label>
//                 <label class="list-group-item"><input type="radio" name="q2" value="b" > Samping</label>
//                 <label class="list-group-item"><input type="radio" name="q2" value="c" > Atas</label>
//                 <label class="list-group-item"><input type="radio" name="q2" value="d" > Depan</label>
//             </div>
//         </div>
//         <div class="question">
//         <p>3. Sisi berwarna biru adalah sisi?</p>
//         <div class="options list-group">
//             <label class="list-group-item"><input type="radio" name="q3" value="a" > Atas</label>
//             <label class="list-group-item"><input type="radio" name="q3" value="b" > Miring</label>
//             <label class="list-group-item"><input type="radio" name="q3" value="c" >Depan </label>
//             <label class="list-group-item"><input type="radio" name="q3" value="d" > Samping</label>
//         </div>
//     </div>
//     <div class="question">
//     <div class="soal">
//         <p>Soal untuk no 4-6</p>
//         <p>Perhatikan gambar di bawah ini!</p>
//         <img src="../images/soal2.png" class="img-fluid w-50" alt="Responsive image"> 
//         <p>4. Sisi berwarna merah adalah sisi?</p>
//     </div>
// <div class="options list-group">
//     <label class="list-group-item"><input type="radio" name="q4" value="a" >  Depan</label>
//     <label class="list-group-item"><input type="radio" name="q4" value="b" > Samping</label>
//     <label class="list-group-item"><input type="radio" name="q4" value="c" "> Miring</label>
//     <label class="list-group-item"><input type="radio" name="q4" value="d" > Atas</label>
// </div>
// </div>
// <div class="question">
// <p>5. Sisi berwarna Hijau adalah sisi?</p>
// <div class="options list-group">
//     <label class="list-group-item"><input type="radio" name="q5" value="a" > Miring</label>
//     <label class="list-group-item"><input type="radio" name="q5" value="b" > Samping</label>
//     <label class="list-group-item"><input type="radio" name="q5" value="c" > Atas</label>
//     <label class="list-group-item"><input type="radio" name="q5" value="d" > Depan</label>
// </div>
// </div>
// <div class="question">
// <p>6. Sisi berwarna biru adalah sisi?</p>
// <div class="options list-group">
// <label class="list-group-item"><input type="radio" name="q6" value="a" > Atas</label>
// <label class="list-group-item"><input type="radio" name="q6" value="b" > Miring</label>
// <label class="list-group-item"><input type="radio" name="q6" value="c" >Depan </label>
// <label class="list-group-item"><input type="radio" name="q6" value="d" > Samping</label>
// </div>
// </div>
// <div class="question">
// <p>7. Perhatikan gambar di bawah ini!</p>
// <img src="../images/soal3.png" class="img-fluid w-50" alt="Responsive image">
// <p>Diketahui segitiga ABC siku-siku di C dengan panjang sisi a = √5 dan panjang sisi  b = 2. Jika &ang;BAC = &alpha;, tentukanlah nilai perbandingan trigonometri untuk sudut &alpha;?</p> 
// <div class="options list-group">
// <label class="list-group-item"><input type="radio" name="q7" value="a" > sin &alpha; = <sup>1</sup>&frasl;<sub>3</sub>,  cos &alpha; = <sup>2</sup>&frasl;<sub>3</sub> √5, dan tan &alpha; = <sup>1</sup>&frasl;<sub>2</sub> √5</label>
// <label class="list-group-item"><input type="radio" name="q7" value="b" > sin &alpha; = <sup>1</sup>&frasl;<sub>3</sub> √5,  cos &alpha; = <sup>2</sup>&frasl;<sub>3</sub>, dan tan &alpha; = <sup>1</sup>&frasl;<sub>2</sub></label>
// <label class="list-group-item"><input type="radio" name="q7" value="c" > sin &alpha; = <sup>1</sup>&frasl;<sub>3</sub> √5,  cos &alpha; = <sup>2</sup>&frasl;<sub>3</sub>, dan tan &alpha; = <sup>1</sup>&frasl;<sub>2</sub> √5</label>
// <label class="list-group-item"><input type="radio" name="q7" value="d" > sin &alpha; = <sup>1</sup>&frasl;<sub>2</sub> √5,  cos &alpha; = <sup>1</sup>&frasl;<sub>3</sub>, dan tan &alpha; = <sup>1</sup>&frasl;<sub>2</sub></label>
// </div>
// </div>
// <div class="question">
// <p>8. Hasil dari sin 30<sup>o</sup>+cos 60<sup>o</sup> adalah ?</p>
// <div class="options list-group">
// <label class="list-group-item"><input type="radio" name="q8" value="a" > <sup>1</sup>&frasl;<sub>3</sub></label>
// <label class="list-group-item"><input type="radio" name="q8" value="b" > <sup>1</sup>&frasl;<sub>2</sub></label>
// <label class="list-group-item"><input type="radio" name="q8" value="c" > 0</label>
// <label class="list-group-item"><input type="radio" name="q8" value="d" > 1</label>
// </div>
// </div>
// <div class="question">
// <p>9. Sudut depresi adalah ?</p>
// <div class="options list-group">
// <label class="list-group-item"><input type="radio" name="q9" value="a" > Sudut yang dibentuk oleh arah horizontal dengan arah pandangan mata pengamat ke arah bawah.</label>
// <label class="list-group-item"><input type="radio" name="q9" value="b" > Sudut yang dibentuk oleh arah vertikal dengan arah pandangan mata pengamat ke arah bawah.</label>
// <label class="list-group-item"><input type="radio" name="q9" value="c" > Sudut yang dibentuk oleh arah horizontal dengan arah pandangan mata pengamat ke arah atas.</label>
// <label class="list-group-item"><input type="radio" name="q9" value="d" > Sudut yang dibentuk oleh arah vertikal dengan arah pandangan mata pengamat ke arah atas.</label>
// </div>
// </div>
// <div class="question">
// <p>10. Seorang anak memandang sebuah pohon dengan sudut 60<sup>o</sup>. Apabila jarak anak tersebut 60 meter dari pohon, tentukan tinggi pohon tersebut?</p>
// <div class="options list-group">
// <label class="list-group-item"><input type="radio" name="q10" value="a" > √2</label>
// <label class="list-group-item"><input type="radio" name="q10" value="b" > 60√3</label>
// <label class="list-group-item"><input type="radio" name="q10" value="c" > √3</label>
// <label class="list-group-item"><input type="radio" name="q10" value="d" > 30</label>
// </div>
// </div>
//         <!-- Tambahkan pertanyaan lain di sini -->

//         <button id="selesai" class="btn btn-primary mt-2" onclick="submitQuiz()">Submit</button>
//     </div>

//     <div id="result" class="result"></div>

//     <div id="restart" style="display: none;">
//         <button id="restart" class="btn btn-success" onclick="restartQuiz()">Ulangi Soal</button>
//     </div>
// </div>`
//         // Menambahkan event listener pada elemen "quiz" (elemen induk)
//     document.getElementById('quiz').addEventListener('click', function(event) {
//         // Mengecek apakah elemen yang diklik adalah elemen input radio
//         if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
//             // Mengambil elemen label terkait dengan input radio yang diklik
//             var label = event.target.parentNode;
//             console.log(event.target.tagName)
//                 // Menghapus kelas "selected" dari semua elemen label pada pertanyaan yang sama
//             var question = label.parentNode.parentNode;
//             var labels = question.getElementsByClassName('list-group-item');
//             for (var i = 0; i < labels.length; i++) {
//                 labels[i].classList.remove('selected');
//             }

//             // Menambahkan kelas "selected" pada elemen label yang diklik
//             label.classList.add('selected');
//         }
//     });

//     function submitQuiz() {
//         const answers = ['c', 'd', 'd', 'c', 'b', 'c', 'c', 'd', 'a', 'b']; // Jawaban yang benar untuk setiap pertanyaan (sesuaikan dengan pertanyaan yang ada)

//         const quizContainer = document.getElementById('quiz');
//         const resultContainer = document.getElementById('result');
//         const restartContainer = document.getElementById('restart');

//         let score = 0;
//         // Memeriksa jawaban
//         const questions = quizContainer.getElementsByClassName('question');
//         for (let i = 0; i < questions.length; i++) {
//             const question = questions[i];
//             const selectedOption = question.querySelector('input[name="q' + (i + 1) + '"]:checked');

//             if (selectedOption && selectedOption.value === answers[i]) {
//                 score++;
//                 selectedOption.parentNode.classList.add('correct');
//             } else if (selectedOption) {
//                 selectedOption.parentNode.classList.add('incorrect');
//             }
//         }

//         // Menampilkan hasil
//         resultContainer.innerHTML = 'Skor Anda: ' + score + ' dari ' + questions.length;
//         // Menyembunyikan kuis dan menampilkan tombol ulangi
//         quizContainer.style.display = 'none';
//         restartContainer.style.display = 'block';
//     }

//     function restartQuiz() {
//         const quizContainer = document.getElementById('quiz');
//         const resultContainer = document.getElementById('result');
//         const restartContainer = document.getElementById('restart');

//         // Menghapus skor dan menampilkan kembali kuis
//         resultContainer.innerHTML = '';
//         quizContainer.style.display = 'block';
//         restartContainer.style.display = 'none';

//         // Mengatur ulang pilihan jawaban dan warna latar
//         const options = quizContainer.querySelectorAll('input[type="radio"]');
//         options.forEach(option => {
//             option.checked = false;
//             option.parentNode.classList.remove('correct', 'incorrect', 'selected');
//         });
//     }
//     document.getElementById('selesai').addEventListener('click', submitQuiz);
//     document.getElementById('restart').addEventListener('click', restartQuiz);
// }
// resultContainer.innerHTML = '';
// quizContainer.style.display = 'block';
// restartContainer.style.display = 'none';

// // Mengatur ulang pilihan jawaban dan warna latar
// const options = quizContainer.querySelectorAll('input[type="radio"]');
// options.forEach(option => {
//     option.checked = false;
//     option.parentNode.classList.remove('correct', 'incorrect', 'selected');
// });

// document.getElementById('selesai').addEventListener('click', submitQuiz);
// document.getElementById('restart').addEventListener('click', restartQuiz);