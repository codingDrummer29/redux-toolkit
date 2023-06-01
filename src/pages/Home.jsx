import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import movieApi from "../common/api/movieApi";
import { API_KEY, SEARCH_TYPES } from "../common/constant";

const Home = () => {
  const [search, setSearch] = useState("harry");
  const [type, setType] = useState(SEARCH_TYPES[0].value);

  useEffect(() => {
    fetchMovies();

    return () => {
      setSearch("");
      setType("");
    };
  }, []);

  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apiKey=${API_KEY}&s=${search}&type=${type}`)
      .catch((error) => console.log("Error for listing: ", error));

    console.log("List: ", response);
  };

  return (
    <>
      {/* <Header /> */}
      <main className="px-8 py-4 w-full h-body bg-sky-950 text-white">
        <span>Home</span>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
