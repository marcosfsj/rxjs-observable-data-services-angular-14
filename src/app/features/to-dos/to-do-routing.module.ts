import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosListComponent } from './to-dos-list/to-dos-list.component';
import { ToDosCreateComponent } from './to-dos-create/to-dos-create.component';

const routes: Routes = [
  { path: 'list', component: ToDosListComponent },
  { path: 'create', component: ToDosCreateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class TodoRoutingModule { }
