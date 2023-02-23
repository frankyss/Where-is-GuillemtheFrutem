
var nivelActual = 0;

var niveles = [
    {
       nombre: "Nivel 1 - God of War 3",
       imagen: "./imgs/levels/good-of-war-3.jpg",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 2 - GTA V",
       imagen: "./imgs/levels/grand-theft-auto-v.jpg",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 3 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 4 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 5 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 6 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 7 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 8 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 9 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
   {
       nombre: "Nivel 10 - Fallout 76",
       imagen: "./imgs/levels/fallout-76.png ",
       personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
       ]
   },
];




function seleccionNivel() {
    return niveles;
}

