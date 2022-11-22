import { Component } from '@angular/core'
import { concat } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
 nombre: any = 'Ironman';
 nombreHeroes : string[] = ['Ironman', 'Spiderman', 'Thor', 'Superman'];
 edad: number = 29

  get nombrecapitalizado ():string  {
  return this.nombre.toUpperCase()
}

  obtenerDatos = ():string => {
   return `${ this.nombre } - ${this.edad}`;
  }

 //  cambiarNombre = () => {
 //   let heroe
 //   for( let i = 0; i <= this.nombreHeroes.length; i++ ){
 //      heroe = this.nombreHeroes[i].toString();
 //     return heroe;
 //  }
 //   return heroe
 // }
  // cambiar nombre de manera simple
   cambiarNombre = () => {
      this.nombre = this.nombreHeroes.shift();
     // let heroe = declaro e introdusco el valor eliminado del arrays
     // let heroeArray = []
     // heroeArray.push(heroe);
     // console.log(heroeArray);
   }

   chanceName(): void{
    this.nombre = 'Arturo'
   }

   chanceEdad(){
   this.edad = 24;
   }


}
