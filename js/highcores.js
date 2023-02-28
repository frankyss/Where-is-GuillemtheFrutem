//Obtener y establecer el nickname en el local storage

function getNickName() {
    var nickname = localStorage.getItem("name");
    if (nickname == null) {
        nickname = prompt("Introduce tu nombre");
        localStorage.setItem("name", nickname);
    }
    return nickname;
}

//Obtener y establecer el mejor nivel de partida en los ultimos 30 dias en el local storage

function getBestLevel() {
    var bestLevel = localStorage.getItem("bestLevel");
    if (bestLevel == null) {
        bestLevel = 0;
        localStorage.setItem("bestLevel", bestLevel);
    }
    return bestLevel;
}

//crear un script para obtener los mejores 10 jugadores

function getHighScores() {
    var scores = localStorage.getItem("highScores");
    console.log(scores);
    if (scores == null) {
        scores = [];
    } else {
        scores = JSON.parse(scores);
    }
    return scores;
}

function showHighScores() {

    var scores = getHighScores();
    var html = "<table>";
    html += "<tr><th>Nombre</th><th>Nivel</th></tr>";
    for (var i = 0; i < scores.length; i++) {
        html += "<tr><td>" + scores[i].name + "</td><td>" + scores[i].level + "</td></tr>";
    }
    html += "</table>";
    document.getElementById("chapter-1").innerHTML = html;
}