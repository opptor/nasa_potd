import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotdComponent } from './potd/potd.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PotdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AstronomyModule { }
