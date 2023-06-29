import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUsers from './users.reducer';
import * as fromDisney from './disney.reducer';
import * as fromPokemon from './pokemon.reducer';


export interface State {

  [fromUsers.usersFeatureKey]: fromUsers.State;
  [fromDisney.disneyFeatureKey]: fromDisney.State;
  [fromPokemon.pokemonFeatureKey]: fromPokemon.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromUsers.usersFeatureKey]: fromUsers.reducer,
  [fromDisney.disneyFeatureKey]: fromDisney.reducer,
  [fromPokemon.pokemonFeatureKey]: fromPokemon.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
