import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
//import { ComputerHistoryRouter } from './computer-history.routes';
import { ComputerHistoryComponent } from './computer-history.component';
import { Routes, RouterModule } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerHistoryComponent }
];

@NgModule({
  imports: [
    CommonModule,
    //ComputerHistoryRouter,
    TreeModule,
    ModalModule,
    FormsModule,
    PaginationModule,
    RouterModule.forChild(routes),
    DateInputsModule,
  ],
  declarations: [ComputerHistoryComponent],
  providers: [DataService, UtilityService]
})
export class ComputerHistoryModule { }
