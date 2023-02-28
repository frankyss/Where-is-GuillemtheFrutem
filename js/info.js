
var divInfo = document.querySelector(".infogame");

var interface = `
        <h2>¿Cómo jugar?</h2>
        <p>En cada nivel, deberás encontrar a los Malagan Fruitis Avengers. Estos se han dispersado por todos los videojuegos. Haz click en ellos para reunirlos de nuevo</p>
        <hr>
        <p style="text-align: left;"><b>Fashi Mode</b>: Como en cada directo de Illojuan, las respuestas son super sencillas. Sino preguntale al chat</p>
        <p style="text-align: center;"><b class="b-light">Tiempo</b>: 30s - <b class="b-light">MissClick's</b>: 3 permitidos  </p>
        <p style="text-align: left;"><b>Illojuaner Mode</b>: Para aquellos que pasan más horas frente a una pantalla que junto a sus amigos. ¿A alguien le sobra un amigo?</p>
        <p style="text-align: center;"><b class="b-light">Tiempo</b>: 45s - <b class="b-light">MissClick's</b>: 2 permitidos</p>
        <p style="text-align: left;"><b>Nivel OG's</b>: Dedicado a los auténticos <a href="https://www.ogsbrand.com/es/" >OGG's</a> . Os dejo esta pequeña tienda online de un par de malagueños que acaban de empezar. Toda ayuda es poca! </p>
        <p style="text-align: center;"><b class="b-light">Tiempo</b>: 60s - <b class="b-light">MissClick's</b>: 1 permitidos</p>
        <hr>
        <p>Si te ha gustado el juego como si quieres ayudarme a mejorarlo estoy en Twitter <a href="https://twitter.com/devsky__" target="_blank">@devsky__</a></p>
        <p><b>¡Buena suerte!</b></p>
    `;
var activo = false;
var iconoInfo = document.getElementById("info-game");
    iconoInfo.addEventListener("click", function(){
        divInfo.innerHTML = interface;
        if(activo == false){
            divInfo.style.display = "block";
            activo = true;
        }else{
            divInfo.style.display = "none";
            activo = false;
        }
});

