import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  pokes: any[];
  constructor(
    private pokeService: PokeService
  ) {
    this.pokeService.listPokeFav().subscribe(poke => {
      this.pokes = poke;
      this.pokes.sort((a, b) => a.pokeIndex - b.pokeIndex);
    });
  }

  remove(id: number) {
    this.pokeService.removePoke(id);
    alert('The pokemon has been removed succesfully.');
  }

  ngOnInit() {
  }
}
