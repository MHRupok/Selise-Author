import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() authorList: any;
  @Input() totalCount: any;
  @Output() paginationEvent = new EventEmitter<any>();
  authorName: any;
  page = 0;
  lastpage = 0;
  firstPageBtn = '';
  previousPageBtn = '';
  nextPageBtn = '';
  lastPageBtn = '';
  showpage = 1;
  fav = '';
  favourites = [];

  constructor() {

  }

  ngOnInit(): void {
    this.authorName = this.authorList;
    let temp = localStorage.getItem('favourites');
    try{
      if(temp.length>0){
        this.favourites = JSON.parse(temp);
      }
    }
    catch{

    }   

  }

  ngOnChanges() {
    this.paginationBtnStatus();
    this.ngOnInit();
    this.checkFavourites();
  }
  favourite(id: any) {
    this.fav = id;
    for (let x = 0; x < this.authorName.length; x++) {
      if (this.authorName[x]._id == id) {
        if (this.authorName[x]['favourites'] == 'love') {
          this.authorName[x]['favourites'] = 'none';
          for (let y = 0; y < this.favourites.length; y++) {
            if (this.favourites[y]._id == id) {
              this.favourites.splice(y, 1);
            }
          }
        }
        else {
          this.authorName[x]['favourites'] = 'love';
          this.favourites.push(this.authorName[x]);
        }
      }
    }
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  checkFavourites() {
    try {
      for (let x = 0; x < this.authorName.length; x++) {
        for (let y = 0; y < this.favourites.length; y++) {
          if (this.authorName[x]._id == this.favourites[y]._id) {
            if (this.authorName[x]['favourites'] != 'love') {
              this.authorName[x]['favourites'] = 'love'
              break
            }


          }
        }


      }
      // console.log(this.favourites);

    }
    catch {

    }
  }



  nextPage() {
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = this.page + 1;
    sessionStorage.setItem('authorPage', this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  previousPage() {
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = this.page - 1;
    sessionStorage.setItem('authorPage', this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  lastPage() {
    this.page = this.totalCount / 20;
    this.nextPageBtn = 'disabled';
    sessionStorage.setItem('authorPage', this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  firstPage() {
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = 0;
    sessionStorage.setItem('authorPage', this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  paginationBtnStatus() {
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.showpage = this.page + 1;
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
