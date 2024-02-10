/* static = keyword that defines the properties or methods that belong to the class itself */

// anything static is owned by class  not objects 

/* class mathutil{
    static PI = 3.14;
    constructor(radius){
      this.radius=radius;
    }
     static getCircumference(radius){
       return 2*this.PI*radius;
    }
    static getArea(radius){
        return this.PI * radius*radius;
    }
    }
    console.log(mathutil.getArea(10)); */

class user {
    static userCount=0;
    constructor(username){
        this.username=username;
        user.userCount++;
    }
    
}
const user1 = new user("mani")
const user2 = new user("speedy")

console.log(user1.username);
console.log(user2.username);
console.log(user.userCount);