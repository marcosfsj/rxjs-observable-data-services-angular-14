import { TodoRoutingModule } from './to-do-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoCreateComponent
  ],
  imports: [
    TodoRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ToDoModule { }
