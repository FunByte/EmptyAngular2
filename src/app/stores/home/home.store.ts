import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Dispatcher } from './../../dispatcher/app.dispatcher';
import { Store } from './../template.store';

@Injectable()
export class HomeStore {

    private _accountState: Subject<any> = new Subject();
    public accountState: Observable<any> = this._accountState.asObservable();

    private _store: any;
    private _storeType: string = "AccountStore";

    constructor(
        private dispatcher: Dispatcher
    ) {
        this.init();
    }

    init() {
        this._store = new Store(this.dispatcher, this);
    }

    public dispatch(action: any) {
    }
}
