import { Action, createReducer, on } from '@ngrx/store';
import { Character } from '../interfaces/disney.interfaces';
import { actionLoadCharactersSuccess, actionSelectCharacter } from '../actions/disney.actions';

export const disneyFeatureKey = 'disney';

export interface State {
  data: Character[];
  count: number;
  totalPages: number;
  nextPage: string;
  selectedCharacter: Character | null;
}

export const initialState: State = {
  data: [],
  count: 0,
  totalPages: 0,
  nextPage: '',
  selectedCharacter: null,
};

export const reducer = createReducer(
  initialState,
  on(actionLoadCharactersSuccess, (state, action) => {
    return {
      ...state,
      data: action.charactersResponse.data,
      count: action.charactersResponse.count,
      totalPages: action.charactersResponse.totalPages,
      nextPage: action.charactersResponse.nextPage,
    }
  }),
  on(actionSelectCharacter, (state, action) => {
    return {
      ...state,
      selectedCharacter: action.character,
    }
  })
);
