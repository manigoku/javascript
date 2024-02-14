/* // inheritance = allows a class to inherit the properties and methods
//                 of a exixting class

class Animals{
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
    console.log(`this ${this.name} is sleeping`);
     }
    fly(){
    console.log(`this ${this.name} is flying`);
    };
}
class Rabbit extends Animals{
    name = "rabbit";
}
class Fish extends Animals{
    name = "fish";
}
class Hawk extends Animals{
    name = "hawk";
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.eat();
fish.sleep();
hawk.fly(); */

