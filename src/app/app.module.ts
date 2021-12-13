import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentPostPipePipe } from './pipe/current-post-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CurrentPostPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
