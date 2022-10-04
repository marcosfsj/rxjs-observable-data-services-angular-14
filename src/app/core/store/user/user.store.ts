import { Injectable } from "@angular/core";
import { Store } from "../store";
import { initialState, UserState } from "./user.state";

@Injectable({
    providedIn: 'root'
})
export class UserStore extends Store<UserState> {
    constructor() {
        super(initialState);
    }
}
