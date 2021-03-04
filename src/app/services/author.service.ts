import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url = ''
  baseUrl = 'https://api.quotable.io/authors?'
  pageSkip = 20;
  page = 0;
  pageLimit = 20;
  constructor(private http:HttpClient) { 
    
  }

  getAuthors(){
    sessionStorage.getItem('authorPage') || 0;
    this.page = parseInt(sessionStorage.getItem('authorPage'));
    this.url = this.baseUrl+"limit="+this.pageLimit+"&skip="+this.pageSkip*this.page;
    return this.http.get(this.url);
  }
}
