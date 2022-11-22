import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','supeman','acuaman', 'Jehova', 'Gabriel'];
  numero:number = 0;
  heroeBorrado: string = '';

  constructor( ) { }

  ngOnInit(){}


  //////////////////////////borrar atributo de un arrais por index y cantidad

  // borrarHeroe(){
  //   this.heroes.splice(1, 1)
  // }

  borrarHerroeyalmacenar(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

  adicionarNumero(){
    this.numero += 1
  }

  restarNumero(){
    this.numero -= 1
  }

  ////////////////////////////////////////////







}
