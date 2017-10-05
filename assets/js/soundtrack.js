 $(function(){

    var soundOff = $("#soundOff");


    //Soundtrack Intro
    function intro(muted){
      var audio =   $("<audio></audio>").attr({
            src: 'assets/sound/entrada.mp3',
            autoplay: 'autoplay',
            id: 'introJs',
        });

        if(muted == true){
          audio.muted;
        }
    }

    intro();

    function pauseSound(audio){
        console.log(audio);
    }


    //Soundtrack do Botão Start
    function audioClick(muted){
        if(muted == true){
            return;
        }

        $("<audio></audio>").attr({
            src: 'assets/sound/click.mp3',
            autoplay: 'autoplay',
        });
    }
    var btnNumber = $(".btn-number");
    btnNumber.on("click", function(){
            audioClick();
        });

    //Soundtrack Hover do Botão Start
    function audioHover(muted){
        $("<audio></audio>").attr({
            src: 'assets/sound/tick.mp3',
            autoplay: 'autoplay',
            id: "teste1",
        });

         if(muted == true){
          
        }
    }
     btnNumber.hover(function(){
        audioHover();
        }, function(){
            });

    //Soundtrack Transition
    function audioGame(muted){
        $("<audio></audio>").attr({
            src: 'assets/sound/game.mp3',
            autoplay: 'autoplay',
            loop: "loop",
            id: "teste",
        });

        if(muted == true){
            $("#teste").pause();
        }
        
    }

    //Soundtrack da Resposta
    function audioAnswer(muted){
        $("<audio></audio>").attr({
            src: 'assets/sound/answer.mp3',
            autoplay: 'autoplay',
        });
    }

    var answer = $("#submit");
        answer.on("click", function(){
            audioAnswer();
    });


    //Soundtrack do Timer
    function audioTimer(muted){
        $("<audio></audio>").attr({
            src: 'assets/sound/timer.mp3',
            autoplay: 'autoplay',
            id: 'audioTimer',
        });      
    }

    
 });



 