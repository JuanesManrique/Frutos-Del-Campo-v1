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

const app = new Vue ({
    el: '#app',
    data:{
        tituloA:"Quienes somos",
        textoA:["Frutos del Campo, es una cooperativa de trabajo asociado, constituida en el año 2018 en el municipio de Villavicencio, Departamento del Meta (Colombia). Formada por un grupo de agricultores e ingenieros con más de 15 años de experiencia demostrable en la siembra distribución y comercialización de frutas a nivel nacional e internacional.",
        "fgjrfghndisvhtosdinhvelnigveisovhoegsdfgvsndfgdfgvsndhfgvnhdsfgnvdsfhgvsdfjkgvdnsfgvnldsfkl", "Hola mundo"    
    ]
    }
})
