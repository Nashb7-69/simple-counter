const dec=document.getElementById("dec");
const incr=document.getElementById("incr");
const res=document.getElementById("res");
const count=document.getElementById("cont");
let cont=0;

incr.onclick=function(){
    cont++;
    count.textContent=cont;
}
dec.onclick=function(){
    cont--;
    count.textContent=cont;
}
res.onclick=function(){
    cont=0;
    count.textContent=cont;
}
