import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'RODrigo rosaliano';
  valor: number = 1999;
  obj = {
    nombre: 'Rodrigo'
  };


  mostrarNombre(){
    
    console.log(this.nombre);
    this.nombre;
  }

}
