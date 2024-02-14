// sort()= a method is used to sort the elements of an array in palce,
//          sorts elements in lexicogrhapichal order 

const fruits = ['apple','mango','banana','orange'];
const fruits1 = fruits.sort();
console.log(fruits1);

const numbers = [1,10,2,3,4,5,6,7,8,9];
const numbers2 = numbers.sort((a,b)=>a-b);
console.log(numbers2);