import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: DashboardComponent}])
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
