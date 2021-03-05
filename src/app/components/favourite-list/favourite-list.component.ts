import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  apiData: any;
  authorList: any;
  favourites = []
  totalCount = 0;
  constructor() {
    let temp = localStorage.getItem('favourites') || "0";
    this.authorList = JSON.parse(temp);
  }

  ngOnInit(): void {
  }

  goToPage(val: any) {
    
    sessionStorage.setItem('authorPage', val)
    this.authorList = this.favourites;
  }

}
