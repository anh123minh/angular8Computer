import { Routes, RouterModule } from '@angular/router';
import { ComputerTypeComponent } from './computer-type.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerTypeComponent }
];
export const ComputerTypeRouter = RouterModule.forChild(routes);