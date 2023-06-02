import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import movieApi from "../common/api/movieApi";
import { SEARCH_TYPES } from "../common/constant";
import { fetchAsyncMovies } from "../store/features/movies/movieSlice";
// import { addMovies } from "../store/features/movies/movieSlice";

const Home = () => {
  const [search, setSearch] = useState("harry");
  const [type, setType] = useState(SEARCH_TYPES[0].value);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") Navigate("/movies");
    dispatch(fetchAsyncMovies({ search, type }));

    // fetchMovies();

    // return () => {
    //   setSearch("");
    //   setType("");
    // };
  }, [dispatch, Navigate, search, type]);

  // const fetchMovies = async () => {
  //   const response = await movieApi
  //     .get(`?apiKey=${API_KEY}&s=${search}&type=${type}`)
  //     .catch((error) => console.log("Error for listing: ", error));

  //   if (response && response.data && response.data.Search)
  //     dispatch(addMovies(response.data.Search));
  // };

  return (
    <>
      {/* <Header /> */}
      <main className="px-8 py-4 w-full min-h-body bg-sky-950 text-white">
        <Outlet />
      </main>
    </>
  );
};

export default Home;
