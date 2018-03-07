import {Component, Inject } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId:module.id,
    selector:'app',
    templateUrl: './app.componet.html'
})
export class AppComponet {

    fotos : Array<Object> = [];

    constructor(http:Http){
        http.get('v1/fotos')
        .map(res => res.json())
        .subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        });
    }
};