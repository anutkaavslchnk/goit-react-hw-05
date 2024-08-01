import { Link, useLocation} from "react-router-dom";
import s from './MovieList.module.css'

const MovieList = ({ trends = [] }) => {
  const location = useLocation();

  return (
    <div>

      <ul className={s.list}>
        {trends.map(trend => (
          <li className={s.linksfortrennds} key={trend.id}>
            <Link to={`/movies/${trend.id}`} state={location}>
              {trend.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
