import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadHostbComponent } from './bad-hostb.component';
import { GoodHostbComponent } from './good-hostb.component';

@NgModule({
  declarations: [
    AppComponent,
    BadHostbComponent,
    GoodHostbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
