import { HomeStore } from './../store/home.store';
import { Component, OnInit } from '@angular/core';
import { switchMap, of } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  enlargeTopbar$ = this.homeStore.state$.pipe(
    switchMap(homeState => {
      if(homeState.collapsed) {
        return of(true);
      }
      return of(false);
    })
  );

  title$ = this.homeStore.state$.pipe(
    switchMap(homeState => {
      console.log(homeState.openFeatureTitle);
      return homeState.openFeatureTitle;
    })
  );

  constructor(private homeStore: HomeStore) { }

}
