import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './../core/core.module';

import { ToDosCreateComponent } from './views/to-dos-create/to-dos-create.component';
import { ToDosListComponent } from './views/to-dos-list/to-dos-list.component';
import { ToDosSearchComponent } from './views/to-dos-search/to-dos-search.component';

const routes: Routes = [
  { path: 'search', component: ToDosSearchComponent },
  { path: 'list', component: ToDosListComponent },
  { path: 'create', component: ToDosCreateComponent }
];

@NgModule({
  declarations: [
    ToDosSearchComponent,
    ToDosListComponent,
    ToDosCreateComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ToDosModule { }
