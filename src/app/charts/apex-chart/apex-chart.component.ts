import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

export type ChartOptions1 = {
  series: number[];
  chart: ApexChart;
  title: {
    text: string;
  };
};



@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.css']
})

export class ApexChartComponent {
  @ViewChild("chart1") chart1!: ChartComponent;
  @ViewChild("chart2") chart2!: ChartComponent;

  public chartOptions1: ChartOptions;
  //Added
  public chartOptions3: ChartOptions;
  public chartOptions2: ChartOptions1[]=[];

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "Series 1",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      chart: {
        height: 250,
        type: "bar"
      },
      title: {
        text: "Graph 1"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
    
    this.chartOptions2 = [
      {
        series: [44, 55, 13, 43, 22],
        chart: {
          width: 350,
          type: "pie",
        },
        title: {
          text: "Chart 1",
        },
      }
      
    ];
    //Added
    this.chartOptions3 = {
      series: [
        {
          name: "Series 1",
          data: [0, 0, 0, 0, 0, 0, 0]
        }
      ],
      chart: {
        height: 250,
        type: "bar"
      },
      title: {
        text: "Graph 1"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
  }

}

