import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import {FormsModule} from '@angular/forms';
//import { ModalModule } from 'ngx-bootstrap';
const settingRoutes: Routes = [
  //localhost:4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/user/index
  { path: 'index', component: SettingComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoutes),
    TreeModule,
    FormsModule,
    //ModalModule
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
