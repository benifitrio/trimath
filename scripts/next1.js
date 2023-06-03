function next1Page() {
    judul.innerText = `Pertemuan 1: Pengertian Trigonometri`
    content.innerHTML = `
 <div class="section_our_solution">
 <button class="divco blue mb-2 mt-3" href=""><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
 <p>Setelah melakukan identifikasi, didapatkan jawaban sementara yaitu : </p>
 <form class="mb-5">
  <div class="form-group">
    <span  class="font-weight-bold">Jawab</span>
    <textarea class="form-control" rows="3" placeholder="tulis jawabanmu disini...."></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<button class="divco blue mb-2" href=""><span>DATA COLLECTION ( Pengumpulan Data)</span></button>
 <p>Untuk membuktikan hipotesis diatas, Kalian dapat mengumpulkan beberapa data dan informasi sebagai berikut :  </p>
 
 <div class="mt-4 w-100 d-flex justify-content-between">
 <a href="#pert1" type="button" class="btn btn-success ">Sebelumnya</a>
 <a href="#next2" type="button" class="btn btn-success">Selanjutnya</a>
 </div>
 </div>
 
`
}