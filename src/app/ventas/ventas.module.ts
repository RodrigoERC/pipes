import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { BasicosComponent } from './pages/basicos/basicos.component';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent
  ],  
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
