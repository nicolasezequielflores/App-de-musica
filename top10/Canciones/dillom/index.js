var audio = document.getElementById('audio');
var btnPlay = document.getElementById('btnPlay');
var btnPause = document.getElementById('btnPause')
var progressBar = document.querySelector(".progress");


function play() {
    audio.play();
    btnPlay.classList.add('hidden');
    btnPause.classList.add('tamReal')
    btnPause.classList.remove('hidden');

}

function pause(){
    audio.pause();
    btnPause.classList.add('hidden');
    btnPlay.classList.remove('hidden')
}


audio.addEventListener("timeupdate", function() {
    var progress = audio.currentTime / audio.duration;
    progressBar.style.width = progress * 100 + "%";
});


