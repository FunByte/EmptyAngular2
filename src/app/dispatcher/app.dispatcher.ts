import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { ActionloggerService } from './../services/actionlogger/actionlogger.service';

@Injectable()
export class Dispatcher {

    public dispatcher: Observable<any>;
    private _dispatcher: any;

    constructor(
      private actionloggerService:ActionloggerService
    ) {
        this.dispatcher = new Observable((observer: any) => {
            this._dispatcher = observer;
        }).share();
    }

    dispatch(action: any) {
        this.actionloggerService.addAction(action);
        this._dispatcher.next(action);
    }

}
