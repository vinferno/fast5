import { createAction, props } from '@ngrx/store';
import { Character, CharactersResponse } from '../interfaces/disney.interfaces';

export const actionLoadCharacters = createAction(
  '[Disney] Load Characters',
);
export const actionLoadCharactersSuccess = createAction(
  '[Disney] Load Characters Success',
  props<{ charactersResponse: CharactersResponse }>()
);
export const actionLoadCharactersFail = createAction(
  '[Disney] Load Characters Fail',
);
export const actionSelectCharacter = createAction(
  '[Disney] Select Character',
  props<{ character: Character }>()
);




