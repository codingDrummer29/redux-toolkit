import { Outlet } from "react-router-dom";

// files
import HeroImage from "../assets/images/neom-ihIKOg_lHgI-unsplash.jpg";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main
        className="px-8 py-4 w-full min-h-body bg-sky-950 text-white bg-repeat-round bg-blend-soft-light"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* --- Components --- */}
        <Outlet />
      </main>
    </>
  );
};

export default Home;
