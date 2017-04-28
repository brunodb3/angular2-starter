import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'ng2-materialize';

import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect first path
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // redirect invalid paths
];

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
