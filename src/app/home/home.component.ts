import { Component,  } from '@angular/core';
import { HomeStore } from './store/home.store';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeState = this.homeStore.state;

  constructor(private homeStore: HomeStore) { }

}
