import { IRequestFunctionResult } from "../Types/Common";
import { IEpisodesResult } from "../Types/Server/IEpisodes";
import { API } from "../env/Api";
import RequsetBuilder from "./Common/RequestBuilder";

export const GetEpisodes = (
  episodesList: string[],
  signal?: AbortSignal
): IRequestFunctionResult<IEpisodesResult[]> => {
  return new RequsetBuilder()
    .setUrl(`${API.Episode}${episodesList}`)
    .setAbortSignal(signal)
    .ExecuteRequest();
};
