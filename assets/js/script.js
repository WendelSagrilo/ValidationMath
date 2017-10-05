$(function(){
    var btnStart = $('#btn');
    var gameContent = $("#gameContent");
    var backgroundGame = $("#game");
    var backgroundStart = $("#start");
    var timer = $("#timer");
    var result = $("#result");
    var btnNumber = $(".btn-number");

    //Icon Soundtrack 
    $("#ImgSoundOff").on("click", function(){
        var on = "assets/img/soundOn.png";
        var off = "assets/img/soundOff.png";
        var dir = $("#ImgSoundOff").attr("src");
        console.log($("#soundOff"));

        if(dir == on){
            $("#ImgSoundOff").attr("src", off);
            audioClick(true);
            audioHover(true);
            audioGame(true);
            audioAnswer(true);
            audioTimer(true);
        } else{
            $("#ImgSoundOff").attr("src", on);
        }
        
    });


    //Transition Fade
    function transitionFadeIn(remove){
        backgroundStart.fadeIn(2000);
    }
    transitionFadeIn();

    function transitionFadeOut(){
        backgroundStart.fadeOut(2000);
    }


    //Inicio do Jogo
    btnStart.on("click", function(){
        btnStart.css("display", "none");
        transitionFadeOut();
        var soundOff = $("#ImgSoundOff");
        soundOff.attr("class", "sound-off-2");
        $("#game").prepend(soundOff);

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
        

        

        btnNumber.on("click", function(){


            var numberOld = result.val();

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

    
}); 