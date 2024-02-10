/* 
node 01_basics/16_functionexpression.js */

 // function expressions =  a way of defining function to value or variable

 const numbers = [ 1,2,3,4,5,6];

 const total = numbers.reduce(function(a,b){
    return a+b;
 });

 const squares = numbers.map(function(element){
   return Math.pow(element,2)
 });
 console.log(total);