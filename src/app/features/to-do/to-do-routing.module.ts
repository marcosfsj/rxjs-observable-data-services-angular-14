import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';

const routes: Routes = [
  { path: 'list', component: ToDoListComponent },
  { path: 'create', component: ToDoCreateComponent },
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
