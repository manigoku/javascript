const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*(max - min +1))+min;
let guess;
let attempts;
let running = true;



while (running){
    guess = window.prompt(`enter number between ${min} and ${max}`);
    guess = Number(guess);
 if(isNaN(guess)){
    window.alert(`invalid number,try again!`);
 }
 else if(guess < min || guess >max){
    window.alert("invalid number,try again!");
 }
 else{
    attempts++;
    if(guess < answer){
        window.alert(`its low try again`);
    }
    else if(guess > answer){
        window.alert(`its high try again`);
    }
    else {
        window.alert(`congratulations you have entered correct `);
        running= false;
    }
    
 }
    
}