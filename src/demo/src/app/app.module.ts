import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSectionsModule } from 'ng-sections';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./layout/layout.component";
import {Page2Component} from "./page2/page2.component";
import {Page1Component} from "./page1/page1.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
