import { Link, useLocation} from "react-router-dom";
import s from './MovieList.module.css'

const MovieList = ({trends=[]}) => {
  const location=useLocation();
  return(
    <div>
        <h2 className={s.title}>Trending today</h2>
    <ul className={s.list}>
{trends.map(trend=>(
    <li className={s.linksfortrennds} key={trend.id}>
<Link  to={`/movies/${trend.id}`.toString()} state={location}>{trend.title}</Link>
</li>
))}
    </ul>
    </div>
  )
};

export default MovieList;
