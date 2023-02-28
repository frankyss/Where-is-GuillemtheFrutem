//NIVELES FACILES - SCREENSHOT MODE


function seleccionNivelScreenFacil() {

    var niveles = [
    
    {
            
        nombre: "Batman Arkham City",
        imagen: "./imgs/levels/easy/1-batman-arkham-asylum.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Call of Duty 4",
        imagen: "./imgs/levels/easy/1-call-of-duty-4.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Dead Cells",
        imagen: "./imgs/levels/easy/1-dead-cells.jpg",
        personajes: [
        {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
        {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
        {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
        {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
         nombre: "Final Fantasy VII",
         imagen: "./imgs/levels/easy/1-final-fantasy-vii.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
    },
    {
        nombre: "Forza Horizon 4",
        imagen: "./imgs/levels/easy/1-forza-horizon-4.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "God of War 3",
        imagen: "./imgs/levels/easy/1-god-of-war-3.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "GTA IV",
        imagen: "./imgs/levels/easy/1-grand-theft-auto-iv.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Guitar Hero",
        imagen: "./imgs/levels/easy/1-guitar-hero.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Half Life",
        imagen: "./imgs/levels/easy/1-half-life.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Killzone 2",
        imagen: "./imgs/levels/easy/1-killzone-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Mass Effect 2",
        imagen: "./imgs/levels/easy/1-mass-effect-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Half Life 2",
        imagen: "./imgs/levels/easy/1-half-life-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Metroid Prime",
        imagen: "./imgs/levels/easy/1-metroid-prime.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Monster Hunter World",
        imagen: "./imgs/levels/easy/1-monster-hunter-world.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "NCA 2004",
        imagen: "./imgs/levels/easy/1-ncaa-football-2004.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Persona 5",
        imagen: "./imgs/levels/easy/1-persona-5.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Pinball FX2",
        imagen: "./imgs/levels/easy/1-pinball-fx2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Prince of Persia: Sands of Time",
        imagen: "./imgs/levels/easy/1-prince-of-persia-the-sands-of-time.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Ratchet & Clank: Future Tools of Destruction",
        imagen: "./imgs/levels/easy/1-ratchet-and-clank-future-tools-of-destruction.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Rockband 2",
        imagen: "./imgs/levels/easy/1-rock-band-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Starcraft 2",
        imagen: "./imgs/levels/easy/1-starcraft-ii.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Stardew Valley",
        imagen: "./imgs/levels/easy/1-stardew-valley.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Street Fighter IV",
        imagen: "./imgs/levels/easy/1-street-fighter-iv.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Super Mario 3D",
        imagen: "./imgs/levels/easy/1-super-mario-3d.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "The Legend of Zelda: The Wind Waker",
        imagen: "./imgs/levels/easy/1-the-legend-of-zelda-the-wind-waker.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Undertale",
        imagen: "./imgs/levels/easy/1-undertale.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Super Mario Bros 3",
        imagen: "./imgs/levels/easy/1-super-mario-bros-3.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Baldurs Gate 2",
        imagen: "./imgs/levels/easy/2-baldurs-gate-ii.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Super Mario Maker",
        imagen: "./imgs/levels/easy/1-super-mario-maker.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Batman Arkham City",
        imagen: "./imgs/levels/easy/2-batman-arkham-city.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Bayontta 2",
        imagen: "./imgs/levels/easy/2-bayonetta-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Dead Space 2",
        imagen: "./imgs/levels/easy/2-dead-space-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Devil May Cry 5",
        imagen: "./imgs/levels/easy/2-devil-may-cry-5.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Dragon Quest XI",
        imagen: "./imgs/levels/easy/2-dragon-quest-xi.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Final Fantasy VII",
        imagen: "./imgs/levels/easy/2-final-fantasy-vii.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Forza",
        imagen: "./imgs/levels/easy/2-forza.png",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Hades",
        imagen: "./imgs/levels/easy/2-hades.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Little Big Planet",
        imagen: "./imgs/levels/easy/2-littlebigplanet.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Mass Effect 2",
        imagen: "./imgs/levels/easy/2-mass-effect-2.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "Metroid Dread",
        imagen: "./imgs/levels/easy/2-metroid-dread.jpg",
        personajes: [
            {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
            {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
            {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
            {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
        ]
    },
    {
        nombre: "GTA: Chinatown Wars",
        imagen: "./imgs/levels/easy/2-grand-theft-auto-chinatown.jpg",
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

//NIVELES MEDIO - SCREENSHOT MODE

function seleccionNivelScreenMedio() {

    var niveles = [
    
        {
             
            nombre: "Assassin's Creed: Brotherhood",
            imagen: "./imgs/levels/mid/1-assassins-creed-brotherhood.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Batman Arkham City",
            imagen: "./imgs/levels/mid/1-batman-arkham-city.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
         nombre: "Bayonetta 2",
         imagen: "./imgs/levels/mid/1-bayonetta-2.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
     {
         nombre: "Dead Space 2",
         imagen: "./imgs/levels/mid/1-dead-space-2.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
         ]
     },
        {
            nombre: "Demon's Souls",
            imagen: "./imgs/levels/mid/1-demons-souls.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Diablo III",
            imagen: "./imgs/levels/mid/1-diablo-iii.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Forza Motorsport 2",  
            imagen: "./imgs/levels/mid/1-forza-motorsport-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Good of War: chains of Olympus",
            imagen: "./imgs/levels/mid/1-god-of-war-chains-of-olympus.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "GTA: Chinatown Wars",
            imagen: "./imgs/levels/mid/1-grand-theft-auto-chinatown.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Hades",
            imagen: "./imgs/levels/mid/1-hades.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Halo 3",
            imagen: "./imgs/levels/mid/1-halo-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Horizon Zero Dawn",
            imagen: "./imgs/levels/mid/1-horizon-zero-dawn.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Mario Kart 8",
            imagen: "./imgs/levels/mid/1-mario-kart-8-deluxe.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metal Gear Solid 3",
            imagen: "./imgs/levels/mid/1-metal-gear-solid-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Monster Hunter World",
            imagen: "./imgs/levels/mid/1-monster-hunter-world-iceborne.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Project Gotham Racing",
            imagen: "./imgs/levels/mid/1-project-gotham-racing.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Radiant Silvergun",
            imagen: "./imgs/levels/mid/1-radiant-silvergun.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Rayman Legends",
            imagen: "./imgs/levels/mid/1-rayman-legends.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Resident Evil 2",
            imagen: "./imgs/levels/mid/1-resident-evil-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Rock Band 3",
            imagen: "./imgs/levels/mid/1-rock-band-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Sly 2 Band of Thieves",
            imagen: "./imgs/levels/mid/1-sly-2-band-of-thieves.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Super Metroid",
            imagen: "./imgs/levels/mid/1-super-metroid-snes.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Super Smash Bros. Ultimate",
            imagen: "./imgs/levels/mid/1-super-smash-bros-ultimate.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Rayman Origins",
            imagen: "./imgs/levels/mid/1-rayman-origins.png",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Elder Scroll IV: Oblivion",
            imagen: "./imgs/levels/mid/1-the-elder-scrolls-iv.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Legend of Zelda: Skyward Sword",
            imagen: "./imgs/levels/mid/1-the-legend-of-zelda-skyward-sword.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Tony Hawk's Pro Skater",
            imagen: "./imgs/levels/mid/1-tony-hawks-pro-skater.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Total War Shogun 2",
            imagen: "./imgs/levels/mid/1-total-war-shogun-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "World of Warcraft: Cataclysm",
            imagen: "./imgs/levels/mid/1-world-of-warcraft-cataclysm.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Yoshis Island",
            imagen: "./imgs/levels/mid/1-yoshis-island.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "BioShock",
            imagen: "./imgs/levels/mid/2-bioshock.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "DeadCells",
            imagen: "./imgs/levels/mid/2-dead-cells.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Demon's Souls",
            imagen: "./imgs/levels/mid/2-demons-souls.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Diablo III",
            imagen: "./imgs/levels/mid/2-diablo-iii.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Forza Motorsport 2",
            imagen: "./imgs/levels/mid/2-forza-motorsport-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "GTA V",
            imagen: "./imgs/levels/mid/2-grand-theft-auto-v.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Half Life 2",
            imagen: "./imgs/levels/mid/2-half-life-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "It Takes 2",
            imagen: "./imgs/levels/mid/2-it-takes-two.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Killzone 2",
            imagen: "./imgs/levels/mid/2-killzone-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Persona 5",
            imagen: "./imgs/levels/mid/2-persona-5.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Prince of Persia: The Sands of Time",
            imagen: "./imgs/levels/mid/2-prince-of-persia-the-sands-of-time.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metal Gear Solid 3",
            imagen: "./imgs/levels/mid/2-metal-gear-solid-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us",
            imagen: "./imgs/levels/mid/2-the-last-of-us.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Legend of Zelda: skyward sword",
            imagen: "./imgs/levels/mid/2-the-legend-of-zelda-skyward-sword.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 30, height: 30, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 30, height: 30 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 30, height: 30 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Street Fighter IV",
            imagen: "./imgs/levels/mid/2-street-fighter-iv.jpg",
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


//NIVELES DIFÍCILES - SCREENSHOT MODE


function seleccionNivelScreenDificil() {

    var niveles = [
    
        {
             
            nombre: "Baldurs Gate II",
            imagen: "./imgs/levels/hard/1-baldurs-gate-ii.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "BioShock",
            imagen: "./imgs/levels/hard/1-bioshock.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
         nombre: "Bloodborne",
         imagen: "./imgs/levels/hard/1-bloodborne.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
         ]
     },
     {
         nombre: "Dark Souls III",
         imagen: "./imgs/levels/hard/1-dark-souls-iii.jpg",
         personajes: [
          {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
          {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
          {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
          {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
         ]
     },
        {
            nombre: "Deus EX Human Revolution",
            imagen: "./imgs/levels/hard/1-deus-ex-human-revolution.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Devil May Cry 5",
            imagen: "./imgs/levels/hard/1-devil-may-cry-5.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Dragon Quest XI",
            imagen: "./imgs/levels/hard/1-dragon-quest-xi.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Forza",
            imagen: "./imgs/levels/hard/1-forza.png",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Gaers of War 3",
            imagen: "./imgs/levels/hard/1-gears-of-war-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "GTA V",
            imagen: "./imgs/levels/hard/1-grand-theft-auto-v.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "It Takes Two",
            imagen: "./imgs/levels/hard/1-it-takes-two.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Marvel Spiderman",
            imagen: "./imgs/levels/hard/1-marvel-spider-man.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Little Big Planet",
            imagen: "./imgs/levels/hard/1-littlebigplanet.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metroid Dread",
            imagen: "./imgs/levels/hard/1-metroid-dread.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Shadow of the Colossus",
            imagen: "./imgs/levels/hard/1-shadow-of-the-colossus.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us",
            imagen: "./imgs/levels/hard/1-the-last-of-us.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Metroid Prime 2",
            imagen: "./imgs/levels/hard/1-metroid-prime-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Witcher 2",
            imagen: "./imgs/levels/hard/1-the-witcher-2.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Tom Clancy's Ghost Recon",
            imagen: "./imgs/levels/hard/1-tom-clancys-ghost-recon.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Uncharted 3",
            imagen: "./imgs/levels/hard/1-uncharted-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Last of Us: Part II",
            imagen: "./imgs/levels/hard/1-the-last-of-us-part-ii.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "World of Warcraft",
            imagen: "./imgs/levels/hard/1-world-of-warcraft.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "The Witcher 3",
            imagen: "./imgs/levels/hard/1-the-witcher-3.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Uncharted",
            imagen: "./imgs/levels/hard/1-uncharted-digital-bundle.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Assassin's Creed Brotherhood",
            imagen: "./imgs/levels/hard/2-assassins-creed-brotherhood.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Bloodborne",
            imagen: "./imgs/levels/hard/2-bloodborne.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Call of Duty 4",
            imagen: "./imgs/levels/hard/2-call-of-duty-4.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Assassin's Creed II",
            imagen: "./imgs/levels/hard/2-assassins-creed-ii.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Blodborne",
            imagen: "./imgs/levels/hard/2-blodborne.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
        {
            nombre: "Call of Duty 4",
            imagen: "./imgs/levels/hard/2-call-of-duty-4.jpg",
            personajes: [
             {id:"guillem", x: 0 , y:0, width: 25, height: 25, src: "./imgs/characters/guillem.png"},
             {id:"illo", x: 0 , y:0, width: 25, height: 25 , src: "./imgs/characters/illo.png"},
             {id:"bokeron", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/bokeron.png"},
             {id:"yannis", x: 0, y: 0, width: 25, height: 25 , src: "./imgs/characters/yannis.png"},
            ]
        },
     ];
    //Ordenar niveles aleatoriamente
    niveles = niveles.sort(function() { return Math.random() - 0.5 });
    return niveles;
}


