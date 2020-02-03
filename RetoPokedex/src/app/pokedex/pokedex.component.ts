import { Component, OnInit } from '@angular/core';
import { PokeService } from './../services/poke.service';
import { FormControl } from '@angular/forms';
import { Pokemon } from '../interfaces/pokemon';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokes: any[];
  name = '';
  pokemons = new Array<Pokemon>();

  constructor(
    private pokeService: PokeService
  ) {
    this.pokeService.getAllPokemons().subscribe(pokemons => {
      this.pokes = pokemons;
      this.pokemons = pokemons;
    }
    );
  }
  ngOnInit(): void {
  }

  pokemonFilter(name) {
    console.log(name);
    this.pokemons = this.pokes.filter(pok =>
    pok.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

/*submit () {
  var letter = "pika";
  this.pokes.filter(letter);
}*/
}
