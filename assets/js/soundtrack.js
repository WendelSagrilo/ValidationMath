var soundOff = $("#soundOff");
var btnNumber = $(".btn-number");
var answer = $("#submit");

var on = "assets/img/soundOn.png";
var off = "assets/img/soundOff.png";
var dir = $("#ImgSoundOff").attr("src");
sound = document.getElementById("ImgSoundOff");

//Intro Sound
intro();
var playIntro = document.getElementById("intro");
playIntro.play();



//BTN START Sound Hover
audioHover();
var audioHover = document.getElementById("audioHover");    
$("#btn").hover(function(){
    dir = $("#ImgSoundOff").attr("src");
    if(dir == off){
        var audioHover = document.getElementById("audioHover");    
        audioHover.play();
    }else{
    }
},function(){
    var audioHover = document.getElementById("audioHover"); 
    audioHover.pause();
    audioHover.currentTime = 0;
    }
);

//audio Start Game
audioGame();
var audioGame = document.getElementById("audioGame");
audioGame.pause();

    
//Click Sound
audioClick();
var playClick = document.getElementById("click");
btnNumber.on("click", function(){
    var dir = $("#ImgSoundOff").attr("src");
    if(dir == off){
        playClick.pause();
        playClick.currentTime = 0;
        
    }else {
    }if(playClick && dir == off){
        playClick.play();
    }else{
    } if(dir == on){
        playClick.pause();
    }

});

//Answer Sound
/*var playAnswer = document.getElementById("answer");
answer.on("click", function(){
    var dir = $("#ImgSoundOff").attr("src");
    if(dir == off){
        playAnswer.pause();
        playAnswer.currentTime = 0;
        
    }else {
    }if(playAnswer && dir == off){

        playAnswer.play();
    }else{
    } if(dir == on){
        playClick.pause();
    }

});*/

//Soundtrack Intro
function intro(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/intro.mp3");
    audio.setAttribute("id", "intro");
    document.body.appendChild(audio);   
}

    //Soundtrack do Botão Start
function audioClick(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/click.mp3");
    audio.setAttribute("id", "click");
    document.body.appendChild(audio);     
} 
    //Soundtrack Hover do Botão Start
function audioHover(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/audioHover.mp3");
    audio.setAttribute("id", "audioHover");
    document.body.appendChild(audio);
}

    //Soundtrack Audio Game
function audioGame(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/game.mp3");
    audio.setAttribute("id", "audioGame");
    audio.setAttribute("loop", "loop");
    document.body.appendChild(audio);
}
/* 
    //Soundtrack da Resposta
function audioAnswer(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/answer.mp3");
    audio.setAttribute("id", "answer");
    document.body.appendChild(audio);
}
*/

    //Soundtrack do Timer
function audioTimer(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/timer.mp3");
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("id", "timerSound");
    document.body.appendChild(audio);
}

//Soundtrack Explosion
function audioExplosion(){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/explosion.mp3");
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("id", "audioExplosion");
    document.body.appendChild(audio);

}

//Soundtrack Answer
function audioAnswer(answer){
    if(answer == true){
        var soundRight = document.createElement("audio");
        soundRight.setAttribute("src", "assets/sound/correctAnswer.wav");
        soundRight.setAttribute("autoplay", "autoplay");
    
    }else {
        var soundWrong = document.createElement("audio");
        soundWrong.setAttribute("src", "assets/sound/wrongAnswer.mp3");
        soundWrong.setAttribute("autoplay", "autoplay");
    }
    

}


    




 