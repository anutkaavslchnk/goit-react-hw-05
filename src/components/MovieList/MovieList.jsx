import { Link} from "react-router-dom";


const MovieList = ({trends=[]}) => {
  return(
    <div>
        <h2>Trending today</h2>
    <ul>
{trends.map(trend=>(
    <li key={trend.id}>
<Link to={`/movies/${trend.id}`.toString()}>{trend.title}</Link>
</li>
))}
    </ul>
    </div>
  )
};

export default MovieList;
