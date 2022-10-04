import { TodoRoutingModule } from './to-do-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCreateEditComponent } from './to-do-create-edit/to-do-create-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoCreateEditComponent,
    ToDoDetailComponent
  ],
  imports: [
    TodoRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ToDoModule { }
