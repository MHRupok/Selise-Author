import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListsRoutingModule } from './author-lists-routing.module';
import { AuthorListsComponent } from './author-lists.component';
import { ListItemComponent } from '../shared/list-item/list-item.component';


@NgModule({
  declarations: [AuthorListsComponent, ListItemComponent],
  imports: [
    CommonModule,
    AuthorListsRoutingModule
    
  ]
})
export class AuthorListsModule { }
