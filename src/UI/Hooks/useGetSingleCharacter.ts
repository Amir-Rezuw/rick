import { useMemo } from "react";
import { QueryFunctionContext, useQuery } from "react-query";
import { API } from "../../env/Api";
import { GetSingleCharacter } from "../../services/GetSingleCharacter";

const useGetSingleCharacter = (id?: number) => {
  const queryKey = useMemo(() => [`${API.Character}${id}`], [id]);
  const requestFn = async ({ signal }: QueryFunctionContext) =>
    (await GetSingleCharacter(id, signal))?.data;
  return useQuery({
    queryKey,
    queryFn: requestFn,
  });
};

export default useGetSingleCharacter;
