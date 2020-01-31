import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from './../services/poke.service';
import { Pokemon } from '../interfaces/pokemon';
import { PokeHour } from '../interfaces/pokehour';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  poke: Pokemon;
  pokefav: PokeHour;
  dateTime: string;
  pokeNumber: number;
  constructor(
    private ruta: ActivatedRoute,
    private servicio: PokeService,
  ) {
    this.ruta.params.subscribe(params => {
      this.getPokemonId(params['id']);
    });
  }


  ngOnInit() {
  }

  getPokemonId(id: number) {
    this.pokeNumber = id;
    this.servicio.getAllPokemons().subscribe(pokemons => {
      this.poke = pokemons[id];
    });
  }

  addPoke() {
    this.servicio.addPokeFav(this.toPokeHour());
    alert('El pokemon fue agregado a favoritos con éxito');
  }
  toPokeHour() {
    const x: PokeHour = { pokemon: this.poke, horaActual: this.getActualDate(), pokeIndex: this.pokeNumber };
    return x;
  }
  getActualDate() {
    const currentdate = new Date();
    this.dateTime = 'Add to favorites on ' + currentdate.getDate() + '/'
      + (currentdate.getMonth() + 1) + '/'
      + currentdate.getFullYear() + ' at '
      + currentdate.getHours() + ':'
      + currentdate.getMinutes() + ':'
      + currentdate.getSeconds();
    return this.dateTime;
  }
}
