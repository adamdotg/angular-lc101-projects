import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Do stuff', 'And other stuff'];
   finishedChores = ['Walk the dog', 'Do laundry', 'Wire up dryer outlet', 'Other thing', 'That other thing'];
   trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';

   constructor() { }

   ngOnInit() {
   }

}
