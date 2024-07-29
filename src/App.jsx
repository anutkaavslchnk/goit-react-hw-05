import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";


const App = () => {
  return (
    <>
    <header>
      <Navigation></Navigation>
    </header>
    <Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/movies" element={<MoviesPage/>}></Route>
<Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
<Route path="cast" element={<MovieCast/>}></Route>
<Route path="review" element={<MovieReviews/>}></Route>
</Route>
<Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
    
    </>
  )
};

export default App;
