import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() authorList:any;
  @Output() paginationEvent = new EventEmitter<any>();
  authorName:any;
  page = 0;
  firstPageBtn = '';
  previousPageBtn = '';
  nextPageBtn = '';
  lastPageBtn = '';



  constructor() {
    
   }

  ngOnInit(): void {
    this.authorName = this.authorList;
    
  }

  ngOnChanges(){
    console.log("====>");
    console.log(this.authorList);
    this.paginationBtnStatus();
    this.ngOnInit();
    
    
    
  }

  nextPage(){
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = this.page + 1;
    sessionStorage.setItem('authorPage',this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  previousPage(){
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = this.page - 1;
    sessionStorage.setItem('authorPage',this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  lastPage(){
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = 34;
    this.nextPageBtn = 'disabled';
    sessionStorage.setItem('authorPage',this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  firstPage(){
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
    this.page = 0;
    sessionStorage.setItem('authorPage',this.page.toString())
    this.paginationEvent.emit(this.page);
  }

  paginationBtnStatus(){
    this.page = parseInt(sessionStorage.getItem('authorPage') || '0');
     
    if(this.page == 34){
      this.lastPageBtn = 'disabled';
      this.nextPageBtn = 'disabled';
      this.previousPageBtn = '';
      this.firstPageBtn = '';
      
    }
    else if(this.page == 0){
      this.firstPageBtn = 'disabled';
      this.previousPageBtn = 'disabled';
      this.nextPageBtn = '';
      this.lastPageBtn = '';
      
    }
    else{
      this.previousPageBtn = '';
      this.firstPageBtn = '';
      this.nextPageBtn = '';
      this.lastPageBtn = '';
      
      
    }
    
  }

}
