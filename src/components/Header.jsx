import { useEffect, useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { SEARCH_TYPES } from "../common/constant";
import {
  fetchAsyncMovies,
  clearAllMovies,
} from "../store/features/movies/movieSlice";

const Header = () => {
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
  }, [dispatch, Navigate, search, type]);

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

  const handleClearAll = () => {
    searchInput.current.value = "";
    searchType.current.value = SEARCH_TYPES[0].value;
    dispatch(clearAllMovies());
  };

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 w-screen h-14 bg-sky-900 text-white">
        {/* --- Logo --- */}
        <div className="text-lg font-medium">
          <NavLink to={"/"}>Movie App</NavLink>
        </div>

        <div className="w-60- h-8" style={{ width: "25rem" }}>
          <input
            className=" w-full rounded bg-sky-700 border-sky-700 text-white outline-1 outline-sky-600 p-2"
            placeholder="Type to search..."
            ref={searchInput}
            type="text"
          />
        </div>

        {/* --- Type | Search button | Clear all --- */}
        <div className="flex justify-center- items-center gap-8 h-20">
          <div className="w-48- h-8 flex items-center gap-2">
            <select
              className="rounded bg-sky-900 border border-sky-700 text-shite outline-1 outline-sky-600 px-4 py-2"
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
              className="px-4 py-2 bg-sky-900 border border-sky-700 txt-sm text-white rounded-sm"
            >
              Search
            </button>

            <button
              onClick={handleClearAll}
              className=" min-w-max px-4 py-2 bg-red-600 border border-red-700 rounded-sm txt-sm text-white"
            >
              Clear All
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
