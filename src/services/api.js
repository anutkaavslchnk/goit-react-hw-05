import axios from "axios"
const url='https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options={
    headers:{
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjY1NDI4ZDhkOTkyNGI4ZWUzZmUwYmM4YjkzZDMyMiIsIm5iZiI6MTcyMjI2MjM5MC42Nzc1NDQsInN1YiI6IjY2YTdhMjZlMDRlMTY4NzFkM2IzMTdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C24AEm0frr8xJ2g7mQVQBQ9o5TtMSN5Nx1WmU7Sjkqs'

    }
}
export const fetchTrendingMovies=async()=>{
    const response=await axios.get(url,options);
    return response.data.results;
}

const optionsInfoAboutMovie = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjY1NDI4ZDhkOTkyNGI4ZWUzZmUwYmM4YjkzZDMyMiIsIm5iZiI6MTcyMjI2MjM5MC42Nzc1NDQsInN1YiI6IjY2YTdhMjZlMDRlMTY4NzFkM2IzMTdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C24AEm0frr8xJ2g7mQVQBQ9o5TtMSN5Nx1WmU7Sjkqs'
    }
  };
  
  export const fetchInfoAboutMovie = async (movie_id) => {
  
  
    const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}`;
    

      const response = await axios.get(urlInfo, optionsInfoAboutMovie);
      return response.data;

}
//fetchCast

export const fetchCast = async (movie_id) => {
  
  
    const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
    

      const response = await axios.get(urlInfo, optionsInfoAboutMovie);
      return response.data.cast;

}
export const fetchReview = async (movie_id) => {
  
  
    const urlInfo = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
    

      const response = await axios.get(urlInfo, optionsInfoAboutMovie);
      return response.data.results;

}
export const fetchSearch = async (query) => {
  const urlInfo = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;

    const response = await axios.get(urlInfo, optionsInfoAboutMovie);
    return response.data.results;
  }