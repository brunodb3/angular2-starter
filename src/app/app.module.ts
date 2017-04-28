import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'ng2-materialize';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
