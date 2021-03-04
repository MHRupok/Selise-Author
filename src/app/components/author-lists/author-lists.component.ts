import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-lists',
  templateUrl: './author-lists.component.html',
  styleUrls: ['./author-lists.component.css']
})
export class AuthorListsComponent implements OnInit {

  authorList: any;
  apiData: any;
  apiHit :any;
  constructor(private author: AuthorService) {
    this.author.getAuthors().subscribe((authors) => {
      this.apiData = authors;
      this.authorList = authors['results'];      
      this.apiHit = 'api'
    })
    
  }
  ngOnInit(): void {
   
  }

}
