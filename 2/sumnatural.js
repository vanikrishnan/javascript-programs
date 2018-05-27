function calcsum(){
    var n=document.getElementById("demo").value;
    var sum=0;
    if(n<0)
    alert("negative value");
    for(i=1;i<=n;i++){
sum=sum+i;
    }
    alert("sum of natural nums from 1 to"+   n  + " is " +  sum);
}