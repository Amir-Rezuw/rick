import { QueryClient, dehydrate } from "react-query";

export const env = {
  baseUrl: "https://rickandmortyapi.com/api/",
  reactQueryCacheTime: 50000,
};
export const __ReactQueryConfig = {
  defaultOptions: {
    queries: {
      retryOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
};

export const dehydrateData = (queryClient: QueryClient) => {
  return {
    dehydratedState: dehydrate(queryClient),
  };
};
