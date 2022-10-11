import { HomeStore } from './../store/home.store';
import { Component } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  homeState$ = this.homeStore.state$;
  screenWidth = 0;
  navbarData = navData;

  constructor(private homeStore: HomeStore) { }

  toggleSidenavOpen(): void {
    this.homeStore.toggleSidenavOpen(window.innerWidth);
  }

  updateOpenFeatureTitle(title: string): void {
    this.homeStore.updateOpenFeatureTitle(title);
  }

}
