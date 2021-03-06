$(function(){
    var btnStart = $('#btn');
    var gameContent = $("#gameContent");
    var backgroundGame = $("#game");
    var backgroundStart = $("#start");
    var keySound = true;
    var result = $("#result");
    result.val("");

    //Soundtrack// 
    $("#ImgSoundOff").on("click", function(){
        var on = "assets/img/soundOn.png";
        var off = "assets/img/soundOff.png";
        var dir = $("#ImgSoundOff").attr("src");

    //Ação de MUDO/SOM
        if(dir == on){
            //SOM
            $("#ImgSoundOff").attr("src", off);

            if(keySound == true){
                playIntro.play();
            }else{
                audioGame.play();
            }
            
        }else if(dir == off){
            //MUDO
            $("#ImgSoundOff").attr("src", on);
            playIntro.pause();
            audioGame.pause();     
        }
    });      


    //Transition Fade
    function transitionFadeIn(){
        backgroundStart.fadeIn(2000);
    }
    transitionFadeIn();

    function transitionFadeOut(){
        backgroundStart.fadeOut(2000);
    }


    //Inicio do Jogo
    btnStart.on("click", function(){
        btnStart.css("display", "none");
        var divSoundOff = $("#soundOff");
        divSoundOff.css("display", "none");
        transitionFadeOut();
        keySound = false;
        playIntro.pause();
        if(dir == off){
            audioGame.play();
        }

        //Criação do icone de som da 2ª tela
        var soundOff = $("#ImgSoundOff");
        soundOff.attr("class", "sound-off-2");
        $("#game").prepend(soundOff);

        //Troca de Backgrounds  
        backgroundGame.css("display", "block");
        gameContent.css("display", "block");


        //Cronometro
        var cent = $("#cent");
        var boxCent = $("#boxCent");

        var seg = $("#seg");
        var boxSeg = $("#boxSeg");

        var min = $("#min");
        var boxMin = $("#boxMin");


        cent = 99;
        seg = 22;
        boxCent.html('<span class="cent">' +cent+ '</span>');
        boxSeg.html('<span class="seg">' +seg+ ':</span>');
        min = 0;
         //Cronometro
        setTimeout(function(){
            var timer = setInterval(function(){ 

                cent = cent -1;
                boxCent.html('<span class="cent">' +cent+ '</span>');

                //Game Over
                if(min <= 0 && seg <= 0 && cent <= 0){
                    backgroundGame.css("display", "none");
                    $("#gameOver").css("display", "block");

                    if(dir == off){
                        audioGame.pause();
                        audioExplosion();
                    }else if(dir == on){

                    }
                    boxCent.html('<span class="min" >00</span>');
                    boxSeg.html('<span class="seg">00:</span>');
                    boxMin.html('<span class="min" >00:</span>');
                    clearInterval(timer);
                    return;
                }
                
                if(cent == 0){
                    cent = 99;
                    seg = seg - 1;
                    boxSeg.html('<span class="seg">' +seg+ ':</span>');
                    if(seg == 0 && min > 0){
                        seg = 59;
                        min = min - 1;
                        boxMin.html('<span  class="min">0' +min+ ':</span>');
                    } else if(seg > 60){
                        seg = seg - 60;
                    }
                    dir = $("#ImgSoundOff").attr("src");
                    if(dir == off){
                        audioTimer();
                    }
                } 

                //Troca de cor do cronometro

                if(seg > 15){
                    boxCent.css("color", "#2AE32A");                    
                    boxSeg.css("color", "#2AE32A");
                    boxMin.css("color", "#2AE32A");
                }

                if(min == 0 && seg < 15 && seg > 5){
                    boxCent.css("color", "yellow");                    
                    boxSeg.css("color", "yellow");
                    boxMin.css("color", "yellow");
                            
                }else if(min == 0 && seg < 5){
                    boxCent.css("color", "red");                    
                    boxSeg.css("color", "red");
                    boxMin.css("color", "red");

                }

            
                //Ajustes de Interface Cronometro
                if(min > 9){
                    boxMin.html('<span  class="min">' +min+ ':</span>');
                }else{
                    boxMin.html('<span  class="min">0' +min+ ':</span>');
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
    
        //Inserção de vírgula
        var btnDec = $("#decimal");
        btnDec.on("click",function(){
        var dec = ",";
        dec = parseInt("dec");
        number = result.val();
        result.val(number+dec);

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

        //Validação da Resposta
        Insert(true);
        var number1 = $("#number1").html();
        var number2 = $("#number2").html();
        var countRight = 0;
        var countWrong = 0;
        //Botão Answer 
        var answer = $("#submit");
        answer.on("click", function(){
            var status = document.getElementById("boxStatus");
            status.innerHTML = "";

            var check = validation(result.val());

            //Certa Resposta
            if (check == true){
                status.appendChild(imgRight);
                countRight = countRight +1;
                $("#scoreCorrect").html(countRight);

                if(dir == off){
                    audioAnswer(true);
                }
                $("#number1").html("");
                $("#number2").html("");
                $("#operation").html("");
                result.val("");

                Insert(true);
                //Acrescimo de segundos 
                if(countRight > 10 && countRight <=20){
                    seg = seg+6;   
                } else if(countRight >20 ){
                    seg = seg+10;
                } else{
                    seg = seg +3;
                }
                
            //Resposta Errada
            }else{
                countWrong = countWrong +1;
                $("#scoreWrong").html(countWrong);
                result.val("");
                
                if(dir == off){
                    audioAnswer(false);
                }
                seg = seg-3;
                
            }
        });

    }); 
}); 

