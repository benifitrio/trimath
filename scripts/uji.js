function ujiPage() {
    judul.innerHTML = `<span class="h6">Uji Kompetensi</span>`
    content.innerHTML = `
<div class="section_our_solution">
<div id="quiz">
<div class="question">
    <p>1. Berapakah hasil dari 2 + 2?</p>
    <div class="options list-group">
        <label class="list-group-item"><input type="radio" name="q1" value="a">a) 1</label>
        <label class="list-group-item"><input type="radio" name="q1" value="b">b) 3</label>
        <label class="list-group-item"><input type="radio" name="q1" value="c">c) 4</label>
        <label class="list-group-item"><input type="radio" name="q1" value="d">d) 5</label>
    </div>
</div>
<div class="question">
    <p>2. Berapakah hasil dari 5 x 6?</p>
    <div class="options list-group">
        <label class="list-group-item"><input type="radio" name="q2" value="a">a) 10</label>
        <label class="list-group-item"><input type="radio" name="q2" value="b">b) 20</label>
        <label class="list-group-item"><input type="radio" name="q2" value="c">c) 30</label>
        <label class="list-group-item"><input type="radio" name="q2" value="d">d) 35</label>
    </div>
</div>
<!-- Tambahkan pertanyaan lain di sini -->

<button id="selesai" class="btn btn-primary">Submit</button>
</div>

<div id="result" class="result "></div>

<div id="restart" style="display: none;">
<button id="restart" class="btn btn-success">Ulangi Soal</button>
</div>
<div class="mt-4 w-100 d-flex justify-content-between mb-2">
<a href="#pert1" type="button" class="btn btn-success ">Sebelumnya</a>
<a href="#next2" type="button" class="btn btn-success">Selanjutnya</a>
</div>
</div>

`

    function submitQuiz() {
        const answers = ['c', 'c']; // Jawaban yang benar untuk setiap pertanyaan (sesuaikan dengan pertanyaan yang ada)

        const quizContainer = document.getElementById('quiz');
        const resultContainer = document.getElementById('result');
        const restartContainer = document.getElementById('restart');

        let score = 0;

        // Memeriksa jawaban
        const questions = quizContainer.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const selectedOption = question.querySelector('input[name="q' + (i + 1) + '"]:checked');

            if (selectedOption && selectedOption.value === answers[i]) {
                score++;
            }
        }

        // Menampilkan hasil
        resultContainer.innerHTML = 'Skor Anda: ' + score + ' dari ' + questions.length;

        // Menyembunyikan kuis dan menampilkan tombol ulangi
        quizContainer.style.display = 'none';
        restartContainer.style.display = 'block';
    }

    function restartQuiz() {
        const quizContainer = document.getElementById('quiz');
        const resultContainer = document.getElementById('result');
        const restartContainer = document.getElementById('restart');

        // Menghapus skor dan menampilkan kembali kuis
        resultContainer.innerHTML = '';
        quizContainer.style.display = 'block';
        restartContainer.style.display = 'none';

        // Mengatur ulang pilihan jawaban
        const options = quizContainer.querySelectorAll('input[type="radio"]');
        options.forEach(option => {
            option.checked = false;
        });
    }

    document.querySelector("#selesai").addEventListener('click', submitQuiz)
    document.querySelector("#restart").addEventListener('click', restartQuiz)
}