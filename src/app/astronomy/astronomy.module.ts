import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotdComponent } from './potd/potd.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PotdComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AstronomyModule { }
