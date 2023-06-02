import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedDetails,
  fetchAsyncMovieShowDetails,
  getMovieShowDetails,
} from "../store/features/movies/movieSlice";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getMovieShowDetails);
  const [called, setCalled] = useState(0);

  useEffect(() => {
    if (called === 0) {
      setCalled(called + 1);
      setTimeout(() => {
        dispatch(fetchAsyncMovieShowDetails({ imdbID: params.id }));
      }, 200);
    }

    return () => {
      dispatch(clearSelectedDetails());
    };
  }, [params, dispatch, called]);

  if (!details)
    return (
      <>
        <span>Fetching...</span>
      </>
    );

  return (
    <>
      <div className="flex flex-col gap-4 w-full p-8 overflow-auto">
        {/* ----- Poster | Details ----- */}
        <div className="flex gap-4">
          {/* --- Poster --- */}
          <div className="h-60">
            <img
              className="h-full aspect-auto"
              src={details?.Poster}
              alt={details?.Title}
            />
          </div>

          {/* --- Details --- */}
          <div className="flex flex-col gap-8">
            {/* - Title - */}
            <div className="text-3xl">
              <span>{details?.Title}</span>
            </div>

            {/* - others - */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <span className="font-medium italic">Year: </span>
                <span className="">{details?.Year}</span>
              </div>
              <div className="col-span-1">
                <span className="font-medium italic">Released: </span>
                <span className="">{details?.Released}</span>
              </div>
              <div className="col-span-1">
                <span className="font-medium italic">Director: </span>
                <span className="">{details?.Director}</span>
              </div>
              <div className="col-span-1">
                <span className="font-medium italic">Writer: </span>
                <span className="">{details?.Writer}</span>
              </div>
              <div className="col-span-1">
                <span className="font-medium italic">Runtime: </span>
                <span className="">{details?.Runtime}</span>
              </div>
              <div className="col-span-1">
                <span className="font-medium italic">Genre: </span>
                <span className="">{details?.Genre}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ----- Actors | Plot ----- */}
        <div className="">
          <span className="font-medium italic">Actors: </span>
          <span className="">{details?.Actors}</span>
        </div>
        <div className="">
          <span className="font-medium italic">Plot: </span>
          <span className="">{details?.Plot}</span>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
