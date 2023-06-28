import { Component } from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.css']
})
export class AllChartsComponent {
  chart: any;

  constructor() { }
  labels:any[]=[]
  data:any[]=[]
  ngOnInit(): void {
    //Pie1
    this.createPieChart();
     //Bar0
    this.labels=['Label 1', 'Label 2', 'Label 3'];
    this.data=[10, 20, 15];
    this.createBarChart('barChart',this.labels,this.data);

    //Bar1
    this.labels=['Label 1', 'Label 2', 'Label 3'];
    this.data=[12, 30, 5];
    this.createBarChart('barChart1',this.labels,this.data);

    //Bar2
    this.labels=['Label 1', 'Label 2', 'Label 3'];
    this.data=[0, 0, 0];
    this.createBarChart('barChart2',this.labels,this.data);
    
    //Bar3
    this.labels=['Label 1', 'Label 2', 'Label 3'];
    this.data=[12, 30, 5];
    this.createBarChart('barChart3',this.labels,this.data);

      //Bar4
      this.labels=['Label 1', 'Label 2', 'Label 3'];
      this.data=[12, 30, 5];
      this.createBarChart('barChart4',this.labels,this.data);
  }

  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
     // Set the desired dimensions of the canvas element
     ctx.width = 400; // Specify the width
     ctx.height = 200; // Specify the height
    this.chart = new Chart(ctx, {

      
      type: 'pie',
      data: {
        //labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
      }
    });
  }

  createBarChart(id:string,labels:any[],data:any[]): void {
    // Get the canvas element
    const ctx = document.getElementById(id) as HTMLCanvasElement;

    // Set the desired dimensions of the canvas element
    ctx.width = 400; // Specify the width
    ctx.height = 200; // Specify the height

    // Create the chart using Chart.js
    this.chart = new Chart(ctx, {
      type: 'bar', // Set the chart type to bar
      data: {
        labels: labels, // Set the labels for the bars
        datasets: [{
          label: 'Bar Chart', // Set the label for the dataset
          data: data, // Set the data values for the bars
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ], // Set the background color for each bar
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
          ], // Set the border color for each bar
          borderWidth: 1 // Set the border width for each bar
        }]
      },
      options: {
        responsive: true, // Enable responsive resizing
        maintainAspectRatio: false, // Disable maintaining aspect ratio
        scales: {
          x: {
            beginAtZero: true // Start the x-axis at zero
          },
          y: {
            beginAtZero: true // Start the y-axis at zero
          }
        }
      }
    });
  }
}

