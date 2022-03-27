import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { BackEndService } from './services/backend.service';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, PostListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [BackEndService],
  bootstrap: [AppComponent],
})
export class AppModule {}
