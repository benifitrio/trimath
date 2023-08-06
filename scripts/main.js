// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
    sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
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