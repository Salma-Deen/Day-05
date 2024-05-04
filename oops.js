OOPS TASK:
1)CLASS - MOVIE:
  The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// CODING:
class Movie
{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
      }
getPG(movies)
{
var out=movies.filter((p1)=>p1.rating==="PG")
return out;
}
}
var mov1=new Movie('ABC','XYZ','PG');
var mov2=new Movie('DEF','XYA','PG10');
var mov3=new Movie('SZS','AXY','PG');
let movies=[mov1,mov2,mov3];
let m1=new Movie("Casino Royale","Eon Studio","PG13")
console.log(m1)
let pg=m1.getPG(movies)
console.log(pg)

// OUTPUT:

Movie { title: 'Casino Royale', studio: 'Eon Studio', rating: 'PG13' }
[
  Movie { title: 'ABC', studio: 'XYZ', rating: 'PG' },
  Movie { title: 'SZS', studio: 'AXY', rating: 'PG' }
]

2)Circle - Class
Convert the UML diagram to Javascript class.

// CODING:
class Circle
{
  constructor(radius,color)
  {
    this.radius=radius;
    this.color=color;
  }
  getRadius()
  {
    return this.radius;
  }
  setRadius(radius)
  {
  return cir.getRadius()
  }
  getColor()
  {
    return this.color;
  }
  setColor(color)
  {
    return cir.getColor()
  }
  toString()
  {
    return `Circle [radius=${this.radius} color=${this.color}]`
  }
  getArea()
  {
    let ar=Math.PI*(this.radius)*(this.radius);
    return ar.toFixed(3);
  }
  getCircumference()
  {
    let circum=2*Math.PI*(this.radius);
    return circum.toFixed(4);
  }

}
var cir=new Circle(1.0,"RED")
console.log(cir.toString());
console.log(cir.getArea());
console.log(cir.getCircumference());
var cir1=new Circle(2.2,"GREEN")
console.log(cir1.toString());
console.log(cir1.getArea());
console.log(cir1.getCircumference());

// OUTPUT:
Circle [radius=1 color=RED]
3.142
6.2832
Circle [radius=2.2 color=GREEN]
15.205
13.8230


3)Write a “person” class to hold all the details.

  // CODING:

  class Person
{
    constructor(firstname,lastname,age,gender,qualification,email,city,mobilenumber)
    {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.gender=gender;
    this.qualification=qualification;
    this.email=email;
    this.city=city;
    this.mobilenumber=mobilenumber;
    }

    getp()
    {
       return `Name: ${this.firstname} ${this.lastname}
       Age:${this.age}
       Gender:${this.gender}
       Qualification:${this.qualification}
       Email:${this.email}
       City:${this.city}
       Mobile Number:${this.mobilenumber}`
             }
}
var p1=new Person('Shanthi','Priya',23,"Female",'MBA','shanthi05@gmail.com','Coimbatore','8769876540')
var p2=new Person('Ravi','Kumar',32,'Male','M.E','rkumar05@gmail.com','Chennai',9764871403)
console.log(p1.getp())
console.log(p2.getp())

// OUTPUT:

Name: Shanthi Priya
       Age:23
       Gender:Female
       Qualification:MBA
       Email:shanthi05@gmail.com
       City:Coimbatore
       Mobile Number:8769876540
Name: Ravi Kumar
       Age:32
       Gender:Male
       Qualification:M.E
       Email:rkumar05@gmail.com
       City:Chennai
       Mobile Number:9764871403

4)write a class to calculate the Uber price.

// CODING:
  class Uber
{
    constructor(car,basefare,km)
    {
     this.car=car;
     this.basefare=basefare;
     this.km=km;
    
    }
   tata()
   {

this.basefare=30;
let tf=(this.basefare)*(this.km);
return `The Total fare for the car ${this.car} and for ${this.km} km is ${tf}`

   }
   sedan()
   {
      this.basefare=35;
      let tf=(this.basefare)*(this.km);
      return `The Total fare for the car ${this.car} and for ${this.km} km is ${tf}`
        
   }
   mahindra()
   {
      this.basefare=40;
      let tf=(this.basefare)*(this.km);
      return `The Total fare for the car ${this.car} and for ${this.km} km is ${tf}`
          
   }
}


var ub=new Uber("tata",(this.basefare),4)
console.log(ub.tata())
var ub1=new Uber("sedan",(this.basefare),4)
console.log(ub1.sedan())
var ub2=new Uber("sedan",(this.basefare),4)
console.log(ub2.mahindra())

// OUTPUT:
The Total fare for the car tata and for 4 km is 120
The Total fare for the car sedan and for 4 km is 140
The Total fare for the car sedan and for 4 km is 160



