$(function(){
    var btn = $('#btn');
    var game = $("#game");

    btn.on("click", function(){
        var content = $('#boxContent');
        content.fadeOut(1000);

        setTimeout(function(){
        $("body").css("backgroundImage", "url(assets/img/backgroundGame.jpg)");
        $("body").css("backgroundSize", "cover");
        $("body").css("overflow", "hidden");        
        $("body").css("width", "100%");
        game.css("display", "block");
        },1000);

    }); 
}); 