import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2ListComponent } from './feature2-list/feature2-list.component';

@NgModule({
  declarations: [Feature2ListComponent],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
