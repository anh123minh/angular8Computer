import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { BaseChartDirective, MultiDataSet } from 'ng2-charts';
import { from } from 'rxjs';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-using-report',
  templateUrl: './using-report.component.html',
  styleUrls: ['./using-report.component.css']
})
export class UsingReportComponent implements OnInit {
  
  public fromDate = '';
  public toDate = '';
  public tableData: any[];
  constructor(private _dataService: DataService) {
  }
  //@ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  ngOnInit() {
    this.getComputerStatisticByComputerType();
    this.getComputerStatisticByUsingUnit();
    this.getComputerStatisticByProducerType();
  }

  // refreshChart() {
  //   setTimeout(() => {

  //     if (this.chart && this.chart.chart && this.chart.chart.config) {
  //       this.chart.chart.config.data.labels = this.arrayPieChartLabels;
  //       this.chart.chart.config.data.datasets = this.arrayPieChartData;
  //       this.chart.chart.update();
  //     }
  //   });
  // }

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };
  
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [1,2,3,4,5,6,7,8,9,10];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  getComputerStatisticByComputerType() {
    this._dataService.get('/api/statistic/getComputerStatisticByComputerType')
      .subscribe((response: any[]) => {
        var labels = [];
        var datas = [];
        for (let item of response) {
          labels.push(item.CompterTypeName);
          datas.push(item.Percent);
        }
        this.pieChartLabels = labels;
        this.pieChartData = datas;
        //this.refreshChart();
      });
  }

   // Doughnut
   public doughnutChartLabels: Label[] = [];
   public doughnutChartData: any[] = [1,2,3,4,5,6,7,8,9,10];
   public doughnutChartType: ChartType = 'doughnut';

  getComputerStatisticByUsingUnit() {
    this._dataService.get('/api/statistic/getComputerStatisticByUsingUnit')
      .subscribe((response: any[]) => {
        var labels = [];
        var datas = [];
        for (let item of response) {
          labels.push(item.ComputerName);
          datas.push(item.Percent);
        }
        this.doughnutChartLabels = labels;
        this.doughnutChartData = datas;
        //this.refreshChart();
      });
  }

  // PolarArea
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [1,2,3,5,6,7,8];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  getComputerStatisticByProducerType() {
    this._dataService.get('/api/statistic/getComputerStatisticByProducerType')
      .subscribe((response: any[]) => {
        var labels = [];
        var datas = [];
        for (let item of response) {
          labels.push(item.ProducerTypeName);
          datas.push(item.Percent);
        }
        this.polarAreaChartLabels = labels;
        this.polarAreaChartData = datas;
        //this.refreshChart();
      });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}