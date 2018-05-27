function findpair(){
var n=document.getElementById("demo").value;
var arr=document.getElementById("helo").value;;
var j=JSON.parse(arr);
var a=[];
var b;
for(key in j){
    a.push(j[key]);
}
var result=[];
document.write("Pairs are  ");
for(var i=0;i<a.length;i++)
{
    for(var j=1;j<a.length;j++){
        if(a[i]+a[j]==n){
b=a[i]+","+a[j];
result.push(b);
        }
}
}
for(var i=0;i<result.length;i++)
document.write(result[i] + " ");
}