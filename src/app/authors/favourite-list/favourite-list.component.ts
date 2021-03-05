import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favouriteList = [];
  noFeed = '';
  constructor() {
    let temp = localStorage.getItem('favourites');
    let t = JSON.parse(temp);
    if (t != null) {
      this.favouriteList = t;
      this.noFeed = '';
    }
    if (this.favouriteList.length == 0) {
      this.noFeed = 'noFeed';

    }

  }

  ngOnInit(): void {


  }
  favourites(val: any) {

    for (let y = 0; y < this.favouriteList.length; y++) {
      if (this.favouriteList[y]._id == val) {
        this.favouriteList.splice(y, 1);
      }
    }
    this.noFeed = 'noFeed';
    localStorage.setItem('favourites', JSON.stringify(this.favouriteList))

  }

}
