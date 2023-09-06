import { AxiosResponse } from "axios";

export interface IKeyValue {
  key: string;
  value: string;
}
export interface IPaginationDispatch {
  type: CountActionType;
  payload?: number;
}
export type IRequestFunctionResult<T> = Promise<AxiosResponse<T>>;
