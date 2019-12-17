import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
      if(newTitle === ""){
         alert("You must enter a movie title");
      }
      else if(!this.movies.includes(newTitle)){
         this.movies.push(newTitle);
      }
   }
   movieCheck(newTitle: string){
      if(this.movies.includes(newTitle)){
         return true;         
      }
   }
}