

function showStars(num){
    var stars = document.getElementById('starsProfile').children;
    numRound = Math.round(num);
    var txt = "";
    for(i = 0; i< numRound ; i++){s
        stars[i].style.color = "rgb(255, 235, 59)";
        txt = txt + stars[i].nodeName +" " +i;
    }
}

