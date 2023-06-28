function next4Page() {
    judul.innerHTML = `<span class="h6">Pertemuan 1: Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution">
<button class="divco blue mb-2" href=""><span>VERIVICATION (Pembuktian)</span></button>
<p style="text-indent:1em;" class="mb-0">Berdasarkan hasil pengolahan data atau informasi yang telah kalian peroleh maka, buktikan hasil yang telah kalian peroleh:</p>
<div class="mb-3">
<div class="form-group">
  <b>Jawab</b>
  <textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>

<button type="submit" class="btn btn-outline-primary">Submit</button>  <br>

<button id="klik" class="mt-3 btn btn-outline-primary">Klik buktikan!</button>
</div>
<hr>
<div id="materi" class="materi">
<div class="d-flex justify-content-around">
<div>
Rumus Phytagoras: <br>
<p> AC<sup>2</sup> = BC<sup>2</sup> + AB<sup>2</sup></p>
<p>5<sup>2</sup> = BC<sup>2</sup> + 3<sup>2</sup></p>
<p>25 - 9 = BC<sup>2</sup></p>
<p>BC = 4m</p>
</div>
<div>
<p>Nilai perbandingan pada sudut θ</p>
<div class="h6">
<p>sin θ = <sup>de</sup>&frasl;<sub>mi</sub> = <sup>4</sup>&frasl;<sub>5</sub> </p>
<p>cos θ = <sup>sa</sup>&frasl;<sub>mi</sub> = <sup>3</sup>&frasl;<sub>5</sub> </p>
<p>tan θ = <sup>de</sup>&frasl;<sub>sa</sub> = <sup>4</sup>&frasl;<sub>3</sub> </p>
</div>
</div>

</div>

<img src="../siku-siku.png" class="img-fluid w-50" alt="Responsive image"> 
</div>
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
<a href="#next3" type="button" class="btn btn-success ">Sebelumnya</a>
<a href="#next5" type="button" class="btn btn-success">Selanjutnya</a>
</div>
</div>
</div>`

    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}