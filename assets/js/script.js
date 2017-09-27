$(function(){
    var btnStart = $('#btn');

    btnStart.on("click", function(){

        var startContent = $('#boxContent');  
        startContent.fadeOut(1000);

        setTimeout(function(){
            //Troca de Backgrounds  
            var gameContent = $("#gameContent");
            var backgroundGame = $("#game");
            var backgroundStart = $("#start");
            
            backgroundStart.css("display", "none");
            backgroundGame.css("display", "block");
            gameContent.css("display", "block");
            

            //Cronometro
            var mil = $("#mil").val;
            var boxMil = $("#boxMil");

            var seg = $("#seg").val;
            var boxSeg = $("#boxSeg");

            var mil = $("#min").val;
            var boxMin = $("#boxMin");


            mil = 0;
            seg = 30;
            min = 0;       

            var timer = setInterval(function(){
                mil = mil + 1;
                boxMil.html('<span class="mil" style= "padding: 0 5px">' +mil+ '</span>');
                
                if(mil > 99){
                    mil = 0;
                    seg = seg - 1;
                    boxSeg.html('<span class="seg" style= "padding: 0 5px">' +seg+ '</span>');
                } else if(seg > 60){
                    seg = 0;
                    min = min +1;

                    boxMin.html('<span  class="min" style= "padding: 0 5px">' +min+ '</span>');
                }


            },10);


    },1000);
    }); 




}); 