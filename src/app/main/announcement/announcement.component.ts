import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  @ViewChild('addEditModal', {static: false}) public addEditModal: ModalDirective;
  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public entity: any;

  public announcements: any[];

  constructor(
    private _dataService: DataService,
    private notificationService: NotificationService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
  }
}