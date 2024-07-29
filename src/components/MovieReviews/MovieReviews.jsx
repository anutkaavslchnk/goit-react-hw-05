import { useEffect, useState } from "react";
import { fetchReview } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews]=useState([]);
  const params=useParams();
  useEffect(()=>{
try{
const getData=async()=>{
  const data=await fetchReview(params.movieId);
  setReviews(data);
}
getData();
}catch(error){
console.log(error);
}
  },[params.movieId])
  if(reviews.length===0){
    return <h3>We don`t have anything</h3>
  }
  return (
    <>

    <ul>

      {reviews.map(item=>(
        <li key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
    </>
  )
};

export default MovieReviews;
