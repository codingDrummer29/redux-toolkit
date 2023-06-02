import { useSelector } from "react-redux";
import { getAllMovies } from "../store/features/movies/movieSlice";

import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  // useSlector is accessing the redux will return the state value that is defined for the getAllMovies

  const _renderCards = () => {
    if (!movies.length)
      return (
        <>
          <div className="">
            <span>Sorry, No movies found.</span>
          </div>
        </>
      );

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols:5 w-full overflow-auto">
          {movies.map((item, index) => {
            return (
              <div key={index} className="col-span-1">
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
          <span>Movies</span>
        </div>

        {/* --- Listings | Error --- */}
        {_renderCards()}
      </div>
    </>
  );
};

export default MovieListing;
