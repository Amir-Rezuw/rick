import { useMemo } from "react";
import { QueryFunctionContext, useQuery } from "react-query";
import { API } from "../../env/Api";
import { env } from "../../env/env";
import { GetCharacters } from "../../services/GetCharactersList";
const useGetCharacters = (nameQuery: string) => {
  const queryKey = useMemo(
    () => `${env.baseUrl}/${API.Character}/?name=${nameQuery}`,
    [nameQuery]
  );

  const requstFunction = async ({ signal }: QueryFunctionContext) => {
    return (await GetCharacters(nameQuery, signal)).data;
  };
  return useQuery({
    queryKey: [queryKey],
    queryFn: requstFunction,
    cacheTime: env.reactQueryCacheTime,
  });
};
export default useGetCharacters;
