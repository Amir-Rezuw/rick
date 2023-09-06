import { TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, memo, useState } from "react";
import { ICharactersResult } from "../../Types/Server/ICharacters";
import { filterById } from "../../services/Common/Functions";
import SingleCharacter from "./SingleCharacter";
interface IProps {
  favList: ICharactersResult[];
}

const FavListModalContent = ({ favList }: IProps) => {
  const [filteredFavList, setFilteredFavList] = useState(favList);
  const filterList = (id: number) => {
    setFilteredFavList(
      filterById<ICharactersResult>(filteredFavList, id.toString())
    );
  };
  return (
    <div>
      {filteredFavList.map((character) => (
        <Fragment key={character.id}>
          <SingleCharacter
            item={character}
            onSelect={() => filterList(character.id)}
          >
            <button className="icon red">
              <TrashIcon />
            </button>
          </SingleCharacter>
        </Fragment>
      ))}
    </div>
  );
};

export default memo(FavListModalContent);
