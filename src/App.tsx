import { ChangeEvent, Fragment, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { ICharactersResult } from "./Types/Server/ICharacters";
import CharacterDetails from "./UI/Components/CharacterDetails";
import CharacterList from "./UI/Components/CharcterList";

import FavListModalcontent from "./UI/Components/FavListModalContent";
import Navbar from "./UI/Components/Navbar";
import Loading from "./UI/Components/Shared/Loading";
import Modal from "./UI/Components/Shared/Modal";
import { useDebouncedValue } from "./UI/Hooks/useDebounce";
import useGetCharacters from "./UI/Hooks/useGetCharacterList";
import { LocalStorageKeys } from "./env/enums";
import { requestHadSucceeded, stateToggler } from "./services/Common/Functions";
const App = () => {
  const [isFavoriteListModalOpen, setIsFavoriteListModalOpen] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState<
    number | undefined
  >(undefined);
  const [nameQuery, setNameQuery] = useState("");
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    ICharactersResult[]
  >(getFavCharactersList());
  const value = useDebouncedValue(nameQuery, 500);
  const { data: allCharacters, status } = useGetCharacters(value);
  const onSelectCharacter = (id: number) => {
    setSelectedCharacterId(id);
  };

  const filterName = (event: ChangeEvent) => {
    setNameQuery((event.target as HTMLInputElement).value);
  };
  function getFavCharactersList(): ICharactersResult[] {
    const stringValue = localStorage.getItem(LocalStorageKeys.CharacterList);
    if (stringValue) {
      return JSON.parse(stringValue);
    } else {
      return [];
    }
  }

  const onAddFavoriteCharacter = (newFavoriteCharacter: ICharactersResult) => {
    setFavoriteCharacters((perviousCharacters) => {
      if (isCharacterInFavoriteList(newFavoriteCharacter.id)) {
        return perviousCharacters;
      } else {
        const newValue = [...perviousCharacters, newFavoriteCharacter];
        localStorage.setItem(
          LocalStorageKeys.CharacterList,
          JSON.stringify(newValue)
        );
        return newValue;
      }
    });
  };
  const isCharacterInFavoriteList = (characterId: number): boolean => {
    return favoriteCharacters.map((item) => item.id).includes(characterId);
  };
  return (
    <Fragment>
      <Toaster />
      <Navbar
        filterName={filterName}
        favoriteCharactersCount={favoriteCharacters.length}
        toggleFavListModal={() => stateToggler(setIsFavoriteListModalOpen)}
      />
      <Modal
        isOpen={isFavoriteListModalOpen}
        closerFunction={() => stateToggler(setIsFavoriteListModalOpen)}
      >
        <FavListModalcontent favList={favoriteCharacters} />
      </Modal>
      {status === "loading" && <Loading />}
      {requestHadSucceeded(status) && (
        <div className="main">
          <CharacterList
            character={allCharacters?.results ?? []}
            onSelectCharacter={onSelectCharacter}
          />
          <CharacterDetails
            selectedCharacterId={selectedCharacterId}
            addToFavoriteList={onAddFavoriteCharacter}
            isCharacterInFavoriteList={isCharacterInFavoriteList}
          />
        </div>
      )}
    </Fragment>
  );
};

export default App;
