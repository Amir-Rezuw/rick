import { useMemo } from "react";
import { QueryFunctionContext, useQuery } from "react-query";
import { API } from "../../env/Api";
import { env } from "../../env/env";
import { GetEpisodes } from "../../services/GetEpisodes";

const useGetEpisodes = (episodesList: string[], characterId?: number) => {
  const queryKey = useMemo(
    () => [`${API.Episode}${env.baseUrl}${characterId}`],
    [characterId]
  );
  const queryFn = async ({ signal }: QueryFunctionContext) => {
    return await GetEpisodes(episodesList, signal);
  };
  return useQuery({
    queryKey,
    queryFn,
  });
};

export default useGetEpisodes;
