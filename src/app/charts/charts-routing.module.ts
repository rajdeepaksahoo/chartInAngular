import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
