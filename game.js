function getresult(userchoice){
            var choice = ["stone","paper","scissor"];
            var computerchoice = choice[Math.floor(Math.random()*3)];
            console.log(computerchoice);
            console.log(userchoice);
            var result = "";
            if(userchoice === computerchoice){
                result = "Draw🤝";
            }
            else if((userchoice === "stone" && computerchoice === "paper")||(userchoice === "paper" && computerchoice === "scissor")||(userchoice === "scissor" && computerchoice === "stone")){
                result = "You lose😢";
            }
            else{
                result = "You win🥇";
            }
            document.getElementById('result').innerHTML = result;
        }