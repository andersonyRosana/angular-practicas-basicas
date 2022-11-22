import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { VillanoComponent } from './villano/villano.component';

@NgModule({
  declarations: [
    ListadoComponent,
    VillanoComponent
  ],
  exports:[
    ListadoComponent,
    VillanoComponent
  ],
  imports: [
    CommonModule // para implementar las directivas de angular
  ]
})
export class VillanosModule { }
