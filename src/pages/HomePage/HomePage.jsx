import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  
    const [trend, setTrend]=useState([]);
    useEffect(()=>{
try{
const getData=async()=>{
const data=await fetchTrendingMovies();
setTrend(data);
};
getData();
}catch(error){
    console.log(error);
}
    },[]);
  return (
    <>
    <MovieList trends={trend}></MovieList>
    </>
  )
};

export default HomePage;
