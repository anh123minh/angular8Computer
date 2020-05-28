import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { SignalrService } from '../core/services/signalr.service';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { ComputerTypeModule } from './computer-type/computer-type.module';
import { DeparmentTypeModule } from './deparment-type/deparment-type.module';
import { ProducerTypeModule } from './producer-type/producer-type.module';
import { ComputerModule } from './computer/computer.module';
import { UsingReportModule } from './using-report/using-report.module';
import { ComputerHistoryModule } from './computer-history/computer-history.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes),
    ComputerModule,
    ComputerTypeModule,
    ComputerHistoryModule,
    DeparmentTypeModule,
    ProducerTypeModule,
    UsingReportModule
  ],
  declarations: [MainComponent, SidebarMenuComponent, TopMenuComponent],
  providers: [UtilityService, AuthenService, SignalrService]
})
export class MainModule { }
