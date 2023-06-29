import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDisney from '../reducers/disney.reducer';

const selectDisneyFeature = createFeatureSelector<fromDisney.State>(fromDisney.disneyFeatureKey);


export const selectCharacters = createSelector(
  selectDisneyFeature,
  (state) => state.data
);

export const selectCharaterCount = createSelector(
  selectDisneyFeature,
  (state) => state.count
);

export const selectTotalPages = createSelector(
  selectDisneyFeature,
  (state) => state.totalPages
)

export const selectFirstCharacter = createSelector(
  selectCharacters,
  (characters) => characters[0],
)

export const selectFirstCharactersName = createSelector(
  selectFirstCharacter,
  (character) => character?.name,
)

export const selectSelectedCharacter = createSelector(
  selectDisneyFeature,
  (state) => state.selectedCharacter
)

