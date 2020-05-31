import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
//import { ComputerRouter } from './computer.routes';
import { ComputerComponent } from './computer.component';
import { Routes, RouterModule } from '@angular/router';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerComponent },
    { path: 'detail/:id', component: ComputerDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    //ComputerRouter,
    TreeModule,
    ModalModule,
    FormsModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComputerComponent, ComputerDetailComponent],
  providers: [DataService, UtilityService]
})
export class ComputerModule { }
