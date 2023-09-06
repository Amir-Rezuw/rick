import { Dispatch, SetStateAction } from "react";
import { IPaginationDispatch } from "../../Types/Common";
import { CountActionType } from "../../env/enums";

export const requestHadSucceeded = (status: string) => {
  if (
    status.toLowerCase() === "loading" ||
    status.toString().toLowerCase() === "error"
  ) {
    return false;
  } else {
    return true;
  }
};
export const paginationReducer = (
  state: {
    current: number;
  },
  action: IPaginationDispatch
) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionType.INCREASE:
      return {
        current: state.current + 1,
      };
    case CountActionType.DECREASE:
      return {
        current: state.current - 1,
      };
    case CountActionType.NONE:
      return {
        current: payload ?? 1,
      };
    default:
      return state;
  }
};
export const stateToggler = (
  setterFunction: Dispatch<SetStateAction<boolean>>
) => {
  setterFunction((perviousValue) => !perviousValue);
};
interface TWithId {
  id: string | number;
}
export const filterById = <T extends TWithId>(list: T[], id: string): T[] => {
  return list.filter((item) => item.id.toString() !== id.toString());
};
