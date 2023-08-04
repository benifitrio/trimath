function next6Page() {
    judul.innerHTML = `<span class="h6">Sudut Istimewa Perbandingan Trigonometri</span>`
    content.innerHTML = `
<div class="section_our_solution">
<button class="divco blue mb-2"><span>DATA PROCESSING (Pengolahan Data)</span></button>
<p style="text-indent:1em;">
Berdasarkan informasi yang didapat pada pengumpulan data maka, 
permasalahan dapat diselesaikan dengan langkah – langkah berikut:
</p>
<ol class="list-group list-group-numbered">
<li class="list-group-item">Langkah 1, Tentukanlah hasil perbandingan pada sudut 0<sup>O</sup> dan 90<sup>O</sup>!<br>
<div class="mb-3">
<div class="form-group">
<b>Jawab</b>
<textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
</div>
<button type="submit" class="btn btn-outline-primary">Submit</button>
</div>
</li>
<li class="list-group-item">Langkah 2, Tentukanlah hasil perbandingan pada sudut 45<sup>O</sup>!</li>
<div class="mb-3">
<div class="form-group">
<b>Jawab</b>
<textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
</div>
<button type="submit" class="btn btn-outline-primary">Submit</button>
</div>
<li class="list-group-item">Tentukan hasil perbandingan pada  sudut 30<sup>O</sup> dan 60<sup>O</sup>!</li>
<div class="mb-3">
<div class="form-group">
<b>Jawab</b>
<textarea class="form-control border border-warning" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
</div>
<button type="submit" class="btn btn-outline-primary">Submit</button>
</div>
</ol>
<button class="divco blue mb-2" href=""><span>VERIVICATION (Pembuktian)</span></button>
<p style="text-indent:1em;">
Berdasarkan hasil pengolahan data atau informasi yang telah kalian peroleh maka, buktikan hasil yang telah kalian peroleh:
</p>
<div class="table-responsive">
 <table class="table table-success table-striped">
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
      <td>0</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">Cosinus</th>
      <td>...</td>
      <td>...</td>
      <td><sup>1</sup>&frasl;<sub>2</sub>√2</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">Tangen</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td> ∞</td>
    </tr>
  </tbody>
</table>
 </div>
 <button id="klik" class="mt-3 btn btn-outline-primary">Klik buktikan jawaban kalian!</button>
</div>
<hr>
<div id="materi" class="materi">
<img src="../images/buktikan2.png" class="img-fluid w-100" alt="Responsive image"> 
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
 <a href="#pert2" type="button" class="btn btn-success">Sebelumnya</a>
 <a href="#next7" type="button" class="btn btn-success">Selanjutnya</a>
</div>`
    document.querySelector('#klik').addEventListener('click', (e) => {
        document.querySelector('#materi').classList.toggle('materi')
    })
}