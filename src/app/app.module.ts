import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardCollComponent } from './card-home/card-coll/card-coll.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardHomeComponent,
    CardCollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
