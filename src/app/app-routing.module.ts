import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'post-list', component: PostListComponent },
  // { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
