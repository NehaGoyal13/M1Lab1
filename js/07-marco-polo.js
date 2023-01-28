/*eslint-env browser*/


//Marco! Polo! 
//For Checking this files result, you have to uncomment the designated linked Script tag in .html file and have to comment other script tags.
var x;
for(x=1;x<=100;x+=1){
    if(x%3===0){
        window.document.write("Marco!<br>");
    }
    else if(x%5===0){
        window.document.write("Polo!<br>");
    }
    else if(x%3===0 && x%5===0){
        window.document.write("Marco!Polo!<br>");
    }
    else{
        window.document.write(x+"<br>");
    }
}