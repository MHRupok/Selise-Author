import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListsComponent } from './author-lists.component';



const routes: Routes = [
{path:'',component:AuthorListsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorListsRoutingModule { }
