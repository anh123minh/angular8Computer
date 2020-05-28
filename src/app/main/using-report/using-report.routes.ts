import { UsingReportComponent } from './using-report.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: UsingReportComponent },
    //{ path: 'revenue', component: RevenueComponent }
];
export const UsingReportRouter = RouterModule.forChild(routes);