import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actionLoadCharacters, actionLoadCharactersFail, actionLoadCharactersSuccess } from '../actions/disney.actions';
import { DisneyService } from '../services/disney.service';
import { map, mergeMap, catchError, EMPTY, of } from 'rxjs';



@Injectable()
export class DisneyEffects {


  constructor(
    private actions$: Actions,
    private disneyService: DisneyService

    ) {}

  loadCharactersDisney$ = createEffect(() => this.actions$.pipe(
      ofType(actionLoadCharacters),
      mergeMap(() => this.disneyService.getCharacters()
        .pipe(
          map(charactersResponse => (actionLoadCharactersSuccess({ charactersResponse}))),
          catchError( () => of(actionLoadCharactersFail()))
        ))
      )
    );
}
