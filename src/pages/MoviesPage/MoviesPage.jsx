import { useEffect, useState } from "react";
import { fetchSearch } from "../../services/api";
import {useSearchParams } from "react-router-dom";

import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);
  const [movies, setMovies] = useState([]);


  const handleInputChange = (newValue) => {
    setSearch(newValue);
  };

  const handleSearch = () => {
    setSearchParams({ query: search });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies([]);
        return;
      }
      try {
        const data = await fetchSearch(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <input 
        value={search} 
        placeholder="Search" 
        type="search" 
        onChange={e => handleInputChange(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>


            <MovieList trends={movies} />
    </div>
  );
};

export default MoviesPage;