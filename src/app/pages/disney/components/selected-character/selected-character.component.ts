import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { selectFirstCharacter, selectFirstCharactersName, selectSelectedCharacter } from 'src/app/selectors/disney.selectors';

@Component({
  selector: 'app-selected-character',
  templateUrl: './selected-character.component.html',
  styleUrls: ['./selected-character.component.scss']
})
export class SelectedCharacterComponent implements OnInit {

  firstCharacterName$ = this.store.select(selectFirstCharactersName);
  selectSelectedCharacter$ = this.store.select(selectSelectedCharacter)
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

}
