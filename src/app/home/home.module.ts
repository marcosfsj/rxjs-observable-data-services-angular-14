import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    BodyComponent,
    TopbarComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
