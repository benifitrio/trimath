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

// $(document).ready(function() {
//     var trigger = $('.hamburger'),
//         overlay = $('.overlay'),
//         isClosed = false;

//     trigger.click(function() {
//         hamburger_cross();
//     });

//     function hamburger_cross() {

//         if (isClosed == true) {
//             overlay.hide();
//             trigger.removeClass('is-open');
//             trigger.addClass('is-closed');
//             isClosed = false;
//         } else {
//             overlay.show();
//             trigger.removeClass('is-closed');
//             trigger.addClass('is-open');
//             isClosed = true;
//         }
//     }

//     $('[data-toggle="offcanvas"]').click(function() {
//         $('#wrapper').toggleClass('toggled');
//     });
// });