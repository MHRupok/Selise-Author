import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() authorList:any;
  authorName:any;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.authorList);
    this.authorName = this.authorList;
    
  }

  ngOnChanges(){
    
  }

}
