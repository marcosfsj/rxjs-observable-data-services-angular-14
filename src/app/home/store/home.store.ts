import { Injectable } from "@angular/core";
import { Store } from "./store";
import { initialState, HomeState } from "./home.state";

@Injectable({
    providedIn: 'root',
})
export class HomeStore extends Store<HomeState> {
    constructor() {
        super(initialState);
    }

    public toggleSidenavOpen(screenWidth: number) {
        this.setState({...this.state, collapsed: !this.state.collapsed });
    }

    public updateOpenFeatureTitle(title: string) {
        this.setState({...this.state, openFeatureTitle: title });
    }
}
