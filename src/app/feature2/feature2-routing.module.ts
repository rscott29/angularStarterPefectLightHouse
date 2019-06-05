import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature2ListComponent } from './feature2-list/feature2-list.component';

const routes: Routes = [
  {
    path: '',
    component: Feature2ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
