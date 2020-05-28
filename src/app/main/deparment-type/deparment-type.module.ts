import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
import { DeparmentTypeComponent } from './deparment-type.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DeparmentTypeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    //ComputerTypeRouter,
    TreeModule,
    ModalModule,
    FormsModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeparmentTypeComponent],
  providers: [DataService, UtilityService]
})
export class DeparmentTypeModule { }
