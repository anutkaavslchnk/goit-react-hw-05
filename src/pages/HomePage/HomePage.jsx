import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrend(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <MovieList trends={trend} />
    </>
  );
};

export default HomePage;