import { EyeIcon } from "@heroicons/react/24/outline";
import { Fragment, memo, useReducer } from "react";
import { ICharactersResult } from "../../Types/Server/ICharacters";
import { NumericEnums } from "../../env/enums";
import { paginationReducer } from "../../services/Common/Functions";
import Pagination from "./Shared/Pagination";
import SingleCharacter from "./SingleCharacter";

interface IProps {
  character: ICharactersResult[];
  onSelectCharacter: (id: number) => void;
}

const CharacterList = ({ character, onSelectCharacter }: IProps) => {
  const [page, dispatch] = useReducer(paginationReducer, { current: 1 });
  const getSliceValues = () => {
    return [
      NumericEnums.CharactersPerList * (page.current - 1),
      NumericEnums.CharactersPerList * page.current,
    ];
  };
  const pages: number[] = [];
  if (character.length > NumericEnums.CharactersPerList) {
    for (
      let i = 1;
      i <= character.length / NumericEnums.CharactersPerList;
      i++
    ) {
      pages.push(i);
    }
  }

  return (
    <div className="characters-list">
      {character.slice(getSliceValues()[0], getSliceValues()[1]).map((item) => (
        <Fragment key={item.id}>
          <SingleCharacter
            item={item}
            onSelect={onSelectCharacter}
          >
            <button className="icon red">
              <EyeIcon />
            </button>
          </SingleCharacter>
        </Fragment>
      ))}
      <Pagination
        dispatch={dispatch}
        currentPage={page.current}
        pages={pages}
      />
    </div>
  );
};

export default memo(CharacterList);
