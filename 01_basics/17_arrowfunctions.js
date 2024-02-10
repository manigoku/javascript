/* /* node 01_basics/17_arrowfunctions.js 
arrow functions = a concise way of writing a function expression
                   good for simple functions that u use only once 
                   (parameter) => some code */

 const numbers = [1,2,3,4,5,6]        
 const square = numbers.map((element) =>  Math.pow(element,2));
 /* function squares (element){
return Math.pow(element,2);
 }  */
 console.log(square);

const names = [ "mani","speedy","zoey"];
const uppercase = names.forEach((element,index,array) => array[index] = element.toUpperCase());
console.log(uppercase);