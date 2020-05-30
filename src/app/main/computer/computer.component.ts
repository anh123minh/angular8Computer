import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';

import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @ViewChild('addEditModal', { static: false }) public addEditModal: ModalDirective;

  @ViewChild(TreeComponent, { static: false }) private treeProductCategory: TreeComponent;
  public pageIndex: number = 1;
  public pageSize: number = 5;
  public pageDisplay: number = 10;
  public totalRow: number;
  public computerTypeId?: number;
  public deparmentTypeId?: number;
  public producerTypeId?: number;
  public filter: string = '';
  public entity: any;
  public computers: any[];
  public computerTypeSelectList: any[];
  public deparmentTypeSelectList: any[];
  public producerTypeSelectList: any[];
  constructor(private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.getlistpaging();
    this.getComputerTypeSelectList();
    this.getDeparmenTypeSelectList();
    this.getProducerTypeSelectList();
  }

  //Load data
  public getlistpaging() {
    this._dataService.get(`/api/computer/getlistpaging?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}
    &computerTypeId=${this.computerTypeId}&deparmentTypeId=${this.deparmentTypeId}&producerTypeId=${this.producerTypeId}&filter=${this.filter}`)
      .subscribe((response: any) => {
        this.computers = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }

  //Get Select List ComputerType
  public getComputerTypeSelectList() {
    this._dataService.get('/api/computerType/selectlist').subscribe((respone: any) => {
      this.computerTypeSelectList = respone;
    });
  }

  //Get Select List DeparmenType
  public getDeparmenTypeSelectList() {
    this._dataService.get('/api/deparmentType/selectlist').subscribe((respone: any) => {
      this.deparmentTypeSelectList = respone;
    });
  }

  //Get Select List ProducerType
  public getProducerTypeSelectList() {
    this._dataService.get('/api/producerType/selectlist').subscribe((respone: any) => {
      this.producerTypeSelectList = respone;
    });
  }

  //Reset filter
  public reset() {
    this.computerTypeId = null;
    this.deparmentTypeId = null;
    this.producerTypeId = null;
    this.filter = "";
    this.getlistpaging();
  }

  //Show add form
  public showAddModal() {
    this.entity = {};
    this.addEditModal.show();
  }

  //Show edit form
  public showEditModal(id: string) {
    this._dataService.get('/api/computer/detail/' + id)
      .subscribe((response: any) => {
        this.entity = response;
        this.addEditModal.show();
      }, error => this._dataService.handleError(error));
  }

  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/computer/delete', 'id', id)
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
      if (this.entity.ComputerId == undefined) {
        this._dataService.post('/api/computer/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.getlistpaging();
            this.addEditModal.hide();
            this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/computer/update', JSON.stringify(this.entity))
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
