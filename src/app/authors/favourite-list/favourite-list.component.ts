import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favouriteList = [];
  noFeed = '';
  endPage = 0;
  temp = []
  page = 0;
  constructor(private author:AuthorService) {
    let temp = localStorage.getItem('favourites');
    let t = JSON.parse(temp);
    if (t != null) {
      this.favouriteList = t;
      this.noFeed = '';
      this.calculatePages();
           
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
    if (this.favouriteList.length == 0) {
      this.noFeed = 'noFeed';

    }
    localStorage.setItem('favourites', JSON.stringify(this.favouriteList))

  }

  calculatePages(){
        
    let page = Math.floor(this.favouriteList.length / this.author.pageLimit);
    if(page<1){
      this.endPage = 0;
    } 
    else{
      this.endPage = page;
      
    }
    this.temp = this.favouriteList;
    console.log(this.temp);
    
   
  }
  getPage(val:any){
    this.page = val + 1;
    let last = this.page * this.author.pageLimit;
    let start = last - this.author.pageLimit;
    for(let x = start;x<last;x++){
      this.temp.push(this.favouriteList[x])
    }
    
    
  }

}
