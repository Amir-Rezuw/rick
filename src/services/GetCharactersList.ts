import { IRequestFunctionResult } from "../Types/Common";
import { ICharacters } from "../Types/Server/ICharacters";
import { API } from "../env/Api";
import RequsetBuilder from "./Common/RequestBuilder";
export const GetCharacters = async (
  nameQuery: string,
  signal?: AbortSignal
): IRequestFunctionResult<ICharacters> => {
  return await new RequsetBuilder()
    .setUrl(API.Character)
    .setMethod("get")
    .addQueryParam("name", nameQuery)
    .setAbortSignal(signal)
    .ExecuteRequest();
};
