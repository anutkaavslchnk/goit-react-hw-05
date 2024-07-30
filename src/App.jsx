import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
const MoviesPage=lazy(()=>import('./pages/MoviesPage/MoviesPage'));
const HomePage=lazy(()=>import('./pages/HomePage/HomePage'));
const MovieCast=lazy(()=>import('./components/MovieCast/MovieCast'));
const MovieReviews=lazy(()=>import('./components/MovieReviews/MovieReviews'));
const MovieDetailsPage=lazy(()=>import('./pages/MovieDetailsPage/MovieDetailsPage'));

const App = () => {
  return (
    <>
    <header>
      <Navigation></Navigation>
    </header>
    <Suspense fallback={<h2>Loading your component!</h2>
    } >
    <Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/movies" element={<MoviesPage/>}></Route>
<Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
<Route path="cast" element={<MovieCast/>}></Route>
<Route path="review" element={<MovieReviews/>}></Route>
</Route>
<Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
    </Suspense>
    </>
  )
};

export default App;
