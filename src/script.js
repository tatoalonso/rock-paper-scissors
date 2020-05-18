// Add listener
button1.addEventListener("click", function(evento){
     const  playerOption = "rock";
     game(playerOption);

});

button2.addEventListener("click", function(evento){
    const playerOption = "paper";
    game(playerOption);

});

button3.addEventListener("click", function(evento){
    const playerOption = "scissors";
    game(playerOption);

});

var game = function game (playerOption){

    machineOption =getRandomMachineOption();
    changeMachineOptionImage(machineOption);
    evaluateWinner (playerOption,machineOption);

}

// Return 1,2 or 3 randomly
function getRandomMachineOption() {
    const randomInteger = Math.floor(Math.random() * (3)) + 1;
    switch (randomInteger) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

//Update the Machine Option Image
function changeMachineOptionImage(machineOption){
    var newImage =""

    switch (machineOption) {
        case "rock":
                newImage = "./img/fist.png";
            break;
        case "paper":
                newImage = "./img/direccion.png";
            break;
        case "scissors":
                 newImage = "./img/gesto.png";
            break;
    }

    document.getElementById("img1").src=newImage;
}

//Evaluate who wins
function evaluateWinner(playerOption,machineOption){

    if (playerOption ==machineOption ){
        return;  
    }

    switch (playerOption) {
        case "rock":
            if(machineOption == "paper"){
                updateScore("machine");
                return;
            }

            updateScore("player");
            break;

        case "paper":
            if(machineOption == "scissors"){
                updateScore("machine");
                return;
            }

            updateScore("player");
            break;
        
         case "scissors":
            if(machineOption == "rock"){
                updateScore("machine");
                return;
            }

            updateScore("player");
            break;   

        
    }
    

}

//update the score
function updateScore(winner){

   
    if (winner=="machine"){
       var score= document.getElementById("score_machine").innerText;
       score=parseInt(score);
       score=score +1
       document.getElementById("score_machine").innerText = parseInt(score )
       return;
    }

    var score= document.getElementById("score_player").innerText;
    score=parseInt(score);
    score=score +1
    document.getElementById("score_player").innerText = parseInt(score )
    return;



}


  
