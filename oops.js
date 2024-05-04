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

2)

