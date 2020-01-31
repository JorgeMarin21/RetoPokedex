import { Component, OnInit } from '@angular/core';
import { PokeService } from './../services/poke.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokes: any[];
  constructor(
    private pokeService: PokeService
  ) {
    this.pokeService.getAllPokemons().subscribe(pokemons => {
      this.pokes = pokemons;
    }
    );
  }
  ngOnInit(): void {
  }

/*submit () {
  var letter = "pika";
  this.pokes.filter(letter);
}*/
}
