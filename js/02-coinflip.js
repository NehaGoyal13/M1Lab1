/*eslint-env browser*/

//The “Coin Flip” Game 
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.

var coinFlip=Math.floor(Math.random() * 100);
var choice=window.prompt("select your choice(Heads or Tails)");

if((coinFlip < 50)){
        if(choice==="Heads"){
            window.alert("The flip was heads and you chose heads...you win!");
        }
        else{
            window.alert("The flip was heads but you chose tails...you lose!");
        }
}

else if(coinFlip > 50){
        if(choice==="Tails"){
        window.alert("The flip was tails and you chose tails...you win!");
        }
        else{
        window.alert("The flip was tails but you chose heads...you lose!");
        }
}

window.document.write("Coin Flip Number was: "+coinFlip);