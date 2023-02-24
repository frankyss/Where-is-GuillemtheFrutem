
    
    window.onload = function() {
        var dificultad = localStorage.getItem("dificultad");
        localStorage.setItem("dificultad", dificultad);
        //ocultar todos las descripciones

    }
    
    
    var dificultad = 1;

    document.getElementById("lista").onchange = function() {
        dificultad = document.getElementById("lista").value;
        localStorage.setItem("dificultad", dificultad);
        if(dificultad == 1){
            descripciones[0].style.display = "block";
            descripciones[1].style.display = "none";
            descripciones[2].style.display = "none";
        }else if(dificultad == 2){
            descripciones[0].style.display = "none";
            descripciones[1].style.display = "block";
            descripciones[2].style.display = "none";
        }else if(dificultad == 3){
            descripciones[0].style.display = "none";
            descripciones[1].style.display = "none";
            descripciones[2].style.display = "block";
        }
        
    }
    

    localStorage.setItem("dificultad", dificultad);
   

    var descripciones = document.querySelectorAll(".mode-description");
    
    console.log(descripciones);
    
    if(dificultad == 1){
        descripciones[0].style.display = "block";
        descripciones[1].style.display = "none";
        descripciones[2].style.display = "none";
    }else if(dificultad == 2){
        descripciones[0].style.display = "none";
        descripciones[1].style.display = "block";
        descripciones[2].style.display = "none";
    }else if(dificultad == 3){
        descripciones[0].style.display = "none";
        descripciones[1].style.display = "none";
        descripciones[2].style.display = "block";
    }