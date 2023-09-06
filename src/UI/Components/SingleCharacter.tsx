import { ReactNode, memo } from "react";
import { ICharactersResult } from "../../Types/Server/ICharacters";

const SingleCharacter = ({
  item,
  onSelect,
  children,
}: {
  item: ICharactersResult;
  onSelect?: (id: number) => void;
  children?: ReactNode;
}) => {
  return (
    <div
      className="list__item"
      onClick={() => onSelect?.(item.id)}
    >
      <img
        src={item.image}
        alt={item.name}
      />
      <h3 className="name">
        <span>{item.gender === "Male" ? "🧔🏾‍♂️" : "👱🏽‍♀️"}</span>
        <span>{item.name}</span>
      </h3>
      <div className="list-item__info">
        <span
          className={`status ${item.status.toLowerCase() === "dead" && "red"}`}
        ></span>
        <span className="info"> {item.status} </span>
        <span className="info"> - {item.species} </span>
      </div>
      {children}
    </div>
  );
};
export default memo(SingleCharacter);
