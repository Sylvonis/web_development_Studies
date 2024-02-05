
var button = document.getElementById("lyrics_button");
var lyrics = document.getElementById("lyrics_cafuné");

function changeVis_Lyrics(){
    if(lyrics.getAttribute("style") == "visibility: hidden"){
        lyrics.setAttribute("style", "visibility: visible");
    } else{
        lyrics.setAttribute("style", "visibility: hidden");
    }

}


button.onclick = changeVis_Lyrics;










