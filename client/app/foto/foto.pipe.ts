import {Pipe, PipeTransform} from '@angular/core';
import {FotoComponent} from './foto.componet'

@Pipe({
    name: 'filtroPorTitulo'
    
})
export class FotoPipe implements PipeTransform{

  transform(fotos: FotoComponent[], digitado:string){
    digitado= digitado.toLowerCase();
    return fotos.filter(foto => foto.titulo.toLocaleLowerCase().includes(digitado));
  }
};