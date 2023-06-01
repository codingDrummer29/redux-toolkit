import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const FourZeroFour = lazy(() => import("./pages/FourZeroFour"));
const MovieDetails = lazy(() => import("./components/MovieDetails"));
const Movies = lazy(() => import("./components/MovieListing"));

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" exact element={<Home />}>
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<MovieDetails />} />
            </Route>

            <Route path="*" element={<FourZeroFour />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </>
  );
};

export default App;
