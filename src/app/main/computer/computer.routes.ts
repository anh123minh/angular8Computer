import { Routes, RouterModule } from '@angular/router';
import { ComputerComponent } from './computer.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerComponent }
];
export const ComputerRouter = RouterModule.forChild(routes);