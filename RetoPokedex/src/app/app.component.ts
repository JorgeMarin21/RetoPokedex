import { Component } from '@angular/core';
import { PokeService } from './services/poke.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RetoPokedex';
  pokes: Observable<any[]>;


  constructor(
    private pokeService: PokeService,
    db: AngularFirestore
  ) {
    this.pokes = db.collection('pokemones').valueChanges();
  }


  getAllPokemons() {
    this.pokeService.getAllPokemons().subscribe(pokemons => {
      console.log(pokemons);
    }
    );
  }
}

