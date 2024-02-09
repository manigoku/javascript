/* /* rest operator :- (...)allows  a function work with a variable
                 number  of arguments by binding them into array 

                 spread= expands array into separate Elements 
                 rest = bundles separate elemets into an array */

/* let x="mani";
let y = "speedy";
let z = "zoey";
let u = "mirae";

function myFamily(...family){
    console.log(family); 

}

myFamily(x,y,u,z); */

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
 const total = sum(1,2,3,4,5);
console.log(total);


function avg (...numbers){
    let result= 0;
    for(let number of numbers ){
        result +=number/numbers.length;
    }
    return result;

}
const tavg = avg(10,20,30,40);
console.log(tavg);