/* Map() = method is used to accepts a callback and applies
             that function to each Element of an array
              and return new array   */

 const numbers = [1,2,3,4,5];
 const squares = numbers.map(square);
 const cubes = numbers.map(cube);
  function square (element){
       return Math.pow(element,2);
  }
  function cube (element){
    return Math.pow(element,3);
}
  

  const students = [ "mani","speedy","zoey"];

  const studentsUpper = students.map(upperCase);
  const studentsLower = students.map(lowerCase);
  function upperCase(element){
    return element.toUpperCase();
  }
  function lowerCase(element){
    return element.toLowerCase();
  }
  console.log(studentsLower);