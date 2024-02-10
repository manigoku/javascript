/* classes (ES6 feature) provide a more structured and cleaner way to work with objects 
compare to traditional constructor functions 

ex static,encapsulation,inheritence */

class person {
    constructor(name,age,isemployed){
        this.name=name,
        this.age=age,
        this.isemployed=isemployed
    }

displayperson(){
    console.log(`the name is ${this.name} and age is ${this.age}`);
}
}
const person1 = new person("mani",24,true);
person1.displayperson();
