import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeComponent } from 'angular-tree-component';
import { DataService } from '../../core/services/data.service';

import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @ViewChild('addEditModal', { static: false}) public addEditModal: ModalDirective;
  @ViewChild('permissionModal', {static: false}) public permissionModal: ModalDirective;
  @ViewChild(TreeComponent, {static: false})
  private treeFunction: TreeComponent;

  public _settingHierachy: any[];
  public _settings: any[];
  public entity: any;
  public editFlag: boolean;
  public filter: string = '';
  public settingId : string;
  public _permission: any[];

  constructor(private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) { }

  ngOnInit() {
  }
}