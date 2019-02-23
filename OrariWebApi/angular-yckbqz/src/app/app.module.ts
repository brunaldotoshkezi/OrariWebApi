import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './OrariMainPage/home.component';
import { OrariComponent } from './RregulloOrarin/orari.component';
import { Routes } from '@angular/router';
import {DemoMaterialModule} from '../material-modul';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [
    {
      path: 'orari',
      component: OrariComponent,
    }]},
    {
      path: 'orari',
      component: OrariComponent,
    },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ]    
@NgModule({
  imports:      [ BrowserModule,DemoMaterialModule, FormsModule,ReactiveFormsModule,HttpClientModule,MatNativeDateModule,BrowserAnimationsModule, RouterModule.forRoot(
    appRoutes
  )],
  entryComponents: [HomeComponent,OrariComponent],
  declarations: [ AppComponent, HomeComponent, OrariComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);