import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { ListItemComponent } from '../components/shared/list-item/list-item.component';
import { ListItemsComponent } from '../components/shared/list-items/list-items.component';


@NgModule({
  declarations: [AuthorListComponent, FavouriteListComponent, ListItemsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
