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
    <sup>1</sup>&frasl;<sub>2</sub> = <sup>x (m)</sup>&frasl;<sub>60 m</sub> <br>
    x (m) = <sup>1</sup>&frasl;<sub>2</sub> x 600m = 300m. Jadi, tinggi piramida adalah 300 meter.
    </p>
    </div>
    <button class="divco blue mb-2" href=""><span>GENERALIZATION (Menarik Kesimpulan)</span></button>
    <p style="text-indent:1em;" class="mb-0">Dari permasalahan di atas, dapat disimpulkan bahwa:</p>
    <div class="mb-3">
    <div class="form-group">
    <b>Jawab</b>
    <textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
    </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
    </div>


   <div class="mt-4 w-100 d-flex justify-content-between mb-2">
   <a href="#next7" type="button" class="btn btn-success">Sebelumnya</a>
   <a href="#next9" type="button" class="btn btn-success">Selanjutnya</a>
   </div>`

    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}