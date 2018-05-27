function calc(){
    var num=document.getElementById("helo").value;
    var j=1;
    var i;
    if(num<0)
    alert("Negative value");
    else if(num==0)
    alert(" 0! is 1");
    else{
    for(i=1;i<=num;i++){
j=j*i;
    }
    alert("Factorial of a "+ num +" is "+j);
}
}