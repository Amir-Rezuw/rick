import { LoaderIcon } from "react-hot-toast";
const Loading = () => {
  return (
    <div
      style={{
        color: "var(--slate-300)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <p> Loading Data...</p>
      <LoaderIcon style={{ width: "1.3rem", height: "1.3rem" }} />
    </div>
  );
};

export default Loading;
