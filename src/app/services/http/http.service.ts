import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Dispatcher } from './../../dispatcher/app.dispatcher';

@Injectable()
export class HttpService {

    private token: string;
    private baseurl: string = 'https://api.competeleague.com/entity/';

    constructor(
        private http: Http,
        private dispatcher: Dispatcher
    ) {
        this.http = http;
    }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
        // if (token) {
        //     this.dispatcher.dispatch(provideUserId(this.jwtHelper.decodeToken(token).data.id));
        // }
    }

    getToken(){
        return this.token;
    }

    createAuthorizationHeader(headers: Headers) {
        if (this.token) {
            headers.append('token', this.token);
        }
    }

    handleError(err: string) {
        // works but throws error on console... returning e.json() aint correct...
        // this.dispatcher.dispatch(loadFeedback({
        //     title: 'An Error accured!',
        //     type: 'cl-fail',
        //     text: err
        // }));
    }

    get(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseurl + url, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e;
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }

    post(url: string, data: any) {
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.post(this.baseurl + url, data, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }

    put(url: string, data: any) {
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.put(this.baseurl + url, data, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }
    // data:any
    delete(url: string) {
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.baseurl + url, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }

}
