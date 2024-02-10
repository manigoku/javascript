/* /* forEach() = meathod is used to iterate over the elements 
            of an array and apply a specified function(call back)
            to each element 

            array.forEach(callback); */
     
            
/* let numbers = [ 1,2,3,4,5];

function display(element){
    console.log(element);
}

numbers.forEach(display); */

/* let numbers =[1,2,3,4,5]

function double(element,index,array){
    array[index]=element*3;

}

function display(element){
    console.log(element);
}
numbers.forEach(double);
numbers.forEach(display); */


let fruits =["apple","mango","banana"];


fruits.forEach(capitalize);
fruits.forEach(display);


function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}
function capitalize(element,index,array){
    array[index]= element.charAt(0,1).toUpperCase() + element.slice(1);
    
}

function display(element){
    console.log(element)
}
