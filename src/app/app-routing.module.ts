import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotdComponent } from './astronomy/potd/potd.component';

const routes: Routes = [
  {path: 'potd', component: PotdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
