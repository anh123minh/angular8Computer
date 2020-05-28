import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
//import { ComputerHistoryRouter } from './computer-history.routes';
import { UsingReportComponent } from './using-report.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: UsingReportComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    //ComputerHistoryRouter,
    TreeModule,
    ModalModule,
    FormsModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsingReportComponent],
  providers: [DataService, UtilityService]
})
export class UsingReportModule { }
