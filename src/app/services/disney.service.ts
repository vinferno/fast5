import { Injectable } from '@angular/core';
import { CharactersResponse } from '../interfaces/disney.interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  constructor(
    private api: ApiService,
  ) { }
  getCharacters() {
    return this.api.get<CharactersResponse>('characters');
  }
}
