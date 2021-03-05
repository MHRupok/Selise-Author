import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sideToggle = "none";

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    if (this.sideToggle == 'none') {
      this.sideToggle = 'nav_open';
    }
    else if (this.sideToggle == 'nav_open') {
      this.sideToggle = 'none'

    }
  }
  closeSideNav() {
    this.sideToggle = 'none'
  }

}
