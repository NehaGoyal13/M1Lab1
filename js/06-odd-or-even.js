/*eslint-env browser*/

//Odd or Even? 
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.
var i;
for(i=0;i<=15;i++){
    if ((i%2)===0){
        window.document.write(i+" is even<br>");
    }
    else{
        window.document.write(i+" is odd<br>");
    }
}