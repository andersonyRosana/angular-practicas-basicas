import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './componentes/heroes/heroes.module';
import { VillanosModule } from './componentes/villanos/villanos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    VillanosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
