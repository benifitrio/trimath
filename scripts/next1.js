function next1Page() {
    judul.innerText = `Pertemuan 1: Pengertian Trigonometri`
    content.innerHTML = `
 <div class="section_our_solution">
 <button class="divco blue mb-2" href=""><span>PROBLEM STATEMENT ( Identifikasi Masalah)</span></button>
 <p>Setelah melakukan identifikasi, didapatkan jawaban sementara yaitu : </p>
 <form class="mb-2">
  <div class="form-group">
    <label for="exampleFormControlTextarea1 " class="font-weight-bold">Jawab</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
 <div class="w-100 d-flex justify-content-between">
 <a href="#pert1" type="button" class="btn btn-success ">Sebelumnya</a>
 <a href="#next2" type="button" class="btn btn-success">Selanjutnya</a>
 </div>
 </div>
 
`
}