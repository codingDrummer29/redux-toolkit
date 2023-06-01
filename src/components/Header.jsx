import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 w-screen h-14 bg-sky-900 text-white">
        {/* --- Logo --- */}
        <div className="text-lg font-medium">
          <NavLink to={"/"}>Movie App</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
