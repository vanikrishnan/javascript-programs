function findrepeat(){
    var a=document.getElementById("demo").value;
    var k=JSON.parse(a);
    var arr=[];
    var result=[];
    for(key in k)
    {
        arr.push(k[key]);
    }
    document.write("Repeated Elements"+ " ");
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
result.push(arr[i]);
}
}
}
for(var i=0;i<result.length;i++)
if(i==result.length-1)
document.write(result[i]);
else
document.write(result[i]+ ",");
    }