import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosModule } from '../to-dos/to-dos.module';

import { CoreModule } from './../core/core.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'to-dos', loadComponent: () => import('../to-dos/to-dos.module').then(m => m.ToDosModule) },
  { path: 'home', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
    ToDosModule,
  ], 
  exports: [RouterModule]
})
export class HomeModule { }
