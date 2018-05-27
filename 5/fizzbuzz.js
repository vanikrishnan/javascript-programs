function calcfizzbuzz(){
    var n=document.getElementById("demo").value;
    var sum="";
    var i;
    if(n<0)
    alert("negative value");
    for(i=1;i<=n;i++){
if(i%3==0 && i%5==0){
    if(i==n)
sum=sum+"FizzBuzz";
else
sum=sum+"FizzBuzz"+",";
}
else if(i%3==0){
    if(i==n)
sum=sum+"Fizz";
else
sum=sum+"Fizz"+",";
}
else if(i%5==0){
    if(i==n)
sum=sum+"Buzz";
else
sum=sum+"Buzz"+",";

}
else{
    if(i==n)
sum=sum+i;
else
sum=sum+i+",";
}
    }
    alert(sum);
}