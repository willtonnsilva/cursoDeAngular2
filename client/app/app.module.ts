import 'rxjs/add/operator/map';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponet} from './app.componet';
import {FotoModule} from './foto/foto.module'
import {HttpModule} from '@angular/http';

@NgModule({
    imports:[BrowserModule, FotoModule, HttpModule],
    declarations: [AppComponet],
    bootstrap: [AppComponet]
})
export class AppModule{}
