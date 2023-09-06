import { Dispatch, SetStateAction, useEffect } from "react";
import { QueryStatus } from "react-query";
import { requestHadSucceeded } from "../../services/Common/Functions";
export const useServerEffect = <T>(
  setterFunction: Dispatch<SetStateAction<T>>,
  data: T,
  status: QueryStatus,
  dependencies: any[],
  callback?: () => void
) => {
  useEffect(() => {
    if (requestHadSucceeded(status)) {
      setterFunction(data);
      if (callback) {
        callback();
      }
    }
  }, dependencies);
};
