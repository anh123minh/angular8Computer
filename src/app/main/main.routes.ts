import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        //localhost:4200/main
        path: '', component: MainComponent, children: [
            //localhost:4200/main
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //localhost:4200/main/home
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            //localhost:4200/main/user
            { path: 'user', loadChildren: './user/user.module#UserModule' },

            { path: 'role', loadChildren: './role/role.module#RoleModule' },

            { path: 'error', loadChildren: './error/error.module#ErrorModule' },

            { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },

            { path: 'function', loadChildren: './function/function.module#FunctionModule' },

            { path: 'announcement', loadChildren: './announcement/announcement.module#AnnouncementModule' },

            { path: 'computer/computer', loadChildren: './computer/computer.module#ComputerModule' },

            { path: 'computer/computer-type', loadChildren: './computer-type/computer-type.module#ComputerTypeModule' },

            { path: 'computer/producer-type', loadChildren: './producer-type/producer-type.module#ProducerTypeModule' },

            { path: 'computer/deparment-type', loadChildren: './deparment-type/deparment-type.module#DeparmentTypeModule' },

            { path: 'computer/computer-history', loadChildren: './computer-history/computer-history.module#ComputerHistoryModule' },

            { path: 'computer/using-report', loadChildren: './using-report/using-report.module#UsingReportModule' },
        ]
    }

]