import 'rxjs/add/operator/map';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponet} from './app.componet';
import {FotoModule} from './foto/foto.module'
import {HttpModule} from '@angular/http';
import {PainelModule} from './painel/painel.module';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {routing} from './app.routes';

@NgModule({
    imports:[BrowserModule,
             FotoModule,
             HttpModule,
             PainelModule,
             routing],
    declarations: [AppComponet, CadastroComponent, ListagemComponent ],
    bootstrap: [AppComponet]
})
export class AppModule{}    
