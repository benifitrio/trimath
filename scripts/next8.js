function next8Page() {
    judul.innerHTML = `<span class="h6">Pemanfaatan Perbandingan Trigonometri</span>`
    content.innerHTML = `
    <button class="divco blue mb-2"><span>DATA PROCESSING (Pengolahan Data)</span></button>
    <p style="text-indent:1em;">
    Berdasarkan informasi yang didapat pada pengumpulan data maka, 
    permasalahan dapat diselesaikan dengan langkah – langkah berikut:
    </p>
    <ul>
    <li>Langkah 1, Perbandingan trigonometri yang digunakakan yaitu?</li>
    <div class="mb-3">
    <div class="form-group">
    <b>Jawab</b>
    <textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
    </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
    </div>
    <li>Langkah 2, Tentukanlah Tinggi piramida dengan menggunakan perbandingan trigonometri!</li>
    <div class="mb-3">
    <div class="form-group">
    <b>Jawab</b>
    <textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
    </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
    </div>
    </ul>
    <button class="divco blue mb-2" href=""><span>VERIVICATION (Pembuktian)</span></button>
    <p style="text-indent:1em;">
    Berdasarkan hasil pengolahan data atau informasi yang telah kalian peroleh maka, buktikan hasil yang telah kalian peroleh:
    </p>
    <div class="mb-3">
    <div class="form-group">
    <b>Jawab</b>
    <textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
    </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
    </div>
    <button id="klik" class="mt-3 btn btn-outline-primary">Klik buktikan jawaban kalian!</button>
    <hr>
    <div id="materi" class="materi">
    <p style="text-indent:1em;">
    Perbandingan trigonometri sinus (biasa disingkat sin) adalah nilai perbandingan antara sisi depan dan sisi miring sudut θ segitiga siku - siku. <br>
    sin θ = <sup>sisi depan</sup>&frasl;<sub>sisi miring</sub>. Dalam permasalahan piramida, perbandingan trigonometri sin dapat membantu kita mencari tinggi piramida. <br> 
    sin θ = 30° <br>
    sin 30° = <sup>tinggi piramida (depan)</sup>&frasl;<sub>rusuk piramida (miring)</sub> <br>
    <sup>1</sup>&frasl;<sub>2</sub> = <sup>x (m)</sup>&frasl;<sub>60 m</sub>
    </p>
    </div>




    <ol>
    <li>sin 30<sup>O</sup> + cos  45<sup>O</sup> = <sup>1</sup>&frasl;<sub>2</sub> + <sup>1</sup>&frasl;<sub>2</sub>√2 = <sup> (1 + √2
     </sup>&frasl;<sub>2</sub></li>
<li>sin 45<sup>O</sup> tan 60<sup>O</sup> + cos 45<sup>O</sup> cot 60<sup>O</sup> = <sup>1</sup>&frasl;<sub>2</sub>√2 . √3 + <sup>1</sup>&frasl;<sub>2</sub>√2 . <sup>1</sup>&frasl;<sub>3</sub>√3 = <sup>1</sup>&frasl;<sub>2</sub>√6 + <sup>1</sup>&frasl;<sub>6</sub>√6 = <sup>2</sup>&frasl;<sub>3</sub>√6</li>
</ol>
<p style="text-indent:1em;" class="mb-0">
Untuk lebih memahami materi. Simaklah video di bawah ini.
</p>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/W-eaQQl938c" title="YouTube video" allowfullscreen></iframe>
</div>
<div class="d-grid">
<button style="background-image: linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%); color: #fff; font-size : 1.3em:" class="fw-bold btn mt-2 h4">Penilaian Diri</button>
</div>
<div>
<ol class="list-group list-group-numbered bg-white">
<li class="list-group-item d-flex justify-content-between align-items-start">
 <div class="ms-2 me-auto">
   <div class="fw-bold">Apakah kalian dapat memahami setiap sisi sebuah segitiga siku – siku dan menentukan panjang sisi menggunakan teorema phytagoras?</div>
   <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="cek1" value="option1">
<label class="form-check-label" for="cek1">Ya</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="cek2" value="option2">
<label class="form-check-label" for="cek2">Tidak</label>
</div>
 </div>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
 <div class="ms-2 me-auto">
   <div class="fw-bold">Apakah kalian dapat memahami konsep nilai perbandingan trigonometri pada sinus, cosinus dan tangen?</div>
   <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="a" id="cek3" value="option1">
<label class="form-check-label" for="cek3">Ya</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="a" id="cek4" value="option2">
<label class="form-check-label" for="cek4">Tidak</label>
</div>
 </div>
</li>
<div class="p-2 text-muted">
<b>Catatan:</b><br>
Jika jawaban “ Tidak” > 6 maka segera lakukan review pembelajaran <br>
Jika jawaban “ YA” >6 maka dapat melanjutkan kegiatan pembelajaran 
</div>
</ol>
</div>

<div class="mt-4 w-100 d-flex justify-content-between mb-2">
<a href="#next7" type="button" class="btn btn-success">Sebelumnya</a>
<a href="#pert9" type="button" class="btn btn-success">Selanjutnya</a>
</div>`

    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}