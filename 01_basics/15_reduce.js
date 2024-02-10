/* reduce() this methode is used to reduce the Elements of an array to single value */
//                  it has default parameters accumulator, element
const numbers = [1,2,3,4,5];
const sum = numbers.reduce(sum1);
function sum1 (a,b){
    return a+b;
}
console.log(sum);

const grades = [13,45,67,8,97,564,];
const max = grades.reduce(getmax);
const min = grades.reduce(getmin);
function getmax (a,b){
    return Math.max(a,b);
}
function getmin (a,b){
    return Math.min(a,b);
}
console.log(max);
console.log(min);