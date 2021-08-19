import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstronomyModule } from './astronomy/astronomy.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    MatButtonModule,

    AstronomyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
