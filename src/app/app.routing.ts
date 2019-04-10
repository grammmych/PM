import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainPageComponent} from './_components/main-page/main-page.component';
import {AuthComponent} from './_components/auth/auth.component';
import {RegistrationComponent} from './_components/registration/registration.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: ''}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
