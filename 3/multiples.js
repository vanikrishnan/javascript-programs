function multiplesum(){
    var n=document.getElementById("demo").value;
    var sum=0;
    var i;
    if(n<0)
    alert("negative value");
    for(i=1;i<n;i++){
if(i%3==0)
sum=sum+i;
    }
    for(i=1;i<n;i++){
if(i%5==0)
sum=sum+i;
    }
    alert("Sum of multiples of 3 and 5 below the range"+   n  + " is " +  sum);
}