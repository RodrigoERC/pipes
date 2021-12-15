import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Prime Ng
import {ButtonModule} from 'primeng/button';//botones
import {CardModule} from 'primeng/card';//cards
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
