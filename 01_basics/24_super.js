// super is a keyword used in classes to call the constructor
//          or  to access the properties and methods of a parent class 

class Animals{
constructor(name,age){
    this.name=name;
    this.age=age;
}
    move(speed){
        console.log(`this ${this.name} is moving with the speed of ${speed}km/hr`)
    }

}
class Rabbit extends Animals{
constructor(name,age,runspeed){
    super(name,age);
    this.runspeed=runspeed;
    
}
run(){
    console.log(`this ${this.name} is running at speed ${this.runspeed}`);
    super.move(this.runspeed);
}
}
class Fish extends Animals{
    constructor(name,age,swimspeed){
        super(name,age);
        this.runspeed=swimspeed;
        
    }
    swim(){
        console.log(`this ${this.name} is running at speed ${this.swimspeed}`);
        super.move(this.swimspeed);
    }
}
class Hawk extends Animals{
    constructor(name,age,flyspeed){
        super(name,age);
        this.runspeed=flyspeed;
    
     }
     fly(){
        console.log(`this ${this.name} is running at speed ${this.flyspeed}`);
        super.move(this.flyspeed);
    }
}
const rabbit= new Rabbit("mani",2,12);
const fish= new Fish("speedy",3,25);
const hawk= new Hawk("zoey",4,50);

console.log(fish.name);
rabbit.run();