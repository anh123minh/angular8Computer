import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import {FormsModule} from '@angular/forms';
//import { ModalModule } from 'ngx-bootstrap';
const errorRoutes: Routes = [
  //localhost:4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/user/index
  { path: 'index', component: ErrorComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes),
    TreeModule,
    FormsModule,
    //ModalModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
