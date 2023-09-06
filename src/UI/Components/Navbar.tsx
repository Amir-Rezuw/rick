import { HeartIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, memo } from "react";

const Navbar = ({
  filterName,
  favoriteCharactersCount,
  toggleFavListModal,
}: {
  filterName: (event: ChangeEvent) => void;
  favoriteCharactersCount: number;
  toggleFavListModal: () => void;
}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>

      <input
        type="text"
        className="text-field"
        onChange={filterName}
      />

      <div className="navbar__result">hello</div>
      <button
        className="heart"
        onClick={toggleFavListModal}
      >
        <HeartIcon className="icon" />
        <span className="badge">{favoriteCharactersCount}</span>
      </button>
    </nav>
  );
};

export default memo(Navbar);
