const app = new Vue ({
    el: '#app',
    data:{
        posicionActual: 0,
        titulo1: ["Quienes somos","Misión","Visión"],
        textos1: ["Frutos del Campo, es una cooperativa de trabajo asociado, constituida en el año 2018 en el municipio de Villavicencio, Departamento del Meta (Colombia). Formada por un grupo de agricultores e ingenieros con más de 15 años de experiencia demostrable en la siembra distribución y comercialización de frutas a nivel nacional e internacional.",
        "fgjrfghndisvhtosdinhvelnig eisovhoegsdfgvsndfgdfgvsndhfgvnhdsfgnvdsfhgvsdfjkgvdnsfgvn ldsfkl", "Hola mundo"    
    ]
    },

    methods:{
        

        mostrarTexto1: function (posicion) {
            this.posicionActual = posicion
        }
    }
})
