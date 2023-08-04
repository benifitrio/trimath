const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        const arrowParent = e.target.closest(".arrow").parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
});

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

document.addEventListener("DOMContentLoaded", () => {

    // Load page content
    window.addEventListener('hashchange', loadPage)
    let page = window.location.hash.substr(1);
    loadPage(page)

    function loadPage(page) {
        page = window.location.hash.substr(1);

        if (page === "") page = "home"
        if (page === 'home') Home()
        if (page === 'petunjuk') petunjukPage()
        if (page === 'tujuan') cpPage()
        if (page === 'materi') materiPage()
        if (page === 'konsep') petaPage()
        if (page === 'bio') bioPage()
        if (page === 'dapus') dapusPage()
        if (page === 'discovery') discoveryPage()
        if (page === 'pert1') pert1Page()
        if (page === 'next1') next1Page()
        if (page === 'next2') next2Page()
        if (page === 'next3') next3Page()
        if (page === 'next4') next4Page()
        if (page === 'next5') next5Page()
        if (page === 'pert2') pert2Page()
        if (page === 'next6') next6Page()
        if (page === 'next7') next7Page()
        if (page === 'pert3') pert3Page()
        if (page === 'next8') next8Page()
        if (page === 'next9') next9Page()
        if (page === 'uji') ujiPage()
    }
});