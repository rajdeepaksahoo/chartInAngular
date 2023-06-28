import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';

const routes: Routes = [
  {path:"",component:ApexChartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
