import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    TopbarComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ], 
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    TopbarComponent,
    NavbarComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
