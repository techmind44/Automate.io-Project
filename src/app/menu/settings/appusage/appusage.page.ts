import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-appusage',
  templateUrl: './appusage.page.html',
  styleUrls: ['./appusage.page.scss'],
})
export class AppusagePage implements OnInit {
  @ViewChild('freqchart', {static:false}) canvas;

  chart: any;

  notesamount: number;
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  //creates the chart with its details and data
  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Activity in the app',
          data: [2, 3, 5, 8, 4, 9, 1],
          backgroundColor: [
            'rgb(80, 81, 79)',
            'rgb(242, 95, 92)',
            'rgb(255, 224, 102)',
            'rgb(1, 22, 39)',
            'rgb(205, 247, 246)',
            'rgb(84, 13, 110)',
            'rgb(12, 206, 107)'
          ],
          borderWidth: 2,
          hoverBorderColor: [
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)'
          ]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  //when new data is input into the chart
  addData() {
    let red = Math.random() * 256;
    let green = Math.random() * 256;
    let blue = Math.random() * 256;
    let todaysdate = this.today.toLocaleDateString();

    this.chart.data.datasets[0].data.push(this.notesamount);
    this.chart.data.labels.push(todaysdate);
    this.chart.data.datasets[0].backgroundColor.push(`rgb(${red}, ${green}, ${blue})`);
    this.chart.data.datasets[0].hoverBorderColor.push('rgb(255, 255, 255)');

    this.chart.update();
  }

}
