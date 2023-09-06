import { IRequestFunctionResult } from "../Types/Common";
import { ICharactersResult } from "../Types/Server/ICharacters";
import { API } from "../env/Api";
import RequsetBuilder from "./Common/RequestBuilder";

export const GetSingleCharacter = (
  id?: number,
  signal?: AbortSignal
): IRequestFunctionResult<ICharactersResult> | undefined => {
  if (id)
    return new RequsetBuilder()
      .setUrl(`${API.Character}${id}`)
      .setAbortSignal(signal)
      .ExecuteRequest();
};
