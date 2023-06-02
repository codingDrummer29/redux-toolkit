/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <NavLink to={`/movies/${data?.imdbID}`}>
          {/* ----- poster ----- */}
          <div className="w-full h-60">
            <img
              className="h-full w-full"
              src={data?.Poster}
              alt={`${data?.Title}`}
            />
          </div>

          {/* ----- Name ----- */}
          <div className="font-medium px-4">
            <span>{data?.Title}</span>
          </div>

          {/* ----- Year ----- */}
          <div className="text-sm px-4 pb-4">
            <span className="font-medium">Year: </span>
            <span className="">{data?.Year}</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default MovieCard;
