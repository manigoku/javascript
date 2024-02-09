/* // spread opreator :- ... allows an iterable such as an array  or string 
                      // to be expanded into separate elements
                      // 9unpacks the elements

let numbers =[1,2,3,4,5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(min); */

let fruits = [ "apple","mango","banana"];
let veggies = ["hbac","hdbcka","jkcab"];
let foods = [...fruits,...veggies,"has","hjsdbc"]; // can be used to unpack all elements in 
                                                       //arrays nd create one single array


console.log(foods);