function calculate(){
var n=document.getElementById("demo").value;
if(n<0)
alert("Negative Value");
var j=0;
for(i=1;i<=n;i++)
{
    if(Math.pow(2,i)>=n){
j=i-1;
break;
    }
}
if(j<=n)
document.write("Closest Power of 2 for " +  n  + " is " + j);
else
alert("Result is greater than given number");
}