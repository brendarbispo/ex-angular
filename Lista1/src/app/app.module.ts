import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex5Component } from './views/ex5/ex5.component';
import { Ex6Component } from './views/ex6/ex6.component';
import { Ex7Component } from './views/ex7/ex7.component';
import { Ex8Component } from './views/ex8/ex8.component';
import { Ex9Component } from './views/ex9/ex9.component';
import { Ex10Component } from './views/ex10/ex10.component';
import { Ex11Component } from './views/ex11/ex11.component';
import { Ex12Component } from './views/ex12/ex12.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component,
    Ex11Component,
    Ex12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
