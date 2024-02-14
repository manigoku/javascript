/* // getter = a special method that makes a property readable
// setter = a special mehod makes a property more writable

getters and setters allows you to set the object properties via methods

class Rectangle{
    constructor(w,h){
      this.w = w;
      this.h = h;
    }
    set w(newwidth){
        if(newwidth>0){
      this._newwidth=newwidth;
        }
        else{
            console.error(`w must be a positive number`);
        }
    }
    set h(newheight){
        if(newheight>0){
      this._newheight=newheight;
        }
        else{
            console.error(`h must be a positive number`);
        }
    }
    get w(){
        return this._newwidth;
    }
    get h(){
        return this._newheight;
    }
    
}
const rectangle = new Rectangle(3,4);
console.log(rectangle.w);
console.log(rectangle.h);
 */