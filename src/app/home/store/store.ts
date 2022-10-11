import { BehaviorSubject, Observable } from "rxjs";

export class Store<T> {
    state$: Observable<T>;
    private _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject<T>(initialState);
        this.state$ = this._state$.asObservable();
    }

    get state() {
        return this._state$.getValue();
    }

    protected setState(nextState: T): void {
        this._state$.next(nextState);
    }
}