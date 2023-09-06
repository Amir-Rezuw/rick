import { FC, memo } from "react";
import { ICharactersResult } from "../../Types/Server/ICharacters";
import useGetEpisodes from "../Hooks/useGetEpisodes";
import useGetSingleCharacter from "../Hooks/useGetSingleCharacter";
import PlayedEpisodes from "./PlayedEpisodes";
import Loading from "./Shared/Loading";
interface IProps {
  selectedCharacterId?: number;
  addToFavoriteList: (character: ICharactersResult) => void;
  isCharacterInFavoriteList: (id: number) => boolean;
}
const CharacterDetails: FC<IProps> = ({
  selectedCharacterId,
  addToFavoriteList,
  isCharacterInFavoriteList,
}) => {
  const { data: character, status: signleCharacterStatus } =
    useGetSingleCharacter(selectedCharacterId);
  const getPlayedEpisodes = (): string[] => {
    const episdes = character?.episode;

    if (episdes && episdes.length >= 1) {
      return episdes.map((item: string) => item.split("/").at(-1)!);
    }
    return [];
  };
  const { data: playedEpisodesData } = useGetEpisodes(
    getPlayedEpisodes(),
    character?.id
  );

  if (signleCharacterStatus === "loading") return <Loading />;
  if (!character) return <div>No character has been selected</div>;

  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character?.image}
          className="character-detail__img"
        />

        <div className="character-detail__info">
          <h3 className="name">
            <span>{character?.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
            <span>&nbsp;{character?.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character?.status === "Dead" ? "red" : ""}`}
            ></span>
            <span>&nbsp;{character?.status}</span>
            <span> - &nbsp;{character?.species}</span>
          </div>
          <div className="location">
            <p>Last known location:</p>
            <p>{character?.location.name}</p>
          </div>
          <div className="actions">
            {isCharacterInFavoriteList(selectedCharacterId ?? 1) ? (
              <p>This character is in your favorite list ✅</p>
            ) : (
              <button
                onClick={() => addToFavoriteList(character)}
                className="btn btn--primary"
              >
                Add to Favourite
              </button>
            )}
          </div>
        </div>
      </div>

      <PlayedEpisodes episodes={playedEpisodesData?.data} />
    </div>
  );
};

export default memo(CharacterDetails);
