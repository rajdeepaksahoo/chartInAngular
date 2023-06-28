import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { MatCardModule } from '@angular/material/card';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AllChartsComponent,
    ApexChartComponent,
    
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule,
    NgApexchartsModule

  ]
})
export class ChartsModule { }
