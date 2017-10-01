$(function(){
    var btnStart = $('#btn');
    var gameContent = $("#gameContent");
    var backgroundGame = $("#game");
    var backgroundStart = $("#start");
    var timer = $("#timer");
    var btnNumber = $(".btn-number");
    var result = $("#result");
        

    //Soundtracks Effects   

    //Soundtrack do Botão Start
    function audioClick(){
        $("<audio></audio>").attr({
            src: 'assets/sound/click.mp3',
            autoplay: 'autoplay',
        });
    }

    //Soundtrack Hover do Botão Start
    function audioHover(){
        $("<audio></audio>").attr({
            src: 'assets/sound/tick.mp3',
            autoplay: 'autoplay',
        });
    }

    //Soundtrack Transition
    function audioGame(){
        
        $("<audio></audio>").attr({
            src: 'assets/sound/game.mp3',
            autoplay: 'autoplay',
            loop: "loop",
        });
        
    }

    //Soundtrack da Resposta
    function audioAnswer(){
        $("<audio></audio>").attr({
            src: 'assets/sound/answer.mp3',
            autoplay: 'autoplay',
        });
    }
    
    
    //Soundtrack do Timer
    function audioTimer(){
        $("<audio></audio>").attr({
            src: 'assets/sound/timer.mp3',
            autoplay: 'autoplay',
            id: 'audioTimer',
        });      
    }



    //Efeito Hover do Botão Start
    btnStart.hover(function(){
        audioHover();
    }, function(){

    });

    //Transition Fade

    function transitionFadeIn(remove){
        backgroundStart.fadeIn(2000);
    }
    transitionFadeIn()

    function transitionFadeOut(){
        backgroundStart.fadeOut(2000);

    }


    //Inicio do Jogo
    btnStart.on("click", function(){
        btnStart.css("display", "none");
        $("#introSound").remove();
        transitionFadeOut();
        audioGame();

        

        setTimeout(function(){
            //Troca de Backgrounds  
            backgroundGame.css("display", "block");
            gameContent.css("display", "block");
            

            //Cronometro
            var mil = $("#mil").val;
            var boxMil = $("#boxMil");

            var seg = $("#seg").val;
            var boxSeg = $("#boxSeg");

            var min = $("#min").val;
            var boxMin = $("#boxMin");


            mil = 99;
            seg = 30;
            min = 0;       

            var play = setInterval(function(){
                
                if(seg < 15 && seg > 5){
                    boxMil.css("color", "yellow");                    
                    boxSeg.css("color", "yellow");
                    boxMin.css("color", "yellow");
                    
                }else if(seg < 5){
                    
                    boxMil.css("color", "red");                    
                    boxSeg.css("color", "red");
                    boxMin.css("color", "red");

                }
                
                mil = mil + 1;
               
                boxMin.html('<span  class="min">0' +min+ ':</span>');
                boxSeg.html('<span class="seg">' +seg+ ':</span>');
                boxMil.html('<span class="mil" >' +mil+ '</span>');


                if(mil > 99){
                    mil = 0;
                    seg = seg - 1;
                    audioTimer();
                    //Precisa melhorar o desempenho!!!!
                } else if(seg > 60){
                    seg = 0;
                    min = min +1;
                        } else if(seg == 0 && mil ==99){
                    mil = 0;
                    boxMil.html('<span class="min" >0' +mil+ '</span>');
                    clearInterval(play); 
                }

                if(seg <10){

                    boxSeg.html('<span class="seg">0' +seg+ ':</span>');
                } 
                

            },10);
        },3000);


        //Botões dos Numeros
        

        btnNumber.hover(function(){
            audioHover();
        }, function(){
            
        });

        btnNumber.on("click", function(){

            audioClick();


            numberOld = result.val();

            var number = this.value;
            result.val(numberOld+number);
            
        });
        
        //Apagar Ultimo registro (Backspace)
        var back = $("#backspace");
        back.on("click",function(){
        erase = $("#result").val();
        $("#result").val(erase.slice(0, -1));
        });
        
        //Apagar Todo Registro (CLEAR)
        var clear = $("#clear");
        clear.on("click", function(){
            $("#result").val("");
        });

    }); 

    var answer = $("#submit");
    answer.on("click", function(){
        audioAnswer();
    });
}); 