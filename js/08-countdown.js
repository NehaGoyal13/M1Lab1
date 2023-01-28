/*eslint-env browser*/

//Countdown
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.

var count,i;
count= parseInt(window.prompt("Enter a number for Countdown"));
for (i=count;i>=0;i-=1){
    window.document.write(i+"<br>");
}