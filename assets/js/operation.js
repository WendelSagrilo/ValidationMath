//Criação das Imagens das Operações  e Status de Validação

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

//Resposta Certa
var imgRight = document.createElement("img");
imgRight.setAttribute("class", "status");
imgRight.setAttribute("src", "assets/img/right.png");

//Resposta Errada
var imgWrong = document.createElement("img");
imgWrong.setAttribute("class", "status");
imgWrong.setAttribute("src", "assets/img/wrong.png");



//Lógica da validação da resposta
var result = 0;
var boxNumber1 = $("#number1");
var boxNumber2 = $("#number2");
var boxOp = $("#operation");
var input = true;


function validation(result){
    var add = $("#imgAdd");
    var sub = $("#imgSub");
    var mult = $("#imgMult");
    var div = $("#imgDiv");
    var number1 = boxNumber1.html();
    number1 = parseInt(number1);
    var number2 = boxNumber2.html();
    number2 = parseInt(number2);    
    var correctAnswer = 0;
    

    if(add.length > 0){
        correctAnswer = (number1 + number2);
        if(result == correctAnswer){
        return true;
    }}else { 
        if(sub.length > 0){
            correctAnswer = number1 - number2;
            if(correctAnswer < 0){
                correctAnswer = correctAnswer * (-1);
            }if(result == correctAnswer){
                return true;
            }
        } else if(mult.length > 0){
            correctAnswer = number1 * number2;
            if(result == correctAnswer){
                return true;
            }   
            } else if(div.length > 0){
                correctAnswer = number1 / number2;
                correctAnswer = parseInt(correctAnswer);
                if(result == correctAnswer){
                    return true;
                }
            }
        return false;
    }
}


//Inserção dos valores
function Insert(input){
    if(input){
        var num1 = 0;
        var num2 = 0;
                
        var op = Math.floor((Math.random() * 4) + 1);
        var countRight = $("#scoreCorrect").html();
        if(op == 1){
            if(countRight >= 10 && countRight <=20){
                var backgroundGame = $("#gameContent").css("background", "rgba(0,0,250,.4)");
           
                num1 = Math.floor((Math.random() * 99) + 11);
                num2 = Math.floor((Math.random() * 12) + 11);
                boxNumber1.append(num1);
                boxNumber2.append(num2);
                boxOp.append(imgAdd);
                return;
    
            } else if(countRight >= 20){
            backgroundGame = $("#gameContent").css("background", "rgba(250,0,0,.4)");
              
            num1 = Math.floor((Math.random() * 123) + 99);
            num2 = Math.floor((Math.random() * 12) + 1);
            boxNumber1.append(num1);
            boxNumber2.append(num2);
            boxOp.append(imgAdd);
            return;
        }
        num1 = Math.floor((Math.random() * 10) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
        boxNumber1.append(num1);
        boxNumber2.append(num2);
        boxOp.append(imgSub);    
    } 
        
        else{
            console.log(op);
            if(op == 2){
                if(countRight >= 10 && countRight <=20){
                    backgroundGame = $("#gameContent").css("background", "rgba(0,0,250,.4)");
                    num1 = Math.floor((Math.random() * 99) + 11);
                    num2 = Math.floor((Math.random() * 12) + 11);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgSub);
                    return;
        
                } else if(countRight >= 20){  
                    backgroundGame = $("#gameContent").css("background", "rgba(250,0,0,.4)");
                    num1 = Math.floor((Math.random() * 123) + 99);
                    num2 = Math.floor((Math.random() * 12) + 1);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgSub);
                    return;    
                }
                    
                num1 = Math.floor((Math.random() * 10) + 1);
                num2 = Math.floor((Math.random() * 10) + 1);
                boxNumber1.append(num1);
                boxNumber2.append(num2);
                boxOp.append(imgSub);
                
            } else if (op == 3){
                if(countRight >= 10 && countRight <=20){
                    backgroundGame = $("#gameContent").css("background", "rgba(0,0,250,.4)");
                    num1 = Math.floor((Math.random() * 99) + 11);
                    num2 = Math.floor((Math.random() * 9) + 11);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgMult);
                    return;
                } else if(countRight >= 20){   
                    backgroundGame = $("#gameContent").css("background", "rgba(250,0,0,.4)");  
                    num1 = Math.floor((Math.random() * 123) + 99);
                    num2 = Math.floor((Math.random() * 50) + 1);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgMult);
                    return;
                }

                num1 = Math.floor((Math.random() * 10) + 1);
                num2 = Math.floor((Math.random() * 10) + 1);
                boxNumber1.append(num1);
                boxNumber2.append(num2);
                boxOp.append(imgMult);
                
            } else if (op == 4){
                if(countRight >= 10 && countRight <=20){
                    backgroundGame = $("#gameContent").css("background", "rgba(0,0,250,.4)");
                    num1 = Math.floor((Math.random() * 99) + 11);
                    num2 = Math.floor((Math.random() * 9) + 11);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgDiv);
                    return;
        
                } else if(countRight >= 20){    
                    backgroundGame = $("#gameContent").css("background", "rgba(250,0,0,.4)");
                    num1 = Math.floor((Math.random() * 123) + 99);
                    num2 = Math.floor((Math.random() * 50) + 1);
                    boxNumber1.append(num1);
                    boxNumber2.append(num2);
                    boxOp.append(imgDiv);
                } 
                num1 = Math.floor((Math.random() * 10) + 1);
                num2 = Math.floor((Math.random() * 10) + 1);
                boxNumber1.append(num1);
                boxNumber2.append(num2);
                boxOp.append(imgDiv);

            } 
        }
    }
}
