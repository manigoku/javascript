/* constructor is a special method for defining the methods and 
        properties of a object */

       function person(name,age,isemployed){
          this.age=age,
          this.name=name,
          this.isemployed=isemployed
       }
       const mani = new person("manigoku",25,true);

       console.log(mani.age);

       we can declare the properties and methods of aobject in a function as parameters and assign the them to another objects by creating new objects 