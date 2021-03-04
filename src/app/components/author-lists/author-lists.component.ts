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
  startPage = 1;
  pagination = 10;

  constructor(private author: AuthorService) {
    sessionStorage.getItem('authorPage') || '0';
    this.author.getAuthors().subscribe((authors: any) => {
      this.apiData = authors;
      this.authorList = authors['results'];
      console.log("constructor");
      console.log(this.authorList);
      
      
    })

  }
  ngOnInit(): void {
    console.log("on init api call");
    
    this.apiCall();
    console.log(this.authorList);
  }

  apiCall() {
    this.author.getAuthors().subscribe((authors) => {
      this.apiData = authors;
      this.authorList = authors['results'];
    })
  }

  goToPage(val: any) {
    this.author.page = val;
    sessionStorage.setItem('authorPage', val)
    this.apiCall()
  }

}
