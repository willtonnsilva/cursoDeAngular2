import {Component, Input} from '@angular/core';

@Component({
    selector:'foto',
    templateUrl:'./app/foto/foto.component.html'
})
export class FotoComponent {
    @Input() src: string;
    @Input() titulo: string;
    descricao: String;
};
