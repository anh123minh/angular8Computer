import { Routes, RouterModule } from '@angular/router';
import { ComputerHistoryComponent } from './computer-history.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComputerHistoryComponent }
];
export const ComputerHistoryRouter = RouterModule.forChild(routes);