const mytext = document.getElementById("mytext");
const tocel = document.getElementById("tocel");
const tofah = document.getElementById("tofah");
const myp = document.getElementById("myp");
let temp;

function convert(){
    if(tocel.checked){

      temp = mytext.value;
      temp = temp * 9/5 + 32;
         myp.textContent = temp +"f"
    }
    else if(tofah.checked){
        temp = mytext.value;
        temp = (temp-32)*(5/9);
        myp.textContent = temp +"c"
    }
    else{
       myp.textContent = (`please select unit`);
    }
}