export interface IEpisodes {
  info: IEpisodesInfo;
  results: IEpisodesResult[];
}
export interface IEpisodesInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface IEpisodesResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
