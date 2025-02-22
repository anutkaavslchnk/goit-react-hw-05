import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../services/api";

const MovieCast = () => {
  const [casts, setCasts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCast(params.movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [params.movieId]);

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <p>{cast.name}</p>
            <p>{cast.character}</p>
            <img 
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} 
              alt={cast.name} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;