import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  apiData:any;
  authorList:any;
  constructor(private author: AuthorService) {
    sessionStorage.getItem('authorPage') || '0';
    this.author.getAuthors().subscribe((authors: any) => {
      this.apiData = authors;
      this.authorList = authors['results'];
      console.log("constructor fav");
      console.log(this.authorList);
      
      
    })

  }

  ngOnInit(): void {
  }

}
