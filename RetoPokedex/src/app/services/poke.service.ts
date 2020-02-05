import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';
import { PokeHour } from '../interfaces/pokehour';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokeindex } from '../interfaces/pokeindex';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private api = 'https://www.pokemon.com/el';

  private pokesCollection: AngularFirestoreCollection<PokeHour>;
  pokes: Observable<Pokemon[]>;
  pokeHour: Observable<PokeHour[]>;
  private pokeDoc: AngularFirestoreDocument<PokeHour>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.pokesCollection = afs.collection<PokeHour>('pokemones');
    this.pokeHour = this.pokesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PokeHour;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  addPokeFav(poke: PokeHour) {
    this.pokesCollection.add(poke);
  }
  listPokeFav() {
    return this.pokeHour;
  }

  removePoke(id: number) {
    this.pokeDoc = this.afs.doc<PokeHour>(`pokemones/${id}`);
    this.pokeDoc.delete();
  }

  getAllPokemons() {
    const path = `${this.api}/api/pokedex/kalos`;
    return this.http.get<Pokemon[]>(path);
  }



}
