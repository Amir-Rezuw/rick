import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { IEpisodesResult } from "../../Types/Server/IEpisodes";
import EpisodeItem from "./EpisodeItem";

interface IProps {
  episodes?: IEpisodesResult[];
}

const PlayedEpisodes = ({ episodes }: IProps) => {
  const [isOldestOnTop, setIsOldestOnTop] = useState(true);

  let sortedEpisodes = [...(episodes?.length ? episodes : [])];

  // console.log(sortedEpisodes);
  if (episodes) {
    if (!isOldestOnTop) {
      sortedEpisodes = [...episodes].sort(
        (a, b) => +new Date(b.created) - +new Date(a.created)
      );
    }
  }

  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes:</h2>
        <button
          onClick={() => setIsOldestOnTop((perviousValue) => !perviousValue)}
        >
          <ArrowUpCircleIcon
            className="icon"
            style={{ rotate: isOldestOnTop ? "0deg" : "180deg" }}
          />
        </button>
      </div>
      <ul>
        {sortedEpisodes?.map((item, index) => (
          <Fragment key={item?.id}>
            <EpisodeItem
              item={item}
              index={index}
            />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default PlayedEpisodes;
