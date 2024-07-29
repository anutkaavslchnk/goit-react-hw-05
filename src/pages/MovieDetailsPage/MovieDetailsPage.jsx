import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchInfoAboutMovie } from "../../services/api";
import clsx from "clsx";
import s from './MovieDetails.module.css';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInfoAboutMovie(movieId);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getData();
  }, [movieId]);

  if (!details) {
    return <h2>Loading...</h2>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${details.poster_path}`;

  return (
    <div>
      <img src={posterUrl} alt={details.title} />
      <h2>{details.title}</h2>
      <p>User Score: {details.vote_average}</p>
      <p>{details.overview}</p>
      <p>Additional info:</p>
      <nav className={s.nav}>

        <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
        <NavLink className={buildLinkClass} to='review'>Review</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetailsPage;
