// JS PLAY MODAL

/* function openModal() {
    document.getElementById("modal").style.display = "grid"
}
function closeModal() {
    document.getElementById("modal").style.display = "none"
} */

// JS CARRUSEL SWIPER

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});