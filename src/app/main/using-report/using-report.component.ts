import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { BaseChartDirective } from 'ng2-charts';
import { from } from 'rxjs';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-using-report',
  templateUrl: './using-report.component.html',
  styleUrls: ['./using-report.component.css']
})
export class UsingReportComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];//[pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public fromDate = '';
  public toDate = '';
  public tableData: any[];
  constructor(private _dataService: DataService) {
  }
  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  ngOnInit() {
    //this.loadRevenues();
  }

  // lineChart
  // public lineChartData: Array<any> = [
  //   { data: [], label: 'Lợi nhuận' },
  //   { data: [], label: 'Doanh thu' }
  // ];
  // public lineChartLabels: Array<any> = [];

  // public lineChartOptions: any = {
  //   responsive: true
  // };
  // public lineChartColors: Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';


  // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  
  // refreshChart() {
  //   setTimeout(() => {

  //     if (this.chart && this.chart.chart && this.chart.chart.config) {
  //       this.chart.chart.config.data.labels = this.lineChartLabels;
  //       this.chart.chart.config.data.datasets = this.lineChartData;
  //       this.chart.chart.update();
  //     }
  //   });
  // }
  // loadRevenues() {
  //   this._dataService.get('/api/statistic/getrevenue?fromDate=' + this.fromDate + '&toDate=' + this.toDate)
  //     .subscribe((response: any[]) => {
  //       this.lineChartLabels = [];
  //       this.lineChartData = [];
  //       var revenue = { data: [], label: 'Doanh thu' };
  //       var benefit = { data: [], label: 'Lợi nhuận' };
  //       this.tableData = [];
  //       for (let item of response) {
  //         revenue.data.push(item.Benefit);
  //         benefit.data.push(item.Revenues);
  //         this.lineChartLabels.push(moment(item.Date).format('DD/MM/YYYY'));
  //         //push to table
  //         this.tableData = response;

  //       }
  //       this.lineChartData.push(revenue);
  //       this.lineChartData.push(benefit);

  //       this.refreshChart();
  //     });

  // }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

}