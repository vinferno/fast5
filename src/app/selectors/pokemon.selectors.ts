import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from '../reducers/pokemon.reducer';

export const selectPokemonState = createFeatureSelector<fromPokemon.State>(
  fromPokemon.pokemonFeatureKey
);
