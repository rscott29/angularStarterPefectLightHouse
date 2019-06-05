import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1ListComponent } from './feature1-list/feature1-list.component';

@NgModule({
  declarations: [Feature1ListComponent],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
