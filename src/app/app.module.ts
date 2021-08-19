import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstronomyModule } from './astronomy/astronomy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AstronomyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
