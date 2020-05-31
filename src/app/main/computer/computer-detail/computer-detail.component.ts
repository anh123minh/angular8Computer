import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { UtilityService } from '../../../core/services/utility.service';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {
  public computerDetails: any[];
  public entity: any;
  public totalAmount: number;
  public computerId: number;
  public baseFolder: string = environment.BASE_API;
  constructor(private utilityService: UtilityService,
    private _dataService: DataService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.computerId = params['id'];
      this.loadComputerDetail(this.computerId);
    });

  }

  public goBack() {
    this.utilityService.navigate('/main/computer/computer/index');
  }

  public loadComputerDetail(id: number) {
    this._dataService.get('/api/computer/detail/' + id.toString()).subscribe((response: any) => {
      this.entity = response;
    }, error => this._dataService.handleError(error));
  }
}