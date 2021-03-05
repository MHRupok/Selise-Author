import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListsComponent } from './components/author-lists/author-lists.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';


const routes: Routes = [
  { path: '', loadChildren: async () => import('./components/author-lists/author-lists.module').then(m => m.AuthorListsModule) },
  {path:'favourites',component:FavouriteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
