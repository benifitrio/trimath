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
        console.log(page)
        if (page === "") page = "home"
        if (page === 'home') Home()
        if (page === 'petunjuk') petunjukPage()
        if (page === 'tujuan') cpPage()
        if (page === 'materi') materiPage()
        if (page === 'konsep') petaPage()
        if (page === 'bio') bioPage()
        if (page === 'discovery') discoveryPage()
    }

});