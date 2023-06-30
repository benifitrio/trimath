function ujiPage() {
    judul.innerHTML = `<span class="h6">Uji Kompetensi</span>`
    content.innerHTML = `
<div class="section_our_solution">
<div id="quiz">
        <div class="question">
            <p>1. Berapakah hasil dari 2 + 2?</p>
            <div class="options list-group">
                <label class="list-group-item"><input type="radio" name="q1" value="a" >  1</label>
                <label class="list-group-item"><input type="radio" name="q1" value="b" > 3</label>
                <label class="list-group-item"><input type="radio" name="q1" value="c" "> 4</label>
                <label class="list-group-item"><input type="radio" name="q1" value="d" > 5</label>
            </div>
        </div>
        <div class="question">
            <p>2. Berapakah hasil dari 5 x 6?</p>
            <div class="options list-group">
                <label class="list-group-item"><input type="radio" name="q2" value="a" > 10</label>
                <label class="list-group-item"><input type="radio" name="q2" value="b" > 20</label>
                <label class="list-group-item"><input type="radio" name="q2" value="c" > 30</label>
                <label class="list-group-item"><input type="radio" name="q2" value="d" > 35</label>
            </div>
        </div>
        <!-- Tambahkan pertanyaan lain di sini -->

        <button id="selesai" class="btn btn-primary" onclick="submitQuiz()">Submit</button>
    </div>

    <div id="result" class="result"></div>

    <div id="restart" style="display: none;">
        <button id="restart" class="btn btn-success" onclick="restartQuiz()">Ulangi Soal</button>
    </div>
<div class="mt-4 w-100 d-flex justify-content-between mb-2">
<a href="#pert1" type="button" class="btn btn-success ">Sebelumnya</a>
<a href="#next2" type="button" class="btn btn-success">Selanjutnya</a>
</div>
</div>

`
        // Menambahkan event listener pada elemen "quiz" (elemen induk)
    document.getElementById('quiz').addEventListener('click', function(event) {
        // Mengecek apakah elemen yang diklik adalah elemen input radio
        if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
            // Mengambil elemen label terkait dengan input radio yang diklik
            var label = event.target.parentNode;
            console.log(event.target.tagName)
                // Menghapus kelas "selected" dari semua elemen label pada pertanyaan yang sama
            var question = label.parentNode.parentNode;
            var labels = question.getElementsByClassName('list-group-item');
            for (var i = 0; i < labels.length; i++) {
                labels[i].classList.remove('selected');
            }

            // Menambahkan kelas "selected" pada elemen label yang diklik
            label.classList.add('selected');
        }
    });

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
                selectedOption.parentNode.classList.add('correct');
            } else if (selectedOption) {
                selectedOption.parentNode.classList.add('incorrect');
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

        // Mengatur ulang pilihan jawaban dan warna latar
        const options = quizContainer.querySelectorAll('input[type="radio"]');
        options.forEach(option => {
            option.checked = false;
            option.parentNode.classList.remove('correct', 'incorrect', 'selected');
        });
    }
    document.getElementById('selesai').addEventListener('click', submitQuiz);
    document.getElementById('restart').addEventListener('click', restartQuiz);
}