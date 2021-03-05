import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() authorList: any;
  @Output() favouriteEvent = new EventEmitter<any>();
  authorName: any;
  constructor() {

  }

  ngOnInit(): void {


  }

  ngOnChanges() {

  }
  favourite(val: any) {
    this.favouriteEvent.emit(val);
  }

}
