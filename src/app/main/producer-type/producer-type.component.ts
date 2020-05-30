import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';

import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-producer-type',
  templateUrl: './producer-type.component.html',
  styleUrls: ['./producer-type.component.css']
})
export class ProducerTypeComponent implements OnInit {
  @ViewChild('addEditModal', { static: false }) public addEditModal: ModalDirective;

  @ViewChild(TreeComponent, { static: false }) private treeProductCategory: TreeComponent;
  public pageIndex: number = 1;
  public pageSize: number = 5;
  public pageDisplay: number = 10;
  public totalRow: number;
  public filter: string = '';
  public entity: any;
  public producerTypes: any[];
  constructor(private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.getlistpaging();
  }

  //Load data
  public getlistpaging() {
    this._dataService.get('/api/producerType/getlistpaging?pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter.trim())
      .subscribe((response: any) => {
        this.producerTypes = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }

  //Reset filter
  public reset() {
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
    this._dataService.get('/api/producerType/detail/' + id)
      .subscribe((response: any) => {
        this.entity = response;
        this.addEditModal.show();
      }, error => this._dataService.handleError(error));
  }

  //Action delete
  public deleteConfirm(id: string): void {
    this._dataService.delete('/api/producerType/delete', 'id', id)
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
      if (this.entity.ProducerTypeId == undefined) {
        this._dataService.post('/api/producerType/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.getlistpaging();
            this.addEditModal.hide();
            this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/producerType/update', JSON.stringify(this.entity))
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
