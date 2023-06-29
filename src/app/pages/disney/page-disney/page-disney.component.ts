import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionLoadCharacters, actionSelectCharacter } from 'src/app/actions/disney.actions';
import { Character } from 'src/app/interfaces/disney.interfaces';
import { State } from 'src/app/reducers';
import { selectCharacters, selectCharaterCount } from 'src/app/selectors/disney.selectors';

@Component({
  selector: 'app-page-disney',
  templateUrl: './page-disney.component.html',
  styleUrls: ['./page-disney.component.scss']
})
export class PageDisneyComponent implements OnInit {

  characters$ = this.store.select(selectCharacters);
  count$ = this.store.select(selectCharaterCount);
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(actionLoadCharacters())
  }

  selectCharacter(character: Character) {
    this.store.dispatch(actionSelectCharacter({ character }))
  }
}
