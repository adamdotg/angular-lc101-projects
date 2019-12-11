import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These are some of my favorite photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://dyn1.heritagestatic.com/lf?set=path%5B1%2F9%2F2%2F7%2F4%2F19274155%5D%2Csizedata%5B850x600%5D&call=url%5Bfile%3Aproduct.chain%5D';
  image3 = 'https://media1.fdncms.com/orlando/imager/u/original/5910115/gal_the_last_dragon.jpg';

  constructor() { }

  ngOnInit() {
  }

}