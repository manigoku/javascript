// array: a variable like structure that can hold more than one values

let fruits = [ "apple","mango","banana"];
 
//fruits.push("coconut");    add a last element
//fruits.pop("coconut");     removes a last element 
// fruits.unshift("goa ") ;   add first element
//fruits.shift("apple")      removes first element



// console.log(fruits.indexOf("apple")); // outpus  index of elemnt with in array

  /* for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
  }

  for(let i=fruits.length - 1;i>=0;i--){
    console.log(fruits[i]);
  }  // reverse the elements in an array with for loop */

 /*  for(let fruit of fruits){
    console.log(fruit);
  } // enhanced for loop  */

  fruits.sort().reverse(); // sort() - arrange the elements in array with alphabetical order
                            //            and followed by reverse() to reverse the order 
  console.log(fruits);