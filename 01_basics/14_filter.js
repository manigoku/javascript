/* filter( ) is a method used to filter the elements in array and give new array */

const numbers = [1,2,3,4,5,6];
const even = numbers.filter(evenNums);
const odd = numbers.filter(oddNums)
function evenNums (element){
   return element = element % 2 ===0;
}
function oddNums (element){
    return element = element % 2 !==0;
 }
console.log(odd);

const students = [ "mani","speedy","zoey"];
const short = students.filter(shortwords);
function shortwords(element){
    return  element.length <= 4;
}
const long = students.filter(longwords);
function longwords (element){
    return element.length > 4;
}
console.log(long);
