import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { ViewComponent } from './view/view.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AllChartsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule
    
  ]
})
export class ChartsModule { }
