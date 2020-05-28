import { Routes, RouterModule } from '@angular/router';
import { ProducerTypeComponent } from './producer-type.component';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ProducerTypeComponent }
];
export const ProducerTypeRouter = RouterModule.forChild(routes);