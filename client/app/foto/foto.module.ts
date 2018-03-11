import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.componet';
import {FotoPipe} from './foto.pipe';

@NgModule({
    declarations:[FotoComponent, FotoPipe],
    exports: [FotoComponent, FotoPipe]
})
export class FotoModule {}