$(function(){
    var btnStart = $('#btn');
    var gameContent = $("#gameContent");
    var backgroundGame = $("#game");
    var backgroundStart = $("#start");
    var timer = $("#timer");
    var btnNumber = $(".btn-number");
    var result = $("#result");
        

    //Soundtracks Effects   

    //Efeito Click do Botão Start
    function audioClick(){
        $("<audio></audio>").attr({
            src: 'assets/sound/click.mp3',
            autoplay: 'autoplay',
        });
    }

    //Efeito Hover do Botão Start
    function audioHover(){
        $("<audio></audio>").attr({
            src: 'assets/sound/tick.mp3',
            autoplay: 'autoplay',
        });
    }

    //Efeito Transition
    function audioTransition(){
        $("<audio></audio>").attr({
            src: 'assets/sound/transition.wav',
            autoplay: 'autoplay',
        });
    }



    //Efeito Hover do Botão Start
    btnStart.hover(function(){
        audioHover();
    }, function(){

    });

    //Transition
    function transitionFade(){
        backgroundStart.fadeOut(50);
    }

    function transitionUp(){
        var img = $("#boxTransition");

        img.slideUp(600);
    }


    

    //Inicio do Jogo
    btnStart.on("click", function(){
        btnStart.css("display", "none");
        $("#transition").css("display", "block");
        audioTransition();
        transitionFade();
        transitionUp();
        backgroundStart.css("display", "none");
        var startContent = $('#boxContent');  
        
     


        setTimeout(function(){
            $("#boxTransition").remove();
        },600);


        setTimeout(function(){
            //Troca de Backgrounds  
           
            
            backgroundStart.css("display", "none");
            backgroundGame.css("display", "block");
            gameContent.css("display", "block");
            

            //Cronometro
            var mil = $("#mil").val;
            var boxMil = $("#boxMil");

            var seg = $("#seg").val;
            var boxSeg = $("#boxSeg");

            var min = $("#min").val;
            var boxMin = $("#boxMin");


            mil = 0;
            seg = 29;
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
                boxMil.html('<span class="mil" style= "padding: 0 5px">' +mil+ '</span>');

                if(mil > 99){
                    mil = 0;
                    seg = seg - 1;
                    boxSeg.html('<span class="seg" style= "padding: 0 5px">' +seg+ '&nbsp:</span>');
                } else if(seg > 60){
                    seg = 0;
                    min = min +1;

                    boxMin.html('<span  class="min" style= "padding: 0 5px">' +min+ '</span>');
                } else if(seg == 0 && mil ==99){
                    mil = 0;
                    boxMil.html('<span class="mil" style= "padding: 0 5px">0' +mil+ '</span>');
                    clearInterval(play); 
                }

                if(seg <10){

                    boxSeg.html('<span class="seg" style= "padding: 0 5px">0' +seg+ '&nbsp :</span>');
                } 
                

            },10);
        },600);


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
        
        //Apagar Ultimo registro
        var back = $("#backspace");
        back.on("click",function(){
        erase = $("#result").val();
        $("#result").val(erase.slice(0, -1));
        });
        
        //Apagar Todo Registro
        var clear = $("#clear");
        clear.on("click", function(){
            $("#result").val("");
        });

    }); 
}); 