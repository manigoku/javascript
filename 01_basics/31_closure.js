/* /* // closure = is a function defined inside of another function,
//            this innner function has access to the variables
 //           and scope of outer function,
 
 //    allow for private variables and state maintanace used frequently in js framework

 function outer (){
    let message = " hello "
     function inner (){
       console.log(message);
     }
     return inner();
 }
 outer(); */

/*  function createCounter(){
 
 let count = 0; 

  function increment (){
    count++;
    console.log(`the count increased bt ${count}`);
  }
  function getcount(){
    
    console.log(`count is ${count}`);
    
  }
  return {increment,getcount};
}

   const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.getcount();
 */ 

function gameScore(){
    let score = 0;

    function increaseScore(points){
      score += points;
      console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
      score -= points;
      console.log(`-${points}pts`);
    }
    function getscore (){
      console.log(`score is ${score}`); 
    }
    return {increaseScore,decreaseScore,getscore};
}
const person1 = gameScore();

  person1.increaseScore(5);
  person1.increaseScore(6);
  person1.increaseScore(2);
  person1.decreaseScore(3);
  person1.decreaseScore(3);
  person1.decreaseScore(1);
  person1.getscore();
