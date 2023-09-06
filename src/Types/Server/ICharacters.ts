export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
export interface ICharacters {
  info: IInfo;
  results: ICharactersResult[];
}
export interface ICharactersResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
