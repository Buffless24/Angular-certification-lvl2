import { Routes } from '@angular/router';
import { CarSelectorComponent } from './pages/car-selector/car-selector.component';
import { CarConfiguratorComponent } from './pages/car-configurator/car-configurator.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/selectCar', pathMatch: 'full' },
    { path: 'selectCar', component: CarSelectorComponent },
    { path: 'configureCar', component: CarConfiguratorComponent },
    { path: 'reviewSummary', component: SummaryPageComponent },
    { path: '**',   component: NotFoundComponent },
];
