// counter programconst decbtn = document.getElementById("decbtn");
 const resbtn = document.getElementById("resbtn");
 const incbtn = document.getElementById("incbtn");
 const countLabel = document.getElementById("countLabel");
 let count = 0;

 decbtn.onclick = function(){
    count--;
    countLabel.textContent=count;
 }
 incbtn.onclick = function(){
    count++;
    countLabel.textContent=count;
 }
 resbtn.onclick = function(){
    count=0;
    countLabel.textContent=count;
 }