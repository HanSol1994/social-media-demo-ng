import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { BackEndService } from './services/backend.service';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterComponent } from './toaster/toaster.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentsComponent } from './comments/comments.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AlwaysAuthGuard } from './guards/alwaysAuthGuard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    UserComponent,
    ToasterComponent,
    AddPostComponent,
    CommentsComponent,
    SignupComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [BackEndService, NgbDropdown, AlwaysAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
