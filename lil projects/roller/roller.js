const mybtn =document.getElementById("mybtn");
const myH2 = document.getElementById("myH2");
const min = 1;
const max = 6;
let result;
mybtn.onclick = function(){
result = Math.floor(Math.random()*max + min);
document.getElementById("mylabel").textContent = result;
}