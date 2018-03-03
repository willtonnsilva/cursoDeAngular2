import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponet} from './app.componet';
import {FotoModule} from './foto/foto.module'

@NgModule({
    imports:[BrowserModule, FotoModule],
    declarations: [AppComponet],
    bootstrap: [AppComponet]
})
export class AppModule{}
