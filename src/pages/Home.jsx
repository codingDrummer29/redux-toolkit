import { useEffect, useState, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import movieApi from "../common/api/movieApi";
import { SEARCH_TYPES } from "../common/constant";
import { fetchAsyncMovies } from "../store/features/movies/movieSlice";
// import { addMovies } from "../store/features/movies/movieSlice";

const Home = () => {
  const [search, setSearch] = useState("harry");
  const [type, setType] = useState("");

  const searchInput = useRef();
  const searchType = useRef();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") Navigate("/movies");

    if (search !== "" && type !== "")
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

  const handleSearch = () => {
    let search = searchInput.current.value ?? "",
      type = searchType.current.value;

    if (search.trim() !== "") {
      if (type.trim() !== "") {
        setSearch(search);
        setType(type);
        dispatch(fetchAsyncMovies({ search, type }));
      } else alert("Please choose a type");
    } else alert("Please enter a name");
  };

  return (
    <>
      {/* <Header /> */}
      <main className="px-8 py-4 w-full min-h-body bg-sky-950 text-white">
        {/* --- Search | type --- */}
        <div className="flex justify-center items-center gap-8 h-20">
          <div className="w-44 h-8">
            <input
              className="rounded bg-sky-900 text-white outline-1 outline-sky-600 p-2"
              placeholder="Type to search..."
              ref={searchInput}
              type="text"
            />
          </div>
          <div className="w-44 h-8 flex items-center gap-2">
            <select
              className="rounded bg-sky-900 text-shite outline-1 outline-sky-600 p-2"
              ref={searchType}
            >
              {SEARCH_TYPES.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-sky-900 border border-sky-700 txt-sm text-white"
            >
              Search
            </button>
          </div>
        </div>

        {/* --- Components --- */}
        <Outlet />
      </main>
    </>
  );
};

export default Home;
