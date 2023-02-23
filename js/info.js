
var divInfo = document.querySelector(".infogame");

var interface = `
        <h2>¿Cómo jugar?</h2>
        <p>En cada nivel, deberás encontrar a Guillem the Frutem en la imagen. Para ello, deberás pulsar sobre la imagen. Si te equivocas, podrás volver a intentarlo.</p>
        <hr>
        <p style="text-align: left;"><b>Screenshoot Mode</b>: Encuentra a todos los fruits malagueños a través de diferentes videojuegos</p>
        <p style="text-align: left;"><b>Cover Mode</b>: Encuentra Guillem the Frutten perdido entre las portadas de juegos</p>
        <p style="text-align: left;"><b>Classic Mode</b>: Encuentra a todos los fruits malagueños en las diferentes imágenes</p>
        <p style="text-align: left;"><b>Random Mode</b>: Encuentra a todos los fruits malagueños posicionados aleatoriamente en la imagen</p>
        <hr>
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






