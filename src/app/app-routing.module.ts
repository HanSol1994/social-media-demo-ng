import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlwaysAuthGuard } from './guards/alwaysAuthGuard.service';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AlwaysAuthGuard],
  },
  {
    path: 'post-list',
    component: PostListComponent,
    canActivate: [AlwaysAuthGuard],
  },
  { path: 'user', component: UserComponent, canActivate: [AlwaysAuthGuard] },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AlwaysAuthGuard],
  },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
