import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCreateEditComponent } from './to-do-create-edit/to-do-create-edit.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

const ROUTES: Routes = [
  { path: 'list', component: ToDoListComponent },
  { path: 'create', component: ToDoCreateEditComponent },
  { path: ':id/edit', component: ToDoCreateEditComponent },
  { path: ':id/detail', component: ToDoDetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class TodoRoutingModule { }
