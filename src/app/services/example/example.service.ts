import { Injectable }    from '@angular/core';
import { Dispatcher } from './../../dispatcher/app.dispatcher';
import { HttpService } from './../http/http.service';

@Injectable()
export class ExampleService {
    private _entityUrl = 'Game';

    constructor(
        private httpService: HttpService,
        private dispatcher: Dispatcher
    ) { }


    query() {
        let self: any = this;
        this.httpService.get(this._entityUrl).subscribe((res:any)=>{

        });
    }

    get(id: number) {
        let self: any = this;
        this.httpService.get(this._entityUrl + '/' + id).subscribe((res: any) => {

        });
    }

}
