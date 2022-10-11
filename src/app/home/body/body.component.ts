import { Component } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { HomeStore } from '../store/home.store';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  enlargeBody$ = this.homeStore.state$.pipe(
    switchMap(homeState => {
      if(homeState.collapsed) {
        return of(true);
      }
      return of(false);
    })
  );

  constructor(private homeStore: HomeStore) { }

}
