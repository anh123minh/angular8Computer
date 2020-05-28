import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
import { ComputerTypeRouter } from './computer-type.routes';
import { ComputerTypeComponent } from './computer-type.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerTypeComponent }
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
  declarations: [ComputerTypeComponent],
  providers: [DataService, UtilityService]
})
export class ComputerTypeModule { }
