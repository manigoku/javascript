// checked property
const checkBox = document.getElementById("checkBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const paypalButton = document.getElementById("paypalButton");
const mysubmit = document.getElementById("mysubmit");
const myP1 = document.getElementById("myP1");
const myP2 = document.getElementById("myP2");

mysubmit.onclick = function(){

if(checkBox.checked){
    myP1.textContent = `you are subscribed!`;
}
else{
    myP1.textContent = `you are  NOT subscribed!`;
}
if(visaButton.checked){
    myP2.textContent = `you are using visa `;

}
else if(masterCardButton.checked){
    myP2.textContent = `you are using mastercard `;
}
else if(paypalButton.checked){
    myP2.textContent = `you are using paypal `;
}
else{
      myP2.textContent  = "you must select payment type"
}

}