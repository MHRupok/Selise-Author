import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

const routes: Routes = [
  { path: '', component: AuthorListComponent },
  { path: 'favourites', component: FavouriteListComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
