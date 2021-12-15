import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-calendar-minus',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-android',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog'
      }
    ];
  
   }

  ngOnInit(): void {
  }

}
