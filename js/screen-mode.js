
// Variables globales
var nivelActual = 0;

var difStorage = localStorage.getItem("dificultad");
var dificultad = parseInt(difStorage);

var tiempo = 0;
var opacidad = 0;

if(dificultad == 1){
    tiempo = 29;
    opacidad = 0.4;
}else if(dificultad == 2){
    tiempo =44;
    opacidad = 0.3;
}else if(dificultad == 3){
    tiempo =59;
    opacidad = 0.1;
}


count = 0;

// Establecer los limites de game-img para crear las posiciones x e y de los personajes 
//de forma aleatoria






function randomPosition(){
    var gameImg = document.querySelector(".game-image");
    var gameImgWidth = gameImg.offsetWidth;
    var gameImgHeight = gameImg.offsetHeight;

    //Delimitar el area de juego

    var x = Math.floor(Math.random() * gameImgWidth);
    var y = Math.floor(Math.random() * gameImgHeight);

    //Validar que el personaje este siempre dentro de la imagen teniendo en cuenta el tamaño del personaje y las reglass css de la web

    return {x, y};
}




function startGame() {

    var cronometro = tiempo;
    var error = 0;
    var timer = setInterval(function() {
        // Actualizar el cronometro en el dom cada segundo (p class="text-tempo")

        var interface = `
        <p class="text-tempo">${cronometro} s</p>
        `;

    document.getElementById("tempo").innerHTML = interface;
    cronometro--;
    }, 1000);

    var timeout = setTimeout(function() {
            clearInterval(timer);
            clearTimeout(timeout)
            mostrarDerrota();
    }, cronometro * 1000);
    

    niveles = seleccionNivel();
    var nivelActivo = niveles[nivelActual];
    console.log(niveles);
    
    
    
    
    var topeNiveles = (niveles.length-1);
    console.log(topeNiveles);
    console.log(nivelActual);
    console.log(nivelActivo);
    console.log(niveles.length);

    
    // gestionar niveles y personajes
    
    var personajesNivel = nivelActivo.personajes;
    
    
    
    
    function crearPersonajes(personajesNivel) {
        var escenario = nivelActivo.imagen;
        
        var personajes = [];
        for (var i = 0; i < personajesNivel.length; i++) {
            var personaje = document.createElement("img");
            personaje.src = personajesNivel[i].src;
            personaje.id = personajesNivel[i].id;
            personaje.classList.add("personaje");
            personaje.style.position = "absolute";
            personaje.style.left = personajesNivel[i].x + "px";
            personaje.style.top = personajesNivel[i].y + "px";
            personaje.style.width = personajesNivel[i].width + "px";
            personaje.style.height = personajesNivel[i].height + "px";
            personaje.style.zIndex = 100;
            personaje.style.cursor = "pointer";
            personaje.style.opacity = opacidad;
            var interface = `
            <img src="${escenario}" id="game-img" class="game-img"">
            `;
            document.getElementById("game-image").innerHTML = interface;
            personajes.push(personaje);
            
            
        }
        
        error = 0;
        return personajes;
    }



    function mostrarVictoria() {
    // Mostrar el mensaje de victoria en un pop up en forma de div

    var victoria = document.getElementById("victoria");
    victoria.style.display = "block";
    // Mostrar el tiempo que ha tardado en encontrar a todos los personajes
    var tiempoTXT = document.getElementById("tiempo");
    
    

    var interface = `
    <h1>¡Has ganado!</h1>
    <p class="text-victoria">Te han sobrado: </p>
    <p class="text-victoria-datos"> ${cronometro}s </p>
    <p class="text-victoria">MissClicks: </p>
    <p class="text-victoria-datos">${error+1}</p>
    
    `;
    tiempoTXT.innerHTML = interface;
    // Continuar y volver ala página de seleccion de niveles
    error = 0;
    var continuar = document.getElementById("continuar-btn");
    continuar.addEventListener("click", function() {
        
        if(nivelActual < topeNiveles){
            
            victoria.style.display = "none";
            nivelActual++;
            console.log("Nivel: " + nivelActual);
            //Volver a cargar el juego con el nivel actual
            cronometro
            startGame();

            //volver a mostrar los personajes en el game-menu
            var mostrar = document.querySelectorAll(".menu-characters-icon");
            for (var i = 0; i < mostrar.length; i++) {
                mostrar[i].style.display = "block";
            }
            
        }else{
            victoria.style.display = "none";
            location.href = "./game-mode.html";
        }
    });

    var reiniciar = document.getElementById("reiniciar-btn");
    reiniciar.addEventListener("click", function() {
        victoria.style.display = "none";
        // Reiniciar la pantalla
        location.reload();

    });
    clearInterval(timer);
    clearTimeout(timeout);
    
    }

    function mostrarDerrota() {
        // Mostrar el mensaje de victoria en un pop up en forma de div
    
        var victoria = document.getElementById("victoria");
        victoria.style.display = "block";
        
        // Mostrar el tiempo que ha tardado en encontrar a todos los personajes
        var tiempoTXT = document.getElementById("tiempo");
        error = 0;
        var interface = `
        <h1>¡Se ha acabado el tiempo!</h1>
        <p class="text-derrota"> Encontrados: </p>
        <p class="text-derrota-datos">${personajesEncontrados}</p>
        <p class="text-derrota"> Niveles: </p>
        <p class="text-derrota-datos">${nivelActual-1}</p>
        
        
        `;
        tiempoTXT.innerHTML = interface;
        // Continuar y volver ala página de seleccion de niveles
        var personajesVivos = document.querySelectorAll(".personaje");
        for(var i = 0; i < personajesVivos.length; i++) {
            personajesVivos[i].style.border = "3px solid red";
            personajesVivos[i].style.borderRadius = "50%";
            personajesVivos[i].style.opacity = "1";
        }
        
        var continuar = document.getElementById("continuar-btn");
        continuar.display = "none";
        
    
        var reiniciar = document.getElementById("reiniciar-btn");
        reiniciar.addEventListener("click", function() {
        victoria.style.display = "none";
        // Reiniciar la pantalla
        location.reload();

        });


    // Agregar el evento de click al boton de reiniciar

    var reiniciar = document.getElementById("reiniciar-btn");
    reiniciar.addEventListener("click", function() {
        location.reload();
    });

    clearInterval(timer);
    clearTimeout(timeout);
    

}
    

    // Crear los personajes del nivel actual

    var personajes = crearPersonajes(personajesNivel);
    var personajesEncontrados = 0;
    var imagenMapa = document.getElementById("game-image");
    imagenMapa.addEventListener("click", function() {
        //Evitar que al pasar de nivel el click cuente el doble

        if(personajesEncontrados == personajesNivel.length) return;

        // Contar los errores
        
        error++;
    });

    for(var i = 0; i < personajes.length; i++){
        var pos = randomPosition();
        
        if(pos.x > 1200){
            pos.x = 1200;
            
        } 

        if(pos.y > 800){
            pos.y = 800;
            
        }

        if(pos.x < 400) {
            pos.x = 400;
           
        } 
        if(pos.y < 150){
            pos.y = 150;
            
        }   


        personajes[i].style.left = pos.x + "px";
        personajes[i].style.top = pos.y + "px";


        document.getElementById("game-image").appendChild(personajes[i]);

        // Agregar los eventos de click a los personajes
 
        personajes[i].addEventListener("click", function(e) {

          
            // Ocultar el personaje encontrado

            this.style.display = "none";
            personajesEncontrados++;
            error--;
            
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

                    // Detener el cronometro

                    clearInterval(timer);
                    clearTimeout(timeout);
                    

                    // Guardar la puntuacion en el local storage

                    localStorage.setItem("puntuacion", cronometro + " s");
                    var puntuacionPlayer = localStorage.getItem("puntuacion");


                    if (puntuacionPlayer === null) {
                        puntuacionPlayer = 0;
                    }
                    if (cronometro < puntuacionPlayer) {    

                        localStorage.setItem("puntuacion", cronometro + " s");
                    }

                    

                    if((cronometro < 0)) {
                        mostrarDerrota();
                        // Bordear de rojo los personajes que no se encontraron
                        
                    }else{
                        mostrarVictoria();
                    }
                    personajesEncontrados = 0;
                    
                    
                }

            }

        );

    }

}


function main() {
    // Iniciar el juego
    startGame();
 
}

window.onload = main;

