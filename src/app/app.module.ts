import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ROUTING
import {HomeComponent} from "./components/routing_components/home/home.component";
// STORES
import {HomeStore} from "./stores/home/home.store";
// DISPATHCER
import {Dispatcher} from "./dispatcher/app.dispatcher";
// SERVICES
import {HttpService} from "./services/http/http.service";
import {ExampleService} from "./services/example/example.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [

    ],
    providers: [
        HomeStore,
        Dispatcher,
        HttpService,
        ExampleService
    ]
})
export class AppModule { }
