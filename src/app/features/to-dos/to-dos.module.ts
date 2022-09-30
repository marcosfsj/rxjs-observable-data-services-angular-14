import { TodoRoutingModule } from './to-do-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToDosListComponent } from './to-dos-list/to-dos-list.component';
import { ToDosCreateComponent } from './to-dos-create/to-dos-create.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ToDosListComponent,
    ToDosCreateComponent
  ],
  imports: [
    TodoRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ToDosModule { }
