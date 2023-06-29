export interface Character {
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: any[];
  enemies: any[];
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
}

export interface CharactersResponse {
  data: Character[];
  count: number;
  totalPages: number;
  nextPage: string;
}
