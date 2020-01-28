import { Component } from '@angular/core';
import { PokeService } from './services/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RetoPokedex';

  constructor(
    private pokeService: PokeService
  ) {}


  getAllPokemons() {
    this.pokeService.getAllPokemons().subscribe(pokemons => {
      console.log(pokemons);
    }
    );
  }
  getPokemon() {
    this.pokeService.getPokemon('ivysaur')
    .subscribe(pokemons => {
      console.log(pokemons);
    });
  }
}

