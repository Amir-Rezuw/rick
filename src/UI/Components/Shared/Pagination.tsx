import { Dispatch, Fragment } from "react";
import { IPaginationDispatch } from "../../../Types/Common";
import { CountActionType } from "../../../env/enums";

const Pagination = ({
  dispatch,
  pages,
  currentPage,
}: {
  dispatch: Dispatch<IPaginationDispatch>;
  pages: number[];
  currentPage: number;
}) => {
  return (
    <div className="flex-centered-between">
      <button onClick={() => dispatch({ type: CountActionType.DECREASE })}>
        {"<"}
      </button>
      <div>
        {pages.map((item) => (
          <Fragment key={item}>
            <button
              className={`${currentPage === item && "active"} pagination-btn`}
              onClick={() =>
                dispatch({ type: CountActionType.NONE, payload: item })
              }
            >
              {item}
            </button>
          </Fragment>
        ))}
      </div>
      <button onClick={() => dispatch({ type: CountActionType.INCREASE })}>
        {">"}
      </button>
    </div>
  );
};
export default Pagination;
