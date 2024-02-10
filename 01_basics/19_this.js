/* this keyword is a reference to the object */
// object depend on the immediate conext

const person1={
    fullname:"mani",
    favfood : "dosa",
    sayhello : function(){ console.log(`hi i am ${this.fullname}`)},
    eat : function (){
        console.log(`i love eating ${this.favfood}`);
    }
}
person1.sayhello();
person1.eat();