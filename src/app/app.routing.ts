import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainPageComponent} from './_components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
