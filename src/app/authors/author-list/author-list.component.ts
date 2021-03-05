import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnChanges {
  authorList: any;
  page = 0;
  showpage = 1;
  totalCount = 0;
  firstPageBtn = '';
  previousPageBtn = '';
  nextPageBtn = '';
  lastPageBtn = '';
  favouriteList = [];
  endPage = 0;
  preloader = 'load';
  constructor(private author: AuthorService) {

    this.callApi();
    let temp = localStorage.getItem('favourites');
    let t = JSON.parse(temp);
    if(t != null){
      this.favouriteList = t;
      
    }
    
    
  }

  ngOnChanges(): void {
        
  }

  ngOnInit(): void {
    this.paginationBtnStatus();

  }
  callApi() {
    this.author.getAuthors().subscribe((authors) => {
      this.authorList = authors['results'];
      this.totalCount = authors['totalCount'];
      this.endPage = Math.floor(this.totalCount/this.author.pageLimit);
      this.checkFavourites();
      this.preloader = 'none';
    })
  }

  favourites(val: any) {
    for (let x = 0; x < this.authorList.length; x++) {
      if (this.authorList[x]._id == val) {
        if (this.authorList[x]['favourites'] == 'love') {
          this.authorList[x]['favourites'] = 'none';
          for (let y = 0; y < this.favouriteList.length; y++) {
            if (this.favouriteList[y]._id == val) {
              this.favouriteList.splice(y, 1);
            }
          }
        }
        else {
          this.authorList[x]['favourites'] = 'love';
          this.favouriteList.push(this.authorList[x]);
        }
      }
    }
    localStorage.setItem('favourites', JSON.stringify(this.favouriteList))

  }

  checkFavourites() {
    
    try {
      for (let x = 0; x < this.authorList.length; x++) {
        for (let y = 0; y < this.favouriteList.length; y++) {
          if (this.authorList[x]._id == this.favouriteList[y]._id) {
            if (this.authorList[x]['favourites'] != 'love') {
              this.authorList[x]['favourites'] = 'love'
              break
            }
          }
        }
      }

    }
    catch {

    }
  }

  nextPage() {
    if (this.page < 34) {
      this.page = this.page + 1;
    }
    this.author.page = this.page;
    this.showpage = this.page + 1;
    this.callApi();
    this.paginationBtnStatus();
  }

  previousPage() {
    if (this.page > 0) {
      this.page = this.page - 1;
    }
    this.showpage = this.page + 1;
    this.author.page = this.page;
    this.callApi();
    this.paginationBtnStatus();
  }

  lastPage() {
    this.page = Math.floor(this.totalCount / this.author.pageLimit);
    this.showpage = this.page + 1;
    this.author.page = this.page;
    this.callApi();
    this.paginationBtnStatus();
  }

  firstPage() {
    this.page = 0;
    this.showpage = this.page + 1;
    this.author.page = this.page;
    this.callApi();
    this.paginationBtnStatus();
  }

  paginationBtnStatus() {

    if (this.page == 34) {
      this.lastPageBtn = 'disabled';
      this.nextPageBtn = 'disabled';
      this.previousPageBtn = '';
      this.firstPageBtn = '';

    }
    else if (this.page == 0) {
      this.firstPageBtn = 'disabled';
      this.previousPageBtn = 'disabled';
      this.nextPageBtn = '';
      this.lastPageBtn = '';

    }
    else {
      this.previousPageBtn = '';
      this.firstPageBtn = '';
      this.nextPageBtn = '';
      this.lastPageBtn = '';


    }

  }



}
