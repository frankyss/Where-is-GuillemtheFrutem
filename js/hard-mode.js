
// Variables globales

var nivelGlobal = 0;

var difStorage = localStorage.getItem("dificultad");
var dificultad = 3;

var tiempo = 0;
var opacidad = 0;
var limiteErrores = 0;

if(dificultad == 3){
    tiempo =59;
    opacidad = 0.2;
    limiteErrores = 1;
    var niveles = seleccionNivelScreenDificil();
}

error = 0;
count = 0;
var cronometro = tiempo;

function randomPosition(){
    var gameImg = document.querySelector(".game-image");
    var gameImgWidth = gameImg.offsetWidth;
    var gameImgHeight = gameImg.offsetHeight;

    //Delimitar el area de juego

    var x = Math.floor(Math.random() * gameImgWidth);
    var y = Math.floor(Math.random() * gameImgHeight);

    //Validar que el personaje este siempre dentro de la imagen teniendo en cuenta el tamaño del personaje y las reglass css de la web
    if(x > 1200){

        //La posicion sera un numero aleatorio entre 1000 y 1200
        
        x = Math.floor(Math.random() * (1200 - 1000) + 1000);
        
    } 

    if(y > 800){
        y = Math.floor(Math.random() * (800 - 600) + 600);
        
    }

    if(x < 400) {
        x = Math.floor(Math.random() * (600 - 400) + 400);
       
    } 
    if(y < 150){
        y = Math.floor(Math.random() * (300 - 150) + 150);
        
    }
    return {x, y};
}

var errorNivel = 0;

function startGame() {
    
    console.log("Inicio nivel ");

    function mostrarVictoria() {
        
        var divData = document.createElement("div");
        divData.classList.add("div-data");

        divData.innerHTML = `
        <h1>¡Limite de Niveles!</h1>
        <p class="text-derrota"> Niveles: </p>
        <p class="text-derrota-datos">${nivelGlobal}</p>
        <p class="text-derrota"> MissClick's: </p>
        <p class="text-derrota-datos">${errorNivel} / ${limiteErrores}</p>
         `;
        document.getElementById("game-image").appendChild(divData);
        setTimeout(function() {
            divData.style.opacity = "0.9";
        }, 100);

        

        //Crear un contador para el cambio de nivel

        var tempo = 4;
        var temporizador = setInterval(function() {

            var mostrar = document.querySelectorAll(".menu-characters-icon");
                for (var i = 0; i < mostrar.length; i++) {
                    mostrar[i].style.display = "block";

                }

                var interface = `
                <p class="text-tempo-carga">Cambiando de nivel: ${tempo} s</p>
                `;
                tiempoTxt.innerHTML = interface;
                if(tempo == 0) {
                    clearInterval(temporizador);
                    tiempoTxt.innerHTML = "";
                    errorNivel = error;
                    
                    location.href = "./game-mode.html";
                }
                tempo--;
            },1000);
        }
                
    
    function mostrarDerrota() {
        
        var divData = document.createElement("div");
        divData.classList.add("div-data");

        var audio = document.getElementById("audio-lose");
        audio.volume=0.3;
        audio.play();
                
        divData.innerHTML = `
        <h1>¡NIVEL FALLIDO!</h1>
        <p class="text-derrota"> Encontrados: </p>
        <p class="text-derrota-datos">${personajesEncontrados}</p>
        <p class="text-derrota"> Niveles: </p>
        <p class="text-derrota-datos">${nivelGlobal}</p>
        <p class="text-derrota"> MissClick's: </p>
        <p class="text-derrota-datos">${errorNivel} / ${limiteErrores}</p>
        
        `;
        document.getElementById("game-image").appendChild(divData);
        setTimeout(function() {
            divData.style.opacity = "0.9";
        }, 100);
        // Continuar y volver ala página de seleccion de niveles
        var personajesVivos = document.querySelectorAll(".personaje");
        for(var i = 0; i < personajesVivos.length; i++) {
            personajesVivos[i].style.border = "3px solid red";
            personajesVivos[i].style.borderRadius = "50%";
            personajesVivos[i].style.opacity = "1";
        }
        
        

        //Crear un contador para el cambio de nivel

        var tempo = 4;
        var temporizador = setInterval(function() {

            var mostrar = document.querySelectorAll(".menu-characters-icon");
            for (var i = 0; i < mostrar.length; i++) {
                mostrar[i].style.display = "block";
            }

            var interface = `
            <p class="text-tempo-carga">Reiniciando: ${tempo} s</p>
            `;

            tiempoTxt.innerHTML = interface;
            if(tempo == 0) {
                clearInterval(temporizador);
                tiempoTxt.innerHTML = "";
                errorNivel = error;
                location.reload();
            }
            tempo--;
        },1000);
    } 

    //Inicializar el cronometro
    var cronometro = tiempo;
    var tiempoTxt = document.getElementById("tempo")
    var timer = setInterval(function() {
        
    // Actualizar el cronometro en el dom cada segundo (p class="text-tempo")
    
    var interface = `
    <p class="text-tempo">Nivel ${nivelGlobal+1} - ${cronometro} s</p>
    `;
   
    tiempoTxt.innerHTML = interface;
    
    cronometro--;
        if(cronometro < 0) {
            clearInterval(timer);
            var interface = `
            <p class="text-tempo-carga">Nivel ${nivelGlobal} - Timeout</p>
            `;
            tiempoTxt.innerHTML = interface;
            mostrarDerrota();
        
        }
    },1000);
    
   // Declarar niveles
    
    function sacarNivel(nivelGlobal) {
        let nivel = niveles[nivelGlobal];
        return nivel;
    }

    let nivel = sacarNivel(nivelGlobal);
   
    let personajesNivel = nivel.personajes;
    let escenario = nivel.imagen;
    let interface = `
        <img src="${escenario}" id="game-img" class="game-img"">
        `;
        document.getElementById("game-image").innerHTML = interface;
    let topeNiveles = (niveles.length-1);
    let personajesEncontrados = 0;
    
    // Función para crear los personajes del nivel actual
    function crearPersonajes(personajesNivel) {
        let personajes = [];
        //obtener la posicion aleatoria del personaje
  
        for (let i = 0; i < personajesNivel.length; i++) {
            
            let personaje = document.createElement("img");
            var pos = randomPosition();
            var posX = pos.x;
            var posY = pos.y;
            personaje.src = personajesNivel[i].src;
            personaje.id = personajesNivel[i].id;
            personaje.classList.add("personaje");
            personaje.style.position = "absolute";
            personaje.style.left = posX + "px";
            personaje.style.top = posY + "px";
            personaje.style.width = personajesNivel[i].width + "px";
            personaje.style.height = personajesNivel[i].height + "px";
            personaje.style.zIndex = 100;
            personaje.style.cursor = "pointer";
            personaje.style.opacity = opacidad;
            
            personajes.push(personaje);
        }
        return personajes;
    }   
    // Crear los personajes del nivel actual
   
    personajes = crearPersonajes(personajesNivel);

    // Agregar los personajes al DOM
   
        let time = 50;
    
        let cargaPersonajes = setInterval(function() {
            
            if(time == 0) {
                clearInterval(cargaPersonajes);
                for(let i = 0; i < personajes.length; i++) {
                    document.getElementById("game-image").appendChild(personajes[i]);
                }
            }
            time= time - 50;
        },50);
        
    

    var imagenMapa = document.getElementById("game-img");
    imagenMapa.addEventListener("click", function() {
        var errorSound = document.getElementById("audio-fallo");
        errorSound.volume= 0.4;
        errorSound.play();
        errorNivel++;
        console.log("Fallo" + errorNivel);
        if(errorNivel==limiteErrores) {
            clearInterval(timer);
            mostrarDerrota();
        }
        
    });

    for(var i = 0; i < personajes.length; i++){
        // Agregar los eventos de click a los personajes
 
        personajes[i].addEventListener("click", function(e) {

            var aciertoSound = document.getElementById("audio-acierto");
            aciertoSound.volume= 0.3;
            aciertoSound.play();

            this.style.display = "none";
            personajesEncontrados++;
            console.log("Error: " + errorNivel);

            if((errorNivel <= 0) ) {
                errorNivel = 0;
                //console.log("Personaje-2: " + errorNivel);
            }else{
                console.log("Personaje-2: " + errorNivel);
            }

            console.log("Personaje salida" + error);
            
            //Ocultar el personaje encontrado del array de personajes

            for(var i = 0; i < personajes.length; i++) {
                if(personajes[i].id == this.id) {
                    var ocultar = document.getElementById(personajes[i].id);
                    ocultar.style.display = "none"; 
                    personajes.splice(i, 1);
                }
            }

            // Si el contador de personajes encontrados es igual al numero de personajes del nivel

            if(personajes.length==0) {
                
                var tiempoTxt = document.getElementById("tempo")
                tiempoTxt.innerHTML = "";

                // Si el nivel actual es igual al tope de niveles

                
                clearInterval(timer);
                // Guardar la puntuacion en el local storage

                localStorage.setItem("puntuacion", cronometro + " s");
                var puntuacionPlayer = localStorage.getItem("puntuacion");

                if (puntuacionPlayer === null) {
                    puntuacionPlayer = 0;
                }
                if (cronometro < puntuacionPlayer) {    

                    localStorage.setItem("puntuacion", cronometro + " s");
                }
                
                personajesEncontrados = 0;
                if(nivelGlobal < topeNiveles) {

                    var divData = document.createElement("div");
                    divData.classList.add("div-data");
                    console.log("Misclick mensaje: "+errorNivel);
                    if(errorNivel<0){
                        errorNivel = 0;
                    }
                    
                    var levelWinSound = document.getElementById("audio-next-level");
                    levelWinSound.volume= 0.4;
                    levelWinSound.play();
                    
                    divData.innerHTML = `
                    <h1>¡NIVEL SUPERADO!</h1>
                    <p class="text-victoria">Te han sobrado: </p>
                    <p class="text-victoria-datos"> ${cronometro}s </p>
                    <p class="text-derrota"> MissClick's: </p>
                    <p class="text-derrota-datos">${errorNivel} / ${limiteErrores}</p>
                    `;
                    document.getElementById("game-image").appendChild(divData);
                    setTimeout(function() {
                        divData.style.opacity = "0.9";
                    }, 100);

                    var tempo = 5;

                    //Crear un contador para el cambio de nivel

                    var temporizador = setInterval(function() {

                        var mostrar = document.querySelectorAll(".menu-characters-icon");
                        for (var i = 0; i < mostrar.length; i++) {
                            mostrar[i].style.display = "block";
                        }

                        var interface = `
                        <p class="text-tempo-carga">Siguiente nivel: ${tempo} s</p>
                        `;

                        tiempoTxt.innerHTML = interface;
                        errorNivel=error;
                        if(tempo == 0) {
                            clearInterval(temporizador);
                            tiempoTxt.innerHTML = "";
                            
                            nivelGlobal++;
                            startGame();
                            }
                            tempo--;
                    },1000);
                } else {
                    mostrarVictoria();
                }
  
            }
        });
    }
    
}


startGame();



