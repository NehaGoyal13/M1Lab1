/*eslint-env browser*/

//Larger or Smaller? 
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.

var x= parseInt(window.prompt("Enter the integer1: "));
var y= parseInt(window.prompt("Enter the integer2: "));

if (x>y){
    window.document.write(x+" is larger.<br>");
}
else if (y>x){
    window.document.write(y+" is larger.<br>");
}
else if(x===y){
    window.document.write("Integer1 and integer2 are equal");
}



