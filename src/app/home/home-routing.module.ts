import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'to-do', loadChildren: () => import('../features/to-do/to-do.module').then(m => m.ToDoModule)},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class HomeRoutingModule { }
