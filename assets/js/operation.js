var boxNumber1 = $("#number1");
var boxNumber2 = $("#number2");

//Criação das Imagens das Operações

//Soma
var imgAdd = document.createElement("img");
imgAdd.setAttribute("src", "assets/img/add.png");
imgAdd.setAttribute("class", "op");
imgAdd.setAttribute("id", "imgAdd");   



//Subtração
var imgSub = document.createElement("img");
imgSub.setAttribute("src", "assets/img/sub.png");
imgSub.setAttribute("class", "op");
imgSub.setAttribute("id", "imgSub");


//Multiplicação
var imgMult = document.createElement("img");
imgMult.setAttribute("src", "assets/img/mult.png");
imgMult.setAttribute("class", "op");
imgMult.setAttribute("id", "imgMult");

//Divisão
var imgDiv = document.createElement("img");
imgDiv.setAttribute("src", "assets/img/div.png");
imgDiv.setAttribute("class", "op");
imgDiv.setAttribute("id", "imgDiv");

//Inserção dos valores
var boxOp = $("#operation");

var num1 = Math.floor((Math.random() * 10) + 1);
var num2 = Math.floor((Math.random() * 10) + 1);
           
var op = Math.floor((Math.random() * 4) + 1);
var opId = "";

if(op == 1){
    boxOp.append(imgAdd);
} else{
    if(op == 2){
    boxOp.append(imgSub);
    
    } else if (op == 3){
        boxOp.append(imgMult);
        
    } else if (op == 4){
        boxOp.append(imgDiv);

    } 
}
//Validação da Resposta//

//Criação da Imagem

var right = document.createElement("img");
right.setAttribute("class", "status");
right.setAttribute("src", "assets/img/right.png");


var wrong = document.createElement("img");
wrong.setAttribute("class", "status");
wrong.setAttribute("src", "assets/img/wrong.png");

//Criação do Efeito Sonoro

var soundRight = document.createElement("audio");
soundRight.setAttribute("src", "assets/audio/correctAnswer.wav");
soundRight.setAttribute("autoplay", "autoplay");

var soundWrong = document.createElement("audio");
soundWrong.setAttribute("src", "assets/audio/wrongAnswer.mp3");
soundWrong.setAttribute("autoplay", "autoplay");

function validation(result){
    var correctAnswer = 0;
    var status = document.getElementById("boxStatus");
    status.innerHTML = "";

    if(op == 1){
        correctAnswer = num1 + num2;
        if(correctAnswer == result.val()){
            document.body.appendChild(soundRight);
            status.appendChild(right);
            return true;
            
        }else{
            document.body.appendChild(soundWrong);
            status.appendChild(wrong);
            return false;
        }

    } else if(op == 2){
            correctAnswer = num1 - num2;
            if (correctAnswer < 0){
                correctAnswer = correctAnswer * (-1);
            }
            if(correctAnswer == result.val()){
                
                status.appendChild(right);
                return true;
                
            }else{
                status.appendChild(wrong);
                return false;
            }
    
        }else if(op == 3){
            correctAnswer = num1 * num2;
            if(correctAnswer == result.val()){
                status.appendChild(right);
                return true;
                
            }else{
                status.appendChild(wrong);
                return false;
            }
    
        }else if(op == 4){
            correctAnswer = num1 / num2;
            correctAnswer = parseInt(correctAnswer);
            if(correctAnswer == result.val()){
                status.appendChild(right);
                return true;
                
            }else{
                status.appendChild(wrong);
                return false;
            }
    
        } 
    
}
   
    
