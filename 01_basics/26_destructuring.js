// Destructuring = extracts the vlues from arrays and objects 
//                 then assign them to variables in convenient way
//                 []= to perform array destructuring
//                  {}= to perform object destructuring

/////////example 1///////////
// swap the values of two variables//

let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

////////example 2////////
// swap two elements in an array

const colors = [ "red","green","blue"];
[colors[0],colors[2]]=[colors[2],colors[0]];
console.log(colors);

////// example 3 //////
// assign array elemets to variables 
const colors1 = [ "red","green","blue","black","pink"];
const [x,y,z,...w] = colors1;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

//////example 4/////////
// extract the values from objects
const person1={
    firstname:"mani",
    lastname:"speedy",
    age:25,
    job:'baker'
};
const person2={
    firstname:"manim",
    lastname:"speedys",
    age:26,

    
};
const{firstname,lastname,age,job="unemployed"}=person2
console.log(job);