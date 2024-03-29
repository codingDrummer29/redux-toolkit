import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// redux
import { SEARCH_TYPES } from "../common/constant";
import { getAllMovies } from "../store/features/movies/movieSlice";

// components
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const [displayType, setDisplayType] = useState("");

  const movies = useSelector(getAllMovies);

  useEffect(() => {
    if (movies && movies?.type) {
      let _displayType = SEARCH_TYPES.filter(
        (item) => item.value == movies?.type
      );
      setDisplayType(_displayType[0].name);
    } else console.log(movies);
  }, [movies]);

  const _renderCards = () => {
    if (!movies?.data?.length)
      return (
        <>
          <div className="h-full flex justify-center items-center">
            <i>
              Type something, choose a gener and hit <b>Search</b>
            </i>
          </div>
        </>
      );

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols:6 gap-4 rounded w-full overflow-auto">
          {movies?.data.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-1 bg-sky-900 hover:bg-sky-950 hover:shadow-md transition-all hover:scale-110 hover:transition-all"
              >
                <MovieCard data={item} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  // renderMovies = movies

  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <div className="">
          <span className="text-xl">{displayType}</span>
        </div>

        {/* --- Listings | Error --- */}
        {_renderCards()}
      </div>
    </>
  );
};

export default MovieListing;
