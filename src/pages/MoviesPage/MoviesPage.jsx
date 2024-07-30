import { useState } from "react";
import { fetchSearch } from "../../services/api";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import s from './MoviePage.module.css';
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);
  const [movies, setMovies] = useState([]);
  const location=useLocation();
  console.log(location)

  const handleInputChange = (newValue) => {
    setSearch(newValue);
  };

  const handleSearch = async () => {
    setSearchParams({ query: search });
    if (!search){
      return setSearchParams({});
    }
    try {
      const data = await fetchSearch(search);
      setMovies(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input 
        value={search} 
        placeholder="Search" 
        type="search" 
        onChange={e => handleInputChange(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink  className={s.linkmov}to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
