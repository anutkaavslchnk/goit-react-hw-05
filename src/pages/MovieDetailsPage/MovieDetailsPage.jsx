import { Suspense, useEffect,useRef,useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchInfoAboutMovie } from "../../services/api";
import clsx from "clsx";
import s from './MovieDetails.module.css';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

const location=useLocation();
const backBtn=useRef(location?.state || '/movies');


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
    <div >
    <Link className={s.back} to={backBtn.current}>Go back</Link>
    <div  className={s.cont}>
    <h2>{details.title}</h2>
      <img className={s.image} src={posterUrl} alt={details.title} />
    
      </div>
      <p><span className={s.span}>User Score:</span> {details.vote_average}</p>
      <p className={s.over}>{details.overview}</p>
     
      <p>Additional info:</p>
      <nav className={s.nav}>

        <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
        <NavLink className={buildLinkClass} to='review'>Review</NavLink>
      </nav>
      <Suspense fallback={<h2>Loading your component!</h2>}>
      <Outlet></Outlet>
      </Suspense>

    </div>
  );
};

export default MovieDetailsPage;
