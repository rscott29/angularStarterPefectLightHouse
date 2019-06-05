import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1ListComponent } from './feature1-list/feature1-list.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
