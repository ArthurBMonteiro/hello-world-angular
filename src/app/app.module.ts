import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { ImagemCachorroComponent } from './imagem-cachorro/imagem-cachorro.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormularioCadastroComponent,
    ImagemCachorroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
