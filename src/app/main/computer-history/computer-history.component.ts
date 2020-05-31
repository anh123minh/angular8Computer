import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';

import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TreeComponent } from 'angular-tree-component';
import { SystemConstants } from '../../core/common/system.constants';

@Component({
  selector: 'app-computer-history',
  templateUrl: './computer-history.component.html',
  styleUrls: ['./computer-history.component.css']
})
export class ComputerHistoryComponent implements OnInit {
  @ViewChild('addEditModal', { static: false }) public addEditModal: ModalDirective;

  @ViewChild(TreeComponent, { static: false }) private treeProductCategory: TreeComponent;
  public pageIndex: number = 1;
  public pageSize: number = 5;
  public pageDisplay: number = 10;
  public totalRow: number;
  public deparmentTypeId?: number;
  public filter: string = '';
  public entity: any;
  public computerUsingHistories: any[];
  public deparmentTypeSelectList: any[];
  public appUserSelectList: any[];
  public computerSelectList: any[];
   
  public reservationDataStartTime: { StarTime?: Date };
  public reservationDataEndTime: { EndTime?: Date };

  constructor(private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.getlistpaging();
    this.getDeparmenTypeSelectList();  
  }

  //Load data
  public getlistpaging() {
    this._dataService.get(`/api/computerUsingHistory/getlistpaging?pageIndex=${this.pageIndex}
    &pageSize=${this.pageSize}&deparmentTypeId=${this.deparmentTypeId}&filter=${this.filter.trim()}`)
      .subscribe((response: any) => {
        this.computerUsingHistories = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }

  //Get Select List Computer
  public getComputerSelectList() {
    this._dataService.get('/api/computer/selectlist').subscribe((respone: any) => {
      this.computerSelectList = respone;
    });
  }

  //Get Select List DeparmenType
  public getDeparmenTypeSelectList() {
    this._dataService.get('/api/deparmentType/selectlist').subscribe((respone: any) => {
      this.deparmentTypeSelectList = respone;
    });
  }

  //Get Select List User
  public getAppUserSelectList() {
    this._dataService.get('/api/appUser/selectlist').subscribe((respone: any) => {
      this.appUserSelectList = respone;
    });
  }

  //Reset filter
  public reset() {
    this.deparmentTypeId = null;
    this.filter = "";
    this.getlistpaging();
  }

  //Show add form
  public showAddModal() {
    this.getComputerSelectList();
    this.getAppUserSelectList();
    this.entity = {};
    var today = new Date(Date.now());
    this.reservationDataStartTime = { StarTime: today};
    this.reservationDataEndTime = { EndTime: today};
    this.addEditModal.show();
  }

  //Show edit form
  public showEditModal(id: string) {
    this.getComputerSelectList();
    this._dataService.get('/api/computerUsingHistory/detail/' + id)
      .subscribe((response: any) => {
        this.entity = response;
        var objStartTime = {StarTime: this.entity.StartTime};
        var objEndTime = { EndTime: this.entity.EndTime};
        var tempStartTime = JSON.parse(JSON.stringify(objStartTime));
        var tempEndTime = JSON.parse(JSON.stringify(objEndTime));
        this.reservationDataStartTime = this.parseObjectDates(tempStartTime);
        this.reservationDataEndTime = this.parseObjectDates(tempEndTime);
        this.addEditModal.show();
      }, error => this._dataService.handleError(error));
  }

  public parseObjectDates(target: any): any {
    const result = Object.assign({}, target);

    Object.keys(result)
        .forEach(key => {
            const date = new Date(result[key]);
            if (!isNaN(date.getTime())) {
                result[key] = date;
            }
            console.log(date);
        });

        console.log(result);
    return result;
}

  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/computerUsingHistory/delete', 'id', id)
      .subscribe((response: any) => {
        this.notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
        this.getlistpaging();
      }, error => this._dataService.handleError(error));
  }

  //Click button delete turn on confirm
  public deleteItem(id: string) {
    this.notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteConfirm(id));
  }

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      if (this.entity.ComputerUsingHistoryId == undefined) {
        this.entity.StartTime = this.reservationDataStartTime.StarTime;
        this.entity.EndTime = this.reservationDataEndTime.EndTime;
        console.log(localStorage.getItem(SystemConstants.CURRENT_USER));
        this._dataService.post('/api/computerUsingHistory/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.getlistpaging();
            this.addEditModal.hide();
            this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
      else {
        this.entity.StartTime = this.reservationDataStartTime.StarTime;
        this.entity.EndTime = this.reservationDataEndTime.EndTime;
        this._dataService.put('/api/computerUsingHistory/update', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.getlistpaging();
            this.addEditModal.hide();
            this.notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
    }
  }

  //Change page
  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.getlistpaging();
  }
}
