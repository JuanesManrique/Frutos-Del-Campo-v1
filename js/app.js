const app = new Vue({
el: "#app",
data: {
imagen: [
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
],
imagen1: [
    "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624396770/img/portada_web_2_lw3pus.png",
    "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624923597/img/papaya-01_xzi3rs.png",
    "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624396770/img/portada_web_2_lw3pus.png",
],
posicionActual: 0,
isCollapsed: true,
texts: [
    {
    title: "¿Quiénes somos?",
    paragraph:
        "Frutos del Campo, es una cooperativa de trabajo asociado, constituida en el año 2018 en el municipio de Villavicencio, Departamento del Meta (Colombia). Formada por un grupo de agricultores e ingenieros con más de 15 años de experiencia demostrable en la siembra distribución y comercialización de frutas a nivel nacional e internacional.",
    },
    {
    title: "Misión",
    paragraph:
        "Frutos del Campo  dirige sus esfuerzos a comercializar  internacionalmente frutas y vegetales en fresco desde Colombia, para satisfacer las necesidades de consumidores y apoyando a los Productores agrícolas en la comercialización y tecnificación de cultivos.",
    },
    {
    title: "Visión",
    paragraph:
        "Para el 2023 ser una cooperativa líder en producción, transformación, distribución de frutas y verduras a nivel mundial mediante nuevos desarrollos tecnológicos, una cultura innovadora comprometida con la excelencia, la sostenibilidad  y respeto por el medio ambiente.",
    },
],



},

methods: {
mostrarTexto1: function (posicion) {
    this.posicionActual = posicion;
},

atras1: function () {
    if (this.posicionActual > 0) {
    this.posicionActual--;
    }
},

adelante1: function () {
    if (this.posicionActual < this.texts.length - 1) {
    this.posicionActual++;
    }
},

getClase(posicion) {
    if (posicion === this.posicionActual) {
    return "activado";
    }
    return "";
},

toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed
},



},

computed:{
    menu(){
        if(this.isCollapsed){
            return "nav collapsed"
        }return "nav"
    },
}

});

var rotar = new Swiper(".cambiar__logos", {
slidesPerView: 4,
loop: true,
autoplay: {
delay: 3000,
disableOnInteraction: false,
},

breakpoints:{
    320:{
        slidesPerView: 1
    },

    599:{
        slidesPerView: 2
    },

    768:{
        slidesPerView: 3
    }
}

});

var swiper = new Swiper(".imagenes", {
loop:true,
autoplay: {
disableOnInteraction: false,
delay: 10000,
},navigation: {
    nextEl: ".next",
    prevEl: ".prev",
},
});





// JS PLAY MODAL

/* function openModal() {
document.getElementById("modal").style.display = "grid"
}
function closeModal() {
document.getElementById("modal").style.display = "none"
} */
