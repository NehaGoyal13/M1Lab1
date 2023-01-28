/*eslint-env browser*/

//The “Coin Flip Streak” Game 
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.

var coinFlip;
do{
    coinFlip=Math.round(Math.random());
    if(coinFlip===0){
        window.document.write("Heads<br>");
    }
    else if(coinFlip===1){
        window.document.write("Tails<br>");
    }
    window.document.write("Coin Flip Number was: "+coinFlip+"<br>");
}while(coinFlip!==1);