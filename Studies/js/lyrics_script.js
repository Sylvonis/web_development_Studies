
var LyricsButton = document.getElementById("lyrics_button");
var lyrics = document.getElementById("lyrics_cafuné");

var soundcloud_player = document.getElementById("soundcloud_frame");
var soundcloudButton = document.getElementById("soundcloud_button");

var youtube_player = document.getElementById("youtube_frame");
var youtubeButton = document.getElementById("youtube_button");

function objectVisbility(object){
    if(object.getAttribute("style") == "visibility: hidden"){
        object.setAttribute("style", "visibility: visible");
    } else{
        object.setAttribute("style", "visibility: hidden");
    }
}


function changeVis_Lyrics(){
    objectVisbility(lyrics)
}


function changeVis_Soundcloud(){
    objectVisbility(soundcloud_player)
    if(soundcloud_player.getAttribute("height") == "0"){
        soundcloud_player.setAttribute("height", "166");
    } else{
        soundcloud_player.setAttribute("height", "0");
    }
}


function changeVis_Youtube(){
    objectVisbility(youtube_player)
}


LyricsButton.onclick = changeVis_Lyrics;
soundcloudButton.onclick = changeVis_Soundcloud;
youtubeButton.onclick = changeVis_Youtube;









