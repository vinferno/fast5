import { Action, createReducer, on } from '@ngrx/store';
import * as PokemonActions from '../actions/pokemon.actions';

export const pokemonFeatureKey = 'pokemon';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(PokemonActions.loadPokemons, state => state),

);
