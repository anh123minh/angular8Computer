import { Routes, RouterModule } from '@angular/router';
import { DeparmentTypeComponent } from './deparment-type.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DeparmentTypeComponent }
];
export const DeparmentTypeRouter = RouterModule.forChild(routes);