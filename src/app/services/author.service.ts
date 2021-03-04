import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url = 'https://api.quotable.io/authors?limit=20&skip=20'
  constructor(private http:HttpClient) { 
    
  }

  getAuthors(){
    return this.http.get(this.url);
  }
}
