

function seleccionNivelScreenFacil() {

    var niveles = [
    
        {
             
            nombre: "Fallout 76",
            imagen: "./imgs/levels/fallout-76.png ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Lezeng of Zelda: Breath of the Wild",
            imagen: "./imgs/levels/legend-of-zelda-breath-of-the-wild.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
         nombre: "God of War 3",
         imagen: "./imgs/levels/good-of-war-3.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
     {
         nombre: "GTA V",
         imagen: "./imgs/levels/grand-theft-auto-v.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
        {
            nombre: "Super Mario Galaxy",
            imagen: "./imgs/levels/super-mario-galaxy.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us",
            imagen: "./imgs/levels/the-last-of-us.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Uncharted 4",
            imagen: "./imgs/levels/uncharted-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metal Gear Solid IV",
            imagen: "./imgs/levels/metal-gear-solid-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Red Redemption 2",
            imagen: "./imgs/levels/red-dead-redemption-ii.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Witcher 3",
            imagen: "./imgs/levels/witcher-3.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
     ];
    //Ordenar niveles aleatoriamente
    niveles = niveles.sort(function() { return Math.random() - 0.5 });
    return niveles;
}
function seleccionNivelScreenMedio() {

    var niveles = [
    
        {
             
            nombre: "Fallout 76",
            imagen: "./imgs/levels/fallout-76.png ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Legend of Zelda: Breath of the Wild",
            imagen: "./imgs/levels/legend-of-zelda-breath-of-the-wild.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
         nombre: "God of War 3",
         imagen: "./imgs/levels/good-of-war-3.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
     {
         nombre: "GTA V",
         imagen: "./imgs/levels/grand-theft-auto-v.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
        {
            nombre: "Super Mario Galaxy",
            imagen: "./imgs/levels/super-mario-galaxy.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us",
            imagen: "./imgs/levels/the-last-of-us.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Uncharted 4",
            imagen: "./imgs/levels/uncharted-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metal Gear Solid IV",
            imagen: "./imgs/levels/metal-gear-solid-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Red Redemption 2",
            imagen: "./imgs/levels/red-dead-redemption-ii.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Witcher 3",
            imagen: "./imgs/levels/witcher-3.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
     ];
    //Ordenar niveles aleatoriamente
    niveles = niveles.sort(function() { return Math.random() - 0.5 });
    return niveles;
}
function seleccionNivelScreenDificil() {

    var niveles = [
    
        {
             
            nombre: "Fallout 76",
            imagen: "./imgs/levels/fallout-76.png ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Legend of Zelda: Breath of the Wild",
            imagen: "./imgs/levels/legend-of-zelda-breath-of-the-wild.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
         nombre: "God of War 3",
         imagen: "./imgs/levels/good-of-war-3.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
     {
         nombre: "GTA V",
         imagen: "./imgs/levels/grand-theft-auto-v.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
        {
            nombre: "Super Mario Galaxy",
            imagen: "./imgs/levels/super-mario-galaxy.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us",
            imagen: "./imgs/levels/the-last-of-us.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Uncharted 4",
            imagen: "./imgs/levels/uncharted-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metal Gear Solid IV",
            imagen: "./imgs/levels/metal-gear-solid-4.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Red Redemption 2",
            imagen: "./imgs/levels/red-dead-redemption-ii.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Witcher 3",
            imagen: "./imgs/levels/witcher-3.jpg ",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
     ];
    //Ordenar niveles aleatoriamente
    niveles = niveles.sort(function() { return Math.random() - 0.5 });
    return niveles;
}


