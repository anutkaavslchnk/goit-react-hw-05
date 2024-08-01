import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import s from './HomePage.module.css';
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
    <h2 className={s.title}>Trending today</h2>
      <MovieList trends={trend} />
    </>
  );
};

export default HomePage;