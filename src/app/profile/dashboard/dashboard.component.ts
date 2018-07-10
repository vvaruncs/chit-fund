import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Long-term', 'Short-term', 'Medium-term'];
  public doughnutChartData: number[] = [33, 33, 33];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    legend: { position: 'bottom' }
  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: { position: 'bottom' }
  };

  public barChartLabels: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [3300, 3400, 3500, 3600, 3700, 3800, 4000], label: 'Transaction Amount' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
