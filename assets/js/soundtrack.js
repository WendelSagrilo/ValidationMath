var soundOff = $("#soundOff");
var mute = false;
var btnNumber = $(".btn-number");

//Intro Sound
intro(false);
var playIntro = document.getElementById("intro");
playIntro.play();


//Click Sound
audioClick(false);
var playClick = document.getElementById("click");
btnNumber.on("click", function(){
    if(playClick){
    playClick.pause();
    playClick.currentTime = 0;
    }
    playClick.play();
});


//Soundtrack Intro
function intro(mute){
    if(mute == false){
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/sound/intro.mp3");
    audio.setAttribute("id", "intro");
    document.body.appendChild(audio);
    
} else{
    var pause = document.getElementById("intro").pause();
 
}
}
    //Soundtrack do Botão Start
    function audioClick(mute){
        if(mute == false){
            var audio = document.createElement("audio");
            audio.setAttribute("src", "assets/sound/click.mp3");
            audio.setAttribute("id", "click");
            document.body.appendChild(audio);
            
        } else{
            var pause = document.getElementById("click").pause();
         
        }
    }
    //Soundtrack Hover do Botão Start
    function audioHover(){
        if(mute == false){
            var audio = document.createElement("audio");
            audio.setAttribute("src", "assets/sound/audioHover.mp3");
            audio.setAttribute("id", "audioHover");
            document.body.appendChild(audio);
            
        } else{
            var pause = document.getElementById("audioHover").pause();
         
        }
    }/*
     btnNumber.hover(function(){
        audioHover();
        }, function(){
            });
*/
    //Soundtrack Transition
    function audioGame(){
        $("<audio></audio>").attr({
            src: 'assets/sound/game.mp3',
            autoplay: 'autoplay',
            loop: "loop",
            class: 'Sound',
        });
        
    }

    //Soundtrack da Resposta
    function audioAnswer(){
        $("<audio></audio>").attr({
            src: 'assets/sound/answer.mp3',
            autoplay: 'autoplay',
            class: 'Sound',
        });
    }

    var answer = $("#submit");
        answer.on("click", function(){
            audioAnswer();
    });


    //Soundtrack do Timer
    function audioTimer(){
        $("<audio></audio>").attr({
            src: 'assets/sound/timer.mp3',
            autoplay: 'autoplay',
            class: 'Sound',
        });   
        
    }

    




 