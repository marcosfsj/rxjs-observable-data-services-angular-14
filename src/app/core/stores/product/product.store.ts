import { Injectable } from "@angular/core";
import { Store } from "../store";
import { initialState, ProductState } from "./product.state";

@Injectable({
    providedIn: 'root'
})
export class ProductStore extends Store<ProductState> {
    constructor() {
        super(initialState);
    }
}
