const app = new Vue ({
    el: '#app',
    data:{
        posicionActual: 0,
        titulo1: ["Quienes somos","Misión","Visión"],
        textos1: ["Frutos del Campo, es una cooperativa de trabajo asociado, constituida en el año 2018 en el municipio de Villavicencio, Departamento del Meta (Colombia). Formada por un grupo de agricultores e ingenieros con más de 15 años de experiencia demostrable en la siembra distribución y comercialización de frutas a nivel nacional e internacional.",
        "Frutos del Campo  dirige sus esfuerzos a comercializar  internacionalmente frutas y vegetales en fresco desde Colombia, para satisfacer las necesidades de consumidores y apoyando a los Productores agrícolas en la comercialización y tecnificación de cultivos.", "Para el 2023 ser una cooperativa líder en producción, transformación, distribución de frutas y verduras a nivel mundial mediante nuevos desarrollos tecnológicos, una cultura innovadora comprometida con la excelencia, la sostenibilidad  y respeto por el medio ambiente."    
    ]
    },

    methods:{
        mostrarTexto1: function (posicion) {
            this.posicionActual = posicion
        },
        atras1:function(){
            if(this.posicionActual > 0 ){
                this.posicionActual --
            }
        },
        adelante1: function(){
            if (this.posicionActual < this.textos1.length -1){
            this.posicionActual ++
            }
        }
    }
})
