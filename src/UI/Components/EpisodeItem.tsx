import { IEpisodesResult } from "../../Types/Server/IEpisodes";

interface IProps {
  item: IEpisodesResult;
  index: number;
}

const EpisodeItem = ({ item, index }: IProps) => {
  return (
    <li key={item.id}>
      <div>
        {String(index + 1).padStart(2, "0")} - {item.episode} :{" "}
        <strong>{item.name}</strong>
      </div>
      <div className="badge badge--secondary">{item.air_date}</div>
    </li>
  );
};

export default EpisodeItem;
