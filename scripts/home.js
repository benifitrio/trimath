const judul = document.querySelector('.text')
const content = document.querySelector('.content')

function Home() {
    judul.innerText = `Hamalan Utama`
    content.innerHTML += `
    <img style="border-radius: 3rem" src="bg.jpg" class="img-fluid mt-3" alt="...">`
}